'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OperationController = exports.OperationRouting = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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
          routes.event('boot_named');
          routes.event('close_named');
          routes.event('change_named');
          routes.event('close');
          routes.event('halt');
          routes.event('kernel_unregistered');
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

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(OperationController).call(this, manager));

    _this.closeComplete = {};
    return _this;
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
                  return _this2.boot_named(ghostname);
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
  }, {
    key: 'boot_named',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(namedId) {
        var kernel, profile;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.manager.loadGhost(namedId);

              case 2:
                kernel = _context2.sent;

                kernel.start();
                _context2.next = 6;
                return this.manager.profile();

              case 6:
                profile = _context2.sent;

                profile.ghosts.push(namedId);
                _context2.next = 10;
                return this.manager.profile(profile);

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function boot_named(_x) {
        return _ref2.apply(this, arguments);
      }

      return boot_named;
    }()
  }, {
    key: 'close_named',
    value: function close_named(namedId) {
      var _this3 = this;

      return new _promise2.default(function (resolve) {
        var kernel = _this3.manager.kernel(namedId);
        _this3.closeComplete[namedId] = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
          var profile;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  delete _this3.closeComplete[namedId];
                  _context3.next = 3;
                  return _this3.manager.profile();

                case 3:
                  profile = _context3.sent;

                  profile.ghosts = profile.ghosts.filter(function (ghostname) {
                    return ghostname !== namedId;
                  });
                  _context3.next = 7;
                  return _this3.manager.profile(profile);

                case 7:
                  resolve();

                case 8:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3);
        }));
        kernel.close();
      });
    }
  }, {
    key: 'change_named',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(oldNamedId, newNamedId) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.close_named(oldNamedId);

              case 2:
                _context4.next = 4;
                return this.boot_named(newNamedId);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function change_named(_x2, _x3) {
        return _ref4.apply(this, arguments);
      }

      return change_named;
    }()
  }, {
    key: 'close',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
        var _this4 = this;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _promise2.default.all(this.manager.namedIds().map(function (namedId) {
                  return _this4.close_named(namedId);
                }));

              case 2:
                this.kernel.halt();

              case 3:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function close() {
        return _ref5.apply(this, arguments);
      }

      return close;
    }()
  }, {
    key: 'halt',
    value: function halt() {
      // TODO
    }
  }, {
    key: 'kernel_unregistered',
    value: function kernel_unregistered(namedId) {
      if (this.closeComplete[namedId]) this.closeComplete[namedId]();
    }
  }]);
  return OperationController;
}(_namedKernelManager.NamedKernelManagerController);

_namedKernelManager.NamedKernelManagerControllers.OperationController = OperationController;
_namedKernelManager.NamedKernelManagerRoutings.push(OperationRouting);
//# sourceMappingURL=operation.js.map
