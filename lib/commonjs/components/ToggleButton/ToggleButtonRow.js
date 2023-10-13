"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ToggleButtonRow = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ToggleButton = _interopRequireDefault(require("./ToggleButton"));
var _ToggleButtonGroup = _interopRequireDefault(require("./ToggleButtonGroup"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Toggle button row renders a group of toggle buttons in a row.
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
 *     <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
 *       <ToggleButton icon="format-align-left" value="left" />
 *       <ToggleButton icon="format-align-right" value="right" />
 *     </ToggleButton.Row>
 *   );
 * };
 *
 * export default MyComponent;
 *
 *```
 */
const ToggleButtonRow = _ref => {
  let {
    value,
    onValueChange,
    children,
    style
  } = _ref;
  const count = React.Children.count(children);
  return /*#__PURE__*/React.createElement(_ToggleButtonGroup.default, {
    value: value,
    onValueChange: onValueChange
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.row, style]
  }, React.Children.map(children, (child, i) => {
    // @ts-expect-error: TypeScript complains about child.type but it doesn't matter
    if (child && child.type === _ToggleButton.default) {
      // @ts-expect-error: We're sure that child is a React Element
      return /*#__PURE__*/React.cloneElement(child, {
        style: [styles.button, i === 0 ? styles.first : i === count - 1 ? styles.last : styles.middle,
        // @ts-expect-error: We're sure that child is a React Element
        child.props.style]
      });
    }
    return child;
  })));
};
exports.ToggleButtonRow = ToggleButtonRow;
ToggleButtonRow.displayName = 'ToggleButton.Row';
const styles = _reactNative.StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  button: {
    borderWidth: _reactNative.StyleSheet.hairlineWidth
  },
  first: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  middle: {
    borderRadius: 0,
    borderLeftWidth: 0
  },
  last: {
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }
});
var _default = exports.default = ToggleButtonRow; // @component-docs ignore-next-line
//# sourceMappingURL=ToggleButtonRow.js.map