const functions = require("firebase-functions");
// const admin = require("firebase-admin");
const fs = require("fs");

// let app = admin.initializeApp();

exports.preRender = functions.https.onRequest((request, response) => {
  const error404 = false;
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
    default: {
      setMetas("Letsecho", "Discover spontaneous activities");
    }
  }
  (error404) ?
  response.status(400).send(index) :
  response.status(200).send(index);
});
