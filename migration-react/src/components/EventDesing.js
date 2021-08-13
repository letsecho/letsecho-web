import React from 'react';
import { useFetchEvent } from '../hooks/useFetchEvent';
import { EventTemplate } from './EventTemplate';

export const EventDesing = () => {

    const { data: baseinfo, loading } = useFetchEvent("Jodc23gOew");
    console.log(baseinfo);
    console.log(loading);
    return (
      <>
        {!loading && <EventTemplate eventName={baseinfo.name} hostName={baseinfo.createdBy.name} eventDescription={baseinfo.description} imageUrl={baseinfo.banner.url} imageName={baseinfo.banner.name} />}
      </>
    )
}
