const functions = require("firebase-functions");
const fs = require("fs");
const config = functions.config();
const {rest, api} = config.slack;
exports.preRender = functions.https.onRequest((request, response) => {
  const path = request.path ? request.path.split("/") : request.path;
  let index = fs.readFileSync("./web/index.html").toString();
  const setMetas = (title, description) => {
    index = index.replace("INJECTED_TITLE", title);
    index = index.replace("INJECTED_DESCRIPTION", description);
  };
  switch (path[1]) {
    case "faq": {
      setMetas("FAQ", "Frequently Asked Questions");
    } break;
    case "privacy": {
      setMetas("Privacy", "Privacy Politics");
    } break;
    case "terms": {
      setMetas("Terms", "Terms and Conditions");
    } break;
    case "events": {
      let eventResponse = getEvent(path[2]);
      setMetas(eventResponse.data.name, "Terms and Conditions");
    } break;
    default: {
      setMetas("TestA", "Discover spontaneous activities");
    }
  }
  response.status(200).send(index);
});

const getEvent = async(pathName) => {
  const url = `https://api.letsechoapp.com/classes/Event/${pathName}`;
  const resp = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      "X-Parse-Application-Id": api,
      "X-Parse-REST-API-Key": rest
    }
  });
  let eventResponse = await resp.json();
  return eventResponse;
}
