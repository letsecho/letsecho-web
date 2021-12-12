const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({origin: true});
const fs = require('fs');
// const ReactDOMServer = require('ReactDOMServer');

const path = require('path');

const app = express();

const fetch = require("node-fetch");

const config = functions.config();
// const {rest, api} = config.slack;

app.get('/**', (req, res) => {

  const indexFile = path.resolve('../build/index2.html');

  const urlPath = req.path ? req.path.split("/") : req.path;

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    if (urlPath[1] == "events") {
      const eventId = urlPath[2];
      // let eventResponse2 = await getEvent(eventId);
      // return res.status(200).send(eventResponse2);

      let eventResponse = getEvent(eventId).then(value => {
        if (value) {
          data =  data.replace('INJECTED_TITLE', value.name)
          res.status(200).send(
            data.replace('INJECTED_DESCRIPTION', value.description)
          );
        } else {
          res.status(500).send('Oops, better luck next time!');
        }
      }).catch(console.error);
      
      return eventResponse
    } else {
      return res.send(
        data.replace('INJECTED_TITLE', "Letsecho")
      );
    }
  });
});

app.get('/api', (req, res) => {
  const date = new Date();
  const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
  res.json({bongs: 'BONG '.repeat(hours)});
});

app.use(cors);
exports.app = functions.https.onRequest(app);

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
