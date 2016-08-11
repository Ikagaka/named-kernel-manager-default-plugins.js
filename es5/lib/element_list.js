'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementListController = exports.ElementListRouting = exports.ShellList = exports.BalloonList = exports.GhostList = exports.ElementList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _namedKernelManager = require('named-kernel-manager');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ElementList = exports.ElementList = function ElementList(manager) {
  var interval = arguments.length <= 1 || arguments[1] === undefined ? 1000 : arguments[1];
  (0, _classCallCheck3.default)(this, ElementList);

  this.manager = manager;
  this.getList();
  this.timer = setInterval(this.getList.bind(this), interval);
  this.list = [];
};

var GhostList = exports.GhostList = function (_ElementList) {
  (0, _inherits3.default)(GhostList, _ElementList);

  function GhostList() {
    (0, _classCallCheck3.default)(this, GhostList);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(GhostList).apply(this, arguments));
  }

  (0, _createClass3.default)(GhostList, [{
    key: 'getList',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var nanikaStorage, ghosts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                nanikaStorage = this.manager.components.NanikaStorage;
                _context.next = 3;
                return nanikaStorage.ghosts();

              case 3:
                ghosts = _context.sent;
                _context.next = 6;
                return _promise2.default.all(ghosts.map(function (dirpath) {
                  return nanikaStorage.ghost_name(dirpath).then(function (name) {
                    return [name, dirpath];
                  });
                }));

              case 6:
                this.list = _context.sent;

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getList() {
        return _ref.apply(this, arguments);
      }

      return getList;
    }()
  }]);
  return GhostList;
}(ElementList);

var BalloonList = exports.BalloonList = function (_ElementList2) {
  (0, _inherits3.default)(BalloonList, _ElementList2);

  function BalloonList() {
    (0, _classCallCheck3.default)(this, BalloonList);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BalloonList).apply(this, arguments));
  }

  (0, _createClass3.default)(BalloonList, [{
    key: 'getList',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var nanikaStorage, balloons;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                nanikaStorage = this.manager.components.NanikaStorage;
                _context2.next = 3;
                return nanikaStorage.balloons();

              case 3:
                balloons = _context2.sent;
                _context2.next = 6;
                return _promise2.default.all(balloons.map(function (dirpath) {
                  return nanikaStorage.balloon_name(dirpath).then(function (name) {
                    return [name, dirpath];
                  });
                }));

              case 6:
                this.list = _context2.sent;

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getList() {
        return _ref2.apply(this, arguments);
      }

      return getList;
    }()
  }]);
  return BalloonList;
}(ElementList);

var ShellList = exports.ShellList = function (_ElementList3) {
  (0, _inherits3.default)(ShellList, _ElementList3);

  function ShellList(manager) {
    (0, _classCallCheck3.default)(this, ShellList);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ShellList).call(this, manager));

    _this3.list = {};
    return _this3;
  }

  (0, _createClass3.default)(ShellList, [{
    key: 'getList',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var _this4 = this;

        var nanikaStorage, ghosts, shells, list;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                nanikaStorage = this.manager.components.NanikaStorage;
                _context3.next = 3;
                return nanikaStorage.ghosts();

              case 3:
                ghosts = _context3.sent;
                _context3.next = 6;
                return _promise2.default.all(ghosts.map(function (dirpath) {
                  return _this4.getShellList(dirpath);
                }));

              case 6:
                shells = _context3.sent;
                list = {};

                ghosts.forEach(function (_, index) {
                  list[ghosts[index]] = shells[index];
                });
                this.list = list;

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getList() {
        return _ref3.apply(this, arguments);
      }

      return getList;
    }()
  }, {
    key: 'getShellList',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(ghostpath) {
        var nanikaStorage, shells;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                nanikaStorage = this.manager.components.NanikaStorage;
                _context4.next = 3;
                return nanikaStorage.shells(ghostpath);

              case 3:
                shells = _context4.sent;
                _context4.next = 6;
                return _promise2.default.all(shells.map(function (dirpath) {
                  return nanikaStorage.shell_name(ghostpath, dirpath).then(function (name) {
                    return [name, dirpath];
                  });
                }));

              case 6:
                return _context4.abrupt('return', _context4.sent);

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getShellList(_x2) {
        return _ref4.apply(this, arguments);
      }

      return getShellList;
    }()
  }]);
  return ShellList;
}(ElementList);

var ElementListRouting = exports.ElementListRouting = function () {
  function ElementListRouting() {
    (0, _classCallCheck3.default)(this, ElementListRouting);
  }

  (0, _createClass3.default)(ElementListRouting, [{
    key: 'setup',
    value: function setup(routes) {
      routes.controller('ElementListController', function (routes) {
        routes.from('NamedKernelManager', function (routes) {
          routes.event('start');
        });
      });
    }
  }]);
  return ElementListRouting;
}();

// ゴースト等のリストをメニューから同期的に参照できるように


var ElementListController = exports.ElementListController = function (_NamedKernelManagerCo) {
  (0, _inherits3.default)(ElementListController, _NamedKernelManagerCo);

  function ElementListController(manager) {
    (0, _classCallCheck3.default)(this, ElementListController);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ElementListController).call(this, manager));
  }

  (0, _createClass3.default)(ElementListController, [{
    key: 'start',
    value: function start() {
      this.manager.registerComponent('GhostList', new GhostList(this.manager));
      this.manager.registerComponent('BalloonList', new BalloonList(this.manager));
      this.manager.registerComponent('ShellList', new ShellList(this.manager));
    }
  }]);
  return ElementListController;
}(_namedKernelManager.NamedKernelManagerController);

_namedKernelManager.NamedKernelManagerControllers.ElementListController = ElementListController;
_namedKernelManager.NamedKernelManagerRoutings.push(ElementListRouting);
//# sourceMappingURL=element_list.js.map
