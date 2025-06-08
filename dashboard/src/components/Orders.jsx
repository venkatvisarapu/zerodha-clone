import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/allOrders`)
      .then(res => { setOrders(res.data); })
      .catch(err => { console.error("Failed to fetch orders", err); })
      .finally(() => { setLoading(false); });
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'EXECUTED': return { color: 'green', fontWeight: 'bold' };
      case 'PENDING': return { color: 'orange', fontWeight: 'bold' };
      case 'CANCELLED': return { color: 'grey', textDecoration: 'line-through' };
      default: return {};
    }
  };

  if (loading) return <div>Loading orders...</div>;

  return (
    <div className="orders">
      <h3 className="title">Orders ({orders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Status</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td style={{ color: order.mode === 'BUY' ? 'blue' : 'red' }}>{order.mode}</td>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price.toFixed(2)}</td>
                <td style={getStatusStyle(order.status)}>{order.status}</td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;