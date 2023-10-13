"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppbarBackAction = void 0;
var React = _interopRequireWildcard(require("react"));
var _AppbarAction = _interopRequireDefault(require("./AppbarAction"));
var _AppbarBackIcon = _interopRequireDefault(require("./AppbarBackIcon"));
var _forwardRef = require("../../utils/forwardRef");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * A component used to display a back button in the appbar.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *       <Appbar.BackAction onPress={() => {}} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarBackAction = exports.AppbarBackAction = (0, _forwardRef.forwardRef)((_ref, ref) => {
  let {
    accessibilityLabel = 'Back',
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(_AppbarAction.default, _extends({
    accessibilityLabel: accessibilityLabel
  }, rest, {
    icon: _AppbarBackIcon.default,
    isLeading: true,
    ref: ref
  }));
});
AppbarBackAction.displayName = 'Appbar.BackAction';
var _default = exports.default = AppbarBackAction; // @component-docs ignore-next-line
//# sourceMappingURL=AppbarBackAction.js.map