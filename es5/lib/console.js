'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsoleController = exports.ConsoleRouting = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _namedKernelManager = require('named-kernel-manager');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConsoleRouting = exports.ConsoleRouting = function () {
  function ConsoleRouting() {
    (0, _classCallCheck3.default)(this, ConsoleRouting);
  }

  (0, _createClass3.default)(ConsoleRouting, [{
    key: 'setup',
    value: function setup(routes) {
      routes.controller('ConsoleController', function (routes) {
        routes.from('NamedKernelManager', function (routes) {
          routes.event('start');
        });
      });
    }
  }]);
  return ConsoleRouting;
}();

var ConsoleController = exports.ConsoleController = function (_NamedKernelManagerCo) {
  (0, _inherits3.default)(ConsoleController, _NamedKernelManagerCo);

  function ConsoleController(manager) {
    (0, _classCallCheck3.default)(this, ConsoleController);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ConsoleController).call(this, manager));

    var namedManager = _this.manager.components.NamedManager;
    // shortcuts
    _this.manager.log = function (message) {
      return namedManager.console.log(message);
    };
    _this.manager.warn = function (message) {
      return namedManager.console.warn(message);
    };
    _this.manager.error = function (message) {
      return namedManager.console.error(message);
    };
    _this.manager.info = function (message) {
      return namedManager.console.info(message);
    };
    return _this;
  }

  (0, _createClass3.default)(ConsoleController, [{
    key: 'start',
    value: function start() {}
  }]);
  return ConsoleController;
}(_namedKernelManager.NamedKernelManagerController);

_namedKernelManager.NamedKernelManagerControllers.ConsoleController = ConsoleController;
_namedKernelManager.NamedKernelManagerRoutings.push(ConsoleRouting);
//# sourceMappingURL=console.js.map
