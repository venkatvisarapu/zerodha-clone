import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      {/* Top Bar */}
      <div className="p-4" id="supportWrapper">
        <h4 className="m-0">Support Portal</h4>
        <a href="#">Track tickets</a>
      </div>

      {/* Main Row */}
      <div className="row px-5 py-4">
        {/* Left Column */}
        <div className="col-md-6">
          <h2 className="fs-3 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input
            className="form-control mb-4"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
          />
          <div className="d-flex flex-wrap gap-3">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <h2 className="fs-3 mb-3">Featured</h2>
          <ol>
            <li>
              <a href="#">Surveillance measure on scripts – June 2025</a>
            </li>
            <li>
              <a href="#">Offer for sale (OFS) – June 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
