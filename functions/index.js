const functions = require("firebase-functions");
const fs = require("fs");
const fetch = require("node-fetch");

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
    index = index.replaceAll("INJECTED_TITLE", title);
    index = index.replaceAll("INJECTED_DESCRIPTION", description);
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
      let eventResponse =  getEvent(path[2]).then(value => {
				 console.log(value);
				 setMetas(value.name, value.description);
				 response.status(200).send(index);
			 } ).catch(console.error)
      //setMetas(eventResponse.data.name, eventResponse.data.description);
    } break;
    default: {
      setMetas("Letsecho", "Discover spontaneous activities");
    }
  }
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

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
