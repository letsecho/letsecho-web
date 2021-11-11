import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetchEvent } from '../hooks/useFetchEvent';
import { EventTemplate } from './EventTemplate';
import { NotFoundEvent } from './NotFoundEvent';
import { LoadingSection } from './LoadingSection';

export const EventDesign = () => {

  const { eventId } = useParams();
  const { data: baseinfo, loading } = useFetchEvent(eventId);

  return (
    <main>
      {(!loading) ? ((Object.entries(baseinfo).length > 0) ? <EventTemplate eventName={baseinfo.name} hostName={baseinfo.createdBy.name} eventDescription={baseinfo.description} imageUrl={baseinfo.banner?.url} imageName={baseinfo.banner?.name} /> : <NotFoundEvent/>) : (<LoadingSection/>)}
    </main>
  )

}
