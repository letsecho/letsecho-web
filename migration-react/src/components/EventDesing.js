import React from 'react';
import { useFetchEvent } from '../hooks/useFetchEvent';

export const EventDesing = () => {

    const { data: baseinfo, loading } = useFetchEvent("Jodc23gOew");
    console.log(baseinfo);
    return (
        <section>
          <h2>{baseinfo.name}</h2>
          <p>{baseinfo.createdBy.name}</p>
          <p>{baseinfo.description}</p>
          <img src={baseinfo.banner.url} alt={baseinfo.banner.name} width="500" height="600"/>
        </section>
    )
}
