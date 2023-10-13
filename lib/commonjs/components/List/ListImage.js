"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../../core/theming");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * A component to show image in a list item.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <>
 *     <List.Image variant="image" source={{uri: 'https://www.someurl.com/apple'}} />
 *     <List.Image variant="video" source={require('../../some-apple.png')} />
 *   </>
 * );
 *
 * export default MyComponent;
 * ```
 */
const ListImage = _ref => {
  let {
    style,
    source,
    variant = 'image',
    theme: themeOverrides
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const getStyles = () => {
    if (variant === 'video') {
      if (!theme.isV3) {
        return [style, styles.video];
      }
      return [style, styles.videoV3];
    }
    return [style, styles.image];
  };
  return /*#__PURE__*/React.createElement(_reactNative.Image, {
    style: getStyles(),
    source: source,
    accessibilityIgnoresInvertColors: true,
    testID: "list-image"
  });
};
const styles = _reactNative.StyleSheet.create({
  image: {
    width: 56,
    height: 56
  },
  video: {
    width: 100,
    height: 64,
    marginLeft: 0
  },
  videoV3: {
    width: 114,
    height: 64,
    marginLeft: 0
  }
});
ListImage.displayName = 'List.Image';
var _default = exports.default = ListImage;
//# sourceMappingURL=ListImage.js.map