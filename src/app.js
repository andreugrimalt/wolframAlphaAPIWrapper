'use strict'

import CustomWolframAlpha from './CustomWolframAlpha.js'
import dotenv from 'dotenv'

dotenv.config();

let customWolframAlpha=new CustomWolframAlpha( process.env.WOLFRAM_API_KEY,"http://api.wolframalpha.com/v2/query?");

let url=customWolframAlpha.makeUrl("london+population",[{name:"podtitle",value:"Result"}]);

customWolframAlpha.makeQuery(url).then(function(xmlData){
  return customWolframAlpha.parseXml(xmlData);
}).then(function(parsedXml){
  return customWolframAlpha.returnCityPopulation(parsedXml);
}).then(function(cityPopulation){
  console.log(cityPopulation)
}).catch(function(error){
  console.log(error);
});
