import React from 'react';
import PlayStore from "../images/playstore.png";
import AppStore from "../images/appstore.png";

export const EventTemplate = ({eventName = "", hostName = "", eventDescription = "", imageUrl = "", imageName = ""}) => {

  return (
    <section className="sectionDisplay">
      <img className="imageDisplay" src={imageUrl} alt={imageName} />
      <p className="hostName">Hosted by: {hostName}</p>
      <p className="eventName">{eventName}</p>
      <p className="contextName">{eventDescription}</p>
      <p className="joinName"><b>Download to join →</b></p>
      <img src={AppStore} alt="AppStore" className="finalBottons" />
      <img src={PlayStore} alt="PlayStore" className="finalBottons" />
    </section>
  )
}
