"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppbarAction = void 0;
var React = _interopRequireWildcard(require("react"));
var _color = _interopRequireDefault(require("color"));
var _theming = require("../../core/theming");
var _colors = require("../../styles/themes/v2/colors");
var _forwardRef = require("../../utils/forwardRef");
var _IconButton = _interopRequireDefault(require("../IconButton/IconButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * A component used to display an action item in the appbar.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 * import { Platform } from 'react-native';
 *
 * const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" subtitle={'Subtitle'} />
 *         <Appbar.Action icon="magnify" onPress={() => {}} />
 *         <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarAction = exports.AppbarAction = (0, _forwardRef.forwardRef)((_ref, ref) => {
  let {
    size = 24,
    color: iconColor,
    icon,
    disabled,
    onPress,
    accessibilityLabel,
    isLeading,
    theme: themeOverrides,
    rippleColor,
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const actionIconColor = iconColor ? iconColor : theme.isV3 ? isLeading ? theme.colors.onSurface : theme.colors.onSurfaceVariant : (0, _color.default)(_colors.black).alpha(0.54).rgb().string();
  return /*#__PURE__*/React.createElement(_IconButton.default, _extends({
    size: size,
    onPress: onPress,
    iconColor: actionIconColor,
    icon: icon,
    disabled: disabled,
    accessibilityLabel: accessibilityLabel,
    animated: true,
    ref: ref,
    rippleColor: rippleColor
  }, rest));
});
AppbarAction.displayName = 'Appbar.Action';
var _default = exports.default = AppbarAction; // @component-docs ignore-next-line
//# sourceMappingURL=AppbarAction.js.map