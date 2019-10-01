"use strict";var _reactGa=_interopRequireDefault(require("react-ga"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=init,exports.pageview=pageview,exports.event=event,exports.exception=exception;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var IS_BROWSER="undefined"!=typeof window;function init(a,b){IS_BROWSER&&!window.GA_INITIALIZED&&a&&(_reactGa.default.initialize(a),b&&_reactGa.default.set({anonymizeIp:!0}))}function pageview(){_reactGa.default.set({page:window.location.pathname}),_reactGa.default.pageview(window.location.pathname)}function event(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"";a&&b&&_reactGa.default.event({category:a,action:b})}function exception(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];a&&_reactGa.default.exception({description:a,fatal:b})}