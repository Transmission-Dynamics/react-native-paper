"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("./utils");
var _settings = require("../../core/settings");
var _theming = require("../../core/theming");
var _hasTouchHandler = _interopRequireDefault(require("../../utils/hasTouchHandler"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_VERSION_PIE = 28;
const TouchableRipple = _ref => {
  let {
    style,
    background,
    borderless = false,
    disabled: disabledProp,
    rippleColor,
    underlayColor,
    children,
    theme: themeOverrides,
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    rippleEffectEnabled
  } = React.useContext(_settings.SettingsContext);
  const {
    onPress,
    onLongPress,
    onPressIn,
    onPressOut
  } = rest;
  const hasPassedTouchHandler = (0, _hasTouchHandler.default)({
    onPress,
    onLongPress,
    onPressIn,
    onPressOut
  });
  const disabled = disabledProp || !hasPassedTouchHandler;
  const {
    calculatedRippleColor,
    calculatedUnderlayColor
  } = (0, _utils.getTouchableRippleColors)({
    theme,
    rippleColor,
    underlayColor
  });

  // A workaround for ripple on Android P is to use useForeground + overflow: 'hidden'
  // https://github.com/facebook/react-native/issues/6480
  const useForeground = _reactNative.Platform.OS === 'android' && _reactNative.Platform.Version >= ANDROID_VERSION_PIE && borderless;
  if (TouchableRipple.supported) {
    const androidRipple = rippleEffectEnabled ? background ?? {
      color: calculatedRippleColor,
      borderless,
      foreground: useForeground
    } : undefined;
    return /*#__PURE__*/React.createElement(_reactNative.Pressable, _extends({}, rest, {
      disabled: disabled,
      style: [borderless && styles.overflowHidden, style],
      android_ripple: androidRipple
    }), React.Children.only(children));
  }
  return /*#__PURE__*/React.createElement(_reactNative.Pressable, _extends({}, rest, {
    disabled: disabled,
    style: [borderless && styles.overflowHidden, style]
  }), _ref2 => {
    let {
      pressed
    } = _ref2;
    return /*#__PURE__*/React.createElement(React.Fragment, null, pressed && rippleEffectEnabled && /*#__PURE__*/React.createElement(_reactNative.View, {
      testID: "touchable-ripple-underlay",
      style: [styles.underlay, {
        backgroundColor: calculatedUnderlayColor
      }]
    }), React.Children.only(children));
  });
};
TouchableRipple.supported = _reactNative.Platform.OS === 'android' && _reactNative.Platform.Version >= ANDROID_VERSION_LOLLIPOP;
const styles = _reactNative.StyleSheet.create({
  overflowHidden: {
    overflow: 'hidden'
  },
  underlay: {
    ..._reactNative.StyleSheet.absoluteFillObject,
    zIndex: 2
  }
});
var _default = exports.default = TouchableRipple;
//# sourceMappingURL=TouchableRipple.native.js.map