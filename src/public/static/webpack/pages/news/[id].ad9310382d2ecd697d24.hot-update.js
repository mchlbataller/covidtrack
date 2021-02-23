webpackHotUpdate_N_E("pages/news/[id]",{

/***/ "./components/news/comments/index.tsx":
/*!********************************************!*\
  !*** ./components/news/comments/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_michael_covidtrack_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_michael_covidtrack_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_michael_covidtrack_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_michael_covidtrack_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_michael_covidtrack_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");





var _jsxFileName = "/home/michael/covidtrack-next/components/news/comments/index.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_michael_covidtrack_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var CommentsSection = function CommentsSection(_ref) {
  _s();

  var currentUser = _ref.currentUser,
      id = _ref.id;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("/api/comments", function (url) {
    return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url).then(function (e) {
      return e.data.data;
    })["catch"](function (err) {
      return console.error(err);
    });
  }),
      data = _useSWR.data,
      error = _useSWR.error;

  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
    children: "An error has occurred."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 20
  }, _this);
  if (!data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 20
  }, _this);

  var handleDelete = /*#__PURE__*/function () {
    var _ref2 = Object(_home_michael_covidtrack_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_michael_covidtrack_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(id) {
      return _home_michael_covidtrack_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a["delete"]("/api/comments", {
                params: {
                  id: id
                }
              });

            case 2:
              Object(swr__WEBPACK_IMPORTED_MODULE_9__["mutate"])("/api/comments");

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDelete(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return data.filter(function (e) {
    return e.postID === id;
  }).map(function (e) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "rounded-lg border-gray-500 border-2 border-solid px-5 py-4 mb-3 bg-opacity-5 bg-blue-500",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "flex items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
          className: "bg-green-500 mr-2 w-8 h-8 text-center",
          children: e.author.slice(0, 1).toUpperCase()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          variant: "body1",
          className: "mr-3",
          children: e.author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
          className: "text-gray-300",
          children: luxon__WEBPACK_IMPORTED_MODULE_7__["DateTime"].fromISO(e.lastUpdated).toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_7__["DateTime"].DATETIME_MED)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        className: "whitespace-pre-wrap",
        children: e.comment
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, _this), currentUser === e.author && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        size: "small",
        variant: "outlined",
        onClick: function onClick() {
          return handleDelete(e._id);
        },
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 6
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, _this);
  });
};

_s(CommentsSection, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c = CommentsSection;

var Comments = function Comments(_ref3) {
  _s2();

  var user = _ref3.user;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var id = router.query.id;
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_6__["useFormik"])({
    initialValues: {
      author: user,
      comment: "",
      lastUpdated: luxon__WEBPACK_IMPORTED_MODULE_7__["DateTime"].now()
    },
    onSubmit: function () {
      var _onSubmit = Object(_home_michael_covidtrack_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_michael_covidtrack_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(values) {
        return _home_michael_covidtrack_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/api/comments", _objectSpread(_objectSpread({}, values), {}, {
                  postID: id
                })).then(function (res) {
                  return res.data;
                })["catch"](function (err) {
                  return console.error(err);
                });

              case 2:
                Object(swr__WEBPACK_IMPORTED_MODULE_9__["mutate"])("/api/comments");

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function onSubmit(_x2) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
    className: "px-16",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "h5",
      gutterBottom: true,
      className: "mb-5",
      children: "Comments"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
      onSubmit: formik.handleSubmit,
      className: "flex items-start mb-10",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
        className: "bg-green-300 mr-5",
        children: user.slice(0, 1).toUpperCase()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        variant: "filled",
        label: "Comment",
        name: "comment",
        onChange: formik.handleChange,
        value: formik.values.comment,
        className: "w-96 mr-3",
        multiline: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "submit",
        variant: "outlined",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(CommentsSection, {
      currentUser: user,
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 3
  }, _this);
};

_s2(Comments, "3UF0p0VTbH20bHYAOoqX25faVyU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"], formik__WEBPACK_IMPORTED_MODULE_6__["useFormik"]];
});

