import React from 'react';
import PlayStore from "../images/playstore.png";
import AppStore from "../images/appstore.png";

export const EventTemplate = ({eventName = "", hostName = "", eventDescription = "", imageUrl = "", imageName = ""}) => {

  return (
    <section className="sectionDisplay">
      <section className="float">
        <img src={imageUrl} alt={imageName} />
      </section>
      <article className="nonMarginArticle">
        <p className="hostName">Hosted by: {hostName}</p>
        <h2 className="eventName">{eventName}</h2>
        <p>
          {eventDescription}
        </p>
        <p className="joinName">
          <b>Download to join →</b>
        </p>
        <img src={AppStore} alt="AppStore" className="finalBottons" />
        <img src={PlayStore} alt="PlayStore" className="finalBottons" />
      </article>
      <div className="clearfixed"></div>
    </section>
  )
}
