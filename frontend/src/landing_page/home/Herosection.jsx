import React from "react";

function Herosection() {
  return (
    <div className="container px-4 px-md-5 mb-5 mb-md-5 py-5">
      <div className="row text-center">
        <div className="col">
          <img
            src="zerodha-images/homeHero.png"
            alt="Zerodha homepage illustration"
            className="mb-5 img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />

          <h1 className="mt-5">Invest in everything</h1>

          <p>
            Online platform to invest in stocks, derivatives, mutual funds, ETFs,
            bonds, and more.
          </p>

          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary px-4 py-2 fs-5">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
