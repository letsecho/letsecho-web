import React from 'react';
import Helmet from 'react-helmet';

import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

import { useFetchEvent } from '../hooks/useFetchEvent';
import { EventTemplate } from './EventTemplate';
import { NotFoundEvent } from './NotFoundEvent';

export const EventDesing = () => {

  const { eventId } = useParams();
  const { data: baseinfo, loading } = useFetchEvent(eventId);

  return (
    <>
      <Helmet>
        <title>{((!loading)&&(Object.entries(baseinfo).length > 0)) ? baseinfo.name : "Event"}</title>
        <meta property="og:title" content={((!loading)&&(Object.entries(baseinfo).length > 0)) ? baseinfo.name : "Event not Found"} />
        <meta property="og:description" content={((!loading)&&(Object.entries(baseinfo).length > 0)) ? baseinfo.description : "Event not Found"} />
        <meta property="og:image" content={((!loading)&&(Object.entries(baseinfo).length > 0)) ? baseinfo.banner.url : ""} />
      </Helmet>
      <main>
        {(!loading) ? ((Object.entries(baseinfo).length > 0) ? <EventTemplate eventName={baseinfo.name} hostName={baseinfo.createdBy.name} eventDescription={baseinfo.description} imageUrl={baseinfo.banner.url} imageName={baseinfo.banner.name} />: <NotFoundEvent/>) : (<ReactLoading className="centerLoading" type="spin" color="#EA117E" height={250} width={250} />)}
      </main>
    </>
  )

}
