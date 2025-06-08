


import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useGeneralContext } from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import { MoreHoriz, DeleteForever, BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"; // Import arrow icons
import { DoughnutChart } from "./DoughnoutChart";
import "./../index.css"; // --- FIX ---: Import the main CSS file that styles the watchlist

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchWatchlist = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/watchlist`)
      .then(res => setWatchlist(res.data || []))
      .catch(console.error);
  };

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const handleAddStock = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
    axios.post(`${import.meta.env.VITE_API_URL}/api/watchlist/add`, { symbol: searchTerm })
      .then(() => {
        setSearchTerm("");
        fetchWatchlist();
      })
      .catch(console.error);
  };

  const handleRemoveStock = (symbolToRemove) => {
    axios.post(`${import.meta.env.VITE_API_URL}/api/watchlist/remove`, { symbol: symbolToRemove })
      .then(() => fetchWatchlist())
      .catch(console.error);
  };

  const chartData = {
    labels: watchlist,
    datasets: [{
      label: 'Watchlist Allocation',
      data: watchlist.map(() => Math.floor(Math.random() * 5000) + 1000),
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)', 'rgba(255, 159, 64, 0.7)',
      ],
      borderColor: '#fff',
      borderWidth: 1,
    }]
  };

  return (
    <div className="watchlist-container">
      <form onSubmit={handleAddStock} className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
          placeholder="Add symbol (e.g. INFY.BSE)"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </form>

      <ul className="list">
        {watchlist.length > 0 ? (
          watchlist.map((stockSymbol) => (
            <WatchListItem
              key={stockSymbol}
              symbol={stockSymbol}
              onRemove={handleRemoveStock}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: 'grey', marginTop: '20px' }}>
            Your watchlist is empty. Add a stock to begin.
          </p>
        )}
      </ul>
      
      {watchlist.length > 0 && (
          <div style={{ padding: '20px' }}>
              <DoughnutChart data={chartData} />
          </div>
      )}
    </div>
  );
};


// --- WatchListItem Sub-Component (Corrected) ---

const WatchListItem = ({ symbol, onRemove }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);
  const { openBuyWindow } = useGeneralContext();

  const isDown = Math.random() < 0.5;
  const price = (Math.random() * 3000).toFixed(2);
  const percent = `${(isDown ? -1 : 1) * (Math.random() * 5).toFixed(2)}%`;

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={isDown ? "down" : "up"}>{symbol}</p>
        {/* --- FIX ---: The itemInfo div was missing. It contains the price and percentage. */}
        <div className="itemInfo">
          <span className="percent">{percent}</span>
           {isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{price}</span>
        </div>
      </div>
      {showWatchlistActions && (
        <span className="actions">
          <span>
            <Tooltip title="Buy (B)" placement="top" arrow>
              <button className="buy" onClick={() => openBuyWindow(symbol)}>Buy</button>
            </Tooltip>
            <Tooltip title="Remove" placement="top" arrow>
              {/* --- FIX ---: Added fontSize="medium" to make icons larger */}
              <button className="sell" onClick={() => onRemove(symbol)}>
                <DeleteForever fontSize="medium" />
              </button>
            </Tooltip>
            <Tooltip title="Chart" placement="top" arrow>
                <button className="action"><BarChartOutlined fontSize="medium" /></button>
            </Tooltip>
            <Tooltip title="More" placement="top" arrow>
              <button className="action"><MoreHoriz fontSize="medium" /></button>
            </Tooltip>
          </span>
        </span>
      )}
    </li>
  );
};

export default WatchList;