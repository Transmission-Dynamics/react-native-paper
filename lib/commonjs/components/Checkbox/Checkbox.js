"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Checkbox = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _CheckboxAndroid = _interopRequireDefault(require("./CheckboxAndroid"));
var _CheckboxIOS = _interopRequireDefault(require("./CheckboxIOS"));
var _theming = require("../../core/theming");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Checkboxes allow the selection of multiple options from a set.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Checkbox } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [checked, setChecked] = React.useState(false);
 *
 *   return (
 *     <Checkbox
 *       status={checked ? 'checked' : 'unchecked'}
 *       onPress={() => {
 *         setChecked(!checked);
 *       }}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const Checkbox = _ref => {
  let {
    theme: themeOverrides,
    ...props
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  return _reactNative.Platform.OS === 'ios' ? /*#__PURE__*/React.createElement(_CheckboxIOS.default, _extends({}, props, {
    theme: theme
  })) : /*#__PURE__*/React.createElement(_CheckboxAndroid.default, _extends({}, props, {
    theme: theme
  }));
};
var _default = exports.default = Checkbox; // @component-docs ignore-next-line
const CheckboxWithTheme = exports.Checkbox = Checkbox;
// @component-docs ignore-next-line
//# sourceMappingURL=Checkbox.js.map