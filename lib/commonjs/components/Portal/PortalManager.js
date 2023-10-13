"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Portal host is the component which actually renders all Portals.
 */
class PortalManager extends React.PureComponent {
  state = {
    portals: []
  };
  mount = (key, children) => {
    this.setState(state => ({
      portals: [...state.portals, {
        key,
        children
      }]
    }));
  };
  update = (key, children) => this.setState(state => ({
    portals: state.portals.map(item => {
      if (item.key === key) {
        return {
          ...item,
          children
        };
      }
      return item;
    })
  }));
  unmount = key => this.setState(state => ({
    portals: state.portals.filter(item => item.key !== key)
  }));
  render() {
    return this.state.portals.map(_ref => {
      let {
        key,
        children
      } = _ref;
      return /*#__PURE__*/React.createElement(_reactNative.View, {
        key: key,
        collapsable: false /* Need collapsable=false here to clip the elevations, otherwise they appear above sibling components */,

        pointerEvents: "box-none",
        style: _reactNative.StyleSheet.absoluteFill
      }, children);
    });
  }
}
exports.default = PortalManager;
//# sourceMappingURL=PortalManager.js.map