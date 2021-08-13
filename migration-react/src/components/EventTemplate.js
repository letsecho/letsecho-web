import React from 'react';

export const EventTemplate = ({eventName = "", hostName = "", eventDescription = "", imageUrl = "", imageName = ""}) => {

    return (
        <section>
          <h2>{eventName}</h2>
          <p>{hostName}</p>
          <p>{eventDescription}</p>
          <img src={imageUrl} alt={imageName} width="500" height="600"/>
        </section>
    )
}
