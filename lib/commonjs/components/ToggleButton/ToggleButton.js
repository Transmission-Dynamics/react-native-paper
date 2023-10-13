"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ToggleButton = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
var _ToggleButtonGroup = require("./ToggleButtonGroup");
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _colors = require("../../styles/themes/v2/colors");
var _forwardRef = require("../../utils/forwardRef");
var _IconButton = _interopRequireDefault(require("../IconButton/IconButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons,
 * a group should share a common container.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ToggleButton } from 'react-native-paper';
 *
 * const ToggleButtonExample = () => {
 *   const [status, setStatus] = React.useState('checked');
 *
 *   const onButtonToggle = value => {
 *     setStatus(status === 'checked' ? 'unchecked' : 'checked');
 *   };
 *
 *   return (
 *     <ToggleButton
 *       icon="bluetooth"
 *       value="bluetooth"
 *       status={status}
 *       onPress={onButtonToggle}
 *     />
 *   );
 * };
 *
 * export default ToggleButtonExample;
 *
 * ```
 */
const ToggleButton = exports.ToggleButton = (0, _forwardRef.forwardRef)((_ref, ref) => {
  let {
    icon,
    size,
    theme: themeOverrides,
    accessibilityLabel,
    disabled,
    style,
    value,
    status,
    onPress,
    rippleColor,
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const borderRadius = theme.roundness;
  return /*#__PURE__*/React.createElement(_ToggleButtonGroup.ToggleButtonGroupContext.Consumer, null, context => {
    const checked = context && context.value === value || status === 'checked';
    const backgroundColor = (0, _utils.getToggleButtonColor)({
      theme,
      checked
    });
    const borderColor = theme.isV3 ? theme.colors.outline : (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.29).rgb().string();
    return /*#__PURE__*/React.createElement(_IconButton.default, _extends({
      borderless: false,
      icon: icon,
      onPress: e => {
        if (onPress) {
          onPress(e);
        }
        if (context) {
          context.onValueChange(!checked ? value : null);
        }
      },
      size: size,
      accessibilityLabel: accessibilityLabel,
      accessibilityState: {
        disabled,
        selected: checked
      },
      disabled: disabled,
      style: [styles.content, {
        backgroundColor,
        borderRadius,
        borderColor
      }, style],
      ref: ref,
      theme: theme,
      rippleColor: rippleColor
    }, rest));
  });
});
const styles = _reactNative.StyleSheet.create({
  content: {
    width: 42,
    height: 42,
    margin: 0
  }
});
var _default = exports.default = ToggleButton; // @component-docs ignore-next-line
//# sourceMappingURL=ToggleButton.js.map