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
    key: 'returnCityPopulation',
    value: function returnCityPopulation(parsedData) {
      return new Promise(function (resolve, reject) {
        resolve(parsedData.root.children[0].children[0].children[1].content);
      });
    }
  }, {
    key: 'returnCurrentTemperatureInCoordinates',
    value: function returnCurrentTemperatureInCoordinates(parsedData) {
      return new Promise(function (resolve, reject) {
        resolve(parsedData.root.children[0].children[0].children[1].content);
      });
    }
  }, {
    key: 'returnGeneralQuery',
    value: function returnGeneralQuery(parsedData) {
      return new Promise(function (resolve, reject) {
        resolve(parsedData.root.children[0].children[0].children[1].content);
      });
    }
  }]);

  return CustomWolframAlpha;
}(_WolframAlpha3.default);

exports.default = CustomWolframAlpha;