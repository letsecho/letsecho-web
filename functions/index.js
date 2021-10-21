const functions = require("firebase-functions");
const fs = require("fs");
const config = functions.config();
const {rest, api} = config.slack;

const paths = {
	FAQ: "faq",
	PRIVACY: "privacy",
	EVENTS: "events",
	TERMS: "terms",
};

exports.preRender = functions.https.onRequest((request, response) => {
  const path = request.path ? request.path.split("/") : request.path;
  let index = fs.readFileSync("./web/index.html").toString();
  const setMetas = (title, description) => {
    index = index.replace("INJECTED_TITLE", title);
    index = index.replace("INJECTED_DESCRIPTION", description);
  };
  switch (path[1]) {
    case paths.FAQ: {
      setMetas("FAQ", "Frequently Asked Questions");
    } break;
    case paths.PRIVACY: {
      setMetas("Privacy", "Privacy Politics");
    } break;
    case paths.TERMS: {
      setMetas("Terms", "Terms and Conditions");
    } break;
    case paths.EVENTS: {
      let eventResponse = getEvent(path[2]);
      setMetas(eventResponse.data.name, eventResponse.data.description);
    } break;
    default: {
      setMetas("Letsecho", "Discover spontaneous activities");
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
