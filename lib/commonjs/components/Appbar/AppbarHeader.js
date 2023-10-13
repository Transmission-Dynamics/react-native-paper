"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppbarHeader = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _Appbar = require("./Appbar");
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _shadow = _interopRequireDefault(require("../../styles/shadow"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * A component to use as a header at the top of the screen.
 * It can contain the screen title, controls such as navigation buttons, menu button etc.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const _goBack = () => console.log('Went back');
 *
 *   const _handleSearch = () => console.log('Searching');
 *
 *   const _handleMore = () => console.log('Shown more');
 *
 *   return (
 *     <Appbar.Header>
 *       <Appbar.BackAction onPress={_goBack} />
 *       <Appbar.Content title="Title" />
 *       <Appbar.Action icon="magnify" onPress={_handleSearch} />
 *       <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
 *     </Appbar.Header>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const AppbarHeader = _ref => {
  let {
    // Don't use default props since we check it to know whether we should use SafeAreaView
    statusBarHeight,
    style,
    dark,
    mode = _reactNative.Platform.OS === 'ios' ? 'center-aligned' : 'small',
    elevated = false,
    theme: themeOverrides,
    testID = 'appbar-header',
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    isV3
  } = theme;
  const flattenedStyle = _reactNative.StyleSheet.flatten(style);
  const {
    height = isV3 ? _utils.modeAppbarHeight[mode] : _utils.DEFAULT_APPBAR_HEIGHT,
    elevation = isV3 ? elevated ? 2 : 0 : 4,
    backgroundColor: customBackground,
    zIndex = isV3 && elevated ? 1 : 0,
    ...restStyle
  } = flattenedStyle || {};
  const borderRadius = (0, _utils.getAppbarBorders)(restStyle);
  const backgroundColor = (0, _utils.getAppbarBackgroundColor)(theme, elevation, customBackground, elevated);
  const {
    top,
    left,
    right
  } = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    testID: `${testID}-root-layer`,
    style: [{
      backgroundColor,
      zIndex,
      elevation,
      paddingTop: statusBarHeight ?? top,
      paddingHorizontal: Math.max(left, right)
    }, borderRadius, (0, _shadow.default)(elevation)]
  }, /*#__PURE__*/React.createElement(_Appbar.Appbar, _extends({
    testID: testID,
    style: [{
      height,
      backgroundColor
    }, styles.appbar, restStyle],
    dark: dark
  }, isV3 && {
    mode
  }, rest, {
    theme: theme
  })));
};
exports.AppbarHeader = AppbarHeader;
AppbarHeader.displayName = 'Appbar.Header';
const styles = _reactNative.StyleSheet.create({
  appbar: {
    elevation: 0
  }
});
var _default = exports.default = AppbarHeader; // @component-docs ignore-next-line
//# sourceMappingURL=AppbarHeader.js.map