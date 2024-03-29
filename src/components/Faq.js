import React from 'react';
import Image from 'next/image'
import NotFoundImage from "../images/Square.svg";
import { DownloadSection } from './DownloadSection';

export const Faq = () => {
  return (
    <main>
      <section className="sectionDisplay">
        <section className="float">
          <Image src={NotFoundImage} alt="Letsecho" />
        </section>
        <article className="centralArticle">
          <h3 className="hostName">Questions and answers</h3>
          <h1 className="eventName">FAQ</h1>
          <h2>What's Letsecho app?</h2>
          <p>Letsecho allows you to make friends spontaneously in your area by attending activities together. Discover and join gatherings with people nearby.</p>
          <p>Create gatherings using curated suggestions based on location, day, and time.</p>
          <h2>Contact Us</h2>
          <p>If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at info@letsechoapp.com.</p>
          <DownloadSection />
        </article>
        <div className="clearfixed"></div>
      </section>
    </main>
  )
}
