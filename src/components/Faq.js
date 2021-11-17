import React from 'react';
import { useEffect } from 'react';

import NotFoundImage from "../images/Square.svg";
import { DownloadSection } from './DownloadSection';

export const Faq = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main>
      <section className="sectionDisplay">
        <section className="float">
          <img src={NotFoundImage} alt="Letsecho" />
        </section>
      </section>
      <article className="nonMarginArticle">
        <h1 className="specialHeadline">FAQ</h1>
        <h2>What's Letsecho app?</h2>
        <p>Letsecho allows you to make friends spontaneously in your area by attending activities together. Discover and join gatherings with people nearby.</p>
        <p>Create gatherings using curated suggestions based on location, day, and time.</p>
        <h2>Contact Us</h2>
        <p>If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at info@letsechoapp.com.</p>
        <DownloadSection />
      </article>
      <div className="clearfixed"></div>
    </main>
  )
}
