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

  return data.reverse().map(function (e) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "rounded-lg border-gray-500 border-2 border-solid px-5 py-4 mb-3 bg-opacity-5 bg-blue-500",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "flex items-center",
        children: [JSON.stringify(e.postID === id), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
          className: "bg-green-500 mr-2 w-8 h-8 text-center",
          children: e.author.slice(0, 1).toUpperCase()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          variant: "body1",
          className: "mr-3",
          children: e.author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
          className: "text-gray-300",
          children: luxon__WEBPACK_IMPORTED_MODULE_7__["DateTime"].fromISO(e.lastUpdated).toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_7__["DateTime"].DATETIME_MED)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        className: "whitespace-pre-wrap",
        children: e.comment
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
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
        lineNumber: 49,
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
      lineNumber: 82,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
      onSubmit: formik.handleSubmit,
      className: "flex items-start mb-10",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
        className: "bg-green-300 mr-5",
        children: user.slice(0, 1).toUpperCase()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
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
        lineNumber: 92,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "submit",
        variant: "outlined",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(CommentsSection, {
      currentUser: user,
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdzL2NvbW1lbnRzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJDb21tZW50c1NlY3Rpb24iLCJjdXJyZW50VXNlciIsImlkIiwidXNlU1dSIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZSIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVEZWxldGUiLCJwYXJhbXMiLCJtdXRhdGUiLCJyZXZlcnNlIiwibWFwIiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3RJRCIsImF1dGhvciIsInNsaWNlIiwidG9VcHBlckNhc2UiLCJEYXRlVGltZSIsImZyb21JU08iLCJsYXN0VXBkYXRlZCIsInRvTG9jYWxlU3RyaW5nIiwiREFURVRJTUVfTUVEIiwiY29tbWVudCIsIl9pZCIsIkNvbW1lbnRzIiwidXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm5vdyIsIm9uU3VibWl0IiwidmFsdWVzIiwicG9zdCIsInJlcyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQXlFO0FBQUE7O0FBQUEsTUFBdEVDLFdBQXNFLFFBQXRFQSxXQUFzRTtBQUFBLE1BQXpEQyxFQUF5RCxRQUF6REEsRUFBeUQ7O0FBQUEsZ0JBQ3hFQyxtREFBTSxDQUFDLGVBQUQsRUFBa0IsVUFBQ0MsR0FBRDtBQUFBLFdBQy9DQyw0Q0FBSyxDQUNIQyxHQURGLENBQ01GLEdBRE4sRUFFRUcsSUFGRixDQUVPLFVBQUNDLENBQUQ7QUFBQSxhQUFPQSxDQUFDLENBQUNDLElBQUYsQ0FBT0EsSUFBZDtBQUFBLEtBRlAsV0FHUSxV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QyxTQUhOO0FBSUMsZ0JBQVEsRUFBRWEsTUFBTSxDQUFDUyxZQUpsQjtBQUtDLGFBQUssRUFBRVQsTUFBTSxDQUFDSyxNQUFQLENBQWNaLE9BTHRCO0FBTUMsaUJBQVMsRUFBQyxXQU5YO0FBT0MsaUJBQVM7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEQsZUFnQkMscUVBQUMsd0RBQUQ7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUMsVUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkQsZUF5QkMscUVBQUMsZUFBRDtBQUFpQixpQkFBVyxFQUFFRyxJQUE5QjtBQUFvQyxRQUFFLEVBQUU5QjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBNkJBLENBaEREOztJQUFNNkIsUTtVQUNVRyxxRCxFQUdBRyxnRDs7O01BSlZOLFE7QUFrRFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld3MvW2lkXS4wYWFlYzUxNDJiMzBmMTkyZDcxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjtcblxuY29uc3QgQ29tbWVudHNTZWN0aW9uID0gKHsgY3VycmVudFVzZXIsIGlkIH06IHsgY3VycmVudFVzZXI6IHN0cmluZywgaWQ6IHN0cmluZyB8IHN0cmluZ1tdIH0pID0+IHtcblx0Y29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFwiL2FwaS9jb21tZW50c1wiLCAodXJsKSA9PlxuXHRcdGF4aW9zXG5cdFx0XHQuZ2V0KHVybClcblx0XHRcdC50aGVuKChlKSA9PiBlLmRhdGEuZGF0YSlcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpXG5cdCk7XG5cblx0aWYgKGVycm9yKSByZXR1cm4gPHA+QW4gZXJyb3IgaGFzIG9jY3VycmVkLjwvcD47XG5cdGlmICghZGF0YSkgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xuXHRcdGF3YWl0IGF4aW9zLmRlbGV0ZShcIi9hcGkvY29tbWVudHNcIiwge1xuXHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdGlkOiBpZCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0bXV0YXRlKFwiL2FwaS9jb21tZW50c1wiKTtcblx0fTtcblxuXG5cdHJldHVybiBkYXRhLnJldmVyc2UoKS5tYXAoKGUpID0+IChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyLWdyYXktNTAwIGJvcmRlci0yIGJvcmRlci1zb2xpZCBweC01IHB5LTQgbWItMyBiZy1vcGFjaXR5LTUgYmctYmx1ZS01MDBcIj5cblx0XHR7LyogLmZpbHRlcihlID0+IGUucG9zdElkID09PSBpZClcdCAqL31cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0e0pTT04uc3RyaW5naWZ5KCBlLnBvc3RJRCA9PT0gaWQgKX1cblx0XHRcdFx0PEF2YXRhciBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgbXItMiB3LTggaC04IHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0e2UuYXV0aG9yLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCl9XG5cdFx0XHRcdDwvQXZhdGFyPlxuXHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjbGFzc05hbWU9XCJtci0zXCI+XG5cdFx0XHRcdFx0e2UuYXV0aG9yfVxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDBcIj5cblx0XHRcdFx0XHR7RGF0ZVRpbWUuZnJvbUlTTyhlLmxhc3RVcGRhdGVkKS50b0xvY2FsZVN0cmluZyhcblx0XHRcdFx0XHRcdERhdGVUaW1lLkRBVEVUSU1FX01FRFxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHAgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1wcmUtd3JhcFwiPntlLmNvbW1lbnR9PC9wPlxuXHRcdFx0e2N1cnJlbnRVc2VyID09PSBlLmF1dGhvciAmJiAoXG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRzaXplPVwic21hbGxcIlxuXHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGUuX2lkKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdERlbGV0ZVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCkpO1xufTtcblxuY29uc3QgQ29tbWVudHMgPSAoeyB1c2VyIH06IHsgdXNlcjogc3RyaW5nIH0pID0+IHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XG5cblx0Y29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcblx0XHRpbml0aWFsVmFsdWVzOiB7XG5cdFx0XHRhdXRob3I6IHVzZXIsXG5cdFx0XHRjb21tZW50OiBcIlwiLFxuXHRcdFx0bGFzdFVwZGF0ZWQ6IERhdGVUaW1lLm5vdygpLFxuXHRcdH0sXG5cdFx0b25TdWJtaXQ6IGFzeW5jICh2YWx1ZXMpID0+IHtcblx0XHRcdGF3YWl0IGF4aW9zXG5cdFx0XHRcdC5wb3N0KFwiL2FwaS9jb21tZW50c1wiLCB7IC4uLnZhbHVlcywgcG9zdElEOiBpZCB9KVxuXHRcdFx0XHQudGhlbigocmVzKSA9PiByZXMuZGF0YSlcblx0XHRcdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG5cdFx0XHRtdXRhdGUoXCIvYXBpL2NvbW1lbnRzXCIpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiAoXG5cdFx0PG1haW4gY2xhc3NOYW1lPVwicHgtMTZcIj5cblx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGd1dHRlckJvdHRvbSBjbGFzc05hbWU9XCJtYi01XCI+XG5cdFx0XHRcdENvbW1lbnRzXG5cdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHQ8Zm9ybVxuXHRcdFx0XHRvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBtYi0xMFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxBdmF0YXIgY2xhc3NOYW1lPVwiYmctZ3JlZW4tMzAwIG1yLTVcIj5cblx0XHRcdFx0XHR7dXNlci5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpfVxuXHRcdFx0XHQ8L0F2YXRhcj5cblx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdHZhcmlhbnQ9XCJmaWxsZWRcIlxuXHRcdFx0XHRcdGxhYmVsPVwiQ29tbWVudFwiXG5cdFx0XHRcdFx0bmFtZT1cImNvbW1lbnRcIlxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdHZhbHVlPXtmb3JtaWsudmFsdWVzLmNvbW1lbnR9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy05NiBtci0zXCJcblx0XHRcdFx0XHRtdWx0aWxpbmVcblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cIm91dGxpbmVkXCI+XG5cdFx0XHRcdFx0U3VibWl0XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9mb3JtPlxuXG5cdFx0XHQ8Q29tbWVudHNTZWN0aW9uIGN1cnJlbnRVc2VyPXt1c2VyfSBpZD17aWR9IC8+XG5cdFx0PC9tYWluPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7XG4iXSwic291cmNlUm9vdCI6IiJ9