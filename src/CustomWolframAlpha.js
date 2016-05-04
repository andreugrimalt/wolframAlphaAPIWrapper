'use strict'

import WolframAlpha from './WolframAlpha.js';

class CustomWolframAlpha extends WolframAlpha{
  constructor(appId, baseUrl) {
    super(appId, baseUrl);
  }
  // Custom functions that get the data from the response

  returnGeneralQuery(parsedData){
    return new Promise(function(resolve,reject){
      resolve(parsedData.root.children[0].children[0].children[1].content);
    });
  }

  getPopulation(parsedData){
    return this.returnGeneralQuery(parsedData);
  }

  getTemperature(parsedData){
    return this.returnGeneralQuery(parsedData);
  }

  getElectricityData(parsedData){
    return new Promise(function(resolve,reject){
      let data=parsedData.root.children[0].children[0].children[1].content;
      let dataArray=data.split("\n");
      console.log(dataArray);
      var electricity={
        voltage: dataArray[0].replace("electrical grid voltages | ",""),
        frequency: dataArray[1].replace("electrical grid frequency | ",""),
        plugCodes: dataArray[2].replace("electrical grid plug codes | ",""),
        socketCodes: dataArray[4].replace("electrical grid socket codes | ","")
      };

      resolve(electricity);
    });
  }

  getHolidaysData(parsedData){
    return this.returnGeneralQuery(parsedData);
  }

  getLandMass(parsedData){
    return new Promise(function(resolve,reject){
      var landMass={
        squareFeet:parsedData.root.children[0].children[0].children[1].content,
        squareKilometers:parsedData.root.children[0].children[1].children[1].content,
        squareMeters:parsedData.root.children[0].children[2].children[1].content
      }
      resolve(landMass);
    });
  }

  getElevation(parsedData){
    return this.returnGeneralQuery(parsedData);
  }

  getEthnicMix(parsedData){
    let data=parsedData.root.children[0].children[0].children[1].content;
    let dataArray=data.split("\n");

    return new Promise(function(resolve,reject){
      resolve(dataArray);
    });
  }

  getLifeExpectancy(parsedData){
    return this.returnGeneralQuery(parsedData);
  }

  getDemographics(parsedData){
    return new Promise(function(resolve,reject){
      let data=parsedData.root.children[0].children[0].children[1].content;
      let dataArray=data.split("\n");

      let demographics={
        population: dataArray[0].replace("population | ",""),
        populationDensity: dataArray[1].replace("population density | ",""),
        populationGrowth: dataArray[2].replace("population growth | ",""),
        lifeExpectancy: dataArray[3].replace("life expectancy | ",""),
        medianAge: dataArray[4].replace("median age | ","")
      }

      resolve(demographics);
    });
  }

  getLanguages(parsedData){
    return new Promise(function(resolve,reject){
      let data=parsedData.root.children[0].children[0].children[1].content;
      let dataArray=data.split("|");
      resolve(dataArray);
    });
    //return this.returnGeneralQuery(parsedData);
  }

  getReligions(parsedData){
    return new Promise(function(resolve,reject){
      let data=parsedData.root.children[0].children[0].children[1].content;
      let dataArray=data.split("|");
      resolve(dataArray);
    });
  }

  getCoffeeConsumption(parsedData){
    return new Promise(function(resolve,reject){
      let data=parsedData.root.children[0].children[0].children[1].content;
      let coffeConsumption={
        kilosPerSecond:parsedData.root.children[0].children[0].children[1].content,
        gramsPerSecond:parsedData.root.children[0].children[1].children[1].content,
        kilosPerHour:parsedData.root.children[0].children[2].children[1].content,
        slugsPerSecond:parsedData.root.children[0].children[3].children[1].content,
        poundsPerSecond:parsedData.root.children[0].children[4].children[1].content
      }
      resolve(coffeConsumption);
    });
  }

  getEducation(parsedData){
    return new Promise(function(resolve,reject){
      let data=parsedData.root.children[0].children[0].children[1].content;
      let dataArray=data.split("\n");
      let education={
        primarySchool:{
          female: dataArray[0].replace("primary school | female | ",""),
          male: dataArray[1].replace("  | male | ",""),
          all: dataArray[2].replace("  | all | ","")
        },
        secondarySchool:{
          female: dataArray[3].replace("secondary school | female | ",""),
          male: dataArray[4].replace("  | male | ",""),
          all: dataArray[5].replace("  | all | ",""),
        },
        college:{
          female: dataArray[6].replace("college | female | ",""),
          male: dataArray[7].replace("  | male | ",""),
          all: dataArray[8].replace("  | all | ",""),
        },
        total:{
          female: dataArray[9].replace("total | female | ",""),
          male: dataArray[10].replace("  | male | ",""),
          all: dataArray[11].replace("  | all | ",""),
        }
      }
      resolve(education);
    });
  }

  getLiteracy(parsedData){
    return this.returnGeneralQuery(parsedData);
  }

  getEconomics(parsedData){
    return new Promise(function(resolve,reject){
      let data=parsedData.root.children[0].children[0].children[1].content;
      let dataArray=data.split("\n");
      let economics={
        gdp: dataArray[0].replace("GDP | ",""),
        gdpAtParity: dataArray[1].replace("GDP at parity | ",""),
        readGdp: dataArray[2].replace("real GDP | ",""),
        gdpPerCapita: dataArray[3].replace("GDP per capita | ",""),
        gdpReadlGrowth: dataArray[4].replace("GDP real growth | ",""),
        giniIndex: dataArray[5].replace("Gini index | ",""),
        consumerPriceInflation: dataArray[6].replace("consumer price inflation | ","")
      }
      resolve(economics);
    });
  }
}


export default CustomWolframAlpha
