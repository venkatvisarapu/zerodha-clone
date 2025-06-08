import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import { useGeneralContext } from "./GeneralContext";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const { openSellWindow } = useGeneralContext();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/allHoldings`).then((res) => {
      setAllHoldings(res.data || []);
    });
  }, []);

  const totalInvestment = allHoldings.reduce((acc, h) => acc + (h.avg * h.qty), 0);
  const currentValue = allHoldings.reduce((acc, h) => acc + (h.price * h.qty), 0);
  const totalPandL = currentValue - totalInvestment;
  const pAndLPercentage = totalInvestment === 0 ? 0 : (totalPandL / totalInvestment) * 100;

  const barChartData = {
    labels: allHoldings.map(stock => stock.name),
    datasets: [{
        label: 'Current Value (₹)',
        data: allHoldings.map(stock => (stock.price * stock.qty).toFixed(2)),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
    }],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - (stock.avg * stock.qty);
              const pnlClass = pnl >= 0 ? "profit" : "loss";
              return (
                <tr key={stock._id}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={pnlClass}>{pnl.toFixed(2)}</td>
                  <td>
                    <button
                        onClick={() => openSellWindow(stock.name)}
                        style={{ background: '#ff5722', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '3px' }}
                    >Sell</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row" style={{ marginTop: '20px', paddingBottom: '20px', borderBottom: '1px solid #f0f0f0' }}>
        <div className="col">
          <h5>{totalInvestment.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{currentValue.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</h5>
          <p>Current value</p>
        </div>
        <div className="col" style={{ color: totalPandL >= 0 ? 'rgb(72, 194, 55)' : 'rgb(250, 118, 78)' }}>
          <h5>{totalPandL.toLocaleString('en-IN', {minimumFractionDigits: 2})} ({pAndLPercentage.toFixed(2)}%)</h5>
          <p>Overall P&L</p>
        </div>
      </div>

      {/* --- THIS IS THE FIX --- */}
      {/* We wrap the VerticalGraph in a div with specific styles to control its size. */}
      {allHoldings.length > 0 && (
        <div style={{ position: 'relative', margin: 'auto', height: '40vh', width: '80vw', maxWidth: '900px', marginTop: '40px' }}>
            <VerticalGraph data={barChartData} />
        </div>
      )}
    </>
  );
};

export default Holdings;