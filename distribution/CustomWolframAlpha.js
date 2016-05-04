'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WolframAlpha2 = require('./WolframAlpha.js');

var _WolframAlpha3 = _interopRequireDefault(_WolframAlpha2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomWolframAlpha = function (_WolframAlpha) {
  _inherits(CustomWolframAlpha, _WolframAlpha);

  function CustomWolframAlpha(appId, baseUrl) {
    _classCallCheck(this, CustomWolframAlpha);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CustomWolframAlpha).call(this, appId, baseUrl));
  }
  // Custom functions that get the data from the response

  _createClass(CustomWolframAlpha, [{
    key: 'returnGeneralQuery',
    value: function returnGeneralQuery(parsedData) {
      return new Promise(function (resolve, reject) {
        resolve(parsedData.root.children[0].children[0].children[1].content);
      });
    }
  }, {
    key: 'getPopulation',
    value: function getPopulation(parsedData) {
      return this.returnGeneralQuery(parsedData);
    }
  }, {
    key: 'getTemperature',
    value: function getTemperature(parsedData) {
      return this.returnGeneralQuery(parsedData);
    }
  }, {
    key: 'getElectricityData',
    value: function getElectricityData(parsedData) {
      return new Promise(function (resolve, reject) {
        var data = parsedData.root.children[0].children[0].children[1].content;
        var dataArray = data.split("\n");
        console.log(dataArray);
        var electricity = {
          voltage: dataArray[0].replace("electrical grid voltages | ", ""),
          frequency: dataArray[1].replace("electrical grid frequency | ", ""),
          plugCodes: dataArray[2].replace("electrical grid plug codes | ", ""),
          socketCodes: dataArray[4].replace("electrical grid socket codes | ", "")
        };

        resolve(electricity);
      });
    }
  }, {
    key: 'getHolidaysData',
    value: function getHolidaysData(parsedData) {
      return this.returnGeneralQuery(parsedData);
    }
  }, {
    key: 'getLandMass',
    value: function getLandMass(parsedData) {
      return new Promise(function (resolve, reject) {
        var landMass = {
          squareFeet: parsedData.root.children[0].children[0].children[1].content,
          squareKilometers: parsedData.root.children[0].children[1].children[1].content,
          squareMeters: parsedData.root.children[0].children[2].children[1].content
        };
        resolve(landMass);
      });
    }
  }, {
    key: 'getElevation',
    value: function getElevation(parsedData) {
      return this.returnGeneralQuery(parsedData);
    }
  }, {
    key: 'getEthnicMix',
    value: function getEthnicMix(parsedData) {
      var data = parsedData.root.children[0].children[0].children[1].content;
      var dataArray = data.split("\n");

      return new Promise(function (resolve, reject) {
        resolve(dataArray);
      });
    }
  }, {
    key: 'getLifeExpectancy',
    value: function getLifeExpectancy(parsedData) {
      return this.returnGeneralQuery(parsedData);
    }
  }, {
    key: 'getDemographics',
    value: function getDemographics(parsedData) {
      return new Promise(function (resolve, reject) {
        var data = parsedData.root.children[0].children[0].children[1].content;
        var dataArray = data.split("\n");

        var demographics = {
          population: dataArray[0].replace("population | ", ""),
          populationDensity: dataArray[1].replace("population density | ", ""),
          populationGrowth: dataArray[2].replace("population growth | ", ""),
          lifeExpectancy: dataArray[3].replace("life expectancy | ", ""),
          medianAge: dataArray[4].replace("median age | ", "")
        };

        resolve(demographics);
      });
    }
  }, {
    key: 'getLanguages',
    value: function getLanguages(parsedData) {
      return new Promise(function (resolve, reject) {
        var data = parsedData.root.children[0].children[0].children[1].content;
        var dataArray = data.split("|");
        resolve(dataArray);
      });
      //return this.returnGeneralQuery(parsedData);
    }
  }, {
    key: 'getReligions',
    value: function getReligions(parsedData) {
      return new Promise(function (resolve, reject) {
        var data = parsedData.root.children[0].children[0].children[1].content;
        var dataArray = data.split("|");
        resolve(dataArray);
      });
    }
  }, {
    key: 'getCoffeeConsumption',
    value: function getCoffeeConsumption(parsedData) {
      return new Promise(function (resolve, reject) {
        var data = parsedData.root.children[0].children[0].children[1].content;
        var coffeConsumption = {
          kilosPerSecond: parsedData.root.children[0].children[0].children[1].content,
          gramsPerSecond: parsedData.root.children[0].children[1].children[1].content,
          kilosPerHour: parsedData.root.children[0].children[2].children[1].content,
          slugsPerSecond: parsedData.root.children[0].children[3].children[1].content,
          poundsPerSecond: parsedData.root.children[0].children[4].children[1].content
        };
        resolve(coffeConsumption);
      });
    }
  }, {
    key: 'getEducation',
    value: function getEducation(parsedData) {
      return new Promise(function (resolve, reject) {
        var data = parsedData.root.children[0].children[0].children[1].content;
        var dataArray = data.split("\n");
        var education = {
          primarySchool: {
            female: dataArray[0].replace("primary school | female | ", ""),
            male: dataArray[1].replace("  | male | ", ""),
            all: dataArray[2].replace("  | all | ", "")
          },
          secondarySchool: {
            female: dataArray[3].replace("secondary school | female | ", ""),
            male: dataArray[4].replace("  | male | ", ""),
            all: dataArray[5].replace("  | all | ", "")
          },
          college: {
            female: dataArray[6].replace("college | female | ", ""),
            male: dataArray[7].replace("  | male | ", ""),
            all: dataArray[8].replace("  | all | ", "")
          },
          total: {
            female: dataArray[9].replace("total | female | ", ""),
            male: dataArray[10].replace("  | male | ", ""),
            all: dataArray[11].replace("  | all | ", "")
          }
        };
        resolve(education);
      });
    }
  }, {
    key: 'getLiteracy',
    value: function getLiteracy(parsedData) {
      return this.returnGeneralQuery(parsedData);
    }
  }, {
    key: 'getEconomics',
    value: function getEconomics(parsedData) {
      return new Promise(function (resolve, reject) {
        var data = parsedData.root.children[0].children[0].children[1].content;
        var dataArray = data.split("\n");
        var economics = {
          gdp: dataArray[0].replace("GDP | ", ""),
          gdpAtParity: dataArray[1].replace("GDP at parity | ", ""),
          readGdp: dataArray[2].replace("real GDP | ", ""),
          gdpPerCapita: dataArray[3].replace("GDP per capita | ", ""),
          gdpReadlGrowth: dataArray[4].replace("GDP real growth | ", ""),
          giniIndex: dataArray[5].replace("Gini index | ", ""),
          consumerPriceInflation: dataArray[6].replace("consumer price inflation | ", "")
        };
        resolve(economics);
      });
    }
  }]);

  return CustomWolframAlpha;
}(_WolframAlpha3.default);

exports.default = CustomWolframAlpha;