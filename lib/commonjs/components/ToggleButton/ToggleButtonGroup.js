"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ToggleButtonGroupContext = exports.ToggleButtonGroup = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ToggleButtonGroupContext = exports.ToggleButtonGroupContext =
/*#__PURE__*/
//@ts-expect-error: TS can't ensure the type from Group to children
React.createContext(null);

/**
 * Toggle group allows to control a group of toggle buttons.</br>
 * It doesn't change the appearance of the toggle buttons. If you want to group them in a row, check out [ToggleButton.Row](ToggleButtonRow).
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ToggleButton } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('left');
 *
 *   return (
 *     <ToggleButton.Group
 *       onValueChange={value => setValue(value)}
 *       value={value}>
 *       <ToggleButton icon="format-align-left" value="left" />
 *       <ToggleButton icon="format-align-right" value="right" />
 *     </ToggleButton.Group>
 *   );
 * };
 *
 * export default MyComponent;
 *```
 */
const ToggleButtonGroup = _ref => {
  let {
    value,
    onValueChange,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(ToggleButtonGroupContext.Provider, {
    value: {
      value,
      onValueChange
    }
  }, children);
};
exports.ToggleButtonGroup = ToggleButtonGroup;
ToggleButtonGroup.displayName = 'ToggleButton.Group';
var _default = exports.default = ToggleButtonGroup; // @component-docs ignore-next-line
//# sourceMappingURL=ToggleButtonGroup.js.map