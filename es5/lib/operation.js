'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OperationController = exports.OperationRouting = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var OperationRouting = exports.OperationRouting = function () {
  function OperationRouting() {
    (0, _classCallCheck3.default)(this, OperationRouting);
  }

  (0, _createClass3.default)(OperationRouting, [{
    key: 'setup',
    value: function setup(routes) {
      routes.controller('OperationController', function (routes) {
        routes.from('NamedKernelManager', function (routes) {
          routes.event('start', 'boot_all');
          routes.event('boot');
          routes.event('close');
          routes.event('halt');
        });
      });
    }
  }]);
  return OperationRouting;
}();

// TODO 分け方がざっくりしている


var OperationController = exports.OperationController = function (_NamedKernelManagerCo) {
  (0, _inherits3.default)(OperationController, _NamedKernelManagerCo);

  function OperationController(manager) {
    (0, _classCallCheck3.default)(this, OperationController);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(OperationController).call(this, manager));
  }

  (0, _createClass3.default)(OperationController, [{
    key: 'boot_all',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var profile, ghosts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.manager.profile();

              case 2:
                profile = _context.sent;
                ghosts = profile.ghosts && profile.ghosts.length ? profile.ghosts : ['js']; // TODO: 無ゴースト起動
                // TODO: 他形式対応

                ghosts.map(function (ghostname) {
                  return _this2.manager.loadGhost(ghostname).then(function (kernel) {
                    return kernel.start();
                  });
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function boot_all() {
        return _ref.apply(this, arguments);
      }

      return boot_all;
    }()
  }]);
  return OperationController;
}(_namedKernelManager.NamedKernelManagerController);

_namedKernelManager.NamedKernelManagerControllers.OperationController = OperationController;
_namedKernelManager.NamedKernelManagerRoutings.push(OperationRouting);
//# sourceMappingURL=operation.js.map
