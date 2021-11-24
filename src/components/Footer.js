import React from 'react';
import Image from "../images/logo.svg";
import { SocialTags } from './static/SocialTags';
import { Links } from './static/Links';

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
              <Links />
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
