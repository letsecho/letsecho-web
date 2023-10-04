import React from 'react';
import { getEvent } from '../helpers/getEvent';
import { EventTemplate } from './EventTemplate';
import { NotFoundEvent } from './NotFoundEvent';

export const EventDesign = async ({ eventId }) => {
  const baseinfo = await getEvent(eventId)
  console.log('--- ', baseinfo)
  return (
    <main>
      {((Object.entries(baseinfo).length > 0 && !baseinfo.error) ? <EventTemplate eventName={baseinfo.name} hostName={baseinfo.createdBy.name} eventDescription={baseinfo.description} imageUrl={baseinfo.banner?.url} imageName={baseinfo.banner?.name} /> : <NotFoundEvent/>)}
    </main>
  )
}
