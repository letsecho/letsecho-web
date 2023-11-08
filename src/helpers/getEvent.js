const { REST_KEY, APP_ID, API_BASE_URL } = process.env;

export const getEvent = async(eventID) => {
  const url = `https://${API_BASE_URL}/classes/Event/${eventID}`;
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
