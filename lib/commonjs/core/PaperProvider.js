"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _SafeAreaProviderCompat = _interopRequireDefault(require("./SafeAreaProviderCompat"));
var _settings = require("./settings");
var _theming = require("./theming");
var _MaterialCommunityIcon = _interopRequireDefault(require("../components/MaterialCommunityIcon"));
var _PortalHost = _interopRequireDefault(require("../components/Portal/PortalHost"));
var _addEventListener = require("../utils/addEventListener");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PaperProvider = props => {
  const isOnlyVersionInTheme = props.theme && Object.keys(props.theme).length === 1 && props.theme.version;
  const colorSchemeName = (!props.theme || isOnlyVersionInTheme) && (_reactNative.Appearance === null || _reactNative.Appearance === void 0 ? void 0 : _reactNative.Appearance.getColorScheme()) || 'light';
  const [reduceMotionEnabled, setReduceMotionEnabled] = React.useState(false);
  const [colorScheme, setColorScheme] = React.useState(colorSchemeName);
  const handleAppearanceChange = preferences => {
    const {
      colorScheme
    } = preferences;
    setColorScheme(colorScheme);
  };
  React.useEffect(() => {
    let subscription;
    if (!props.theme) {
      subscription = (0, _addEventListener.addEventListener)(_reactNative.AccessibilityInfo, 'reduceMotionChanged', setReduceMotionEnabled);
    }
    return () => {
      if (!props.theme) {
        var _subscription;
        (_subscription = subscription) === null || _subscription === void 0 ? void 0 : _subscription.remove();
      }
    };
  }, [props.theme]);
  React.useEffect(() => {
    let appearanceSubscription;
    if (!props.theme || isOnlyVersionInTheme) {
      appearanceSubscription = _reactNative.Appearance === null || _reactNative.Appearance === void 0 ? void 0 : _reactNative.Appearance.addChangeListener(handleAppearanceChange);
    }
    return () => {
      if (!props.theme || isOnlyVersionInTheme) {
        if (appearanceSubscription) {
          appearanceSubscription.remove();
        } else {
          // @ts-expect-error: We keep deprecated listener remove method for backwards compat with old RN versions
          _reactNative.Appearance === null || _reactNative.Appearance === void 0 ? void 0 : _reactNative.Appearance.removeChangeListener(handleAppearanceChange);
        }
      }
    };
  }, [props.theme, isOnlyVersionInTheme]);
  const getTheme = () => {
    var _props$theme, _props$theme2;
    const themeVersion = ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.version) || 3;
    const scheme = colorScheme || 'light';
    const defaultThemeBase = _theming.defaultThemesByVersion[themeVersion][scheme];
    const extendedThemeBase = {
      ...defaultThemeBase,
      ...props.theme,
      version: themeVersion,
      animation: {
        ...((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.animation),
        scale: reduceMotionEnabled ? 0 : 1
      }
    };
    return {
      ...extendedThemeBase,
      isV3: extendedThemeBase.version === 3
    };
  };
  const {
    children,
    settings
  } = props;
  return /*#__PURE__*/React.createElement(_SafeAreaProviderCompat.default, null, /*#__PURE__*/React.createElement(_PortalHost.default, null, /*#__PURE__*/React.createElement(_settings.Provider, {
    value: {
      icon: _MaterialCommunityIcon.default,
      rippleEffectEnabled: true,
      ...settings
    }
  }, /*#__PURE__*/React.createElement(_theming.ThemeProvider, {
    theme: getTheme()
  }, children))));
};
var _default = exports.default = PaperProvider;
//# sourceMappingURL=PaperProvider.js.map