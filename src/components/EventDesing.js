import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetchEvent } from '../hooks/useFetchEvent';
import { EventTemplate } from './EventTemplate';

export const EventDesing = () => {//"Jodc23gOew"

  const { eventId } = useParams();
  //
  // const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]);
  //
  // if ( !hero ) {
  //     return <Redirect to="/" />;
  // }

    const { data: baseinfo, loading } = useFetchEvent(eventId);
    console.log(baseinfo);
    console.log(loading);
    return (
      <main>
        {!loading && <EventTemplate eventName={baseinfo.name} hostName={baseinfo.createdBy.name} eventDescription={baseinfo.description} imageUrl={baseinfo.banner.url} imageName={baseinfo.banner.name} />}
      </main>
    )
}
