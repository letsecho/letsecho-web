const { REACT_APP_REST_API_KEY, REACT_APP_API_KEY } = process.env;

export const getEvent = async(eventID) => {
  const url = `https://api.letsechoapp.com/classes/Event/${eventID}`;
  const resp = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      "X-Parse-Application-Id": REACT_APP_API_KEY,
      "X-Parse-REST-API-Key": REACT_APP_REST_API_KEY
    }
  });
  const eventResponse = await resp.json();
  return eventResponse;
}
