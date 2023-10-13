"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DialogIcon = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../../core/theming");
var _Icon = _interopRequireDefault(require("../Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * @supported Available in v5.x with theme version 3
 * A component to show an icon in a Dialog.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { StyleSheet } from 'react-native';
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
 *         <Dialog.Icon icon="alert" />
 *         <Dialog.Title style={styles.title}>This is a title</Dialog.Title>
 *         <Dialog.Content>
 *           <Text variant="bodyMedium">This is simple dialog</Text>
 *         </Dialog.Content>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * const styles = StyleSheet.create({
 *   title: {
 *     textAlign: 'center',
 *   },
 * })
 *
 * export default MyComponent;
 * ```
 */
const DialogIcon = _ref => {
  let {
    size = 24,
    color,
    icon,
    theme: themeOverrides
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  if (!theme.isV3) {
    return null;
  }

  //@ts-ignore
  const iconColor = color || theme.colors.secondary;
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.wrapper
  }, /*#__PURE__*/React.createElement(_Icon.default, {
    source: icon,
    color: iconColor,
    size: size
  }));
};
exports.DialogIcon = DialogIcon;
DialogIcon.displayName = 'Dialog.Icon';
const styles = _reactNative.StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24
  }
});
var _default = exports.default = DialogIcon; // @component-docs ignore-next-line
//# sourceMappingURL=DialogIcon.js.map