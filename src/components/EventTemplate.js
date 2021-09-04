import React from 'react';
import PlayStore from "../images/playstore.png";
import AppStore from "../images/appstore.png";

export const EventTemplate = ({eventName = "", hostName = "", eventDescription = "", imageUrl = "", imageName = ""}) => {

  return (
    <>
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
          <div className="stickyPlacer">
            <p className="joinName">
              <b>Download to join <span className="bigArrow">➔</span></b>
            </p>
            <a href="https://apps.apple.com/app/letsecho/id1563740904">
              <img src={AppStore} alt="AppStore" className="finalBottons" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.letsecho.letsechoapp&hl=es_419&gl=US">
              <img src={PlayStore} alt="PlayStore" className="finalBottons" />
            </a>
          </div>
        </article>
      </section>
      <div className="clearfixed"></div>
    </>
  )
}
