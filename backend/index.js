// --- 1. IMPORTS ---
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// --- 2. MODELS ---
const { UserModel } = require("./model/UserModel");
const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { OrderModel } = require("./model/OrderModel");

// --- 3. APP SETUP ---
const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.mongo_url;

// --- 4. MIDDLEWARE ---

// Load URLs from environment variables for production, with fallbacks for local development
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
const DASHBOARD_URL = process.env.DASHBOARD_URL || 'http://localhost:5174';

// Add logging to verify the URLs being used by CORS
console.log("--- CORS Configuration ---");
console.log("Allowed Frontend URL:", FRONTEND_URL);
console.log("Allowed Dashboard URL:", DASHBOARD_URL);
if (!process.env.FRONTEND_URL || !process.env.DASHBOARD_URL) {
    console.warn("⚠️ WARNING: FRONTEND_URL or DASHBOARD_URL not set in environment. Using localhost fallbacks.");
}
console.log("--------------------------");

// Robust CORS options
const corsOptions = {
  origin: [FRONTEND_URL, DASHBOARD_URL],
  credentials: true
};
app.use(cors(corsOptions));

app.use(bodyparser.json());

// This is necessary for Render's proxy to work with secure cookies in production
app.set('trust proxy', 1);

// Environment-aware session cookie configuration
app.use(session({
  secret: "a-very-strong-and-secret-key-that-you-should-change",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
  }
}));

app.use(passport.initialize());
app.use(passport.session());

// --- 5. PASSPORT CONFIGURATION ---
passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

// --- 6. DATABASE CONNECTION ---
mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB connected successfully."))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// --- 7. HELPER MIDDLEWARE ---
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Not authenticated. Please log in." });
}

// --- 8. ROUTES ---

// --- AUTHENTICATION ROUTES ---
app.post("/register", (req, res) => {
    const defaultHoldingsData = [{ name: "RELIANCE.BSE", qty: 10, avg: 2450.75, price: 2960.30 }, { name: "TCS.BSE", qty: 5, avg: 3500.00, price: 3855.45 }];
    const defaultPositionsData = [{ product: "MIS", name: "SBIN.BSE", qty: 50, avg: 740.50, price: 745.80, isLoss: false }];
    const defaultOrdersData = [{ name: "SBIN.BSE", qty: 50, price: 740.50, mode: "BUY", status: "EXECUTED" }, { name: "RELIANCE.BSE", qty: 10, price: 2450.75, mode: "BUY", status: "EXECUTED" }];
    
    UserModel.register({ email: req.body.email }, req.body.password, async (err, user) => {
        if (err) return res.status(400).json({ message: err.message });
        try {
            const userId = user._id;
            const userHoldings = defaultHoldingsData.map(h => ({ ...h, userId }));
            const userPositions = defaultPositionsData.map(p => ({ ...p, userId }));
            const userOrders = defaultOrdersData.map(o => ({ ...o, userId }));
            
            await HoldingModel.insertMany(userHoldings);
            await PositionModel.insertMany(userPositions);
            await OrderModel.insertMany(userOrders);

            user.watchlist = ["RELIANCE.BSE", "TCS.BSE", "INFY.BSE", "HDFCBANK.BSE", "SBIN.BSE", "TATAPOWER.BSE"];
            await user.save();

            res.status(201).json({ message: "User registered successfully!" });
        } catch (seedError) {
            console.error("Error seeding data for new user:", seedError);
            res.status(201).json({ message: "User registered, but failed to seed data." });
        }
    });
});

app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) return res.status(500).json({ message: "Server error during login." });
        if (!user) return res.status(401).json({ message: info?.message || "Invalid credentials" });
        req.logIn(user, (loginErr) => {
            if (loginErr) return res.status(500).json({ message: "Failed to create session." });
            return res.status(200).json({ message: "Login successful", user });
        });
    })(req, res, next);
});