_c2 = Comments;
/* harmony default export */ __webpack_exports__["default"] = (Comments);

var _c, _c2;

$RefreshReg$(_c, "CommentsSection");
$RefreshReg$(_c2, "Comments");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdzL2NvbW1lbnRzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJDb21tZW50c1NlY3Rpb24iLCJjdXJyZW50VXNlciIsImlkIiwidXNlU1dSIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZSIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVEZWxldGUiLCJwYXJhbXMiLCJtdXRhdGUiLCJmaWx0ZXIiLCJwb3N0SUQiLCJtYXAiLCJhdXRob3IiLCJzbGljZSIsInRvVXBwZXJDYXNlIiwiRGF0ZVRpbWUiLCJmcm9tSVNPIiwibGFzdFVwZGF0ZWQiLCJ0b0xvY2FsZVN0cmluZyIsIkRBVEVUSU1FX01FRCIsImNvbW1lbnQiLCJfaWQiLCJDb21tZW50cyIsInVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJub3ciLCJvblN1Ym1pdCIsInZhbHVlcyIsInBvc3QiLCJyZXMiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQU1sQjtBQUFBOztBQUFBLE1BTExDLFdBS0ssUUFMTEEsV0FLSztBQUFBLE1BSkxDLEVBSUssUUFKTEEsRUFJSzs7QUFBQSxnQkFDbUJDLG1EQUFNLENBQUMsZUFBRCxFQUFrQixVQUFDQyxHQUFEO0FBQUEsV0FDL0NDLDRDQUFLLENBQ0hDLEdBREYsQ0FDTUYsR0FETixFQUVFRyxJQUZGLENBRU8sVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ0MsSUFBRixDQUFPQSxJQUFkO0FBQUEsS0FGUCxXQUdRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQyxPQUFPLENB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S0MsYUFBSyxFQUFFVCxNQUFNLENBQUNLLE1BQVAsQ0FBY1osT0FMdEI7QUFNQyxpQkFBUyxFQUFDLFdBTlg7QUFPQyxpQkFBUztBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRCxlQWdCQyxxRUFBQyx3REFBRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBQyxVQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRCxlQXlCQyxxRUFBQyxlQUFEO0FBQWlCLGlCQUFXLEVBQUVHLElBQTlCO0FBQW9DLFFBQUUsRUFBRTVCO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUE2QkEsQ0FoREQ7O0lBQU0yQixRO1VBQ1VHLHFELEVBR0FHLGdEOzs7TUFKVk4sUTtBQWtEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3cy9baWRdLmFkOTMxMDM4MmQyZWNkNjk3ZDI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgVGV4dEZpZWxkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gXCJsdXhvblwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VTV1IsIHsgbXV0YXRlIH0gZnJvbSBcInN3clwiO1xuXG5jb25zdCBDb21tZW50c1NlY3Rpb24gPSAoe1xuXHRjdXJyZW50VXNlcixcblx0aWQsXG59OiB7XG5cdGN1cnJlbnRVc2VyOiBzdHJpbmc7XG5cdGlkOiBzdHJpbmcgfCBzdHJpbmdbXTtcbn0pID0+IHtcblx0Y29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFwiL2FwaS9jb21tZW50c1wiLCAodXJsKSA9PlxuXHRcdGF4aW9zXG5cdFx0XHQuZ2V0KHVybClcblx0XHRcdC50aGVuKChlKSA9PiBlLmRhdGEuZGF0YSlcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpXG5cdCk7XG5cblx0aWYgKGVycm9yKSByZXR1cm4gPHA+QW4gZXJyb3IgaGFzIG9jY3VycmVkLjwvcD47XG5cdGlmICghZGF0YSkgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xuXHRcdGF3YWl0IGF4aW9zLmRlbGV0ZShcIi9hcGkvY29tbWVudHNcIiwge1xuXHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdGlkOiBpZCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0bXV0YXRlKFwiL2FwaS9jb21tZW50c1wiKTtcblx0fTtcblxuXHRyZXR1cm4gZGF0YVxuXHRcdC5maWx0ZXIoKGUpID0+IGUucG9zdElEID09PSBpZClcblx0XHQubWFwKChlKSA9PiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyLWdyYXktNTAwIGJvcmRlci0yIGJvcmRlci1zb2xpZCBweC01IHB5LTQgbWItMyBiZy1vcGFjaXR5LTUgYmctYmx1ZS01MDBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdDxBdmF0YXIgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIG1yLTIgdy04IGgtOCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0e2UuYXV0aG9yLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCl9XG5cdFx0XHRcdFx0PC9BdmF0YXI+XG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY2xhc3NOYW1lPVwibXItM1wiPlxuXHRcdFx0XHRcdFx0e2UuYXV0aG9yfVxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCI+XG5cdFx0XHRcdFx0XHR7RGF0ZVRpbWUuZnJvbUlTTyhlLmxhc3RVcGRhdGVkKS50b0xvY2FsZVN0cmluZyhcblx0XHRcdFx0XHRcdFx0RGF0ZVRpbWUuREFURVRJTUVfTUVEXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIndoaXRlc3BhY2UtcHJlLXdyYXBcIj57ZS5jb21tZW50fTwvcD5cblx0XHRcdFx0e2N1cnJlbnRVc2VyID09PSBlLmF1dGhvciAmJiAoXG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoZS5faWQpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdERlbGV0ZVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KSk7XG59O1xuXG5jb25zdCBDb21tZW50cyA9ICh7IHVzZXIgfTogeyB1c2VyOiBzdHJpbmcgfSkgPT4ge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG5cdGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG5cdFx0aW5pdGlhbFZhbHVlczoge1xuXHRcdFx0YXV0aG9yOiB1c2VyLFxuXHRcdFx0Y29tbWVudDogXCJcIixcblx0XHRcdGxhc3RVcGRhdGVkOiBEYXRlVGltZS5ub3coKSxcblx0XHR9LFxuXHRcdG9uU3VibWl0OiBhc3luYyAodmFsdWVzKSA9PiB7XG5cdFx0XHRhd2FpdCBheGlvc1xuXHRcdFx0XHQucG9zdChcIi9hcGkvY29tbWVudHNcIiwgeyAuLi52YWx1ZXMsIHBvc3RJRDogaWQgfSlcblx0XHRcdFx0LnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuXHRcdFx0bXV0YXRlKFwiL2FwaS9jb21tZW50c1wiKTtcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxtYWluIGNsYXNzTmFtZT1cInB4LTE2XCI+XG5cdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBndXR0ZXJCb3R0b20gY2xhc3NOYW1lPVwibWItNVwiPlxuXHRcdFx0XHRDb21tZW50c1xuXHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0PGZvcm1cblx0XHRcdFx0b25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9XG5cdFx0XHRcdGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgbWItMTBcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8QXZhdGFyIGNsYXNzTmFtZT1cImJnLWdyZWVuLTMwMCBtci01XCI+XG5cdFx0XHRcdFx0e3VzZXIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKX1cblx0XHRcdFx0PC9BdmF0YXI+XG5cdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHR2YXJpYW50PVwiZmlsbGVkXCJcblx0XHRcdFx0XHRsYWJlbD1cIkNvbW1lbnRcIlxuXHRcdFx0XHRcdG5hbWU9XCJjb21tZW50XCJcblx0XHRcdFx0XHRvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHR2YWx1ZT17Zm9ybWlrLnZhbHVlcy5jb21tZW50fVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInctOTYgbXItM1wiXG5cdFx0XHRcdFx0bXVsdGlsaW5lXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxuXHRcdFx0XHRcdFN1Ym1pdFxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvZm9ybT5cblxuXHRcdFx0PENvbW1lbnRzU2VjdGlvbiBjdXJyZW50VXNlcj17dXNlcn0gaWQ9e2lkfSAvPlxuXHRcdDwvbWFpbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==