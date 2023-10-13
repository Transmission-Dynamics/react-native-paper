"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CardCover = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _colors = require("../../styles/themes/v2/colors");
var _splitStyles = require("../../utils/splitStyles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * A component to show a cover image inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends Image props https://reactnative.dev/docs/image#props
 */
const CardCover = _ref => {
  let {
    index,
    total,
    style,
    theme: themeOverrides,
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const flattenedStyles = _reactNative.StyleSheet.flatten(style) || {};
  const [, borderRadiusStyles] = (0, _splitStyles.splitStyles)(flattenedStyles, style => style.startsWith('border') && style.endsWith('Radius'));
  const coverStyle = (0, _utils.getCardCoverStyle)({
    theme,
    index,
    total,
    borderRadiusStyles
  });
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, coverStyle, style]
  }, /*#__PURE__*/React.createElement(_reactNative.Image, _extends({}, rest, {
    style: [styles.image, coverStyle],
    accessibilityIgnoresInvertColors: true
  })));
};
exports.CardCover = CardCover;
CardCover.displayName = 'Card.Cover';
const styles = _reactNative.StyleSheet.create({
  container: {
    height: 195,
    backgroundColor: _colors.grey200,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    padding: 16,
    justifyContent: 'flex-end'
  }
});
var _default = exports.default = CardCover; // @component-docs ignore-next-line
//# sourceMappingURL=CardCover.js.map