// --- DATA FETCHING & ACTION ROUTES ---
app.get("/api/profile", isLoggedIn, (req, res) => res.json({ email: req.user.email, id: req.user._id }));
app.get("/allHoldings", isLoggedIn, async (req, res) => res.json(await HoldingModel.find({ userId: req.user._id })));
app.get("/allPositions", isLoggedIn, async (req, res) => res.json(await PositionModel.find({ userId: req.user._id })));
app.get("/allOrders", isLoggedIn, async (req, res) => res.json(await OrderModel.find({ userId: req.user._id }).sort({ createdAt: -1 })));
app.get("/api/watchlist", isLoggedIn, (req, res) => res.json(req.user.watchlist || []));

app.post("/api/watchlist/add", isLoggedIn, async (req, res) => {
    const { symbol } = req.body;
    await UserModel.findByIdAndUpdate(req.user._id, { $addToSet: { watchlist: symbol.toUpperCase() } });
    res.status(200).send("Added to watchlist");
});

app.post("/api/watchlist/remove", isLoggedIn, async (req, res) => {
    const { symbol } = req.body;
    await UserModel.findByIdAndUpdate(req.user._id, { $pull: { watchlist: symbol.toUpperCase() } });
    res.status(200).send("Removed from watchlist");
});

app.post("/newOrder", isLoggedIn, async (req, res) => {
    const { name, qty, price, mode } = req.body;
    const userId = req.user._id;

    if (mode === 'BUY') {
        try {
            const order = new OrderModel({ name, qty, price, mode, userId, status: 'EXECUTED' });
            await order.save();
            const existingPosition = await PositionModel.findOne({ name, userId });
            if (existingPosition) {
                const newQty = existingPosition.qty + qty;
                const newAvg = ((existingPosition.avg * existingPosition.qty) + (price * qty)) / newQty;
                existingPosition.qty = newQty;
                existingPosition.avg = newAvg;
                await existingPosition.save();
            } else {
                const newPosition = new PositionModel({ product: 'CNC', name, qty, avg: price, price, userId });
                await newPosition.save();
            }
            res.status(201).json({ message: "Buy order executed!" });
        } catch (error) {
            res.status(500).send("Server error on BUY");
        }
    } else if (mode === 'SELL') {
        try {
            const holding = await HoldingModel.findOne({ name, userId });
            if (!holding) return res.status(404).json({ message: "You do not own this stock." });
            if (holding.qty < qty) return res.status(400).json({ message: `Cannot sell ${qty} shares, you only own ${holding.qty}.` });
            
            const order = new OrderModel({ name, qty, price, mode, userId, status: 'EXECUTED' });
            await order.save();
            
            const remainingQty = holding.qty - qty;
            if (remainingQty === 0) {
                await HoldingModel.deleteOne({ _id: holding._id });
            } else {
                holding.qty = remainingQty;
                await holding.save();
            }
            res.status(200).json({ message: "Sell order executed." });
        } catch (error) {
            res.status(500).json({ message: "Server error on SELL" });
        }
    } else {
        res.status(400).send("Invalid order mode.");
    }
});

app.post("/api/square-off", isLoggedIn, async (req, res) => {
    const { positionId } = req.body;
    const position = await PositionModel.findOne({ _id: positionId, userId: req.user._id });
    if (!position) return res.status(404).json({ message: "Position not found" });
    await PositionModel.deleteOne({ _id: positionId });
    const sellOrder = new OrderModel({ name: position.name, qty: position.qty, price: position.price, mode: "SELL", status: "EXECUTED", userId: req.user._id });
    await sellOrder.save();
    res.status(200).json({ message: "Position squared off" });
});

// --- 9. START SERVER ---
const PORT_TO_USE = process.env.PORT || 3002;
app.listen(PORT_TO_USE, () => {
  console.log(`🚀 Server is running and listening on port ${PORT_TO_USE}`);
});