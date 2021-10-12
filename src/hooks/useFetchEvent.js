import { useState, useEffect } from 'react';
import { getEvent } from '../helpers/getEvent';

export const useFetchEvent = (eventID) => {

  const [state, setState] = useState({
    data: {},
    loading: true
  });

  useEffect(() => {
    setTimeout(function() {
      getEvent(eventID)
        .then(eventResponse => {
          setState({
            data: eventResponse,
            loading: false
          });
        });
    }, 1000);
  }, [eventID]);

  return state;

}
