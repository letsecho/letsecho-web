import React from 'react';
import NotFoundImage from "../images/Square.svg";
import { DownloadSection } from './DownloadSection';

export const LoadingSection = () => {
  return (
    <>
      <section className="sectionDisplay">
        <section className="float">
          <img src={NotFoundImage} alt="Loading..." />
        </section>
        <article className="centralArticle">
          <h1 className="eventName">Loading</h1>
          <p>
            The current event is loading. To join the event and participate in the conversation, please download the Letsecho app.
          </p>
          <DownloadSection />
        </article>
      </section>
      <div className="clearfixed"></div>
    </>
  )
}
