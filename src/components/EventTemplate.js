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

// <section className="sectionDisplay">
//   <div className="imageDisplay">
//     <img src={imageUrl} alt={imageName} />
//   </div>
//   <p className="hostName">Hosted by: {hostName}</p>
//   <p className="eventName">{eventName}</p>
//   <p className="contextName">{eventDescription}</p>
//   <p className="joinName"><b>Download to join →</b></p>
//   <img src={AppStore} alt="AppStore" className="finalBottons" />
//   <img src={PlayStore} alt="PlayStore" className="finalBottons" />
// </section>

/*
<Container>
  <Row>
    <Col xs="12" sm="12" md="6">
      <p className="hostName">Hosted by: {hostName}</p>
      <p className="eventName">{eventName}</p>
    </Col>
    <Col xs="12" sm="12" md="6">
      <img className="imageDisplay" src={imageUrl} alt={imageName} />
    </Col>
    <Col xs="12" sm="12" md="6" className="beforeRender">
      <p className="contextName">{eventDescription}</p>
      <p className="joinName"><b>Download to join →</b></p>
      <Row>
        <Col xs="6" sm="6" md="4">
          <img src={AppStore} alt="AppStore" className="finalBottons" />
        </Col>
        <Col xs="6" sm="6" md="4">
          <img src={PlayStore} alt="PlayStore" className="finalBottons" />
        </Col>
      </Row>
    </Col>
  </Row>
</Container>
*/
