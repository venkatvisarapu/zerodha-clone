import React from 'react';

function Footer() {
  return (
   <div style={{ backgroundColor: 'rgb(240,240,240)' }}>
    <footer className="container py-5 border-top" >
      <div className="row gy-4">
        {/* Logo & Copyright */}
        <div className="col-md-3">
          <img src="zerodha-images/logo.svg" alt="Zerodha Logo" style={{ width: '50%' }} />
          <p className="text-muted mt-3">
            &copy; 2010 - 2025, Zerodha Broking Ltd. <br />
            All rights reserved.
          </p>
        </div>

        {/* Company Links */}
        <div className="col-md-3">
          <h6 className="fw-semibold">Company</h6>
          <ul className="list-unstyled">
            <li><a href="#">About</a></li>
            <li><a href="#">Philosophy</a></li>
            <li><a href="#">Press & media</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Zerodha Cares (CSR)</a></li>
            <li><a href="#">Zerodha.tech</a></li>
            <li><a href="#">Open source</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="col-md-3">
          <h6 className="fw-semibold">Support</h6>
          <ul className="list-unstyled">
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Support portal</a></li>
            <li><a href="#">How to file a complaint?</a></li>
            <li><a href="#">Status of your complaints</a></li>
            <li><a href="#">Bulletin</a></li>
            <li><a href="#">Circular</a></li>
            <li><a href="#">Z-Connect blog</a></li>
            <li><a href="#">Downloads</a></li>
          </ul>
        </div>

        {/* Account Links */}
        <div className="col-md-3">
          <h6 className="fw-semibold">Account</h6>
          <ul className="list-unstyled">
            <li><a href="#">Open demat account</a></li>
            <li><a href="#">Minor demat account</a></li>
            <li><a href="#">NRI demat account</a></li>
            <li><a href="#">Commodity</a></li>
            <li><a href="#">Dematerialisation</a></li>
            <li><a href="#">Fund transfer</a></li>
            <li><a href="#">MTF</a></li>
            <li><a href="#">Referral program</a></li>
          </ul>
        </div>
      </div>

      <hr className="my-4" />

      {/* Legal Disclaimer */}
      <div className="text-muted small">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633. CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019. Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238. Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
        </p>
        <p>
          For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, for DP-related to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>. Please read the Risk Disclosure Document as prescribed by SEBI | ICF.
        </p>
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Required: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective communication, speedy grievance redressal.
        </p>
        <p>
          Smart Online Dispute Resolution | Grievances Redressal Mechanism.
        </p>
        <p>
          Investments in securities market are subject to market risks. Read all related documents carefully before investing.
        </p>
        <p>
          Attention investors:
          <br /> Brokers can accept securities as margin only via pledge in the depository system w.e.f Sept 1, 2020.
          <br /> Update your email and phone number with your broker/DP and receive OTP from the depository to create pledge.
          <br /> Check your holdings in the consolidated account statement issued by NSDL/CDSL monthly.
        </p>
        <p>
          "Prevent unauthorised transactions. Update your mobile/email with your broker. Get transaction info from Exchange daily. Issued in the interest of investors."
          <br />KYC is a one-time exercise through a SEBI registered intermediary.
        </p>
        <p>
          Dear Investor: For IPOs, do not issue cheques. Use your bank account details in the application to authorize payment. Funds remain in your bank if not allotted. We don't offer stock tips or trading services. If someone claims to represent Zerodha for these, please create a ticket.
        </p>
      </div>
     
    </footer>
     </div>
  );
}

export default Footer;
