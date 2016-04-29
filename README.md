# WolframAlpha API Wrapper

## WolframAlpha.js 
Contains the main functionality

## CustomWolframAlpha.js 
Contains custom functionality. It inherits from WolframAlpha.js

### Example:

```
'use strict'

import CustomWolframAlpha from './CustomWolframAlpha.js'
import dotenv from 'dotenv'

dotenv.config();

let customWolframAlpha=new CustomWolframAlpha( process.env.WOLFRAM_API_KEY,"http://api.wolframalpha.com/v2/query?");

// Query for london population
let url=customWolframAlpha.makeUrl("london+population",[{name:"podtitle",value:"Result"}]);

// Make request
customWolframAlpha.makeQuery(url).then(function(xmlData){
  // Parse XML
  return customWolframAlpha.parseXml(xmlData);
}).then(function(parsedXml){
  // Get city population string
  return customWolframAlpha.returnCityPopulation(parsedXml);
}).then(function(cityPopulation){
  console.log(cityPopulation)
}).catch(function(error){
  console.log(error);
});
```
