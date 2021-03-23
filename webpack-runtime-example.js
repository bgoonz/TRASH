(function(modules) {
    // This is the module runtime.
    // It's only included once per compilation.
    // Other chunks share the same runtime.
    var installedModules = {};
    // The require function
    function __webpack_require__(moduleId) {
        ...
    }
    ...
    // Load entry module and return exports
    return __webpack_require__(__webpack_require__.s = 1);
})
([ // An array that maps module ids to functions
    // a.js as module id 0
    function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "a", {
            configurable: false,
            enumerable: true,
            get: () => number
        });

        let number = 42;

        function incr() {
            number++;
        }
    },
    // test.js as module id 1
    function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__a__ = __webpack_require__(0);

        // Object reference as "live binding"
        console.log(__WEBPACK_IMPORTED_MODULE_0__a__["a" /* number */]);
    }
]);