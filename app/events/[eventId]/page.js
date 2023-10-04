import React from 'react';
import { EventDesign } from '../../../src/components/EventDesign'
import { getEvent } from '../../../src/helpers/getEvent';

export async function generateMetadata(
  { params: { eventId }}
) {
  const baseinfo = await getEvent(eventId)
  
  if(Object.entries(baseinfo).length > 0 && !baseinfo.error) {
    const title = `${baseinfo.name ?? 'Letsecho'} by ${baseinfo.createdBy.name ?? 'host'}`
    const description = baseinfo.description ?? ''
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [baseinfo.banner?.url],
        url: `/events/${eventId}`,
      }
    }
  }

  return {
    title: 'Events - Letsecho',
    description: 'Upcoming events',
    openGraph: {
      title: 'Events - Letsecho',
      description: 'Upcoming events',
      images: [baseinfo.banner?.url],
      url: `/events/${eventId}`,
    }
  }
  
}

export default function Page({ params: { eventId } }) {
    return (
      <EventDesign eventId={eventId} />
    )
  }