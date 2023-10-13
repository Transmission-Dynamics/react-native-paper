"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _AnimatedText = _interopRequireDefault(require("../Typography/AnimatedText"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Helper text is used in conjuction with input elements to provide additional hints for the user.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { HelperText, TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *    const onChangeText = text => setText(text);
 *
 *   const hasErrors = () => {
 *     return !text.includes('@');
 *   };
 *
 *  return (
 *     <View>
 *       <TextInput label="Email" value={text} onChangeText={onChangeText} />
 *       <HelperText type="error" visible={hasErrors()}>
 *         Email address is invalid!
 *       </HelperText>
 *     </View>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const HelperText = _ref => {
  let {
    style,
    type = 'info',
    visible = true,
    theme: themeOverrides,
    onLayout,
    padding = 'normal',
    disabled,
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    current: shown
  } = React.useRef(new _reactNative.Animated.Value(visible ? 1 : 0));
  let {
    current: textHeight
  } = React.useRef(0);
  const {
    scale
  } = theme.animation;
  const {
    maxFontSizeMultiplier = 1.5
  } = rest;
  React.useEffect(() => {
    if (visible) {
      // show text
      _reactNative.Animated.timing(shown, {
        toValue: 1,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    } else {
      // hide text
      _reactNative.Animated.timing(shown, {
        toValue: 0,
        duration: 180 * scale,
        useNativeDriver: true
      }).start();
    }
  }, [visible, scale, shown]);
  const handleTextLayout = e => {
    onLayout === null || onLayout === void 0 ? void 0 : onLayout(e);
    textHeight = e.nativeEvent.layout.height;
  };
  const textColor = (0, _utils.getTextColor)({
    theme,
    disabled,
    type
  });
  return /*#__PURE__*/React.createElement(_AnimatedText.default, _extends({
    onLayout: handleTextLayout,
    style: [styles.text, padding !== 'none' ? styles.padding : {}, {
      color: textColor,
      opacity: shown,
      transform: visible && type === 'error' ? [{
        translateY: shown.interpolate({
          inputRange: [0, 1],
          outputRange: [-textHeight / 2, 0]
        })
      }] : []
    }, style],
    maxFontSizeMultiplier: maxFontSizeMultiplier
  }, rest), rest.children);
};
const styles = _reactNative.StyleSheet.create({
  text: {
    fontSize: 12,
    paddingVertical: 4
  },
  padding: {
    paddingHorizontal: 12
  }
});
var _default = exports.default = HelperText;
//# sourceMappingURL=HelperText.js.map