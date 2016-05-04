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
var populationUrl = customWolframAlpha.makeUrl("london population", [{ name: "podtitle", value: "Result" }]);
var temperatureUrl = customWolframAlpha.makeUrl("temperature%20in%2048.8566%C2%B0%2C%202.3522%C2%B0", [{ name: "podtitle", value: "Result" }]);
var electricityUrl = customWolframAlpha.makeUrl("electricity uk", [{ name: "podtitle", value: "Electrical grid properties" }]);
var holidaysUrl = customWolframAlpha.makeUrl("holidays celebrated in Spain", [{ name: "podtitle", value: "Members" }]);
var landMassUrl = customWolframAlpha.makeUrl("Uk land mass", [{ name: "podtitle", value: "Unit conversions" }]);
var elevationUrl = customWolframAlpha.makeUrl("London elevation", [{ name: "podtitle", value: "Result" }]);
var ethnicMixUrl = customWolframAlpha.makeUrl("London ethnic", [{ name: "podtitle", value: "Result" }]);
var lifeExpectancyUrl = customWolframAlpha.makeUrl("Uk life expectancy", [{ name: "podtitle", value: "Result" }]);
var demographicsUrl = customWolframAlpha.makeUrl("Uk demographics", [{ name: "podtitle", value: "Result" }]);
var languagesUrl = customWolframAlpha.makeUrl("UK languages", [{ name: "podstate", value: "Languages:CountryData__More" }, { name: "podtitle", value: "Result" }]);
var religionsUrl = customWolframAlpha.makeUrl("UK religions", [{ name: "podtitle", value: "Result" }]);
var coffeeConsumptionUrl = customWolframAlpha.makeUrl("UK coffee consumption", [{ name: "podtitle", value: "Unit conversions" }]);
var educationUrl = customWolframAlpha.makeUrl("UK education", [{ name: "podtitle", value: "Students" }, { name: "podstate", value: "Pupils:WorldDevelopmentData__Show details" }]);
var literacyUrl = customWolframAlpha.makeUrl("UK literacy", [{ name: "podtitle", value: "Result" }]);
var economicsUrl = customWolframAlpha.makeUrl("UK economics", [{ name: "podtitle", value: "Result" }]);

// Make request
customWolframAlpha.makeQuery(economicsUrl).then(function (xmlData) {
  // Parse XML
  return customWolframAlpha.parseXml(xmlData);
}).then(function (parsedXml) {
  //console.log(inspect(parsedXml, {showHidden:true, depth:null, colorize:true}));
  // Get city population string
  //return customWolframAlpha.returnCityPopulation(parsedXml);
  return customWolframAlpha.getEconomics(parsedXml);
}).then(function (wolframData) {
  console.log((0, _util.inspect)(wolframData, { showHidden: true, depth: null, colorize: true }));
}).catch(function (error) {
  console.log(error);
});