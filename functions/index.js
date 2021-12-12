const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({origin: true});
const app = express();

const fetch = require("node-fetch");

const config = functions.config();
const {rest, api} = config.slack;

app.get('/', (req, res) => {
  const date = new Date();
  const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
  res.send(`
    <!doctype html>
    <head>
      <title>Time</title>
      <link rel="stylesheet" href="/style.css">
      <script src="/script.js"></script>
    </head>
    <body>
      <p>In London, the clock strikes:
        <span id="bongs">${'BONG '.repeat(hours)}</span></p>
      <button onClick="refresh(this)">Refresh</button>
    </body>
  </html>`);
});

app.get('/api', (req, res) => {
  const date = new Date();
  const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
  res.json({bongs: 'BONG '.repeat(hours)});
});

app.use(cors);
exports.app = functions.https.onRequest(app);

exports.preRender = functions.https.onRequest((request, response) => {
  const path = request.path ? request.path.split("/") : request.path;
	const routeEvent = (typeof path[1] === 'undefined') ? false : path[1];
	const eventId = (typeof path[2] === 'undefined') ? false : path[2];
  let index = fs.readFileSync("../build/index.html").toString();
  const setMetas = (title, description) => {
  	index = index.replaceAll("INJECTED_TITLE", title);
    index = index.replaceAll("INJECTED_DESCRIPTION", description);
  };
	setMetas("Letsecho", "Discover spontaneous activities");
	if ((path)&&(routeEvent)&&(eventId)) {
		let eventResponse = getEvent(eventId).then(value => {
			if (value) {
				//setMetas(value.name, value.description);
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
