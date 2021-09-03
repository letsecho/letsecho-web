import { useState, useEffect } from 'react';
import { getEvent } from '../helpers/getEvent';

export const useFetchEvent = (eventID) => {

  const [state, setState] = useState({
    data: {},
    loading: true
  });

  useEffect(() => {
    getEvent(eventID)
      .then(eventResponse => {
        setState({
          data: eventResponse,
          loading: false
        });
      });
  }, [eventID]);

  return state;

}
