import React from 'react';
import NotFoundImage from "../images/Square.svg";
import { DownloadSection } from './DownloadSection';

export const NotFoundEvent = () => {
  return (
    <>
      <section className="sectionDisplay">
        <section className="float">
          <img src={NotFoundImage} alt="Letsecho Not Found" />
        </section>
        <article className="nonMarginArticle">
          <p className="hostName">Event id is not valid</p>
          <h2 className="eventName">Event not found</h2>
          <p>
            The event is not available. Download the Letsecho app to find and create more gatherings.
          </p>
          <DownloadSection />
        </article>
      </section>
      <div className="clearfixed"></div>
    </>
  )
}
