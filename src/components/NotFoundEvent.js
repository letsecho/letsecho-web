import React from 'react';
import PlayStore from "../images/playstore.png";
import AppStore from "../images/appstore.png";
import NotFoundImage from "../images/Square.svg";

export const NotFoundEvent = () => {
  return (
    <>
      <section className="sectionDisplay">
        <section className="notFoundImage">
          <img src={NotFoundImage} alt="Letsecho Not Found" />
        </section>
        <article className="nonMarginArticle">
          <p className="hostName">Event id is not valid</p>
          <h2 className="eventName">Event not found</h2>
          <p>
            The event is not available. Download the Letsecho app to find and create more gatherings.
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
