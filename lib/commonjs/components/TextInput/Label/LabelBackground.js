"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _AnimatedText = _interopRequireDefault(require("../../Typography/AnimatedText"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const LabelBackground = _ref => {
  let {
    labeled,
    labelLayoutWidth,
    placeholderStyle,
    baseLabelTranslateX,
    topPosition,
    label,
    backgroundColor,
    roundness,
    labelStyle,
    maxFontSizeMultiplier,
    testID
  } = _ref;
  const opacity = labeled.interpolate({
    inputRange: [0, 0.6],
    outputRange: [1, 0]
  });
  const labelTranslationX = {
    translateX: labeled.interpolate({
      inputRange: [0, 1],
      outputRange: [-baseLabelTranslateX, 0]
    })
  };
  const labelTextScaleY = {
    scaleY: labeled.interpolate({
      inputRange: [0, 1],
      outputRange: [0.2, 1]
    })
  };
  const labelTextTransform = [...labelStyle.transform, labelTextScaleY];
  const isRounded = roundness > 6;
  const roundedEdgeCover = isRounded ? /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    key: "labelBackground-view",
    pointerEvents: "none",
    style: [_reactNative.StyleSheet.absoluteFill, styles.view, {
      backgroundColor,
      maxHeight: Math.max(roundness / 3, 2),
      bottom: Math.max(roundness, 2),
      transform: [labelTranslationX],
      opacity
    }]
  }) : null;
  return [roundedEdgeCover, /*#__PURE__*/React.createElement(_AnimatedText.default, {
    key: "labelBackground-text",
    testID: `${testID}-label-background`,
    style: [placeholderStyle, labelStyle, styles.outlinedLabel, {
      top: topPosition + 1,
      width: labelLayoutWidth - placeholderStyle.paddingHorizontal,
      backgroundColor,
      opacity,
      transform: labelTextTransform
    }],
    numberOfLines: 1,
    maxFontSizeMultiplier: maxFontSizeMultiplier
  }, typeof label === 'string' ? label : label === null || label === void 0 ? void 0 : label.props.children)];
};
var _default = exports.default = LabelBackground;
const styles = _reactNative.StyleSheet.create({
  view: {
    position: 'absolute',
    top: 6,
    left: 10,
    width: 12
  },
  // eslint-disable-next-line react-native/no-color-literals
  outlinedLabel: {
    position: 'absolute',
    left: 8,
    paddingHorizontal: 0,
    color: 'transparent'
  }
});
//# sourceMappingURL=LabelBackground.js.map