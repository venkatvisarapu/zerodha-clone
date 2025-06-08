import React, { useState } from "react";
import axios from "axios";
import { useGeneralContext } from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const { closeSellWindow } = useGeneralContext();

  const handleSellClick = () => {
    if (!window.confirm(`Are you sure you want to sell ${stockQuantity} share(s) of ${uid}?`)) {
        return;
    }
    axios.defaults.withCredentials = true;
    axios.post(`${import.meta.env.VITE_API_URL}/newOrder`, {
      name: uid,
      qty: stockQuantity,
      price: 0,
      mode: "SELL",
    })
    .then(response => {
        alert(`Sell order for ${stockQuantity} ${uid} placed successfully!`);
        closeSellWindow();
        window.location.reload();
    })
    .catch(error => {
        console.error("Failed to place SELL order:", error);

         if (error.response && error.response.status === 401) {
                 alert("Your session has expired. Please log in again.");
                  // --- THIS IS THE FIX ---
                  window.location.href = `${import.meta.env.VITE_LANDING_PAGE_URL}/login`;
           } 
         else {
                   alert(`Error: ${error.response?.data?.message || "Could not place the sell order."}`);
           }




        
    });
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="header" style={{ background: '#ff5722' }}>
            <h3>Sell {uid}</h3>
        </div>
        <div className="inputs" style={{ padding: '20px' }}>
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
          <p>You are placing a market sell order from your holdings.</p>
        </div>
      </div>
      <div className="buttons">
        <span></span>
        <div>
          <button className="btn" style={{ background: '#ff5722' }} onClick={handleSellClick}>Sell</button>
          <button className="btn btn-grey" onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;