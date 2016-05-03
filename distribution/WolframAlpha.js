'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _xmlParser = require('xml-parser');

var _xmlParser2 = _interopRequireDefault(_xmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WolframAlpha = function () {
  function WolframAlpha(appId, baseUrl) {
    _classCallCheck(this, WolframAlpha);

    this.appId = appId;
    this.baseUrl = baseUrl || "http://api.wolframalpha.com/v2/query?";
  }
  // Make Wolfram Alpha request URL


  _createClass(WolframAlpha, [{
    key: 'makeUrl',
    value: function makeUrl(input, parameters) {
      var tempUrl = this.baseUrl;
      tempUrl += "input=" + input + "&appid=" + this.appId;
      if (parameters) {
        parameters.forEach(function (parameter) {
          tempUrl += "&" + parameter.name + "=" + parameter.value;
        });
      }
      return tempUrl;
    }
    // Make query to Wolfram Alpha

  }, {
    key: 'makeQuery',
    value: function makeQuery(url) {
      return new Promise(function (resolve, reject) {
        (0, _request2.default)(url, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            resolve(body); // Show the HTML for the Google homepage.
          } else {
              reject(error);
            }
        });
      });
    }
    // Parse XML response

  }, {
    key: 'parseXml',
    value: function parseXml(xml) {
      return new Promise(function (resolve, reject) {
        resolve((0, _xmlParser2.default)(xml));
      });
    }

    // Implement custom functions

  }]);

  return WolframAlpha;
}();

exports.default = WolframAlpha;