import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // Import the SellActionWindow component

// Define the full shape of the context for clarity
const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
  user: null,
  loading: true,
});

export const GeneralContextProvider = (props) => {
  // --- STATE ---
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false); // Add state for sell window
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- AXIOS DEFAULTS ---
  axios.defaults.withCredentials = true;

  // --- EFFECTS ---
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/profile`)
      .then(response => { setUser(response.data); })
      .catch(error => { setUser(null); })
      .finally(() => { setLoading(false); });
  }, []);

  // --- HANDLERS ---
  const handleOpenBuyWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  };
  const handleCloseBuyWindow = () => setIsBuyWindowOpen(false);

  // Add handlers for the sell window
  const handleOpenSellWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsSellWindowOpen(true);
  };
  const handleCloseSellWindow = () => setIsSellWindowOpen(false);


  // --- RENDER ---
  return (
    <GeneralContext.Provider
      value={{
        // Provide ALL the functions to the context consumers
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        user: user,
        loading: loading,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />} {/* Render the sell window when needed */}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
    return useContext(GeneralContext);
}

export default GeneralContext;