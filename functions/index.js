const functions = require("firebase-functions");
const fs = require("fs");
const fetch = require("node-fetch");

const config = functions.config();
const {rest, api} = config.slack;

exports.preRender = functions.https.onRequest((request, response) => {
  const path = request.path ? request.path.split("/") : request.path;
	const routeEvent = (typeof path[1] === 'undefined') ? false : path[1];
	const eventId = (typeof path[2] === 'undefined') ? false : path[2];
  let index = fs.readFileSync("./web/index.html").toString();
  const setMetas = (title, description) => {
  	index = index.replaceAll("INJECTED_TITLE", title);
    index = index.replaceAll("INJECTED_DESCRIPTION", description);
  };
	setMetas("Letsecho", "Discover spontaneous activities");
	if ((path)&&(routeEvent)&&(eventId)) {
		let eventResponse = getEvent(eventId).then(value => {
			if (value) {
				setMetas(value.name, value.description);
			}
		}).catch(console.error);
	}
	response.status(200).send(index);
});

const getEvent = async(pathName) => {
  const url = `https://api.letsechoapp.com/classes/Event/${pathName}`;
  const resp = await fetch(url, {
    method: 'GET',
    headers: {
      "X-Parse-Application-Id": api,
      "X-Parse-REST-API-Key": rest
    }
  });
  let eventResponse = await resp.json();
	if (eventResponse.hasOwnProperty('code')&&(eventResponse.code === 101)) {
		return false;
	}
  return eventResponse;
}

String.prototype.replaceAll = function(search, replacement) {
  return this.replace(new RegExp(search, 'g'), replacement);
};
