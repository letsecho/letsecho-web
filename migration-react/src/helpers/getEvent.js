export const getEvent = async(eventID) => {
    const url = `https://parseapi.back4app.com/classes/Event/${eventID}`;
    const resp = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache'
    });
    const eventResponse = await resp.json();
    return eventResponse;
}
