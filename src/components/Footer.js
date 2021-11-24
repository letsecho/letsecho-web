import React from 'react';
import { Link } from 'react-router-dom';
import Image from "../images/logo.svg";
import { SocialTags } from './static/SocialTags';

export const Footer = () => {
  return (
    <footer>
      <div className="site-footer-bottom">
        <div className="container">
          <div className="site-footer-inner">
            <div className="brand footer-brand">
              <a href="/">
                <img src={Image} alt="Letescho logo" width="40px"/>
              </a>
            </div>
            <ul className="footer-links list-reset">
              <li>
                <a href="mailto:info@letsechoapp.com">Contact</a>
              </li>
              <li>
                <Link className="navbar-brand" to="/faq">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="/privacy">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="/terms">
                  Terms
                </Link>
              </li>
            </ul>
            <ul className="footer-social-links list-reset">
              <SocialTags color="#000"/>
            </ul>
            <div className="footer-copyright">&copy; 2021 Letsecho, all rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
