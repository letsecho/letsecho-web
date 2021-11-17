import React from 'react';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import Logo from "../images/logo.svg";
import IPhone from "../images/iphone-hero-bg.svg";
import IPhoneFeature from "../images/iphone-feature-bg-01.svg";
import IPhoneFeature2 from "../images/iphone-feature-bg-02.svg";
import IPhoneSuggestions from "../images/iphone-suggestions.png";
import IPhoneDiscover from "../images/iphone-discover.png";
import IPhoneEvent from "../images/iphone-event.png";
import IPhoneComments from "../images/iphone-comments.png";

export const Main = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <div className="body-wrap boxed-container">
        <header className="site-header text-light">
          <div className="container">
            <div className="site-header-inner">
              <div className="brand header-brand">
                <h1 className="m-0">
                  <a href="/">
                    <img className="header-logo-image" src={Logo} alt="Logo" width="50px"/>
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </header>
        <main>
          <section className="hero text-center text-light">
            <div className="hero-bg"></div>
            <div className="hero-particles-container">
              <canvas id="hero-particles"></canvas>
            </div>
            <div className="container-sm">
              <div className="hero-inner">
                <div className="hero-copy">
                  <h1 className="hero-title mt-0">Letsecho</h1>
                  <p className="hero-paragraph">Discover spontaneous activities, meet people, and make meaningful connections.</p>
                  <div className="hero-cta">
                    <a className="button button-primary button-wide-mobile marginFixer" href="https://apps.apple.com/app/letsecho/id1563740904">Download iOS</a>
                    <a className="button button-primary button-wide-mobile marginFixer" href="https://play.google.com/store/apps/details?id=com.letsecho.letsechoapp">Download Android</a>
                  </div>
                </div>
                <div className="mockup-container">
                  <div className="mockup-bg">
                    <img src={IPhone} alt="iPhone illustration"/>
                  </div>
                  <img className="device-mockup" src={IPhoneEvent} alt="iPhone Hero"/>
                </div>
              </div>
            </div>
          </section>
          <section className="features-extended section">
            <div className="features-extended-inner section-inner">
              <div className="features-extended-wrap">
                <div className="container">
                  <div className="feature-extended">
                    <div className="feature-extended-image">
                      <div className="mockup-bg">
                        <img src={IPhoneFeature} alt="iPhone Feature 01 illustration"/>
                      </div>
                      <img className="device-mockup is-revealing" src={IPhoneDiscover} alt="iPhone Discover"/>
                    </div>
                    <div className="feature-extended-body is-revealing">
                      <h3 className="mt-0 mb-16">Discover</h3>
                      <h4 className="mt-0 mb-16">gatherings happening nearby</h4>
                      <p className="m-0">Check and request to join gatherings nearby. Are you feeling like the party leader? Create your echo!</p>
                    </div>
                  </div>
                  <div className="feature-extended">
                    <div className="feature-extended-image">
                      <div className="mockup-bg">
                        <img src={IPhoneFeature2} alt="iPhone Feature 02 illustration"/>
                      </div>
                      <img className="device-mockup is-revealing" src={IPhoneSuggestions} alt="iPhone Suggestions"/>
                    </div>
                    <div className="feature-extended-body is-revealing">
                      <h3 className="mt-0 mb-16">Suggestion</h3>
                      <h4 className="mt-0 mb-16">time and location based suggestions</h4>
                      <p className="m-0">Not sure what to plan? Get some inspiration for your echos with suggestions.</p>
                    </div>
                  </div>
                  <div className="feature-extended">
                    <div className="feature-extended-image">
                      <div className="mockup-bg">
                        <img src={IPhoneFeature} alt="iPhone Feature 01 illustration"/>
                      </div>
                      <img className="device-mockup is-revealing" src={IPhoneComments} alt="iPhone Comments"/>
                    </div>
                    <div className="feature-extended-body is-revealing">
                      <h3 className="mt-0 mb-16">Comments</h3>
                      <h4 className="mt-0 mb-16">Follow the conversation</h4>
                      <p className="m-0">Comment on gatherings to suggest a time to meet, a location, or just say hi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="site-footer">
    			<div className="footer-particles-container">
    				<canvas id="footer-particles"></canvas>
    			</div>
    			<div className="site-footer-top">
    				<section className="cta section text-light">
    					<div className="container-sm">
    						<div className="cta-inner section-inner">
    							<div className="cta-header text-center">
    								<h2 className="section-title mt-0">Join the wave</h2>
    								<p className="section-paragraph">Subscribe to get Letsecho’s updates to your email address.</p>
    								<div className="cta-cta">
    									<a className="button button-primary button-wide-mobile" href="http://eepurl.com/hBi_1v">Subscribe</a>
    								</div>
    							</div>
    						</div>
    					</div>
    				</section>
    			</div>
    			<div className="site-footer-bottom">
    				<div className="container">
    					<div className="site-footer-inner">
    						<div className="brand footer-brand">
                  <a href="/">
    								<img src={Logo} alt="Letescho logo" width="40px"/>
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
    							<li>
    								<a href="https://www.facebook.com/letsechoapp">
    									<span className="screen-reader-text">Facebook</span>
    									<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    										<path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#FFF"/>
    									</svg>
    								</a>
    							</li>
    							<li>
    								<a href="https://www.instagram.com/letsecho/">
    									<span className="screen-reader-text">Instagram</span>
    									<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="#FFF"/>
    									</svg>
    								</a>
    							</li>
    						</ul>
    						<div className="footer-copyright">&copy; 2021 Letsecho, all rights reserved</div>
    					</div>
    				</div>
    			</div>
        </footer>
      </div>
      <Helmet><script src="main.min.js" type="text/javascript"/></Helmet>
    </>
  )
}
