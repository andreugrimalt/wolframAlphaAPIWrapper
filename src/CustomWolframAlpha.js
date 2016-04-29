'use strict'

import WolframAlpha from './WolframAlpha.js';

class CustomWolframAlpha extends WolframAlpha{
  constructor(appId, baseUrl) {
    super(appId, baseUrl);
  }
  returnCityPopulation(parsedData){
    return new Promise(function(resolve,reject){
      resolve(parsedData.root.children[0].children[0].children[1].content);
    });
  }
}

export default CustomWolframAlpha
