import React from 'react';

function Stats() {
  return (
    <div className="container px-4 px-md-5 mb-5 mb-md-5 py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 pe-lg-5">
          <h1 className="fs-2 fw-bold mb-5">Trust with confidence</h1>

          <h4 className="fw-semibold">Customer-first always</h4>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange volumes in India.
          </p>

          <h4 className="fw-semibold mt-5">No spam or gimmicks</h4>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
          </p>

          <h4 className="fw-semibold mt-5">The Zerodha universe</h4>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h4 className="fw-semibold mt-5">Do better with money</h4>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src="zerodha-images/ecosystem.png"
            alt="Zerodha Ecosystem"
            className="img-fluid"
            style={{ maxWidth: '90%' }}
          />
          <div className="text-center mt-4">
            <a href="#" className="mx-4 text-decoration-none text-primary">
              explore <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-decoration-none text-primary">
              try kite <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
