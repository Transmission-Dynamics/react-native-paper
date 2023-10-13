"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useIsKeyboardShown;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function useIsKeyboardShown(_ref) {
  let {
    onShow,
    onHide
  } = _ref;
  React.useEffect(() => {
    let willShowSubscription;
    let willHideSubscription;
    let didShowSubscription;
    let didHideSubscription;
    if (_reactNative.Platform.OS === 'ios') {
      willShowSubscription = _reactNative.Keyboard.addListener('keyboardWillShow', onShow);
      willHideSubscription = _reactNative.Keyboard.addListener('keyboardWillHide', onHide);
    } else {
      didShowSubscription = _reactNative.Keyboard.addListener('keyboardDidShow', onShow);
      didHideSubscription = _reactNative.Keyboard.addListener('keyboardDidHide', onHide);
    }
    return () => {
      if (_reactNative.Platform.OS === 'ios') {
        var _willShowSubscription, _willHideSubscription;
        if ((_willShowSubscription = willShowSubscription) !== null && _willShowSubscription !== void 0 && _willShowSubscription.remove) {
          willShowSubscription.remove();
        } else {
          // @ts-expect-error: We keep deprecated listener remove method for backwards compat with old RN versions
          _reactNative.Keyboard.removeListener('keyboardWillShow', onShow);
        }
        if ((_willHideSubscription = willHideSubscription) !== null && _willHideSubscription !== void 0 && _willHideSubscription.remove) {
          willHideSubscription.remove();
        } else {
          // @ts-expect-error: We keep deprecated listener remove method for backwards compat with old RN versions
          _reactNative.Keyboard.removeListener('keyboardWillHide', onHide);
        }
      } else {
        var _didShowSubscription, _didHideSubscription;
        if ((_didShowSubscription = didShowSubscription) !== null && _didShowSubscription !== void 0 && _didShowSubscription.remove) {
          didShowSubscription.remove();
        } else {
          // @ts-expect-error: We keep deprecated listener remove method for backwards compat with old RN versions
          _reactNative.Keyboard.removeListener('keyboardDidShow', onShow);
        }
        if ((_didHideSubscription = didHideSubscription) !== null && _didHideSubscription !== void 0 && _didHideSubscription.remove) {
          didHideSubscription.remove();
        } else {
          // @ts-expect-error: We keep deprecated listener remove method for backwards compat with old RN versions
          _reactNative.Keyboard.removeListener('keyboardDidHide', onHide);
        }
      }
    };
  }, [onHide, onShow]);
}
//# sourceMappingURL=useIsKeyboardShown.js.map