"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _forwardRef = require("../../utils/forwardRef");
var _CrossFadeIcon = _interopRequireDefault(require("../CrossFadeIcon"));
var _Icon = _interopRequireDefault(require("../Icon"));
var _Surface = _interopRequireDefault(require("../Surface"));
var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const PADDING = 8;
/**
 * An icon button is a button which displays only an icon without a label.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { IconButton, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <IconButton
 *     icon="camera"
 *     iconColor={MD3Colors.error50}
 *     size={20}
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/docs/components/TouchableRipple
 */
const IconButton = (0, _forwardRef.forwardRef)((_ref, ref) => {
  let {
    icon,
    iconColor: customIconColor,
    containerColor: customContainerColor,
    rippleColor: customRippleColor,
    size = 24,
    accessibilityLabel,
    disabled,
    onPress,
    selected = false,
    animated = false,
    mode,
    style,
    theme: themeOverrides,
    testID = 'icon-button',
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    isV3
  } = theme;
  const IconComponent = animated ? _CrossFadeIcon.default : _Icon.default;
  const {
    iconColor,
    rippleColor,
    backgroundColor,
    borderColor
  } = (0, _utils.getIconButtonColor)({
    theme,
    disabled,
    selected,
    mode,
    customIconColor,
    customContainerColor,
    customRippleColor
  });
  const buttonSize = isV3 ? size + 2 * PADDING : size * 1.5;
  const {
    borderWidth = isV3 && mode === 'outlined' && !selected ? 1 : 0,
    borderRadius = buttonSize / 2
  } = _reactNative.StyleSheet.flatten(style) || {};
  const borderStyles = {
    borderWidth,
    borderRadius,
    borderColor
  };
  return /*#__PURE__*/React.createElement(_Surface.default, _extends({
    ref: ref,
    testID: `${testID}-container`,
    style: [{
      backgroundColor,
      width: buttonSize,
      height: buttonSize
    }, styles.container, borderStyles, !isV3 && disabled && styles.disabled, style]
  }, isV3 && {
    elevation: 0
  }), /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({
    borderless: true,
    centered: true,
    onPress: onPress,
    rippleColor: rippleColor,
    accessibilityLabel: accessibilityLabel,
    style: [styles.touchable, {
      borderRadius
    }]
    // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityState: {
      disabled
    },
    disabled: disabled,
    hitSlop: _TouchableRipple.default.supported ? {
      top: 10,
      left: 10,
      bottom: 10,
      right: 10
    } : {
      top: 6,
      left: 6,
      bottom: 6,
      right: 6
    },
    testID: testID
  }, rest), /*#__PURE__*/React.createElement(IconComponent, {
    color: iconColor,
    source: icon,
    size: size
  })));
});
const styles = _reactNative.StyleSheet.create({
  container: {
    overflow: 'hidden',
    margin: 6,
    elevation: 0
  },
  touchable: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabled: {
    opacity: 0.32
  }
});
var _default = exports.default = IconButton;
//# sourceMappingURL=IconButton.js.map