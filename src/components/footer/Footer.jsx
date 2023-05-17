import './Footer.scss';
import Button from "../button/Button";

import { Link } from 'react-router-dom';


function Footer() {

  return <div className="footer">
    <div className="container">
      <div className="footer__conversion">
        <p className="footer__conversionUpTitle">Get Started Within Minutes</p>
        <h2 className="footer__conversionTitle">Are You Ready to Protect Your Business?</h2>
        <p className="footer__conversionSubTitle">
          Sign up for our account packages and start generating
          legal agreements suited to your business needs.
        </p>
        <Button addClass={'mainBtn'} style={{ padding: "12px 32px" }} to={'/signup'}>Get started for free</Button>
        <Link className="footer__conversionLink" to="/pricing">Learn more</Link>
      </div>
      <div className="footer__mainLinks">
        <div className="footer__textBlock">
          <h3>iTerms</h3>
          <p>
            More than 140,000 businesses use iTerms. Join our community.
          </p>
        </div>
        <div className="footer__linksBlock">
          <ul className="footer__linkList footer__linkList--row">
            <li>
              <h4>Company</h4>
              <ul className="footer__linkList footer__linkList--column">
                <li><Link to="/">How It Works</Link></li>
                <li><Link to="/">Reviews</Link></li>
                <li><Link to="/">Contact u</Link>s</li>
                <li><Link to="/">Blog</Link></li>
              </ul>
              
            </li>
            <li>
              <h4>Products</h4>
              <ul className="footer__linkList footer__linkList--column">
                <li><Link to="/">Solutions</Link></li>
                <li><Link to="/">Trust & Safety</Link></li>
                <li><Link to="/">Payment</Link></li>
                <li><Link to="/">Help</Link></li>
              </ul>
              
            </li>
            <li>
              <h4>Support</h4>
              <ul className="footer__linkList footer__linkList--column">
                <li><Link to="/">Help</Link></li>
                <li><Link to="/">Pricing</Link></li>
                <li><Link to="/">Payment</Link></li>
                <li><Link to="/">Help</Link></li>
              </ul>
              
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__infoLinks">
        <span>© 2023 Terms Inc. All rights reserved</span>
        <ul className="footer__linkList footer__linkList--row">
          <li><Link to="/pricing">Terms & Conditions</Link></li>
          <li><Link to="/">Privacy Policy</Link></li>
          <li><Link to="/">Disclaimer</Link></li>
          <li><Link to="/">English version</Link></li>
        </ul>
      </div>
    </div>
  </div>

}

export default Footer;