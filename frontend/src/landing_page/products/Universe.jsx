import React from "react";

const partners = [
  {
    logo: "zerodha-images/smallcaseLogo.png",
    desc: "Thematic investment platform",
  },
  {
    logo: "zerodha-images/smallcaseLogo.png",
    desc: "options tradig platform ",
  },
  {
    logo: "zerodha-images/smallcaseLogo.png",
    desc: "Systematic trading platform",
  },
  {
    logo: "zerodha-images/smallcaseLogo.png",
    desc: "our assest managment venture ",
  },
  {
    logo: "zerodha-images/smallcaseLogo.png",
    desc: "investment research platform",
  },
  {
    logo: "zerodha-images/smallcaseLogo.png",
    desc: "personalized advice on life and health insurance",
  },
];

function Universe() {
  return (
    <div className="container mt-5 text-center">
      <h1>The Zerodha Universe</h1>
      <p className="text-muted mb-4">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row">
        {partners.map((partner, index) => (
          <div key={index} className="col-md-4 p-3">
            <img src={partner.logo} alt="partner logo" className="img-fluid mb-2" />
            <p className="text-muted">{partner.desc}</p>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4 mb-5">
        <button className="btn btn-primary fs-5 px-4">Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
