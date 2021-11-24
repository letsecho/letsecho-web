import React from 'react';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";

import Logo from "../images/logo.svg";
import IPhone from "../images/iphone-hero-bg.svg";
import IPhoneFeature from "../images/iphone-feature-bg-01.svg";
import IPhoneFeature2 from "../images/iphone-feature-bg-02.svg";
import IPhoneSuggestions from "../images/iphone-suggestions.png";
import IPhoneDiscover from "../images/iphone-discover.png";
import IPhoneEvent from "../images/iphone-event.png";
import IPhoneComments from "../images/iphone-comments.png";

import { SocialTags } from './static/SocialTags';
import { Links } from './static/Links';

export const Main = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
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
    							<Links />
    						</ul>
    						<ul className="footer-social-links list-reset">
    							<SocialTags />
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
