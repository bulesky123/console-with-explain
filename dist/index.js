'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

require('./stack');

var __consoleA__ = Object.assign({}, window.console);
var __consoleB__ = Object.assign({}, window.console);

var prevLocation = '';

/**
 *
 * @param preClear {Boolean} 打印之前是否清除之前的控制台输出
 * @param enableGroup {Boolean} 是否使用group分组
 * @param pathDepth {Number} 打印路径的深度
 * @returns {*}
 */
function createConsole() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$preClear = _ref.preClear,
        preClear = _ref$preClear === undefined ? false : _ref$preClear,
        _ref$enableGroup = _ref.enableGroup,
        enableGroup = _ref$enableGroup === undefined ? true : _ref$enableGroup,
        _ref$pathDepth = _ref.pathDepth,
        pathDepth = _ref$pathDepth === undefined ? 2 : _ref$pathDepth,
        _ref$startText = _ref.startText,
        startText = _ref$startText === undefined ? 'console start...' : _ref$startText;

    preClear && __consoleB__.clear();

    __consoleB__.log('%c' + startText, 'font-size:50px;color:#fff;text-shadow:0 1px 0#ccc,0 2px 0  #c9c9c9 ,0 3px 0  #bbb ,0 4px 0  #b9b9b9 ,0 5px 0  #aaa ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');

    return Object.assign(__consoleA__, {
        log: function log() {
            if (prevLocation !== __consoleLocation__) {

                prevLocation = __consoleLocation__;

                // 结束上一次的group
                if (enableGroup) {
                    __consoleB__.groupEnd();
                }

                var _consoleLocation__ = __consoleLocation__,
                    fileName = _consoleLocation__.fileName,
                    lineNumber = _consoleLocation__.lineNumber,
                    columnNumber = _consoleLocation__.columnNumber,
                    functionName = _consoleLocation__.functionName;


                fileName = fileName.split('/').slice(-pathDepth).join('/');

                // 开始新的一个group
                if (enableGroup) {
                    __consoleB__.group('%c ' + fileName + ': %c ' + lineNumber + ':' + columnNumber + ' %c ' + functionName, "color:#53C1A9", "color:red", "color:blue");
                }
            }

            return __consoleB__.log.apply(__consoleB__, arguments);
        }
    });
}

function isPlainObject(obj) {
    return obj ? (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && Object.getPrototypeOf(obj) === Object.prototype : false;
}

module.exports = createConsole;