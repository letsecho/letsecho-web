import React from 'react';
import NotFoundImage from "../images/Square.svg";
import { DownloadSection } from './DownloadSection';

export const EventTemplate = ({eventName = "", hostName = "", eventDescription = "", imageUrl = false, imageName = "Letsecho"}) => {
  return (
    <>
      <section className="sectionDisplay">
        <section className="float">
          <img src={(imageUrl) ? imageUrl: NotFoundImage} alt={imageName} />
        </section>
        <article className="centralArticle">
          <h3 className="hostName">Hosted by: {hostName}</h3>
          <h1 className="eventName">{eventName}</h1>
          <p>
            {eventDescription}
          </p>
          <DownloadSection />
        </article>
        <div className="clearfixed"></div>
      </section>
    </>
  )
}
