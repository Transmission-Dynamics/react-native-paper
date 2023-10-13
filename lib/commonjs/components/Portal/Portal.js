"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _PortalConsumer = _interopRequireDefault(require("./PortalConsumer"));
var _PortalHost = _interopRequireWildcard(require("./PortalHost"));
var _settings = require("../../core/settings");
var _theming = require("../../core/theming");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Portal allows rendering a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a [`Portal.Host`](PortalHost) component to be rendered somewhere in the parent tree.
 * Note that if you're using the `Provider` component, this already includes a `Portal.Host`.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Portal, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Portal>
 *     <Text>This is rendered at a different place</Text>
 *   </Portal>
 * );
 *
 * export default MyComponent;
 * ```
 */
class Portal extends React.Component {
  // @component ./PortalHost.tsx
  static Host = _PortalHost.default;
  render() {
    const {
      children,
      theme
    } = this.props;
    return /*#__PURE__*/React.createElement(_settings.Consumer, null, settings => /*#__PURE__*/React.createElement(_PortalHost.PortalContext.Consumer, null, manager => /*#__PURE__*/React.createElement(_PortalConsumer.default, {
      manager: manager
    }, /*#__PURE__*/React.createElement(_settings.Provider, {
      value: settings
    }, /*#__PURE__*/React.createElement(_theming.ThemeProvider, {
      theme: theme
    }, children)))));
  }
}
var _default = exports.default = (0, _theming.withInternalTheme)(Portal);
//# sourceMappingURL=Portal.js.map