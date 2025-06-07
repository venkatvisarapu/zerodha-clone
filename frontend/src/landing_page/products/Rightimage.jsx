import React from "react";

function Rightimage({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 p-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <a
            href={learnMore}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mt-3"
          >
            Learn More →
          </a>
        </div>
        <div className="col-md-6 p-5">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Rightimage;
