import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useFetchEvent } from '../hooks/useFetchEvent';
import { EventTemplate } from './EventTemplate';
import { NotFoundEvent } from './NotFoundEvent';
import { LoadingSection } from './LoadingSection';
import {Helmet} from "react-helmet";

export const EventDesign = () => {
  const { eventId } = useParams();
  const { data: baseinfo, loading } = useFetchEvent(eventId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {loading && <LoadingSection/>}
      {
        Object.entries(baseinfo).length > 0 ? 
        (
          <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{baseinfo?.name}</title>
            <meta property="og:title" content={`${baseinfo?.name} hosted by ${baseinfo?.createdBy?.name}`}  />
            <meta property="og:description" content={baseinfo?.description} />
            <meta property="og:image" content={baseinfo.banner?.url} />
          </Helmet>
          <EventTemplate 
            eventName={baseinfo?.name} 
            hostName={baseinfo?.createdBy?.name} 
            eventDescription={baseinfo?.description} 
            imageUrl={baseinfo?.banner?.url} 
            imageName={baseinfo?.banner?.name} />
          </>
        )
        :
        (<NotFoundEvent/>)
      }
    </main>
  )
}
