(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-audio-recorder-list"] = factory(require("vue"));
	else
		root["vue-audio-recorder-list"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__7203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9662:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(614);
var tryToString = __webpack_require__(6330);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 9670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(111);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 1318:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIndexedObject = __webpack_require__(5656);
var toAbsoluteIndex = __webpack_require__(1400);
var lengthOfArrayLike = __webpack_require__(6244);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 3658:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(9781);
var isArray = __webpack_require__(3157);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 4326:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 648:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var isCallable = __webpack_require__(614);
var classofRaw = __webpack_require__(4326);
var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 9920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(2597);
var ownKeys = __webpack_require__(3887);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 8880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ (function(module) {


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 7045:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var makeBuiltIn = __webpack_require__(6339);
var defineProperty = __webpack_require__(3070);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ 8052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(614);
var definePropertyModule = __webpack_require__(3070);
var makeBuiltIn = __webpack_require__(6339);
var defineGlobalProperty = __webpack_require__(3072);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 3072:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 9781:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(7293);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 4154:
/***/ (function(module) {


var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ 317:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 7207:
/***/ (function(module) {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 8113:
/***/ (function(module) {


module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 7392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);
var userAgent = __webpack_require__(8113);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 748:
/***/ (function(module) {


// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 2109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);
var getOwnPropertyDescriptor = (__webpack_require__(1236).f);
var createNonEnumerableProperty = __webpack_require__(8880);
var defineBuiltIn = __webpack_require__(8052);
var defineGlobalProperty = __webpack_require__(3072);
var copyConstructorProperties = __webpack_require__(9920);
var isForced = __webpack_require__(4705);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7293:
/***/ (function(module) {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 4374:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 6916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(4374);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 6530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(9781);
var hasOwn = __webpack_require__(2597);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 1702:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(4374);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 5005:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 8173:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(9662);
var isNullOrUndefined = __webpack_require__(8554);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 7854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || this || Function('return this')();


/***/ }),

/***/ 2597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);
var toObject = __webpack_require__(7908);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 3501:
/***/ (function(module) {


module.exports = {};


/***/ }),

/***/ 4664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);
var createElement = __webpack_require__(317);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 8361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var classof = __webpack_require__(4326);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 2788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);
var isCallable = __webpack_require__(614);
var store = __webpack_require__(5465);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 9909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_WEAK_MAP = __webpack_require__(4811);
var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);
var hasOwn = __webpack_require__(2597);
var shared = __webpack_require__(5465);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 3157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(4326);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ 614:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var $documentAll = __webpack_require__(4154);

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 4705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 8554:
/***/ (function(module) {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(614);
var $documentAll = __webpack_require__(4154);

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 1913:
/***/ (function(module) {


module.exports = false;


/***/ }),

/***/ 2190:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(5005);
var isCallable = __webpack_require__(614);
var isPrototypeOf = __webpack_require__(7976);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 6244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toLength = __webpack_require__(7466);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 6339:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var hasOwn = __webpack_require__(2597);
var DESCRIPTORS = __webpack_require__(9781);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(6530).CONFIGURABLE);
var inspectSource = __webpack_require__(2788);
var InternalStateModule = __webpack_require__(9909);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 4758:
/***/ (function(module) {


var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 3070:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(9781);
var IE8_DOM_DEFINE = __webpack_require__(4664);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var anObject = __webpack_require__(9670);
var toPropertyKey = __webpack_require__(4948);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 1236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(9781);
var call = __webpack_require__(6916);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createPropertyDescriptor = __webpack_require__(9114);
var toIndexedObject = __webpack_require__(5656);
var toPropertyKey = __webpack_require__(4948);
var hasOwn = __webpack_require__(2597);
var IE8_DOM_DEFINE = __webpack_require__(4664);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8006:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ (function(__unused_webpack_module, exports) {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 7976:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 6324:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);
var hasOwn = __webpack_require__(2597);
var toIndexedObject = __webpack_require__(5656);
var indexOf = (__webpack_require__(1318).indexOf);
var hiddenKeys = __webpack_require__(3501);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 5296:
/***/ (function(__unused_webpack_module, exports) {


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(6916);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(5005);
var uncurryThis = __webpack_require__(1702);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var anObject = __webpack_require__(9670);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 4488:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isNullOrUndefined = __webpack_require__(8554);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 6200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var shared = __webpack_require__(2309);
var uid = __webpack_require__(9711);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);
var defineGlobalProperty = __webpack_require__(3072);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 2309:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var IS_PURE = __webpack_require__(1913);
var store = __webpack_require__(5465);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.32.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 6293:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7392);
var fails = __webpack_require__(7293);
var global = __webpack_require__(7854);

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 1400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(9303);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8361);
var requireObjectCoercible = __webpack_require__(4488);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9303:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var trunc = __webpack_require__(4758);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 7466:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(9303);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var requireObjectCoercible = __webpack_require__(4488);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 7593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(6916);
var isObject = __webpack_require__(111);
var isSymbol = __webpack_require__(2190);
var getMethod = __webpack_require__(8173);
var ordinaryToPrimitive = __webpack_require__(2140);
var wellKnownSymbol = __webpack_require__(5112);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 4948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toPrimitive = __webpack_require__(7593);
var isSymbol = __webpack_require__(2190);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 1694:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 1340:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(648);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 6330:
/***/ (function(module) {


var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 9711:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 3307:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(6293);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 3353:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 8053:
/***/ (function(module) {


var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ 4811:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 5112:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);
var shared = __webpack_require__(2309);
var hasOwn = __webpack_require__(2597);
var uid = __webpack_require__(9711);
var NATIVE_SYMBOL = __webpack_require__(6293);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 7658:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(2109);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);
var setArrayLength = __webpack_require__(3658);
var doesNotExceedSafeInteger = __webpack_require__(7207);
var fails = __webpack_require__(7293);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 and Safari <= 15.4, FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ 6229:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var defineBuiltIn = __webpack_require__(8052);
var uncurryThis = __webpack_require__(1702);
var toString = __webpack_require__(1340);
var validateArgumentsLength = __webpack_require__(8053);

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var append = uncurryThis(URLSearchParamsPrototype.append);
var $delete = uncurryThis(URLSearchParamsPrototype['delete']);
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
var push = uncurryThis([].push);
var params = new $URLSearchParams('a=1&a=2&b=3');

params['delete']('a', 1);
// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
params['delete']('b', undefined);

if (params + '' !== 'a=2') {
  defineBuiltIn(URLSearchParamsPrototype, 'delete', function (name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $delete(this, name);
    var entries = [];
    forEach(this, function (v, k) { // also validates `this`
      push(entries, { key: k, value: v });
    });
    validateArgumentsLength(length, 1);
    var key = toString(name);
    var value = toString($value);
    var index = 0;
    var dindex = 0;
    var found = false;
    var entriesLength = entries.length;
    var entry;
    while (index < entriesLength) {
      entry = entries[index++];
      if (found || entry.key === key) {
        found = true;
        $delete(this, entry.key);
      } else dindex++;
    }
    while (dindex < entriesLength) {
      entry = entries[dindex++];
      if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
    }
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ 7330:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var defineBuiltIn = __webpack_require__(8052);
var uncurryThis = __webpack_require__(1702);
var toString = __webpack_require__(1340);
var validateArgumentsLength = __webpack_require__(8053);

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
var $has = uncurryThis(URLSearchParamsPrototype.has);
var params = new $URLSearchParams('a=1');

// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
if (params.has('a', 2) || !params.has('a', undefined)) {
  defineBuiltIn(URLSearchParamsPrototype, 'has', function has(name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $has(this, name);
    var values = getAll(this, name); // also validates `this`
    validateArgumentsLength(length, 1);
    var value = toString($value);
    var index = 0;
    while (index < values.length) {
      if (values[index++] === value) return true;
    } return false;
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ 2062:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(9781);
var uncurryThis = __webpack_require__(1702);
var defineBuiltInAccessor = __webpack_require__(7045);

var URLSearchParamsPrototype = URLSearchParams.prototype;
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS && !('size' in URLSearchParamsPrototype)) {
  defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
    get: function size() {
      var count = 0;
      forEach(this, function () { count++; });
      return count;
    },
    configurable: true,
    enumerable: true
  });
}


/***/ }),

/***/ 1620:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 2091:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/startButton.8d3d8b09.png";

/***/ }),

/***/ 9761:
/***/ (function(module) {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ 7203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(7203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AudioRecorderListDisplay.vue?vue&type=template&id=70fa3843&scoped=true

const _withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-70fa3843"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);
const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("br", null, null, -1));
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AudioRecorder = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("AudioRecorder");
  const _component_AudioList = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("AudioList");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_AudioRecorder, {
    settings: $props.settings,
    onAudioRecorded: $options.addAudio
  }, null, 8, ["settings", "onAudioRecorded"]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_AudioList, {
    DownloadAudio: $props.settings.DownloadAudio,
    audioList: $data.audioList,
    onRemoveAudio: $options.removeAudio
  }, null, 8, ["DownloadAudio", "audioList", "onRemoveAudio"]), _hoisted_1, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
      backgroundColor: $props.settings?.startButtonBgColor || 'blue',
      color: $props.settings?.startButtonTextColor || 'black'
    }),
    class: "get-output-button",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.getOutput && $options.getOutput(...args))
  }, " Get output ", 4), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, $data.audioList.length > 0]])]);
}
;// CONCATENATED MODULE: ./src/views/AudioRecorderListDisplay.vue?vue&type=template&id=70fa3843&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.delete.js
var web_url_search_params_delete = __webpack_require__(6229);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.has.js
var web_url_search_params_has = __webpack_require__(7330);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.size.js
var web_url_search_params_size = __webpack_require__(2062);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(7658);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioRecorder.vue?vue&type=template&id=f664dd02&scoped=true

const AudioRecordervue_type_template_id_f664dd02_scoped_true_withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-f664dd02"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);
const AudioRecordervue_type_template_id_f664dd02_scoped_true_hoisted_1 = /*#__PURE__*/AudioRecordervue_type_template_id_f664dd02_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("p", {
  id: "error"
}, null, -1));
const _hoisted_2 = {
  style: {
    "display": "flex"
  }
};
const _hoisted_3 = {
  style: {
    "display": "flex"
  }
};
const _hoisted_4 = {
  key: 2
};
const _hoisted_5 = {
  class: ""
};
const _hoisted_6 = {
  class: "pulse"
};
const _hoisted_7 = /*#__PURE__*/AudioRecordervue_type_template_id_f664dd02_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V4ZM13 4V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z",
  fill: "currentColor"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "M18 12C18 14.973 15.8377 17.441 13 17.917V21H17V23H7V21H11V17.917C8.16229 17.441 6 14.973 6 12V9H8V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V9H18V12Z",
  fill: "currentColor"
})], -1));
const _hoisted_8 = {
  class: "stopwatch"
};
const _hoisted_9 = {
  class: "time"
};
function AudioRecordervue_type_template_id_f664dd02_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Image = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("Image");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", null, [AudioRecordervue_type_template_id_f664dd02_scoped_true_hoisted_1, !$data.isRecording ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("button", {
    key: 0,
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
      backgroundColor: $data.sBgColor,
      color: $data.sTxtColor
    }),
    class: "start-recording-button",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.startRecording && $options.startRecording(...args))
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
    class: "button-icon",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
      'background-image': `url(${$data.sBtnIcon})`
    })
  }, null, 4), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" " + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($data.sText), 1)])], 4)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $data.isRecording ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("button", {
    key: 1,
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
      backgroundColor: $data.spBgColor,
      color: $data.spTxtColor
    }),
    class: "stop-recording-button",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.stopRecording && $options.stopRecording(...args))
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
    class: "button-icon",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
      'background-image': `url(${$data.spBtnIcon})`
    })
  }, null, 4), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" " + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($data.spText), 1)])], 4)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $data.isRecording ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_4, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_5, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_6, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_Image), _hoisted_7])])])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_8, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_9, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($options.formatTime), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, $data.isRecording]])]);
}
;// CONCATENATED MODULE: ./src/components/AudioRecorder.vue?vue&type=template&id=f664dd02&scoped=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioRecorder.vue?vue&type=script&lang=js

