import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // --- THIS IS THE FIX ---
    axios.get(`${import.meta.env.VITE_API_URL}/allHoldings`)
      .then(res => setHoldings(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const totalInvestment = holdings.reduce((acc, h) => acc + (h.avg * h.qty), 0);
  const currentValue = holdings.reduce((acc, h) => acc + (h.price * h.qty), 0);
  const totalPandL = currentValue - totalInvestment;
  const pAndLPercentage = totalInvestment === 0 ? 0 : (totalPandL / totalInvestment) * 100;

  if (loading) return <div>Loading Summary...</div>;

  return (
    <>
      <div className="section">
        <span><p>Holdings ({holdings.length})</p></span>
        <div className="data">
          <div className="first">
            <h3 className={totalPandL >= 0 ? "profit" : "loss"}>
              {totalPandL.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              <small> {pAndLPercentage.toFixed(2)}%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />
          <div className="second">
            <p>Current Value <span>{currentValue.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></p>
            <p>Investment <span>{totalInvestment.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;