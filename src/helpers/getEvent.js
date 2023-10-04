const { REST_KEY, CLIENT_KEY, APP_ID } = process.env;

export const getEvent = async(eventID) => {
  console.log('--- ', REST_KEY, CLIENT_KEY, APP_ID)
  const url = `https://letsechodev.b4a.io/classes/Event/${eventID}`;
  const resp = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      "X-Parse-Application-Id": APP_ID,
      "X-Parse-REST-API-Key": REST_KEY
    }
  });
  let eventResponse = await resp.json();
  if (eventResponse.hasOwnProperty('code')&&(eventResponse.code === 101)) {
    eventResponse = {};
  }
  return eventResponse;
}
