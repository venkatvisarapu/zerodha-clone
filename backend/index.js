require("dotenv").config()
const express=require ("express");
const bodyparser=require("body-parser");
const { HoldingModel } = require("./model/HoldingModel");
const cors=require("cors");
const { PositionModel } = require("./model/PositionModel");
const mongoose=require("mongoose");
const PORT=process.env.PORT||3002;
const url=process.env.mongo_url;
const {OrderModel} = require("./model/OrderModel");

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { UserModel } = require("./model/UserModel");

const app=express();
mongoose.connect(url);
app.use(session({
    secret: "a-very-secret-key-for-your-app", // Change this to a random string
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(UserModel.createStrategy());

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());
app.use(cors({
    origin: ['http://localhost:5174', 'http://localhost:5173'], // Allow both your frontends
    credentials: true // This allows the browser to send cookies (for sessions)
}));

app.use(bodyparser.json());



app.get("/allHoldings",async(req,res)=>{
     let allHoldings=await HoldingModel.find({});
     res.json(allHoldings);
});


app.get("/allPositions",async(req,res)=>{
     let allPositions=await PositionModel.find({});
     res.json(allPositions);
});


app.post("/newOrder",async(req,res)=>{
     let newOrder = new OrderModel({ 
          name:req.body.name,
          qty:req.body.qty,
          price:req.body.price,
          mode:req.body.mode,
    
     });

      newOrder.save();
      res.send("order saved");
});


app.post("/register", async (req, res) => {
    try {
        
        await UserModel.register({ email: req.body.email }, req.body.password);
        res.status(201).send("User registered successfully!");
    } catch (error) {
        console.error("Registration error:", error.message);
        res.status(500).send(error.message);
    }
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  
    res.status(200).json({ message: "Login successful!", user: req.user });
});


app.get("/logout", (req, res) => {
    req.logout((err) => { 
        if (err) {
            return res.status(500).send("Logout error");
        }
        res.status(200).send("Successfully logged out");
    });
});


app.listen(PORT,()=>{
    console.log("app has started");
})