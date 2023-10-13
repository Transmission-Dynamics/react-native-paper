"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioButtonGroup = exports.RadioButtonContext = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const RadioButtonContext = exports.RadioButtonContext = /*#__PURE__*/React.createContext(null);

/**
 * Radio button group allows to control a group of radio buttons.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { RadioButton, Text } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('first');
 *
 *   return (
 *     <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
 *       <View>
 *         <Text>First</Text>
 *         <RadioButton value="first" />
 *       </View>
 *       <View>
 *         <Text>Second</Text>
 *         <RadioButton value="second" />
 *       </View>
 *     </RadioButton.Group>
 *   );
 * };
 *
 * export default MyComponent;
 *```
 */
const RadioButtonGroup = _ref => {
  let {
    value,
    onValueChange,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(RadioButtonContext.Provider, {
    value: {
      value,
      onValueChange
    }
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    accessibilityRole: "radiogroup"
  }, children));
};
exports.RadioButtonGroup = RadioButtonGroup;
RadioButtonGroup.displayName = 'RadioButton.Group';
var _default = exports.default = RadioButtonGroup; // @component-docs ignore-next-line
//# sourceMappingURL=RadioButtonGroup.js.map