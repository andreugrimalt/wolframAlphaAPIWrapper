'use strict'

import request from 'request';
import parseXml from 'xml-parser';

class WolframAlpha {
  constructor(appId, baseUrl) {
    this.appId = appId;
    this.baseUrl = baseUrl;
  }

  makeUrl(input,parameters){
    var tempUrl=this.baseUrl;
    tempUrl+="input="+input+"&appid="+this.appId;
    if(parameters){
      parameters.forEach(function(parameter){
        tempUrl+="&"+parameter.name+"="+parameter.value;
      });
    }
    return tempUrl;
  }

  makeQuery(url){
    return new Promise(function(resolve,reject){
      request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(body) // Show the HTML for the Google homepage.
        }else{
          reject(error);
        }
      });
    });
  }

  parseXml(xml){
    return new Promise(function(resolve,reject){
      resolve(parseXml(xml));
    });
  }

  // Implement custom functions
  returnCityPopulation(parsedData){
    return new Promise(function(resolve,reject){
      reject("returnCityPopulation not implemented!");
    });
  }
}

export default WolframAlpha;
