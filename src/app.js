'use strict'

import CustomWolframAlpha from './CustomWolframAlpha.js'
import dotenv from 'dotenv'
import {inspect} from 'util'

dotenv.config();

let customWolframAlpha=new CustomWolframAlpha(process.env.WOLFRAM_API_KEY);

// Query for london population
let populationUrl=customWolframAlpha.makeUrl("london+population",[{name:"podtitle",value:"Result"}]);
let temperatureUrl=customWolframAlpha.makeUrl("temperature%20in%2048.8566%C2%B0%2C%202.3522%C2%B0",[{name:"podtitle",value:"Result"}]);


// Make request
customWolframAlpha.makeQuery(temperatureUrl).then(function(xmlData){
  // Parse XML
  return customWolframAlpha.parseXml(xmlData);
}).then(function(parsedXml){
  //console.log(inspect(parsedXml, {showHidden:true, depth:null, colorize:true}));
  // Get city population string
  //return customWolframAlpha.returnCityPopulation(parsedXml);
  return customWolframAlpha.returnCurrentTemperatureInCoordinates(parsedXml);
}).then(function(currentTemperature){
  console.log(currentTemperature)
}).catch(function(error){
  console.log(error);
});
