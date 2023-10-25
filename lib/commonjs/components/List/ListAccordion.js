"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ListAccordionGroup = require("./ListAccordionGroup");
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _MaterialCommunityIcon = _interopRequireDefault(require("../MaterialCommunityIcon"));
var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));
var _Text = _interopRequireDefault(require("../Typography/Text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * A component used to display an expandable list item.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [expanded, setExpanded] = React.useState(true);
 *
 *   const handlePress = () => setExpanded(!expanded);
 *
 *   return (
 *     <List.Section title="Accordions">
 *       <List.Accordion
 *         title="Uncontrolled Accordion"
 *         left={props => <List.Icon {...props} icon="folder" />}>
 *         <List.Item title="First item" />
 *         <List.Item title="Second item" />
 *       </List.Accordion>
 *
 *       <List.Accordion
 *         title="Controlled Accordion"
 *         left={props => <List.Icon {...props} icon="folder" />}
 *         expanded={expanded}
 *         onPress={handlePress}>
 *         <List.Item title="First item" />
 *         <List.Item title="Second item" />
 *       </List.Accordion>
 *     </List.Section>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const ListAccordion = _ref => {
  var _theme$colors, _theme$colors2;
  let {
    left,
    right,
    title,
    description,
    children,
    theme: themeOverrides,
    titleStyle,
    descriptionStyle,
    titleNumberOfLines = 1,
    descriptionNumberOfLines = 2,
    rippleColor: customRippleColor,
    style,
    id,
    testID,
    onPress,
    onLongPress,
    delayLongPress,
    expanded: expandedProp,
    accessibilityLabel,
    pointerEvents = 'none',
    titleMaxFontSizeMultiplier,
    descriptionMaxFontSizeMultiplier
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const [expanded, setExpanded] = React.useState(expandedProp || false);
  const [alignToTop, setAlignToTop] = React.useState(false);
  const onDescriptionTextLayout = event => {
    if (!theme.isV3) {
      return;
    }
    const {
      nativeEvent
    } = event;
    setAlignToTop(nativeEvent.lines.length >= 2);
  };
  const handlePressAction = e => {
    onPress === null || onPress === void 0 ? void 0 : onPress(e);
    if (expandedProp === undefined) {
      // Only update state of the `expanded` prop was not passed
      // If it was passed, the component will act as a controlled component
      setExpanded(expanded => !expanded);
    }
  };
  const expandedInternal = expandedProp !== undefined ? expandedProp : expanded;
  const groupContext = React.useContext(_ListAccordionGroup.ListAccordionGroupContext);
  if (groupContext !== null && (id === undefined || id === null || id === '')) {
    throw new Error('List.Accordion is used inside a List.AccordionGroup without specifying an id prop.');
  }
  const isExpanded = groupContext ? groupContext.expandedId === id : expandedInternal;
  const {
    titleColor,
    descriptionColor,
    titleTextColor,
    rippleColor
  } = (0, _utils.getAccordionColors)({
    theme,
    isExpanded,
    customRippleColor
  });
  const handlePress = groupContext && id !== undefined ? () => groupContext.onAccordionPress(id) : handlePressAction;
  return /*#__PURE__*/React.createElement(_reactNative.View, null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: {
      backgroundColor: theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.background
    }
  }, /*#__PURE__*/React.createElement(_TouchableRipple.default, {
    style: [theme.isV3 ? styles.containerV3 : styles.container, style],
    onPress: handlePress,
    onLongPress: onLongPress,
    delayLongPress: delayLongPress,
    rippleColor: rippleColor,
    accessibilityRole: "button",
    accessibilityState: {
      expanded: isExpanded
    },
    accessibilityLabel: accessibilityLabel,
    testID: testID,
    theme: theme,
    borderless: true
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: theme.isV3 ? styles.rowV3 : styles.row,
    pointerEvents: pointerEvents
  }, left ? left({
    color: isExpanded ? (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.primary : descriptionColor,
    style: (0, _utils.getLeftStyles)(alignToTop, description, theme.isV3)
  }) : null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [theme.isV3 ? styles.itemV3 : styles.item, styles.content]
  }, /*#__PURE__*/React.createElement(_Text.default, {
    selectable: false,
    numberOfLines: titleNumberOfLines,
    style: [styles.title, {
      color: titleTextColor
    }, titleStyle],
    maxFontSizeMultiplier: titleMaxFontSizeMultiplier
  }, title), description ? /*#__PURE__*/React.createElement(_Text.default, {
    selectable: false,
    numberOfLines: descriptionNumberOfLines,
    style: [styles.description, {
      color: descriptionColor
    }, descriptionStyle],
    onTextLayout: onDescriptionTextLayout,
    maxFontSizeMultiplier: descriptionMaxFontSizeMultiplier
  }, description) : null), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.item, description ? styles.multiline : undefined]
  }, right ? right({
    isExpanded: isExpanded
  }) : /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
    name: isExpanded ? 'chevron-up' : 'chevron-down',
    color: theme.isV3 ? descriptionColor : titleColor,
    size: 24,
    direction: _reactNative.I18nManager.getConstants().isRTL ? 'rtl' : 'ltr'
  }))))), isExpanded ? React.Children.map(children, child => {
    if (left && /*#__PURE__*/React.isValidElement(child) && !child.props.left && !child.props.right) {
      return /*#__PURE__*/React.cloneElement(child, {
        style: [theme.isV3 ? styles.childV3 : styles.child, child.props.style],
        theme
      });
    }
    return child;
  }) : null);
};
ListAccordion.displayName = 'List.Accordion';
const styles = _reactNative.StyleSheet.create({
  container: {
    padding: 8
  },
  containerV3: {
    paddingVertical: 8,
    paddingRight: 24
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowV3: {
    flexDirection: 'row',
    marginVertical: 6
  },
  multiline: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16
  },
  description: {
    fontSize: 14
  },
  item: {
    marginVertical: 6,
    paddingLeft: 8
  },
  itemV3: {
    paddingLeft: 16
  },
  child: {
    paddingLeft: 64
  },
  childV3: {
    paddingLeft: 40
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  }
});
var _default = exports.default = ListAccordion;
//# sourceMappingURL=ListAccordion.js.map