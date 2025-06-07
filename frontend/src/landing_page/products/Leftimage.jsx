import React from "react";

function Leftimage({
  imageurl,
  productname,
  product_des,
  trydemo,
  learnmore,
  googleplay,
  appstore,
}) {
  return (
    <div className="container mb-5 p-5">
      <div className="row align-items-center">
        <div className="col-md-6 p-5">
          <img src={imageurl} alt={productname} className="img-fluid" />
        </div>
        <div className="col-md-6 p-5 mt-5">
          <h1>{productname}</h1>
          <p>{product_des}</p>
          <div className="mb-3">
            <a href={trydemo} target="_blank" rel="noopener noreferrer" className="me-4 text-decoration-none">
              Try Demo →
            </a>
            <a href={learnmore} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              Learn More →
            </a>
          </div>
          <div className="mt-3">
            <a href={googleplay} target="_blank" rel="noopener noreferrer">
              <img src="zerodha-images/googlePlayBadge.svg" alt="Google Play" style={{ height: "40px" }} />
            </a>
            <a href={appstore} target="_blank" rel="noopener noreferrer" className="ms-4">
              <img src="zerodha-images/appstoreBadge.svg" alt="App Store" style={{ height: "40px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftimage;
