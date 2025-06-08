import React, { useState } from "react";
import axios from "axios";
import { useGeneralContext } from "./GeneralContext"; // Import the custom hook
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  
  // Get the close function from our context using the hook
  const { closeBuyWindow } = useGeneralContext();

  const handleBuyClick = () => {
    // Ensure credentials (session cookie) are sent with the request
    axios.defaults.withCredentials = true;

    axios.post(`${import.meta.env.VITE_API_URL}/newOrder`, {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    })
    .then(response => {
        console.log("Order placed successfully:", response.data);
        alert(`Successfully placed BUY order for ${stockQuantity} ${uid}!`);
        closeBuyWindow(); // Close window ONLY on success
        window.location.reload(); // Refresh to see updated positions/orders
    })
    .catch(error => {
        console.error("Failed to place order:", error);
        if (error.response && error.response.status === 401) {
          alert("Your session has expired. Please log in again.");
          window.location.href = `${import.meta.env.VITE_LANDING_PAGE_URL}/login`;
        } else {
          alert(`Error: ${error.response?.data?.message || "Could not place the order."}`);
        }
    });
  };

  const handleCancelClick = () => {
    // This also uses the function from the context
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
        <div className="header">
            <h3>Buy {uid}</h3>
        </div>
      <div className="regular-order" style={{padding: '20px'}}>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(parseInt(e.target.value, 10))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(parseFloat(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required: ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;