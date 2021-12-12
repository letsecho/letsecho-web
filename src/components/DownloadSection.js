import React from 'react';
import PlayStore from "../images/playstore.png";
import AppStore from "../images/appstore.png";

export const DownloadSection = () => {
  return (
    <div className="stickyPlacer">
      <h2 className="joinName">
        <b>Download to join <span className="bigArrow">➔</span></b>
      </h2>
      <a href="https://apps.apple.com/app/letsecho/id1563740904">
        <img src={AppStore} alt="AppStore" className="finalBottons" />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.letsecho.letsechoapp&hl=es_419&gl=US">
        <img src={PlayStore} alt="PlayStore" className="finalBottons" />
      </a>
    </div>
  )
}
