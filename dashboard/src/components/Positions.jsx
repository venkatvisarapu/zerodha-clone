import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  const fetchPositions = () => {
      axios.get(`${import.meta.env.VITE_API_URL}/allPositions`).then((res) => {
        setAllPositions(res.data);
      });
  }

  useEffect(() => {
    fetchPositions();
  }, []);

  const handleSquareOff = (positionId) => {
      if(window.confirm("Are you sure you want to square off this position?")) {
          axios.post(`${import.meta.env.VITE_API_URL}/api/square-off`, { positionId })
            .then(res => {
                alert(res.data.message);
                fetchPositions();
            })
            .catch(err => {
                alert("Error: Could not square off position.");
            });
      }
  };

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock) => (
              <tr key={stock._id}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={((stock.price - stock.avg) * stock.qty) >= 0 ? 'profit' : 'loss'}>
                    {((stock.price - stock.avg) * stock.qty).toFixed(2)}
                </td>
                <td>
                  <button
                    onClick={() => handleSquareOff(stock._id)}
                    style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '3px' }}
                  >Square Off</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;