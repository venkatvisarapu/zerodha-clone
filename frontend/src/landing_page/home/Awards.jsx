import React from "react";

function Awards() {
  return (
    <div className="container px-4 px-md-5 mb-5 mb-md-5 py-5">
      <div className="row">
        {/* Left Image */}
        <div className="col-md-6 p-5 text-center">
          <img
            src="zerodha-images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6 p-5 mt-3">
          <h1 className="fw-bold">Largest stock broker in India</h1>
          <p className="mb-5">
            Over 2 million Zerodha clients contribute to more than 15% of all the trading volume in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li><p>Futures and Options</p></li>
                <li><p>Commodity Derivatives</p></li>
                <li><p>Currency Derivatives</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct Mutual Funds</p></li>
                <li><p>Bonds and Gold Securities</p></li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <img
              src="zerodha-images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
