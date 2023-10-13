"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListAccordionGroupContext = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ListAccordionGroupContext = exports.ListAccordionGroupContext = /*#__PURE__*/React.createContext(null);

/**
 * List.AccordionGroup allows to control a group of List Accordions. `id` prop for List.Accordion is required in order for group to work.
 * List.AccordionGroup can be a controlled or uncontrolled component. The example shows the uncontrolled version.
 * At most one Accordion can be expanded at a given time.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View, Text } from 'react-native';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <List.AccordionGroup>
 *     <List.Accordion title="Accordion 1" id="1">
 *       <List.Item title="Item 1" />
 *     </List.Accordion>
 *     <List.Accordion title="Accordion 2" id="2">
 *       <List.Item title="Item 2" />
 *     </List.Accordion>
 *     <View>
 *       <Text>
 *         List.Accordion can be wrapped because implementation uses React.Context.
 *       </Text>
 *       <List.Accordion title="Accordion 3" id="3">
 *         <List.Item title="Item 3" />
 *       </List.Accordion>
 *     </View>
 *   </List.AccordionGroup>
 * );
 *
 * export default MyComponent;
 *```
 */
const ListAccordionGroup = _ref => {
  let {
    expandedId: expandedIdProp,
    onAccordionPress,
    children
  } = _ref;
  const [expandedId, setExpandedId] = React.useState(undefined);
  const onAccordionPressDefault = newExpandedId => {
    setExpandedId(currentExpandedId => currentExpandedId === newExpandedId ? undefined : newExpandedId);
  };
  return /*#__PURE__*/React.createElement(ListAccordionGroupContext.Provider, {
    value: {
      expandedId: expandedIdProp || expandedId,
      // component can be controlled or uncontrolled
      onAccordionPress: onAccordionPress || onAccordionPressDefault
    }
  }, children);
};
ListAccordionGroup.displayName = 'List.AccordionGroup';
var _default = exports.default = ListAccordionGroup;
//# sourceMappingURL=ListAccordionGroup.js.map