/* harmony default export */ var AudioRecordervue_type_script_lang_js = ({
  data() {
    return {
      isRecording: false,
      mediaRecorder: null,
      chunks: [],
      streamVar: null,
      sText: this.settings.startButtonName || 'Start',
      spText: this.settings.stopButtonName || 'Stop',
      sTxtColor: this.settings.startButtonTextColor || 'white',
      sBgColor: this.settings.startButtonBgColor || 'blue',
      spTxtColor: this.settings.stopButtonTextColor || 'white',
      spBgColor: this.settings.stopButtonBgColor || 'red',
      sBtnIcon: this.getImgUrl(this.settings.startButtonIcon, 'start'),
      spBtnIcon: this.getImgUrl(this.settings.stopButtonIcon, 'stop'),
      autoStopTime: this.settings.recordingMaxLimit || 2,
      isRunning: false,
      startTime: null,
      elapsedTime: 0
    };
  },
  props: ['settings'],
  computed: {
    formatTime() {
      const seconds = Math.floor(this.elapsedTime / 1000);
      const minutes = Math.floor(seconds / 60);
      if (minutes == this.autoStopTime || minutes == 60) {
        this.stopRecording();
      }
      console.log(minutes);
      return `${String(minutes % 60).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}.${String(this.elapsedTime % 1000).padStart(3, '0')}`;
    }
  },
  methods: {
    getImgUrl(pic, type) {
      console.log(pic);
      if (pic) return pic;
      if (type == 'start') return __webpack_require__(2091);else return __webpack_require__(9761);
    },
    startRecording() {
      this.chunks = [];
      navigator.mediaDevices.getUserMedia({
        audio: true
      }).then(stream => {
        this.streamVar = stream;
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.ondataavailable = e => {
          if (e.data.size > 0) {
            this.chunks.push(e.data);
          }
        };
        this.mediaRecorder.onstop = () => {
          const audioBlob = new Blob(this.chunks, {
            type: "audio/wav"
          });
          // You can store or upload the audioBlob to your server here.
          // For simplicity, we'll just emit the audioBlob to the parent component.
          this.$emit("audio-recorded", audioBlob);
        };
        this.mediaRecorder.start();
        this.isRecording = true;
        document.getElementById("error").innerHTML = '';
        this.reset();
        this.startStop();
      }).catch(error => {
        console.error("Error accessing the microphone:", error);
        document.getElementById("error").innerHTML = 'Error accessing the microphone';
      });
    },
    stopRecording() {
      this.startStop();
      this.mediaRecorder.stop();
      const tracks = this.streamVar.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
      this.isRecording = false;
    },
    startStop() {
      if (this.isRunning) {
        // Stop the stopwatch
        clearInterval(this.timer);
        this.isRunning = false;
      } else {
        // Start the stopwatch
        this.startTime = Date.now() - this.elapsedTime;
        this.timer = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
        }, 10);
        this.isRunning = true;
      }
    },
    reset() {
      if (!this.isRunning) {
        this.elapsedTime = 0;
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/components/AudioRecorder.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioRecorder.vue?vue&type=style&index=0&id=f664dd02&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/AudioRecorder.vue?vue&type=style&index=0&id=f664dd02&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1620);
;// CONCATENATED MODULE: ./src/components/AudioRecorder.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(AudioRecordervue_type_script_lang_js, [['render',AudioRecordervue_type_template_id_f664dd02_scoped_true_render],['__scopeId',"data-v-f664dd02"]])

/* harmony default export */ var AudioRecorder = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioList.vue?vue&type=template&id=1708277c&scoped=true

const AudioListvue_type_template_id_1708277c_scoped_true_withScopeId = n => (_pushScopeId("data-v-1708277c"), n = n(), _popScopeId(), n);
const AudioListvue_type_template_id_1708277c_scoped_true_hoisted_1 = {
  class: "grid-container"
};
const AudioListvue_type_template_id_1708277c_scoped_true_hoisted_2 = {
  class: "grid-item",
  style: {
    "display": "flex",
    "margin": "auto",
    "width": "30%",
    "padding": "10px"
  }
};
const AudioListvue_type_template_id_1708277c_scoped_true_hoisted_3 = ["src"];
const AudioListvue_type_template_id_1708277c_scoped_true_hoisted_4 = ["onClick"];
const AudioListvue_type_template_id_1708277c_scoped_true_hoisted_5 = ["src"];
const AudioListvue_type_template_id_1708277c_scoped_true_hoisted_6 = ["onClick"];
function AudioListvue_type_template_id_1708277c_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", AudioListvue_type_template_id_1708277c_scoped_true_hoisted_1, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($props.audioList, (audio, index) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
      key: index
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", AudioListvue_type_template_id_1708277c_scoped_true_hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("audio", {
      src: audio.url,
      controls: ""
    }, null, 8, AudioListvue_type_template_id_1708277c_scoped_true_hoisted_3), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
      class: "Download-button",
      onClick: $event => $options.downloadBlobAudio(audio.url, 'downloaded_audio.mp3')
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("img", {
      style: {
        "width": "15px"
      },
      src: $data.downloadIcon
    }, null, 8, AudioListvue_type_template_id_1708277c_scoped_true_hoisted_5)], 8, AudioListvue_type_template_id_1708277c_scoped_true_hoisted_4), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, $props.DownloadAudio]]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
      class: "close",
      onClick: $event => $options.removeAudio(index)
    }, "X", 8, AudioListvue_type_template_id_1708277c_scoped_true_hoisted_6)])]);
  }), 128))]);
}
;// CONCATENATED MODULE: ./src/components/AudioList.vue?vue&type=template&id=1708277c&scoped=true

