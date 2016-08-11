var namedKernelManagerDefaultPlugins =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(139);
	
	__webpack_require__(140);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.OperationController = exports.OperationRouting = undefined;
	
	var _promise = __webpack_require__(2);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _regenerator = __webpack_require__(67);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(71);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _getPrototypeOf = __webpack_require__(72);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _possibleConstructorReturn2 = __webpack_require__(76);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(96);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classCallCheck2 = __webpack_require__(104);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(105);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _namedKernelManager = __webpack_require__(109);
	
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
	        var kernel;
	        return _regenerator2.default.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _context2.next = 2;
	                return this.manager.loadGhost(namedId);
	
	              case 2:
	                kernel = _context2.sent;
	
	                kernel.start();
	
	              case 4:
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
	
	      // TODO change
	      return new _promise2.default(function (resolve) {
	        var kernel = _this3.manager.kernel(namedId);
	        _this3.closeComplete[namedId] = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
	          return _regenerator2.default.wrap(function _callee3$(_context3) {
	            while (1) {
	              switch (_context3.prev = _context3.next) {
	                case 0:
	                  delete _this3.closeComplete[namedId];
	                  resolve();
	
	                case 2:
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
	      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(namedId, fromNamedId) {
	        return _regenerator2.default.wrap(function _callee4$(_context4) {
	          while (1) {
	            switch (_context4.prev = _context4.next) {
	              case 0:
	                _context4.next = 2;
	                return this.close_named(fromNamedId);
	
	              case 2:
	                _context4.next = 4;
	                return this.boot_named(namedId);
	
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
	
	        var profile;
	        return _regenerator2.default.wrap(function _callee5$(_context5) {
	          while (1) {
	            switch (_context5.prev = _context5.next) {
	              case 0:
	                _context5.next = 2;
	                return this.manager.profile();
	
	              case 2:
	                profile = _context5.sent;
	
	                profile.ghosts = this.manager.namedIds();
	                _context5.next = 6;
	                return this.manager.profile(profile);
	
	              case 6:
	                _context5.next = 8;
	                return _promise2.default.all(this.manager.namedIds().map(function (namedId) {
	                  return _this4.close_named(namedId);
	                }));
	
	              case 8:
	                this.manager.halt();
	
	              case 9:
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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(49);
	__webpack_require__(53);
	module.exports = __webpack_require__(13).Promise;

/***/ },
/* 4 */
/***/ function(module, exports) {



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(6)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(9)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(7)
	  , defined   = __webpack_require__(8);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(10)
	  , $export        = __webpack_require__(11)
	  , redefine       = __webpack_require__(26)
	  , hide           = __webpack_require__(16)
	  , has            = __webpack_require__(27)
	  , Iterators      = __webpack_require__(28)
	  , $iterCreate    = __webpack_require__(29)
	  , setToStringTag = __webpack_require__(45)
	  , getPrototypeOf = __webpack_require__(47)
	  , ITERATOR       = __webpack_require__(46)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , core      = __webpack_require__(13)
	  , ctx       = __webpack_require__(14)
	  , hide      = __webpack_require__(16)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 12 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(17)
	  , createDesc = __webpack_require__(25);
	module.exports = __webpack_require__(21) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(18)
	  , IE8_DOM_DEFINE = __webpack_require__(20)
	  , toPrimitive    = __webpack_require__(24)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(21) && !__webpack_require__(22)(function(){
	  return Object.defineProperty(__webpack_require__(23)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(22)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19)
	  , document = __webpack_require__(12).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(19);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16);

/***/ },
/* 27 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(30)
	  , descriptor     = __webpack_require__(25)
	  , setToStringTag = __webpack_require__(45)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(16)(IteratorPrototype, __webpack_require__(46)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(18)
	  , dPs         = __webpack_require__(31)
	  , enumBugKeys = __webpack_require__(43)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(23)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(44).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(17)
	  , anObject = __webpack_require__(18)
	  , getKeys  = __webpack_require__(32);
	
	module.exports = __webpack_require__(21) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(33)
	  , enumBugKeys = __webpack_require__(43);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(27)
	  , toIObject    = __webpack_require__(34)
	  , arrayIndexOf = __webpack_require__(37)(false)
	  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(35)
	  , defined = __webpack_require__(8);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(36);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(34)
	  , toLength  = __webpack_require__(38)
	  , toIndex   = __webpack_require__(39);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(7)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(7)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(41)('keys')
	  , uid    = __webpack_require__(42);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12).document && document.documentElement;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(17).f
	  , has = __webpack_require__(27)
	  , TAG = __webpack_require__(46)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(41)('wks')
	  , uid        = __webpack_require__(42)
	  , Symbol     = __webpack_require__(12).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(27)
	  , toObject    = __webpack_require__(48)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(8);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	var global        = __webpack_require__(12)
	  , hide          = __webpack_require__(16)
	  , Iterators     = __webpack_require__(28)
	  , TO_STRING_TAG = __webpack_require__(46)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(51)
	  , step             = __webpack_require__(52)
	  , Iterators        = __webpack_require__(28)
	  , toIObject        = __webpack_require__(34);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(9)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(10)
	  , global             = __webpack_require__(12)
	  , ctx                = __webpack_require__(14)
	  , classof            = __webpack_require__(54)
	  , $export            = __webpack_require__(11)
	  , isObject           = __webpack_require__(19)
	  , aFunction          = __webpack_require__(15)
	  , anInstance         = __webpack_require__(55)
	  , forOf              = __webpack_require__(56)
	  , speciesConstructor = __webpack_require__(60)
	  , task               = __webpack_require__(61).set
	  , microtask          = __webpack_require__(63)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(46)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(64)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(45)($Promise, PROMISE);
	__webpack_require__(65)(PROMISE);
	Wrapper = __webpack_require__(13)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(66)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(36)
	  , TAG = __webpack_require__(46)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(14)
	  , call        = __webpack_require__(57)
	  , isArrayIter = __webpack_require__(58)
	  , anObject    = __webpack_require__(18)
	  , toLength    = __webpack_require__(38)
	  , getIterFn   = __webpack_require__(59)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(18);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(28)
	  , ITERATOR   = __webpack_require__(46)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(54)
	  , ITERATOR  = __webpack_require__(46)('iterator')
	  , Iterators = __webpack_require__(28);
	module.exports = __webpack_require__(13).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(18)
	  , aFunction = __webpack_require__(15)
	  , SPECIES   = __webpack_require__(46)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(14)
	  , invoke             = __webpack_require__(62)
	  , html               = __webpack_require__(44)
	  , cel                = __webpack_require__(23)
	  , global             = __webpack_require__(12)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(36)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , macrotask = __webpack_require__(61).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(36)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(16);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(12)
	  , core        = __webpack_require__(13)
	  , dP          = __webpack_require__(17)
	  , DESCRIPTORS = __webpack_require__(21)
	  , SPECIES     = __webpack_require__(46)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(46)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(68);


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(69);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(70)))

/***/ },
/* 70 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _promise = __webpack_require__(2);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }
	
	        if (info.done) {
	          resolve(value);
	        } else {
	          return _promise2.default.resolve(value).then(function (value) {
	            return step("next", value);
	          }, function (err) {
	            return step("throw", err);
	          });
	        }
	      }
	
	      return step("next");
	    });
	  };
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(74);
	module.exports = __webpack_require__(13).Object.getPrototypeOf;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(48)
	  , $getPrototypeOf = __webpack_require__(47);
	
	__webpack_require__(75)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(11)
	  , core    = __webpack_require__(13)
	  , fails   = __webpack_require__(22);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(77);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(78);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(81);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(49);
	module.exports = __webpack_require__(80).f('iterator');

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(46);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	__webpack_require__(4);
	__webpack_require__(94);
	__webpack_require__(95);
	module.exports = __webpack_require__(13).Symbol;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(12)
	  , has            = __webpack_require__(27)
	  , DESCRIPTORS    = __webpack_require__(21)
	  , $export        = __webpack_require__(11)
	  , redefine       = __webpack_require__(26)
	  , META           = __webpack_require__(84).KEY
	  , $fails         = __webpack_require__(22)
	  , shared         = __webpack_require__(41)
	  , setToStringTag = __webpack_require__(45)
	  , uid            = __webpack_require__(42)
	  , wks            = __webpack_require__(46)
	  , wksExt         = __webpack_require__(80)
	  , wksDefine      = __webpack_require__(85)
	  , keyOf          = __webpack_require__(86)
	  , enumKeys       = __webpack_require__(87)
	  , isArray        = __webpack_require__(90)
	  , anObject       = __webpack_require__(18)
	  , toIObject      = __webpack_require__(34)
	  , toPrimitive    = __webpack_require__(24)
	  , createDesc     = __webpack_require__(25)
	  , _create        = __webpack_require__(30)
	  , gOPNExt        = __webpack_require__(91)
	  , $GOPD          = __webpack_require__(93)
	  , $DP            = __webpack_require__(17)
	  , $keys          = __webpack_require__(32)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(92).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(89).f  = $propertyIsEnumerable;
	  __webpack_require__(88).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(10)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(42)('meta')
	  , isObject = __webpack_require__(19)
	  , has      = __webpack_require__(27)
	  , setDesc  = __webpack_require__(17).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(22)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(12)
	  , core           = __webpack_require__(13)
	  , LIBRARY        = __webpack_require__(10)
	  , wksExt         = __webpack_require__(80)
	  , defineProperty = __webpack_require__(17).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(32)
	  , toIObject = __webpack_require__(34);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(32)
	  , gOPS    = __webpack_require__(88)
	  , pIE     = __webpack_require__(89);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 89 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(36);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(34)
	  , gOPN      = __webpack_require__(92).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(33)
	  , hiddenKeys = __webpack_require__(43).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(89)
	  , createDesc     = __webpack_require__(25)
	  , toIObject      = __webpack_require__(34)
	  , toPrimitive    = __webpack_require__(24)
	  , has            = __webpack_require__(27)
	  , IE8_DOM_DEFINE = __webpack_require__(20)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(21) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85)('asyncIterator');

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85)('observable');

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(97);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(101);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(77);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(99);
	module.exports = __webpack_require__(13).Object.setPrototypeOf;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(11);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(100).set});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(19)
	  , anObject = __webpack_require__(18);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(14)(Function.call, __webpack_require__(93).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(103);
	var $Object = __webpack_require__(13).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(11)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(30)});

/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(106);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(108);
	var $Object = __webpack_require__(13).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(11);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(21), 'Object', {defineProperty: __webpack_require__(17).f});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/* (C) 2016 Narazaka : Licensed under The MIT License - https://narazaka.net/license/MIT?2016 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NamedKernelManagerController = exports.NamedKernelManager = exports.NamedKernelManagerControllers = exports.NamedKernelManagerRoutings = undefined;
	
	var _keys = __webpack_require__(110);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _regenerator = __webpack_require__(67);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(71);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _getPrototypeOf = __webpack_require__(72);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(104);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(105);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(76);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(96);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _mixin = __webpack_require__(113);
	
	var _mixin2 = _interopRequireDefault(_mixin);
	
	var _routableComponent = __webpack_require__(124);
	
	var _namedKernelManagerGhostModule = __webpack_require__(126);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * ルーティング設定クラスのリスト
	 * @type {RoutableComponentRouting[]}
	 */
	var NamedKernelManagerRoutings = exports.NamedKernelManagerRoutings = [];
	
	/**
	 * コントローラクラスの連想配列
	 * @type {Hash<NamedKernelManagerController>}
	 */
	var NamedKernelManagerControllers = exports.NamedKernelManagerControllers = {};
	
	/** Ukagaka baseware named manager */
	
	var NamedKernelManager = exports.NamedKernelManager = function (_RoutableComponent) {
	  (0, _inherits3.default)(NamedKernelManager, _RoutableComponent);
	
	  /**
	   * constructor
	   * @param {Object} components - Event source
	   * @param {NanikaStorage} components.NanikaStorage - storage
	   * @param {NamedManager} components.NamedManager - named manager
	   * @param {TimerEventSource} components.TimerEventSource - Timer event source
	   * @param {RoutableComponentRoutes} [routes] - ルーティング
	   * @param {Hash<NamedKernelManagerController>} [controllers_classes] - コントローラ
	   */
	
	  function NamedKernelManager(components) {
	    var routes = arguments.length <= 1 || arguments[1] === undefined ? new _routableComponent.RoutableComponentRoutes(NamedKernelManagerRoutings) : arguments[1];
	    var controllerClasses = arguments.length <= 2 || arguments[2] === undefined ? NamedKernelManagerControllers : arguments[2];
	    (0, _classCallCheck3.default)(this, NamedKernelManager);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NamedKernelManager).call(this, components, routes, controllerClasses));
	
	    _this.registerComponent('NamedKernelManager', _this);
	
	    /** @type {NamedKernel[]} */
	    _this._namedKernels = {};
	    return _this;
	  }
	
	  /**
	   * start manager (emits start event)
	   * @return {void}
	   */
	
	
	  (0, _createClass3.default)(NamedKernelManager, [{
	    key: 'start',
	    value: function () {
	      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                this.emit('start');
	
	              case 1:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));
	
	      function start() {
	        return _ref.apply(this, arguments);
	      }
	
	      return start;
	    }()
	
	    /**
	     * close manager (emits close event)
	     * @return {void}
	     */
	
	  }, {
	    key: 'close',
	    value: function () {
	      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
	        return _regenerator2.default.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                this.emit('close');
	
	              case 1:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));
	
	      function close() {
	        return _ref2.apply(this, arguments);
	      }
	
	      return close;
	    }()
	  }, {
	    key: 'profile',
	    value: function profile(newProfile) {
	      return this.components.NanikaStorage.base_profile(newProfile);
	    }
	
	    /**
	     * existing named ids
	     * @return {Array<string>} named ids
	     */
	
	  }, {
	    key: 'namedIds',
	    value: function namedIds() {
	      return (0, _keys2.default)(this._namedKernels);
	    }
	
	    /**
	     * named instance exists or not
	     * @param {string} namedId - named id
	     * @return {boolean} exists or not
	     */
	
	  }, {
	    key: 'isKernelExists',
	    value: function isKernelExists(namedId) {
	      // in や [] 等ではprototypeのものも認識するため
	      return this._namedKernels.hasOwnProperty(namedId);
	    }
	
	    /**
	     * named kernel instance
	     * @param {string} namedId - named id
	     * @return {NamedKernel} named instance
	     */
	
	  }, {
	    key: 'kernel',
	    value: function kernel(namedId) {
	      return this.isKernelExists(namedId) ? this._namedKernels[namedId].kernel : null;
	    }
	
	    /**
	     * find named id of a kernel
	     * @param {NamedKernel} kernel - named kernel
	     * @return {string} named id
	     */
	
	  }, {
	    key: 'namedId',
	    value: function namedId(kernel) {
	      var _this2 = this;
	
	      return (0, _keys2.default)(this._namedKernels).find(function (namedId) {
	        return _this2.kernel(namedId) === kernel;
	      });
	    }
	
	    /**
	     * register named kernel
	     * @param {string} namedId - named id
	     * @param {NamedKernel} kernel - kernel
	     * @return {NamedKernel} kernel
	     */
	
	  }, {
	    key: 'registerKernel',
	    value: function registerKernel(namedId, kernel) {
	      if (this.isKernelExists(namedId)) {
	        throw new Error('kernel [' + namedId + '] already exists');
	      }
	      this._namedKernels[namedId] = kernel;
	      this.emit('kernel_registered', namedId);
	      return kernel;
	    }
	
	    /**
	     * unregister named kernel
	     * @param {string} namedId - named id
	     * @return {void}
	     */
	
	  }, {
	    key: 'unregisterKernel',
	    value: function unregisterKernel(namedId) {
	      if (!this.isKernelExists(namedId)) {
	        throw new Error('kernel [' + namedId + '] not exists');
	      }
	      delete this._namedKernels[namedId];
	      this.emit('kernel_unregistered', namedId);
	    }
	
	    /**
	     * send communication
	     * @param {string} fromId - from named id
	     * @param {string} toId - to named id
	     * @param {any} content - communication content
	     * @return {Promise<transactionlike>} transaction
	     */
	
	  }, {
	    key: 'sendCommunication',
	    value: function sendCommunication(fromId, toId, content) {}
	
	    /**
	     * send notice
	     * @param {string} fromId - from named id
	     * @param {string} toId - to named id
	     * @param {any} content - communication content
	     * @return {Promise<transactionlike>} transaction
	     */
	
	  }, {
	    key: 'sendNotice',
	    value: function sendNotice(fromId, toId, content) {}
	    // other close etc
	
	
	    /**
	     * install named
	     * @param {any} target install target resource (file, url or some)
	     * @param {NamedKernel} from who handled the target?
	     * @return {Promise<any>}
	     */
	
	  }, {
	    key: 'installNamed',
	    value: function () {
	      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(target, from) {
	        return _regenerator2.default.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                _context3.next = 2;
	                return this.installNar(target, from);
	
	              case 2:
	                return _context3.abrupt('return', _context3.sent);
	
	              case 3:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this);
	      }));
	
	      function installNamed(_x3, _x4) {
	        return _ref3.apply(this, arguments);
	      }
	
	      return installNamed;
	    }()
	  }]);
	  return NamedKernelManager;
	}(_routableComponent.RoutableComponent);
	
	(0, _mixin2.default)(NamedKernelManager, _namedKernelManagerGhostModule.NamedKernelManagerGhostModule);
	
	/**
	 * マネージャ用のコントローラ
	 * @implements {RoutableComponentController}
	 */
	
	var NamedKernelManagerController = exports.NamedKernelManagerController = function () {
	  /**
	   * コンストラクタ
	   * @param {NamedKernelManager} manager マネージャ
	   */
	
	  function NamedKernelManagerController(manager) {
	    (0, _classCallCheck3.default)(this, NamedKernelManagerController);
	
	    this._manager = manager;
	  }
	
	  /**
	   * マネージャ
	   * @type {NamedKernelManager}
	   */
	
	
	  (0, _createClass3.default)(NamedKernelManagerController, [{
	    key: 'manager',
	    get: function get() {
	      return this._manager;
	    }
	  }]);
	  return NamedKernelManagerController;
	}();
	//# sourceMappingURL=named-kernel-manager.js.map


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(112);
	module.exports = __webpack_require__(13).Object.keys;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(48)
	  , $keys    = __webpack_require__(32);
	
	__webpack_require__(75)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/* (C) 2016 Narazaka : Licensed under The MIT License - https://narazaka.net/license/MIT?2016 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty = __webpack_require__(106);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _getOwnPropertyDescriptor = __webpack_require__(114);
	
	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
	
	var _ownKeys = __webpack_require__(117);
	
	var _ownKeys2 = _interopRequireDefault(_ownKeys);
	
	var _getIterator2 = __webpack_require__(121);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	exports.default = mixinClass;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function mixinClass(baseClass, target) {
	    var targetObj = typeof target === "function" ? target.prototype : target;
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = (0, _getIterator3.default)((0, _ownKeys2.default)(targetObj)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var key = _step.value;
	
	            // コンストラクタは(相手にするのが面倒くさすぎるので)無視する
	            if (key === "constructor") continue;
	
	            var descriptor = (0, _getOwnPropertyDescriptor2.default)(targetObj, key);
	
	            descriptor.configurable = true;
	            descriptor.enumerable = false;
	            if (descriptor.hasOwnProperty("writable")) {
	                descriptor.writable = true;
	            }
	
	            (0, _defineProperty2.default)(baseClass.prototype, key, descriptor);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	}
	//# sourceMappingURL=mixin.js.map


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(116);
	var $Object = __webpack_require__(13).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(34)
	  , $getOwnPropertyDescriptor = __webpack_require__(93).f;
	
	__webpack_require__(75)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(118), __esModule: true };

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(119);
	module.exports = __webpack_require__(13).Reflect.ownKeys;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(11);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(120)});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(92)
	  , gOPS     = __webpack_require__(88)
	  , anObject = __webpack_require__(18)
	  , Reflect  = __webpack_require__(12).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49);
	__webpack_require__(5);
	module.exports = __webpack_require__(123);

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(18)
	  , get      = __webpack_require__(59);
	module.exports = __webpack_require__(13).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/* (C) 2016 Narazaka : Licensed under The MIT License - https://narazaka.net/license/MIT?2016 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RoutableComponentRoute = exports.RoutableComponentRoutes = exports.RoutableComponentController = exports.RoutableComponentRouting = exports.RoutableComponent = undefined;
	
	var _iterator6 = __webpack_require__(78);
	
	var _iterator7 = _interopRequireDefault(_iterator6);
	
	var _keys = __webpack_require__(110);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(121);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _getPrototypeOf = __webpack_require__(72);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(104);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(105);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(76);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(96);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _events = __webpack_require__(125);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * ルーティング可能なコンポーネント
	 */
	
	var RoutableComponent = exports.RoutableComponent = function (_EventEmitter) {
	  (0, _inherits3.default)(RoutableComponent, _EventEmitter);
	
	  /**
	   * constructor
	   * @param {Object<EventEmitter>} [components] コンポーネントの連想配列
	   * @param {RoutableComponentRoutes} routes ルーティング
	   * @param {Object<RoutableComponentController>} controllerClasses コントローラクラスの連想配列
	   */
	
	  function RoutableComponent(components, routes, controllerClasses) {
	    (0, _classCallCheck3.default)(this, RoutableComponent);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RoutableComponent).call(this));
	
	    _this._routes = routes;
	    _this._controllerClasses = controllerClasses;
	    _this._controllers = {};
	    _this._components = {};
	    _this._listeners = {};
	    _this.registerComponents(components);
	    return _this;
	  }
	
	  /**
	   * Routes
	   * @type {RoutableComponentRoutes}
	   */
	
	
	  (0, _createClass3.default)(RoutableComponent, [{
	    key: 'registerComponents',
	
	
	    /**
	     * コンポーネントを追加し、ルーティングによるイベントを設定する
	     *
	     * すでにコンポーネントがあった場合は一度削除してから改めて追加する
	     * @param {Object<RoutableComponent>} components コンポーネントのリスト
	     * @return {void}
	     */
	    value: function registerComponents(components) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(components)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var name = _step.value;
	
	          var component = components[name];
	          this.registerComponent(name, component);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	
	    /**
	     * コンポーネントを追加し、ルーティングによるイベントを設定する
	     *
	     * すでにコンポーネントがあった場合は一度削除してから改めて追加する
	     * @param {string} name コンポーネント名
	     * @param {RoutableComponent} component コンポーネント
	     * @return {void}
	     */
	
	  }, {
	    key: 'registerComponent',
	    value: function registerComponent(name, component) {
	      if (this.components[name]) this.unregisterComponent(name);
	      this.components[name] = component;
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = (0, _getIterator3.default)(this.routes), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var route = _step2.value;
	
	          if (route.from === name) this._attachRouteEvent(route);
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	
	    /**
	     * コンポーネントを削除し、ルーティングによるイベントを破棄する
	     * @param {string} name コンポーネント名
	     * @return {void}
	     */
	
	  }, {
	    key: 'unregisterComponent',
	    value: function unregisterComponent(name) {
	      if (this.components[name] && this._listeners[name]) {
	        var listeners = this._listeners[name];
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;
	
	        try {
	          for (var _iterator3 = (0, _getIterator3.default)((0, _keys2.default)(listeners)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var event = _step3.value;
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	              for (var _iterator4 = (0, _getIterator3.default)(listeners[event]), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                var listener = _step4.value;
	
	                this.components[name].removeListener(event, listener);
	              }
	            } catch (err) {
	              _didIteratorError4 = true;
	              _iteratorError4 = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                  _iterator4.return();
	                }
	              } finally {
	                if (_didIteratorError4) {
	                  throw _iteratorError4;
	                }
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError3 = true;
	          _iteratorError3 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	              _iterator3.return();
	            }
	          } finally {
	            if (_didIteratorError3) {
	              throw _iteratorError3;
	            }
	          }
	        }
	      }
	      delete this.components[name];
	      delete this._listeners[name];
	    }
	  }, {
	    key: '_attachRouteEvent',
	    value: function _attachRouteEvent(route) {
	      var _this2 = this;
	
	      var listener = function listener() {
	        var _controllers$route$co;
	
	        if (!_this2.controllers[route.controller]) {
	          if (!(route.controller in _this2.controllerClasses)) {
	            throw new Error('controller [' + route.controller + '] not found');
	          }
	          _this2.controllers[route.controller] = new _this2.controllerClasses[route.controller](_this2);
	        }
	        if (!_this2.controllers[route.controller][route.action]) {
	          throw new Error('controller [' + route.controller + '] does not have action [' + route.action + ']');
	        }
	        (_controllers$route$co = _this2.controllers[route.controller])[route.action].apply(_controllers$route$co, arguments);
	      };
	      this.components[route.from].on(route.event, listener);
	      if (!this._listeners[route.from]) this._listeners[route.from] = {};
	      if (!this._listeners[route.from][route.event]) this._listeners[route.from][route.event] = [];
	      this._listeners[route.from][route.event].push(listener);
	    }
	  }, {
	    key: 'routes',
	    get: function get() {
	      return this._routes;
	    }
	
	    /**
	     * Controllers
	     * @type {Hash<RoutableComponentController>}
	     */
	
	  }, {
	    key: 'controllers',
	    get: function get() {
	      return this._controllers;
	    }
	
	    /**
	     * Controller classes
	     * @type {Hash<class<RoutableComponentController>>}
	     */
	
	  }, {
	    key: 'controllerClasses',
	    get: function get() {
	      return this._controllerClasses;
	    }
	
	    /**
	     * Components
	     * @type {Hash<EventEmitter>}
	     */
	
	  }, {
	    key: 'components',
	    get: function get() {
	      return this._components;
	    }
	  }]);
	  return RoutableComponent;
	}(_events.EventEmitter);
	
	/**
	 * ルーティング設定定義
	 * @interface
	 */
	
	
	var RoutableComponentRouting = exports.RoutableComponentRouting = function () {
	  function RoutableComponentRouting() {
	    (0, _classCallCheck3.default)(this, RoutableComponentRouting);
	  }
	
	  (0, _createClass3.default)(RoutableComponentRouting, [{
	    key: 'setup',
	
	    /**
	     * ルーティングをセットアップする
	     * @param {RoutableComponentRoutes} routes ルーティング設定
	     * @return {void}
	     */
	    value: function setup(routes) {
	      throw new Error('abstruct');
	    }
	  }]);
	  return RoutableComponentRouting;
	}();
	
	/**
	 * コントローラ
	 * @interface
	 */
	
	
	var RoutableComponentController =
	/**
	 * コンストラクタ
	 * @param {RoutableComponent} component コンポーネント
	 */
	exports.RoutableComponentController = function RoutableComponentController(component) {
	  (0, _classCallCheck3.default)(this, RoutableComponentController);
	
	  throw new Error('abstruct');
	};
	
	/**
	 * イベントのルーティング設定
	 * @notice スレッドセーフではありません
	 */
	
	
	var RoutableComponentRoutes = function () {
	  /**
	   * コンストラクタ
	   * @param {RoutableComponentRouting|RoutableComponentRouting[]} routingClasses ルート定義クラス(の配列)
	   */
	
	  function RoutableComponentRoutes() {
	    var routingClasses = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    (0, _classCallCheck3.default)(this, RoutableComponentRoutes);
	
	    this._routes = [];
	    this.includeRoute(routingClasses);
	  }
	
	  /**
	   * ルートを設定する
	   * @param {Route|Route[]} routingClasses ルート定義クラス(の配列)
	   * @return {void}
	   */
	
	
	  (0, _createClass3.default)(RoutableComponentRoutes, [{
	    key: 'includeRoute',
	    value: function includeRoute(routingClasses) {
	      var _routingClasses = routingClasses instanceof Array ? routingClasses : [routingClasses];
	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;
	
	      try {
	        for (var _iterator5 = (0, _getIterator3.default)(_routingClasses), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var routeClass = _step5.value;
	
	          var route = new routeClass();
	          route.setup(this);
	        }
	      } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion5 && _iterator5.return) {
	            _iterator5.return();
	          }
	        } finally {
	          if (_didIteratorError5) {
	            throw _iteratorError5;
	          }
	        }
	      }
	    }
	  }, {
	    key: _iterator7.default,
	    value: function value() {
	      return (0, _getIterator3.default)(this._routes);
	    }
	
	    /**
	     * イベントを定義する
	     * @param {...string} args from, event, controller, action(前提としたものは省く)それぞれの名称文字列
	     * @return {void}
	     * @example
	     * router.event('shell', 'clicked', 'ShellController', 'shell_clicked'); // full
	     * router.event('shell', 'clicked', 'ShellController'); // event = action
	     * router.controller('ShellController', function(router) {
	     *   router.event('shell', 'clicked'); // controllerは前提があるので省く
	     * });
	     * router.from('shell', function(router) {
	     *   router.controller('ShellController', function(router) {
	     *     router.event('clicked'); // from, controllerは前提があるので省く
	     *   });
	     * });
	     */
	
	  }, {
	    key: 'event',
	    value: function event() {
	      if (this._currentFrom && this._currentController) {
	        if (arguments.length > 2) throw new Error('arguments too long');
	        this.eventOnFromController.apply(this, arguments);
	      } else if (this._currentFrom) {
	        if (arguments.length > 3) throw new Error('arguments too long');
	        this.eventOnFrom.apply(this, arguments);
	      } else if (this._currentController) {
	        if (arguments.length > 3) throw new Error('arguments too long');
	        this.eventOnController.apply(this, arguments);
	      } else {
	        this.eventOnNone.apply(this, arguments);
	      }
	    }
	
	    /**
	     * from, controllerを前提としてイベントを定義する
	     * @param {string} event イベント
	     * @param {string} [action] アクション
	     * @return {void}
	     */
	
	  }, {
	    key: 'eventOnFromController',
	    value: function eventOnFromController(event) {
	      var action = arguments.length <= 1 || arguments[1] === undefined ? event : arguments[1];
	
	      var from = this._currentFrom;
	      var controller = this._currentController;
	      this.addRoute(from, event, controller, action);
	    }
	
	    /**
	     * fromを前提としてイベントを定義する
	     * @param {string} event イベント
	     * @param {string} controller コントローラ
	     * @param {string} [action] アクション
	     * @return {void}
	     */
	
	  }, {
	    key: 'eventOnFrom',
	    value: function eventOnFrom(event, controller) {
	      var action = arguments.length <= 2 || arguments[2] === undefined ? event : arguments[2];
	
	      var from = this._currentFrom;
	      this.addRoute(from, event, controller, action);
	    }
	
	    /**
	     * controllerを前提としてイベントを定義する
	     * @param {string} from イベント発生源
	     * @param {string} event イベント
	     * @param {string} [action] アクション
	     * @return {void}
	     */
	
	  }, {
	    key: 'eventOnController',
	    value: function eventOnController(from, event) {
	      var action = arguments.length <= 2 || arguments[2] === undefined ? event : arguments[2];
	
	      var controller = this._currentController;
	      this.addRoute(from, event, controller, action);
	    }
	
	    /**
	     * 前提なしとしてイベントを定義する
	     * @param {string} from イベント発生源
	     * @param {string} event イベント
	     * @param {string} controller コントローラ
	     * @param {string} [action] アクション
	     * @return {void}
	     */
	
	  }, {
	    key: 'eventOnNone',
	    value: function eventOnNone(from, event, controller) {
	      var action = arguments.length <= 3 || arguments[3] === undefined ? event : arguments[3];
	
	      this.addRoute(from, event, controller, action);
	    }
	
	    /**
	     * イベント発生源を前提とする
	     * @param {string} from イベント発生源プロパティ名
	     * @param {Function} block 前提としたイベント発生源におけるルート定義を行う関数
	     * @return {void}
	     */
	
	  }, {
	    key: 'from',
	    value: function from(_from, block) {
	      this._currentFrom = _from;
	      block(this);
	      delete this._currentFrom;
	    }
	
	    /**
	     * コントローラーを前提とする
	     * @param {string} controller コントローラ名
	     * @param {Function} block 前提としたコントローラにおけるルート定義を行う関数
	     * @return {void}
	     */
	
	  }, {
	    key: 'controller',
	    value: function controller(_controller, block) {
	      this._currentController = _controller;
	      block(this);
	      delete this._currentController;
	    }
	
	    /**
	     * ルート定義を追加する
	     * @param {string} from イベント発生源
	     * @param {string} event イベント
	     * @param {string} controller コントローラ
	     * @param {string} action アクション
	     * @return {void}
	     */
	
	  }, {
	    key: 'addRoute',
	    value: function addRoute(from, event, controller, action) {
	      this._routes.push(new RoutableComponentRoute(from, event, controller, action));
	    }
	
	    /**
	     * ルーティングの状態を返す
	     * @return {string} ルーティングの状態を示す文字列
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this._routes.sort(function (a, b) {
	        return (a.from === b.from ? 0 : a.from > b.from ? 10 : -10) + (a.event === b.event ? 0 : a.event > b.event ? 1 : -1);
	      }).map(function (route) {
	        return route.toString() + '\n';
	      }).join('');
	    }
	  }]);
	  return RoutableComponentRoutes;
	}();
	
	/**
	 * ルート
	 */
	
	
	exports.RoutableComponentRoutes = RoutableComponentRoutes;
	
	var RoutableComponentRoute = exports.RoutableComponentRoute = function () {
	  /**
	   * コンストラクタ
	   * @param {string} from イベント発生源
	   * @param {string} event イベント
	   * @param {string} controller コントローラ
	   * @param {string} action アクション
	   */
	
	  function RoutableComponentRoute(from, event, controller, action) {
	    (0, _classCallCheck3.default)(this, RoutableComponentRoute);
	
	    this._checkConstructorArguments(from, event, controller, action);
	    this._from = from;
	    this._event = event;
	    this._controller = controller;
	    this._action = action;
	  }
	
	  (0, _createClass3.default)(RoutableComponentRoute, [{
	    key: '_checkConstructorArguments',
	    value: function _checkConstructorArguments(from, event, controller, action) {
	      var isString = function isString(obj) {
	        return typeof obj === 'string' || obj instanceof String;
	      };
	      if (from == null) throw new Error('register routing error: from is empty!');
	      if (event == null) throw new Error('register routing error: event is empty!');
	      if (controller == null) throw new Error('register routing error: controller is empty!');
	      if (action == null) throw new Error('register routing error: action is empty!');
	      if (!isString(from) || !isString(event) || !isString(controller) || !isString(action)) {
	        throw new Error('register routing error: arguments must be string!');
	      }
	    }
	
	    /**
	     * イベント発生源
	     * @type {string}
	     */
	
	  }, {
	    key: 'toString',
	
	
	    /**
	     * ルーティングの状態を返す
	     * @return {string} ルーティングの状態を示す文字列
	     */
	    value: function toString() {
	      return this.from + '.' + this.event + ' => ' + this.controller + '#' + this.action;
	    }
	  }, {
	    key: 'from',
	    get: function get() {
	      return this._from;
	    }
	    /**
	     * イベント
	     * @type {string}
	     */
	
	  }, {
	    key: 'event',
	    get: function get() {
	      return this._event;
	    }
	    /**
	     * コントローラ
	     * @type {string}
	     */
	
	  }, {
	    key: 'controller',
	    get: function get() {
	      return this._controller;
	    }
	    /**
	     * アクション
	     * @type {string}
	     */
	
	  }, {
	    key: 'action',
	    get: function get() {
	      return this._action;
	    }
	  }]);
	  return RoutableComponentRoute;
	}();
	//# sourceMappingURL=routable-component.js.map


/***/ },
/* 125 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/* (C) 2016 Narazaka : Licensed under The MIT License - https://narazaka.net/license/MIT?2016 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NamedKernelManagerGhostModule = undefined;
	
	var _slicedToArray2 = __webpack_require__(127);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _promise = __webpack_require__(2);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _regenerator = __webpack_require__(67);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(71);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _classCallCheck2 = __webpack_require__(104);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(105);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _shiorif = __webpack_require__(131);
	
	var _ghostKernel = __webpack_require__(138);
	
	var _namedKernelManager = __webpack_require__(109);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NamedKernelManagerGhostModule = exports.NamedKernelManagerGhostModule = function () {
	  function NamedKernelManagerGhostModule() {
	    (0, _classCallCheck3.default)(this, NamedKernelManagerGhostModule);
	  }
	
	  (0, _createClass3.default)(NamedKernelManagerGhostModule, [{
	    key: 'loadGhost',
	
	
	    /**
	     * load ghost
	     * @param {string} namedId - named id
	     * @param {GhostProfile} [profile] - profile
	     * @param {RoutableComponentRoutes} [routes] - ルーティング
	     * @param {Hash<GhostKernelController>} [controllers] - コントローラ
	     * @param {cuttlebone} [GhostViewClass] ghost view class
	     * @return {Promise<GhostKernel>} ghost kernel instance
	     */
	    value: function () {
	      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(namedId, profile, routes, controllers, GhostViewClass) {
	        var kernel;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                if (!this.isKernelExists(namedId)) {
	                  _context.next = 2;
	                  break;
	                }
	
	                throw new Error('ghost [' + namedId + '] already exists');
	
	              case 2:
	                _context.next = 4;
	                return this._getGhostKernelAsProfile(namedId, profile, routes, controllers, GhostViewClass);
	
	              case 4:
	                kernel = _context.sent;
	
	                this.registerKernel(namedId, kernel);
	                return _context.abrupt('return', kernel);
	
	              case 7:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));
	
	      function loadGhost(_x, _x2, _x3, _x4, _x5) {
	        return _ref.apply(this, arguments);
	      }
	
	      return loadGhost;
	    }()
	
	    /**
	     * load ghost
	     * @param {string} namedId - named id
	     * @param {GhostProfile} [profile] - profile
	     */
	
	  }, {
	    key: '_get_ghost_profile',
	    value: function () {
	      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(namedId, profile) {
	        return _regenerator2.default.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _context2.t0 = profile;
	
	                if (_context2.t0) {
	                  _context2.next = 5;
	                  break;
	                }
	
	                _context2.next = 4;
	                return this.storage.ghost_profile(namedId);
	
	              case 4:
	                _context2.t0 = _context2.sent;
	
	              case 5:
	                return _context2.abrupt('return', _context2.t0);
	
	              case 6:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));
	
	      function _get_ghost_profile(_x6, _x7) {
	        return _ref2.apply(this, arguments);
	      }
	
	      return _get_ghost_profile;
	    }()
	
	    /**
	     * load ghost
	     * @param {string} namedId - named id
	     * @param {GhostProfile} [profile] - profile
	     * @param {RoutableComponentRoutes} [routes] - ルーティング
	     * @param {Hash<GhostKernelController>} [controllers] - コントローラ
	     * @param {cuttlebone} [GhostViewClass] ghost view class
	     */
	
	  }, {
	    key: '_getGhostKernelAsProfile',
	    value: function () {
	      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(namedId, profile, routes, controllers, GhostViewClass) {
	        var _profile;
	
	        return _regenerator2.default.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                _context3.next = 2;
	                return this._get_ghost_profile(namedId, defaultProfile);
	
	              case 2:
	                _profile = _context3.sent;
	                _context3.next = 5;
	                return this._get_ghost_kernel(namedId, _profile.shell_name, _profile.balloon_name, routes, controllers, GhostViewClass);
	
	              case 5:
	                return _context3.abrupt('return', _context3.sent);
	
	              case 6:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this);
	      }));
	
	      function _getGhostKernelAsProfile(_x8, _x9, _x10, _x11, _x12) {
	        return _ref3.apply(this, arguments);
	      }
	
	      return _getGhostKernelAsProfile;
	    }()
	
	    /**
	     * build ghost kernel
	     * @param {string} namedId - named id
	     * @param {string} shellname - shellname
	     * @param {string} balloonname - balloonname
	     * @param {RoutableComponentRoutes} [routes] - ルーティング
	     * @param {Hash<GhostKernelController>} [controllers] - コントローラ
	     * @param {cuttlebone} [GhostViewClass] ghost view class
	     * @return {Promise<GhostKernel>} ghost kernel instance
	     */
	
	  }, {
	    key: '_get_ghost_kernel',
	    value: function () {
	      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(namedId, shellname, balloonname, routes, controllers, GhostViewClass) {
	        var _this = this;
	
	        return _regenerator2.default.wrap(function _callee4$(_context4) {
	          while (1) {
	            switch (_context4.prev = _context4.next) {
	              case 0:
	                return _context4.abrupt('return', _promise2.default.all([this._get_ghost(namedId, storage), this._get_shell(namedId, shellname, storage, GhostViewClass), this._get_balloon(balloonname, storage, GhostViewClass)]).then(function (_ref5) {
	                  var _ref6 = (0, _slicedToArray3.default)(_ref5, 3);
	
	                  var shiori = _ref6[0];
	                  var shell = _ref6[1];
	                  var balloon = _ref6[2];
	
	                  var shiorif = new _shiorif.Shiorif(shiori);
	                  var named = namedmanager.materialize2(shell, balloon);
	                  return new _ghostKernel.GhostKernel({
	                    Shiorif: shiorif,
	                    Named: named,
	                    NamedKernelManager: _this,
	                    TimerEventSource: _this.components.TimerEventSource
	                  }, routes, controllers);
	                }));
	
	              case 1:
	              case 'end':
	                return _context4.stop();
	            }
	          }
	        }, _callee4, this);
	      }));
	
	      function _get_ghost_kernel(_x13, _x14, _x15, _x16, _x17, _x18) {
	        return _ref4.apply(this, arguments);
	      }
	
	      return _get_ghost_kernel;
	    }()
	
	    /**
	     * ensure path separator at dirpath' end
	     * @param {string} dirpath - dirpath
	     * @return {string} dirpath that ends with path separator
	     */
	
	  }, {
	    key: '_get_ghost',
	
	
	    /**
	     * get ghost(shiori) instance
	     * @param {string} namedId - named id
	     * @return {Promise<Shiori>} ghost(shiori) instance
	     */
	    value: function () {
	      var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(namedId) {
	        var dirpath, ghost;
	        return _regenerator2.default.wrap(function _callee5$(_context5) {
	          while (1) {
	            switch (_context5.prev = _context5.next) {
	              case 0:
	                this.emit('ghost_load', namedId);
	                dirpath = _namedKernelManager.NamedKernelManager._get_ghost_directory_path(namedId);
	                _context5.next = 4;
	                return _namedKernelManager.NamedKernelManager._load_ghost(storage.backend.fs, dirpath);
	
	              case 4:
	                ghost = _context5.sent;
	
	                this.emit('ghost_loaded', namedId);
	                return _context5.abrupt('return', ghost);
	
	              case 7:
	              case 'end':
	                return _context5.stop();
	            }
	          }
	        }, _callee5, this);
	      }));
	
	      function _get_ghost(_x19) {
	        return _ref7.apply(this, arguments);
	      }
	
	      return _get_ghost;
	    }()
	
	    /**
	     * get ghost directory path
	     * @param {string} namedId - named id
	     * @return {string} ghost directory path
	     */
	
	  }, {
	    key: '_get_shell',
	
	
	    /**
	     * get shell instance
	     * @param {string} namedId - named id
	     * @param {string} shellname - shellname
	     * @param {cuttlebone} [GhostViewClass] ghost view class
	     * @return {Promise<Shell>} shell instance
	     */
	    value: function () {
	      var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(namedId, shellname, GhostViewClass) {
	        var directory, shell;
	        return _regenerator2.default.wrap(function _callee6$(_context6) {
	          while (1) {
	            switch (_context6.prev = _context6.next) {
	              case 0:
	                this.emit('load_shell_files', namedId, shellname);
	                _context6.next = 3;
	                return this._get_shell_directory(namedId, shellname);
	
	              case 3:
	                directory = _context6.sent;
	
	                this.emit('shell_load', namedId, shellname, directory);
	                _context6.next = 7;
	                return _namedKernelManager.NamedKernelManager._load_shell(directory, GhostViewClass);
	
	              case 7:
	                shell = _context6.sent;
	
	                this.emit('shell_loaded', namedId, shellname, shell);
	                return _context6.abrupt('return', shell);
	
	              case 10:
	              case 'end':
	                return _context6.stop();
	            }
	          }
	        }, _callee6, this);
	      }));
	
	      function _get_shell(_x20, _x21, _x22) {
	        return _ref8.apply(this, arguments);
	      }
	
	      return _get_shell;
	    }()
	
	    /**
	     * get shell directory contents
	     * @param {string} namedId - named id
	     * @param {string} shellname - shellname
	     * @return {Promise<NanikaDirectory>} shell directory contents
	     */
	
	  }, {
	    key: '_get_shell_directory',
	    value: function () {
	      var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(namedId, shellname) {
	        return _regenerator2.default.wrap(function _callee7$(_context7) {
	          while (1) {
	            switch (_context7.prev = _context7.next) {
	              case 0:
	                _context7.next = 2;
	                return this.storage.shell(namedId, shellname);
	
	              case 2:
	                return _context7.abrupt('return', _context7.sent);
	
	              case 3:
	              case 'end':
	                return _context7.stop();
	            }
	          }
	        }, _callee7, this);
	      }));
	
	      function _get_shell_directory(_x23, _x24) {
	        return _ref9.apply(this, arguments);
	      }
	
	      return _get_shell_directory;
	    }()
	
	    /**
	     * load shell
	     * @param {NanikaDirectory} shell directory contents
	     * @param {cuttlebone} [GhostViewClass] ghost view class
	     * @return {Promise<Shell>} shell instance
	     */
	
	  }, {
	    key: '_get_balloon',
	
	
	    /**
	     * get balloon instance
	     * @param {string} balloonname - balloonname
	     * @param {cuttlebone} [GhostViewClass] ghost view class
	     * @return {Promise<Balloon>} balloon instance
	     */
	    value: function () {
	      var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(balloonname, GhostViewClass) {
	        var directory, balloon;
	        return _regenerator2.default.wrap(function _callee8$(_context8) {
	          while (1) {
	            switch (_context8.prev = _context8.next) {
	              case 0:
	                this.emit('load_balloon_files', balloonname);
	                _context8.next = 3;
	                return this._get_balloon_directory(balloonname);
	
	              case 3:
	                directory = _context8.sent;
	
	                this.emit('balloon_load', balloonname, directory);
	                _context8.next = 7;
	                return _namedKernelManager.NamedKernelManager._load_balloon(directory, GhostViewClass);
	
	              case 7:
	                balloon = _context8.sent;
	
	                this.emit('balloon_loaded', balloonname, shell);
	                return _context8.abrupt('return', balloon);
	
	              case 10:
	              case 'end':
	                return _context8.stop();
	            }
	          }
	        }, _callee8, this);
	      }));
	
	      function _get_balloon(_x25, _x26) {
	        return _ref10.apply(this, arguments);
	      }
	
	      return _get_balloon;
	    }()
	
	    /**
	     * get balloon directory contents
	     * @param {string} balloonname - balloonname
	     * @return {Promise<NanikaDirectory>} balloon directory contents
	     */
	
	  }, {
	    key: '_get_balloon_directory',
	    value: function () {
	      var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(balloonname) {
	        return _regenerator2.default.wrap(function _callee9$(_context9) {
	          while (1) {
	            switch (_context9.prev = _context9.next) {
	              case 0:
	                _context9.next = 2;
	                return this.storage.balloon(balloonname);
	
	              case 2:
	                return _context9.abrupt('return', _context9.sent);
	
	              case 3:
	              case 'end':
	                return _context9.stop();
	            }
	          }
	        }, _callee9, this);
	      }));
	
	      function _get_balloon_directory(_x27) {
	        return _ref11.apply(this, arguments);
	      }
	
	      return _get_balloon_directory;
	    }()
	
	    /**
	     * load balloon
	     * @param {NanikaDirectory} balloon directory contents
	     * @param {cuttlebone} [GhostViewClass] ghost view class
	     * @return {Promise<Balloon>} balloon instance
	     */
	
	  }, {
	    key: 'installNar',
	
	
	    /**
	     * install named
	     * @param {Blob | URL | string} target install target resource (file, url or some)
	     * @param {NamedKernel | string} [from] who handled the target? kernel or named id
	     * @return {Promise}
	     */
	    value: function () {
	      var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(target) {
	        var from = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	        var nanikaStorage, nar, dirpath, sakuraname, install_results, profile, ghost_result, balloon_result;
	        return _regenerator2.default.wrap(function _callee10$(_context10) {
	          while (1) {
	            switch (_context10.prev = _context10.next) {
	              case 0:
	                nanikaStorage = this.components.NanikaStorage;
	
	                this.emit('install_begin', target);
	                nar = void 0;
	                _context10.prev = 3;
	
	                if (!(target instanceof Blob)) {
	                  _context10.next = 10;
	                  break;
	                }
	
	                _context10.next = 7;
	                return NarLoader.loadFromBlob(target);
	
	              case 7:
	                nar = _context10.sent;
	                _context10.next = 17;
	                break;
	
	              case 10:
	                if (!(target instanceof URL || target instanceof String || typeof target === 'string')) {
	                  _context10.next = 16;
	                  break;
	                }
	
	                _context10.next = 13;
	                return NarLoader.loadFromURL(target);
	
	              case 13:
	                nar = _context10.sent;
	                _context10.next = 17;
	                break;
	
	              case 16:
	                throw new Error('target is not Blob or URL : ' + (target.name || target));
	
	              case 17:
	                // TODO: typed error
	
	                this.emit('install_nar_loaded', target, nar);
	                dirpath = typeof from === 'string' || from instanceof String ? from : this.namedId(from);
	                // TODO: fromの他形式対応
	
	                sakuraname = nanikaStorage.ghost_descript(dirpath)['sakura.name'];
	                _context10.next = 22;
	                return nanikaStorage.install_nar(nar, dirpath, sakuraname);
	
	              case 22:
	                install_results = _context10.sent;
	
	                if (install_results) {
	                  _context10.next = 26;
	                  break;
	                }
	
	                this.emit('install_not_accepted', target, nar);
	                return _context10.abrupt('return');
	
	              case 26:
	                _context10.next = 28;
	                return nanikaStorage.ghost_profile(ghost_result.directory);
	
	              case 28:
	                profile = _context10.sent;
	
	                profile.shellname = 'master';
	                profile.balloonname = 'origin'; // TODO: 設定を読む
	                // TODO: vanish回数など
	                // 同梱バルーンを初期設定
	                ghost_result = void 0, balloon_result = void 0;
	
	                install_results.forEach(function (install_result) {
	                  if (install_result.type === 'ghost') {
	                    ghost_result = install_result;
	                  } else if (install_result.type === 'balloon') {
	                    balloon_result = install_result;
	                  }
	                });
	                if (ghost_result && balloon_result) {
	                  profile.balloonname = balloon_result.directory;
	                }
	                _context10.next = 36;
	                return nanikaStorage.ghost_profile(ghost_result.directory, profile);
	
	              case 36:
	                this.emit('install_succeed', target, nar);
	                _context10.next = 43;
	                break;
	
	              case 39:
	                _context10.prev = 39;
	                _context10.t0 = _context10['catch'](3);
	
	                this.emit('install_failure', _context10.t0);
	                throw _context10.t0;
	
	              case 43:
	              case 'end':
	                return _context10.stop();
	            }
	          }
	        }, _callee10, this, [[3, 39]]);
	      }));
	
	      function installNar(_x28, _x29) {
	        return _ref12.apply(this, arguments);
	      }
	
	      return installNar;
	    }()
	  }, {
	    key: 'GhostViewClass',
	
	
	    /**
	     * ゴーストのビュークラス
	     * @type {cuttlebone}
	     */
	    get: function get() {
	      return this._GhostViewClass || _namedKernelManager.NamedKernelManager._GhostViewClass;
	    }
	
	    /**
	     * ゴーストのビュークラス
	     * @type {cuttlebone}
	     */
	    ,
	    set: function set(value) {
	      this._GhostViewClass = value;
	    }
	  }], [{
	    key: '_canondirpath',
	    value: function _canondirpath(dirpath) {
	      var path_separator = dirpath.match(/[\\\/]/)[0];
	      return dirpath.replace(new RegExp('\\' + path_separator + '?$'), path_separator);
	    }
	  }, {
	    key: '_get_ghost_directory_path',
	    value: function _get_ghost_directory_path(namedId) {
	      return _namedKernelManager.NamedKernelManager._canondirpath(this.storage.ghost_master_path(namedId));
	    }
	
	    /**
	     * load ghost(shiori)
	     * @param {NanikaDirectory} ghost directory contents
	     * @return {Promise<Shiori>} ghost(shiori) instance
	     */
	
	  }, {
	    key: '_load_ghost',
	    value: function () {
	      var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11(fs, dirpath) {
	        var shiori;
	        return _regenerator2.default.wrap(function _callee11$(_context11) {
	          while (1) {
	            switch (_context11.prev = _context11.next) {
	              case 0:
	                _context11.next = 2;
	                return ShioriLoader.detect_shiori(fs, dirpath);
	
	              case 2:
	                shiori = _context11.sent;
	                _context11.next = 5;
	                return shiori.load(dirpath);
	
	              case 5:
	                return _context11.abrupt('return', _context11.sent);
	
	              case 6:
	              case 'end':
	                return _context11.stop();
	            }
	          }
	        }, _callee11, this);
	      }));
	
	      function _load_ghost(_x31, _x32) {
	        return _ref13.apply(this, arguments);
	      }
	
	      return _load_ghost;
	    }()
	  }, {
	    key: '_load_shell',
	    value: function _load_shell(directory) {
	      var GhostViewClass = arguments.length <= 1 || arguments[1] === undefined ? this.GhostViewClass : arguments[1];
	
	      var shell = new GhostViewClass.Shell(directory.asArrayBuffer());
	      return shell.load();
	    }
	  }, {
	    key: '_load_balloon',
	    value: function _load_balloon(directory) {
	      var GhostViewClass = arguments.length <= 1 || arguments[1] === undefined ? this.GhostViewClass : arguments[1];
	
	      var balloon = new GhostViewClass.Balloon(directory.asArrayBuffer());
	      return balloon.load();
	    }
	  }, {
	    key: 'GhostViewClass',
	
	    /**
	     * デフォルトのゴーストのビュークラス
	     * @type {cuttlebone}
	     */
	    get: function get() {
	      return _namedKernelManager.NamedKernelManager._GhostViewClass;
	    }
	
	    /**
	     * デフォルトのゴーストのビュークラス
	     * @type {cuttlebone}
	     */
	    ,
	    set: function set(value) {
	      _namedKernelManager.NamedKernelManager._GhostViewClass = value;
	    }
	  }]);
	  return NamedKernelManagerGhostModule;
	}();
	//# sourceMappingURL=named-kernel-manager-ghost-module.js.map


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _isIterable2 = __webpack_require__(128);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(121);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49);
	__webpack_require__(5);
	module.exports = __webpack_require__(130);

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(54)
	  , ITERATOR  = __webpack_require__(46)('iterator')
	  , Iterators = __webpack_require__(28);
	module.exports = __webpack_require__(13).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}if(false)var exports=window;var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();if(Object.defineProperty(exports,"__esModule",{value:!0}),"undefined"!="function")var ShioriJK=__webpack_require__(132),ShioriTransaction=__webpack_require__(135).ShioriTransaction,EventEmitter=__webpack_require__(137);var Shiorif=function(e){function r(e){var t=arguments.length<=1||void 0===arguments[1]?"2.6":arguments[1];_classCallCheck(this,r);var n=_possibleConstructorReturn(this,Object.getPrototypeOf(r).call(this));return n._shiori=e,n.auto_convert_request_version=t,n._request_parser=new ShioriJK.Shiori.Request.Parser,n._response_parser=new ShioriJK.Shiori.Response.Parser,n}return _inherits(r,e),_createClass(r,[{key:"load",value:function(e){var t=this;return this.emit("load",e),this.shiori.load(e).then(function(e){if(t.emit("loaded",e),!e)throw new r.StatusError;return e})}},{key:"request",value:function(e){var r=this,t=arguments.length<=1||void 0===arguments[1]||arguments[1],n=new ShioriTransaction;n.request=e instanceof ShioriJK.Message.Request?e:this._request_parser.parse(e),this.emit("request",n);var i=t?n.request.to(this.auto_convert_request_version):n.request;for(var o in this.default_headers)null!=i.headers.header[o]&&(i.headers.header[o]=this.default_headers[o]);return this.shiori.request(i).then(function(e){return n.response=r._response_parser.parse(e),r.emit("response",n),n})}},{key:"request3",value:function(e,t,n){var i=arguments.length<=3||void 0===arguments[3]||arguments[3],o=new ShioriJK.Message.Request({request_line:{version:"3.0",method:e},headers:n instanceof Array?r.referencesFromArray(n):n});return this.request(o,i)}},{key:"request2",value:function(e,r,t){var n=arguments.length<=3||void 0===arguments[3]||arguments[3],i=new ShioriJK.Message.Request({request_line:{version:"2.6",method:e},headers:t});return this.request(i,n)}},{key:"get3",value:function(e,r){var t=arguments.length<=2||void 0===arguments[2]||arguments[2];return this.request3("GET",e,r,t)}},{key:"notify3",value:function(e,r){var t=arguments.length<=2||void 0===arguments[2]||arguments[2];return this.request3("NOTIFY",e,r,t)}},{key:"unload",value:function(){var e=this;return this.emit("unload"),this.shiori.unload().then(function(t){if(e.emit("unloaded",t),!t)throw new r.StatusError;return t})}},{key:"shiori",get:function(){return this._shiori}},{key:"auto_convert_request_version",get:function(){return this._auto_convert_request_version},set:function(e){this._auto_convert_request_version=e}},{key:"default_headers",get:function(){return this._default_headers},set:function(e){this._default_headers=e}}],[{key:"referencesFromArray",value:function(e){var r={};return e.forEach(function(e,t){null!=e&&(r["Reference"+t]=e)}),r}}]),r}(EventEmitter);exports.Shiorif=Shiorif,Shiorif.StatusError=function(e){function r(){return _classCallCheck(this,r),_possibleConstructorReturn(this,Object.getPrototypeOf(r).apply(this,arguments))}return _inherits(r,e),r}(Error);
	//# sourceMappingURL=shiorif.js.map


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(133)


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {
	/* (C) 2014 Narazaka : Licensed under The MIT License - http://narazaka.net/license/MIT?2014 */
	var ShioriJK,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	ShioriJK = {};
	
	if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
	  module.exports = ShioriJK;
	}
	
	Function.prototype.property = function(properties) {
	  var descriptions, property, results1;
	  results1 = [];
	  for (property in properties) {
	    descriptions = properties[property];
	    results1.push(Object.defineProperty(this.prototype, property, descriptions));
	  }
	  return results1;
	};
	
	ShioriJK.Message = {};
	
	ShioriJK.Message.Request = (function() {
	  function Request(arg) {
	    var headers, no_prepare, ref, request_line;
	    ref = arg != null ? arg : {}, request_line = ref.request_line, headers = ref.headers, no_prepare = ref.no_prepare;
	    this.request_line = request_line != null ? request_line instanceof ShioriJK.RequestLine ? request_line : new ShioriJK.RequestLine(request_line) : !no_prepare ? new ShioriJK.RequestLine() : void 0;
	    this.headers = headers != null ? headers instanceof ShioriJK.Headers.Request ? headers : new ShioriJK.Headers.Request(headers) : new ShioriJK.Headers.Request();
	  }
	
	  Request.prototype.request_line = null;
	
	  Request.prototype.headers = null;
	
	  Request.prototype.toString = function() {
	    return this.request_line.toString() + '\r\n' + this.headers.toString() + '\r\n';
	  };
	
	  return Request;
	
	})();
	
	ShioriJK.Message.Response = (function() {
	  function Response(arg) {
	    var headers, no_prepare, ref, status_line;
	    ref = arg != null ? arg : {}, status_line = ref.status_line, headers = ref.headers, no_prepare = ref.no_prepare;
	    this.status_line = status_line != null ? status_line instanceof ShioriJK.StatusLine ? status_line : new ShioriJK.StatusLine(status_line) : !no_prepare ? new ShioriJK.StatusLine() : void 0;
	    this.headers = headers != null ? headers instanceof ShioriJK.Headers.Response ? headers : new ShioriJK.Headers.Response(headers) : new ShioriJK.Headers.Response();
	  }
	
	  Response.prototype.status_line = null;
	
	  Response.prototype.headers = null;
	
	  Response.prototype.toString = function() {
	    return this.status_line.toString() + '\r\n' + this.headers.toString() + '\r\n';
	  };
	
	  return Response;
	
	})();
	
	ShioriJK.RequestLine = (function() {
	  function RequestLine(arg) {
	    var method, protocol, ref, version;
	    ref = arg != null ? arg : {}, method = ref.method, protocol = ref.protocol, version = ref.version;
	    this["arguments"] = {};
	    if (method != null) {
	      this.method = method;
	    }
	    this.protocol = protocol || 'SHIORI';
	    if (version != null) {
	      this.version = version;
	    }
	  }
	
	  RequestLine.prototype.method = null;
	
	  RequestLine.prototype.protocol = null;
	
	  RequestLine.prototype.version = null;
	
	  RequestLine.property({
	    method: {
	      get: function() {
	        return this["arguments"].method;
	      },
	      set: function(method) {
	        if ((method != null) && (this.version != null)) {
	          this.validate_method_version(method, this.version);
	        } else if (method != null) {
	          switch (method) {
	            case 'GET':
	            case 'NOTIFY':
	            case 'GET Version':
	            case 'GET Sentence':
	            case 'GET Word':
	            case 'GET Status':
	            case 'TEACH':
	            case 'GET String':
	            case 'NOTIFY OwnerGhostName':
	            case 'NOTIFY OtherGhostName':
	            case 'TRANSLATE Sentence':
	              break;
	            default:
	              throw 'Invalid protocol method : ' + method;
	          }
	        }
	        return this["arguments"].method = method;
	      }
	    },
	    protocol: {
	      get: function() {
	        return this["arguments"].protocol;
	      },
	      set: function(protocol) {
	        if ((protocol != null) && protocol !== 'SHIORI') {
	          throw 'Invalid protocol : ' + protocol;
	        }
	        return this["arguments"].protocol = protocol;
	      }
	    },
	    version: {
	      get: function() {
	        return this["arguments"].version;
	      },
	      set: function(version) {
	        if ((this.method != null) && (version != null)) {
	          this.validate_method_version(this.method, version);
	        } else if (version != null) {
	          switch (version) {
	            case '2.0':
	            case '2.2':
	            case '2.3':
	            case '2.4':
	            case '2.5':
	            case '2.6':
	            case '3.0':
	              break;
	            default:
	              throw 'Invalid protocol version : ' + version;
	          }
	        }
	        return this["arguments"].version = version;
	      }
	    }
	  });
	
	  RequestLine.prototype.validate_method_version = function(method, version) {
	    var is_valid;
	    is_valid = false;
	    switch (version) {
	      case '2.0':
	        switch (method) {
	          case 'GET Version':
	          case 'NOTIFY OwnerGhostName':
	          case 'GET Sentence':
	          case 'GET Word':
	          case 'GET Status':
	            is_valid = true;
	        }
	        break;
	      case '2.2':
	        switch (method) {
	          case 'GET Sentence':
	            is_valid = true;
	        }
	        break;
	      case '2.3':
	        switch (method) {
	          case 'NOTIFY OtherGhostName':
	          case 'GET Sentence':
	            is_valid = true;
	        }
	        break;
	      case '2.4':
	        switch (method) {
	          case 'TEACH':
	            is_valid = true;
	        }
	        break;
	      case '2.5':
	        switch (method) {
	          case 'GET String':
	            is_valid = true;
	        }
	        break;
	      case '2.6':
	        switch (method) {
	          case 'GET Sentence':
	          case 'GET Status':
	          case 'GET String':
	          case 'NOTIFY OwnerGhostName':
	          case 'NOTIFY OtherGhostName':
	          case 'GET Version':
	          case 'TRANSLATE Sentence':
	            is_valid = true;
	        }
	        break;
	      case '3.0':
	        switch (method) {
	          case 'GET':
	          case 'NOTIFY':
	            is_valid = true;
	        }
	    }
	    if (!is_valid) {
	      throw 'Invalid protocol method and version : ' + method + ' SHIORI/' + version;
	    }
	  };
	
	  RequestLine.prototype.toString = function() {
	    return this.method + " " + this.protocol + "/" + this.version;
	  };
	
	  return RequestLine;
	
	})();
	
	ShioriJK.StatusLine = (function() {
	  function StatusLine(arg) {
	    var code, protocol, ref, version;
	    ref = arg != null ? arg : {}, code = ref.code, protocol = ref.protocol, version = ref.version;
	    this["arguments"] = {};
	    if (code != null) {
	      this.code = code;
	    }
	    this.protocol = protocol || 'SHIORI';
	    if (version != null) {
	      this.version = version;
	    }
	  }
	
	  StatusLine.prototype.code = null;
	
	  StatusLine.prototype.protocol = null;
	
	  StatusLine.prototype.version = null;
	
	  StatusLine.property({
	    code: {
	      get: function() {
	        return this["arguments"].code;
	      },
	      set: function(code) {
	        if ((code != null) && (this.message[code] == null)) {
	          throw 'Invalid response code : ' + code;
	        }
	        return this["arguments"].code = code;
	      }
	    },
	    protocol: {
	      get: function() {
	        return this["arguments"].protocol;
	      },
	      set: function(protocol) {
	        if ((protocol != null) && protocol !== 'SHIORI') {
	          throw 'Invalid protocol : ' + protocol;
	        }
	        return this["arguments"].protocol = protocol;
	      }
	    },
	    version: {
	      get: function() {
	        return this["arguments"].version;
	      },
	      set: function(version) {
	        if (version != null) {
	          switch (version) {
	            case '2.0':
	            case '2.2':
	            case '2.3':
	            case '2.4':
	            case '2.5':
	            case '2.6':
	            case '3.0':
	              break;
	            default:
	              throw 'Invalid protocol version : ' + version;
	          }
	        }
	        return this["arguments"].version = version;
	      }
	    }
	  });
	
	  StatusLine.prototype.toString = function() {
	    return this.protocol + "/" + this.version + " " + this.code + " " + this.message[this.code];
	  };
	
	  StatusLine.prototype.message = {
	    200: 'OK',
	    204: 'No Content',
	    310: 'Communicate',
	    311: 'Not Enough',
	    312: 'Advice',
	    400: 'Bad Request',
	    418: "I'm a tea pot",
	    500: 'Internal Server Error'
	  };
	
	  return StatusLine;
	
	})();
	
	ShioriJK.Headers = (function() {
	  function Headers(header) {
	    this.header = header != null ? header : {};
	  }
	
	  Headers.prototype.header = null;
	
	  Headers.prototype.get = function(name) {
	    if (this.header[name] != null) {
	      return this.header[name];
	    }
	  };
	
	  Headers.prototype.set = function(name, value) {
	    return this.header[name] = value;
	  };
	
	  Headers.prototype.get_separated = function(name, separator) {
	    if (separator == null) {
	      separator = '\x01';
	    }
	    if (this.header[name] != null) {
	      return this.header[name].split(separator);
	    }
	  };
	
	  Headers.prototype.set_separated = function(name, value, separator) {
	    if (separator == null) {
	      separator = '\x01';
	    }
	    return this.header[name] = value.join(separator);
	  };
	
	  Headers.prototype.get_separated2 = function(name, separator1, separator2) {
	    var element, i, len, ref, results1;
	    if (separator1 == null) {
	      separator1 = '\x02';
	    }
	    if (separator2 == null) {
	      separator2 = '\x01';
	    }
	    if (this.header[name] != null) {
	      ref = this.header[name].split(separator1);
	      results1 = [];
	      for (i = 0, len = ref.length; i < len; i++) {
	        element = ref[i];
	        results1.push(element.split(separator2));
	      }
	      return results1;
	    }
	  };
	
	  Headers.prototype.set_separated2 = function(name, value, separator1, separator2) {
	    var element;
	    if (separator1 == null) {
	      separator1 = '\x02';
	    }
	    if (separator2 == null) {
	      separator2 = '\x01';
	    }
	    return this.header[name] = ((function() {
	      var i, len, results1;
	      results1 = [];
	      for (i = 0, len = value.length; i < len; i++) {
	        element = value[i];
	        results1.push(element.join(separator2));
	      }
	      return results1;
	    })()).join(separator1);
	  };
	
	  Headers.prototype.validate = function() {
	    var name, ref, results1, value;
	    ref = this.header;
	    results1 = [];
	    for (name in ref) {
	      value = ref[name];
	      if (value.match(/\n/)) {
	        throw 'Invalid header value - line feed found : [' + name + '] : ' + value;
	      } else {
	        results1.push(void 0);
	      }
	    }
	    return results1;
	  };
	
	  Headers.prototype.toString = function() {
	    var name, ref, str, value;
	    str = '';
	    this.validate();
	    ref = this.header;
	    for (name in ref) {
	      value = ref[name];
	      str += name + ": " + value + "\r\n";
	    }
	    return str;
	  };
	
	  return Headers;
	
	})();
	
	ShioriJK.Headers.Request = (function(superClass) {
	  extend(Request, superClass);
	
	  function Request() {
	    return Request.__super__.constructor.apply(this, arguments);
	  }
	
	  return Request;
	
	})(ShioriJK.Headers);
	
	ShioriJK.Headers.Response = (function(superClass) {
	  extend(Response, superClass);
	
	  function Response() {
	    return Response.__super__.constructor.apply(this, arguments);
	  }
	
	  return Response;
	
	})(ShioriJK.Headers);
	
	ShioriJK.Shiori = {};
	
	ShioriJK.Shiori.Header = {};
	
	ShioriJK.Shiori.Request = {};
	
	ShioriJK.Shiori.Request.RequestLine = {};
	
	ShioriJK.Shiori.Request.Header = {};
	
	ShioriJK.Shiori.Response = {};
	
	ShioriJK.Shiori.Response.StatusLine = {};
	
	ShioriJK.Shiori.Response.Header = {};
	
	ShioriJK.Shiori.Parser = (function() {
	  function Parser() {}
	
	  Parser.prototype.is_parsing = function() {
	    return !this.section.is('idle');
	  };
	
	  Parser.prototype.is_parsing_end = function() {
	    return !this.section.is('end');
	  };
	
	  Parser.prototype.get_result = function() {
	    return this.result;
	  };
	
	  Parser.prototype.result_builder = function() {};
	
	  Parser.prototype.begin_parse = function() {
	    if (!this.section.is('idle')) {
	      throw 'cannot begin parsing because previous transaction is still working';
	    }
	    this.result = this.result_builder();
	    return this.section.next();
	  };
	
	  Parser.prototype.end_parse = function() {
	    if (!this.section.is('end')) {
	      this.abort_parse();
	      throw 'parsing was aborted';
	    }
	    return this.section.next();
	  };
	
	  Parser.prototype.abort_parse = function() {
	    var name, parser, ref;
	    if (this.parsers != null) {
	      ref = this.parsers;
	      for (name in ref) {
	        parser = ref[name];
	        if (parser.abort_parse != null) {
	          parser.abort_parse();
	        }
	      }
	    }
	    return this.section.set('idle');
	  };
	
	  Parser.prototype.parse = function(transaction) {
	    var result;
	    this.begin_parse();
	    result = this.parse_chunk(transaction);
	    if (this.is_parsing()) {
	      throw 'transaction is not closed';
	    }
	    if (result.results.length !== 1) {
	      throw 'multiple transaction';
	    }
	    return result.results[0];
	  };
	
	  Parser.prototype.parse_chunk = function(chunk) {
	    var lines;
	    lines = chunk.split(/\r\n/);
	    if (chunk.match(/\r\n$/)) {
	      lines.pop();
	    }
	    return this.parse_lines(lines);
	  };
	
	  Parser.prototype.parse_lines = function(lines) {
	    var i, len, line, result, results;
	    results = [];
	    for (i = 0, len = lines.length; i < len; i++) {
	      line = lines[i];
	      result = this.parse_line(line);
	      if (result.state === 'end') {
	        results.push(result.result);
	      }
	    }
	    return {
	      results: results,
	      state: result.state
	    };
	  };
	
	  Parser.prototype.parse_line = function(line) {
	    if (this.section.is('idle')) {
	      this.begin_parse();
	    }
	    this.parse_main(line);
	    if (this.section.is('end')) {
	      this.end_parse();
	      return {
	        result: this.get_result(),
	        state: 'end'
	      };
	    } else {
	      return {
	        state: 'continue'
	      };
	    }
	  };
	
	  Parser.prototype.parse_main = function(line) {};
	
	  return Parser;
	
	})();
	
	ShioriJK.Shiori.Section = (function() {
	  function Section(sections) {
	    this.sections = sections;
	    this.index = 0;
	  }
	
	  Section.prototype.is = function(section) {
	    return this.sections[this.index] === section;
	  };
	
	  Section.prototype.next = function() {
	    if (this.index === this.sections.length - 1) {
	      return this.index = 0;
	    } else {
	      return this.index++;
	    }
	  };
	
	  Section.prototype.previous = function() {
	    if (this.index === 0) {
	      return this.index = this.sections.length - 1;
	    } else {
	      return this.index--;
	    }
	  };
	
	  Section.prototype.set = function(section) {
	    return this.index = this.sections.indexOf(section);
	  };
	
	  Section.prototype.get = function() {
	    return this.sections[this.index];
	  };
	
	  return Section;
	
	})();
	
	ShioriJK.Shiori.Header.Parser = (function(superClass) {
	  extend(Parser, superClass);
	
	  function Parser() {
	    return Parser.__super__.constructor.apply(this, arguments);
	  }
	
	  Parser.prototype.parse_main = function(line) {
	    var result;
	    result = this.parse_header(line);
	    if (result.state === 'end') {
	      return this.section.next();
	    }
	  };
	
	  Parser.prototype.parse_header = function(line) {
	    var result;
	    if (line.length) {
	      if (result = line.match(/^(.+?): (.*)$/)) {
	        this.result.header[result[1]] = result[2];
	      } else {
	        throw 'Invalid header line : ' + line;
	      }
	      return {
	        state: 'continue'
	      };
	    } else {
	      return {
	        state: 'end'
	      };
	    }
	  };
	
	  return Parser;
	
	})(ShioriJK.Shiori.Parser);
	
	ShioriJK.Shiori.Header.Section = (function(superClass) {
	  extend(Section, superClass);
	
	  function Section(sections) {
	    this.sections = sections != null ? sections : ['idle', 'header', 'end'];
	    this.index = 0;
	  }
	
	  return Section;
	
	})(ShioriJK.Shiori.Section);
	
	ShioriJK.Shiori.Request.Parser = (function(superClass) {
	  extend(Parser, superClass);
	
	  function Parser() {
	    this.parsers = {
	      request_line: new ShioriJK.Shiori.Request.RequestLine.Parser(),
	      headers: new ShioriJK.Shiori.Request.Header.Parser()
	    };
	    this.section = new ShioriJK.Shiori.Request.Section();
	  }
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.Message.Request({
	      no_prepare: true
	    });
	  };
	
	  Parser.prototype.parse_main = function(line) {
	    var parser, parser_result;
	    parser = this.parsers[this.section.get()];
	    parser_result = parser.parse_line(line);
	    if (parser_result.state === 'end') {
	      this.result[this.section.get()] = parser_result.result;
	      return this.section.next();
	    }
	  };
	
	  return Parser;
	
	})(ShioriJK.Shiori.Parser);
	
	ShioriJK.Shiori.Request.RequestLine.Parser = (function() {
	  function Parser() {}
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.RequestLine();
	  };
	
	  Parser.prototype.parse = function(transaction) {
	    return this.parse_chunk(transaction);
	  };
	
	  Parser.prototype.parse_chunk = function(chunk) {
	    return this.parse_line(chunk);
	  };
	
	  Parser.prototype.parse_line = function(line) {
	    var result;
	    result = line.match(/^([A-Za-z0-9 ]+) SHIORI\/([0-9.]+)/);
	    if (!result) {
	      throw 'Invalid request line : ' + line;
	    }
	    this.result = this.result_builder();
	    this.result.method = result[1];
	    this.result.protocol = 'SHIORI';
	    this.result.version = result[2];
	    return {
	      result: this.result,
	      state: 'end'
	    };
	  };
	
	  return Parser;
	
	})();
	
	ShioriJK.Shiori.Request.Header.Parser = (function(superClass) {
	  extend(Parser, superClass);
	
	  function Parser() {
	    this.section = new ShioriJK.Shiori.Request.Header.Section();
	  }
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.Headers.Request();
	  };
	
	  return Parser;
	
	})(ShioriJK.Shiori.Header.Parser);
	
	ShioriJK.Shiori.Request.Section = (function(superClass) {
	  extend(Section, superClass);
	
	  function Section(sections) {
	    this.sections = sections != null ? sections : ['idle', 'request_line', 'headers', 'end'];
	    this.index = 0;
	  }
	
	  return Section;
	
	})(ShioriJK.Shiori.Section);
	
	ShioriJK.Shiori.Request.Header.Section = (function(superClass) {
	  extend(Section, superClass);
	
	  function Section() {
	    return Section.__super__.constructor.apply(this, arguments);
	  }
	
	  return Section;
	
	})(ShioriJK.Shiori.Header.Section);
	
	ShioriJK.Shiori.Response.Parser = (function(superClass) {
	  extend(Parser, superClass);
	
	  function Parser() {
	    this.parsers = {
	      status_line: new ShioriJK.Shiori.Response.StatusLine.Parser(),
	      headers: new ShioriJK.Shiori.Response.Header.Parser()
	    };
	    this.section = new ShioriJK.Shiori.Response.Section();
	  }
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.Message.Response({
	      no_prepare: true
	    });
	  };
	
	  Parser.prototype.parse_main = function(line) {
	    var parser, parser_result;
	    parser = this.parsers[this.section.get()];
	    parser_result = parser.parse_line(line);
	    if (parser_result.state === 'end') {
	      this.result[this.section.get()] = parser_result.result;
	      return this.section.next();
	    }
	  };
	
	  return Parser;
	
	})(ShioriJK.Shiori.Parser);
	
	ShioriJK.Shiori.Response.StatusLine.Parser = (function() {
	  function Parser() {}
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.StatusLine();
	  };
	
	  Parser.prototype.parse = function(transaction) {
	    return this.parse_chunk(transaction);
	  };
	
	  Parser.prototype.parse_chunk = function(chunk) {
	    return this.parse_line(chunk);
	  };
	
	  Parser.prototype.parse_line = function(line) {
	    var result;
	    result = line.match(/^SHIORI\/([0-9.]+) (\d+) (.+)$/);
	    if (!result) {
	      throw 'Invalid status line : ' + line;
	    }
	    this.result = this.result_builder();
	    this.result.protocol = 'SHIORI';
	    this.result.version = result[1];
	    this.result.code = result[2] - 0;
	    return {
	      result: this.result,
	      state: 'end'
	    };
	  };
	
	  return Parser;
	
	})();
	
	ShioriJK.Shiori.Response.Header.Parser = (function(superClass) {
	  extend(Parser, superClass);
	
	  function Parser() {
	    this.section = new ShioriJK.Shiori.Response.Header.Section();
	  }
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.Headers.Response();
	  };
	
	  return Parser;
	
	})(ShioriJK.Shiori.Header.Parser);
	
	ShioriJK.Shiori.Response.Section = (function(superClass) {
	  extend(Section, superClass);
	
	  function Section(sections) {
	    this.sections = sections != null ? sections : ['idle', 'status_line', 'headers', 'end'];
	    this.index = 0;
	  }
	
	  return Section;
	
	})(ShioriJK.Shiori.Section);
	
	ShioriJK.Shiori.Response.Header.Section = (function(superClass) {
	  extend(Section, superClass);
	
	  function Section() {
	    return Section.__super__.constructor.apply(this, arguments);
	  }
	
	  return Section;
	
	})(ShioriJK.Shiori.Header.Section);
	
	//# sourceMappingURL=shiorijk.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(134)(module)))

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	if(false) var exports = window;
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	if (true) {
	  var ShioriConverter = __webpack_require__(136).ShioriConverter;
	}
	
	/**
	 * SHIORI/2.x/3.x transaction class with protocol version converter
	 */
	
	var ShioriTransaction = (function () {
	  /**
	   * constructor
	   * @return {ShioriTransaction} this
	   */
	
	  function ShioriTransaction() {
	    _classCallCheck(this, ShioriTransaction);
	  }
	
	  /**
	   * request
	   * @return {ShioriJK.Message.Request} request
	   */
	
	  _createClass(ShioriTransaction, [{
	    key: 'request_to',
	
	    /**
	     * convert request to specified protocol version
	     * (this method needs ShioriConverter)
	     * @param {string} version - target protocol version
	     * @return {ShioriJK.Message.Request} specified version request
	     */
	    value: function request_to(version) {
	      return ShioriConverter.request_to(this.request, version);
	    }
	
	    /**
	     * convert response to specified protocol version
	     * (this method needs ShioriConverter)
	     * @param {string} version - target protocol version
	     * @return {ShioriJK.Message.Response} specified version response
	     */
	
	  }, {
	    key: 'response_to',
	    value: function response_to(version) {
	      return ShioriConverter.response_to(this.request, this.response, version);
	    }
	  }, {
	    key: 'request',
	    get: function get() {
	      return this._request;
	    }
	
	    /**
	     * request
	     * @param {ShioriJK.Message.Request} request - request
	     * @return {ShioriJK.Message.Request} request
	     */
	    ,
	    set: function set(request) {
	      this._request = request;
	      this._request.to = this.request_to.bind(this);
	      return this._request;
	    }
	
	    /**
	     * response
	     * @return {ShioriJK.Message.Response} response
	     */
	
	  }, {
	    key: 'response',
	    get: function get() {
	      return this._response;
	    }
	
	    /**
	     * response
	     * @param {ShioriJK.Message.Response} response - response
	     * @return {ShioriJK.Message.Response} response
	     */
	    ,
	    set: function set(response) {
	      this._response = response;
	      this._response.to = this.response_to.bind(this);
	      return this._response;
	    }
	  }]);
	
	  return ShioriTransaction;
	})();
	
	exports.ShioriTransaction = ShioriTransaction;
	//# sourceMappingURL=shiori_transaction.js.map


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}if(false)var exports=window;var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}();if(Object.defineProperty(exports,"__esModule",{value:!0}),"undefined"!="function")var ShioriJK=__webpack_require__(132);var ShioriConverter=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"request_to",value:function(r,t){if(!r)throw new e.RequestNotSetError;return"4.0"===r.request_line.version?"4.0"===t?r:"3.0"===t?e.request_4to3(r):e.request_4to2(r):"3.0"===r.request_line.version?"4.0"===t?e.request_3to4(r):"3.0"===t?r:e.request_3to2(r):"4.0"===t?e.request_2to4(r):"3.0"===t?e.request_2to3(r):r}},{key:"response_to",value:function(r,t,o){if(!r)throw new e.RequestNotSetError;if(!t)throw new e.ResponseNotSetError;return"4.0"===t.status_line.version?"4.0"===o?t:"3.0"===o?e.response_4to3(r,t):e.response_4to2(r,t):"3.0"===t.status_line.version?"4.0"===o?e.response_3to4(r,t):"3.0"===o?t:e.response_3to2(r,t):"4.0"===o?e.response_2to4(r,t):"3.0"===o?e.response_2to3(r,t):t}},{key:"request_4to3",value:function(r){throw new e.NotImplementedError}},{key:"request_4to2",value:function(r){return e.request_3to2(e.request_4to3(r))}},{key:"method3to2",value:function(e){var r=e.headers.header.ID;return"version"===r?"GET Version":"OnTeach"===r?"TEACH":"ownerghostname"===r?"NOTIFY OwnerGhostName":"otherghostname"===r?"NOTIFY OtherGhostName":"NOTIFY"===e.request_line.method?void 0:r.match(/^[a-z]/)?"GET String":"GET Sentence"}},{key:"request_3to2",value:function(r){var t=e.method3to2(r);if(t){var o=r.headers.header.ID,n=new ShioriJK.Headers.Request,s=new ShioriJK.Message.Request({request_line:new ShioriJK.RequestLine({method:t,protocol:r.protocol,version:"2.6"}),headers:n});if("GET Sentence"===t&&null!=o){if("OnCommunicate"===o){n.header.Sender=r.headers.header.Reference0,n.header.Sentence=r.headers.header.Reference1,n.header.Age=r.headers.header.Age||"0";for(var a in r.headers.header){var i=r.headers.header[a],u=void 0;(u=a.match(/^Reference(\d+)$/))?n.header["Reference"+(u[1]-2)]=""+i:n.header[a]=""+i}return s}n.header.Event=o}else{if("GET String"!==t||null==o){if("TEACH"===t){n.header.Word=r.headers.header.Reference0;for(var a in r.headers.header){var i=r.headers.header[a],u=void 0;(u=a.match(/^Reference(\d+)$/))?n.header["Reference"+(u[1]-1)]=""+i:n.header[a]=""+i}return s}if("NOTIFY OwnerGhostName"===t)return n.header.Ghost=r.headers.header.Reference0,s;if("NOTIFY OtherGhostName"===t){var h=[];for(var a in r.headers.header){var i=r.headers.header[a];a.match(/^Reference\d+$/)?h.push(""+i):n.header[a]=""+i}var c=h.map(function(e){return"GhostEx: "+e+"\r\n"}).join("");return s.request_line+"\r\n"+s.headers+c+"\r\n"}return}n.header.ID=o}for(var a in r.headers.header)if("ID"!==a){var i=r.headers.header[a];n.header[a]=""+i}return s}}},{key:"request_2to3",value:function(r){throw new e.NotImplementedError}},{key:"request_3to4",value:function(r){throw new e.NotImplementedError}},{key:"request_2to4",value:function(r){return e.request_3to4(e.request_2to3(r))}},{key:"response_4to3",value:function(r,t){throw new e.NotImplementedError}},{key:"response_4to2",value:function(r,t){return e.response_3to2(e.response_4to3(r,t))}},{key:"response_3to2",value:function(r,t){throw new e.NotImplementedError}},{key:"response_2to3",value:function(r,t){var o=e.request_to(r,"2.6"),n=void 0;switch(o.request_line.method){case"GET String":n="String";break;case"GET Word":n="Word";break;case"GET Status":n="Status";break;default:n="Sentence"}var s=new ShioriJK.Headers.Response;null!=t.headers.header[n]&&(s.header.Value=t.headers.header[n]);for(var a in t.headers.header){var i=t.headers.header[a],u=void 0;(u=a.match(/^Reference(\d+)$/))?s.header["Reference"+(u[1]+1)]=i:"To"===a?s.header.Reference0=i:a!==n&&(s.header[a]=i)}return new ShioriJK.Message.Response({status_line:new ShioriJK.StatusLine({code:t.status_line.code,protocol:t.status_line.protocol,version:"3.0"}),headers:s})}},{key:"response_3to4",value:function(r,t){throw new e.NotImplementedError}},{key:"response_2to4",value:function(r,t){return e.response_3to4(e.response_2to3(r,t))}}]),e}();ShioriConverter.RequestNotSetError=function(e){function r(){return _classCallCheck(this,r),_possibleConstructorReturn(this,Object.getPrototypeOf(r).apply(this,arguments))}return _inherits(r,e),r}(Error),ShioriConverter.ResponseNotSetError=function(e){function r(){return _classCallCheck(this,r),_possibleConstructorReturn(this,Object.getPrototypeOf(r).apply(this,arguments))}return _inherits(r,e),r}(Error),ShioriConverter.NotImplementedError=function(e){function r(){return _classCallCheck(this,r),_possibleConstructorReturn(this,Object.getPrototypeOf(r).apply(this,arguments))}return _inherits(r,e),r}(Error),exports.ShioriConverter=ShioriConverter;
	//# sourceMappingURL=shiori_converter.js.map


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = Object.prototype.hasOwnProperty;
	
	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;
	
	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} [once=false] Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }
	
	/**
	 * Hold the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;
	
	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var events = this._events
	    , names = []
	    , name;
	
	  if (!events) return names;
	
	  for (name in events) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }
	
	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }
	
	  return names;
	};
	
	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];
	
	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];
	
	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return false;
	
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	
	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return this;
	
	  var listeners = this._events[evt]
	    , events = [];
	
	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }
	
	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;
	
	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;
	
	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/* (C) 2016 Narazaka : Licensed under The MIT License - https://narazaka.net/license/MIT?2016 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GhostKernelController = exports.GhostKernel = exports.GhostKernelControllers = exports.GhostKernelRoutings = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _routableComponent = __webpack_require__(124);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * ルーティング設定クラスのリスト
	 * @type {RoutableComponentRouting[]}
	 */
	var GhostKernelRoutings = exports.GhostKernelRoutings = [];
	
	/**
	 * コントローラクラスの連想配列
	 * @type {Object<GhostKernelController>}
	 */
	var GhostKernelControllers = exports.GhostKernelControllers = {};
	
	/** Ukagaka baseware ghost instance kernel */
	
	var GhostKernel = exports.GhostKernel = function (_RoutableComponent) {
	  _inherits(GhostKernel, _RoutableComponent);
	
	  /**
	   * constructor
	   * @param {Object<EventEmitter>} components components
	   * @param {Shiorif} components.Shiorif SHIORI interface
	   * @param {Shell} components.View Shell interface
	   * @param {SakuraScriptRunner} components.SakuraScriptRunner SakuraScript Runner
	   * @param {NamedKernelManager} components.NamedKernelManager Named Kernel Manager
	   * @param {TimerEventSource} components.TimerEventSource Timer event source
	   * @param {RoutableComponentRoutes} [routes] ルーティング
	   * @param {Object<class<GhostKernelController>>} [controller_classes] コントローラ
	   */
	
	  function GhostKernel(components) {
	    var routes = arguments.length <= 1 || arguments[1] === undefined ? new _routableComponent.RoutableComponentRoutes(GhostKernelRoutings) : arguments[1];
	    var controller_classes = arguments.length <= 2 || arguments[2] === undefined ? GhostKernelControllers : arguments[2];
	
	    _classCallCheck(this, GhostKernel);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GhostKernel).call(this, components, routes, controller_classes));
	
	    _this.register_component('GhostKernel', _this);
	    return _this;
	  }
	
	  /**
	   * start kernel (emits start event)
	   * @return {void}
	   */
	
	
	  _createClass(GhostKernel, [{
	    key: 'start',
	    value: function start() {
	      this.emit('start');
	    }
	
	    /**
	     * emits protocol version fixed event
	     * @return {void}
	     */
	
	  }, {
	    key: 'protocol_version_fixed',
	    value: function protocol_version_fixed() {
	      this.emit('protocol_version_fixed');
	    }
	
	    /**
	     * emits close event
	     * @return {void}
	     */
	
	  }, {
	    key: 'close',
	    value: function close() {
	      this.emit('close');
	    }
	  }]);
	
	  return GhostKernel;
	}(_routableComponent.RoutableComponent);
	
	/**
	 * カーネル用のコントローラ
	 * @implements {RoutableComponentController}
	 */
	
	
	var GhostKernelController = exports.GhostKernelController = function () {
	  /**
	   * コンストラクタ
	   * @param {GhostKernel} kernel カーネル
	   */
	
	  function GhostKernelController(kernel) {
	    _classCallCheck(this, GhostKernelController);
	
	    this._kernel = kernel;
	  }
	
	  /**
	   * カーネル
	   * @type {GhostKernel}
	   */
	
	
	  _createClass(GhostKernelController, [{
	    key: 'kernel',
	    get: function get() {
	      return this._kernel;
	    }
	  }]);
	
	  return GhostKernelController;
	}();
	//# sourceMappingURL=ghost-kernel.js.map


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ConsoleController = exports.ConsoleRouting = undefined;
	
	var _getPrototypeOf = __webpack_require__(72);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _possibleConstructorReturn2 = __webpack_require__(76);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(96);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classCallCheck2 = __webpack_require__(104);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(105);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _namedKernelManager = __webpack_require__(109);
	
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

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ElementListController = exports.ElementListRouting = exports.ShellList = exports.BalloonList = exports.GhostList = exports.ElementList = undefined;
	
	var _regenerator = __webpack_require__(67);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _promise = __webpack_require__(2);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _asyncToGenerator2 = __webpack_require__(71);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _getPrototypeOf = __webpack_require__(72);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _createClass2 = __webpack_require__(105);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(76);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(96);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classCallCheck2 = __webpack_require__(104);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _namedKernelManager = __webpack_require__(109);
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=named-kernel-manager-default-plugins.js.map