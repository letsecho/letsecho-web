import React from 'react';
import PlayStore from "../images/playstore.png";
import AppStore from "../images/appstore.png";
import NotFoundImage from "../images/Square.svg";

export const LoadingSection = () => {
  return (
    <>
      <section className="sectionDisplay">
        <section className="float">
          <img src={NotFoundImage} alt="Loading..." />
        </section>
        <article className="nonMarginArticle">
          <p className="hostName"></p>
          <h2 className="eventName">Loading</h2>
          <p>
            The current event is loading. To join the event and participate in the conversation, please download the Letsecho app.
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
