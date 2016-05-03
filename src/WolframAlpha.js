'use strict'

import request from 'request';
import parseXml from 'xml-parser';

class WolframAlpha {
  constructor(appId, baseUrl) {
    this.appId = appId;
    this.baseUrl = baseUrl ||  "http://api.wolframalpha.com/v2/query?";
  }
  // Make Wolfram Alpha request URL
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
  // Make query to Wolfram Alpha
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
  // Parse XML response
  parseXml(xml){
    return new Promise(function(resolve,reject){
      resolve(parseXml(xml));
    });
  }

  // Implement custom functions
}

export default WolframAlpha;
