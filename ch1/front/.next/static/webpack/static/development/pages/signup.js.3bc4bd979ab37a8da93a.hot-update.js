webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP, LOG_IN, LOG_OUT, SIGN_UP_ID, SIGN_UP_NICK, SIGN_UP_PASSWORD, signUpAction, loginAction, logoutAction, signUpId, signUpNick, signUpPassword, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP", function() { return SIGN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN", function() { return LOG_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_ID", function() { return SIGN_UP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_NICK", function() { return SIGN_UP_NICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_PASSWORD", function() { return SIGN_UP_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpAction", function() { return signUpAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpId", function() { return signUpId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpNick", function() { return signUpNick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpPassword", function() { return signUpPassword; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var dummyUser = {
  nickname: '제로초',
  Post: [],
  Followings: [],
  Followers: []
};
var initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {
    // id: '',
    nick: '',
    password: ''
  }
};
var SIGN_UP = 'SIGN_UP';
var LOG_IN = 'LOG_IN';
var LOG_OUT = 'LOG_OUT';
var SIGN_UP_ID = 'SIGN_UP_ID';
var SIGN_UP_NICK = 'SIGN_UP_NICK';
var SIGN_UP_PASSWORD = 'SIGN_UP_PASSWORD';
var signUpAction = function signUpAction(data) {
  return {
    type: SIGN_UP,
    data: data
  };
};
var loginAction = {
  type: LOG_IN
};
var logoutAction = {
  type: LOG_OUT
};
var signUpId = function signUpId(data) {
  return {
    type: SIGN_UP_ID,
    data: data
  };
};
var signUpNick = function signUpNick(data) {
  return {
    type: SIGN_UP_NICK,
    data: data
  };
};
var signUpPassword = function signUpPassword(data) {
  return {
    type: SIGN_UP_PASSWORD,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOG_IN:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isLoggedIn: true,
          user: dummyUser
        });
      }

    case LOG_OUT:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isLoggedIn: false,
          user: null
        });
      }

    case SIGN_UP:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          signUpData: action.data
        });
      }

    case SIGN_UP_ID:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          signUpData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.signUpData, {
            id: action.data
          })
        });
      }

    case SIGN_UP_NICK:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          signUpData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.signUpData, {
            nick: action.data
          })
        });
      }

    case SIGN_UP_PASSWORD:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          signUpData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.signUpData, {
            id: action.data,
            password: action.data
          })
        });
      }

    default:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=signup.js.3bc4bd979ab37a8da93a.hot-update.js.map