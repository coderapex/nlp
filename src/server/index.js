const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");

// setting up Aylien API
const AYLIENTextAPI = require("aylien_textapi");

const textApi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

// debugging that the correct app details are used
// console.log(`🚀: textApi`, textApi);

// setting app to use express
const app = express();

// setting up Middleware to use cors
app.use(cors());

// setting up Middleware to use bodyParser
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// setting source folder to be used
app.use(express.static("dist"));

// designates what port the app will listen to for incoming requests
const PORT = 8081;

app.listen(PORT, function() {
  console.log("Example app listening on port " + PORT);
});

console.log(__dirname);

app.get("/", function(req, res) {
  res.sendFile("dist/index.html");
});

// POST to process user input values
app.post("/analyse-text", (req, res) => {
  const text = req.body.textValue;
  console.log(
    "Entering POST request to '/api' with value of variable 'text: '",
    text
  );
  textApi.sentiment({ text: text }, (error, result, remaining) => {
    if (error) {
      console.log(error);
    } else {
      // console.log("Aylien Callback", result, remaining);
      console.log("Aylien API Call Successful.");
      console.log("Result of analysis: ");
      console.log(result);
      console.log("Remaining calls:");
      console.log(remaining);

      // converting the result to JSON and sending it back
      res.send({
        polarity: result.polarity,
        polarity_confidence: result.polarity_confidence,
        subjectivity_confidence: result.subjectivity_confidence,
        subjectivity: result.subjectivity
      });
    }
  });
});

// POST to process contents of user given URL
app.post("/analyse-url", (req, res) => {
  const text = req.body.text;
  console.log(`🚀: text`, text);
  console.log("Request to '/article' endpoint", text);
  textApi.sentiment({ url: text }, (error, result, remaining) => {
    if (error) {
      console.log(error);
    } else {
      // console.log("Aylien Callback", result, remaining);
      console.log("Aylien API Call Successful.");
      console.log("Result of analysis: ");
      console.log(result);
      console.log("Remaining calls:");
      console.log(remaining);

      res.send(result);
    }
  });
});
