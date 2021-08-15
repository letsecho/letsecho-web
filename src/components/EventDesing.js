import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetchEvent } from '../hooks/useFetchEvent';
import { EventTemplate } from './EventTemplate';

export const EventDesing = () => {

  const { eventId } = useParams();

  const { data: baseinfo, loading } = useFetchEvent(eventId);

  return (
    <main>
      {!loading && <EventTemplate eventName={baseinfo.name} hostName={baseinfo.createdBy.name} eventDescription={baseinfo.description} imageUrl={baseinfo.banner.url} imageName={baseinfo.banner.name} />}
    </main>
  )

}
