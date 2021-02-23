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
    lineNumber: 17,
    columnNumber: 20
  }, _this);
  if (!data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
          lineNumber: 33,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          variant: "body1",
          className: "mr-3",
          children: e.author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
          className: "text-gray-300",
          children: luxon__WEBPACK_IMPORTED_MODULE_7__["DateTime"].fromISO(e.lastUpdated).toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_7__["DateTime"].DATETIME_MED)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        className: "whitespace-pre-wrap",
        children: e.comment
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 4
      }, _this), currentUser === e.author && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        size: "small",
        variant: "outlined",
        onClick: function onClick() {
          return handleDelete(e._id);
        },
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 3
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
      lineNumber: 80,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
      onSubmit: formik.handleSubmit,
      className: "flex items-start mb-10",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
        className: "bg-green-300 mr-5",
        children: user.slice(0, 1).toUpperCase()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
        lineNumber: 90,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "submit",
        variant: "outlined",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(CommentsSection, {
      currentUser: user,
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdzL2NvbW1lbnRzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJDb21tZW50c1NlY3Rpb24iLCJjdXJyZW50VXNlciIsImlkIiwidXNlU1dSIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZSIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVEZWxldGUiLCJwYXJhbXMiLCJtdXRhdGUiLCJmaWx0ZXIiLCJwb3N0SUQiLCJtYXAiLCJhdXRob3IiLCJzbGljZSIsInRvVXBwZXJDYXNlIiwiRGF0ZVRpbWUiLCJmcm9tSVNPIiwibGFzdFVwZGF0ZWQiLCJ0b0xvY2FsZVN0cmluZyIsIkRBVEVUSU1FX01FRCIsImNvbW1lbnQiLCJfaWQiLCJDb21tZW50cyIsInVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJub3ciLCJvblN1Ym1pdCIsInZhbHVlcyIsInBvc3QiLCJyZXMiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUF5RTtBQUFBOztBQUFBLE1BQXRFQyxXQUFzRSxRQUF0RUEsV0FBc0U7QUFBQSxNQUF6REMsRUFBeUQsUUFBekRBLEVBQXlEOztBQUFBLGdCQUN4RUMsbURBQU0sQ0FBQyxlQUFELEVBQWtCLFVBQUNDLEdBQUQ7QUFBQSxXQUMvQ0MsNENBQUssQ0FDSEMsR0FERixDQUNNRixHQUROLEVBRUVHLElBRkYsQ0FFTyxVQUFDQyxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDQyxJQUFGLENBQU9BLElBQWQ7QUFBQSxLQUZQLFdBR1EsVUFBQ0MsR0FBRDtBQUFBLGFBQVND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QUVhLE1BQU0sQ0FBQ1MsWUFKbEI7QUFLQyxhQUFLLEVBQUVULE1BQU0sQ0FBQ0ssTUFBUCxDQUFjWixPQUx0QjtBQU1DLGlCQUFTLEVBQUMsV0FOWDtBQU9DLGlCQUFTO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBELGVBZ0JDLHFFQUFDLHdEQUFEO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFDLFVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpELGVBeUJDLHFFQUFDLGVBQUQ7QUFBaUIsaUJBQVcsRUFBRUcsSUFBOUI7QUFBb0MsUUFBRSxFQUFFNUI7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTZCQSxDQWhERDs7SUFBTTJCLFE7VUFDVUcscUQsRUFHQUcsZ0Q7OztNQUpWTixRO0FBa0RTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdzL1tpZF0uODQzZDE4MjQ4ODM4N2Y5MDNiYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgQnV0dG9uLCBUZXh0RmllbGQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZVNXUiwgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCI7XG5cbmNvbnN0IENvbW1lbnRzU2VjdGlvbiA9ICh7IGN1cnJlbnRVc2VyLCBpZCB9OiB7IGN1cnJlbnRVc2VyOiBzdHJpbmcsIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSB9KSA9PiB7XG5cdGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcIi9hcGkvY29tbWVudHNcIiwgKHVybCkgPT5cblx0XHRheGlvc1xuXHRcdFx0LmdldCh1cmwpXG5cdFx0XHQudGhlbigoZSkgPT4gZS5kYXRhLmRhdGEpXG5cdFx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuXHQpO1xuXG5cdGlmIChlcnJvcikgcmV0dXJuIDxwPkFuIGVycm9yIGhhcyBvY2N1cnJlZC48L3A+O1xuXHRpZiAoIWRhdGEpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcblxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcblx0XHRhd2FpdCBheGlvcy5kZWxldGUoXCIvYXBpL2NvbW1lbnRzXCIsIHtcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRpZDogaWQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdG11dGF0ZShcIi9hcGkvY29tbWVudHNcIik7XG5cdH07XG5cblxuXHRyZXR1cm4gZGF0YS5maWx0ZXIoZSA9PiBlLnBvc3RJRCA9PT0gaWQpLm1hcCgoZSkgPT4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXItZ3JheS01MDAgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIHB4LTUgcHktNCBtYi0zIGJnLW9wYWNpdHktNSBiZy1ibHVlLTUwMFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHQ8QXZhdGFyIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCBtci0yIHctOCBoLTggdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHR7ZS5hdXRob3Iuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKX1cblx0XHRcdFx0PC9BdmF0YXI+XG5cdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNsYXNzTmFtZT1cIm1yLTNcIj5cblx0XHRcdFx0XHR7ZS5hdXRob3J9XG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMFwiPlxuXHRcdFx0XHRcdHtEYXRlVGltZS5mcm9tSVNPKGUubGFzdFVwZGF0ZWQpLnRvTG9jYWxlU3RyaW5nKFxuXHRcdFx0XHRcdFx0RGF0ZVRpbWUuREFURVRJTUVfTUVEXG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLXByZS13cmFwXCI+e2UuY29tbWVudH08L3A+XG5cdFx0XHR7Y3VycmVudFVzZXIgPT09IGUuYXV0aG9yICYmIChcblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdHNpemU9XCJzbWFsbFwiXG5cdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoZS5faWQpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0RGVsZXRlXG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KSk7XG59O1xuXG5jb25zdCBDb21tZW50cyA9ICh7IHVzZXIgfTogeyB1c2VyOiBzdHJpbmcgfSkgPT4ge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeTtcblxuXHRjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuXHRcdGluaXRpYWxWYWx1ZXM6IHtcblx0XHRcdGF1dGhvcjogdXNlcixcblx0XHRcdGNvbW1lbnQ6IFwiXCIsXG5cdFx0XHRsYXN0VXBkYXRlZDogRGF0ZVRpbWUubm93KCksXG5cdFx0fSxcblx0XHRvblN1Ym1pdDogYXN5bmMgKHZhbHVlcykgPT4ge1xuXHRcdFx0YXdhaXQgYXhpb3Ncblx0XHRcdFx0LnBvc3QoXCIvYXBpL2NvbW1lbnRzXCIsIHsgLi4udmFsdWVzLCBwb3N0SUQ6IGlkIH0pXG5cdFx0XHRcdC50aGVuKChyZXMpID0+IHJlcy5kYXRhKVxuXHRcdFx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcblx0XHRcdG11dGF0ZShcIi9hcGkvY29tbWVudHNcIik7XG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIChcblx0XHQ8bWFpbiBjbGFzc05hbWU9XCJweC0xNlwiPlxuXHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgZ3V0dGVyQm90dG9tIGNsYXNzTmFtZT1cIm1iLTVcIj5cblx0XHRcdFx0Q29tbWVudHNcblx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdDxmb3JtXG5cdFx0XHRcdG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fVxuXHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IG1iLTEwXCJcblx0XHRcdD5cblx0XHRcdFx0PEF2YXRhciBjbGFzc05hbWU9XCJiZy1ncmVlbi0zMDAgbXItNVwiPlxuXHRcdFx0XHRcdHt1c2VyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCl9XG5cdFx0XHRcdDwvQXZhdGFyPlxuXHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0dmFyaWFudD1cImZpbGxlZFwiXG5cdFx0XHRcdFx0bGFiZWw9XCJDb21tZW50XCJcblx0XHRcdFx0XHRuYW1lPVwiY29tbWVudFwiXG5cdFx0XHRcdFx0b25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0dmFsdWU9e2Zvcm1pay52YWx1ZXMuY29tbWVudH1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTk2IG1yLTNcIlxuXHRcdFx0XHRcdG11bHRpbGluZVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwib3V0bGluZWRcIj5cblx0XHRcdFx0XHRTdWJtaXRcblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L2Zvcm0+XG5cblx0XHRcdDxDb21tZW50c1NlY3Rpb24gY3VycmVudFVzZXI9e3VzZXJ9IGlkPXtpZH0gLz5cblx0XHQ8L21haW4+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cztcbiJdLCJzb3VyY2VSb290IjoiIn0=