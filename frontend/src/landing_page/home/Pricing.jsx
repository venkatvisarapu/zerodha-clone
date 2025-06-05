
import React from 'react';

function Pricing() {
  return (
    <div className="container px-4 px-md-5 mb-5 mb-md-5 py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-5 mb-4 mb-md-0">
          <h1 className="mb-3 fw-bold">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency in India. 
            Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none text-primary">
            See pricing <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Spacer (optional) */}
        <div className="col-md-1 d-none d-md-block"></div>

        {/* Pricing Cards */}
        <div className="col-md-6">
          <div className="row text-center">
            <div className="col-6 p-4 border rounded">
              <h1 className="mb-3">₹0</h1>
              <p className="mb-0">
                Free equity delivery <br />
                and direct mutual funds
              </p>
            </div>
            <div className="col-6 p-4 border rounded">
              <h1 className="mb-3">₹20</h1>
              <p className="mb-5">
                Intraday & <br />
                F&O trades
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