;// CONCATENATED MODULE: ./src/assets/Download.png
var Download_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioList.vue?vue&type=script&lang=js




/* harmony default export */ var AudioListvue_type_script_lang_js = ({
  data() {
    return {
      downloadIcon: Download_namespaceObject
    };
  },
  props: {
    audioList: {
      type: Array,
      default: () => []
    },
    DownloadAudio: {
      type: Boolean
    }
  },
  methods: {
    removeAudio(i) {
      this.$emit('remove-audio', i);
    },
    downloadBlobAudio(blob, fileName) {
      const url = blob;
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/AudioList.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioList.vue?vue&type=style&index=0&id=1708277c&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/AudioList.vue?vue&type=style&index=0&id=1708277c&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/components/AudioList.vue




;


const AudioList_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(AudioListvue_type_script_lang_js, [['render',AudioListvue_type_template_id_1708277c_scoped_true_render],['__scopeId',"data-v-1708277c"]])

/* harmony default export */ var AudioList = (AudioList_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AudioRecorderListDisplay.vue?vue&type=script&lang=js






/* harmony default export */ var AudioRecorderListDisplayvue_type_script_lang_js = ({
  name: "audioRecorderListDisplay",
  components: {
    AudioRecorder: AudioRecorder,
    AudioList: AudioList
  },
  data() {
    return {
      audioList: []
    };
  },
  props: ['settings'],
  methods: {
    addAudio(audioBlob) {
      const audioURL = URL.createObjectURL(audioBlob);
      this.audioList.push({
        url: audioURL
      });
    },
    removeAudio(i) {
      this.audioList.splice(i, 1);
    },
    getOutput() {
      this.$emit('get-recordings', this.audioList);
    }
  }
});
;// CONCATENATED MODULE: ./src/views/AudioRecorderListDisplay.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AudioRecorderListDisplay.vue?vue&type=style&index=0&id=70fa3843&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/AudioRecorderListDisplay.vue?vue&type=style&index=0&id=70fa3843&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/views/AudioRecorderListDisplay.vue




;


const AudioRecorderListDisplay_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(AudioRecorderListDisplayvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-70fa3843"]])

/* harmony default export */ var AudioRecorderListDisplay = (AudioRecorderListDisplay_exports_);
;// CONCATENATED MODULE: ./src/index.js

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("audio-Recorder-List-Display", AudioRecorderListDisplay);
}
const src_plugin = {
  install
};
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof __webpack_require__.g !== "undefined") {
  GlobalVue = __webpack_require__.g.vue;
}
if (GlobalVue) {
  GlobalVue.use(src_plugin);
}
AudioRecorderListDisplay.install = install;
/* harmony default export */ var src_0 = (AudioRecorderListDisplay);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-audio-recorder-list.umd.js.map