import React from 'react';

function Education() {
  return (
    <div className="container px-4 px-md-5 mb-5 mb-md-5 py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img src="zerodha-images/education.svg" alt="Zerodha education" className="img-fluid" />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h1 className="mb-3 fw-bold">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none text-primary d-block mb-4">
            Varsity <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>

          <p>
            TradingQ&A, the most active trading and investment community in India for all your market-related queries.
          </p>
          <a href="#" className="text-decoration-none text-primary">
            TradingQ&A <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
