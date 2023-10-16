"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.accessibilityProps = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _colors = require("../styles/themes/v2/colors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
let MaterialCommunityIcons;
try {
  // Optionally require vector-icons
  MaterialCommunityIcons = require('react-native-vector-icons/MaterialCommunityIcons').default;
} catch (e) {
  let isErrorLogged = false;

  // Fallback component for icons
  MaterialCommunityIcons = _ref => {
    let {
      name,
      color,
      size,
      ...rest
    } = _ref;
    /* eslint-disable no-console */
    if (!isErrorLogged) {
      if (!/(Cannot find module|Module not found|Cannot resolve module)/.test(e.message)) {
        console.error(e);
      }
      console.warn(`Tried to use the icon '${name}' in a component from 'react-native-paper', but 'react-native-vector-icons/MaterialCommunityIcons' could not be loaded.`, `To remove this warning, try installing 'react-native-vector-icons' or use another method to specify icon: https://callstack.github.io/react-native-paper/docs/guides/icons`);
      isErrorLogged = true;
    }
    return /*#__PURE__*/React.createElement(_reactNative.Text, _extends({}, rest, {
      style: [styles.icon, {
        color,
        fontSize: size
      }]
      // @ts-expect-error: Text doesn't support this, but it seems to affect TouchableNativeFeedback
      ,
      pointerEvents: "none",
      selectable: false
    }), "\u25A1");
  };
}
const accessibilityProps = exports.accessibilityProps = _reactNative.Platform.OS === 'web' ? {
  role: 'img',
  focusable: false
} : {
  accessibilityElementsHidden: true,
  importantForAccessibility: 'no-hide-descendants'
};
const defaultIcon = _ref2 => {
  let {
    name,
    color = _colors.black,
    size,
    direction,
    allowFontScaling,
    testID
  } = _ref2;
  return /*#__PURE__*/React.createElement(MaterialCommunityIcons, _extends({
    allowFontScaling: allowFontScaling,
    name: name,
    color: color,
    size: size,
    style: [{
      transform: [{
        scaleX: direction === 'rtl' ? -1 : 1
      }],
      lineHeight: size
    }, styles.icon],
    pointerEvents: "none",
    selectable: false,
    testID: testID
  }, accessibilityProps));
};
const styles = _reactNative.StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  icon: {
    backgroundColor: 'transparent'
  }
});
var _default = exports.default = defaultIcon;
//# sourceMappingURL=MaterialCommunityIcon.js.map