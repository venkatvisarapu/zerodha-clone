import React from 'react';

function Team() {
  return (
    <div className="container">
      <div className="row  mb-5">
        <h1 className="text-center">people</h1>
      </div>

      <div
        className="row  text-muted fs-6"
        style={{ lineHeight: '1.8', fontSize: '1em' }}
      >
        <div className="col py-5 text-center">
          <img
            src="zerodha-images/image.png"
            alt="team member"
            style={{  width: '350px',
                      height: '350px',
                      objectFit: 'cover',
                      borderRadius: '50%' }}
          />
          <h5 className="mt-5">Visarapu Venkat</h5>
          <h4>Founder & CEO</h4>
        </div>

        <div className="col">
          <br />
          <br />
          <br /><br />
          <p>
            Venkat bootstrapped and founded Zerodha in 2010 to overcome <br /> the
            hurdles he faced during his decade-long stint as a trader. Today, <br />
            Zerodha has changed the landscape of the Indian broking industry <br />
          </p>
          <p>He is a member of the GVP Engineering College.</p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{' '}
            <a href="#">Homepage</a> / <a href="#">Homepage</a> /{' '}
            <a href="#">Homepage</a>
          </p>
        </div>
      </div>
    </div> 
  );
}

export default Team;

