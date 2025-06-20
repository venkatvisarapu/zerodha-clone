import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import ProtectedRoute from "./ProtectedRoute"; // Import our new component

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      
        <WatchList />
        <div className="content">
          <Routes>
            {/* --- THIS IS THE CRUCIAL CHANGE --- */}
            {/* We create a parent route that is protected. All nested routes
                will only render if the user is authenticated. */}
            <Route element={<ProtectedRoute />}>
              <Route exact path="/" element={<Summary />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/funds" element={<Funds />} />
              <Route path="/apps" element={<Apps />} />
            </Route>
          </Routes>
        </div>
      
    </div>
  );
};

export default Dashboard;