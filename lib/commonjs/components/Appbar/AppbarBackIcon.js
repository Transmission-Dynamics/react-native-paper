"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppbarBackIcon = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _MaterialCommunityIcon = _interopRequireDefault(require("../MaterialCommunityIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AppbarBackIcon = _ref => {
  let {
    size,
    color
  } = _ref;
  const iosIconSize = size - 3;
  return _reactNative.Platform.OS === 'ios' ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.wrapper, {
      width: size,
      height: size,
      transform: [{
        scaleX: _reactNative.I18nManager.getConstants().isRTL ? -1 : 1
      }]
    }]
  }, /*#__PURE__*/React.createElement(_reactNative.Image, {
    source: require('../../assets/back-chevron.png'),
    style: [styles.icon, {
      tintColor: color,
      width: iosIconSize,
      height: iosIconSize
    }],
    accessibilityIgnoresInvertColors: true
  })) : /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
    name: "arrow-left",
    color: color,
    size: size,
    direction: _reactNative.I18nManager.getConstants().isRTL ? 'rtl' : 'ltr'
  });
};
exports.AppbarBackIcon = AppbarBackIcon;
const styles = _reactNative.StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    resizeMode: 'contain'
  }
});
var _default = exports.default = AppbarBackIcon; // @component-docs ignore-next-line
//# sourceMappingURL=AppbarBackIcon.js.map