import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      {/* Pricing Features */}
      <div className="row p-5 mt-5 text-center">
        <div className="col-md-4 p-4">
          <img src="zerodha-images/pricingEquity.svg" alt="Free equity delivery" className="mb-3" />
          <h2 className="fs-4">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
          </p>
        </div>

        <div className="col-md-4 p-4">
          <img src="zerodha-images/intradayTrades.svg" alt="Intraday and F&O trades" className="mb-3" />
          <h2 className="fs-4">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order across equity, currency, and commodity.
          </p>
        </div>

        <div className="col-md-4 p-4">
          <img src="zerodha-images/pricingEquity.svg" alt="Free direct mutual funds" className="mb-3" />
          <h2 className="fs-4">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
