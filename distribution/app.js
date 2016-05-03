'use strict';

var _CustomWolframAlpha = require('./CustomWolframAlpha.js');

var _CustomWolframAlpha2 = _interopRequireDefault(_CustomWolframAlpha);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _util = require('util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var customWolframAlpha = new _CustomWolframAlpha2.default(process.env.WOLFRAM_API_KEY);

// Query for london population
var populationUrl = customWolframAlpha.makeUrl("london+population", [{ name: "podtitle", value: "Result" }]);
var temperatureUrl = customWolframAlpha.makeUrl("temperature%20in%2048.8566%C2%B0%2C%202.3522%C2%B0", [{ name: "podtitle", value: "Result" }]);

// Make request
customWolframAlpha.makeQuery(temperatureUrl).then(function (xmlData) {
  // Parse XML
  return customWolframAlpha.parseXml(xmlData);
}).then(function (parsedXml) {
  //console.log(inspect(parsedXml, {showHidden:true, depth:null, colorize:true}));
  // Get city population string
  //return customWolframAlpha.returnCityPopulation(parsedXml);
  return customWolframAlpha.returnCurrentTemperatureInCoordinates(parsedXml);
}).then(function (currentTemperature) {
  console.log(currentTemperature);
}).catch(function (error) {
  console.log(error);
});