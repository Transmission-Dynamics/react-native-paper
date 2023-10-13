"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DialogTitle = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../../core/theming");
var _Text = _interopRequireDefault(require("../Typography/Text"));
var _Title = _interopRequireDefault(require("../Typography/v2/Title"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * A component to show a title in a Dialog.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Dialog, Portal, Text } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <Portal>
 *       <Dialog visible={visible} onDismiss={hideDialog}>
 *         <Dialog.Title>This is a title</Dialog.Title>
 *         <Dialog.Content>
 *           <Text variant="bodyMedium">This is simple dialog</Text>
 *         </Dialog.Content>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const DialogTitle = _ref => {
  let {
    children,
    theme: themeOverrides,
    style,
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    isV3,
    colors,
    fonts
  } = theme;
  const TextComponent = isV3 ? _Text.default : _Title.default;
  const headerTextStyle = {
    color: isV3 ? colors.onSurface : colors === null || colors === void 0 ? void 0 : colors.text,
    ...(isV3 ? fonts.headlineSmall : {})
  };
  return /*#__PURE__*/React.createElement(TextComponent, _extends({
    variant: "headlineSmall",
    accessibilityRole: "header",
    style: [styles.text, isV3 && styles.v3Text, headerTextStyle, style]
  }, rest), children);
};
exports.DialogTitle = DialogTitle;
DialogTitle.displayName = 'Dialog.Title';
const styles = _reactNative.StyleSheet.create({
  text: {
    marginTop: 22,
    marginBottom: 18,
    marginHorizontal: 24
  },
  v3Text: {
    marginTop: 16,
    marginBottom: 16
  }
});
var _default = exports.default = DialogTitle; // @component-docs ignore-next-line
//# sourceMappingURL=DialogTitle.js.map