'use strict'

import CustomWolframAlpha from './CustomWolframAlpha.js'
import dotenv from 'dotenv'
import {inspect} from 'util'

dotenv.config();

let customWolframAlpha=new CustomWolframAlpha(process.env.WOLFRAM_API_KEY);

// Query for london population
let populationUrl=customWolframAlpha.makeUrl("london population",[{name:"podtitle",value:"Result"}]);
let temperatureUrl=customWolframAlpha.makeUrl("temperature%20in%2048.8566%C2%B0%2C%202.3522%C2%B0",[{name:"podtitle",value:"Result"}]);
let electricityUrl=customWolframAlpha.makeUrl("electricity uk",[{name:"podtitle",value:"Electrical grid properties"}]);
let holidaysUrl=customWolframAlpha.makeUrl("holidays celebrated in Spain",[{name:"podtitle",value:"Members"}]);
let landMassUrl=customWolframAlpha.makeUrl("Uk land mass",[{name:"podtitle",value:"Unit conversions"}]);
let elevationUrl=customWolframAlpha.makeUrl("London elevation",[{name:"podtitle",value:"Result"}]);
let ethnicMixUrl=customWolframAlpha.makeUrl("London ethnic",[{name:"podtitle",value:"Result"}]);
let lifeExpectancyUrl=customWolframAlpha.makeUrl("Uk life expectancy",[{name:"podtitle",value:"Result"}]);
let demographicsUrl=customWolframAlpha.makeUrl("Uk demographics",[{name:"podtitle",value:"Result"}]);
let languagesUrl=customWolframAlpha.makeUrl("UK languages",[{name:"podstate",value:"Languages:CountryData__More"},{name:"podtitle",value:"Result"}]);
let religionsUrl=customWolframAlpha.makeUrl("UK religions",[{name:"podtitle",value:"Result"}]);
let coffeeConsumptionUrl=customWolframAlpha.makeUrl("UK coffee consumption",[{name:"podtitle",value:"Unit conversions"}]);
let educationUrl=customWolframAlpha.makeUrl("UK education",[{name:"podtitle",value:"Students"},{name:"podstate",value:"Pupils:WorldDevelopmentData__Show details"}]);
let literacyUrl=customWolframAlpha.makeUrl("UK literacy",[{name:"podtitle",value:"Result"}]);
let economicsUrl=customWolframAlpha.makeUrl("UK economics",[{name:"podtitle",value:"Result"}]);


// Make request
customWolframAlpha.makeQuery(economicsUrl).then(function(xmlData){
  // Parse XML
  return customWolframAlpha.parseXml(xmlData);
}).then(function(parsedXml){
  //console.log(inspect(parsedXml, {showHidden:true, depth:null, colorize:true}));
  // Get city population string
  //return customWolframAlpha.returnCityPopulation(parsedXml);
  return customWolframAlpha.getEconomics(parsedXml);
}).then(function(wolframData){
  console.log(inspect(wolframData, {showHidden:true, depth:null, colorize:true}));
}).catch(function(error){
  console.log(error);
});
