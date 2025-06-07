import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        {/* Left Column */}
        <div className="col-md-8 p-4 text-start">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul className="text-muted" style={{ lineHeight: "2.2", fontSize: "14px" }}>
            <li>Call & Trade and RMS auto-squareoff: Additional ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical contract notes, if requested, are ₹20 per note + courier charges.
            </li>
            <li>
              For NRI (non-PIS): 0.5% or ₹100 per executed equity order (whichever is lower).
            </li>
            <li>
              For NRI (PIS): 0.5% or ₹200 per executed equity order (whichever is lower).
            </li>
            <li>
              If account has a debit balance: ₹40 per order instead of ₹20.
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="col-md-4 p-4">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
