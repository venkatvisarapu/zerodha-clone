import React from "react";
import { GeneralContextProvider } from "./GeneralContext";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <GeneralContextProvider>
      <TopBar />
      <Dashboard />
    </GeneralContextProvider>
  );
};

export default Home;