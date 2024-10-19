var VN = Object.defineProperty;
var HN = (o, s, f) => s in o ? VN(o, s, { enumerable: !0, configurable: !0, writable: !0, value: f }) : o[s] = f;
var Uv = (o, s, f) => HN(o, typeof s != "symbol" ? s + "" : s, f);
import * as me from "react";
import ci, { forwardRef as IN, useContext as WN, Children as YN, isValidElement as dg, cloneElement as pg } from "react";
function nw(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var L1 = { exports: {} }, Pv = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rR;
function GN() {
  if (rR) return Pv;
  rR = 1;
  var o = ci, s = Symbol.for("react.element"), f = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, y = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(x, w, D) {
    var A, _ = {}, N = null, P = null;
    D !== void 0 && (N = "" + D), w.key !== void 0 && (N = "" + w.key), w.ref !== void 0 && (P = w.ref);
    for (A in w) v.call(w, A) && !S.hasOwnProperty(A) && (_[A] = w[A]);
    if (x && x.defaultProps) for (A in w = x.defaultProps, w) _[A] === void 0 && (_[A] = w[A]);
    return { $$typeof: s, type: x, key: N, ref: P, props: _, _owner: y.current };
  }
  return Pv.Fragment = f, Pv.jsx = m, Pv.jsxs = m, Pv;
}
var $v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aR;
function QN() {
  return aR || (aR = 1, process.env.NODE_ENV !== "production" && function() {
    var o = ci, s = Symbol.for("react.element"), f = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), x = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), H = Symbol.iterator, $ = "@@iterator";
    function U(L) {
      if (L === null || typeof L != "object")
        return null;
      var he = H && L[H] || L[$];
      return typeof he == "function" ? he : null;
    }
    var ee = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ue(L) {
      {
        for (var he = arguments.length, Re = new Array(he > 1 ? he - 1 : 0), Xe = 1; Xe < he; Xe++)
          Re[Xe - 1] = arguments[Xe];
        q("error", L, Re);
      }
    }
    function q(L, he, Re) {
      {
        var Xe = ee.ReactDebugCurrentFrame, Ot = Xe.getStackAddendum();
        Ot !== "" && (he += "%s", Re = Re.concat([Ot]));
        var Nt = Re.map(function(ft) {
          return String(ft);
        });
        Nt.unshift("Warning: " + he), Function.prototype.apply.call(console[L], console, Nt);
      }
    }
    var K = !1, V = !1, le = !1, re = !1, je = !1, Fe;
    Fe = Symbol.for("react.module.reference");
    function k(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === v || L === S || je || L === y || L === D || L === A || re || L === P || K || V || le || typeof L == "object" && L !== null && (L.$$typeof === N || L.$$typeof === _ || L.$$typeof === m || L.$$typeof === x || L.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === Fe || L.getModuleId !== void 0));
    }
    function oe(L, he, Re) {
      var Xe = L.displayName;
      if (Xe)
        return Xe;
      var Ot = he.displayName || he.name || "";
      return Ot !== "" ? Re + "(" + Ot + ")" : Re;
    }
    function Te(L) {
      return L.displayName || "Context";
    }
    function ve(L) {
      if (L == null)
        return null;
      if (typeof L.tag == "number" && ue("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof L == "function")
        return L.displayName || L.name || null;
      if (typeof L == "string")
        return L;
      switch (L) {
        case v:
          return "Fragment";
        case f:
          return "Portal";
        case S:
          return "Profiler";
        case y:
          return "StrictMode";
        case D:
          return "Suspense";
        case A:
          return "SuspenseList";
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case x:
            var he = L;
            return Te(he) + ".Consumer";
          case m:
            var Re = L;
            return Te(Re._context) + ".Provider";
          case w:
            return oe(L, L.render, "ForwardRef");
          case _:
            var Xe = L.displayName || null;
            return Xe !== null ? Xe : ve(L.type) || "Memo";
          case N: {
            var Ot = L, Nt = Ot._payload, ft = Ot._init;
            try {
              return ve(ft(Nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Se = Object.assign, _e = 0, Ce, ht, ce, Ae, W, se, Oe;
    function Be() {
    }
    Be.__reactDisabledLog = !0;
    function xe() {
      {
        if (_e === 0) {
          Ce = console.log, ht = console.info, ce = console.warn, Ae = console.error, W = console.group, se = console.groupCollapsed, Oe = console.groupEnd;
          var L = {
            configurable: !0,
            enumerable: !0,
            value: Be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: L,
            log: L,
            warn: L,
            error: L,
            group: L,
            groupCollapsed: L,
            groupEnd: L
          });
        }
        _e++;
      }
    }
    function it() {
      {
        if (_e--, _e === 0) {
          var L = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Se({}, L, {
              value: Ce
            }),
            info: Se({}, L, {
              value: ht
            }),
            warn: Se({}, L, {
              value: ce
            }),
            error: Se({}, L, {
              value: Ae
            }),
            group: Se({}, L, {
              value: W
            }),
            groupCollapsed: Se({}, L, {
              value: se
            }),
            groupEnd: Se({}, L, {
              value: Oe
            })
          });
        }
        _e < 0 && ue("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ve = ee.ReactCurrentDispatcher, Je;
    function et(L, he, Re) {
      {
        if (Je === void 0)
          try {
            throw Error();
          } catch (Ot) {
            var Xe = Ot.stack.trim().match(/\n( *(at )?)/);
            Je = Xe && Xe[1] || "";
          }
        return `
` + Je + L;
      }
    }
    var st = !1, ct;
    {
      var Dt = typeof WeakMap == "function" ? WeakMap : Map;
      ct = new Dt();
    }
    function be(L, he) {
      if (!L || st)
        return "";
      {
        var Re = ct.get(L);
        if (Re !== void 0)
          return Re;
      }
      var Xe;
      st = !0;
      var Ot = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Nt;
      Nt = Ve.current, Ve.current = null, xe();
      try {
        if (he) {
          var ft = function() {
            throw Error();
          };
          if (Object.defineProperty(ft.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ft, []);
            } catch (br) {
              Xe = br;
            }
            Reflect.construct(L, [], ft);
          } else {
            try {
              ft.call();
            } catch (br) {
              Xe = br;
            }
            L.call(ft.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (br) {
            Xe = br;
          }
          L();
        }
      } catch (br) {
        if (br && Xe && typeof br.stack == "string") {
          for (var Ct = br.stack.split(`
`), Zn = Xe.stack.split(`
`), on = Ct.length - 1, Sn = Zn.length - 1; on >= 1 && Sn >= 0 && Ct[on] !== Zn[Sn]; )
            Sn--;
          for (; on >= 1 && Sn >= 0; on--, Sn--)
            if (Ct[on] !== Zn[Sn]) {
              if (on !== 1 || Sn !== 1)
                do
                  if (on--, Sn--, Sn < 0 || Ct[on] !== Zn[Sn]) {
                    var Br = `
` + Ct[on].replace(" at new ", " at ");
                    return L.displayName && Br.includes("<anonymous>") && (Br = Br.replace("<anonymous>", L.displayName)), typeof L == "function" && ct.set(L, Br), Br;
                  }
                while (on >= 1 && Sn >= 0);
              break;
            }
        }
      } finally {
        st = !1, Ve.current = Nt, it(), Error.prepareStackTrace = Ot;
      }
      var co = L ? L.displayName || L.name : "", $t = co ? et(co) : "";
      return typeof L == "function" && ct.set(L, $t), $t;
    }
    function Rt(L, he, Re) {
      return be(L, !1);
    }
    function Me(L) {
      var he = L.prototype;
      return !!(he && he.isReactComponent);
    }
    function Yt(L, he, Re) {
      if (L == null)
        return "";
      if (typeof L == "function")
        return be(L, Me(L));
      if (typeof L == "string")
        return et(L);
      switch (L) {
        case D:
          return et("Suspense");
        case A:
          return et("SuspenseList");
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case w:
            return Rt(L.render);
          case _:
            return Yt(L.type, he, Re);
          case N: {
            var Xe = L, Ot = Xe._payload, Nt = Xe._init;
            try {
              return Yt(Nt(Ot), he, Re);
            } catch {
            }
          }
        }
      return "";
    }
    var vn = Object.prototype.hasOwnProperty, On = {}, lr = ee.ReactDebugCurrentFrame;
    function ur(L) {
      if (L) {
        var he = L._owner, Re = Yt(L.type, L._source, he ? he.type : null);
        lr.setExtraStackFrame(Re);
      } else
        lr.setExtraStackFrame(null);
    }
    function Ka(L, he, Re, Xe, Ot) {
      {
        var Nt = Function.call.bind(vn);
        for (var ft in L)
          if (Nt(L, ft)) {
            var Ct = void 0;
            try {
              if (typeof L[ft] != "function") {
                var Zn = Error((Xe || "React class") + ": " + Re + " type `" + ft + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[ft] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Zn.name = "Invariant Violation", Zn;
              }
              Ct = L[ft](he, ft, Xe, Re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              Ct = on;
            }
            Ct && !(Ct instanceof Error) && (ur(Ot), ue("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Xe || "React class", Re, ft, typeof Ct), ur(null)), Ct instanceof Error && !(Ct.message in On) && (On[Ct.message] = !0, ur(Ot), ue("Failed %s type: %s", Re, Ct.message), ur(null));
          }
      }
    }
    var ia = Array.isArray;
    function oa(L) {
      return ia(L);
    }
    function tt(L) {
      {
        var he = typeof Symbol == "function" && Symbol.toStringTag, Re = he && L[Symbol.toStringTag] || L.constructor.name || "Object";
        return Re;
      }
    }
    function la(L) {
      try {
        return kr(L), !1;
      } catch {
        return !0;
      }
    }
    function kr(L) {
      return "" + L;
    }
    function jr(L) {
      if (la(L))
        return ue("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(L)), kr(L);
    }
    var Dn = ee.ReactCurrentOwner, ua = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, uo, Xa, De;
    De = {};
    function nt(L) {
      if (vn.call(L, "ref")) {
        var he = Object.getOwnPropertyDescriptor(L, "ref").get;
        if (he && he.isReactWarning)
          return !1;
      }
      return L.ref !== void 0;
    }
    function Et(L) {
      if (vn.call(L, "key")) {
        var he = Object.getOwnPropertyDescriptor(L, "key").get;
        if (he && he.isReactWarning)
          return !1;
      }
      return L.key !== void 0;
    }
    function Bt(L, he) {
      if (typeof L.ref == "string" && Dn.current && he && Dn.current.stateNode !== he) {
        var Re = ve(Dn.current.type);
        De[Re] || (ue('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ve(Dn.current.type), L.ref), De[Re] = !0);
      }
    }
    function gn(L, he) {
      {
        var Re = function() {
          uo || (uo = !0, ue("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", he));
        };
        Re.isReactWarning = !0, Object.defineProperty(L, "key", {
          get: Re,
          configurable: !0
        });
      }
    }
    function Xn(L, he) {
      {
        var Re = function() {
          Xa || (Xa = !0, ue("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", he));
        };
        Re.isReactWarning = !0, Object.defineProperty(L, "ref", {
          get: Re,
          configurable: !0
        });
      }
    }
    var _n = function(L, he, Re, Xe, Ot, Nt, ft) {
      var Ct = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: L,
        key: he,
        ref: Re,
        props: ft,
        // Record the component responsible for creating this element.
        _owner: Nt
      };
      return Ct._store = {}, Object.defineProperty(Ct._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ct, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Xe
      }), Object.defineProperty(Ct, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ot
      }), Object.freeze && (Object.freeze(Ct.props), Object.freeze(Ct)), Ct;
    };
    function Fr(L, he, Re, Xe, Ot) {
      {
        var Nt, ft = {}, Ct = null, Zn = null;
        Re !== void 0 && (jr(Re), Ct = "" + Re), Et(he) && (jr(he.key), Ct = "" + he.key), nt(he) && (Zn = he.ref, Bt(he, Ot));
        for (Nt in he)
          vn.call(he, Nt) && !ua.hasOwnProperty(Nt) && (ft[Nt] = he[Nt]);
        if (L && L.defaultProps) {
          var on = L.defaultProps;
          for (Nt in on)
            ft[Nt] === void 0 && (ft[Nt] = on[Nt]);
        }
        if (Ct || Zn) {
          var Sn = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
          Ct && gn(ft, Sn), Zn && Xn(ft, Sn);
        }
        return _n(L, Ct, Zn, Ot, Xe, Dn.current, ft);
      }
    }
    var nn = ee.ReactCurrentOwner, sa = ee.ReactDebugCurrentFrame;
    function en(L) {
      if (L) {
        var he = L._owner, Re = Yt(L.type, L._source, he ? he.type : null);
        sa.setExtraStackFrame(Re);
      } else
        sa.setExtraStackFrame(null);
    }
    var rn;
    rn = !1;
    function jl(L) {
      return typeof L == "object" && L !== null && L.$$typeof === s;
    }
    function Yo() {
      {
        if (nn.current) {
          var L = ve(nn.current.type);
          if (L)
            return `

Check the render method of \`` + L + "`.";
        }
        return "";
      }
    }
    function Fl(L) {
      return "";
    }
    var Zu = {};
    function pc(L) {
      {
        var he = Yo();
        if (!he) {
          var Re = typeof L == "string" ? L : L.displayName || L.name;
          Re && (he = `

Check the top-level render call using <` + Re + ">.");
        }
        return he;
      }
    }
    function Go(L, he) {
      {
        if (!L._store || L._store.validated || L.key != null)
          return;
        L._store.validated = !0;
        var Re = pc(he);
        if (Zu[Re])
          return;
        Zu[Re] = !0;
        var Xe = "";
        L && L._owner && L._owner !== nn.current && (Xe = " It was passed a child from " + ve(L._owner.type) + "."), en(L), ue('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Re, Xe), en(null);
      }
    }
    function Bl(L, he) {
      {
        if (typeof L != "object")
          return;
        if (oa(L))
          for (var Re = 0; Re < L.length; Re++) {
            var Xe = L[Re];
            jl(Xe) && Go(Xe, he);
          }
        else if (jl(L))
          L._store && (L._store.validated = !0);
        else if (L) {
          var Ot = U(L);
          if (typeof Ot == "function" && Ot !== L.entries)
            for (var Nt = Ot.call(L), ft; !(ft = Nt.next()).done; )
              jl(ft.value) && Go(ft.value, he);
        }
      }
    }
    function Qo(L) {
      {
        var he = L.type;
        if (he == null || typeof he == "string")
          return;
        var Re;
        if (typeof he == "function")
          Re = he.propTypes;
        else if (typeof he == "object" && (he.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        he.$$typeof === _))
          Re = he.propTypes;
        else
          return;
        if (Re) {
          var Xe = ve(he);
          Ka(Re, L.props, "prop", Xe, L);
        } else if (he.PropTypes !== void 0 && !rn) {
          rn = !0;
          var Ot = ve(he);
          ue("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ot || "Unknown");
        }
        typeof he.getDefaultProps == "function" && !he.getDefaultProps.isReactClassApproved && ue("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Vl(L) {
      {
        for (var he = Object.keys(L.props), Re = 0; Re < he.length; Re++) {
          var Xe = he[Re];
          if (Xe !== "children" && Xe !== "key") {
            en(L), ue("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Xe), en(null);
            break;
          }
        }
        L.ref !== null && (en(L), ue("Invalid attribute `ref` supplied to `React.Fragment`."), en(null));
      }
    }
    var hi = {};
    function zi(L, he, Re, Xe, Ot, Nt) {
      {
        var ft = k(L);
        if (!ft) {
          var Ct = "";
          (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (Ct += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Zn = Fl();
          Zn ? Ct += Zn : Ct += Yo();
          var on;
          L === null ? on = "null" : oa(L) ? on = "array" : L !== void 0 && L.$$typeof === s ? (on = "<" + (ve(L.type) || "Unknown") + " />", Ct = " Did you accidentally export a JSX literal instead of a component?") : on = typeof L, ue("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, Ct);
        }
        var Sn = Fr(L, he, Re, Ot, Nt);
        if (Sn == null)
          return Sn;
        if (ft) {
          var Br = he.children;
          if (Br !== void 0)
            if (Xe)
              if (oa(Br)) {
                for (var co = 0; co < Br.length; co++)
                  Bl(Br[co], L);
                Object.freeze && Object.freeze(Br);
              } else
                ue("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Bl(Br, L);
        }
        if (vn.call(he, "key")) {
          var $t = ve(L), br = Object.keys(he).filter(function(mi) {
            return mi !== "key";
          }), fa = br.length > 0 ? "{key: someKey, " + br.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!hi[$t + fa]) {
            var Tt = br.length > 0 ? "{" + br.join(": ..., ") + ": ...}" : "{}";
            ue(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fa, $t, Tt, $t), hi[$t + fa] = !0;
          }
        }
        return L === v ? Vl(Sn) : Qo(Sn), Sn;
      }
    }
    function ca(L, he, Re) {
      return zi(L, he, Re, !0);
    }
    function Za(L, he, Re) {
      return zi(L, he, Re, !1);
    }
    var so = Za, qo = ca;
    $v.Fragment = v, $v.jsx = so, $v.jsxs = qo;
  }()), $v;
}
process.env.NODE_ENV === "production" ? L1.exports = GN() : L1.exports = QN();
var ut = L1.exports, z1 = { exports: {} }, ig = { exports: {} }, Kt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iR;
function qN() {
  if (iR) return Kt;
  iR = 1;
  var o = typeof Symbol == "function" && Symbol.for, s = o ? Symbol.for("react.element") : 60103, f = o ? Symbol.for("react.portal") : 60106, v = o ? Symbol.for("react.fragment") : 60107, y = o ? Symbol.for("react.strict_mode") : 60108, S = o ? Symbol.for("react.profiler") : 60114, m = o ? Symbol.for("react.provider") : 60109, x = o ? Symbol.for("react.context") : 60110, w = o ? Symbol.for("react.async_mode") : 60111, D = o ? Symbol.for("react.concurrent_mode") : 60111, A = o ? Symbol.for("react.forward_ref") : 60112, _ = o ? Symbol.for("react.suspense") : 60113, N = o ? Symbol.for("react.suspense_list") : 60120, P = o ? Symbol.for("react.memo") : 60115, H = o ? Symbol.for("react.lazy") : 60116, $ = o ? Symbol.for("react.block") : 60121, U = o ? Symbol.for("react.fundamental") : 60117, ee = o ? Symbol.for("react.responder") : 60118, ue = o ? Symbol.for("react.scope") : 60119;
  function q(V) {
    if (typeof V == "object" && V !== null) {
      var le = V.$$typeof;
      switch (le) {
        case s:
          switch (V = V.type, V) {
            case w:
            case D:
            case v:
            case S:
            case y:
            case _:
              return V;
            default:
              switch (V = V && V.$$typeof, V) {
                case x:
                case A:
                case H:
                case P:
                case m:
                  return V;
                default:
                  return le;
              }
          }
        case f:
          return le;
      }
    }
  }
  function K(V) {
    return q(V) === D;
  }
  return Kt.AsyncMode = w, Kt.ConcurrentMode = D, Kt.ContextConsumer = x, Kt.ContextProvider = m, Kt.Element = s, Kt.ForwardRef = A, Kt.Fragment = v, Kt.Lazy = H, Kt.Memo = P, Kt.Portal = f, Kt.Profiler = S, Kt.StrictMode = y, Kt.Suspense = _, Kt.isAsyncMode = function(V) {
    return K(V) || q(V) === w;
  }, Kt.isConcurrentMode = K, Kt.isContextConsumer = function(V) {
    return q(V) === x;
  }, Kt.isContextProvider = function(V) {
    return q(V) === m;
  }, Kt.isElement = function(V) {
    return typeof V == "object" && V !== null && V.$$typeof === s;
  }, Kt.isForwardRef = function(V) {
    return q(V) === A;
  }, Kt.isFragment = function(V) {
    return q(V) === v;
  }, Kt.isLazy = function(V) {
    return q(V) === H;
  }, Kt.isMemo = function(V) {
    return q(V) === P;
  }, Kt.isPortal = function(V) {
    return q(V) === f;
  }, Kt.isProfiler = function(V) {
    return q(V) === S;
  }, Kt.isStrictMode = function(V) {
    return q(V) === y;
  }, Kt.isSuspense = function(V) {
    return q(V) === _;
  }, Kt.isValidElementType = function(V) {
    return typeof V == "string" || typeof V == "function" || V === v || V === D || V === S || V === y || V === _ || V === N || typeof V == "object" && V !== null && (V.$$typeof === H || V.$$typeof === P || V.$$typeof === m || V.$$typeof === x || V.$$typeof === A || V.$$typeof === U || V.$$typeof === ee || V.$$typeof === ue || V.$$typeof === $);
  }, Kt.typeOf = q, Kt;
}
var Xt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oR;
function KN() {
  return oR || (oR = 1, process.env.NODE_ENV !== "production" && function() {
    var o = typeof Symbol == "function" && Symbol.for, s = o ? Symbol.for("react.element") : 60103, f = o ? Symbol.for("react.portal") : 60106, v = o ? Symbol.for("react.fragment") : 60107, y = o ? Symbol.for("react.strict_mode") : 60108, S = o ? Symbol.for("react.profiler") : 60114, m = o ? Symbol.for("react.provider") : 60109, x = o ? Symbol.for("react.context") : 60110, w = o ? Symbol.for("react.async_mode") : 60111, D = o ? Symbol.for("react.concurrent_mode") : 60111, A = o ? Symbol.for("react.forward_ref") : 60112, _ = o ? Symbol.for("react.suspense") : 60113, N = o ? Symbol.for("react.suspense_list") : 60120, P = o ? Symbol.for("react.memo") : 60115, H = o ? Symbol.for("react.lazy") : 60116, $ = o ? Symbol.for("react.block") : 60121, U = o ? Symbol.for("react.fundamental") : 60117, ee = o ? Symbol.for("react.responder") : 60118, ue = o ? Symbol.for("react.scope") : 60119;
    function q(be) {
      return typeof be == "string" || typeof be == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      be === v || be === D || be === S || be === y || be === _ || be === N || typeof be == "object" && be !== null && (be.$$typeof === H || be.$$typeof === P || be.$$typeof === m || be.$$typeof === x || be.$$typeof === A || be.$$typeof === U || be.$$typeof === ee || be.$$typeof === ue || be.$$typeof === $);
    }
    function K(be) {
      if (typeof be == "object" && be !== null) {
        var Rt = be.$$typeof;
        switch (Rt) {
          case s:
            var Me = be.type;
            switch (Me) {
              case w:
              case D:
              case v:
              case S:
              case y:
              case _:
                return Me;
              default:
                var Yt = Me && Me.$$typeof;
                switch (Yt) {
                  case x:
                  case A:
                  case H:
                  case P:
                  case m:
                    return Yt;
                  default:
                    return Rt;
                }
            }
          case f:
            return Rt;
        }
      }
    }
    var V = w, le = D, re = x, je = m, Fe = s, k = A, oe = v, Te = H, ve = P, Se = f, _e = S, Ce = y, ht = _, ce = !1;
    function Ae(be) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), W(be) || K(be) === w;
    }
    function W(be) {
      return K(be) === D;
    }
    function se(be) {
      return K(be) === x;
    }
    function Oe(be) {
      return K(be) === m;
    }
    function Be(be) {
      return typeof be == "object" && be !== null && be.$$typeof === s;
    }
    function xe(be) {
      return K(be) === A;
    }
    function it(be) {
      return K(be) === v;
    }
    function Ve(be) {
      return K(be) === H;
    }
    function Je(be) {
      return K(be) === P;
    }
    function et(be) {
      return K(be) === f;
    }
    function st(be) {
      return K(be) === S;
    }
    function ct(be) {
      return K(be) === y;
    }
    function Dt(be) {
      return K(be) === _;
    }
    Xt.AsyncMode = V, Xt.ConcurrentMode = le, Xt.ContextConsumer = re, Xt.ContextProvider = je, Xt.Element = Fe, Xt.ForwardRef = k, Xt.Fragment = oe, Xt.Lazy = Te, Xt.Memo = ve, Xt.Portal = Se, Xt.Profiler = _e, Xt.StrictMode = Ce, Xt.Suspense = ht, Xt.isAsyncMode = Ae, Xt.isConcurrentMode = W, Xt.isContextConsumer = se, Xt.isContextProvider = Oe, Xt.isElement = Be, Xt.isForwardRef = xe, Xt.isFragment = it, Xt.isLazy = Ve, Xt.isMemo = Je, Xt.isPortal = et, Xt.isProfiler = st, Xt.isStrictMode = ct, Xt.isSuspense = Dt, Xt.isValidElementType = q, Xt.typeOf = K;
  }()), Xt;
}
var lR;
function K1() {
  return lR || (lR = 1, process.env.NODE_ENV === "production" ? ig.exports = qN() : ig.exports = KN()), ig.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var S1, uR;
function XN() {
  if (uR) return S1;
  uR = 1;
  var o = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
  function v(S) {
    if (S == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(S);
  }
  function y() {
    try {
      if (!Object.assign)
        return !1;
      var S = new String("abc");
      if (S[5] = "de", Object.getOwnPropertyNames(S)[0] === "5")
        return !1;
      for (var m = {}, x = 0; x < 10; x++)
        m["_" + String.fromCharCode(x)] = x;
      var w = Object.getOwnPropertyNames(m).map(function(A) {
        return m[A];
      });
      if (w.join("") !== "0123456789")
        return !1;
      var D = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(A) {
        D[A] = A;
      }), Object.keys(Object.assign({}, D)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return S1 = y() ? Object.assign : function(S, m) {
    for (var x, w = v(S), D, A = 1; A < arguments.length; A++) {
      x = Object(arguments[A]);
      for (var _ in x)
        s.call(x, _) && (w[_] = x[_]);
      if (o) {
        D = o(x);
        for (var N = 0; N < D.length; N++)
          f.call(x, D[N]) && (w[D[N]] = x[D[N]]);
      }
    }
    return w;
  }, S1;
}
var b1, sR;
function X1() {
  if (sR) return b1;
  sR = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return b1 = o, b1;
}
var E1, cR;
function rw() {
  return cR || (cR = 1, E1 = Function.call.bind(Object.prototype.hasOwnProperty)), E1;
}
var C1, fR;
function ZN() {
  if (fR) return C1;
  fR = 1;
  var o = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var s = X1(), f = {}, v = rw();
    o = function(S) {
      var m = "Warning: " + S;
      typeof console < "u" && console.error(m);
      try {
        throw new Error(m);
      } catch {
      }
    };
  }
  function y(S, m, x, w, D) {
    if (process.env.NODE_ENV !== "production") {
      for (var A in S)
        if (v(S, A)) {
          var _;
          try {
            if (typeof S[A] != "function") {
              var N = Error(
                (w || "React class") + ": " + x + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw N.name = "Invariant Violation", N;
            }
            _ = S[A](m, A, w, x, null, s);
          } catch (H) {
            _ = H;
          }
          if (_ && !(_ instanceof Error) && o(
            (w || "React class") + ": type specification of " + x + " `" + A + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in f)) {
            f[_.message] = !0;
            var P = D ? D() : "";
            o(
              "Failed " + x + " type: " + _.message + (P ?? "")
            );
          }
        }
    }
  }
  return y.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, C1 = y, C1;
}
var T1, dR;
function JN() {
  if (dR) return T1;
  dR = 1;
  var o = K1(), s = XN(), f = X1(), v = rw(), y = ZN(), S = function() {
  };
  process.env.NODE_ENV !== "production" && (S = function(x) {
    var w = "Warning: " + x;
    typeof console < "u" && console.error(w);
    try {
      throw new Error(w);
    } catch {
    }
  });
  function m() {
    return null;
  }
  return T1 = function(x, w) {
    var D = typeof Symbol == "function" && Symbol.iterator, A = "@@iterator";
    function _(W) {
      var se = W && (D && W[D] || W[A]);
      if (typeof se == "function")
        return se;
    }
    var N = "<<anonymous>>", P = {
      array: ee("array"),
      bigint: ee("bigint"),
      bool: ee("boolean"),
      func: ee("function"),
      number: ee("number"),
      object: ee("object"),
      string: ee("string"),
      symbol: ee("symbol"),
      any: ue(),
      arrayOf: q,
      element: K(),
      elementType: V(),
      instanceOf: le,
      node: k(),
      objectOf: je,
      oneOf: re,
      oneOfType: Fe,
      shape: Te,
      exact: ve
    };
    function H(W, se) {
      return W === se ? W !== 0 || 1 / W === 1 / se : W !== W && se !== se;
    }
    function $(W, se) {
      this.message = W, this.data = se && typeof se == "object" ? se : {}, this.stack = "";
    }
    $.prototype = Error.prototype;
    function U(W) {
      if (process.env.NODE_ENV !== "production")
        var se = {}, Oe = 0;
      function Be(it, Ve, Je, et, st, ct, Dt) {
        if (et = et || N, ct = ct || Je, Dt !== f) {
          if (w) {
            var be = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw be.name = "Invariant Violation", be;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Rt = et + ":" + Je;
            !se[Rt] && // Avoid spamming the console because they are often not actionable except for lib authors
            Oe < 3 && (S(
              "You are manually calling a React.PropTypes validation function for the `" + ct + "` prop on `" + et + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), se[Rt] = !0, Oe++);
          }
        }
        return Ve[Je] == null ? it ? Ve[Je] === null ? new $("The " + st + " `" + ct + "` is marked as required " + ("in `" + et + "`, but its value is `null`.")) : new $("The " + st + " `" + ct + "` is marked as required in " + ("`" + et + "`, but its value is `undefined`.")) : null : W(Ve, Je, et, st, ct);
      }
      var xe = Be.bind(null, !1);
      return xe.isRequired = Be.bind(null, !0), xe;
    }
    function ee(W) {
      function se(Oe, Be, xe, it, Ve, Je) {
        var et = Oe[Be], st = Ce(et);
        if (st !== W) {
          var ct = ht(et);
          return new $(
            "Invalid " + it + " `" + Ve + "` of type " + ("`" + ct + "` supplied to `" + xe + "`, expected ") + ("`" + W + "`."),
            { expectedType: W }
          );
        }
        return null;
      }
      return U(se);
    }
    function ue() {
      return U(m);
    }
    function q(W) {
      function se(Oe, Be, xe, it, Ve) {
        if (typeof W != "function")
          return new $("Property `" + Ve + "` of component `" + xe + "` has invalid PropType notation inside arrayOf.");
        var Je = Oe[Be];
        if (!Array.isArray(Je)) {
          var et = Ce(Je);
          return new $("Invalid " + it + " `" + Ve + "` of type " + ("`" + et + "` supplied to `" + xe + "`, expected an array."));
        }
        for (var st = 0; st < Je.length; st++) {
          var ct = W(Je, st, xe, it, Ve + "[" + st + "]", f);
          if (ct instanceof Error)
            return ct;
        }
        return null;
      }
      return U(se);
    }
    function K() {
      function W(se, Oe, Be, xe, it) {
        var Ve = se[Oe];
        if (!x(Ve)) {
          var Je = Ce(Ve);
          return new $("Invalid " + xe + " `" + it + "` of type " + ("`" + Je + "` supplied to `" + Be + "`, expected a single ReactElement."));
        }
        return null;
      }
      return U(W);
    }
    function V() {
      function W(se, Oe, Be, xe, it) {
        var Ve = se[Oe];
        if (!o.isValidElementType(Ve)) {
          var Je = Ce(Ve);
          return new $("Invalid " + xe + " `" + it + "` of type " + ("`" + Je + "` supplied to `" + Be + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return U(W);
    }
    function le(W) {
      function se(Oe, Be, xe, it, Ve) {
        if (!(Oe[Be] instanceof W)) {
          var Je = W.name || N, et = Ae(Oe[Be]);
          return new $("Invalid " + it + " `" + Ve + "` of type " + ("`" + et + "` supplied to `" + xe + "`, expected ") + ("instance of `" + Je + "`."));
        }
        return null;
      }
      return U(se);
    }
    function re(W) {
      if (!Array.isArray(W))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? S(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : S("Invalid argument supplied to oneOf, expected an array.")), m;
      function se(Oe, Be, xe, it, Ve) {
        for (var Je = Oe[Be], et = 0; et < W.length; et++)
          if (H(Je, W[et]))
            return null;
        var st = JSON.stringify(W, function(Dt, be) {
          var Rt = ht(be);
          return Rt === "symbol" ? String(be) : be;
        });
        return new $("Invalid " + it + " `" + Ve + "` of value `" + String(Je) + "` " + ("supplied to `" + xe + "`, expected one of " + st + "."));
      }
      return U(se);
    }
    function je(W) {
      function se(Oe, Be, xe, it, Ve) {
        if (typeof W != "function")
          return new $("Property `" + Ve + "` of component `" + xe + "` has invalid PropType notation inside objectOf.");
        var Je = Oe[Be], et = Ce(Je);
        if (et !== "object")
          return new $("Invalid " + it + " `" + Ve + "` of type " + ("`" + et + "` supplied to `" + xe + "`, expected an object."));
        for (var st in Je)
          if (v(Je, st)) {
            var ct = W(Je, st, xe, it, Ve + "." + st, f);
            if (ct instanceof Error)
              return ct;
          }
        return null;
      }
      return U(se);
    }
    function Fe(W) {
      if (!Array.isArray(W))
        return process.env.NODE_ENV !== "production" && S("Invalid argument supplied to oneOfType, expected an instance of array."), m;
      for (var se = 0; se < W.length; se++) {
        var Oe = W[se];
        if (typeof Oe != "function")
          return S(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(Oe) + " at index " + se + "."
          ), m;
      }
      function Be(xe, it, Ve, Je, et) {
        for (var st = [], ct = 0; ct < W.length; ct++) {
          var Dt = W[ct], be = Dt(xe, it, Ve, Je, et, f);
          if (be == null)
            return null;
          be.data && v(be.data, "expectedType") && st.push(be.data.expectedType);
        }
        var Rt = st.length > 0 ? ", expected one of type [" + st.join(", ") + "]" : "";
        return new $("Invalid " + Je + " `" + et + "` supplied to " + ("`" + Ve + "`" + Rt + "."));
      }
      return U(Be);
    }
    function k() {
      function W(se, Oe, Be, xe, it) {
        return Se(se[Oe]) ? null : new $("Invalid " + xe + " `" + it + "` supplied to " + ("`" + Be + "`, expected a ReactNode."));
      }
      return U(W);
    }
    function oe(W, se, Oe, Be, xe) {
      return new $(
        (W || "React class") + ": " + se + " type `" + Oe + "." + Be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + xe + "`."
      );
    }
    function Te(W) {
      function se(Oe, Be, xe, it, Ve) {
        var Je = Oe[Be], et = Ce(Je);
        if (et !== "object")
          return new $("Invalid " + it + " `" + Ve + "` of type `" + et + "` " + ("supplied to `" + xe + "`, expected `object`."));
        for (var st in W) {
          var ct = W[st];
          if (typeof ct != "function")
            return oe(xe, it, Ve, st, ht(ct));
          var Dt = ct(Je, st, xe, it, Ve + "." + st, f);
          if (Dt)
            return Dt;
        }
        return null;
      }
      return U(se);
    }
    function ve(W) {
      function se(Oe, Be, xe, it, Ve) {
        var Je = Oe[Be], et = Ce(Je);
        if (et !== "object")
          return new $("Invalid " + it + " `" + Ve + "` of type `" + et + "` " + ("supplied to `" + xe + "`, expected `object`."));
        var st = s({}, Oe[Be], W);
        for (var ct in st) {
          var Dt = W[ct];
          if (v(W, ct) && typeof Dt != "function")
            return oe(xe, it, Ve, ct, ht(Dt));
          if (!Dt)
            return new $(
              "Invalid " + it + " `" + Ve + "` key `" + ct + "` supplied to `" + xe + "`.\nBad object: " + JSON.stringify(Oe[Be], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(W), null, "  ")
            );
          var be = Dt(Je, ct, xe, it, Ve + "." + ct, f);
          if (be)
            return be;
        }
        return null;
      }
      return U(se);
    }
    function Se(W) {
      switch (typeof W) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !W;
        case "object":
          if (Array.isArray(W))
            return W.every(Se);
          if (W === null || x(W))
            return !0;
          var se = _(W);
          if (se) {
            var Oe = se.call(W), Be;
            if (se !== W.entries) {
              for (; !(Be = Oe.next()).done; )
                if (!Se(Be.value))
                  return !1;
            } else
              for (; !(Be = Oe.next()).done; ) {
                var xe = Be.value;
                if (xe && !Se(xe[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function _e(W, se) {
      return W === "symbol" ? !0 : se ? se["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && se instanceof Symbol : !1;
    }
    function Ce(W) {
      var se = typeof W;
      return Array.isArray(W) ? "array" : W instanceof RegExp ? "object" : _e(se, W) ? "symbol" : se;
    }
    function ht(W) {
      if (typeof W > "u" || W === null)
        return "" + W;
      var se = Ce(W);
      if (se === "object") {
        if (W instanceof Date)
          return "date";
        if (W instanceof RegExp)
          return "regexp";
      }
      return se;
    }
    function ce(W) {
      var se = ht(W);
      switch (se) {
        case "array":
        case "object":
          return "an " + se;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + se;
        default:
          return se;
      }
    }
    function Ae(W) {
      return !W.constructor || !W.constructor.name ? N : W.constructor.name;
    }
    return P.checkPropTypes = y, P.resetWarningCache = y.resetWarningCache, P.PropTypes = P, P;
  }, T1;
}
var x1, pR;
function e2() {
  if (pR) return x1;
  pR = 1;
  var o = X1();
  function s() {
  }
  function f() {
  }
  return f.resetWarningCache = s, x1 = function() {
    function v(m, x, w, D, A, _) {
      if (_ !== o) {
        var N = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw N.name = "Invariant Violation", N;
      }
    }
    v.isRequired = v;
    function y() {
      return v;
    }
    var S = {
      array: v,
      bigint: v,
      bool: v,
      func: v,
      number: v,
      object: v,
      string: v,
      symbol: v,
      any: v,
      arrayOf: y,
      element: v,
      elementType: v,
      instanceOf: y,
      node: v,
      objectOf: y,
      oneOf: y,
      oneOfType: y,
      shape: y,
      exact: y,
      checkPropTypes: f,
      resetWarningCache: s
    };
    return S.PropTypes = S, S;
  }, x1;
}
if (process.env.NODE_ENV !== "production") {
  var t2 = K1(), n2 = !0;
  z1.exports = JN()(t2.isElement, n2);
} else
  z1.exports = e2()();
var r2 = z1.exports;
const C = /* @__PURE__ */ nw(r2);
function aw(o) {
  var s, f, v = "";
  if (typeof o == "string" || typeof o == "number") v += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var y = o.length;
    for (s = 0; s < y; s++) o[s] && (f = aw(o[s])) && (v && (v += " "), v += f);
  } else for (f in o) o[f] && (v && (v += " "), v += f);
  return v;
}
function pn() {
  for (var o, s, f = 0, v = "", y = arguments.length; f < y; f++) (o = arguments[f]) && (s = aw(o)) && (v && (v += " "), v += s);
  return v;
}
function gg(o, s) {
  const f = {
    ...s
  };
  for (const v in o)
    if (Object.prototype.hasOwnProperty.call(o, v)) {
      const y = v;
      if (y === "components" || y === "slots")
        f[y] = {
          ...o[y],
          ...f[y]
        };
      else if (y === "componentsProps" || y === "slotProps") {
        const S = o[y], m = s[y];
        if (!m)
          f[y] = S || {};
        else if (!S)
          f[y] = m;
        else {
          f[y] = {
            ...m
          };
          for (const x in S)
            if (Object.prototype.hasOwnProperty.call(S, x)) {
              const w = x;
              f[y][w] = gg(S[w], m[w]);
            }
        }
      } else f[y] === void 0 && (f[y] = o[y]);
    }
  return f;
}
function Ai(o, s, f = void 0) {
  const v = {};
  for (const y in o) {
    const S = o[y];
    let m = "", x = !0;
    for (let w = 0; w < S.length; w += 1) {
      const D = S[w];
      D && (m += (x === !0 ? "" : " ") + s(D), x = !1, f && f[D] && (m += " " + f[D]));
    }
    v[y] = m;
  }
  return v;
}
function Qu(o, ...s) {
  const f = new URL(`https://mui.com/production-error/?code=${o}`);
  return s.forEach((v) => f.searchParams.append("args[]", v)), `Minified MUI error #${o}; visit ${f} for the full message.`;
}
function a2(o, s = Number.MIN_SAFE_INTEGER, f = Number.MAX_SAFE_INTEGER) {
  return Math.max(s, Math.min(o, f));
}
function Z1(o, s = 0, f = 1) {
  return process.env.NODE_ENV !== "production" && (o < s || o > f) && console.error(`MUI: The value provided ${o} is out of range [${s}, ${f}].`), a2(o, s, f);
}
function i2(o) {
  o = o.slice(1);
  const s = new RegExp(`.{1,${o.length >= 6 ? 2 : 1}}`, "g");
  let f = o.match(s);
  return f && f[0].length === 1 && (f = f.map((v) => v + v)), f ? `rgb${f.length === 4 ? "a" : ""}(${f.map((v, y) => y < 3 ? parseInt(v, 16) : Math.round(parseInt(v, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function qu(o) {
  if (o.type)
    return o;
  if (o.charAt(0) === "#")
    return qu(i2(o));
  const s = o.indexOf("("), f = o.substring(0, s);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(f))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${o}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Qu(9, o));
  let v = o.substring(s + 1, o.length - 1), y;
  if (f === "color") {
    if (v = v.split(" "), y = v.shift(), v.length === 4 && v[3].charAt(0) === "/" && (v[3] = v[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(y))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${y}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Qu(10, y));
  } else
    v = v.split(",");
  return v = v.map((S) => parseFloat(S)), {
    type: f,
    values: v,
    colorSpace: y
  };
}
const o2 = (o) => {
  const s = qu(o);
  return s.values.slice(0, 3).map((f, v) => s.type.includes("hsl") && v !== 0 ? `${f}%` : f).join(" ");
}, Bv = (o, s) => {
  try {
    return o2(o);
  } catch {
    return s && process.env.NODE_ENV !== "production" && console.warn(s), o;
  }
};
function Dg(o) {
  const {
    type: s,
    colorSpace: f
  } = o;
  let {
    values: v
  } = o;
  return s.includes("rgb") ? v = v.map((y, S) => S < 3 ? parseInt(y, 10) : y) : s.includes("hsl") && (v[1] = `${v[1]}%`, v[2] = `${v[2]}%`), s.includes("color") ? v = `${f} ${v.join(" ")}` : v = `${v.join(", ")}`, `${s}(${v})`;
}
function iw(o) {
  o = qu(o);
  const {
    values: s
  } = o, f = s[0], v = s[1] / 100, y = s[2] / 100, S = v * Math.min(y, 1 - y), m = (D, A = (D + f / 30) % 12) => y - S * Math.max(Math.min(A - 3, 9 - A, 1), -1);
  let x = "rgb";
  const w = [Math.round(m(0) * 255), Math.round(m(8) * 255), Math.round(m(4) * 255)];
  return o.type === "hsla" && (x += "a", w.push(s[3])), Dg({
    type: x,
    values: w
  });
}
function U1(o) {
  o = qu(o);
  let s = o.type === "hsl" || o.type === "hsla" ? qu(iw(o)).values : o.values;
  return s = s.map((f) => (o.type !== "color" && (f /= 255), f <= 0.03928 ? f / 12.92 : ((f + 0.055) / 1.055) ** 2.4)), Number((0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2]).toFixed(3));
}
function vR(o, s) {
  const f = U1(o), v = U1(s);
  return (Math.max(f, v) + 0.05) / (Math.min(f, v) + 0.05);
}
function Ho(o, s) {
  return o = qu(o), s = Z1(s), (o.type === "rgb" || o.type === "hsl") && (o.type += "a"), o.type === "color" ? o.values[3] = `/${s}` : o.values[3] = s, Dg(o);
}
function og(o, s, f) {
  try {
    return Ho(o, s);
  } catch {
    return o;
  }
}
function J1(o, s) {
  if (o = qu(o), s = Z1(s), o.type.includes("hsl"))
    o.values[2] *= 1 - s;
  else if (o.type.includes("rgb") || o.type.includes("color"))
    for (let f = 0; f < 3; f += 1)
      o.values[f] *= 1 - s;
  return Dg(o);
}
function fn(o, s, f) {
  try {
    return J1(o, s);
  } catch {
    return o;
  }
}
function eE(o, s) {
  if (o = qu(o), s = Z1(s), o.type.includes("hsl"))
    o.values[2] += (100 - o.values[2]) * s;
  else if (o.type.includes("rgb"))
    for (let f = 0; f < 3; f += 1)
      o.values[f] += (255 - o.values[f]) * s;
  else if (o.type.includes("color"))
    for (let f = 0; f < 3; f += 1)
      o.values[f] += (1 - o.values[f]) * s;
  return Dg(o);
}
function dn(o, s, f) {
  try {
    return eE(o, s);
  } catch {
    return o;
  }
}
function l2(o, s = 0.15) {
  return U1(o) > 0.5 ? J1(o, s) : eE(o, s);
}
function lg(o, s, f) {
  try {
    return l2(o, s);
  } catch {
    return o;
  }
}
function u2(o) {
  return o !== "ownerState" && o !== "theme" && o !== "sx" && o !== "as";
}
const ow = (o) => u2(o) && o !== "classes";
function Pt(o) {
  if (typeof o != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Qu(7));
  return o.charAt(0).toUpperCase() + o.slice(1);
}
function Io(o) {
  if (typeof o != "object" || o === null)
    return !1;
  const s = Object.getPrototypeOf(o);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in o) && !(Symbol.iterator in o);
}
function lw(o) {
  if (!Io(o))
    return o;
  const s = {};
  return Object.keys(o).forEach((f) => {
    s[f] = lw(o[f]);
  }), s;
}
function fi(o, s, f = {
  clone: !0
}) {
  const v = f.clone ? {
    ...o
  } : o;
  return Io(o) && Io(s) && Object.keys(s).forEach((y) => {
    Io(s[y]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(o, y) && Io(o[y]) ? v[y] = fi(o[y], s[y], f) : f.clone ? v[y] = Io(s[y]) ? lw(s[y]) : s[y] : v[y] = s[y];
  }), v;
}
function Iv(o, s) {
  return s ? fi(o, s, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : o;
}
const Xu = process.env.NODE_ENV !== "production" ? C.oneOfType([C.number, C.string, C.object, C.array]) : {};
function s2(o, s) {
  if (!o.containerQueries)
    return s;
  const f = Object.keys(s).filter((v) => v.startsWith("@container")).sort((v, y) => {
    var m, x;
    const S = /min-width:\s*([0-9.]+)/;
    return +(((m = v.match(S)) == null ? void 0 : m[1]) || 0) - +(((x = y.match(S)) == null ? void 0 : x[1]) || 0);
  });
  return f.length ? f.reduce((v, y) => {
    const S = s[y];
    return delete v[y], v[y] = S, v;
  }, {
    ...s
  }) : s;
}
function c2(o, s) {
  return s === "@" || s.startsWith("@") && (o.some((f) => s.startsWith(`@${f}`)) || !!s.match(/^@\d/));
}
function f2(o, s) {
  const f = s.match(/^@([^/]+)?\/?(.+)?$/);
  if (!f) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${s})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Qu(18, `(${s})`));
    return null;
  }
  const [, v, y] = f, S = Number.isNaN(+v) ? v || 0 : +v;
  return o.containerQueries(y).up(S);
}
function d2(o) {
  const s = (S, m) => S.replace("@media", m ? `@container ${m}` : "@container");
  function f(S, m) {
    S.up = (...x) => s(o.breakpoints.up(...x), m), S.down = (...x) => s(o.breakpoints.down(...x), m), S.between = (...x) => s(o.breakpoints.between(...x), m), S.only = (...x) => s(o.breakpoints.only(...x), m), S.not = (...x) => {
      const w = s(o.breakpoints.not(...x), m);
      return w.includes("not all and") ? w.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : w;
    };
  }
  const v = {}, y = (S) => (f(v, S), v);
  return f(y), {
    ...o,
    containerQueries: y
  };
}
const _g = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, hR = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (o) => `@media (min-width:${_g[o]}px)`
}, p2 = {
  containerQueries: (o) => ({
    up: (s) => {
      let f = typeof s == "number" ? s : _g[s] || s;
      return typeof f == "number" && (f = `${f}px`), o ? `@container ${o} (min-width:${f})` : `@container (min-width:${f})`;
    }
  })
};
function Ul(o, s, f) {
  const v = o.theme || {};
  if (Array.isArray(s)) {
    const S = v.breakpoints || hR;
    return s.reduce((m, x, w) => (m[S.up(S.keys[w])] = f(s[w]), m), {});
  }
  if (typeof s == "object") {
    const S = v.breakpoints || hR;
    return Object.keys(s).reduce((m, x) => {
      if (c2(S.keys, x)) {
        const w = f2(v.containerQueries ? v : p2, x);
        w && (m[w] = f(s[x], x));
      } else if (Object.keys(S.values || _g).includes(x)) {
        const w = S.up(x);
        m[w] = f(s[x], x);
      } else {
        const w = x;
        m[w] = s[w];
      }
      return m;
    }, {});
  }
  return f(s);
}
function v2(o = {}) {
  var f;
  return ((f = o.keys) == null ? void 0 : f.reduce((v, y) => {
    const S = o.up(y);
    return v[S] = {}, v;
  }, {})) || {};
}
function h2(o, s) {
  return o.reduce((f, v) => {
    const y = f[v];
    return (!y || Object.keys(y).length === 0) && delete f[v], f;
  }, s);
}
function Mg(o, s, f = !0) {
  if (!s || typeof s != "string")
    return null;
  if (o && o.vars && f) {
    const v = `vars.${s}`.split(".").reduce((y, S) => y && y[S] ? y[S] : null, o);
    if (v != null)
      return v;
  }
  return s.split(".").reduce((v, y) => v && v[y] != null ? v[y] : null, o);
}
function Sg(o, s, f, v = f) {
  let y;
  return typeof o == "function" ? y = o(f) : Array.isArray(o) ? y = o[f] || v : y = Mg(o, f) || v, s && (y = s(y, v, o)), y;
}
function Kn(o) {
  const {
    prop: s,
    cssProperty: f = o.prop,
    themeKey: v,
    transform: y
  } = o, S = (m) => {
    if (m[s] == null)
      return null;
    const x = m[s], w = m.theme, D = Mg(w, v) || {};
    return Ul(m, x, (_) => {
      let N = Sg(D, y, _);
      return _ === N && typeof _ == "string" && (N = Sg(D, y, `${s}${_ === "default" ? "" : Pt(_)}`, _)), f === !1 ? N : {
        [f]: N
      };
    });
  };
  return S.propTypes = process.env.NODE_ENV !== "production" ? {
    [s]: Xu
  } : {}, S.filterProps = [s], S;
}
function m2(o) {
  const s = {};
  return (f) => (s[f] === void 0 && (s[f] = o(f)), s[f]);
}
const y2 = {
  m: "margin",
  p: "padding"
}, g2 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, mR = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, S2 = m2((o) => {
  if (o.length > 2)
    if (mR[o])
      o = mR[o];
    else
      return [o];
  const [s, f] = o.split(""), v = y2[s], y = g2[f] || "";
  return Array.isArray(y) ? y.map((S) => v + S) : [v + y];
}), Ng = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ag = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], b2 = [...Ng, ...Ag];
function Xv(o, s, f, v) {
  const y = Mg(o, s, !0) ?? f;
  return typeof y == "number" || typeof y == "string" ? (S) => typeof S == "string" ? S : (process.env.NODE_ENV !== "production" && typeof S != "number" && console.error(`MUI: Expected ${v} argument to be a number or a string, got ${S}.`), typeof y == "string" ? `calc(${S} * ${y})` : y * S) : Array.isArray(y) ? (S) => {
    if (typeof S == "string")
      return S;
    const m = Math.abs(S);
    process.env.NODE_ENV !== "production" && (Number.isInteger(m) ? m > y.length - 1 && console.error([`MUI: The value provided (${m}) overflows.`, `The supported values are: ${JSON.stringify(y)}.`, `${m} > ${y.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${s}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${s}\` as a number.`].join(`
`)));
    const x = y[m];
    return S >= 0 ? x : typeof x == "number" ? -x : `-${x}`;
  } : typeof y == "function" ? y : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${s}\` value (${y}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function tE(o) {
  return Xv(o, "spacing", 8, "spacing");
}
function Zv(o, s) {
  return typeof s == "string" || s == null ? s : o(s);
}
function E2(o, s) {
  return (f) => o.reduce((v, y) => (v[y] = Zv(s, f), v), {});
}
function C2(o, s, f, v) {
  if (!s.includes(f))
    return null;
  const y = S2(f), S = E2(y, v), m = o[f];
  return Ul(o, m, S);
}
function uw(o, s) {
  const f = tE(o.theme);
  return Object.keys(o).map((v) => C2(o, s, v, f)).reduce(Iv, {});
}
function Fn(o) {
  return uw(o, Ng);
}
Fn.propTypes = process.env.NODE_ENV !== "production" ? Ng.reduce((o, s) => (o[s] = Xu, o), {}) : {};
Fn.filterProps = Ng;
function Bn(o) {
  return uw(o, Ag);
}
Bn.propTypes = process.env.NODE_ENV !== "production" ? Ag.reduce((o, s) => (o[s] = Xu, o), {}) : {};
Bn.filterProps = Ag;
process.env.NODE_ENV !== "production" && b2.reduce((o, s) => (o[s] = Xu, o), {});
function Lg(...o) {
  const s = o.reduce((v, y) => (y.filterProps.forEach((S) => {
    v[S] = y;
  }), v), {}), f = (v) => Object.keys(v).reduce((y, S) => s[S] ? Iv(y, s[S](v)) : y, {});
  return f.propTypes = process.env.NODE_ENV !== "production" ? o.reduce((v, y) => Object.assign(v, y.propTypes), {}) : {}, f.filterProps = o.reduce((v, y) => v.concat(y.filterProps), []), f;
}
function Ni(o) {
  return typeof o != "number" ? o : `${o}px solid`;
}
function Li(o, s) {
  return Kn({
    prop: o,
    themeKey: "borders",
    transform: s
  });
}
const T2 = Li("border", Ni), x2 = Li("borderTop", Ni), R2 = Li("borderRight", Ni), w2 = Li("borderBottom", Ni), k2 = Li("borderLeft", Ni), O2 = Li("borderColor"), D2 = Li("borderTopColor"), _2 = Li("borderRightColor"), M2 = Li("borderBottomColor"), N2 = Li("borderLeftColor"), A2 = Li("outline", Ni), L2 = Li("outlineColor"), zg = (o) => {
  if (o.borderRadius !== void 0 && o.borderRadius !== null) {
    const s = Xv(o.theme, "shape.borderRadius", 4, "borderRadius"), f = (v) => ({
      borderRadius: Zv(s, v)
    });
    return Ul(o, o.borderRadius, f);
  }
  return null;
};
zg.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Xu
} : {};
zg.filterProps = ["borderRadius"];
Lg(T2, x2, R2, w2, k2, O2, D2, _2, M2, N2, zg, A2, L2);
const Ug = (o) => {
  if (o.gap !== void 0 && o.gap !== null) {
    const s = Xv(o.theme, "spacing", 8, "gap"), f = (v) => ({
      gap: Zv(s, v)
    });
    return Ul(o, o.gap, f);
  }
  return null;
};
Ug.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Xu
} : {};
Ug.filterProps = ["gap"];
const Pg = (o) => {
  if (o.columnGap !== void 0 && o.columnGap !== null) {
    const s = Xv(o.theme, "spacing", 8, "columnGap"), f = (v) => ({
      columnGap: Zv(s, v)
    });
    return Ul(o, o.columnGap, f);
  }
  return null;
};
Pg.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Xu
} : {};
Pg.filterProps = ["columnGap"];
const $g = (o) => {
  if (o.rowGap !== void 0 && o.rowGap !== null) {
    const s = Xv(o.theme, "spacing", 8, "rowGap"), f = (v) => ({
      rowGap: Zv(s, v)
    });
    return Ul(o, o.rowGap, f);
  }
  return null;
};
$g.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Xu
} : {};
$g.filterProps = ["rowGap"];
const z2 = Kn({
  prop: "gridColumn"
}), U2 = Kn({
  prop: "gridRow"
}), P2 = Kn({
  prop: "gridAutoFlow"
}), $2 = Kn({
  prop: "gridAutoColumns"
}), j2 = Kn({
  prop: "gridAutoRows"
}), F2 = Kn({
  prop: "gridTemplateColumns"
}), B2 = Kn({
  prop: "gridTemplateRows"
}), V2 = Kn({
  prop: "gridTemplateAreas"
}), H2 = Kn({
  prop: "gridArea"
});
Lg(Ug, Pg, $g, z2, U2, P2, $2, j2, F2, B2, V2, H2);
function bd(o, s) {
  return s === "grey" ? s : o;
}
const I2 = Kn({
  prop: "color",
  themeKey: "palette",
  transform: bd
}), W2 = Kn({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: bd
}), Y2 = Kn({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: bd
});
Lg(I2, W2, Y2);
function si(o) {
  return o <= 1 && o !== 0 ? `${o * 100}%` : o;
}
const G2 = Kn({
  prop: "width",
  transform: si
}), nE = (o) => {
  if (o.maxWidth !== void 0 && o.maxWidth !== null) {
    const s = (f) => {
      var y, S, m, x, w;
      const v = ((m = (S = (y = o.theme) == null ? void 0 : y.breakpoints) == null ? void 0 : S.values) == null ? void 0 : m[f]) || _g[f];
      return v ? ((w = (x = o.theme) == null ? void 0 : x.breakpoints) == null ? void 0 : w.unit) !== "px" ? {
        maxWidth: `${v}${o.theme.breakpoints.unit}`
      } : {
        maxWidth: v
      } : {
        maxWidth: si(f)
      };
    };
    return Ul(o, o.maxWidth, s);
  }
  return null;
};
nE.filterProps = ["maxWidth"];
const Q2 = Kn({
  prop: "minWidth",
  transform: si
}), q2 = Kn({
  prop: "height",
  transform: si
}), K2 = Kn({
  prop: "maxHeight",
  transform: si
}), X2 = Kn({
  prop: "minHeight",
  transform: si
});
Kn({
  prop: "size",
  cssProperty: "width",
  transform: si
});
Kn({
  prop: "size",
  cssProperty: "height",
  transform: si
});
const Z2 = Kn({
  prop: "boxSizing"
});
Lg(G2, nE, Q2, q2, K2, X2, Z2);
const Jv = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ni
  },
  borderTop: {
    themeKey: "borders",
    transform: Ni
  },
  borderRight: {
    themeKey: "borders",
    transform: Ni
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ni
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ni
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ni
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: zg
  },
  // palette
  color: {
    themeKey: "palette",
    transform: bd
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: bd
  },
  backgroundColor: {
    themeKey: "palette",
    transform: bd
  },
  // spacing
  p: {
    style: Bn
  },
  pt: {
    style: Bn
  },
  pr: {
    style: Bn
  },
  pb: {
    style: Bn
  },
  pl: {
    style: Bn
  },
  px: {
    style: Bn
  },
  py: {
    style: Bn
  },
  padding: {
    style: Bn
  },
  paddingTop: {
    style: Bn
  },
  paddingRight: {
    style: Bn
  },
  paddingBottom: {
    style: Bn
  },
  paddingLeft: {
    style: Bn
  },
  paddingX: {
    style: Bn
  },
  paddingY: {
    style: Bn
  },
  paddingInline: {
    style: Bn
  },
  paddingInlineStart: {
    style: Bn
  },
  paddingInlineEnd: {
    style: Bn
  },
  paddingBlock: {
    style: Bn
  },
  paddingBlockStart: {
    style: Bn
  },
  paddingBlockEnd: {
    style: Bn
  },
  m: {
    style: Fn
  },
  mt: {
    style: Fn
  },
  mr: {
    style: Fn
  },
  mb: {
    style: Fn
  },
  ml: {
    style: Fn
  },
  mx: {
    style: Fn
  },
  my: {
    style: Fn
  },
  margin: {
    style: Fn
  },
  marginTop: {
    style: Fn
  },
  marginRight: {
    style: Fn
  },
  marginBottom: {
    style: Fn
  },
  marginLeft: {
    style: Fn
  },
  marginX: {
    style: Fn
  },
  marginY: {
    style: Fn
  },
  marginInline: {
    style: Fn
  },
  marginInlineStart: {
    style: Fn
  },
  marginInlineEnd: {
    style: Fn
  },
  marginBlock: {
    style: Fn
  },
  marginBlockStart: {
    style: Fn
  },
  marginBlockEnd: {
    style: Fn
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (o) => ({
      "@media print": {
        display: o
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Ug
  },
  rowGap: {
    style: $g
  },
  columnGap: {
    style: Pg
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: si
  },
  maxWidth: {
    style: nE
  },
  minWidth: {
    transform: si
  },
  height: {
    transform: si
  },
  maxHeight: {
    transform: si
  },
  minHeight: {
    transform: si
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function J2(...o) {
  const s = o.reduce((v, y) => v.concat(Object.keys(y)), []), f = new Set(s);
  return o.every((v) => f.size === Object.keys(v).length);
}
function eA(o, s) {
  return typeof o == "function" ? o(s) : o;
}
function tA() {
  function o(f, v, y, S) {
    const m = {
      [f]: v,
      theme: y
    }, x = S[f];
    if (!x)
      return {
        [f]: v
      };
    const {
      cssProperty: w = f,
      themeKey: D,
      transform: A,
      style: _
    } = x;
    if (v == null)
      return null;
    if (D === "typography" && v === "inherit")
      return {
        [f]: v
      };
    const N = Mg(y, D) || {};
    return _ ? _(m) : Ul(m, v, (H) => {
      let $ = Sg(N, A, H);
      return H === $ && typeof H == "string" && ($ = Sg(N, A, `${f}${H === "default" ? "" : Pt(H)}`, H)), w === !1 ? $ : {
        [w]: $
      };
    });
  }
  function s(f) {
    const {
      sx: v,
      theme: y = {}
    } = f || {};
    if (!v)
      return null;
    const S = y.unstable_sxConfig ?? Jv;
    function m(x) {
      let w = x;
      if (typeof x == "function")
        w = x(y);
      else if (typeof x != "object")
        return x;
      if (!w)
        return null;
      const D = v2(y.breakpoints), A = Object.keys(D);
      let _ = D;
      return Object.keys(w).forEach((N) => {
        const P = eA(w[N], y);
        if (P != null)
          if (typeof P == "object")
            if (S[N])
              _ = Iv(_, o(N, P, y, S));
            else {
              const H = Ul({
                theme: y
              }, P, ($) => ({
                [N]: $
              }));
              J2(H, P) ? _[N] = s({
                sx: P,
                theme: y
              }) : _ = Iv(_, H);
            }
          else
            _ = Iv(_, o(N, P, y, S));
      }), s2(y, h2(A, _));
    }
    return Array.isArray(v) ? v.map(m) : m(v);
  }
  return s;
}
const Cd = tA();
Cd.filterProps = ["sx"];
const nA = (o) => {
  var v;
  const s = {
    systemProps: {},
    otherProps: {}
  }, f = ((v = o == null ? void 0 : o.theme) == null ? void 0 : v.unstable_sxConfig) ?? Jv;
  return Object.keys(o).forEach((y) => {
    f[y] ? s.systemProps[y] = o[y] : s.otherProps[y] = o[y];
  }), s;
};
function rA(o) {
  const {
    sx: s,
    ...f
  } = o, {
    systemProps: v,
    otherProps: y
  } = nA(f);
  let S;
  return Array.isArray(s) ? S = [v, ...s] : typeof s == "function" ? S = (...m) => {
    const x = s(...m);
    return Io(x) ? {
      ...v,
      ...x
    } : v;
  } : S = {
    ...v,
    ...s
  }, {
    ...y,
    sx: S
  };
}
function bg() {
  return bg = Object.assign ? Object.assign.bind() : function(o) {
    for (var s = 1; s < arguments.length; s++) {
      var f = arguments[s];
      for (var v in f) ({}).hasOwnProperty.call(f, v) && (o[v] = f[v]);
    }
    return o;
  }, bg.apply(null, arguments);
}
function sw(o) {
  var s = /* @__PURE__ */ Object.create(null);
  return function(f) {
    return s[f] === void 0 && (s[f] = o(f)), s[f];
  };
}
var aA = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, iA = /* @__PURE__ */ sw(
  function(o) {
    return aA.test(o) || o.charCodeAt(0) === 111 && o.charCodeAt(1) === 110 && o.charCodeAt(2) < 91;
  }
  /* Z+1 */
), oA = !1;
function lA(o) {
  if (o.sheet)
    return o.sheet;
  for (var s = 0; s < document.styleSheets.length; s++)
    if (document.styleSheets[s].ownerNode === o)
      return document.styleSheets[s];
}
function uA(o) {
  var s = document.createElement("style");
  return s.setAttribute("data-emotion", o.key), o.nonce !== void 0 && s.setAttribute("nonce", o.nonce), s.appendChild(document.createTextNode("")), s.setAttribute("data-s", ""), s;
}
var sA = /* @__PURE__ */ function() {
  function o(f) {
    var v = this;
    this._insertTag = function(y) {
      var S;
      v.tags.length === 0 ? v.insertionPoint ? S = v.insertionPoint.nextSibling : v.prepend ? S = v.container.firstChild : S = v.before : S = v.tags[v.tags.length - 1].nextSibling, v.container.insertBefore(y, S), v.tags.push(y);
    }, this.isSpeedy = f.speedy === void 0 ? !oA : f.speedy, this.tags = [], this.ctr = 0, this.nonce = f.nonce, this.key = f.key, this.container = f.container, this.prepend = f.prepend, this.insertionPoint = f.insertionPoint, this.before = null;
  }
  var s = o.prototype;
  return s.hydrate = function(v) {
    v.forEach(this._insertTag);
  }, s.insert = function(v) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(uA(this));
    var y = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var S = lA(y);
      try {
        S.insertRule(v, S.cssRules.length);
      } catch {
      }
    } else
      y.appendChild(document.createTextNode(v));
    this.ctr++;
  }, s.flush = function() {
    this.tags.forEach(function(v) {
      var y;
      return (y = v.parentNode) == null ? void 0 : y.removeChild(v);
    }), this.tags = [], this.ctr = 0;
  }, o;
}(), aa = "-ms-", Eg = "-moz-", It = "-webkit-", cw = "comm", rE = "rule", aE = "decl", cA = "@import", fw = "@keyframes", fA = "@layer", dA = Math.abs, jg = String.fromCharCode, pA = Object.assign;
function vA(o, s) {
  return $r(o, 0) ^ 45 ? (((s << 2 ^ $r(o, 0)) << 2 ^ $r(o, 1)) << 2 ^ $r(o, 2)) << 2 ^ $r(o, 3) : 0;
}
function dw(o) {
  return o.trim();
}
function hA(o, s) {
  return (o = s.exec(o)) ? o[0] : o;
}
function Wt(o, s, f) {
  return o.replace(s, f);
}
function P1(o, s) {
  return o.indexOf(s);
}
function $r(o, s) {
  return o.charCodeAt(s) | 0;
}
function Yv(o, s, f) {
  return o.slice(s, f);
}
function Bo(o) {
  return o.length;
}
function iE(o) {
  return o.length;
}
function ug(o, s) {
  return s.push(o), o;
}
function mA(o, s) {
  return o.map(s).join("");
}
var Fg = 1, Td = 1, pw = 0, Qa = 0, or = 0, xd = "";
function Bg(o, s, f, v, y, S, m) {
  return { value: o, root: s, parent: f, type: v, props: y, children: S, line: Fg, column: Td, length: m, return: "" };
}
function jv(o, s) {
  return pA(Bg("", null, null, "", null, null, 0), o, { length: -o.length }, s);
}
function yA() {
  return or;
}
function gA() {
  return or = Qa > 0 ? $r(xd, --Qa) : 0, Td--, or === 10 && (Td = 1, Fg--), or;
}
function di() {
  return or = Qa < pw ? $r(xd, Qa++) : 0, Td++, or === 10 && (Td = 1, Fg++), or;
}
function Wo() {
  return $r(xd, Qa);
}
function vg() {
  return Qa;
}
function eh(o, s) {
  return Yv(xd, o, s);
}
function Gv(o) {
  switch (o) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function vw(o) {
  return Fg = Td = 1, pw = Bo(xd = o), Qa = 0, [];
}
function hw(o) {
  return xd = "", o;
}
function hg(o) {
  return dw(eh(Qa - 1, $1(o === 91 ? o + 2 : o === 40 ? o + 1 : o)));
}
function SA(o) {
  for (; (or = Wo()) && or < 33; )
    di();
  return Gv(o) > 2 || Gv(or) > 3 ? "" : " ";
}
function bA(o, s) {
  for (; --s && di() && !(or < 48 || or > 102 || or > 57 && or < 65 || or > 70 && or < 97); )
    ;
  return eh(o, vg() + (s < 6 && Wo() == 32 && di() == 32));
}
function $1(o) {
  for (; di(); )
    switch (or) {
      case o:
        return Qa;
      case 34:
      case 39:
        o !== 34 && o !== 39 && $1(or);
        break;
      case 40:
        o === 41 && $1(o);
        break;
      case 92:
        di();
        break;
    }
  return Qa;
}
function EA(o, s) {
  for (; di() && o + or !== 57; )
    if (o + or === 84 && Wo() === 47)
      break;
  return "/*" + eh(s, Qa - 1) + "*" + jg(o === 47 ? o : di());
}
function CA(o) {
  for (; !Gv(Wo()); )
    di();
  return eh(o, Qa);
}
function TA(o) {
  return hw(mg("", null, null, null, [""], o = vw(o), 0, [0], o));
}
function mg(o, s, f, v, y, S, m, x, w) {
  for (var D = 0, A = 0, _ = m, N = 0, P = 0, H = 0, $ = 1, U = 1, ee = 1, ue = 0, q = "", K = y, V = S, le = v, re = q; U; )
    switch (H = ue, ue = di()) {
      case 40:
        if (H != 108 && $r(re, _ - 1) == 58) {
          P1(re += Wt(hg(ue), "&", "&\f"), "&\f") != -1 && (ee = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        re += hg(ue);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        re += SA(H);
        break;
      case 92:
        re += bA(vg() - 1, 7);
        continue;
      case 47:
        switch (Wo()) {
          case 42:
          case 47:
            ug(xA(EA(di(), vg()), s, f), w);
            break;
          default:
            re += "/";
        }
        break;
      case 123 * $:
        x[D++] = Bo(re) * ee;
      case 125 * $:
      case 59:
      case 0:
        switch (ue) {
          case 0:
          case 125:
            U = 0;
          case 59 + A:
            ee == -1 && (re = Wt(re, /\f/g, "")), P > 0 && Bo(re) - _ && ug(P > 32 ? gR(re + ";", v, f, _ - 1) : gR(Wt(re, " ", "") + ";", v, f, _ - 2), w);
            break;
          case 59:
            re += ";";
          default:
            if (ug(le = yR(re, s, f, D, A, y, x, q, K = [], V = [], _), S), ue === 123)
              if (A === 0)
                mg(re, s, le, le, K, S, _, x, V);
              else
                switch (N === 99 && $r(re, 3) === 110 ? 100 : N) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mg(o, le, le, v && ug(yR(o, le, le, 0, 0, y, x, q, y, K = [], _), V), y, V, _, x, v ? K : V);
                    break;
                  default:
                    mg(re, le, le, le, [""], V, 0, x, V);
                }
        }
        D = A = P = 0, $ = ee = 1, q = re = "", _ = m;
        break;
      case 58:
        _ = 1 + Bo(re), P = H;
      default:
        if ($ < 1) {
          if (ue == 123)
            --$;
          else if (ue == 125 && $++ == 0 && gA() == 125)
            continue;
        }
        switch (re += jg(ue), ue * $) {
          case 38:
            ee = A > 0 ? 1 : (re += "\f", -1);
            break;
          case 44:
            x[D++] = (Bo(re) - 1) * ee, ee = 1;
            break;
          case 64:
            Wo() === 45 && (re += hg(di())), N = Wo(), A = _ = Bo(q = re += CA(vg())), ue++;
            break;
          case 45:
            H === 45 && Bo(re) == 2 && ($ = 0);
        }
    }
  return S;
}
function yR(o, s, f, v, y, S, m, x, w, D, A) {
  for (var _ = y - 1, N = y === 0 ? S : [""], P = iE(N), H = 0, $ = 0, U = 0; H < v; ++H)
    for (var ee = 0, ue = Yv(o, _ + 1, _ = dA($ = m[H])), q = o; ee < P; ++ee)
      (q = dw($ > 0 ? N[ee] + " " + ue : Wt(ue, /&\f/g, N[ee]))) && (w[U++] = q);
  return Bg(o, s, f, y === 0 ? rE : x, w, D, A);
}
function xA(o, s, f) {
  return Bg(o, s, f, cw, jg(yA()), Yv(o, 2, -2), 0);
}
function gR(o, s, f, v) {
  return Bg(o, s, f, aE, Yv(o, 0, v), Yv(o, v + 1, -1), v);
}
function Ed(o, s) {
  for (var f = "", v = iE(o), y = 0; y < v; y++)
    f += s(o[y], y, o, s) || "";
  return f;
}
function RA(o, s, f, v) {
  switch (o.type) {
    case fA:
      if (o.children.length) break;
    case cA:
    case aE:
      return o.return = o.return || o.value;
    case cw:
      return "";
    case fw:
      return o.return = o.value + "{" + Ed(o.children, v) + "}";
    case rE:
      o.value = o.props.join(",");
  }
  return Bo(f = Ed(o.children, v)) ? o.return = o.value + "{" + f + "}" : "";
}
function wA(o) {
  var s = iE(o);
  return function(f, v, y, S) {
    for (var m = "", x = 0; x < s; x++)
      m += o[x](f, v, y, S) || "";
    return m;
  };
}
function kA(o) {
  return function(s) {
    s.root || (s = s.return) && o(s);
  };
}
var OA = function(s, f, v) {
  for (var y = 0, S = 0; y = S, S = Wo(), y === 38 && S === 12 && (f[v] = 1), !Gv(S); )
    di();
  return eh(s, Qa);
}, DA = function(s, f) {
  var v = -1, y = 44;
  do
    switch (Gv(y)) {
      case 0:
        y === 38 && Wo() === 12 && (f[v] = 1), s[v] += OA(Qa - 1, f, v);
        break;
      case 2:
        s[v] += hg(y);
        break;
      case 4:
        if (y === 44) {
          s[++v] = Wo() === 58 ? "&\f" : "", f[v] = s[v].length;
          break;
        }
      default:
        s[v] += jg(y);
    }
  while (y = di());
  return s;
}, _A = function(s, f) {
  return hw(DA(vw(s), f));
}, SR = /* @__PURE__ */ new WeakMap(), MA = function(s) {
  if (!(s.type !== "rule" || !s.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  s.length < 1)) {
    for (var f = s.value, v = s.parent, y = s.column === v.column && s.line === v.line; v.type !== "rule"; )
      if (v = v.parent, !v) return;
    if (!(s.props.length === 1 && f.charCodeAt(0) !== 58 && !SR.get(v)) && !y) {
      SR.set(s, !0);
      for (var S = [], m = _A(f, S), x = v.props, w = 0, D = 0; w < m.length; w++)
        for (var A = 0; A < x.length; A++, D++)
          s.props[D] = S[w] ? m[w].replace(/&\f/g, x[A]) : x[A] + " " + m[w];
    }
  }
}, NA = function(s) {
  if (s.type === "decl") {
    var f = s.value;
    // charcode for l
    f.charCodeAt(0) === 108 && // charcode for b
    f.charCodeAt(2) === 98 && (s.return = "", s.value = "");
  }
};
function mw(o, s) {
  switch (vA(o, s)) {
    case 5103:
      return It + "print-" + o + o;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return It + o + o;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return It + o + Eg + o + aa + o + o;
    case 6828:
    case 4268:
      return It + o + aa + o + o;
    case 6165:
      return It + o + aa + "flex-" + o + o;
    case 5187:
      return It + o + Wt(o, /(\w+).+(:[^]+)/, It + "box-$1$2" + aa + "flex-$1$2") + o;
    case 5443:
      return It + o + aa + "flex-item-" + Wt(o, /flex-|-self/, "") + o;
    case 4675:
      return It + o + aa + "flex-line-pack" + Wt(o, /align-content|flex-|-self/, "") + o;
    case 5548:
      return It + o + aa + Wt(o, "shrink", "negative") + o;
    case 5292:
      return It + o + aa + Wt(o, "basis", "preferred-size") + o;
    case 6060:
      return It + "box-" + Wt(o, "-grow", "") + It + o + aa + Wt(o, "grow", "positive") + o;
    case 4554:
      return It + Wt(o, /([^-])(transform)/g, "$1" + It + "$2") + o;
    case 6187:
      return Wt(Wt(Wt(o, /(zoom-|grab)/, It + "$1"), /(image-set)/, It + "$1"), o, "") + o;
    case 5495:
    case 3959:
      return Wt(o, /(image-set\([^]*)/, It + "$1$`$1");
    case 4968:
      return Wt(Wt(o, /(.+:)(flex-)?(.*)/, It + "box-pack:$3" + aa + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + It + o + o;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Wt(o, /(.+)-inline(.+)/, It + "$1$2") + o;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Bo(o) - 1 - s > 6) switch ($r(o, s + 1)) {
        case 109:
          if ($r(o, s + 4) !== 45) break;
        case 102:
          return Wt(o, /(.+:)(.+)-([^]+)/, "$1" + It + "$2-$3$1" + Eg + ($r(o, s + 3) == 108 ? "$3" : "$2-$3")) + o;
        case 115:
          return ~P1(o, "stretch") ? mw(Wt(o, "stretch", "fill-available"), s) + o : o;
      }
      break;
    case 4949:
      if ($r(o, s + 1) !== 115) break;
    case 6444:
      switch ($r(o, Bo(o) - 3 - (~P1(o, "!important") && 10))) {
        case 107:
          return Wt(o, ":", ":" + It) + o;
        case 101:
          return Wt(o, /(.+:)([^;!]+)(;|!.+)?/, "$1" + It + ($r(o, 14) === 45 ? "inline-" : "") + "box$3$1" + It + "$2$3$1" + aa + "$2box$3") + o;
      }
      break;
    case 5936:
      switch ($r(o, s + 11)) {
        case 114:
          return It + o + aa + Wt(o, /[svh]\w+-[tblr]{2}/, "tb") + o;
        case 108:
          return It + o + aa + Wt(o, /[svh]\w+-[tblr]{2}/, "tb-rl") + o;
        case 45:
          return It + o + aa + Wt(o, /[svh]\w+-[tblr]{2}/, "lr") + o;
      }
      return It + o + aa + o + o;
  }
  return o;
}
var AA = function(s, f, v, y) {
  if (s.length > -1 && !s.return) switch (s.type) {
    case aE:
      s.return = mw(s.value, s.length);
      break;
    case fw:
      return Ed([jv(s, {
        value: Wt(s.value, "@", "@" + It)
      })], y);
    case rE:
      if (s.length) return mA(s.props, function(S) {
        switch (hA(S, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Ed([jv(s, {
              props: [Wt(S, /:(read-\w+)/, ":" + Eg + "$1")]
            })], y);
          case "::placeholder":
            return Ed([jv(s, {
              props: [Wt(S, /:(plac\w+)/, ":" + It + "input-$1")]
            }), jv(s, {
              props: [Wt(S, /:(plac\w+)/, ":" + Eg + "$1")]
            }), jv(s, {
              props: [Wt(S, /:(plac\w+)/, aa + "input-$1")]
            })], y);
        }
        return "";
      });
  }
}, LA = [AA], zA = function(s) {
  var f = s.key;
  if (f === "css") {
    var v = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(v, function($) {
      var U = $.getAttribute("data-emotion");
      U.indexOf(" ") !== -1 && (document.head.appendChild($), $.setAttribute("data-s", ""));
    });
  }
  var y = s.stylisPlugins || LA, S = {}, m, x = [];
  m = s.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + f + ' "]'),
    function($) {
      for (var U = $.getAttribute("data-emotion").split(" "), ee = 1; ee < U.length; ee++)
        S[U[ee]] = !0;
      x.push($);
    }
  );
  var w, D = [MA, NA];
  {
    var A, _ = [RA, kA(function($) {
      A.insert($);
    })], N = wA(D.concat(y, _)), P = function(U) {
      return Ed(TA(U), N);
    };
    w = function(U, ee, ue, q) {
      A = ue, P(U ? U + "{" + ee.styles + "}" : ee.styles), q && (H.inserted[ee.name] = !0);
    };
  }
  var H = {
    key: f,
    sheet: new sA({
      key: f,
      container: m,
      nonce: s.nonce,
      speedy: s.speedy,
      prepend: s.prepend,
      insertionPoint: s.insertionPoint
    }),
    nonce: s.nonce,
    inserted: S,
    registered: {},
    insert: w
  };
  return H.sheet.hydrate(x), H;
}, yw = K1(), UA = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, PA = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, gw = {};
gw[yw.ForwardRef] = UA;
gw[yw.Memo] = PA;
var $A = !0;
function jA(o, s, f) {
  var v = "";
  return f.split(" ").forEach(function(y) {
    o[y] !== void 0 ? s.push(o[y] + ";") : y && (v += y + " ");
  }), v;
}
var Sw = function(s, f, v) {
  var y = s.key + "-" + f.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (v === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  $A === !1) && s.registered[y] === void 0 && (s.registered[y] = f.styles);
}, FA = function(s, f, v) {
  Sw(s, f, v);
  var y = s.key + "-" + f.name;
  if (s.inserted[f.name] === void 0) {
    var S = f;
    do
      s.insert(f === S ? "." + y : "", S, s.sheet, !0), S = S.next;
    while (S !== void 0);
  }
};
function BA(o) {
  for (var s = 0, f, v = 0, y = o.length; y >= 4; ++v, y -= 4)
    f = o.charCodeAt(v) & 255 | (o.charCodeAt(++v) & 255) << 8 | (o.charCodeAt(++v) & 255) << 16 | (o.charCodeAt(++v) & 255) << 24, f = /* Math.imul(k, m): */
    (f & 65535) * 1540483477 + ((f >>> 16) * 59797 << 16), f ^= /* k >>> r: */
    f >>> 24, s = /* Math.imul(k, m): */
    (f & 65535) * 1540483477 + ((f >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16);
  switch (y) {
    case 3:
      s ^= (o.charCodeAt(v + 2) & 255) << 16;
    case 2:
      s ^= (o.charCodeAt(v + 1) & 255) << 8;
    case 1:
      s ^= o.charCodeAt(v) & 255, s = /* Math.imul(h, m): */
      (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16);
  }
  return s ^= s >>> 13, s = /* Math.imul(h, m): */
  (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16), ((s ^ s >>> 15) >>> 0).toString(36);
}
var VA = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, HA = !1, IA = /[A-Z]|^ms/g, WA = /_EMO_([^_]+?)_([^]*?)_EMO_/g, bw = function(s) {
  return s.charCodeAt(1) === 45;
}, bR = function(s) {
  return s != null && typeof s != "boolean";
}, R1 = /* @__PURE__ */ sw(function(o) {
  return bw(o) ? o : o.replace(IA, "-$&").toLowerCase();
}), ER = function(s, f) {
  switch (s) {
    case "animation":
    case "animationName":
      if (typeof f == "string")
        return f.replace(WA, function(v, y, S) {
          return Vo = {
            name: y,
            styles: S,
            next: Vo
          }, y;
        });
  }
  return VA[s] !== 1 && !bw(s) && typeof f == "number" && f !== 0 ? f + "px" : f;
}, YA = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Qv(o, s, f) {
  if (f == null)
    return "";
  var v = f;
  if (v.__emotion_styles !== void 0)
    return v;
  switch (typeof f) {
    case "boolean":
      return "";
    case "object": {
      var y = f;
      if (y.anim === 1)
        return Vo = {
          name: y.name,
          styles: y.styles,
          next: Vo
        }, y.name;
      var S = f;
      if (S.styles !== void 0) {
        var m = S.next;
        if (m !== void 0)
          for (; m !== void 0; )
            Vo = {
              name: m.name,
              styles: m.styles,
              next: Vo
            }, m = m.next;
        var x = S.styles + ";";
        return x;
      }
      return GA(o, s, f);
    }
    case "function": {
      if (o !== void 0) {
        var w = Vo, D = f(o);
        return Vo = w, Qv(o, s, D);
      }
      break;
    }
  }
  var A = f;
  if (s == null)
    return A;
  var _ = s[A];
  return _ !== void 0 ? _ : A;
}
function GA(o, s, f) {
  var v = "";
  if (Array.isArray(f))
    for (var y = 0; y < f.length; y++)
      v += Qv(o, s, f[y]) + ";";
  else
    for (var S in f) {
      var m = f[S];
      if (typeof m != "object") {
        var x = m;
        s != null && s[x] !== void 0 ? v += S + "{" + s[x] + "}" : bR(x) && (v += R1(S) + ":" + ER(S, x) + ";");
      } else {
        if (S === "NO_COMPONENT_SELECTOR" && HA)
          throw new Error(YA);
        if (Array.isArray(m) && typeof m[0] == "string" && (s == null || s[m[0]] === void 0))
          for (var w = 0; w < m.length; w++)
            bR(m[w]) && (v += R1(S) + ":" + ER(S, m[w]) + ";");
        else {
          var D = Qv(o, s, m);
          switch (S) {
            case "animation":
            case "animationName": {
              v += R1(S) + ":" + D + ";";
              break;
            }
            default:
              v += S + "{" + D + "}";
          }
        }
      }
    }
  return v;
}
var CR = /label:\s*([^\s;{]+)\s*(;|$)/g, Vo;
function oE(o, s, f) {
  if (o.length === 1 && typeof o[0] == "object" && o[0] !== null && o[0].styles !== void 0)
    return o[0];
  var v = !0, y = "";
  Vo = void 0;
  var S = o[0];
  if (S == null || S.raw === void 0)
    v = !1, y += Qv(f, s, S);
  else {
    var m = S;
    y += m[0];
  }
  for (var x = 1; x < o.length; x++)
    if (y += Qv(f, s, o[x]), v) {
      var w = S;
      y += w[x];
    }
  CR.lastIndex = 0;
  for (var D = "", A; (A = CR.exec(y)) !== null; )
    D += "-" + A[1];
  var _ = BA(y) + D;
  return {
    name: _,
    styles: y,
    next: Vo
  };
}
var QA = function(s) {
  return s();
}, qA = me.useInsertionEffect ? me.useInsertionEffect : !1, KA = qA || QA, Ew = /* @__PURE__ */ me.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ zA({
    key: "css"
  }) : null
);
Ew.Provider;
var XA = function(s) {
  return /* @__PURE__ */ IN(function(f, v) {
    var y = WN(Ew);
    return s(f, y, v);
  });
}, Cw = /* @__PURE__ */ me.createContext({});
function ZA() {
  for (var o = arguments.length, s = new Array(o), f = 0; f < o; f++)
    s[f] = arguments[f];
  return oE(s);
}
var lE = function() {
  var s = ZA.apply(void 0, arguments), f = "animation-" + s.name;
  return {
    name: f,
    styles: "@keyframes " + f + "{" + s.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, JA = iA, eL = function(s) {
  return s !== "theme";
}, TR = function(s) {
  return typeof s == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  s.charCodeAt(0) > 96 ? JA : eL;
}, xR = function(s, f, v) {
  var y;
  if (f) {
    var S = f.shouldForwardProp;
    y = s.__emotion_forwardProp && S ? function(m) {
      return s.__emotion_forwardProp(m) && S(m);
    } : S;
  }
  return typeof y != "function" && v && (y = s.__emotion_forwardProp), y;
}, tL = !1, nL = function(s) {
  var f = s.cache, v = s.serialized, y = s.isStringTag;
  return Sw(f, v, y), KA(function() {
    return FA(f, v, y);
  }), null;
}, rL = function o(s, f) {
  var v = s.__emotion_real === s, y = v && s.__emotion_base || s, S, m;
  f !== void 0 && (S = f.label, m = f.target);
  var x = xR(s, f, v), w = x || TR(y), D = !w("as");
  return function() {
    var A = arguments, _ = v && s.__emotion_styles !== void 0 ? s.__emotion_styles.slice(0) : [];
    if (S !== void 0 && _.push("label:" + S + ";"), A[0] == null || A[0].raw === void 0)
      _.push.apply(_, A);
    else {
      _.push(A[0][0]);
      for (var N = A.length, P = 1; P < N; P++)
        _.push(A[P], A[0][P]);
    }
    var H = XA(function($, U, ee) {
      var ue = D && $.as || y, q = "", K = [], V = $;
      if ($.theme == null) {
        V = {};
        for (var le in $)
          V[le] = $[le];
        V.theme = me.useContext(Cw);
      }
      typeof $.className == "string" ? q = jA(U.registered, K, $.className) : $.className != null && (q = $.className + " ");
      var re = oE(_.concat(K), U.registered, V);
      q += U.key + "-" + re.name, m !== void 0 && (q += " " + m);
      var je = D && x === void 0 ? TR(ue) : w, Fe = {};
      for (var k in $)
        D && k === "as" || je(k) && (Fe[k] = $[k]);
      return Fe.className = q, ee && (Fe.ref = ee), /* @__PURE__ */ me.createElement(me.Fragment, null, /* @__PURE__ */ me.createElement(nL, {
        cache: U,
        serialized: re,
        isStringTag: typeof ue == "string"
      }), /* @__PURE__ */ me.createElement(ue, Fe));
    });
    return H.displayName = S !== void 0 ? S : "Styled(" + (typeof y == "string" ? y : y.displayName || y.name || "Component") + ")", H.defaultProps = s.defaultProps, H.__emotion_real = H, H.__emotion_base = y, H.__emotion_styles = _, H.__emotion_forwardProp = x, Object.defineProperty(H, "toString", {
      value: function() {
        return m === void 0 && tL ? "NO_COMPONENT_SELECTOR" : "." + m;
      }
    }), H.withComponent = function($, U) {
      return o($, bg({}, f, U, {
        shouldForwardProp: xR(H, U, !0)
      })).apply(void 0, _);
    }, H;
  };
}, aL = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], j1 = rL.bind();
aL.forEach(function(o) {
  j1[o] = j1(o);
});
/**
 * @mui/styled-engine v6.1.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function iL(o, s) {
  const f = j1(o, s);
  return process.env.NODE_ENV !== "production" ? (...v) => {
    const y = typeof o == "string" ? `"${o}"` : "component";
    return v.length === 0 ? console.error([`MUI: Seems like you called \`styled(${y})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : v.some((S) => S === void 0) && console.error(`MUI: the styled(${y})(...args) API requires all its args to be defined.`), f(...v);
  } : f;
}
function oL(o, s) {
  Array.isArray(o.__emotion_styles) && (o.__emotion_styles = s(o.__emotion_styles));
}
const RR = [];
function wR(o) {
  return RR[0] = o, oE(RR);
}
const lL = (o) => {
  const s = Object.keys(o).map((f) => ({
    key: f,
    val: o[f]
  })) || [];
  return s.sort((f, v) => f.val - v.val), s.reduce((f, v) => ({
    ...f,
    [v.key]: v.val
  }), {});
};
function uL(o) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: s = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: f = "px",
    step: v = 5,
    ...y
  } = o, S = lL(s), m = Object.keys(S);
  function x(N) {
    return `@media (min-width:${typeof s[N] == "number" ? s[N] : N}${f})`;
  }
  function w(N) {
    return `@media (max-width:${(typeof s[N] == "number" ? s[N] : N) - v / 100}${f})`;
  }
  function D(N, P) {
    const H = m.indexOf(P);
    return `@media (min-width:${typeof s[N] == "number" ? s[N] : N}${f}) and (max-width:${(H !== -1 && typeof s[m[H]] == "number" ? s[m[H]] : P) - v / 100}${f})`;
  }
  function A(N) {
    return m.indexOf(N) + 1 < m.length ? D(N, m[m.indexOf(N) + 1]) : x(N);
  }
  function _(N) {
    const P = m.indexOf(N);
    return P === 0 ? x(m[1]) : P === m.length - 1 ? w(m[P]) : D(N, m[m.indexOf(N) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: m,
    values: S,
    up: x,
    down: w,
    between: D,
    only: A,
    not: _,
    unit: f,
    ...y
  };
}
const sL = {
  borderRadius: 4
};
function Tw(o = 8, s = tE({
  spacing: o
})) {
  if (o.mui)
    return o;
  const f = (...v) => (process.env.NODE_ENV !== "production" && (v.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${v.length}`)), (v.length === 0 ? [1] : v).map((S) => {
    const m = s(S);
    return typeof m == "number" ? `${m}px` : m;
  }).join(" "));
  return f.mui = !0, f;
}
function cL(o, s) {
  var v;
  const f = this;
  if (f.vars) {
    if (!((v = f.colorSchemes) != null && v[o]) || typeof f.getColorSchemeSelector != "function")
      return {};
    let y = f.getColorSchemeSelector(o);
    return y === "&" ? s : ((y.includes("data-") || y.includes(".")) && (y = `*:where(${y.replace(/\s*&$/, "")}) &`), {
      [y]: s
    });
  }
  return f.palette.mode === o ? s : {};
}
function uE(o = {}, ...s) {
  const {
    breakpoints: f = {},
    palette: v = {},
    spacing: y,
    shape: S = {},
    ...m
  } = o, x = uL(f), w = Tw(y);
  let D = fi({
    breakpoints: x,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...v
    },
    spacing: w,
    shape: {
      ...sL,
      ...S
    }
  }, m);
  return D = d2(D), D.applyStyles = cL, D = s.reduce((A, _) => fi(A, _), D), D.unstable_sxConfig = {
    ...Jv,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, D.unstable_sx = function(_) {
    return Cd({
      sx: _,
      theme: this
    });
  }, D;
}
function fL(o) {
  return Object.keys(o).length === 0;
}
function dL(o = null) {
  const s = me.useContext(Cw);
  return !s || fL(s) ? o : s;
}
const pL = uE();
function vL(o = pL) {
  return dL(o);
}
const kR = (o) => o, hL = () => {
  let o = kR;
  return {
    configure(s) {
      o = s;
    },
    generate(s) {
      return o(s);
    },
    reset() {
      o = kR;
    }
  };
}, mL = hL(), yL = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function qa(o, s, f = "Mui") {
  const v = yL[s];
  return v ? `${f}-${v}` : `${mL.generate(o)}-${s}`;
}
function pi(o, s, f = "Mui") {
  const v = {};
  return s.forEach((y) => {
    v[y] = qa(o, y, f);
  }), v;
}
var F1 = { exports: {} }, Zt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var OR;
function gL() {
  if (OR) return Zt;
  OR = 1;
  var o = Symbol.for("react.element"), s = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), m = Symbol.for("react.context"), x = Symbol.for("react.server_context"), w = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), H;
  H = Symbol.for("react.module.reference");
  function $(U) {
    if (typeof U == "object" && U !== null) {
      var ee = U.$$typeof;
      switch (ee) {
        case o:
          switch (U = U.type, U) {
            case f:
            case y:
            case v:
            case D:
            case A:
              return U;
            default:
              switch (U = U && U.$$typeof, U) {
                case x:
                case m:
                case w:
                case N:
                case _:
                case S:
                  return U;
                default:
                  return ee;
              }
          }
        case s:
          return ee;
      }
    }
  }
  return Zt.ContextConsumer = m, Zt.ContextProvider = S, Zt.Element = o, Zt.ForwardRef = w, Zt.Fragment = f, Zt.Lazy = N, Zt.Memo = _, Zt.Portal = s, Zt.Profiler = y, Zt.StrictMode = v, Zt.Suspense = D, Zt.SuspenseList = A, Zt.isAsyncMode = function() {
    return !1;
  }, Zt.isConcurrentMode = function() {
    return !1;
  }, Zt.isContextConsumer = function(U) {
    return $(U) === m;
  }, Zt.isContextProvider = function(U) {
    return $(U) === S;
  }, Zt.isElement = function(U) {
    return typeof U == "object" && U !== null && U.$$typeof === o;
  }, Zt.isForwardRef = function(U) {
    return $(U) === w;
  }, Zt.isFragment = function(U) {
    return $(U) === f;
  }, Zt.isLazy = function(U) {
    return $(U) === N;
  }, Zt.isMemo = function(U) {
    return $(U) === _;
  }, Zt.isPortal = function(U) {
    return $(U) === s;
  }, Zt.isProfiler = function(U) {
    return $(U) === y;
  }, Zt.isStrictMode = function(U) {
    return $(U) === v;
  }, Zt.isSuspense = function(U) {
    return $(U) === D;
  }, Zt.isSuspenseList = function(U) {
    return $(U) === A;
  }, Zt.isValidElementType = function(U) {
    return typeof U == "string" || typeof U == "function" || U === f || U === y || U === v || U === D || U === A || U === P || typeof U == "object" && U !== null && (U.$$typeof === N || U.$$typeof === _ || U.$$typeof === S || U.$$typeof === m || U.$$typeof === w || U.$$typeof === H || U.getModuleId !== void 0);
  }, Zt.typeOf = $, Zt;
}
var Jt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var DR;
function SL() {
  return DR || (DR = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Symbol.for("react.element"), s = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), m = Symbol.for("react.context"), x = Symbol.for("react.server_context"), w = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), H = !1, $ = !1, U = !1, ee = !1, ue = !1, q;
    q = Symbol.for("react.module.reference");
    function K(Me) {
      return !!(typeof Me == "string" || typeof Me == "function" || Me === f || Me === y || ue || Me === v || Me === D || Me === A || ee || Me === P || H || $ || U || typeof Me == "object" && Me !== null && (Me.$$typeof === N || Me.$$typeof === _ || Me.$$typeof === S || Me.$$typeof === m || Me.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Me.$$typeof === q || Me.getModuleId !== void 0));
    }
    function V(Me) {
      if (typeof Me == "object" && Me !== null) {
        var Yt = Me.$$typeof;
        switch (Yt) {
          case o:
            var vn = Me.type;
            switch (vn) {
              case f:
              case y:
              case v:
              case D:
              case A:
                return vn;
              default:
                var On = vn && vn.$$typeof;
                switch (On) {
                  case x:
                  case m:
                  case w:
                  case N:
                  case _:
                  case S:
                    return On;
                  default:
                    return Yt;
                }
            }
          case s:
            return Yt;
        }
      }
    }
    var le = m, re = S, je = o, Fe = w, k = f, oe = N, Te = _, ve = s, Se = y, _e = v, Ce = D, ht = A, ce = !1, Ae = !1;
    function W(Me) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function se(Me) {
      return Ae || (Ae = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Oe(Me) {
      return V(Me) === m;
    }
    function Be(Me) {
      return V(Me) === S;
    }
    function xe(Me) {
      return typeof Me == "object" && Me !== null && Me.$$typeof === o;
    }
    function it(Me) {
      return V(Me) === w;
    }
    function Ve(Me) {
      return V(Me) === f;
    }
    function Je(Me) {
      return V(Me) === N;
    }
    function et(Me) {
      return V(Me) === _;
    }
    function st(Me) {
      return V(Me) === s;
    }
    function ct(Me) {
      return V(Me) === y;
    }
    function Dt(Me) {
      return V(Me) === v;
    }
    function be(Me) {
      return V(Me) === D;
    }
    function Rt(Me) {
      return V(Me) === A;
    }
    Jt.ContextConsumer = le, Jt.ContextProvider = re, Jt.Element = je, Jt.ForwardRef = Fe, Jt.Fragment = k, Jt.Lazy = oe, Jt.Memo = Te, Jt.Portal = ve, Jt.Profiler = Se, Jt.StrictMode = _e, Jt.Suspense = Ce, Jt.SuspenseList = ht, Jt.isAsyncMode = W, Jt.isConcurrentMode = se, Jt.isContextConsumer = Oe, Jt.isContextProvider = Be, Jt.isElement = xe, Jt.isForwardRef = it, Jt.isFragment = Ve, Jt.isLazy = Je, Jt.isMemo = et, Jt.isPortal = st, Jt.isProfiler = ct, Jt.isStrictMode = Dt, Jt.isSuspense = be, Jt.isSuspenseList = Rt, Jt.isValidElementType = K, Jt.typeOf = V;
  }()), Jt;
}
process.env.NODE_ENV === "production" ? F1.exports = gL() : F1.exports = SL();
var _R = F1.exports;
function xw(o, s = "") {
  return o.displayName || o.name || s;
}
function MR(o, s, f) {
  const v = xw(s);
  return o.displayName || (v !== "" ? `${f}(${v})` : f);
}
function bL(o) {
  if (o != null) {
    if (typeof o == "string")
      return o;
    if (typeof o == "function")
      return xw(o, "Component");
    if (typeof o == "object")
      switch (o.$$typeof) {
        case _R.ForwardRef:
          return MR(o, o.render, "ForwardRef");
        case _R.Memo:
          return MR(o, o.type, "memo");
        default:
          return;
      }
  }
}
function Rw(o) {
  const {
    variants: s,
    ...f
  } = o, v = {
    variants: s,
    style: wR(f),
    isProcessed: !0
  };
  return v.style === f || s && s.forEach((y) => {
    typeof y.style != "function" && (y.style = wR(y.style));
  }), v;
}
const EL = uE();
function w1(o) {
  return o !== "ownerState" && o !== "theme" && o !== "sx" && o !== "as";
}
function CL(o) {
  return o ? (s, f) => f[o] : null;
}
function TL(o, s, f) {
  o.theme = kL(o.theme) ? f : o.theme[s] || o.theme;
}
function yg(o, s) {
  const f = typeof s == "function" ? s(o) : s;
  if (Array.isArray(f))
    return f.flatMap((v) => yg(o, v));
  if (Array.isArray(f == null ? void 0 : f.variants)) {
    let v;
    if (f.isProcessed)
      v = f.style;
    else {
      const {
        variants: y,
        ...S
      } = f;
      v = S;
    }
    return ww(o, f.variants, [v]);
  }
  return f != null && f.isProcessed ? f.style : f;
}
function ww(o, s, f = []) {
  var y;
  let v;
  e: for (let S = 0; S < s.length; S += 1) {
    const m = s[S];
    if (typeof m.props == "function") {
      if (v ?? (v = {
        ...o,
        ...o.ownerState,
        ownerState: o.ownerState
      }), !m.props(v))
        continue;
    } else
      for (const x in m.props)
        if (o[x] !== m.props[x] && ((y = o.ownerState) == null ? void 0 : y[x]) !== m.props[x])
          continue e;
    typeof m.style == "function" ? (v ?? (v = {
      ...o,
      ...o.ownerState,
      ownerState: o.ownerState
    }), f.push(m.style(v))) : f.push(m.style);
  }
  return f;
}
function xL(o = {}) {
  const {
    themeId: s,
    defaultTheme: f = EL,
    rootShouldForwardProp: v = w1,
    slotShouldForwardProp: y = w1
  } = o;
  function S(x) {
    TL(x, s, f);
  }
  return (x, w = {}) => {
    oL(x, (V) => V.filter((le) => le !== Cd));
    const {
      name: D,
      slot: A,
      skipVariantsResolver: _,
      skipSx: N,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: P = CL(kw(A)),
      ...H
    } = w, $ = _ !== void 0 ? _ : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      A && A !== "Root" && A !== "root" || !1
    ), U = N || !1;
    let ee = w1;
    A === "Root" || A === "root" ? ee = v : A ? ee = y : OL(x) && (ee = void 0);
    const ue = iL(x, {
      shouldForwardProp: ee,
      label: wL(D, A),
      ...H
    }), q = (V) => {
      if (typeof V == "function" && V.__emotion_real !== V)
        return function(re) {
          return yg(re, V);
        };
      if (Io(V)) {
        const le = Rw(V);
        return le.variants ? function(je) {
          return yg(je, le);
        } : le.style;
      }
      return V;
    }, K = (...V) => {
      const le = [], re = V.map(q), je = [];
      if (le.push(S), D && P && je.push(function(Te) {
        var Ce, ht;
        const Se = (ht = (Ce = Te.theme.components) == null ? void 0 : Ce[D]) == null ? void 0 : ht.styleOverrides;
        if (!Se)
          return null;
        const _e = {};
        for (const ce in Se)
          _e[ce] = yg(Te, Se[ce]);
        return P(Te, _e);
      }), D && !$ && je.push(function(Te) {
        var _e, Ce;
        const ve = Te.theme, Se = (Ce = (_e = ve == null ? void 0 : ve.components) == null ? void 0 : _e[D]) == null ? void 0 : Ce.variants;
        return Se ? ww(Te, Se) : null;
      }), U || je.push(Cd), Array.isArray(re[0])) {
        const oe = re.shift(), Te = new Array(le.length).fill(""), ve = new Array(je.length).fill("");
        let Se;
        Se = [...Te, ...oe, ...ve], Se.raw = [...Te, ...oe.raw, ...ve], le.unshift(Se);
      }
      const Fe = [...le, ...re, ...je], k = ue(...Fe);
      return x.muiName && (k.muiName = x.muiName), process.env.NODE_ENV !== "production" && (k.displayName = RL(D, A, x)), k;
    };
    return ue.withConfig && (K.withConfig = ue.withConfig), K;
  };
}
function RL(o, s, f) {
  return o ? `${o}${Pt(s || "")}` : `Styled(${bL(f)})`;
}
function wL(o, s) {
  let f;
  return process.env.NODE_ENV !== "production" && o && (f = `${o}-${kw(s || "Root")}`), f;
}
function kL(o) {
  for (const s in o)
    return !1;
  return !0;
}
function OL(o) {
  return typeof o == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  o.charCodeAt(0) > 96;
}
function kw(o) {
  return o && o.charAt(0).toLowerCase() + o.slice(1);
}
const B1 = typeof window < "u" ? me.useLayoutEffect : me.useEffect;
function th(o, s) {
  return process.env.NODE_ENV === "production" ? () => null : function(...v) {
    return o(...v) || s(...v);
  };
}
function DL(o) {
  const {
    prototype: s = {}
  } = o;
  return !!s.isReactComponent;
}
function Ow(o, s, f, v, y) {
  const S = o[s], m = y || s;
  if (S == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let x;
  const w = S.type;
  return typeof w == "function" && !DL(w) && (x = "Did you accidentally use a plain function component for an element instead?"), x !== void 0 ? new Error(`Invalid ${v} \`${m}\` supplied to \`${f}\`. Expected an element that can hold a ref. ${x} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Vg = th(C.element, Ow);
Vg.isRequired = th(C.element.isRequired, Ow);
function _L(o) {
  const {
    prototype: s = {}
  } = o;
  return !!s.isReactComponent;
}
function ML(o, s, f, v, y) {
  const S = o[s], m = y || s;
  if (S == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let x;
  return typeof S == "function" && !_L(S) && (x = "Did you accidentally provide a plain function component instead?"), x !== void 0 ? new Error(`Invalid ${v} \`${m}\` supplied to \`${f}\`. Expected an element type that can hold a ref. ${x} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const NL = th(C.elementType, ML), AL = "exact-prop: ​";
function Dw(o) {
  return process.env.NODE_ENV === "production" ? o : {
    ...o,
    [AL]: (s) => {
      const f = Object.keys(s).filter((v) => !o.hasOwnProperty(v));
      return f.length > 0 ? new Error(`The following props are not supported: ${f.map((v) => `\`${v}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function _w(o, s, f, v, y) {
  if (process.env.NODE_ENV === "production")
    return null;
  const S = o[s], m = y || s;
  return S == null ? null : S && S.nodeType !== 1 ? new Error(`Invalid ${v} \`${m}\` supplied to \`${f}\`. Expected an HTMLElement.`) : null;
}
const LL = C.oneOfType([C.func, C.object]);
function NR(...o) {
  return o.reduce((s, f) => f == null ? s : function(...y) {
    s.apply(this, y), f.apply(this, y);
  }, () => {
  });
}
function dc(o) {
  return o && o.ownerDocument || document;
}
function Cg(o) {
  return dc(o).defaultView || window;
}
function V1(o, s) {
  typeof o == "function" ? o(s) : o && (o.current = s);
}
let AR = 0;
function zL(o) {
  const [s, f] = me.useState(o), v = o || s;
  return me.useEffect(() => {
    s == null && (AR += 1, f(`mui-${AR}`));
  }, [s]), v;
}
const UL = {
  ...me
}, LR = UL.useId;
function PL(o) {
  if (LR !== void 0) {
    const s = LR();
    return o ?? s;
  }
  return zL(o);
}
function Sd(o) {
  const s = me.useRef(o);
  return B1(() => {
    s.current = o;
  }), me.useRef((...f) => (
    // @ts-expect-error hide `this`
    (0, s.current)(...f)
  )).current;
}
function Ku(...o) {
  return me.useMemo(() => o.every((s) => s == null) ? null : (s) => {
    o.forEach((f) => {
      V1(f, s);
    });
  }, o);
}
const zR = {};
function Mw(o, s) {
  const f = me.useRef(zR);
  return f.current === zR && (f.current = o(s)), f;
}
const $L = [];
function jL(o) {
  me.useEffect(o, $L);
}
class sE {
  constructor() {
    Uv(this, "currentId", null);
    Uv(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Uv(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new sE();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(s, f) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, f();
    }, s);
  }
}
function FL() {
  const o = Mw(sE.create).current;
  return jL(o.disposeEffect), o;
}
function UR(o) {
  try {
    return o.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function BL(o = window) {
  const s = o.document.documentElement.clientWidth;
  return o.innerWidth - s;
}
function VL(o) {
  const s = typeof o;
  switch (s) {
    case "number":
      return Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? o !== Math.floor(o) ? "float" : "number" : "Infinity";
    case "object":
      return o === null ? "null" : o.constructor.name;
    default:
      return s;
  }
}
function Nw(o, s, f, v) {
  const y = o[s];
  if (y == null || !Number.isInteger(y)) {
    const S = VL(y);
    return new RangeError(`Invalid ${v} \`${s}\` of type \`${S}\` supplied to \`${f}\`, expected \`integer\`.`);
  }
  return null;
}
function Aw(o, s, ...f) {
  return o[s] === void 0 ? null : Nw(o, s, ...f);
}
function H1() {
  return null;
}
Aw.isRequired = Nw;
H1.isRequired = H1;
const HL = process.env.NODE_ENV === "production" ? H1 : Aw;
function IL(o) {
  return typeof o == "string";
}
function WL(o, s, f) {
  return o === void 0 || IL(o) ? s : {
    ...s,
    ownerState: {
      ...s.ownerState,
      ...f
    }
  };
}
function Lw(o, s = []) {
  if (o === void 0)
    return {};
  const f = {};
  return Object.keys(o).filter((v) => v.match(/^on[A-Z]/) && typeof o[v] == "function" && !s.includes(v)).forEach((v) => {
    f[v] = o[v];
  }), f;
}
function PR(o) {
  if (o === void 0)
    return {};
  const s = {};
  return Object.keys(o).filter((f) => !(f.match(/^on[A-Z]/) && typeof o[f] == "function")).forEach((f) => {
    s[f] = o[f];
  }), s;
}
function YL(o) {
  const {
    getSlotProps: s,
    additionalProps: f,
    externalSlotProps: v,
    externalForwardedProps: y,
    className: S
  } = o;
  if (!s) {
    const P = pn(f == null ? void 0 : f.className, S, y == null ? void 0 : y.className, v == null ? void 0 : v.className), H = {
      ...f == null ? void 0 : f.style,
      ...y == null ? void 0 : y.style,
      ...v == null ? void 0 : v.style
    }, $ = {
      ...f,
      ...y,
      ...v
    };
    return P.length > 0 && ($.className = P), Object.keys(H).length > 0 && ($.style = H), {
      props: $,
      internalRef: void 0
    };
  }
  const m = Lw({
    ...y,
    ...v
  }), x = PR(v), w = PR(y), D = s(m), A = pn(D == null ? void 0 : D.className, f == null ? void 0 : f.className, S, y == null ? void 0 : y.className, v == null ? void 0 : v.className), _ = {
    ...D == null ? void 0 : D.style,
    ...f == null ? void 0 : f.style,
    ...y == null ? void 0 : y.style,
    ...v == null ? void 0 : v.style
  }, N = {
    ...D,
    ...f,
    ...w,
    ...x
  };
  return A.length > 0 && (N.className = A), Object.keys(_).length > 0 && (N.style = _), {
    props: N,
    internalRef: D.ref
  };
}
function GL(o, s, f) {
  return typeof o == "function" ? o(s, f) : o;
}
function cE(o) {
  var s;
  return parseInt(me.version, 10) >= 19 ? ((s = o == null ? void 0 : o.props) == null ? void 0 : s.ref) || null : (o == null ? void 0 : o.ref) || null;
}
const QL = /* @__PURE__ */ me.createContext(void 0);
process.env.NODE_ENV !== "production" && (C.node, C.object);
function qL(o) {
  const {
    theme: s,
    name: f,
    props: v
  } = o;
  if (!s || !s.components || !s.components[f])
    return v;
  const y = s.components[f];
  return y.defaultProps ? gg(y.defaultProps, v) : !y.styleOverrides && !y.variants ? gg(y, v) : v;
}
function KL({
  props: o,
  name: s
}) {
  const f = me.useContext(QL);
  return qL({
    props: o,
    name: s,
    theme: {
      components: f
    }
  });
}
const $R = {
  theme: void 0
};
function XL(o) {
  let s, f;
  return function(y) {
    let S = s;
    return (S === void 0 || y.theme !== f) && ($R.theme = y.theme, S = Rw(o($R)), s = S, f = y.theme), S;
  };
}
function ZL(o = "") {
  function s(...v) {
    if (!v.length)
      return "";
    const y = v[0];
    return typeof y == "string" && !y.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${o ? `${o}-` : ""}${y}${s(...v.slice(1))})` : `, ${y}`;
  }
  return (v, ...y) => `var(--${o ? `${o}-` : ""}${v}${s(...y)})`;
}
const jR = (o, s, f, v = []) => {
  let y = o;
  s.forEach((S, m) => {
    m === s.length - 1 ? Array.isArray(y) ? y[Number(S)] = f : y && typeof y == "object" && (y[S] = f) : y && typeof y == "object" && (y[S] || (y[S] = v.includes(S) ? [] : {}), y = y[S]);
  });
}, JL = (o, s, f) => {
  function v(y, S = [], m = []) {
    Object.entries(y).forEach(([x, w]) => {
      (!f || f && !f([...S, x])) && w != null && (typeof w == "object" && Object.keys(w).length > 0 ? v(w, [...S, x], Array.isArray(w) ? [...m, x] : m) : s([...S, x], w, m));
    });
  }
  v(o);
}, ez = (o, s) => typeof s == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((v) => o.includes(v)) || o[o.length - 1].toLowerCase().includes("opacity") ? s : `${s}px` : s;
function k1(o, s) {
  const {
    prefix: f,
    shouldSkipGeneratingVar: v
  } = s || {}, y = {}, S = {}, m = {};
  return JL(
    o,
    (x, w, D) => {
      if ((typeof w == "string" || typeof w == "number") && (!v || !v(x, w))) {
        const A = `--${f ? `${f}-` : ""}${x.join("-")}`, _ = ez(x, w);
        Object.assign(y, {
          [A]: _
        }), jR(S, x, `var(${A})`, D), jR(m, x, `var(${A}, ${_})`, D);
      }
    },
    (x) => x[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: y,
    vars: S,
    varsWithDefaults: m
  };
}
function tz(o, s = {}) {
  const {
    getSelector: f = U,
    disableCssColorScheme: v,
    colorSchemeSelector: y
  } = s, {
    colorSchemes: S = {},
    components: m,
    defaultColorScheme: x = "light",
    ...w
  } = o, {
    vars: D,
    css: A,
    varsWithDefaults: _
  } = k1(w, s);
  let N = _;
  const P = {}, {
    [x]: H,
    ...$
  } = S;
  if (Object.entries($ || {}).forEach(([q, K]) => {
    const {
      vars: V,
      css: le,
      varsWithDefaults: re
    } = k1(K, s);
    N = fi(N, re), P[q] = {
      css: le,
      vars: V
    };
  }), H) {
    const {
      css: q,
      vars: K,
      varsWithDefaults: V
    } = k1(H, s);
    N = fi(N, V), P[x] = {
      css: q,
      vars: K
    };
  }
  function U(q, K) {
    var le, re;
    let V = y;
    if (y === "class" && (V = ".%s"), y === "data" && (V = "[data-%s]"), y != null && y.startsWith("data-") && !y.includes("%s") && (V = `[${y}="%s"]`), q) {
      if (V === "media")
        return o.defaultColorScheme === q ? ":root" : {
          [`@media (prefers-color-scheme: ${((re = (le = S[q]) == null ? void 0 : le.palette) == null ? void 0 : re.mode) || q})`]: {
            ":root": K
          }
        };
      if (V)
        return o.defaultColorScheme === q ? `:root, ${V.replace("%s", String(q))}` : V.replace("%s", String(q));
    }
    return ":root";
  }
  return {
    vars: N,
    generateThemeVars: () => {
      let q = {
        ...D
      };
      return Object.entries(P).forEach(([, {
        vars: K
      }]) => {
        q = fi(q, K);
      }), q;
    },
    generateStyleSheets: () => {
      var je, Fe;
      const q = [], K = o.defaultColorScheme || "light";
      function V(k, oe) {
        Object.keys(oe).length && q.push(typeof k == "string" ? {
          [k]: {
            ...oe
          }
        } : k);
      }
      V(f(void 0, {
        ...A
      }), A);
      const {
        [K]: le,
        ...re
      } = P;
      if (le) {
        const {
          css: k
        } = le, oe = (Fe = (je = S[K]) == null ? void 0 : je.palette) == null ? void 0 : Fe.mode, Te = !v && oe ? {
          colorScheme: oe,
          ...k
        } : {
          ...k
        };
        V(f(K, {
          ...Te
        }), Te);
      }
      return Object.entries(re).forEach(([k, {
        css: oe
      }]) => {
        var Se, _e;
        const Te = (_e = (Se = S[k]) == null ? void 0 : Se.palette) == null ? void 0 : _e.mode, ve = !v && Te ? {
          colorScheme: Te,
          ...oe
        } : {
          ...oe
        };
        V(f(k, {
          ...ve
        }), ve);
      }), q;
    }
  };
}
function nz(o) {
  return function(f) {
    return o === "media" ? (process.env.NODE_ENV !== "production" && f !== "light" && f !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${f}'.`), `@media (prefers-color-scheme: ${f})`) : o ? o.startsWith("data-") && !o.includes("%s") ? `[${o}="${f}"] &` : o === "class" ? `.${f} &` : o === "data" ? `[data-${f}] &` : `${o.replace("%s", f)} &` : "&";
  };
}
const qv = {
  black: "#000",
  white: "#fff"
}, rz = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, fd = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, dd = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Fv = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, pd = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, vd = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, hd = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, FR = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: qv.white,
    default: qv.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, O1 = {
  text: {
    primary: qv.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: qv.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function BR(o, s, f, v) {
  const y = v.light || v, S = v.dark || v * 1.5;
  o[s] || (o.hasOwnProperty(f) ? o[s] = o[f] : s === "light" ? o.light = eE(o.main, y) : s === "dark" && (o.dark = J1(o.main, S)));
}
function az(o = "light") {
  return o === "dark" ? {
    main: pd[200],
    light: pd[50],
    dark: pd[400]
  } : {
    main: pd[700],
    light: pd[400],
    dark: pd[800]
  };
}
function iz(o = "light") {
  return o === "dark" ? {
    main: fd[200],
    light: fd[50],
    dark: fd[400]
  } : {
    main: fd[500],
    light: fd[300],
    dark: fd[700]
  };
}
function oz(o = "light") {
  return o === "dark" ? {
    main: dd[500],
    light: dd[300],
    dark: dd[700]
  } : {
    main: dd[700],
    light: dd[400],
    dark: dd[800]
  };
}
function lz(o = "light") {
  return o === "dark" ? {
    main: vd[400],
    light: vd[300],
    dark: vd[700]
  } : {
    main: vd[700],
    light: vd[500],
    dark: vd[900]
  };
}
function uz(o = "light") {
  return o === "dark" ? {
    main: hd[400],
    light: hd[300],
    dark: hd[700]
  } : {
    main: hd[800],
    light: hd[500],
    dark: hd[900]
  };
}
function sz(o = "light") {
  return o === "dark" ? {
    main: Fv[400],
    light: Fv[300],
    dark: Fv[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Fv[500],
    dark: Fv[900]
  };
}
function fE(o) {
  const {
    mode: s = "light",
    contrastThreshold: f = 3,
    tonalOffset: v = 0.2,
    ...y
  } = o, S = o.primary || az(s), m = o.secondary || iz(s), x = o.error || oz(s), w = o.info || lz(s), D = o.success || uz(s), A = o.warning || sz(s);
  function _($) {
    const U = vR($, O1.text.primary) >= f ? O1.text.primary : FR.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const ee = vR($, U);
      ee < 3 && console.error([`MUI: The contrast ratio of ${ee}:1 for ${U} on ${$}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return U;
  }
  const N = ({
    color: $,
    name: U,
    mainShade: ee = 500,
    lightShade: ue = 300,
    darkShade: q = 700
  }) => {
    if ($ = {
      ...$
    }, !$.main && $[ee] && ($.main = $[ee]), !$.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${U ? ` (${U})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${ee}\` property.` : Qu(11, U ? ` (${U})` : "", ee));
    if (typeof $.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${U ? ` (${U})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify($.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Qu(12, U ? ` (${U})` : "", JSON.stringify($.main)));
    return BR($, "light", ue, v), BR($, "dark", q, v), $.contrastText || ($.contrastText = _($.main)), $;
  }, P = {
    dark: O1,
    light: FR
  };
  return process.env.NODE_ENV !== "production" && (P[s] || console.error(`MUI: The palette mode \`${s}\` is not supported.`)), fi({
    // A collection of common colors.
    common: {
      ...qv
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: s,
    // The colors used to represent primary interface elements for a user.
    primary: N({
      color: S,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: N({
      color: m,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: N({
      color: x,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: N({
      color: A,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: N({
      color: w,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: N({
      color: D,
      name: "success"
    }),
    // The grey colors.
    grey: rz,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: f,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: _,
    // Generate a rich color object.
    augmentColor: N,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: v,
    // The light and dark mode object.
    ...P[s]
  }, y);
}
function cz(o) {
  const s = {};
  return Object.entries(o).forEach((v) => {
    const [y, S] = v;
    typeof S == "object" && (s[y] = `${S.fontStyle ? `${S.fontStyle} ` : ""}${S.fontVariant ? `${S.fontVariant} ` : ""}${S.fontWeight ? `${S.fontWeight} ` : ""}${S.fontStretch ? `${S.fontStretch} ` : ""}${S.fontSize || ""}${S.lineHeight ? `/${S.lineHeight} ` : ""}${S.fontFamily || ""}`);
  }), s;
}
function fz(o, s) {
  return {
    toolbar: {
      minHeight: 56,
      [o.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [o.up("sm")]: {
        minHeight: 64
      }
    },
    ...s
  };
}
function dz(o) {
  return Math.round(o * 1e5) / 1e5;
}
const VR = {
  textTransform: "uppercase"
}, HR = '"Roboto", "Helvetica", "Arial", sans-serif';
function pz(o, s) {
  const {
    fontFamily: f = HR,
    // The default font size of the Material Specification.
    fontSize: v = 14,
    // px
    fontWeightLight: y = 300,
    fontWeightRegular: S = 400,
    fontWeightMedium: m = 500,
    fontWeightBold: x = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: w = 16,
    // Apply the CSS properties to all the variants.
    allVariants: D,
    pxToRem: A,
    ..._
  } = typeof s == "function" ? s(o) : s;
  process.env.NODE_ENV !== "production" && (typeof v != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof w != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const N = v / 14, P = A || ((U) => `${U / w * N}rem`), H = (U, ee, ue, q, K) => ({
    fontFamily: f,
    fontWeight: U,
    fontSize: P(ee),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: ue,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...f === HR ? {
      letterSpacing: `${dz(q / ee)}em`
    } : {},
    ...K,
    ...D
  }), $ = {
    h1: H(y, 96, 1.167, -1.5),
    h2: H(y, 60, 1.2, -0.5),
    h3: H(S, 48, 1.167, 0),
    h4: H(S, 34, 1.235, 0.25),
    h5: H(S, 24, 1.334, 0),
    h6: H(m, 20, 1.6, 0.15),
    subtitle1: H(S, 16, 1.75, 0.15),
    subtitle2: H(m, 14, 1.57, 0.1),
    body1: H(S, 16, 1.5, 0.15),
    body2: H(S, 14, 1.43, 0.15),
    button: H(m, 14, 1.75, 0.4, VR),
    caption: H(S, 12, 1.66, 0.4),
    overline: H(S, 12, 2.66, 1, VR),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return fi({
    htmlFontSize: w,
    pxToRem: P,
    fontFamily: f,
    fontSize: v,
    fontWeightLight: y,
    fontWeightRegular: S,
    fontWeightMedium: m,
    fontWeightBold: x,
    ...$
  }, _, {
    clone: !1
    // No need to clone deep
  });
}
const vz = 0.2, hz = 0.14, mz = 0.12;
function kn(...o) {
  return [`${o[0]}px ${o[1]}px ${o[2]}px ${o[3]}px rgba(0,0,0,${vz})`, `${o[4]}px ${o[5]}px ${o[6]}px ${o[7]}px rgba(0,0,0,${hz})`, `${o[8]}px ${o[9]}px ${o[10]}px ${o[11]}px rgba(0,0,0,${mz})`].join(",");
}
const yz = ["none", kn(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), kn(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), kn(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), kn(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), kn(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), kn(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), kn(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), kn(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), kn(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), kn(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), kn(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), kn(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), kn(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), kn(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), kn(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), kn(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), kn(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), kn(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), kn(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), kn(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), kn(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), kn(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), kn(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), kn(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], gz = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Sz = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function IR(o) {
  return `${Math.round(o)}ms`;
}
function bz(o) {
  if (!o)
    return 0;
  const s = o / 36;
  return Math.min(Math.round((4 + 15 * s ** 0.25 + s / 5) * 10), 3e3);
}
function Ez(o) {
  const s = {
    ...gz,
    ...o.easing
  }, f = {
    ...Sz,
    ...o.duration
  };
  return {
    getAutoHeightDuration: bz,
    create: (y = ["all"], S = {}) => {
      const {
        duration: m = f.standard,
        easing: x = s.easeInOut,
        delay: w = 0,
        ...D
      } = S;
      if (process.env.NODE_ENV !== "production") {
        const A = (N) => typeof N == "string", _ = (N) => !Number.isNaN(parseFloat(N));
        !A(y) && !Array.isArray(y) && console.error('MUI: Argument "props" must be a string or Array.'), !_(m) && !A(m) && console.error(`MUI: Argument "duration" must be a number or a string but found ${m}.`), A(x) || console.error('MUI: Argument "easing" must be a string.'), !_(w) && !A(w) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof S != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(D).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(D).join(",")}].`);
      }
      return (Array.isArray(y) ? y : [y]).map((A) => `${A} ${typeof m == "string" ? m : IR(m)} ${x} ${typeof w == "string" ? w : IR(w)}`).join(",");
    },
    ...o,
    easing: s,
    duration: f
  };
}
const Cz = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function I1(o = {}, ...s) {
  const {
    breakpoints: f,
    mixins: v = {},
    spacing: y,
    palette: S = {},
    transitions: m = {},
    typography: x = {},
    shape: w,
    ...D
  } = o;
  if (o.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Qu(20));
  const A = fE(S), _ = uE(o);
  let N = fi(_, {
    mixins: fz(_.breakpoints, v),
    palette: A,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: yz.slice(),
    typography: pz(A, x),
    transitions: Ez(m),
    zIndex: {
      ...Cz
    }
  });
  if (N = fi(N, D), N = s.reduce((P, H) => fi(P, H), N), process.env.NODE_ENV !== "production") {
    const P = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], H = ($, U) => {
      let ee;
      for (ee in $) {
        const ue = $[ee];
        if (P.includes(ee) && Object.keys(ue).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const q = qa("", ee);
            console.error([`MUI: The \`${U}\` component increases the CSS specificity of the \`${ee}\` internal state.`, "You can not override it like this: ", JSON.stringify($, null, 2), "", `Instead, you need to use the '&.${q}' syntax:`, JSON.stringify({
              root: {
                [`&.${q}`]: ue
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          $[ee] = {};
        }
      }
    };
    Object.keys(N.components).forEach(($) => {
      const U = N.components[$].styleOverrides;
      U && $.startsWith("Mui") && H(U, $);
    });
  }
  return N.unstable_sxConfig = {
    ...Jv,
    ...D == null ? void 0 : D.unstable_sxConfig
  }, N.unstable_sx = function(H) {
    return Cd({
      sx: H,
      theme: this
    });
  }, N;
}
function W1(o) {
  let s;
  return o < 1 ? s = 5.11916 * o ** 2 : s = 4.5 * Math.log(o + 1) + 2, Math.round(s * 10) / 1e3;
}
const Tz = [...Array(25)].map((o, s) => {
  if (s === 0)
    return "none";
  const f = W1(s);
  return `linear-gradient(rgba(255 255 255 / ${f}), rgba(255 255 255 / ${f}))`;
});
function zw(o) {
  return {
    inputPlaceholder: o === "dark" ? 0.5 : 0.42,
    inputUnderline: o === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: o === "dark" ? 0.2 : 0.12,
    switchTrack: o === "dark" ? 0.3 : 0.38
  };
}
function Uw(o) {
  return o === "dark" ? Tz : [];
}
function xz(o) {
  const {
    palette: s = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: f,
    overlays: v,
    ...y
  } = o, S = fE(s);
  return {
    palette: S,
    opacity: {
      ...zw(S.mode),
      ...f
    },
    overlays: v || Uw(S.mode),
    ...y
  };
}
function Rz(o) {
  var s;
  return !!o[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!o[0].match(/sxConfig$/) || // ends with sxConfig
  o[0] === "palette" && !!((s = o[1]) != null && s.match(/(mode|contrastThreshold|tonalOffset)/));
}
const wz = (o) => [...[...Array(25)].map((s, f) => `--${o ? `${o}-` : ""}overlays-${f}`), `--${o ? `${o}-` : ""}palette-AppBar-darkBg`, `--${o ? `${o}-` : ""}palette-AppBar-darkColor`], kz = (o) => (s, f) => {
  const v = o.rootSelector || ":root", y = o.colorSchemeSelector;
  let S = y;
  if (y === "class" && (S = ".%s"), y === "data" && (S = "[data-%s]"), y != null && y.startsWith("data-") && !y.includes("%s") && (S = `[${y}="%s"]`), o.defaultColorScheme === s) {
    if (s === "dark") {
      const m = {};
      return wz(o.cssVarPrefix).forEach((x) => {
        m[x] = f[x], delete f[x];
      }), S === "media" ? {
        [v]: f,
        "@media (prefers-color-scheme: dark)": {
          [v]: m
        }
      } : S ? {
        [S.replace("%s", s)]: m,
        [`${v}, ${S.replace("%s", s)}`]: f
      } : {
        [v]: {
          ...f,
          ...m
        }
      };
    }
    if (S && S !== "media")
      return `${v}, ${S.replace("%s", String(s))}`;
  } else if (s) {
    if (S === "media")
      return {
        [`@media (prefers-color-scheme: ${String(s)})`]: {
          [v]: f
        }
      };
    if (S)
      return S.replace("%s", String(s));
  }
  return v;
};
function Oz(o) {
  return Io(o) || typeof o > "u" || typeof o == "string" || typeof o == "boolean" || typeof o == "number" || Array.isArray(o);
}
function Dz(o = {}) {
  const s = {
    ...o
  };
  function f(v) {
    const y = Object.entries(v);
    for (let S = 0; S < y.length; S++) {
      const [m, x] = y[S];
      !Oz(x) || m.startsWith("unstable_") ? delete v[m] : Io(x) && (v[m] = {
        ...x
      }, f(v[m]));
    }
  }
  return f(s), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(s, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function _z(o, s) {
  s.forEach((f) => {
    o[f] || (o[f] = {});
  });
}
function ae(o, s, f) {
  !o[s] && f && (o[s] = f);
}
function Vv(o) {
  return !o || !o.startsWith("hsl") ? o : iw(o);
}
function zl(o, s) {
  `${s}Channel` in o || (o[`${s}Channel`] = Bv(Vv(o[s]), `MUI: Can't create \`palette.${s}Channel\` because \`palette.${s}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${s}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Mz(o) {
  return typeof o == "number" ? `${o}px` : typeof o == "string" || typeof o == "function" || Array.isArray(o) ? o : "8px";
}
const Fo = (o) => {
  try {
    return o();
  } catch {
  }
}, Nz = (o = "mui") => ZL(o);
function D1(o, s, f, v) {
  if (!s)
    return;
  s = s === !0 ? {} : s;
  const y = v === "dark" ? "dark" : "light";
  if (!f) {
    o[v] = xz({
      ...s,
      palette: {
        mode: y,
        ...s == null ? void 0 : s.palette
      }
    });
    return;
  }
  const {
    palette: S,
    ...m
  } = I1({
    ...f,
    palette: {
      mode: y,
      ...s == null ? void 0 : s.palette
    }
  });
  return o[v] = {
    ...s,
    palette: S,
    opacity: {
      ...zw(y),
      ...s == null ? void 0 : s.opacity
    },
    overlays: (s == null ? void 0 : s.overlays) || Uw(y)
  }, m;
}
function Az(o = {}, ...s) {
  const {
    colorSchemes: f = {
      light: !0
    },
    defaultColorScheme: v,
    disableCssColorScheme: y = !1,
    cssVarPrefix: S = "mui",
    shouldSkipGeneratingVar: m = Rz,
    colorSchemeSelector: x = f.light && f.dark ? "media" : void 0,
    rootSelector: w = ":root",
    ...D
  } = o, A = Object.keys(f)[0], _ = v || (f.light && A !== "light" ? "light" : A), N = Nz(S), {
    [_]: P,
    light: H,
    dark: $,
    ...U
  } = f, ee = {
    ...U
  };
  let ue = P;
  if ((_ === "dark" && !("dark" in f) || _ === "light" && !("light" in f)) && (ue = !0), !ue)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${_}\` option is either missing or invalid.` : Qu(21, _));
  const q = D1(ee, ue, D, _);
  H && !ee.light && D1(ee, H, void 0, "light"), $ && !ee.dark && D1(ee, $, void 0, "dark");
  let K = {
    defaultColorScheme: _,
    ...q,
    cssVarPrefix: S,
    colorSchemeSelector: x,
    rootSelector: w,
    getCssVar: N,
    colorSchemes: ee,
    font: {
      ...cz(q.typography),
      ...q.font
    },
    spacing: Mz(D.spacing)
  };
  Object.keys(K.colorSchemes).forEach((Fe) => {
    const k = K.colorSchemes[Fe].palette, oe = (Te) => {
      const ve = Te.split("-"), Se = ve[1], _e = ve[2];
      return N(Te, k[Se][_e]);
    };
    if (k.mode === "light" && (ae(k.common, "background", "#fff"), ae(k.common, "onBackground", "#000")), k.mode === "dark" && (ae(k.common, "background", "#000"), ae(k.common, "onBackground", "#fff")), _z(k, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), k.mode === "light") {
      ae(k.Alert, "errorColor", fn(k.error.light, 0.6)), ae(k.Alert, "infoColor", fn(k.info.light, 0.6)), ae(k.Alert, "successColor", fn(k.success.light, 0.6)), ae(k.Alert, "warningColor", fn(k.warning.light, 0.6)), ae(k.Alert, "errorFilledBg", oe("palette-error-main")), ae(k.Alert, "infoFilledBg", oe("palette-info-main")), ae(k.Alert, "successFilledBg", oe("palette-success-main")), ae(k.Alert, "warningFilledBg", oe("palette-warning-main")), ae(k.Alert, "errorFilledColor", Fo(() => k.getContrastText(k.error.main))), ae(k.Alert, "infoFilledColor", Fo(() => k.getContrastText(k.info.main))), ae(k.Alert, "successFilledColor", Fo(() => k.getContrastText(k.success.main))), ae(k.Alert, "warningFilledColor", Fo(() => k.getContrastText(k.warning.main))), ae(k.Alert, "errorStandardBg", dn(k.error.light, 0.9)), ae(k.Alert, "infoStandardBg", dn(k.info.light, 0.9)), ae(k.Alert, "successStandardBg", dn(k.success.light, 0.9)), ae(k.Alert, "warningStandardBg", dn(k.warning.light, 0.9)), ae(k.Alert, "errorIconColor", oe("palette-error-main")), ae(k.Alert, "infoIconColor", oe("palette-info-main")), ae(k.Alert, "successIconColor", oe("palette-success-main")), ae(k.Alert, "warningIconColor", oe("palette-warning-main")), ae(k.AppBar, "defaultBg", oe("palette-grey-100")), ae(k.Avatar, "defaultBg", oe("palette-grey-400")), ae(k.Button, "inheritContainedBg", oe("palette-grey-300")), ae(k.Button, "inheritContainedHoverBg", oe("palette-grey-A100")), ae(k.Chip, "defaultBorder", oe("palette-grey-400")), ae(k.Chip, "defaultAvatarColor", oe("palette-grey-700")), ae(k.Chip, "defaultIconColor", oe("palette-grey-700")), ae(k.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), ae(k.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), ae(k.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), ae(k.LinearProgress, "primaryBg", dn(k.primary.main, 0.62)), ae(k.LinearProgress, "secondaryBg", dn(k.secondary.main, 0.62)), ae(k.LinearProgress, "errorBg", dn(k.error.main, 0.62)), ae(k.LinearProgress, "infoBg", dn(k.info.main, 0.62)), ae(k.LinearProgress, "successBg", dn(k.success.main, 0.62)), ae(k.LinearProgress, "warningBg", dn(k.warning.main, 0.62)), ae(k.Skeleton, "bg", `rgba(${oe("palette-text-primaryChannel")} / 0.11)`), ae(k.Slider, "primaryTrack", dn(k.primary.main, 0.62)), ae(k.Slider, "secondaryTrack", dn(k.secondary.main, 0.62)), ae(k.Slider, "errorTrack", dn(k.error.main, 0.62)), ae(k.Slider, "infoTrack", dn(k.info.main, 0.62)), ae(k.Slider, "successTrack", dn(k.success.main, 0.62)), ae(k.Slider, "warningTrack", dn(k.warning.main, 0.62));
      const Te = lg(k.background.default, 0.8);
      ae(k.SnackbarContent, "bg", Te), ae(k.SnackbarContent, "color", Fo(() => k.getContrastText(Te))), ae(k.SpeedDialAction, "fabHoverBg", lg(k.background.paper, 0.15)), ae(k.StepConnector, "border", oe("palette-grey-400")), ae(k.StepContent, "border", oe("palette-grey-400")), ae(k.Switch, "defaultColor", oe("palette-common-white")), ae(k.Switch, "defaultDisabledColor", oe("palette-grey-100")), ae(k.Switch, "primaryDisabledColor", dn(k.primary.main, 0.62)), ae(k.Switch, "secondaryDisabledColor", dn(k.secondary.main, 0.62)), ae(k.Switch, "errorDisabledColor", dn(k.error.main, 0.62)), ae(k.Switch, "infoDisabledColor", dn(k.info.main, 0.62)), ae(k.Switch, "successDisabledColor", dn(k.success.main, 0.62)), ae(k.Switch, "warningDisabledColor", dn(k.warning.main, 0.62)), ae(k.TableCell, "border", dn(og(k.divider, 1), 0.88)), ae(k.Tooltip, "bg", og(k.grey[700], 0.92));
    }
    if (k.mode === "dark") {
      ae(k.Alert, "errorColor", dn(k.error.light, 0.6)), ae(k.Alert, "infoColor", dn(k.info.light, 0.6)), ae(k.Alert, "successColor", dn(k.success.light, 0.6)), ae(k.Alert, "warningColor", dn(k.warning.light, 0.6)), ae(k.Alert, "errorFilledBg", oe("palette-error-dark")), ae(k.Alert, "infoFilledBg", oe("palette-info-dark")), ae(k.Alert, "successFilledBg", oe("palette-success-dark")), ae(k.Alert, "warningFilledBg", oe("palette-warning-dark")), ae(k.Alert, "errorFilledColor", Fo(() => k.getContrastText(k.error.dark))), ae(k.Alert, "infoFilledColor", Fo(() => k.getContrastText(k.info.dark))), ae(k.Alert, "successFilledColor", Fo(() => k.getContrastText(k.success.dark))), ae(k.Alert, "warningFilledColor", Fo(() => k.getContrastText(k.warning.dark))), ae(k.Alert, "errorStandardBg", fn(k.error.light, 0.9)), ae(k.Alert, "infoStandardBg", fn(k.info.light, 0.9)), ae(k.Alert, "successStandardBg", fn(k.success.light, 0.9)), ae(k.Alert, "warningStandardBg", fn(k.warning.light, 0.9)), ae(k.Alert, "errorIconColor", oe("palette-error-main")), ae(k.Alert, "infoIconColor", oe("palette-info-main")), ae(k.Alert, "successIconColor", oe("palette-success-main")), ae(k.Alert, "warningIconColor", oe("palette-warning-main")), ae(k.AppBar, "defaultBg", oe("palette-grey-900")), ae(k.AppBar, "darkBg", oe("palette-background-paper")), ae(k.AppBar, "darkColor", oe("palette-text-primary")), ae(k.Avatar, "defaultBg", oe("palette-grey-600")), ae(k.Button, "inheritContainedBg", oe("palette-grey-800")), ae(k.Button, "inheritContainedHoverBg", oe("palette-grey-700")), ae(k.Chip, "defaultBorder", oe("palette-grey-700")), ae(k.Chip, "defaultAvatarColor", oe("palette-grey-300")), ae(k.Chip, "defaultIconColor", oe("palette-grey-300")), ae(k.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), ae(k.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), ae(k.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), ae(k.LinearProgress, "primaryBg", fn(k.primary.main, 0.5)), ae(k.LinearProgress, "secondaryBg", fn(k.secondary.main, 0.5)), ae(k.LinearProgress, "errorBg", fn(k.error.main, 0.5)), ae(k.LinearProgress, "infoBg", fn(k.info.main, 0.5)), ae(k.LinearProgress, "successBg", fn(k.success.main, 0.5)), ae(k.LinearProgress, "warningBg", fn(k.warning.main, 0.5)), ae(k.Skeleton, "bg", `rgba(${oe("palette-text-primaryChannel")} / 0.13)`), ae(k.Slider, "primaryTrack", fn(k.primary.main, 0.5)), ae(k.Slider, "secondaryTrack", fn(k.secondary.main, 0.5)), ae(k.Slider, "errorTrack", fn(k.error.main, 0.5)), ae(k.Slider, "infoTrack", fn(k.info.main, 0.5)), ae(k.Slider, "successTrack", fn(k.success.main, 0.5)), ae(k.Slider, "warningTrack", fn(k.warning.main, 0.5));
      const Te = lg(k.background.default, 0.98);
      ae(k.SnackbarContent, "bg", Te), ae(k.SnackbarContent, "color", Fo(() => k.getContrastText(Te))), ae(k.SpeedDialAction, "fabHoverBg", lg(k.background.paper, 0.15)), ae(k.StepConnector, "border", oe("palette-grey-600")), ae(k.StepContent, "border", oe("palette-grey-600")), ae(k.Switch, "defaultColor", oe("palette-grey-300")), ae(k.Switch, "defaultDisabledColor", oe("palette-grey-600")), ae(k.Switch, "primaryDisabledColor", fn(k.primary.main, 0.55)), ae(k.Switch, "secondaryDisabledColor", fn(k.secondary.main, 0.55)), ae(k.Switch, "errorDisabledColor", fn(k.error.main, 0.55)), ae(k.Switch, "infoDisabledColor", fn(k.info.main, 0.55)), ae(k.Switch, "successDisabledColor", fn(k.success.main, 0.55)), ae(k.Switch, "warningDisabledColor", fn(k.warning.main, 0.55)), ae(k.TableCell, "border", fn(og(k.divider, 1), 0.68)), ae(k.Tooltip, "bg", og(k.grey[700], 0.92));
    }
    zl(k.background, "default"), zl(k.background, "paper"), zl(k.common, "background"), zl(k.common, "onBackground"), zl(k, "divider"), Object.keys(k).forEach((Te) => {
      const ve = k[Te];
      ve && typeof ve == "object" && (ve.main && ae(k[Te], "mainChannel", Bv(Vv(ve.main))), ve.light && ae(k[Te], "lightChannel", Bv(Vv(ve.light))), ve.dark && ae(k[Te], "darkChannel", Bv(Vv(ve.dark))), ve.contrastText && ae(k[Te], "contrastTextChannel", Bv(Vv(ve.contrastText))), Te === "text" && (zl(k[Te], "primary"), zl(k[Te], "secondary")), Te === "action" && (ve.active && zl(k[Te], "active"), ve.selected && zl(k[Te], "selected")));
    });
  }), K = s.reduce((Fe, k) => fi(Fe, k), K);
  const V = {
    prefix: S,
    disableCssColorScheme: y,
    shouldSkipGeneratingVar: m,
    getSelector: kz(K)
  }, {
    vars: le,
    generateThemeVars: re,
    generateStyleSheets: je
  } = tz(K, V);
  return K.vars = le, Object.entries(K.colorSchemes[K.defaultColorScheme]).forEach(([Fe, k]) => {
    K[Fe] = k;
  }), K.generateThemeVars = re, K.generateStyleSheets = je, K.generateSpacing = function() {
    return Tw(D.spacing, tE(this));
  }, K.getColorSchemeSelector = nz(x), K.spacing = K.generateSpacing(), K.shouldSkipGeneratingVar = m, K.unstable_sxConfig = {
    ...Jv,
    ...D == null ? void 0 : D.unstable_sxConfig
  }, K.unstable_sx = function(k) {
    return Cd({
      sx: k,
      theme: this
    });
  }, K.toRuntimeSource = Dz, K;
}
function WR(o, s, f) {
  o.colorSchemes && f && (o.colorSchemes[s] = {
    ...f !== !0 && f,
    palette: fE({
      ...f === !0 ? {} : f.palette,
      mode: s
    })
    // cast type to skip module augmentation test
  });
}
function Lz(o = {}, ...s) {
  const {
    palette: f,
    cssVariables: v = !1,
    colorSchemes: y = f ? void 0 : {
      light: !0
    },
    defaultColorScheme: S = f == null ? void 0 : f.mode,
    ...m
  } = o, x = S || "light", w = y == null ? void 0 : y[x], D = {
    ...y,
    ...f ? {
      [x]: {
        ...typeof w != "boolean" && w,
        palette: f
      }
    } : void 0
  };
  if (v === !1) {
    if (!("colorSchemes" in o))
      return I1(o, ...s);
    let A = f;
    "palette" in o || D[x] && (D[x] !== !0 ? A = D[x].palette : x === "dark" && (A = {
      mode: "dark"
    }));
    const _ = I1({
      ...o,
      palette: A
    }, ...s);
    return _.defaultColorScheme = x, _.colorSchemes = D, _.palette.mode === "light" && (_.colorSchemes.light = {
      ...D.light !== !0 && D.light,
      palette: _.palette
    }, WR(_, "dark", D.dark)), _.palette.mode === "dark" && (_.colorSchemes.dark = {
      ...D.dark !== !0 && D.dark,
      palette: _.palette
    }, WR(_, "light", D.light)), _;
  }
  return !f && !("light" in D) && x === "light" && (D.light = !0), Az({
    ...m,
    colorSchemes: D,
    defaultColorScheme: x,
    ...typeof v != "boolean" && v
  }, ...s);
}
const Pw = Lz(), $w = "$$material";
function dE() {
  const o = vL(Pw);
  return process.env.NODE_ENV !== "production" && me.useDebugValue(o), o[$w] || o;
}
const Vn = xL({
  themeId: $w,
  defaultTheme: Pw,
  rootShouldForwardProp: ow
});
function zz() {
  return rA;
}
const Pl = XL;
process.env.NODE_ENV !== "production" && (C.node, C.object.isRequired);
function vi(o) {
  return KL(o);
}
class Tg {
  constructor() {
    Uv(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Tg();
  }
  static use() {
    const s = Mw(Tg.create).current, [f, v] = me.useState(!1);
    return s.shouldMount = f, s.setShouldMount = v, me.useEffect(s.mountEffect, [f]), s;
  }
  mount() {
    return this.mounted || (this.mounted = Pz(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...s) {
    this.mount().then(() => {
      var f;
      return (f = this.ref.current) == null ? void 0 : f.start(...s);
    });
  }
  stop(...s) {
    this.mount().then(() => {
      var f;
      return (f = this.ref.current) == null ? void 0 : f.stop(...s);
    });
  }
  pulsate(...s) {
    this.mount().then(() => {
      var f;
      return (f = this.ref.current) == null ? void 0 : f.pulsate(...s);
    });
  }
}
function Uz() {
  return Tg.use();
}
function Pz() {
  let o, s;
  const f = new Promise((v, y) => {
    o = v, s = y;
  });
  return f.resolve = o, f.reject = s, f;
}
function jw(o, s) {
  if (o == null) return {};
  var f = {};
  for (var v in o) if ({}.hasOwnProperty.call(o, v)) {
    if (s.includes(v)) continue;
    f[v] = o[v];
  }
  return f;
}
function Y1(o, s) {
  return Y1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, v) {
    return f.__proto__ = v, f;
  }, Y1(o, s);
}
function Fw(o, s) {
  o.prototype = Object.create(s.prototype), o.prototype.constructor = o, Y1(o, s);
}
var G1 = { exports: {} }, Ya = {}, sg = { exports: {} }, _1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var YR;
function $z() {
  return YR || (YR = 1, function(o) {
    function s(ce, Ae) {
      var W = ce.length;
      ce.push(Ae);
      e: for (; 0 < W; ) {
        var se = W - 1 >>> 1, Oe = ce[se];
        if (0 < y(Oe, Ae)) ce[se] = Ae, ce[W] = Oe, W = se;
        else break e;
      }
    }
    function f(ce) {
      return ce.length === 0 ? null : ce[0];
    }
    function v(ce) {
      if (ce.length === 0) return null;
      var Ae = ce[0], W = ce.pop();
      if (W !== Ae) {
        ce[0] = W;
        e: for (var se = 0, Oe = ce.length, Be = Oe >>> 1; se < Be; ) {
          var xe = 2 * (se + 1) - 1, it = ce[xe], Ve = xe + 1, Je = ce[Ve];
          if (0 > y(it, W)) Ve < Oe && 0 > y(Je, it) ? (ce[se] = Je, ce[Ve] = W, se = Ve) : (ce[se] = it, ce[xe] = W, se = xe);
          else if (Ve < Oe && 0 > y(Je, W)) ce[se] = Je, ce[Ve] = W, se = Ve;
          else break e;
        }
      }
      return Ae;
    }
    function y(ce, Ae) {
      var W = ce.sortIndex - Ae.sortIndex;
      return W !== 0 ? W : ce.id - Ae.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var S = performance;
      o.unstable_now = function() {
        return S.now();
      };
    } else {
      var m = Date, x = m.now();
      o.unstable_now = function() {
        return m.now() - x;
      };
    }
    var w = [], D = [], A = 1, _ = null, N = 3, P = !1, H = !1, $ = !1, U = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, ue = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function q(ce) {
      for (var Ae = f(D); Ae !== null; ) {
        if (Ae.callback === null) v(D);
        else if (Ae.startTime <= ce) v(D), Ae.sortIndex = Ae.expirationTime, s(w, Ae);
        else break;
        Ae = f(D);
      }
    }
    function K(ce) {
      if ($ = !1, q(ce), !H) if (f(w) !== null) H = !0, Ce(V);
      else {
        var Ae = f(D);
        Ae !== null && ht(K, Ae.startTime - ce);
      }
    }
    function V(ce, Ae) {
      H = !1, $ && ($ = !1, ee(je), je = -1), P = !0;
      var W = N;
      try {
        for (q(Ae), _ = f(w); _ !== null && (!(_.expirationTime > Ae) || ce && !oe()); ) {
          var se = _.callback;
          if (typeof se == "function") {
            _.callback = null, N = _.priorityLevel;
            var Oe = se(_.expirationTime <= Ae);
            Ae = o.unstable_now(), typeof Oe == "function" ? _.callback = Oe : _ === f(w) && v(w), q(Ae);
          } else v(w);
          _ = f(w);
        }
        if (_ !== null) var Be = !0;
        else {
          var xe = f(D);
          xe !== null && ht(K, xe.startTime - Ae), Be = !1;
        }
        return Be;
      } finally {
        _ = null, N = W, P = !1;
      }
    }
    var le = !1, re = null, je = -1, Fe = 5, k = -1;
    function oe() {
      return !(o.unstable_now() - k < Fe);
    }
    function Te() {
      if (re !== null) {
        var ce = o.unstable_now();
        k = ce;
        var Ae = !0;
        try {
          Ae = re(!0, ce);
        } finally {
          Ae ? ve() : (le = !1, re = null);
        }
      } else le = !1;
    }
    var ve;
    if (typeof ue == "function") ve = function() {
      ue(Te);
    };
    else if (typeof MessageChannel < "u") {
      var Se = new MessageChannel(), _e = Se.port2;
      Se.port1.onmessage = Te, ve = function() {
        _e.postMessage(null);
      };
    } else ve = function() {
      U(Te, 0);
    };
    function Ce(ce) {
      re = ce, le || (le = !0, ve());
    }
    function ht(ce, Ae) {
      je = U(function() {
        ce(o.unstable_now());
      }, Ae);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(ce) {
      ce.callback = null;
    }, o.unstable_continueExecution = function() {
      H || P || (H = !0, Ce(V));
    }, o.unstable_forceFrameRate = function(ce) {
      0 > ce || 125 < ce ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Fe = 0 < ce ? Math.floor(1e3 / ce) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, o.unstable_getFirstCallbackNode = function() {
      return f(w);
    }, o.unstable_next = function(ce) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var Ae = 3;
          break;
        default:
          Ae = N;
      }
      var W = N;
      N = Ae;
      try {
        return ce();
      } finally {
        N = W;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(ce, Ae) {
      switch (ce) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ce = 3;
      }
      var W = N;
      N = ce;
      try {
        return Ae();
      } finally {
        N = W;
      }
    }, o.unstable_scheduleCallback = function(ce, Ae, W) {
      var se = o.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? se + W : se) : W = se, ce) {
        case 1:
          var Oe = -1;
          break;
        case 2:
          Oe = 250;
          break;
        case 5:
          Oe = 1073741823;
          break;
        case 4:
          Oe = 1e4;
          break;
        default:
          Oe = 5e3;
      }
      return Oe = W + Oe, ce = { id: A++, callback: Ae, priorityLevel: ce, startTime: W, expirationTime: Oe, sortIndex: -1 }, W > se ? (ce.sortIndex = W, s(D, ce), f(w) === null && ce === f(D) && ($ ? (ee(je), je = -1) : $ = !0, ht(K, W - se))) : (ce.sortIndex = Oe, s(w, ce), H || P || (H = !0, Ce(V))), ce;
    }, o.unstable_shouldYield = oe, o.unstable_wrapCallback = function(ce) {
      var Ae = N;
      return function() {
        var W = N;
        N = Ae;
        try {
          return ce.apply(this, arguments);
        } finally {
          N = W;
        }
      };
    };
  }(_1)), _1;
}
var M1 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var GR;
function jz() {
  return GR || (GR = 1, function(o) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var s = !1, f = !1, v = 5;
      function y(De, nt) {
        var Et = De.length;
        De.push(nt), x(De, nt, Et);
      }
      function S(De) {
        return De.length === 0 ? null : De[0];
      }
      function m(De) {
        if (De.length === 0)
          return null;
        var nt = De[0], Et = De.pop();
        return Et !== nt && (De[0] = Et, w(De, Et, 0)), nt;
      }
      function x(De, nt, Et) {
        for (var Bt = Et; Bt > 0; ) {
          var gn = Bt - 1 >>> 1, Xn = De[gn];
          if (D(Xn, nt) > 0)
            De[gn] = nt, De[Bt] = Xn, Bt = gn;
          else
            return;
        }
      }
      function w(De, nt, Et) {
        for (var Bt = Et, gn = De.length, Xn = gn >>> 1; Bt < Xn; ) {
          var _n = (Bt + 1) * 2 - 1, Fr = De[_n], nn = _n + 1, sa = De[nn];
          if (D(Fr, nt) < 0)
            nn < gn && D(sa, Fr) < 0 ? (De[Bt] = sa, De[nn] = nt, Bt = nn) : (De[Bt] = Fr, De[_n] = nt, Bt = _n);
          else if (nn < gn && D(sa, nt) < 0)
            De[Bt] = sa, De[nn] = nt, Bt = nn;
          else
            return;
        }
      }
      function D(De, nt) {
        var Et = De.sortIndex - nt.sortIndex;
        return Et !== 0 ? Et : De.id - nt.id;
      }
      var A = 1, _ = 2, N = 3, P = 4, H = 5;
      function $(De, nt) {
      }
      var U = typeof performance == "object" && typeof performance.now == "function";
      if (U) {
        var ee = performance;
        o.unstable_now = function() {
          return ee.now();
        };
      } else {
        var ue = Date, q = ue.now();
        o.unstable_now = function() {
          return ue.now() - q;
        };
      }
      var K = 1073741823, V = -1, le = 250, re = 5e3, je = 1e4, Fe = K, k = [], oe = [], Te = 1, ve = null, Se = N, _e = !1, Ce = !1, ht = !1, ce = typeof setTimeout == "function" ? setTimeout : null, Ae = typeof clearTimeout == "function" ? clearTimeout : null, W = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function se(De) {
        for (var nt = S(oe); nt !== null; ) {
          if (nt.callback === null)
            m(oe);
          else if (nt.startTime <= De)
            m(oe), nt.sortIndex = nt.expirationTime, y(k, nt);
          else
            return;
          nt = S(oe);
        }
      }
      function Oe(De) {
        if (ht = !1, se(De), !Ce)
          if (S(k) !== null)
            Ce = !0, jr(Be);
          else {
            var nt = S(oe);
            nt !== null && Dn(Oe, nt.startTime - De);
          }
      }
      function Be(De, nt) {
        Ce = !1, ht && (ht = !1, ua()), _e = !0;
        var Et = Se;
        try {
          var Bt;
          if (!f) return xe(De, nt);
        } finally {
          ve = null, Se = Et, _e = !1;
        }
      }
      function xe(De, nt) {
        var Et = nt;
        for (se(Et), ve = S(k); ve !== null && !s && !(ve.expirationTime > Et && (!De || ur())); ) {
          var Bt = ve.callback;
          if (typeof Bt == "function") {
            ve.callback = null, Se = ve.priorityLevel;
            var gn = ve.expirationTime <= Et, Xn = Bt(gn);
            Et = o.unstable_now(), typeof Xn == "function" ? ve.callback = Xn : ve === S(k) && m(k), se(Et);
          } else
            m(k);
          ve = S(k);
        }
        if (ve !== null)
          return !0;
        var _n = S(oe);
        return _n !== null && Dn(Oe, _n.startTime - Et), !1;
      }
      function it(De, nt) {
        switch (De) {
          case A:
          case _:
          case N:
          case P:
          case H:
            break;
          default:
            De = N;
        }
        var Et = Se;
        Se = De;
        try {
          return nt();
        } finally {
          Se = Et;
        }
      }
      function Ve(De) {
        var nt;
        switch (Se) {
          case A:
          case _:
          case N:
            nt = N;
            break;
          default:
            nt = Se;
            break;
        }
        var Et = Se;
        Se = nt;
        try {
          return De();
        } finally {
          Se = Et;
        }
      }
      function Je(De) {
        var nt = Se;
        return function() {
          var Et = Se;
          Se = nt;
          try {
            return De.apply(this, arguments);
          } finally {
            Se = Et;
          }
        };
      }
      function et(De, nt, Et) {
        var Bt = o.unstable_now(), gn;
        if (typeof Et == "object" && Et !== null) {
          var Xn = Et.delay;
          typeof Xn == "number" && Xn > 0 ? gn = Bt + Xn : gn = Bt;
        } else
          gn = Bt;
        var _n;
        switch (De) {
          case A:
            _n = V;
            break;
          case _:
            _n = le;
            break;
          case H:
            _n = Fe;
            break;
          case P:
            _n = je;
            break;
          case N:
          default:
            _n = re;
            break;
        }
        var Fr = gn + _n, nn = {
          id: Te++,
          callback: nt,
          priorityLevel: De,
          startTime: gn,
          expirationTime: Fr,
          sortIndex: -1
        };
        return gn > Bt ? (nn.sortIndex = gn, y(oe, nn), S(k) === null && nn === S(oe) && (ht ? ua() : ht = !0, Dn(Oe, gn - Bt))) : (nn.sortIndex = Fr, y(k, nn), !Ce && !_e && (Ce = !0, jr(Be))), nn;
      }
      function st() {
      }
      function ct() {
        !Ce && !_e && (Ce = !0, jr(Be));
      }
      function Dt() {
        return S(k);
      }
      function be(De) {
        De.callback = null;
      }
      function Rt() {
        return Se;
      }
      var Me = !1, Yt = null, vn = -1, On = v, lr = -1;
      function ur() {
        var De = o.unstable_now() - lr;
        return !(De < On);
      }
      function Ka() {
      }
      function ia(De) {
        if (De < 0 || De > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        De > 0 ? On = Math.floor(1e3 / De) : On = v;
      }
      var oa = function() {
        if (Yt !== null) {
          var De = o.unstable_now();
          lr = De;
          var nt = !0, Et = !0;
          try {
            Et = Yt(nt, De);
          } finally {
            Et ? tt() : (Me = !1, Yt = null);
          }
        } else
          Me = !1;
      }, tt;
      if (typeof W == "function")
        tt = function() {
          W(oa);
        };
      else if (typeof MessageChannel < "u") {
        var la = new MessageChannel(), kr = la.port2;
        la.port1.onmessage = oa, tt = function() {
          kr.postMessage(null);
        };
      } else
        tt = function() {
          ce(oa, 0);
        };
      function jr(De) {
        Yt = De, Me || (Me = !0, tt());
      }
      function Dn(De, nt) {
        vn = ce(function() {
          De(o.unstable_now());
        }, nt);
      }
      function ua() {
        Ae(vn), vn = -1;
      }
      var uo = Ka, Xa = null;
      o.unstable_IdlePriority = H, o.unstable_ImmediatePriority = A, o.unstable_LowPriority = P, o.unstable_NormalPriority = N, o.unstable_Profiling = Xa, o.unstable_UserBlockingPriority = _, o.unstable_cancelCallback = be, o.unstable_continueExecution = ct, o.unstable_forceFrameRate = ia, o.unstable_getCurrentPriorityLevel = Rt, o.unstable_getFirstCallbackNode = Dt, o.unstable_next = Ve, o.unstable_pauseExecution = st, o.unstable_requestPaint = uo, o.unstable_runWithPriority = it, o.unstable_scheduleCallback = et, o.unstable_shouldYield = ur, o.unstable_wrapCallback = Je, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(M1)), M1;
}
var QR;
function Bw() {
  return QR || (QR = 1, process.env.NODE_ENV === "production" ? sg.exports = $z() : sg.exports = jz()), sg.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qR;
function Fz() {
  if (qR) return Ya;
  qR = 1;
  var o = ci, s = Bw();
  function f(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var v = /* @__PURE__ */ new Set(), y = {};
  function S(n, r) {
    m(n, r), m(n + "Capture", r);
  }
  function m(n, r) {
    for (y[n] = r, n = 0; n < r.length; n++) v.add(r[n]);
  }
  var x = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), w = Object.prototype.hasOwnProperty, D = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, A = {}, _ = {};
  function N(n) {
    return w.call(_, n) ? !0 : w.call(A, n) ? !1 : D.test(n) ? _[n] = !0 : (A[n] = !0, !1);
  }
  function P(n, r, l, c) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return c ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function H(n, r, l, c) {
    if (r === null || typeof r > "u" || P(n, r, l, c)) return !0;
    if (c) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function $(n, r, l, c, p, g, T) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = c, this.attributeNamespace = p, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = g, this.removeEmptyString = T;
  }
  var U = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    U[n] = new $(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    U[r] = new $(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    U[n] = new $(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    U[n] = new $(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    U[n] = new $(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    U[n] = new $(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    U[n] = new $(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    U[n] = new $(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    U[n] = new $(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ee = /[\-:]([a-z])/g;
  function ue(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ee,
      ue
    );
    U[r] = new $(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ee, ue);
    U[r] = new $(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ee, ue);
    U[r] = new $(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    U[n] = new $(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), U.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    U[n] = new $(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function q(n, r, l, c) {
    var p = U.hasOwnProperty(r) ? U[r] : null;
    (p !== null ? p.type !== 0 : c || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (H(r, l, p, c) && (l = null), c || p === null ? N(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : p.mustUseProperty ? n[p.propertyName] = l === null ? p.type === 3 ? !1 : "" : l : (r = p.attributeName, c = p.attributeNamespace, l === null ? n.removeAttribute(r) : (p = p.type, l = p === 3 || p === 4 && l === !0 ? "" : "" + l, c ? n.setAttributeNS(c, r, l) : n.setAttribute(r, l))));
  }
  var K = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, V = Symbol.for("react.element"), le = Symbol.for("react.portal"), re = Symbol.for("react.fragment"), je = Symbol.for("react.strict_mode"), Fe = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), oe = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), _e = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), ht = Symbol.for("react.offscreen"), ce = Symbol.iterator;
  function Ae(n) {
    return n === null || typeof n != "object" ? null : (n = ce && n[ce] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var W = Object.assign, se;
  function Oe(n) {
    if (se === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      se = r && r[1] || "";
    }
    return `
` + se + n;
  }
  var Be = !1;
  function xe(n, r) {
    if (!n || Be) return "";
    Be = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (Z) {
          var c = Z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (Z) {
          c = Z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (Z) {
          c = Z;
        }
        n();
      }
    } catch (Z) {
      if (Z && c && typeof Z.stack == "string") {
        for (var p = Z.stack.split(`
`), g = c.stack.split(`
`), T = p.length - 1, M = g.length - 1; 1 <= T && 0 <= M && p[T] !== g[M]; ) M--;
        for (; 1 <= T && 0 <= M; T--, M--) if (p[T] !== g[M]) {
          if (T !== 1 || M !== 1)
            do
              if (T--, M--, 0 > M || p[T] !== g[M]) {
                var z = `
` + p[T].replace(" at new ", " at ");
                return n.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", n.displayName)), z;
              }
            while (1 <= T && 0 <= M);
          break;
        }
      }
    } finally {
      Be = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Oe(n) : "";
  }
  function it(n) {
    switch (n.tag) {
      case 5:
        return Oe(n.type);
      case 16:
        return Oe("Lazy");
      case 13:
        return Oe("Suspense");
      case 19:
        return Oe("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = xe(n.type, !1), n;
      case 11:
        return n = xe(n.type.render, !1), n;
      case 1:
        return n = xe(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ve(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case re:
        return "Fragment";
      case le:
        return "Portal";
      case Fe:
        return "Profiler";
      case je:
        return "StrictMode";
      case ve:
        return "Suspense";
      case Se:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case oe:
        return (n.displayName || "Context") + ".Consumer";
      case k:
        return (n._context.displayName || "Context") + ".Provider";
      case Te:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case _e:
        return r = n.displayName || null, r !== null ? r : Ve(n.type) || "Memo";
      case Ce:
        r = n._payload, n = n._init;
        try {
          return Ve(n(r));
        } catch {
        }
    }
    return null;
  }
  function Je(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ve(r);
      case 8:
        return r === je ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function et(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function st(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ct(n) {
    var r = st(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), c = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var p = l.get, g = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(T) {
        c = "" + T, g.call(this, T);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return c;
      }, setValue: function(T) {
        c = "" + T;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Dt(n) {
    n._valueTracker || (n._valueTracker = ct(n));
  }
  function be(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), c = "";
    return n && (c = st(n) ? n.checked ? "true" : "false" : n.value), n = c, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Rt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Me(n, r) {
    var l = r.checked;
    return W({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Yt(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, c = r.checked != null ? r.checked : r.defaultChecked;
    l = et(r.value != null ? r.value : l), n._wrapperState = { initialChecked: c, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function vn(n, r) {
    r = r.checked, r != null && q(n, "checked", r, !1);
  }
  function On(n, r) {
    vn(n, r);
    var l = et(r.value), c = r.type;
    if (l != null) c === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (c === "submit" || c === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ur(n, r.type, l) : r.hasOwnProperty("defaultValue") && ur(n, r.type, et(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function lr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var c = r.type;
      if (!(c !== "submit" && c !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function ur(n, r, l) {
    (r !== "number" || Rt(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Ka = Array.isArray;
  function ia(n, r, l, c) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < l.length; p++) r["$" + l[p]] = !0;
      for (l = 0; l < n.length; l++) p = r.hasOwnProperty("$" + n[l].value), n[l].selected !== p && (n[l].selected = p), p && c && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + et(l), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === l) {
          n[p].selected = !0, c && (n[p].defaultSelected = !0);
          return;
        }
        r !== null || n[p].disabled || (r = n[p]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function oa(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(f(91));
    return W({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function tt(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(f(92));
        if (Ka(l)) {
          if (1 < l.length) throw Error(f(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: et(l) };
  }
  function la(n, r) {
    var l = et(r.value), c = et(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), c != null && (n.defaultValue = "" + c);
  }
  function kr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function jr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Dn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? jr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ua, uo = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, c, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, c, p);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (ua = ua || document.createElement("div"), ua.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ua.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Xa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var De = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, nt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(De).forEach(function(n) {
    nt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), De[r] = De[n];
    });
  });
  function Et(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || De.hasOwnProperty(n) && De[n] ? ("" + r).trim() : r + "px";
  }
  function Bt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var c = l.indexOf("--") === 0, p = Et(l, r[l], c);
      l === "float" && (l = "cssFloat"), c ? n.setProperty(l, p) : n[l] = p;
    }
  }
  var gn = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Xn(n, r) {
    if (r) {
      if (gn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(f(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(f(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(f(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(f(62));
    }
  }
  function _n(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Fr = null;
  function nn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var sa = null, en = null, rn = null;
  function jl(n) {
    if (n = bs(n)) {
      if (typeof sa != "function") throw Error(f(280));
      var r = n.stateNode;
      r && (r = rt(r), sa(n.stateNode, n.type, r));
    }
  }
  function Yo(n) {
    en ? rn ? rn.push(n) : rn = [n] : en = n;
  }
  function Fl() {
    if (en) {
      var n = en, r = rn;
      if (rn = en = null, jl(n), r) for (n = 0; n < r.length; n++) jl(r[n]);
    }
  }
  function Zu(n, r) {
    return n(r);
  }
  function pc() {
  }
  var Go = !1;
  function Bl(n, r, l) {
    if (Go) return n(r, l);
    Go = !0;
    try {
      return Zu(n, r, l);
    } finally {
      Go = !1, (en !== null || rn !== null) && (pc(), Fl());
    }
  }
  function Qo(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var c = rt(l);
    if (c === null) return null;
    l = c[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (n = n.type, c = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !c;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(f(231, r, typeof l));
    return l;
  }
  var Vl = !1;
  if (x) try {
    var hi = {};
    Object.defineProperty(hi, "passive", { get: function() {
      Vl = !0;
    } }), window.addEventListener("test", hi, hi), window.removeEventListener("test", hi, hi);
  } catch {
    Vl = !1;
  }
  function zi(n, r, l, c, p, g, T, M, z) {
    var Z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, Z);
    } catch (pe) {
      this.onError(pe);
    }
  }
  var ca = !1, Za = null, so = !1, qo = null, L = { onError: function(n) {
    ca = !0, Za = n;
  } };
  function he(n, r, l, c, p, g, T, M, z) {
    ca = !1, Za = null, zi.apply(L, arguments);
  }
  function Re(n, r, l, c, p, g, T, M, z) {
    if (he.apply(this, arguments), ca) {
      if (ca) {
        var Z = Za;
        ca = !1, Za = null;
      } else throw Error(f(198));
      so || (so = !0, qo = Z);
    }
  }
  function Xe(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ot(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Nt(n) {
    if (Xe(n) !== n) throw Error(f(188));
  }
  function ft(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Xe(n), r === null) throw Error(f(188));
      return r !== n ? null : n;
    }
    for (var l = n, c = r; ; ) {
      var p = l.return;
      if (p === null) break;
      var g = p.alternate;
      if (g === null) {
        if (c = p.return, c !== null) {
          l = c;
          continue;
        }
        break;
      }
      if (p.child === g.child) {
        for (g = p.child; g; ) {
          if (g === l) return Nt(p), n;
          if (g === c) return Nt(p), r;
          g = g.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== c.return) l = p, c = g;
      else {
        for (var T = !1, M = p.child; M; ) {
          if (M === l) {
            T = !0, l = p, c = g;
            break;
          }
          if (M === c) {
            T = !0, c = p, l = g;
            break;
          }
          M = M.sibling;
        }
        if (!T) {
          for (M = g.child; M; ) {
            if (M === l) {
              T = !0, l = g, c = p;
              break;
            }
            if (M === c) {
              T = !0, c = g, l = p;
              break;
            }
            M = M.sibling;
          }
          if (!T) throw Error(f(189));
        }
      }
      if (l.alternate !== c) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ct(n) {
    return n = ft(n), n !== null ? Zn(n) : null;
  }
  function Zn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Zn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var on = s.unstable_scheduleCallback, Sn = s.unstable_cancelCallback, Br = s.unstable_shouldYield, co = s.unstable_requestPaint, $t = s.unstable_now, br = s.unstable_getCurrentPriorityLevel, fa = s.unstable_ImmediatePriority, Tt = s.unstable_UserBlockingPriority, mi = s.unstable_NormalPriority, nh = s.unstable_LowPriority, Rd = s.unstable_IdlePriority, Ju = null, Ja = null;
  function rh(n) {
    if (Ja && typeof Ja.onCommitFiberRoot == "function") try {
      Ja.onCommitFiberRoot(Ju, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var xa = Math.clz32 ? Math.clz32 : Wg, ah = Math.log, ih = Math.LN2;
  function Wg(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ah(n) / ih | 0) | 0;
  }
  var vc = 64, Hl = 4194304;
  function Ko(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ei(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var c = 0, p = n.suspendedLanes, g = n.pingedLanes, T = l & 268435455;
    if (T !== 0) {
      var M = T & ~p;
      M !== 0 ? c = Ko(M) : (g &= T, g !== 0 && (c = Ko(g)));
    } else T = l & ~p, T !== 0 ? c = Ko(T) : g !== 0 && (c = Ko(g));
    if (c === 0) return 0;
    if (r !== 0 && r !== c && !(r & p) && (p = c & -c, g = r & -r, p >= g || p === 16 && (g & 4194240) !== 0)) return r;
    if (c & 4 && (c |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= c; 0 < r; ) l = 31 - xa(r), p = 1 << l, c |= n[l], r &= ~p;
    return c;
  }
  function wd(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function hc(n, r) {
    for (var l = n.suspendedLanes, c = n.pingedLanes, p = n.expirationTimes, g = n.pendingLanes; 0 < g; ) {
      var T = 31 - xa(g), M = 1 << T, z = p[T];
      z === -1 ? (!(M & l) || M & c) && (p[T] = wd(M, r)) : z <= r && (n.expiredLanes |= M), g &= ~M;
    }
  }
  function kd(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function mc() {
    var n = vc;
    return vc <<= 1, !(vc & 4194240) && (vc = 64), n;
  }
  function Od(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Xo(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - xa(r), n[r] = l;
  }
  function Yg(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var c = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var p = 31 - xa(l), g = 1 << p;
      r[p] = 0, c[p] = -1, n[p] = -1, l &= ~g;
    }
  }
  function es(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var c = 31 - xa(l), p = 1 << c;
      p & r | n[c] & r && (n[c] |= r), l &= ~p;
    }
  }
  var Vt = 0;
  function Dd(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var oh, yc, Ht, lh, _d, gt = !1, ts = [], zn = null, Ra = null, wa = null, ns = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Gt = [], Gg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ti(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Ra = null;
        break;
      case "mouseover":
      case "mouseout":
        wa = null;
        break;
      case "pointerover":
      case "pointerout":
        ns.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hn.delete(r.pointerId);
    }
  }
  function Er(n, r, l, c, p, g) {
    return n === null || n.nativeEvent !== g ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: c, nativeEvent: g, targetContainers: [p] }, r !== null && (r = bs(r), r !== null && yc(r)), n) : (n.eventSystemFlags |= c, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function fo(n, r, l, c, p) {
    switch (r) {
      case "focusin":
        return zn = Er(zn, n, r, l, c, p), !0;
      case "dragenter":
        return Ra = Er(Ra, n, r, l, c, p), !0;
      case "mouseover":
        return wa = Er(wa, n, r, l, c, p), !0;
      case "pointerover":
        var g = p.pointerId;
        return ns.set(g, Er(ns.get(g) || null, n, r, l, c, p)), !0;
      case "gotpointercapture":
        return g = p.pointerId, Hn.set(g, Er(Hn.get(g) || null, n, r, l, c, p)), !0;
    }
    return !1;
  }
  function uh(n) {
    var r = Oa(n.target);
    if (r !== null) {
      var l = Xe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ot(l), r !== null) {
            n.blockedOn = r, _d(n.priority, function() {
              Ht(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Il(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = bc(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var c = new l.constructor(l.type, l);
        Fr = c, l.target.dispatchEvent(c), Fr = null;
      } else return r = bs(l), r !== null && yc(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Md(n, r, l) {
    Il(n) && l.delete(r);
  }
  function sh() {
    gt = !1, zn !== null && Il(zn) && (zn = null), Ra !== null && Il(Ra) && (Ra = null), wa !== null && Il(wa) && (wa = null), ns.forEach(Md), Hn.forEach(Md);
  }
  function rs(n, r) {
    n.blockedOn === r && (n.blockedOn = null, gt || (gt = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, sh)));
  }
  function as(n) {
    function r(p) {
      return rs(p, n);
    }
    if (0 < ts.length) {
      rs(ts[0], n);
      for (var l = 1; l < ts.length; l++) {
        var c = ts[l];
        c.blockedOn === n && (c.blockedOn = null);
      }
    }
    for (zn !== null && rs(zn, n), Ra !== null && rs(Ra, n), wa !== null && rs(wa, n), ns.forEach(r), Hn.forEach(r), l = 0; l < Gt.length; l++) c = Gt[l], c.blockedOn === n && (c.blockedOn = null);
    for (; 0 < Gt.length && (l = Gt[0], l.blockedOn === null); ) uh(l), l.blockedOn === null && Gt.shift();
  }
  var Wl = K.ReactCurrentBatchConfig, Zo = !0;
  function ch(n, r, l, c) {
    var p = Vt, g = Wl.transition;
    Wl.transition = null;
    try {
      Vt = 1, Sc(n, r, l, c);
    } finally {
      Vt = p, Wl.transition = g;
    }
  }
  function gc(n, r, l, c) {
    var p = Vt, g = Wl.transition;
    Wl.transition = null;
    try {
      Vt = 4, Sc(n, r, l, c);
    } finally {
      Vt = p, Wl.transition = g;
    }
  }
  function Sc(n, r, l, c) {
    if (Zo) {
      var p = bc(n, r, l, c);
      if (p === null) Nc(n, r, c, is, l), ti(n, c);
      else if (fo(p, n, r, l, c)) c.stopPropagation();
      else if (ti(n, c), r & 4 && -1 < Gg.indexOf(n)) {
        for (; p !== null; ) {
          var g = bs(p);
          if (g !== null && oh(g), g = bc(n, r, l, c), g === null && Nc(n, r, c, is, l), g === p) break;
          p = g;
        }
        p !== null && c.stopPropagation();
      } else Nc(n, r, c, null, l);
    }
  }
  var is = null;
  function bc(n, r, l, c) {
    if (is = null, n = nn(c), n = Oa(n), n !== null) if (r = Xe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ot(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return is = n, null;
  }
  function Nd(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (br()) {
          case fa:
            return 1;
          case Tt:
            return 4;
          case mi:
          case nh:
            return 16;
          case Rd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ui = null, os = null, ls = null;
  function Ad() {
    if (ls) return ls;
    var n, r = os, l = r.length, c, p = "value" in Ui ? Ui.value : Ui.textContent, g = p.length;
    for (n = 0; n < l && r[n] === p[n]; n++) ;
    var T = l - n;
    for (c = 1; c <= T && r[l - c] === p[g - c]; c++) ;
    return ls = p.slice(n, 1 < c ? 1 - c : void 0);
  }
  function Yl(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function us() {
    return !0;
  }
  function fh() {
    return !1;
  }
  function da(n) {
    function r(l, c, p, g, T) {
      this._reactName = l, this._targetInst = p, this.type = c, this.nativeEvent = g, this.target = T, this.currentTarget = null;
      for (var M in n) n.hasOwnProperty(M) && (l = n[M], this[M] = l ? l(g) : g[M]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? us : fh, this.isPropagationStopped = fh, this;
    }
    return W(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = us);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = us);
    }, persist: function() {
    }, isPersistent: us }), r;
  }
  var po = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ec = da(po), Gl = W({}, po, { view: 0, detail: 0 }), dh = da(Gl), Cc, Ld, ss, Jn = W({}, Gl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $d, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ss && (ss && n.type === "mousemove" ? (Cc = n.screenX - ss.screenX, Ld = n.screenY - ss.screenY) : Ld = Cc = 0, ss = n), Cc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Ld;
  } }), Tc = da(Jn), ph = W({}, Jn, { dataTransfer: 0 }), vh = da(ph), Qg = W({}, Gl, { relatedTarget: 0 }), vo = da(Qg), zd = W({}, po, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), hh = da(zd), qg = W({}, po, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Kg = da(qg), Xg = W({}, po, { data: 0 }), Ud = da(Xg), Pd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, mh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, yh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function gh(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = yh[n]) ? !!r[n] : !1;
  }
  function $d() {
    return gh;
  }
  var Pi = W({}, Gl, { key: function(n) {
    if (n.key) {
      var r = Pd[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Yl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? mh[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $d, charCode: function(n) {
    return n.type === "keypress" ? Yl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Yl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Zg = da(Pi), jd = W({}, Jn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), xc = da(jd), Fd = W({}, Gl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $d }), Jg = da(Fd), Rc = W({}, po, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sh = da(Rc), Vr = W({}, Jn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $i = da(Vr), Un = [9, 13, 27, 32], ni = x && "CompositionEvent" in window, Jo = null;
  x && "documentMode" in document && (Jo = document.documentMode);
  var wc = x && "TextEvent" in window && !Jo, bh = x && (!ni || Jo && 8 < Jo && 11 >= Jo), Ql = " ", Eh = !1;
  function Ch(n, r) {
    switch (n) {
      case "keyup":
        return Un.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function kc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ql = !1;
  function e0(n, r) {
    switch (n) {
      case "compositionend":
        return kc(r);
      case "keypress":
        return r.which !== 32 ? null : (Eh = !0, Ql);
      case "textInput":
        return n = r.data, n === Ql && Eh ? null : n;
      default:
        return null;
    }
  }
  function t0(n, r) {
    if (ql) return n === "compositionend" || !ni && Ch(n, r) ? (n = Ad(), ls = os = Ui = null, ql = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return bh && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Th = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function xh(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Th[n.type] : r === "textarea";
  }
  function Rh(n, r, l, c) {
    Yo(c), r = ys(r, "onChange"), 0 < r.length && (l = new Ec("onChange", "change", null, l, c), n.push({ event: l, listeners: r }));
  }
  var cs = null, Kl = null;
  function Xl(n) {
    Mc(n, 0);
  }
  function Zl(n) {
    var r = eu(n);
    if (be(r)) return n;
  }
  function wh(n, r) {
    if (n === "change") return r;
  }
  var Bd = !1;
  if (x) {
    var Vd;
    if (x) {
      var Hd = "oninput" in document;
      if (!Hd) {
        var kh = document.createElement("div");
        kh.setAttribute("oninput", "return;"), Hd = typeof kh.oninput == "function";
      }
      Vd = Hd;
    } else Vd = !1;
    Bd = Vd && (!document.documentMode || 9 < document.documentMode);
  }
  function Oh() {
    cs && (cs.detachEvent("onpropertychange", Dh), Kl = cs = null);
  }
  function Dh(n) {
    if (n.propertyName === "value" && Zl(Kl)) {
      var r = [];
      Rh(r, Kl, n, nn(n)), Bl(Xl, r);
    }
  }
  function n0(n, r, l) {
    n === "focusin" ? (Oh(), cs = r, Kl = l, cs.attachEvent("onpropertychange", Dh)) : n === "focusout" && Oh();
  }
  function r0(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zl(Kl);
  }
  function a0(n, r) {
    if (n === "click") return Zl(r);
  }
  function _h(n, r) {
    if (n === "input" || n === "change") return Zl(r);
  }
  function i0(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ka = typeof Object.is == "function" ? Object.is : i0;
  function fs(n, r) {
    if (ka(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), c = Object.keys(r);
    if (l.length !== c.length) return !1;
    for (c = 0; c < l.length; c++) {
      var p = l[c];
      if (!w.call(r, p) || !ka(n[p], r[p])) return !1;
    }
    return !0;
  }
  function Mh(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Nh(n, r) {
    var l = Mh(n);
    n = 0;
    for (var c; l; ) {
      if (l.nodeType === 3) {
        if (c = n + l.textContent.length, n <= r && c >= r) return { node: l, offset: r - n };
        n = c;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Mh(l);
    }
  }
  function Ah(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Ah(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Oc() {
    for (var n = window, r = Rt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Rt(n.document);
    }
    return r;
  }
  function ji(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Dc(n) {
    var r = Oc(), l = n.focusedElem, c = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Ah(l.ownerDocument.documentElement, l)) {
      if (c !== null && ji(l)) {
        if (r = c.start, n = c.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = l.textContent.length, g = Math.min(c.start, p);
          c = c.end === void 0 ? g : Math.min(c.end, p), !n.extend && g > c && (p = c, c = g, g = p), p = Nh(l, g);
          var T = Nh(
            l,
            c
          );
          p && T && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== T.node || n.focusOffset !== T.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), g > c ? (n.addRange(r), n.extend(T.node, T.offset)) : (r.setEnd(T.node, T.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Lh = x && "documentMode" in document && 11 >= document.documentMode, ri = null, Id = null, ds = null, Wd = !1;
  function zh(n, r, l) {
    var c = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Wd || ri == null || ri !== Rt(c) || (c = ri, "selectionStart" in c && ji(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), ds && fs(ds, c) || (ds = c, c = ys(Id, "onSelect"), 0 < c.length && (r = new Ec("onSelect", "select", null, r, l), n.push({ event: r, listeners: c }), r.target = ri)));
  }
  function _c(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var el = { animationend: _c("Animation", "AnimationEnd"), animationiteration: _c("Animation", "AnimationIteration"), animationstart: _c("Animation", "AnimationStart"), transitionend: _c("Transition", "TransitionEnd") }, Yd = {}, Gd = {};
  x && (Gd = document.createElement("div").style, "AnimationEvent" in window || (delete el.animationend.animation, delete el.animationiteration.animation, delete el.animationstart.animation), "TransitionEvent" in window || delete el.transitionend.transition);
  function er(n) {
    if (Yd[n]) return Yd[n];
    if (!el[n]) return n;
    var r = el[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Gd) return Yd[n] = r[l];
    return n;
  }
  var Qd = er("animationend"), Uh = er("animationiteration"), Ph = er("animationstart"), $h = er("transitionend"), jh = /* @__PURE__ */ new Map(), Fh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Fi(n, r) {
    jh.set(n, r), S(r, [n]);
  }
  for (var ps = 0; ps < Fh.length; ps++) {
    var tl = Fh[ps], o0 = tl.toLowerCase(), vs = tl[0].toUpperCase() + tl.slice(1);
    Fi(o0, "on" + vs);
  }
  Fi(Qd, "onAnimationEnd"), Fi(Uh, "onAnimationIteration"), Fi(Ph, "onAnimationStart"), Fi("dblclick", "onDoubleClick"), Fi("focusin", "onFocus"), Fi("focusout", "onBlur"), Fi($h, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), S("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), S("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), S("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), S("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var hs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), l0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(hs));
  function Bh(n, r, l) {
    var c = n.type || "unknown-event";
    n.currentTarget = l, Re(c, r, void 0, n), n.currentTarget = null;
  }
  function Mc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var c = n[l], p = c.event;
      c = c.listeners;
      e: {
        var g = void 0;
        if (r) for (var T = c.length - 1; 0 <= T; T--) {
          var M = c[T], z = M.instance, Z = M.currentTarget;
          if (M = M.listener, z !== g && p.isPropagationStopped()) break e;
          Bh(p, M, Z), g = z;
        }
        else for (T = 0; T < c.length; T++) {
          if (M = c[T], z = M.instance, Z = M.currentTarget, M = M.listener, z !== g && p.isPropagationStopped()) break e;
          Bh(p, M, Z), g = z;
        }
      }
    }
    if (so) throw n = qo, so = !1, qo = null, n;
  }
  function tn(n, r) {
    var l = r[tp];
    l === void 0 && (l = r[tp] = /* @__PURE__ */ new Set());
    var c = n + "__bubble";
    l.has(c) || (Vh(r, n, 2, !1), l.add(c));
  }
  function ho(n, r, l) {
    var c = 0;
    r && (c |= 4), Vh(l, n, c, r);
  }
  var Bi = "_reactListening" + Math.random().toString(36).slice(2);
  function Jl(n) {
    if (!n[Bi]) {
      n[Bi] = !0, v.forEach(function(l) {
        l !== "selectionchange" && (l0.has(l) || ho(l, !1, n), ho(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Bi] || (r[Bi] = !0, ho("selectionchange", !1, r));
    }
  }
  function Vh(n, r, l, c) {
    switch (Nd(r)) {
      case 1:
        var p = ch;
        break;
      case 4:
        p = gc;
        break;
      default:
        p = Sc;
    }
    l = p.bind(null, r, l, n), p = void 0, !Vl || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), c ? p !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: p }) : n.addEventListener(r, l, !0) : p !== void 0 ? n.addEventListener(r, l, { passive: p }) : n.addEventListener(r, l, !1);
  }
  function Nc(n, r, l, c, p) {
    var g = c;
    if (!(r & 1) && !(r & 2) && c !== null) e: for (; ; ) {
      if (c === null) return;
      var T = c.tag;
      if (T === 3 || T === 4) {
        var M = c.stateNode.containerInfo;
        if (M === p || M.nodeType === 8 && M.parentNode === p) break;
        if (T === 4) for (T = c.return; T !== null; ) {
          var z = T.tag;
          if ((z === 3 || z === 4) && (z = T.stateNode.containerInfo, z === p || z.nodeType === 8 && z.parentNode === p)) return;
          T = T.return;
        }
        for (; M !== null; ) {
          if (T = Oa(M), T === null) return;
          if (z = T.tag, z === 5 || z === 6) {
            c = g = T;
            continue e;
          }
          M = M.parentNode;
        }
      }
      c = c.return;
    }
    Bl(function() {
      var Z = g, pe = nn(l), ye = [];
      e: {
        var de = jh.get(n);
        if (de !== void 0) {
          var ze = Ec, He = n;
          switch (n) {
            case "keypress":
              if (Yl(l) === 0) break e;
            case "keydown":
            case "keyup":
              ze = Zg;
              break;
            case "focusin":
              He = "focus", ze = vo;
              break;
            case "focusout":
              He = "blur", ze = vo;
              break;
            case "beforeblur":
            case "afterblur":
              ze = vo;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ze = Tc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ze = vh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ze = Jg;
              break;
            case Qd:
            case Uh:
            case Ph:
              ze = hh;
              break;
            case $h:
              ze = Sh;
              break;
            case "scroll":
              ze = dh;
              break;
            case "wheel":
              ze = $i;
              break;
            case "copy":
            case "cut":
            case "paste":
              ze = Kg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ze = xc;
          }
          var Ye = (r & 4) !== 0, An = !Ye && n === "scroll", I = Ye ? de !== null ? de + "Capture" : null : de;
          Ye = [];
          for (var F = Z, Q; F !== null; ) {
            Q = F;
            var Ee = Q.stateNode;
            if (Q.tag === 5 && Ee !== null && (Q = Ee, I !== null && (Ee = Qo(F, I), Ee != null && Ye.push(ms(F, Ee, Q)))), An) break;
            F = F.return;
          }
          0 < Ye.length && (de = new ze(de, He, null, l, pe), ye.push({ event: de, listeners: Ye }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (de = n === "mouseover" || n === "pointerover", ze = n === "mouseout" || n === "pointerout", de && l !== Fr && (He = l.relatedTarget || l.fromElement) && (Oa(He) || He[Vi])) break e;
          if ((ze || de) && (de = pe.window === pe ? pe : (de = pe.ownerDocument) ? de.defaultView || de.parentWindow : window, ze ? (He = l.relatedTarget || l.toElement, ze = Z, He = He ? Oa(He) : null, He !== null && (An = Xe(He), He !== An || He.tag !== 5 && He.tag !== 6) && (He = null)) : (ze = null, He = Z), ze !== He)) {
            if (Ye = Tc, Ee = "onMouseLeave", I = "onMouseEnter", F = "mouse", (n === "pointerout" || n === "pointerover") && (Ye = xc, Ee = "onPointerLeave", I = "onPointerEnter", F = "pointer"), An = ze == null ? de : eu(ze), Q = He == null ? de : eu(He), de = new Ye(Ee, F + "leave", ze, l, pe), de.target = An, de.relatedTarget = Q, Ee = null, Oa(pe) === Z && (Ye = new Ye(I, F + "enter", He, l, pe), Ye.target = Q, Ye.relatedTarget = An, Ee = Ye), An = Ee, ze && He) t: {
              for (Ye = ze, I = He, F = 0, Q = Ye; Q; Q = nl(Q)) F++;
              for (Q = 0, Ee = I; Ee; Ee = nl(Ee)) Q++;
              for (; 0 < F - Q; ) Ye = nl(Ye), F--;
              for (; 0 < Q - F; ) I = nl(I), Q--;
              for (; F--; ) {
                if (Ye === I || I !== null && Ye === I.alternate) break t;
                Ye = nl(Ye), I = nl(I);
              }
              Ye = null;
            }
            else Ye = null;
            ze !== null && qd(ye, de, ze, Ye, !1), He !== null && An !== null && qd(ye, An, He, Ye, !0);
          }
        }
        e: {
          if (de = Z ? eu(Z) : window, ze = de.nodeName && de.nodeName.toLowerCase(), ze === "select" || ze === "input" && de.type === "file") var Qe = wh;
          else if (xh(de)) if (Bd) Qe = _h;
          else {
            Qe = r0;
            var ot = n0;
          }
          else (ze = de.nodeName) && ze.toLowerCase() === "input" && (de.type === "checkbox" || de.type === "radio") && (Qe = a0);
          if (Qe && (Qe = Qe(n, Z))) {
            Rh(ye, Qe, l, pe);
            break e;
          }
          ot && ot(n, de, Z), n === "focusout" && (ot = de._wrapperState) && ot.controlled && de.type === "number" && ur(de, "number", de.value);
        }
        switch (ot = Z ? eu(Z) : window, n) {
          case "focusin":
            (xh(ot) || ot.contentEditable === "true") && (ri = ot, Id = Z, ds = null);
            break;
          case "focusout":
            ds = Id = ri = null;
            break;
          case "mousedown":
            Wd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wd = !1, zh(ye, l, pe);
            break;
          case "selectionchange":
            if (Lh) break;
          case "keydown":
          case "keyup":
            zh(ye, l, pe);
        }
        var Ie;
        if (ni) e: {
          switch (n) {
            case "compositionstart":
              var lt = "onCompositionStart";
              break e;
            case "compositionend":
              lt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              lt = "onCompositionUpdate";
              break e;
          }
          lt = void 0;
        }
        else ql ? Ch(n, l) && (lt = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (lt = "onCompositionStart");
        lt && (bh && l.locale !== "ko" && (ql || lt !== "onCompositionStart" ? lt === "onCompositionEnd" && ql && (Ie = Ad()) : (Ui = pe, os = "value" in Ui ? Ui.value : Ui.textContent, ql = !0)), ot = ys(Z, lt), 0 < ot.length && (lt = new Ud(lt, n, null, l, pe), ye.push({ event: lt, listeners: ot }), Ie ? lt.data = Ie : (Ie = kc(l), Ie !== null && (lt.data = Ie)))), (Ie = wc ? e0(n, l) : t0(n, l)) && (Z = ys(Z, "onBeforeInput"), 0 < Z.length && (pe = new Ud("onBeforeInput", "beforeinput", null, l, pe), ye.push({ event: pe, listeners: Z }), pe.data = Ie));
      }
      Mc(ye, r);
    });
  }
  function ms(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ys(n, r) {
    for (var l = r + "Capture", c = []; n !== null; ) {
      var p = n, g = p.stateNode;
      p.tag === 5 && g !== null && (p = g, g = Qo(n, l), g != null && c.unshift(ms(n, g, p)), g = Qo(n, r), g != null && c.push(ms(n, g, p))), n = n.return;
    }
    return c;
  }
  function nl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function qd(n, r, l, c, p) {
    for (var g = r._reactName, T = []; l !== null && l !== c; ) {
      var M = l, z = M.alternate, Z = M.stateNode;
      if (z !== null && z === c) break;
      M.tag === 5 && Z !== null && (M = Z, p ? (z = Qo(l, g), z != null && T.unshift(ms(l, z, M))) : p || (z = Qo(l, g), z != null && T.push(ms(l, z, M)))), l = l.return;
    }
    T.length !== 0 && n.push({ event: r, listeners: T });
  }
  var Kd = /\r\n?/g, u0 = /\u0000|\uFFFD/g;
  function Xd(n) {
    return (typeof n == "string" ? n : "" + n).replace(Kd, `
`).replace(u0, "");
  }
  function Ac(n, r, l) {
    if (r = Xd(r), Xd(n) !== r && l) throw Error(f(425));
  }
  function Lc() {
  }
  var Zd = null, rl = null;
  function gs(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var al = typeof setTimeout == "function" ? setTimeout : void 0, Hh = typeof clearTimeout == "function" ? clearTimeout : void 0, Jd = typeof Promise == "function" ? Promise : void 0, ep = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jd < "u" ? function(n) {
    return Jd.resolve(null).then(n).catch(s0);
  } : al;
  function s0(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function mo(n, r) {
    var l = r, c = 0;
    do {
      var p = l.nextSibling;
      if (n.removeChild(l), p && p.nodeType === 8) if (l = p.data, l === "/$") {
        if (c === 0) {
          n.removeChild(p), as(r);
          return;
        }
        c--;
      } else l !== "$" && l !== "$?" && l !== "$!" || c++;
      l = p;
    } while (l);
    as(r);
  }
  function ai(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Ss(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var yo = Math.random().toString(36).slice(2), yi = "__reactFiber$" + yo, il = "__reactProps$" + yo, Vi = "__reactContainer$" + yo, tp = "__reactEvents$" + yo, c0 = "__reactListeners$" + yo, np = "__reactHandles$" + yo;
  function Oa(n) {
    var r = n[yi];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Vi] || l[yi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Ss(n); n !== null; ) {
          if (l = n[yi]) return l;
          n = Ss(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function bs(n) {
    return n = n[yi] || n[Vi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function eu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(f(33));
  }
  function rt(n) {
    return n[il] || null;
  }
  var go = [], ln = -1;
  function bt(n) {
    return { current: n };
  }
  function Ut(n) {
    0 > ln || (n.current = go[ln], go[ln] = null, ln--);
  }
  function jt(n, r) {
    ln++, go[ln] = n.current, n.current = r;
  }
  var gi = {}, pt = bt(gi), Tn = bt(!1), Hr = gi;
  function Da(n, r) {
    var l = n.type.contextTypes;
    if (!l) return gi;
    var c = n.stateNode;
    if (c && c.__reactInternalMemoizedUnmaskedChildContext === r) return c.__reactInternalMemoizedMaskedChildContext;
    var p = {}, g;
    for (g in l) p[g] = r[g];
    return c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function hn(n) {
    return n = n.childContextTypes, n != null;
  }
  function _a() {
    Ut(Tn), Ut(pt);
  }
  function So(n, r, l) {
    if (pt.current !== gi) throw Error(f(168));
    jt(pt, r), jt(Tn, l);
  }
  function Es(n, r, l) {
    var c = n.stateNode;
    if (r = r.childContextTypes, typeof c.getChildContext != "function") return l;
    c = c.getChildContext();
    for (var p in c) if (!(p in r)) throw Error(f(108, Je(n) || "Unknown", p));
    return W({}, l, c);
  }
  function zc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || gi, Hr = pt.current, jt(pt, n), jt(Tn, Tn.current), !0;
  }
  function Ih(n, r, l) {
    var c = n.stateNode;
    if (!c) throw Error(f(169));
    l ? (n = Es(n, r, Hr), c.__reactInternalMemoizedMergedChildContext = n, Ut(Tn), Ut(pt), jt(pt, n)) : Ut(Tn), jt(Tn, l);
  }
  var pa = null, tr = !1, Cs = !1;
  function rp(n) {
    pa === null ? pa = [n] : pa.push(n);
  }
  function ap(n) {
    tr = !0, rp(n);
  }
  function Ir() {
    if (!Cs && pa !== null) {
      Cs = !0;
      var n = 0, r = Vt;
      try {
        var l = pa;
        for (Vt = 1; n < l.length; n++) {
          var c = l[n];
          do
            c = c(!0);
          while (c !== null);
        }
        pa = null, tr = !1;
      } catch (p) {
        throw pa !== null && (pa = pa.slice(n + 1)), on(fa, Ir), p;
      } finally {
        Vt = r, Cs = !1;
      }
    }
    return null;
  }
  var bo = [], Wr = 0, ol = null, tu = 0, Yr = [], Cr = 0, Ma = null, sr = 1, Hi = "";
  function va(n, r) {
    bo[Wr++] = tu, bo[Wr++] = ol, ol = n, tu = r;
  }
  function ip(n, r, l) {
    Yr[Cr++] = sr, Yr[Cr++] = Hi, Yr[Cr++] = Ma, Ma = n;
    var c = sr;
    n = Hi;
    var p = 32 - xa(c) - 1;
    c &= ~(1 << p), l += 1;
    var g = 32 - xa(r) + p;
    if (30 < g) {
      var T = p - p % 5;
      g = (c & (1 << T) - 1).toString(32), c >>= T, p -= T, sr = 1 << 32 - xa(r) + p | l << p | c, Hi = g + n;
    } else sr = 1 << g | l << p | c, Hi = n;
  }
  function Uc(n) {
    n.return !== null && (va(n, 1), ip(n, 1, 0));
  }
  function op(n) {
    for (; n === ol; ) ol = bo[--Wr], bo[Wr] = null, tu = bo[--Wr], bo[Wr] = null;
    for (; n === Ma; ) Ma = Yr[--Cr], Yr[Cr] = null, Hi = Yr[--Cr], Yr[Cr] = null, sr = Yr[--Cr], Yr[Cr] = null;
  }
  var ha = null, Gr = null, un = !1, Na = null;
  function lp(n, r) {
    var l = Fa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Wh(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ha = n, Gr = ai(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ha = n, Gr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ma !== null ? { id: sr, overflow: Hi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Fa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ha = n, Gr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Pc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function $c(n) {
    if (un) {
      var r = Gr;
      if (r) {
        var l = r;
        if (!Wh(n, r)) {
          if (Pc(n)) throw Error(f(418));
          r = ai(l.nextSibling);
          var c = ha;
          r && Wh(n, r) ? lp(c, l) : (n.flags = n.flags & -4097 | 2, un = !1, ha = n);
        }
      } else {
        if (Pc(n)) throw Error(f(418));
        n.flags = n.flags & -4097 | 2, un = !1, ha = n;
      }
    }
  }
  function Yh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ha = n;
  }
  function jc(n) {
    if (n !== ha) return !1;
    if (!un) return Yh(n), un = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !gs(n.type, n.memoizedProps)), r && (r = Gr)) {
      if (Pc(n)) throw Gh(), Error(f(418));
      for (; r; ) lp(n, r), r = ai(r.nextSibling);
    }
    if (Yh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Gr = ai(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Gr = null;
      }
    } else Gr = ha ? ai(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Gh() {
    for (var n = Gr; n; ) n = ai(n.nextSibling);
  }
  function bn() {
    Gr = ha = null, un = !1;
  }
  function up(n) {
    Na === null ? Na = [n] : Na.push(n);
  }
  var Fc = K.ReactCurrentBatchConfig;
  function ll(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(f(309));
          var c = l.stateNode;
        }
        if (!c) throw Error(f(147, n));
        var p = c, g = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === g ? r.ref : (r = function(T) {
          var M = p.refs;
          T === null ? delete M[g] : M[g] = T;
        }, r._stringRef = g, r);
      }
      if (typeof n != "string") throw Error(f(284));
      if (!l._owner) throw Error(f(290, n));
    }
    return n;
  }
  function Si(n, r) {
    throw n = Object.prototype.toString.call(r), Error(f(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Qh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Bc(n) {
    function r(I, F) {
      if (n) {
        var Q = I.deletions;
        Q === null ? (I.deletions = [F], I.flags |= 16) : Q.push(F);
      }
    }
    function l(I, F) {
      if (!n) return null;
      for (; F !== null; ) r(I, F), F = F.sibling;
      return null;
    }
    function c(I, F) {
      for (I = /* @__PURE__ */ new Map(); F !== null; ) F.key !== null ? I.set(F.key, F) : I.set(F.index, F), F = F.sibling;
      return I;
    }
    function p(I, F) {
      return I = Oo(I, F), I.index = 0, I.sibling = null, I;
    }
    function g(I, F, Q) {
      return I.index = Q, n ? (Q = I.alternate, Q !== null ? (Q = Q.index, Q < F ? (I.flags |= 2, F) : Q) : (I.flags |= 2, F)) : (I.flags |= 1048576, F);
    }
    function T(I) {
      return n && I.alternate === null && (I.flags |= 2), I;
    }
    function M(I, F, Q, Ee) {
      return F === null || F.tag !== 6 ? (F = Df(Q, I.mode, Ee), F.return = I, F) : (F = p(F, Q), F.return = I, F);
    }
    function z(I, F, Q, Ee) {
      var Qe = Q.type;
      return Qe === re ? pe(I, F, Q.props.children, Ee, Q.key) : F !== null && (F.elementType === Qe || typeof Qe == "object" && Qe !== null && Qe.$$typeof === Ce && Qh(Qe) === F.type) ? (Ee = p(F, Q.props), Ee.ref = ll(I, F, Q), Ee.return = I, Ee) : (Ee = kf(Q.type, Q.key, Q.props, null, I.mode, Ee), Ee.ref = ll(I, F, Q), Ee.return = I, Ee);
    }
    function Z(I, F, Q, Ee) {
      return F === null || F.tag !== 4 || F.stateNode.containerInfo !== Q.containerInfo || F.stateNode.implementation !== Q.implementation ? (F = Fs(Q, I.mode, Ee), F.return = I, F) : (F = p(F, Q.children || []), F.return = I, F);
    }
    function pe(I, F, Q, Ee, Qe) {
      return F === null || F.tag !== 7 ? (F = Cl(Q, I.mode, Ee, Qe), F.return = I, F) : (F = p(F, Q), F.return = I, F);
    }
    function ye(I, F, Q) {
      if (typeof F == "string" && F !== "" || typeof F == "number") return F = Df("" + F, I.mode, Q), F.return = I, F;
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case V:
            return Q = kf(F.type, F.key, F.props, null, I.mode, Q), Q.ref = ll(I, null, F), Q.return = I, Q;
          case le:
            return F = Fs(F, I.mode, Q), F.return = I, F;
          case Ce:
            var Ee = F._init;
            return ye(I, Ee(F._payload), Q);
        }
        if (Ka(F) || Ae(F)) return F = Cl(F, I.mode, Q, null), F.return = I, F;
        Si(I, F);
      }
      return null;
    }
    function de(I, F, Q, Ee) {
      var Qe = F !== null ? F.key : null;
      if (typeof Q == "string" && Q !== "" || typeof Q == "number") return Qe !== null ? null : M(I, F, "" + Q, Ee);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case V:
            return Q.key === Qe ? z(I, F, Q, Ee) : null;
          case le:
            return Q.key === Qe ? Z(I, F, Q, Ee) : null;
          case Ce:
            return Qe = Q._init, de(
              I,
              F,
              Qe(Q._payload),
              Ee
            );
        }
        if (Ka(Q) || Ae(Q)) return Qe !== null ? null : pe(I, F, Q, Ee, null);
        Si(I, Q);
      }
      return null;
    }
    function ze(I, F, Q, Ee, Qe) {
      if (typeof Ee == "string" && Ee !== "" || typeof Ee == "number") return I = I.get(Q) || null, M(F, I, "" + Ee, Qe);
      if (typeof Ee == "object" && Ee !== null) {
        switch (Ee.$$typeof) {
          case V:
            return I = I.get(Ee.key === null ? Q : Ee.key) || null, z(F, I, Ee, Qe);
          case le:
            return I = I.get(Ee.key === null ? Q : Ee.key) || null, Z(F, I, Ee, Qe);
          case Ce:
            var ot = Ee._init;
            return ze(I, F, Q, ot(Ee._payload), Qe);
        }
        if (Ka(Ee) || Ae(Ee)) return I = I.get(Q) || null, pe(F, I, Ee, Qe, null);
        Si(F, Ee);
      }
      return null;
    }
    function He(I, F, Q, Ee) {
      for (var Qe = null, ot = null, Ie = F, lt = F = 0, Qn = null; Ie !== null && lt < Q.length; lt++) {
        Ie.index > lt ? (Qn = Ie, Ie = null) : Qn = Ie.sibling;
        var At = de(I, Ie, Q[lt], Ee);
        if (At === null) {
          Ie === null && (Ie = Qn);
          break;
        }
        n && Ie && At.alternate === null && r(I, Ie), F = g(At, F, lt), ot === null ? Qe = At : ot.sibling = At, ot = At, Ie = Qn;
      }
      if (lt === Q.length) return l(I, Ie), un && va(I, lt), Qe;
      if (Ie === null) {
        for (; lt < Q.length; lt++) Ie = ye(I, Q[lt], Ee), Ie !== null && (F = g(Ie, F, lt), ot === null ? Qe = Ie : ot.sibling = Ie, ot = Ie);
        return un && va(I, lt), Qe;
      }
      for (Ie = c(I, Ie); lt < Q.length; lt++) Qn = ze(Ie, I, lt, Q[lt], Ee), Qn !== null && (n && Qn.alternate !== null && Ie.delete(Qn.key === null ? lt : Qn.key), F = g(Qn, F, lt), ot === null ? Qe = Qn : ot.sibling = Qn, ot = Qn);
      return n && Ie.forEach(function(Ki) {
        return r(I, Ki);
      }), un && va(I, lt), Qe;
    }
    function Ye(I, F, Q, Ee) {
      var Qe = Ae(Q);
      if (typeof Qe != "function") throw Error(f(150));
      if (Q = Qe.call(Q), Q == null) throw Error(f(151));
      for (var ot = Qe = null, Ie = F, lt = F = 0, Qn = null, At = Q.next(); Ie !== null && !At.done; lt++, At = Q.next()) {
        Ie.index > lt ? (Qn = Ie, Ie = null) : Qn = Ie.sibling;
        var Ki = de(I, Ie, At.value, Ee);
        if (Ki === null) {
          Ie === null && (Ie = Qn);
          break;
        }
        n && Ie && Ki.alternate === null && r(I, Ie), F = g(Ki, F, lt), ot === null ? Qe = Ki : ot.sibling = Ki, ot = Ki, Ie = Qn;
      }
      if (At.done) return l(
        I,
        Ie
      ), un && va(I, lt), Qe;
      if (Ie === null) {
        for (; !At.done; lt++, At = Q.next()) At = ye(I, At.value, Ee), At !== null && (F = g(At, F, lt), ot === null ? Qe = At : ot.sibling = At, ot = At);
        return un && va(I, lt), Qe;
      }
      for (Ie = c(I, Ie); !At.done; lt++, At = Q.next()) At = ze(Ie, I, lt, At.value, Ee), At !== null && (n && At.alternate !== null && Ie.delete(At.key === null ? lt : At.key), F = g(At, F, lt), ot === null ? Qe = At : ot.sibling = At, ot = At);
      return n && Ie.forEach(function(O0) {
        return r(I, O0);
      }), un && va(I, lt), Qe;
    }
    function An(I, F, Q, Ee) {
      if (typeof Q == "object" && Q !== null && Q.type === re && Q.key === null && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case V:
            e: {
              for (var Qe = Q.key, ot = F; ot !== null; ) {
                if (ot.key === Qe) {
                  if (Qe = Q.type, Qe === re) {
                    if (ot.tag === 7) {
                      l(I, ot.sibling), F = p(ot, Q.props.children), F.return = I, I = F;
                      break e;
                    }
                  } else if (ot.elementType === Qe || typeof Qe == "object" && Qe !== null && Qe.$$typeof === Ce && Qh(Qe) === ot.type) {
                    l(I, ot.sibling), F = p(ot, Q.props), F.ref = ll(I, ot, Q), F.return = I, I = F;
                    break e;
                  }
                  l(I, ot);
                  break;
                } else r(I, ot);
                ot = ot.sibling;
              }
              Q.type === re ? (F = Cl(Q.props.children, I.mode, Ee, Q.key), F.return = I, I = F) : (Ee = kf(Q.type, Q.key, Q.props, null, I.mode, Ee), Ee.ref = ll(I, F, Q), Ee.return = I, I = Ee);
            }
            return T(I);
          case le:
            e: {
              for (ot = Q.key; F !== null; ) {
                if (F.key === ot) if (F.tag === 4 && F.stateNode.containerInfo === Q.containerInfo && F.stateNode.implementation === Q.implementation) {
                  l(I, F.sibling), F = p(F, Q.children || []), F.return = I, I = F;
                  break e;
                } else {
                  l(I, F);
                  break;
                }
                else r(I, F);
                F = F.sibling;
              }
              F = Fs(Q, I.mode, Ee), F.return = I, I = F;
            }
            return T(I);
          case Ce:
            return ot = Q._init, An(I, F, ot(Q._payload), Ee);
        }
        if (Ka(Q)) return He(I, F, Q, Ee);
        if (Ae(Q)) return Ye(I, F, Q, Ee);
        Si(I, Q);
      }
      return typeof Q == "string" && Q !== "" || typeof Q == "number" ? (Q = "" + Q, F !== null && F.tag === 6 ? (l(I, F.sibling), F = p(F, Q), F.return = I, I = F) : (l(I, F), F = Df(Q, I.mode, Ee), F.return = I, I = F), T(I)) : l(I, F);
    }
    return An;
  }
  var nu = Bc(!0), qh = Bc(!1), Ii = bt(null), In = null, we = null, Aa = null;
  function ma() {
    Aa = we = In = null;
  }
  function sp(n) {
    var r = Ii.current;
    Ut(Ii), n._currentValue = r;
  }
  function cp(n, r, l) {
    for (; n !== null; ) {
      var c = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, c !== null && (c.childLanes |= r)) : c !== null && (c.childLanes & r) !== r && (c.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function ru(n, r) {
    In = n, Aa = we = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Kr = !0), n.firstContext = null);
  }
  function La(n) {
    var r = n._currentValue;
    if (Aa !== n) if (n = { context: n, memoizedValue: r, next: null }, we === null) {
      if (In === null) throw Error(f(308));
      we = n, In.dependencies = { lanes: 0, firstContext: n };
    } else we = we.next = n;
    return r;
  }
  var ul = null;
  function Pn(n) {
    ul === null ? ul = [n] : ul.push(n);
  }
  function Kh(n, r, l, c) {
    var p = r.interleaved;
    return p === null ? (l.next = l, Pn(r)) : (l.next = p.next, p.next = l), r.interleaved = l, Wi(n, c);
  }
  function Wi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Eo = !1;
  function Vc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function au(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Qr(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Co(n, r, l) {
    var c = n.updateQueue;
    if (c === null) return null;
    if (c = c.shared, wt & 2) {
      var p = c.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), c.pending = r, Wi(n, l);
    }
    return p = c.interleaved, p === null ? (r.next = r, Pn(c)) : (r.next = p.next, p.next = r), c.interleaved = r, Wi(n, l);
  }
  function Hc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var c = r.lanes;
      c &= n.pendingLanes, l |= c, r.lanes = l, es(n, l);
    }
  }
  function Xh(n, r) {
    var l = n.updateQueue, c = n.alternate;
    if (c !== null && (c = c.updateQueue, l === c)) {
      var p = null, g = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var T = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          g === null ? p = g = T : g = g.next = T, l = l.next;
        } while (l !== null);
        g === null ? p = g = r : g = g.next = r;
      } else p = g = r;
      l = { baseState: c.baseState, firstBaseUpdate: p, lastBaseUpdate: g, shared: c.shared, effects: c.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Ic(n, r, l, c) {
    var p = n.updateQueue;
    Eo = !1;
    var g = p.firstBaseUpdate, T = p.lastBaseUpdate, M = p.shared.pending;
    if (M !== null) {
      p.shared.pending = null;
      var z = M, Z = z.next;
      z.next = null, T === null ? g = Z : T.next = Z, T = z;
      var pe = n.alternate;
      pe !== null && (pe = pe.updateQueue, M = pe.lastBaseUpdate, M !== T && (M === null ? pe.firstBaseUpdate = Z : M.next = Z, pe.lastBaseUpdate = z));
    }
    if (g !== null) {
      var ye = p.baseState;
      T = 0, pe = Z = z = null, M = g;
      do {
        var de = M.lane, ze = M.eventTime;
        if ((c & de) === de) {
          pe !== null && (pe = pe.next = {
            eventTime: ze,
            lane: 0,
            tag: M.tag,
            payload: M.payload,
            callback: M.callback,
            next: null
          });
          e: {
            var He = n, Ye = M;
            switch (de = r, ze = l, Ye.tag) {
              case 1:
                if (He = Ye.payload, typeof He == "function") {
                  ye = He.call(ze, ye, de);
                  break e;
                }
                ye = He;
                break e;
              case 3:
                He.flags = He.flags & -65537 | 128;
              case 0:
                if (He = Ye.payload, de = typeof He == "function" ? He.call(ze, ye, de) : He, de == null) break e;
                ye = W({}, ye, de);
                break e;
              case 2:
                Eo = !0;
            }
          }
          M.callback !== null && M.lane !== 0 && (n.flags |= 64, de = p.effects, de === null ? p.effects = [M] : de.push(M));
        } else ze = { eventTime: ze, lane: de, tag: M.tag, payload: M.payload, callback: M.callback, next: null }, pe === null ? (Z = pe = ze, z = ye) : pe = pe.next = ze, T |= de;
        if (M = M.next, M === null) {
          if (M = p.shared.pending, M === null) break;
          de = M, M = de.next, de.next = null, p.lastBaseUpdate = de, p.shared.pending = null;
        }
      } while (!0);
      if (pe === null && (z = ye), p.baseState = z, p.firstBaseUpdate = Z, p.lastBaseUpdate = pe, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          T |= p.lane, p = p.next;
        while (p !== r);
      } else g === null && (p.shared.lanes = 0);
      gl |= T, n.lanes = T, n.memoizedState = ye;
    }
  }
  function Zh(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var c = n[r], p = c.callback;
      if (p !== null) {
        if (c.callback = null, c = l, typeof p != "function") throw Error(f(191, p));
        p.call(c);
      }
    }
  }
  var Ts = {}, ii = bt(Ts), iu = bt(Ts), xs = bt(Ts);
  function sl(n) {
    if (n === Ts) throw Error(f(174));
    return n;
  }
  function fp(n, r) {
    switch (jt(xs, r), jt(iu, n), jt(ii, Ts), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Dn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Dn(r, n);
    }
    Ut(ii), jt(ii, r);
  }
  function ou() {
    Ut(ii), Ut(iu), Ut(xs);
  }
  function Jh(n) {
    sl(xs.current);
    var r = sl(ii.current), l = Dn(r, n.type);
    r !== l && (jt(iu, n), jt(ii, l));
  }
  function dp(n) {
    iu.current === n && (Ut(ii), Ut(iu));
  }
  var mn = bt(0);
  function Wc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Yc = [];
  function pp() {
    for (var n = 0; n < Yc.length; n++) Yc[n]._workInProgressVersionPrimary = null;
    Yc.length = 0;
  }
  var Gc = K.ReactCurrentDispatcher, Rs = K.ReactCurrentBatchConfig, Ge = 0, qe = null, vt = null, xt = null, ya = !1, lu = !1, ws = 0, f0 = 0;
  function Tr() {
    throw Error(f(321));
  }
  function ks(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ka(n[l], r[l])) return !1;
    return !0;
  }
  function fe(n, r, l, c, p, g) {
    if (Ge = g, qe = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Gc.current = n === null || n.memoizedState === null ? d0 : an, n = l(c, p), lu) {
      g = 0;
      do {
        if (lu = !1, ws = 0, 25 <= g) throw Error(f(301));
        g += 1, xt = vt = null, r.updateQueue = null, Gc.current = sf, n = l(c, p);
      } while (lu);
    }
    if (Gc.current = xr, r = vt !== null && vt.next !== null, Ge = 0, xt = vt = qe = null, ya = !1, r) throw Error(f(300));
    return n;
  }
  function $n() {
    var n = ws !== 0;
    return ws = 0, n;
  }
  function Ze() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return xt === null ? qe.memoizedState = xt = n : xt = xt.next = n, xt;
  }
  function cr() {
    if (vt === null) {
      var n = qe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = vt.next;
    var r = xt === null ? qe.memoizedState : xt.next;
    if (r !== null) xt = r, vt = n;
    else {
      if (n === null) throw Error(f(310));
      vt = n, n = { memoizedState: vt.memoizedState, baseState: vt.baseState, baseQueue: vt.baseQueue, queue: vt.queue, next: null }, xt === null ? qe.memoizedState = xt = n : xt = xt.next = n;
    }
    return xt;
  }
  function ga(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Yi(n) {
    var r = cr(), l = r.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = n;
    var c = vt, p = c.baseQueue, g = l.pending;
    if (g !== null) {
      if (p !== null) {
        var T = p.next;
        p.next = g.next, g.next = T;
      }
      c.baseQueue = p = g, l.pending = null;
    }
    if (p !== null) {
      g = p.next, c = c.baseState;
      var M = T = null, z = null, Z = g;
      do {
        var pe = Z.lane;
        if ((Ge & pe) === pe) z !== null && (z = z.next = { lane: 0, action: Z.action, hasEagerState: Z.hasEagerState, eagerState: Z.eagerState, next: null }), c = Z.hasEagerState ? Z.eagerState : n(c, Z.action);
        else {
          var ye = {
            lane: pe,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null
          };
          z === null ? (M = z = ye, T = c) : z = z.next = ye, qe.lanes |= pe, gl |= pe;
        }
        Z = Z.next;
      } while (Z !== null && Z !== g);
      z === null ? T = c : z.next = M, ka(c, r.memoizedState) || (Kr = !0), r.memoizedState = c, r.baseState = T, r.baseQueue = z, l.lastRenderedState = c;
    }
    if (n = l.interleaved, n !== null) {
      p = n;
      do
        g = p.lane, qe.lanes |= g, gl |= g, p = p.next;
      while (p !== n);
    } else p === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function za(n) {
    var r = cr(), l = r.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = n;
    var c = l.dispatch, p = l.pending, g = r.memoizedState;
    if (p !== null) {
      l.pending = null;
      var T = p = p.next;
      do
        g = n(g, T.action), T = T.next;
      while (T !== p);
      ka(g, r.memoizedState) || (Kr = !0), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), l.lastRenderedState = g;
    }
    return [g, c];
  }
  function uu() {
  }
  function cl(n, r) {
    var l = qe, c = cr(), p = r(), g = !ka(c.memoizedState, p);
    if (g && (c.memoizedState = p, Kr = !0), c = c.queue, Os(qc.bind(null, l, c, n), [n]), c.getSnapshot !== r || g || xt !== null && xt.memoizedState.tag & 1) {
      if (l.flags |= 2048, fl(9, Qc.bind(null, l, c, p, r), void 0, null), Rn === null) throw Error(f(349));
      Ge & 30 || su(l, r, p);
    }
    return p;
  }
  function su(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = qe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qe.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Qc(n, r, l, c) {
    r.value = l, r.getSnapshot = c, Kc(r) && Xc(n);
  }
  function qc(n, r, l) {
    return l(function() {
      Kc(r) && Xc(n);
    });
  }
  function Kc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ka(n, l);
    } catch {
      return !0;
    }
  }
  function Xc(n) {
    var r = Wi(n, 1);
    r !== null && En(r, n, 1, -1);
  }
  function Zc(n) {
    var r = Ze();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ga, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ds.bind(null, qe, n), [r.memoizedState, n];
  }
  function fl(n, r, l, c) {
    return n = { tag: n, create: r, destroy: l, deps: c, next: null }, r = qe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qe.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (c = l.next, l.next = n, n.next = c, r.lastEffect = n)), n;
  }
  function Jc() {
    return cr().memoizedState;
  }
  function cu(n, r, l, c) {
    var p = Ze();
    qe.flags |= n, p.memoizedState = fl(1 | r, l, void 0, c === void 0 ? null : c);
  }
  function fu(n, r, l, c) {
    var p = cr();
    c = c === void 0 ? null : c;
    var g = void 0;
    if (vt !== null) {
      var T = vt.memoizedState;
      if (g = T.destroy, c !== null && ks(c, T.deps)) {
        p.memoizedState = fl(r, l, g, c);
        return;
      }
    }
    qe.flags |= n, p.memoizedState = fl(1 | r, l, g, c);
  }
  function ef(n, r) {
    return cu(8390656, 8, n, r);
  }
  function Os(n, r) {
    return fu(2048, 8, n, r);
  }
  function tf(n, r) {
    return fu(4, 2, n, r);
  }
  function nf(n, r) {
    return fu(4, 4, n, r);
  }
  function rf(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function af(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fu(4, 4, rf.bind(null, r, n), l);
  }
  function du() {
  }
  function dl(n, r) {
    var l = cr();
    r = r === void 0 ? null : r;
    var c = l.memoizedState;
    return c !== null && r !== null && ks(r, c[1]) ? c[0] : (l.memoizedState = [n, r], n);
  }
  function of(n, r) {
    var l = cr();
    r = r === void 0 ? null : r;
    var c = l.memoizedState;
    return c !== null && r !== null && ks(r, c[1]) ? c[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function lf(n, r, l) {
    return Ge & 21 ? (ka(l, r) || (l = mc(), qe.lanes |= l, gl |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Kr = !0), n.memoizedState = l);
  }
  function vp(n, r) {
    var l = Vt;
    Vt = l !== 0 && 4 > l ? l : 4, n(!0);
    var c = Rs.transition;
    Rs.transition = {};
    try {
      n(!1), r();
    } finally {
      Vt = l, Rs.transition = c;
    }
  }
  function uf() {
    return cr().memoizedState;
  }
  function em(n, r, l) {
    var c = qi(n);
    if (l = { lane: c, action: l, hasEagerState: !1, eagerState: null, next: null }, hp(n)) pu(r, l);
    else if (l = Kh(n, r, l, c), l !== null) {
      var p = ar();
      En(l, n, c, p), To(l, r, c);
    }
  }
  function Ds(n, r, l) {
    var c = qi(n), p = { lane: c, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (hp(n)) pu(r, p);
    else {
      var g = n.alternate;
      if (n.lanes === 0 && (g === null || g.lanes === 0) && (g = r.lastRenderedReducer, g !== null)) try {
        var T = r.lastRenderedState, M = g(T, l);
        if (p.hasEagerState = !0, p.eagerState = M, ka(M, T)) {
          var z = r.interleaved;
          z === null ? (p.next = p, Pn(r)) : (p.next = z.next, z.next = p), r.interleaved = p;
          return;
        }
      } catch {
      } finally {
      }
      l = Kh(n, r, p, c), l !== null && (p = ar(), En(l, n, c, p), To(l, r, c));
    }
  }
  function hp(n) {
    var r = n.alternate;
    return n === qe || r !== null && r === qe;
  }
  function pu(n, r) {
    lu = ya = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function To(n, r, l) {
    if (l & 4194240) {
      var c = r.lanes;
      c &= n.pendingLanes, l |= c, r.lanes = l, es(n, l);
    }
  }
  var xr = { readContext: La, useCallback: Tr, useContext: Tr, useEffect: Tr, useImperativeHandle: Tr, useInsertionEffect: Tr, useLayoutEffect: Tr, useMemo: Tr, useReducer: Tr, useRef: Tr, useState: Tr, useDebugValue: Tr, useDeferredValue: Tr, useTransition: Tr, useMutableSource: Tr, useSyncExternalStore: Tr, useId: Tr, unstable_isNewReconciler: !1 }, d0 = { readContext: La, useCallback: function(n, r) {
    return Ze().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: La, useEffect: ef, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, cu(
      4194308,
      4,
      rf.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return cu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return cu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Ze();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var c = Ze();
    return r = l !== void 0 ? l(r) : r, c.memoizedState = c.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, c.queue = n, n = n.dispatch = em.bind(null, qe, n), [c.memoizedState, n];
  }, useRef: function(n) {
    var r = Ze();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Zc, useDebugValue: du, useDeferredValue: function(n) {
    return Ze().memoizedState = n;
  }, useTransition: function() {
    var n = Zc(!1), r = n[0];
    return n = vp.bind(null, n[1]), Ze().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var c = qe, p = Ze();
    if (un) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else {
      if (l = r(), Rn === null) throw Error(f(349));
      Ge & 30 || su(c, r, l);
    }
    p.memoizedState = l;
    var g = { value: l, getSnapshot: r };
    return p.queue = g, ef(qc.bind(
      null,
      c,
      g,
      n
    ), [n]), c.flags |= 2048, fl(9, Qc.bind(null, c, g, l, r), void 0, null), l;
  }, useId: function() {
    var n = Ze(), r = Rn.identifierPrefix;
    if (un) {
      var l = Hi, c = sr;
      l = (c & ~(1 << 32 - xa(c) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ws++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = f0++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, an = {
    readContext: La,
    useCallback: dl,
    useContext: La,
    useEffect: Os,
    useImperativeHandle: af,
    useInsertionEffect: tf,
    useLayoutEffect: nf,
    useMemo: of,
    useReducer: Yi,
    useRef: Jc,
    useState: function() {
      return Yi(ga);
    },
    useDebugValue: du,
    useDeferredValue: function(n) {
      var r = cr();
      return lf(r, vt.memoizedState, n);
    },
    useTransition: function() {
      var n = Yi(ga)[0], r = cr().memoizedState;
      return [n, r];
    },
    useMutableSource: uu,
    useSyncExternalStore: cl,
    useId: uf,
    unstable_isNewReconciler: !1
  }, sf = { readContext: La, useCallback: dl, useContext: La, useEffect: Os, useImperativeHandle: af, useInsertionEffect: tf, useLayoutEffect: nf, useMemo: of, useReducer: za, useRef: Jc, useState: function() {
    return za(ga);
  }, useDebugValue: du, useDeferredValue: function(n) {
    var r = cr();
    return vt === null ? r.memoizedState = n : lf(r, vt.memoizedState, n);
  }, useTransition: function() {
    var n = za(ga)[0], r = cr().memoizedState;
    return [n, r];
  }, useMutableSource: uu, useSyncExternalStore: cl, useId: uf, unstable_isNewReconciler: !1 };
  function qr(n, r) {
    if (n && n.defaultProps) {
      r = W({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function pl(n, r, l, c) {
    r = n.memoizedState, l = l(c, r), l = l == null ? r : W({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var vl = { isMounted: function(n) {
    return (n = n._reactInternals) ? Xe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var c = ar(), p = qi(n), g = Qr(c, p);
    g.payload = r, l != null && (g.callback = l), r = Co(n, g, p), r !== null && (En(r, n, p, c), Hc(r, n, p));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var c = ar(), p = qi(n), g = Qr(c, p);
    g.tag = 1, g.payload = r, l != null && (g.callback = l), r = Co(n, g, p), r !== null && (En(r, n, p, c), Hc(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = ar(), c = qi(n), p = Qr(l, c);
    p.tag = 2, r != null && (p.callback = r), r = Co(n, p, c), r !== null && (En(r, n, c, l), Hc(r, n, c));
  } };
  function tm(n, r, l, c, p, g, T) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, g, T) : r.prototype && r.prototype.isPureReactComponent ? !fs(l, c) || !fs(p, g) : !0;
  }
  function nm(n, r, l) {
    var c = !1, p = gi, g = r.contextType;
    return typeof g == "object" && g !== null ? g = La(g) : (p = hn(r) ? Hr : pt.current, c = r.contextTypes, g = (c = c != null) ? Da(n, p) : gi), r = new r(l, g), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = vl, n.stateNode = r, r._reactInternals = n, c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = g), r;
  }
  function rm(n, r, l, c) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, c), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, c), r.state !== n && vl.enqueueReplaceState(r, r.state, null);
  }
  function mp(n, r, l, c) {
    var p = n.stateNode;
    p.props = l, p.state = n.memoizedState, p.refs = {}, Vc(n);
    var g = r.contextType;
    typeof g == "object" && g !== null ? p.context = La(g) : (g = hn(r) ? Hr : pt.current, p.context = Da(n, g)), p.state = n.memoizedState, g = r.getDerivedStateFromProps, typeof g == "function" && (pl(n, r, g, l), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && vl.enqueueReplaceState(p, p.state, null), Ic(n, l, p, c), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function xo(n, r) {
    try {
      var l = "", c = r;
      do
        l += it(c), c = c.return;
      while (c);
      var p = l;
    } catch (g) {
      p = `
Error generating stack: ` + g.message + `
` + g.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function yp(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function _s(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var am = typeof WeakMap == "function" ? WeakMap : Map;
  function im(n, r, l) {
    l = Qr(-1, l), l.tag = 3, l.payload = { element: null };
    var c = r.value;
    return l.callback = function() {
      Ef || (Ef = !0, wp = c), _s(n, r);
    }, l;
  }
  function om(n, r, l) {
    l = Qr(-1, l), l.tag = 3;
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var p = r.value;
      l.payload = function() {
        return c(p);
      }, l.callback = function() {
        _s(n, r);
      };
    }
    var g = n.stateNode;
    return g !== null && typeof g.componentDidCatch == "function" && (l.callback = function() {
      _s(n, r), typeof c != "function" && ($a === null ? $a = /* @__PURE__ */ new Set([this]) : $a.add(this));
      var T = r.stack;
      this.componentDidCatch(r.value, { componentStack: T !== null ? T : "" });
    }), l;
  }
  function Ms(n, r, l) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new am();
      var p = /* @__PURE__ */ new Set();
      c.set(r, p);
    } else p = c.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), c.set(r, p));
    p.has(l) || (p.add(l), n = C0.bind(null, n, r, l), r.then(n, n));
  }
  function lm(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function gp(n, r, l, c, p) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Qr(-1, 1), r.tag = 2, Co(l, r, 1))), l.lanes |= 1), n);
  }
  var um = K.ReactCurrentOwner, Kr = !1;
  function Mn(n, r, l, c) {
    r.child = n === null ? qh(r, null, l, c) : nu(r, n.child, l, c);
  }
  function vu(n, r, l, c, p) {
    l = l.render;
    var g = r.ref;
    return ru(r, p), c = fe(n, r, l, c, g, p), l = $n(), n !== null && !Kr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, Nn(n, r, p)) : (un && l && Uc(r), r.flags |= 1, Mn(n, r, c, p), r.child);
  }
  function Ro(n, r, l, c, p) {
    if (n === null) {
      var g = l.type;
      return typeof g == "function" && !Mp(g) && g.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = g, cf(n, r, g, c, p)) : (n = kf(l.type, null, c, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (g = n.child, !(n.lanes & p)) {
      var T = g.memoizedProps;
      if (l = l.compare, l = l !== null ? l : fs, l(T, c) && n.ref === r.ref) return Nn(n, r, p);
    }
    return r.flags |= 1, n = Oo(g, c), n.ref = r.ref, n.return = r, r.child = n;
  }
  function cf(n, r, l, c, p) {
    if (n !== null) {
      var g = n.memoizedProps;
      if (fs(g, c) && n.ref === r.ref) if (Kr = !1, r.pendingProps = c = g, (n.lanes & p) !== 0) n.flags & 131072 && (Kr = !0);
      else return r.lanes = n.lanes, Nn(n, r, p);
    }
    return St(n, r, l, c, p);
  }
  function Xr(n, r, l) {
    var c = r.pendingProps, p = c.children, g = n !== null ? n.memoizedState : null;
    if (c.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, jt(xu, Zr), Zr |= l;
    else {
      if (!(l & 1073741824)) return n = g !== null ? g.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, jt(xu, Zr), Zr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, c = g !== null ? g.baseLanes : l, jt(xu, Zr), Zr |= c;
    }
    else g !== null ? (c = g.baseLanes | l, r.memoizedState = null) : c = l, jt(xu, Zr), Zr |= c;
    return Mn(n, r, p, l), r.child;
  }
  function hl(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function St(n, r, l, c, p) {
    var g = hn(l) ? Hr : pt.current;
    return g = Da(r, g), ru(r, p), l = fe(n, r, l, c, g, p), c = $n(), n !== null && !Kr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, Nn(n, r, p)) : (un && c && Uc(r), r.flags |= 1, Mn(n, r, l, p), r.child);
  }
  function Ns(n, r, l, c, p) {
    if (hn(l)) {
      var g = !0;
      zc(r);
    } else g = !1;
    if (ru(r, p), r.stateNode === null) Ls(n, r), nm(r, l, c), mp(r, l, c, p), c = !0;
    else if (n === null) {
      var T = r.stateNode, M = r.memoizedProps;
      T.props = M;
      var z = T.context, Z = l.contextType;
      typeof Z == "object" && Z !== null ? Z = La(Z) : (Z = hn(l) ? Hr : pt.current, Z = Da(r, Z));
      var pe = l.getDerivedStateFromProps, ye = typeof pe == "function" || typeof T.getSnapshotBeforeUpdate == "function";
      ye || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (M !== c || z !== Z) && rm(r, T, c, Z), Eo = !1;
      var de = r.memoizedState;
      T.state = de, Ic(r, c, T, p), z = r.memoizedState, M !== c || de !== z || Tn.current || Eo ? (typeof pe == "function" && (pl(r, l, pe, c), z = r.memoizedState), (M = Eo || tm(r, l, M, c, de, z, Z)) ? (ye || typeof T.UNSAFE_componentWillMount != "function" && typeof T.componentWillMount != "function" || (typeof T.componentWillMount == "function" && T.componentWillMount(), typeof T.UNSAFE_componentWillMount == "function" && T.UNSAFE_componentWillMount()), typeof T.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof T.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = c, r.memoizedState = z), T.props = c, T.state = z, T.context = Z, c = M) : (typeof T.componentDidMount == "function" && (r.flags |= 4194308), c = !1);
    } else {
      T = r.stateNode, au(n, r), M = r.memoizedProps, Z = r.type === r.elementType ? M : qr(r.type, M), T.props = Z, ye = r.pendingProps, de = T.context, z = l.contextType, typeof z == "object" && z !== null ? z = La(z) : (z = hn(l) ? Hr : pt.current, z = Da(r, z));
      var ze = l.getDerivedStateFromProps;
      (pe = typeof ze == "function" || typeof T.getSnapshotBeforeUpdate == "function") || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (M !== ye || de !== z) && rm(r, T, c, z), Eo = !1, de = r.memoizedState, T.state = de, Ic(r, c, T, p);
      var He = r.memoizedState;
      M !== ye || de !== He || Tn.current || Eo ? (typeof ze == "function" && (pl(r, l, ze, c), He = r.memoizedState), (Z = Eo || tm(r, l, Z, c, de, He, z) || !1) ? (pe || typeof T.UNSAFE_componentWillUpdate != "function" && typeof T.componentWillUpdate != "function" || (typeof T.componentWillUpdate == "function" && T.componentWillUpdate(c, He, z), typeof T.UNSAFE_componentWillUpdate == "function" && T.UNSAFE_componentWillUpdate(c, He, z)), typeof T.componentDidUpdate == "function" && (r.flags |= 4), typeof T.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof T.componentDidUpdate != "function" || M === n.memoizedProps && de === n.memoizedState || (r.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && de === n.memoizedState || (r.flags |= 1024), r.memoizedProps = c, r.memoizedState = He), T.props = c, T.state = He, T.context = z, c = Z) : (typeof T.componentDidUpdate != "function" || M === n.memoizedProps && de === n.memoizedState || (r.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && de === n.memoizedState || (r.flags |= 1024), c = !1);
    }
    return ff(n, r, l, c, g, p);
  }
  function ff(n, r, l, c, p, g) {
    hl(n, r);
    var T = (r.flags & 128) !== 0;
    if (!c && !T) return p && Ih(r, l, !1), Nn(n, r, g);
    c = r.stateNode, um.current = r;
    var M = T && typeof l.getDerivedStateFromError != "function" ? null : c.render();
    return r.flags |= 1, n !== null && T ? (r.child = nu(r, n.child, null, g), r.child = nu(r, null, M, g)) : Mn(n, r, M, g), r.memoizedState = c.state, p && Ih(r, l, !0), r.child;
  }
  function p0(n) {
    var r = n.stateNode;
    r.pendingContext ? So(n, r.pendingContext, r.pendingContext !== r.context) : r.context && So(n, r.context, !1), fp(n, r.containerInfo);
  }
  function sm(n, r, l, c, p) {
    return bn(), up(p), r.flags |= 256, Mn(n, r, l, c), r.child;
  }
  var As = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ml(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function cm(n, r, l) {
    var c = r.pendingProps, p = mn.current, g = !1, T = (r.flags & 128) !== 0, M;
    if ((M = T) || (M = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), M ? (g = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), jt(mn, p & 1), n === null)
      return $c(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (T = c.children, n = c.fallback, g ? (c = r.mode, g = r.child, T = { mode: "hidden", children: T }, !(c & 1) && g !== null ? (g.childLanes = 0, g.pendingProps = T) : g = Of(T, c, 0, null), n = Cl(n, c, l, null), g.return = r, n.return = r, g.sibling = n, r.child = g, r.child.memoizedState = ml(l), r.memoizedState = As, n) : df(r, T));
    if (p = n.memoizedState, p !== null && (M = p.dehydrated, M !== null)) return Sp(n, r, T, c, M, p, l);
    if (g) {
      g = c.fallback, T = r.mode, p = n.child, M = p.sibling;
      var z = { mode: "hidden", children: c.children };
      return !(T & 1) && r.child !== p ? (c = r.child, c.childLanes = 0, c.pendingProps = z, r.deletions = null) : (c = Oo(p, z), c.subtreeFlags = p.subtreeFlags & 14680064), M !== null ? g = Oo(M, g) : (g = Cl(g, T, l, null), g.flags |= 2), g.return = r, c.return = r, c.sibling = g, r.child = c, c = g, g = r.child, T = n.child.memoizedState, T = T === null ? ml(l) : { baseLanes: T.baseLanes | l, cachePool: null, transitions: T.transitions }, g.memoizedState = T, g.childLanes = n.childLanes & ~l, r.memoizedState = As, c;
    }
    return g = n.child, n = g.sibling, c = Oo(g, { mode: "visible", children: c.children }), !(r.mode & 1) && (c.lanes = l), c.return = r, c.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = c, r.memoizedState = null, c;
  }
  function df(n, r) {
    return r = Of({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function pf(n, r, l, c) {
    return c !== null && up(c), nu(r, n.child, null, l), n = df(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Sp(n, r, l, c, p, g, T) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, c = yp(Error(f(422))), pf(n, r, T, c)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (g = c.fallback, p = r.mode, c = Of({ mode: "visible", children: c.children }, p, 0, null), g = Cl(g, p, T, null), g.flags |= 2, c.return = r, g.return = r, c.sibling = g, r.child = c, r.mode & 1 && nu(r, n.child, null, T), r.child.memoizedState = ml(T), r.memoizedState = As, g);
    if (!(r.mode & 1)) return pf(n, r, T, null);
    if (p.data === "$!") {
      if (c = p.nextSibling && p.nextSibling.dataset, c) var M = c.dgst;
      return c = M, g = Error(f(419)), c = yp(g, c, void 0), pf(n, r, T, c);
    }
    if (M = (T & n.childLanes) !== 0, Kr || M) {
      if (c = Rn, c !== null) {
        switch (T & -T) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = p & (c.suspendedLanes | T) ? 0 : p, p !== 0 && p !== g.retryLane && (g.retryLane = p, Wi(n, p), En(c, n, p, -1));
      }
      return js(), c = yp(Error(f(421))), pf(n, r, T, c);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = _p.bind(null, n), p._reactRetry = r, null) : (n = g.treeContext, Gr = ai(p.nextSibling), ha = r, un = !0, Na = null, n !== null && (Yr[Cr++] = sr, Yr[Cr++] = Hi, Yr[Cr++] = Ma, sr = n.id, Hi = n.overflow, Ma = r), r = df(r, c.children), r.flags |= 4096, r);
  }
  function fm(n, r, l) {
    n.lanes |= r;
    var c = n.alternate;
    c !== null && (c.lanes |= r), cp(n.return, r, l);
  }
  function vf(n, r, l, c, p) {
    var g = n.memoizedState;
    g === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: c, tail: l, tailMode: p } : (g.isBackwards = r, g.rendering = null, g.renderingStartTime = 0, g.last = c, g.tail = l, g.tailMode = p);
  }
  function bp(n, r, l) {
    var c = r.pendingProps, p = c.revealOrder, g = c.tail;
    if (Mn(n, r, c.children, l), c = mn.current, c & 2) c = c & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && fm(n, l, r);
        else if (n.tag === 19) fm(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      c &= 1;
    }
    if (jt(mn, c), !(r.mode & 1)) r.memoizedState = null;
    else switch (p) {
      case "forwards":
        for (l = r.child, p = null; l !== null; ) n = l.alternate, n !== null && Wc(n) === null && (p = l), l = l.sibling;
        l = p, l === null ? (p = r.child, r.child = null) : (p = l.sibling, l.sibling = null), vf(r, !1, p, l, g);
        break;
      case "backwards":
        for (l = null, p = r.child, r.child = null; p !== null; ) {
          if (n = p.alternate, n !== null && Wc(n) === null) {
            r.child = p;
            break;
          }
          n = p.sibling, p.sibling = l, l = p, p = n;
        }
        vf(r, !0, l, null, g);
        break;
      case "together":
        vf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ls(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Nn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), gl |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(f(153));
    if (r.child !== null) {
      for (n = r.child, l = Oo(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Oo(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Gi(n, r, l) {
    switch (r.tag) {
      case 3:
        p0(r), bn();
        break;
      case 5:
        Jh(r);
        break;
      case 1:
        hn(r.type) && zc(r);
        break;
      case 4:
        fp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var c = r.type._context, p = r.memoizedProps.value;
        jt(Ii, c._currentValue), c._currentValue = p;
        break;
      case 13:
        if (c = r.memoizedState, c !== null)
          return c.dehydrated !== null ? (jt(mn, mn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? cm(n, r, l) : (jt(mn, mn.current & 1), n = Nn(n, r, l), n !== null ? n.sibling : null);
        jt(mn, mn.current & 1);
        break;
      case 19:
        if (c = (l & r.childLanes) !== 0, n.flags & 128) {
          if (c) return bp(n, r, l);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), jt(mn, mn.current), c) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Xr(n, r, l);
    }
    return Nn(n, r, l);
  }
  var bi, hu, mu, Ua;
  bi = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, hu = function() {
  }, mu = function(n, r, l, c) {
    var p = n.memoizedProps;
    if (p !== c) {
      n = r.stateNode, sl(ii.current);
      var g = null;
      switch (l) {
        case "input":
          p = Me(n, p), c = Me(n, c), g = [];
          break;
        case "select":
          p = W({}, p, { value: void 0 }), c = W({}, c, { value: void 0 }), g = [];
          break;
        case "textarea":
          p = oa(n, p), c = oa(n, c), g = [];
          break;
        default:
          typeof p.onClick != "function" && typeof c.onClick == "function" && (n.onclick = Lc);
      }
      Xn(l, c);
      var T;
      l = null;
      for (Z in p) if (!c.hasOwnProperty(Z) && p.hasOwnProperty(Z) && p[Z] != null) if (Z === "style") {
        var M = p[Z];
        for (T in M) M.hasOwnProperty(T) && (l || (l = {}), l[T] = "");
      } else Z !== "dangerouslySetInnerHTML" && Z !== "children" && Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && Z !== "autoFocus" && (y.hasOwnProperty(Z) ? g || (g = []) : (g = g || []).push(Z, null));
      for (Z in c) {
        var z = c[Z];
        if (M = p != null ? p[Z] : void 0, c.hasOwnProperty(Z) && z !== M && (z != null || M != null)) if (Z === "style") if (M) {
          for (T in M) !M.hasOwnProperty(T) || z && z.hasOwnProperty(T) || (l || (l = {}), l[T] = "");
          for (T in z) z.hasOwnProperty(T) && M[T] !== z[T] && (l || (l = {}), l[T] = z[T]);
        } else l || (g || (g = []), g.push(
          Z,
          l
        )), l = z;
        else Z === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, M = M ? M.__html : void 0, z != null && M !== z && (g = g || []).push(Z, z)) : Z === "children" ? typeof z != "string" && typeof z != "number" || (g = g || []).push(Z, "" + z) : Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && (y.hasOwnProperty(Z) ? (z != null && Z === "onScroll" && tn("scroll", n), g || M === z || (g = [])) : (g = g || []).push(Z, z));
      }
      l && (g = g || []).push("style", l);
      var Z = g;
      (r.updateQueue = Z) && (r.flags |= 4);
    }
  }, Ua = function(n, r, l, c) {
    l !== c && (r.flags |= 4);
  };
  function xn(n, r) {
    if (!un) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var c = null; l !== null; ) l.alternate !== null && (c = l), l = l.sibling;
        c === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null;
    }
  }
  function Rr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, c = 0;
    if (r) for (var p = n.child; p !== null; ) l |= p.lanes | p.childLanes, c |= p.subtreeFlags & 14680064, c |= p.flags & 14680064, p.return = n, p = p.sibling;
    else for (p = n.child; p !== null; ) l |= p.lanes | p.childLanes, c |= p.subtreeFlags, c |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= c, n.childLanes = l, r;
  }
  function v0(n, r, l) {
    var c = r.pendingProps;
    switch (op(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Rr(r), null;
      case 1:
        return hn(r.type) && _a(), Rr(r), null;
      case 3:
        return c = r.stateNode, ou(), Ut(Tn), Ut(pt), pp(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (n === null || n.child === null) && (jc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Na !== null && (kp(Na), Na = null))), hu(n, r), Rr(r), null;
      case 5:
        dp(r);
        var p = sl(xs.current);
        if (l = r.type, n !== null && r.stateNode != null) mu(n, r, l, c, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!c) {
            if (r.stateNode === null) throw Error(f(166));
            return Rr(r), null;
          }
          if (n = sl(ii.current), jc(r)) {
            c = r.stateNode, l = r.type;
            var g = r.memoizedProps;
            switch (c[yi] = r, c[il] = g, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                tn("cancel", c), tn("close", c);
                break;
              case "iframe":
              case "object":
              case "embed":
                tn("load", c);
                break;
              case "video":
              case "audio":
                for (p = 0; p < hs.length; p++) tn(hs[p], c);
                break;
              case "source":
                tn("error", c);
                break;
              case "img":
              case "image":
              case "link":
                tn(
                  "error",
                  c
                ), tn("load", c);
                break;
              case "details":
                tn("toggle", c);
                break;
              case "input":
                Yt(c, g), tn("invalid", c);
                break;
              case "select":
                c._wrapperState = { wasMultiple: !!g.multiple }, tn("invalid", c);
                break;
              case "textarea":
                tt(c, g), tn("invalid", c);
            }
            Xn(l, g), p = null;
            for (var T in g) if (g.hasOwnProperty(T)) {
              var M = g[T];
              T === "children" ? typeof M == "string" ? c.textContent !== M && (g.suppressHydrationWarning !== !0 && Ac(c.textContent, M, n), p = ["children", M]) : typeof M == "number" && c.textContent !== "" + M && (g.suppressHydrationWarning !== !0 && Ac(
                c.textContent,
                M,
                n
              ), p = ["children", "" + M]) : y.hasOwnProperty(T) && M != null && T === "onScroll" && tn("scroll", c);
            }
            switch (l) {
              case "input":
                Dt(c), lr(c, g, !0);
                break;
              case "textarea":
                Dt(c), kr(c);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (c.onclick = Lc);
            }
            c = p, r.updateQueue = c, c !== null && (r.flags |= 4);
          } else {
            T = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = jr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = T.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof c.is == "string" ? n = T.createElement(l, { is: c.is }) : (n = T.createElement(l), l === "select" && (T = n, c.multiple ? T.multiple = !0 : c.size && (T.size = c.size))) : n = T.createElementNS(n, l), n[yi] = r, n[il] = c, bi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (T = _n(l, c), l) {
                case "dialog":
                  tn("cancel", n), tn("close", n), p = c;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  tn("load", n), p = c;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < hs.length; p++) tn(hs[p], n);
                  p = c;
                  break;
                case "source":
                  tn("error", n), p = c;
                  break;
                case "img":
                case "image":
                case "link":
                  tn(
                    "error",
                    n
                  ), tn("load", n), p = c;
                  break;
                case "details":
                  tn("toggle", n), p = c;
                  break;
                case "input":
                  Yt(n, c), p = Me(n, c), tn("invalid", n);
                  break;
                case "option":
                  p = c;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!c.multiple }, p = W({}, c, { value: void 0 }), tn("invalid", n);
                  break;
                case "textarea":
                  tt(n, c), p = oa(n, c), tn("invalid", n);
                  break;
                default:
                  p = c;
              }
              Xn(l, p), M = p;
              for (g in M) if (M.hasOwnProperty(g)) {
                var z = M[g];
                g === "style" ? Bt(n, z) : g === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, z != null && uo(n, z)) : g === "children" ? typeof z == "string" ? (l !== "textarea" || z !== "") && Xa(n, z) : typeof z == "number" && Xa(n, "" + z) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (y.hasOwnProperty(g) ? z != null && g === "onScroll" && tn("scroll", n) : z != null && q(n, g, z, T));
              }
              switch (l) {
                case "input":
                  Dt(n), lr(n, c, !1);
                  break;
                case "textarea":
                  Dt(n), kr(n);
                  break;
                case "option":
                  c.value != null && n.setAttribute("value", "" + et(c.value));
                  break;
                case "select":
                  n.multiple = !!c.multiple, g = c.value, g != null ? ia(n, !!c.multiple, g, !1) : c.defaultValue != null && ia(
                    n,
                    !!c.multiple,
                    c.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = Lc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break e;
                case "img":
                  c = !0;
                  break e;
                default:
                  c = !1;
              }
            }
            c && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Rr(r), null;
      case 6:
        if (n && r.stateNode != null) Ua(n, r, n.memoizedProps, c);
        else {
          if (typeof c != "string" && r.stateNode === null) throw Error(f(166));
          if (l = sl(xs.current), sl(ii.current), jc(r)) {
            if (c = r.stateNode, l = r.memoizedProps, c[yi] = r, (g = c.nodeValue !== l) && (n = ha, n !== null)) switch (n.tag) {
              case 3:
                Ac(c.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ac(c.nodeValue, l, (n.mode & 1) !== 0);
            }
            g && (r.flags |= 4);
          } else c = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(c), c[yi] = r, r.stateNode = c;
        }
        return Rr(r), null;
      case 13:
        if (Ut(mn), c = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (un && Gr !== null && r.mode & 1 && !(r.flags & 128)) Gh(), bn(), r.flags |= 98560, g = !1;
          else if (g = jc(r), c !== null && c.dehydrated !== null) {
            if (n === null) {
              if (!g) throw Error(f(318));
              if (g = r.memoizedState, g = g !== null ? g.dehydrated : null, !g) throw Error(f(317));
              g[yi] = r;
            } else bn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Rr(r), g = !1;
          } else Na !== null && (kp(Na), Na = null), g = !0;
          if (!g) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (c = c !== null, c !== (n !== null && n.memoizedState !== null) && c && (r.child.flags |= 8192, r.mode & 1 && (n === null || mn.current & 1 ? Yn === 0 && (Yn = 3) : js())), r.updateQueue !== null && (r.flags |= 4), Rr(r), null);
      case 4:
        return ou(), hu(n, r), n === null && Jl(r.stateNode.containerInfo), Rr(r), null;
      case 10:
        return sp(r.type._context), Rr(r), null;
      case 17:
        return hn(r.type) && _a(), Rr(r), null;
      case 19:
        if (Ut(mn), g = r.memoizedState, g === null) return Rr(r), null;
        if (c = (r.flags & 128) !== 0, T = g.rendering, T === null) if (c) xn(g, !1);
        else {
          if (Yn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (T = Wc(n), T !== null) {
              for (r.flags |= 128, xn(g, !1), c = T.updateQueue, c !== null && (r.updateQueue = c, r.flags |= 4), r.subtreeFlags = 0, c = l, l = r.child; l !== null; ) g = l, n = c, g.flags &= 14680066, T = g.alternate, T === null ? (g.childLanes = 0, g.lanes = n, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = T.childLanes, g.lanes = T.lanes, g.child = T.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = T.memoizedProps, g.memoizedState = T.memoizedState, g.updateQueue = T.updateQueue, g.type = T.type, n = T.dependencies, g.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return jt(mn, mn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          g.tail !== null && $t() > wu && (r.flags |= 128, c = !0, xn(g, !1), r.lanes = 4194304);
        }
        else {
          if (!c) if (n = Wc(T), n !== null) {
            if (r.flags |= 128, c = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), xn(g, !0), g.tail === null && g.tailMode === "hidden" && !T.alternate && !un) return Rr(r), null;
          } else 2 * $t() - g.renderingStartTime > wu && l !== 1073741824 && (r.flags |= 128, c = !0, xn(g, !1), r.lanes = 4194304);
          g.isBackwards ? (T.sibling = r.child, r.child = T) : (l = g.last, l !== null ? l.sibling = T : r.child = T, g.last = T);
        }
        return g.tail !== null ? (r = g.tail, g.rendering = r, g.tail = r.sibling, g.renderingStartTime = $t(), r.sibling = null, l = mn.current, jt(mn, c ? l & 1 | 2 : l & 1), r) : (Rr(r), null);
      case 22:
      case 23:
        return Rf(), c = r.memoizedState !== null, n !== null && n.memoizedState !== null !== c && (r.flags |= 8192), c && r.mode & 1 ? Zr & 1073741824 && (Rr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Rr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, r.tag));
  }
  function h0(n, r) {
    switch (op(r), r.tag) {
      case 1:
        return hn(r.type) && _a(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return ou(), Ut(Tn), Ut(pt), pp(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return dp(r), null;
      case 13:
        if (Ut(mn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(f(340));
          bn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ut(mn), null;
      case 4:
        return ou(), null;
      case 10:
        return sp(r.type._context), null;
      case 22:
      case 23:
        return Rf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var yu = !1, fr = !1, hf = typeof WeakSet == "function" ? WeakSet : Set, $e = null;
  function gu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (c) {
      wn(n, r, c);
    }
    else l.current = null;
  }
  function Ep(n, r, l) {
    try {
      l();
    } catch (c) {
      wn(n, r, c);
    }
  }
  var mf = !1;
  function m0(n, r) {
    if (Zd = Zo, n = Oc(), ji(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var c = l.getSelection && l.getSelection();
        if (c && c.rangeCount !== 0) {
          l = c.anchorNode;
          var p = c.anchorOffset, g = c.focusNode;
          c = c.focusOffset;
          try {
            l.nodeType, g.nodeType;
          } catch {
            l = null;
            break e;
          }
          var T = 0, M = -1, z = -1, Z = 0, pe = 0, ye = n, de = null;
          t: for (; ; ) {
            for (var ze; ye !== l || p !== 0 && ye.nodeType !== 3 || (M = T + p), ye !== g || c !== 0 && ye.nodeType !== 3 || (z = T + c), ye.nodeType === 3 && (T += ye.nodeValue.length), (ze = ye.firstChild) !== null; )
              de = ye, ye = ze;
            for (; ; ) {
              if (ye === n) break t;
              if (de === l && ++Z === p && (M = T), de === g && ++pe === c && (z = T), (ze = ye.nextSibling) !== null) break;
              ye = de, de = ye.parentNode;
            }
            ye = ze;
          }
          l = M === -1 || z === -1 ? null : { start: M, end: z };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (rl = { focusedElem: n, selectionRange: l }, Zo = !1, $e = r; $e !== null; ) if (r = $e, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, $e = n;
    else for (; $e !== null; ) {
      r = $e;
      try {
        var He = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (He !== null) {
              var Ye = He.memoizedProps, An = He.memoizedState, I = r.stateNode, F = I.getSnapshotBeforeUpdate(r.elementType === r.type ? Ye : qr(r.type, Ye), An);
              I.__reactInternalSnapshotBeforeUpdate = F;
            }
            break;
          case 3:
            var Q = r.stateNode.containerInfo;
            Q.nodeType === 1 ? Q.textContent = "" : Q.nodeType === 9 && Q.documentElement && Q.removeChild(Q.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(f(163));
        }
      } catch (Ee) {
        wn(r, r.return, Ee);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, $e = n;
        break;
      }
      $e = r.return;
    }
    return He = mf, mf = !1, He;
  }
  function Su(n, r, l) {
    var c = r.updateQueue;
    if (c = c !== null ? c.lastEffect : null, c !== null) {
      var p = c = c.next;
      do {
        if ((p.tag & n) === n) {
          var g = p.destroy;
          p.destroy = void 0, g !== void 0 && Ep(r, l, g);
        }
        p = p.next;
      } while (p !== c);
    }
  }
  function yf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var c = l.create;
          l.destroy = c();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function gf(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function dm(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, dm(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[yi], delete r[il], delete r[tp], delete r[c0], delete r[np])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Cp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function pm(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Cp(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function zs(n, r, l) {
    var c = n.tag;
    if (c === 5 || c === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Lc));
    else if (c !== 4 && (n = n.child, n !== null)) for (zs(n, r, l), n = n.sibling; n !== null; ) zs(n, r, l), n = n.sibling;
  }
  function bu(n, r, l) {
    var c = n.tag;
    if (c === 5 || c === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (c !== 4 && (n = n.child, n !== null)) for (bu(n, r, l), n = n.sibling; n !== null; ) bu(n, r, l), n = n.sibling;
  }
  var yn = null, nr = !1;
  function Or(n, r, l) {
    for (l = l.child; l !== null; ) Eu(n, r, l), l = l.sibling;
  }
  function Eu(n, r, l) {
    if (Ja && typeof Ja.onCommitFiberUnmount == "function") try {
      Ja.onCommitFiberUnmount(Ju, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        fr || gu(l, r);
      case 6:
        var c = yn, p = nr;
        yn = null, Or(n, r, l), yn = c, nr = p, yn !== null && (nr ? (n = yn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : yn.removeChild(l.stateNode));
        break;
      case 18:
        yn !== null && (nr ? (n = yn, l = l.stateNode, n.nodeType === 8 ? mo(n.parentNode, l) : n.nodeType === 1 && mo(n, l), as(n)) : mo(yn, l.stateNode));
        break;
      case 4:
        c = yn, p = nr, yn = l.stateNode.containerInfo, nr = !0, Or(n, r, l), yn = c, nr = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!fr && (c = l.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
          p = c = c.next;
          do {
            var g = p, T = g.destroy;
            g = g.tag, T !== void 0 && (g & 2 || g & 4) && Ep(l, r, T), p = p.next;
          } while (p !== c);
        }
        Or(n, r, l);
        break;
      case 1:
        if (!fr && (gu(l, r), c = l.stateNode, typeof c.componentWillUnmount == "function")) try {
          c.props = l.memoizedProps, c.state = l.memoizedState, c.componentWillUnmount();
        } catch (M) {
          wn(l, r, M);
        }
        Or(n, r, l);
        break;
      case 21:
        Or(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (fr = (c = fr) || l.memoizedState !== null, Or(n, r, l), fr = c) : Or(n, r, l);
        break;
      default:
        Or(n, r, l);
    }
  }
  function Cu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new hf()), r.forEach(function(c) {
        var p = T0.bind(null, n, c);
        l.has(c) || (l.add(c), c.then(p, p));
      });
    }
  }
  function rr(n, r) {
    var l = r.deletions;
    if (l !== null) for (var c = 0; c < l.length; c++) {
      var p = l[c];
      try {
        var g = n, T = r, M = T;
        e: for (; M !== null; ) {
          switch (M.tag) {
            case 5:
              yn = M.stateNode, nr = !1;
              break e;
            case 3:
              yn = M.stateNode.containerInfo, nr = !0;
              break e;
            case 4:
              yn = M.stateNode.containerInfo, nr = !0;
              break e;
          }
          M = M.return;
        }
        if (yn === null) throw Error(f(160));
        Eu(g, T, p), yn = null, nr = !1;
        var z = p.alternate;
        z !== null && (z.return = null), p.return = null;
      } catch (Z) {
        wn(p, r, Z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) vm(r, n), r = r.sibling;
  }
  function vm(n, r) {
    var l = n.alternate, c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (rr(r, n), Ei(n), c & 4) {
          try {
            Su(3, n, n.return), yf(3, n);
          } catch (Ye) {
            wn(n, n.return, Ye);
          }
          try {
            Su(5, n, n.return);
          } catch (Ye) {
            wn(n, n.return, Ye);
          }
        }
        break;
      case 1:
        rr(r, n), Ei(n), c & 512 && l !== null && gu(l, l.return);
        break;
      case 5:
        if (rr(r, n), Ei(n), c & 512 && l !== null && gu(l, l.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            Xa(p, "");
          } catch (Ye) {
            wn(n, n.return, Ye);
          }
        }
        if (c & 4 && (p = n.stateNode, p != null)) {
          var g = n.memoizedProps, T = l !== null ? l.memoizedProps : g, M = n.type, z = n.updateQueue;
          if (n.updateQueue = null, z !== null) try {
            M === "input" && g.type === "radio" && g.name != null && vn(p, g), _n(M, T);
            var Z = _n(M, g);
            for (T = 0; T < z.length; T += 2) {
              var pe = z[T], ye = z[T + 1];
              pe === "style" ? Bt(p, ye) : pe === "dangerouslySetInnerHTML" ? uo(p, ye) : pe === "children" ? Xa(p, ye) : q(p, pe, ye, Z);
            }
            switch (M) {
              case "input":
                On(p, g);
                break;
              case "textarea":
                la(p, g);
                break;
              case "select":
                var de = p._wrapperState.wasMultiple;
                p._wrapperState.wasMultiple = !!g.multiple;
                var ze = g.value;
                ze != null ? ia(p, !!g.multiple, ze, !1) : de !== !!g.multiple && (g.defaultValue != null ? ia(
                  p,
                  !!g.multiple,
                  g.defaultValue,
                  !0
                ) : ia(p, !!g.multiple, g.multiple ? [] : "", !1));
            }
            p[il] = g;
          } catch (Ye) {
            wn(n, n.return, Ye);
          }
        }
        break;
      case 6:
        if (rr(r, n), Ei(n), c & 4) {
          if (n.stateNode === null) throw Error(f(162));
          p = n.stateNode, g = n.memoizedProps;
          try {
            p.nodeValue = g;
          } catch (Ye) {
            wn(n, n.return, Ye);
          }
        }
        break;
      case 3:
        if (rr(r, n), Ei(n), c & 4 && l !== null && l.memoizedState.isDehydrated) try {
          as(r.containerInfo);
        } catch (Ye) {
          wn(n, n.return, Ye);
        }
        break;
      case 4:
        rr(r, n), Ei(n);
        break;
      case 13:
        rr(r, n), Ei(n), p = n.child, p.flags & 8192 && (g = p.memoizedState !== null, p.stateNode.isHidden = g, !g || p.alternate !== null && p.alternate.memoizedState !== null || (bf = $t())), c & 4 && Cu(n);
        break;
      case 22:
        if (pe = l !== null && l.memoizedState !== null, n.mode & 1 ? (fr = (Z = fr) || pe, rr(r, n), fr = Z) : rr(r, n), Ei(n), c & 8192) {
          if (Z = n.memoizedState !== null, (n.stateNode.isHidden = Z) && !pe && n.mode & 1) for ($e = n, pe = n.child; pe !== null; ) {
            for (ye = $e = pe; $e !== null; ) {
              switch (de = $e, ze = de.child, de.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Su(4, de, de.return);
                  break;
                case 1:
                  gu(de, de.return);
                  var He = de.stateNode;
                  if (typeof He.componentWillUnmount == "function") {
                    c = de, l = de.return;
                    try {
                      r = c, He.props = r.memoizedProps, He.state = r.memoizedState, He.componentWillUnmount();
                    } catch (Ye) {
                      wn(c, l, Ye);
                    }
                  }
                  break;
                case 5:
                  gu(de, de.return);
                  break;
                case 22:
                  if (de.memoizedState !== null) {
                    hm(ye);
                    continue;
                  }
              }
              ze !== null ? (ze.return = de, $e = ze) : hm(ye);
            }
            pe = pe.sibling;
          }
          e: for (pe = null, ye = n; ; ) {
            if (ye.tag === 5) {
              if (pe === null) {
                pe = ye;
                try {
                  p = ye.stateNode, Z ? (g = p.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (M = ye.stateNode, z = ye.memoizedProps.style, T = z != null && z.hasOwnProperty("display") ? z.display : null, M.style.display = Et("display", T));
                } catch (Ye) {
                  wn(n, n.return, Ye);
                }
              }
            } else if (ye.tag === 6) {
              if (pe === null) try {
                ye.stateNode.nodeValue = Z ? "" : ye.memoizedProps;
              } catch (Ye) {
                wn(n, n.return, Ye);
              }
            } else if ((ye.tag !== 22 && ye.tag !== 23 || ye.memoizedState === null || ye === n) && ye.child !== null) {
              ye.child.return = ye, ye = ye.child;
              continue;
            }
            if (ye === n) break e;
            for (; ye.sibling === null; ) {
              if (ye.return === null || ye.return === n) break e;
              pe === ye && (pe = null), ye = ye.return;
            }
            pe === ye && (pe = null), ye.sibling.return = ye.return, ye = ye.sibling;
          }
        }
        break;
      case 19:
        rr(r, n), Ei(n), c & 4 && Cu(n);
        break;
      case 21:
        break;
      default:
        rr(
          r,
          n
        ), Ei(n);
    }
  }
  function Ei(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Cp(l)) {
              var c = l;
              break e;
            }
            l = l.return;
          }
          throw Error(f(160));
        }
        switch (c.tag) {
          case 5:
            var p = c.stateNode;
            c.flags & 32 && (Xa(p, ""), c.flags &= -33);
            var g = pm(n);
            bu(n, g, p);
            break;
          case 3:
          case 4:
            var T = c.stateNode.containerInfo, M = pm(n);
            zs(n, M, T);
            break;
          default:
            throw Error(f(161));
        }
      } catch (z) {
        wn(n, n.return, z);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function y0(n, r, l) {
    $e = n, Tp(n);
  }
  function Tp(n, r, l) {
    for (var c = (n.mode & 1) !== 0; $e !== null; ) {
      var p = $e, g = p.child;
      if (p.tag === 22 && c) {
        var T = p.memoizedState !== null || yu;
        if (!T) {
          var M = p.alternate, z = M !== null && M.memoizedState !== null || fr;
          M = yu;
          var Z = fr;
          if (yu = T, (fr = z) && !Z) for ($e = p; $e !== null; ) T = $e, z = T.child, T.tag === 22 && T.memoizedState !== null ? xp(p) : z !== null ? (z.return = T, $e = z) : xp(p);
          for (; g !== null; ) $e = g, Tp(g), g = g.sibling;
          $e = p, yu = M, fr = Z;
        }
        Tu(n);
      } else p.subtreeFlags & 8772 && g !== null ? (g.return = p, $e = g) : Tu(n);
    }
  }
  function Tu(n) {
    for (; $e !== null; ) {
      var r = $e;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              fr || yf(5, r);
              break;
            case 1:
              var c = r.stateNode;
              if (r.flags & 4 && !fr) if (l === null) c.componentDidMount();
              else {
                var p = r.elementType === r.type ? l.memoizedProps : qr(r.type, l.memoizedProps);
                c.componentDidUpdate(p, l.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
              }
              var g = r.updateQueue;
              g !== null && Zh(r, g, c);
              break;
            case 3:
              var T = r.updateQueue;
              if (T !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Zh(r, T, l);
              }
              break;
            case 5:
              var M = r.stateNode;
              if (l === null && r.flags & 4) {
                l = M;
                var z = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    z.autoFocus && l.focus();
                    break;
                  case "img":
                    z.src && (l.src = z.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var Z = r.alternate;
                if (Z !== null) {
                  var pe = Z.memoizedState;
                  if (pe !== null) {
                    var ye = pe.dehydrated;
                    ye !== null && as(ye);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(f(163));
          }
          fr || r.flags & 512 && gf(r);
        } catch (de) {
          wn(r, r.return, de);
        }
      }
      if (r === n) {
        $e = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, $e = l;
        break;
      }
      $e = r.return;
    }
  }
  function hm(n) {
    for (; $e !== null; ) {
      var r = $e;
      if (r === n) {
        $e = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, $e = l;
        break;
      }
      $e = r.return;
    }
  }
  function xp(n) {
    for (; $e !== null; ) {
      var r = $e;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              yf(4, r);
            } catch (z) {
              wn(r, l, z);
            }
            break;
          case 1:
            var c = r.stateNode;
            if (typeof c.componentDidMount == "function") {
              var p = r.return;
              try {
                c.componentDidMount();
              } catch (z) {
                wn(r, p, z);
              }
            }
            var g = r.return;
            try {
              gf(r);
            } catch (z) {
              wn(r, g, z);
            }
            break;
          case 5:
            var T = r.return;
            try {
              gf(r);
            } catch (z) {
              wn(r, T, z);
            }
        }
      } catch (z) {
        wn(r, r.return, z);
      }
      if (r === n) {
        $e = null;
        break;
      }
      var M = r.sibling;
      if (M !== null) {
        M.return = r.return, $e = M;
        break;
      }
      $e = r.return;
    }
  }
  var g0 = Math.ceil, yl = K.ReactCurrentDispatcher, Sf = K.ReactCurrentOwner, Pa = K.ReactCurrentBatchConfig, wt = 0, Rn = null, sn = null, Wn = 0, Zr = 0, xu = bt(0), Yn = 0, Us = null, gl = 0, Ru = 0, Rp = 0, wo = null, wr = null, bf = 0, wu = 1 / 0, Qi = null, Ef = !1, wp = null, $a = null, ku = !1, ja = null, Cf = 0, Ps = 0, Tf = null, $s = -1, Sl = 0;
  function ar() {
    return wt & 6 ? $t() : $s !== -1 ? $s : $s = $t();
  }
  function qi(n) {
    return n.mode & 1 ? wt & 2 && Wn !== 0 ? Wn & -Wn : Fc.transition !== null ? (Sl === 0 && (Sl = mc()), Sl) : (n = Vt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Nd(n.type)), n) : 1;
  }
  function En(n, r, l, c) {
    if (50 < Ps) throw Ps = 0, Tf = null, Error(f(185));
    Xo(n, l, c), (!(wt & 2) || n !== Rn) && (n === Rn && (!(wt & 2) && (Ru |= l), Yn === 4 && Ci(n, Wn)), Gn(n, c), l === 1 && wt === 0 && !(r.mode & 1) && (wu = $t() + 500, tr && Ir()));
  }
  function Gn(n, r) {
    var l = n.callbackNode;
    hc(n, r);
    var c = ei(n, n === Rn ? Wn : 0);
    if (c === 0) l !== null && Sn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = c & -c, n.callbackPriority !== r) {
      if (l != null && Sn(l), r === 1) n.tag === 0 ? ap(Ou.bind(null, n)) : rp(Ou.bind(null, n)), ep(function() {
        !(wt & 6) && Ir();
      }), l = null;
      else {
        switch (Dd(c)) {
          case 1:
            l = fa;
            break;
          case 4:
            l = Tt;
            break;
          case 16:
            l = mi;
            break;
          case 536870912:
            l = Rd;
            break;
          default:
            l = mi;
        }
        l = Tm(l, xf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function xf(n, r) {
    if ($s = -1, Sl = 0, wt & 6) throw Error(f(327));
    var l = n.callbackNode;
    if (Du() && n.callbackNode !== l) return null;
    var c = ei(n, n === Rn ? Wn : 0);
    if (c === 0) return null;
    if (c & 30 || c & n.expiredLanes || r) r = wf(n, c);
    else {
      r = c;
      var p = wt;
      wt |= 2;
      var g = ym();
      (Rn !== n || Wn !== r) && (Qi = null, wu = $t() + 500, El(n, r));
      do
        try {
          b0();
          break;
        } catch (M) {
          mm(n, M);
        }
      while (!0);
      ma(), yl.current = g, wt = p, sn !== null ? r = 0 : (Rn = null, Wn = 0, r = Yn);
    }
    if (r !== 0) {
      if (r === 2 && (p = kd(n), p !== 0 && (c = p, r = bl(n, p))), r === 1) throw l = Us, El(n, 0), Ci(n, c), Gn(n, $t()), l;
      if (r === 6) Ci(n, c);
      else {
        if (p = n.current.alternate, !(c & 30) && !Op(p) && (r = wf(n, c), r === 2 && (g = kd(n), g !== 0 && (c = g, r = bl(n, g))), r === 1)) throw l = Us, El(n, 0), Ci(n, c), Gn(n, $t()), l;
        switch (n.finishedWork = p, n.finishedLanes = c, r) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            ko(n, wr, Qi);
            break;
          case 3:
            if (Ci(n, c), (c & 130023424) === c && (r = bf + 500 - $t(), 10 < r)) {
              if (ei(n, 0) !== 0) break;
              if (p = n.suspendedLanes, (p & c) !== c) {
                ar(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = al(ko.bind(null, n, wr, Qi), r);
              break;
            }
            ko(n, wr, Qi);
            break;
          case 4:
            if (Ci(n, c), (c & 4194240) === c) break;
            for (r = n.eventTimes, p = -1; 0 < c; ) {
              var T = 31 - xa(c);
              g = 1 << T, T = r[T], T > p && (p = T), c &= ~g;
            }
            if (c = p, c = $t() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * g0(c / 1960)) - c, 10 < c) {
              n.timeoutHandle = al(ko.bind(null, n, wr, Qi), c);
              break;
            }
            ko(n, wr, Qi);
            break;
          case 5:
            ko(n, wr, Qi);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return Gn(n, $t()), n.callbackNode === l ? xf.bind(null, n) : null;
  }
  function bl(n, r) {
    var l = wo;
    return n.current.memoizedState.isDehydrated && (El(n, r).flags |= 256), n = wf(n, r), n !== 2 && (r = wr, wr = l, r !== null && kp(r)), n;
  }
  function kp(n) {
    wr === null ? wr = n : wr.push.apply(wr, n);
  }
  function Op(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var c = 0; c < l.length; c++) {
          var p = l[c], g = p.getSnapshot;
          p = p.value;
          try {
            if (!ka(g(), p)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ci(n, r) {
    for (r &= ~Rp, r &= ~Ru, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - xa(r), c = 1 << l;
      n[l] = -1, r &= ~c;
    }
  }
  function Ou(n) {
    if (wt & 6) throw Error(f(327));
    Du();
    var r = ei(n, 0);
    if (!(r & 1)) return Gn(n, $t()), null;
    var l = wf(n, r);
    if (n.tag !== 0 && l === 2) {
      var c = kd(n);
      c !== 0 && (r = c, l = bl(n, c));
    }
    if (l === 1) throw l = Us, El(n, 0), Ci(n, r), Gn(n, $t()), l;
    if (l === 6) throw Error(f(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, ko(n, wr, Qi), Gn(n, $t()), null;
  }
  function Dp(n, r) {
    var l = wt;
    wt |= 1;
    try {
      return n(r);
    } finally {
      wt = l, wt === 0 && (wu = $t() + 500, tr && Ir());
    }
  }
  function Ti(n) {
    ja !== null && ja.tag === 0 && !(wt & 6) && Du();
    var r = wt;
    wt |= 1;
    var l = Pa.transition, c = Vt;
    try {
      if (Pa.transition = null, Vt = 1, n) return n();
    } finally {
      Vt = c, Pa.transition = l, wt = r, !(wt & 6) && Ir();
    }
  }
  function Rf() {
    Zr = xu.current, Ut(xu);
  }
  function El(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Hh(l)), sn !== null) for (l = sn.return; l !== null; ) {
      var c = l;
      switch (op(c), c.tag) {
        case 1:
          c = c.type.childContextTypes, c != null && _a();
          break;
        case 3:
          ou(), Ut(Tn), Ut(pt), pp();
          break;
        case 5:
          dp(c);
          break;
        case 4:
          ou();
          break;
        case 13:
          Ut(mn);
          break;
        case 19:
          Ut(mn);
          break;
        case 10:
          sp(c.type._context);
          break;
        case 22:
        case 23:
          Rf();
      }
      l = l.return;
    }
    if (Rn = n, sn = n = Oo(n.current, null), Wn = Zr = r, Yn = 0, Us = null, Rp = Ru = gl = 0, wr = wo = null, ul !== null) {
      for (r = 0; r < ul.length; r++) if (l = ul[r], c = l.interleaved, c !== null) {
        l.interleaved = null;
        var p = c.next, g = l.pending;
        if (g !== null) {
          var T = g.next;
          g.next = p, c.next = T;
        }
        l.pending = c;
      }
      ul = null;
    }
    return n;
  }
  function mm(n, r) {
    do {
      var l = sn;
      try {
        if (ma(), Gc.current = xr, ya) {
          for (var c = qe.memoizedState; c !== null; ) {
            var p = c.queue;
            p !== null && (p.pending = null), c = c.next;
          }
          ya = !1;
        }
        if (Ge = 0, xt = vt = qe = null, lu = !1, ws = 0, Sf.current = null, l === null || l.return === null) {
          Yn = 1, Us = r, sn = null;
          break;
        }
        e: {
          var g = n, T = l.return, M = l, z = r;
          if (r = Wn, M.flags |= 32768, z !== null && typeof z == "object" && typeof z.then == "function") {
            var Z = z, pe = M, ye = pe.tag;
            if (!(pe.mode & 1) && (ye === 0 || ye === 11 || ye === 15)) {
              var de = pe.alternate;
              de ? (pe.updateQueue = de.updateQueue, pe.memoizedState = de.memoizedState, pe.lanes = de.lanes) : (pe.updateQueue = null, pe.memoizedState = null);
            }
            var ze = lm(T);
            if (ze !== null) {
              ze.flags &= -257, gp(ze, T, M, g, r), ze.mode & 1 && Ms(g, Z, r), r = ze, z = Z;
              var He = r.updateQueue;
              if (He === null) {
                var Ye = /* @__PURE__ */ new Set();
                Ye.add(z), r.updateQueue = Ye;
              } else He.add(z);
              break e;
            } else {
              if (!(r & 1)) {
                Ms(g, Z, r), js();
                break e;
              }
              z = Error(f(426));
            }
          } else if (un && M.mode & 1) {
            var An = lm(T);
            if (An !== null) {
              !(An.flags & 65536) && (An.flags |= 256), gp(An, T, M, g, r), up(xo(z, M));
              break e;
            }
          }
          g = z = xo(z, M), Yn !== 4 && (Yn = 2), wo === null ? wo = [g] : wo.push(g), g = T;
          do {
            switch (g.tag) {
              case 3:
                g.flags |= 65536, r &= -r, g.lanes |= r;
                var I = im(g, z, r);
                Xh(g, I);
                break e;
              case 1:
                M = z;
                var F = g.type, Q = g.stateNode;
                if (!(g.flags & 128) && (typeof F.getDerivedStateFromError == "function" || Q !== null && typeof Q.componentDidCatch == "function" && ($a === null || !$a.has(Q)))) {
                  g.flags |= 65536, r &= -r, g.lanes |= r;
                  var Ee = om(g, M, r);
                  Xh(g, Ee);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        Sm(l);
      } catch (Qe) {
        r = Qe, sn === l && l !== null && (sn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ym() {
    var n = yl.current;
    return yl.current = xr, n === null ? xr : n;
  }
  function js() {
    (Yn === 0 || Yn === 3 || Yn === 2) && (Yn = 4), Rn === null || !(gl & 268435455) && !(Ru & 268435455) || Ci(Rn, Wn);
  }
  function wf(n, r) {
    var l = wt;
    wt |= 2;
    var c = ym();
    (Rn !== n || Wn !== r) && (Qi = null, El(n, r));
    do
      try {
        S0();
        break;
      } catch (p) {
        mm(n, p);
      }
    while (!0);
    if (ma(), wt = l, yl.current = c, sn !== null) throw Error(f(261));
    return Rn = null, Wn = 0, Yn;
  }
  function S0() {
    for (; sn !== null; ) gm(sn);
  }
  function b0() {
    for (; sn !== null && !Br(); ) gm(sn);
  }
  function gm(n) {
    var r = Cm(n.alternate, n, Zr);
    n.memoizedProps = n.pendingProps, r === null ? Sm(n) : sn = r, Sf.current = null;
  }
  function Sm(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = h0(l, r), l !== null) {
          l.flags &= 32767, sn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Yn = 6, sn = null;
          return;
        }
      } else if (l = v0(l, r, Zr), l !== null) {
        sn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        sn = r;
        return;
      }
      sn = r = n;
    } while (r !== null);
    Yn === 0 && (Yn = 5);
  }
  function ko(n, r, l) {
    var c = Vt, p = Pa.transition;
    try {
      Pa.transition = null, Vt = 1, E0(n, r, l, c);
    } finally {
      Pa.transition = p, Vt = c;
    }
    return null;
  }
  function E0(n, r, l, c) {
    do
      Du();
    while (ja !== null);
    if (wt & 6) throw Error(f(327));
    l = n.finishedWork;
    var p = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(f(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var g = l.lanes | l.childLanes;
    if (Yg(n, g), n === Rn && (sn = Rn = null, Wn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || ku || (ku = !0, Tm(mi, function() {
      return Du(), null;
    })), g = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || g) {
      g = Pa.transition, Pa.transition = null;
      var T = Vt;
      Vt = 1;
      var M = wt;
      wt |= 4, Sf.current = null, m0(n, l), vm(l, n), Dc(rl), Zo = !!Zd, rl = Zd = null, n.current = l, y0(l), co(), wt = M, Vt = T, Pa.transition = g;
    } else n.current = l;
    if (ku && (ku = !1, ja = n, Cf = p), g = n.pendingLanes, g === 0 && ($a = null), rh(l.stateNode), Gn(n, $t()), r !== null) for (c = n.onRecoverableError, l = 0; l < r.length; l++) p = r[l], c(p.value, { componentStack: p.stack, digest: p.digest });
    if (Ef) throw Ef = !1, n = wp, wp = null, n;
    return Cf & 1 && n.tag !== 0 && Du(), g = n.pendingLanes, g & 1 ? n === Tf ? Ps++ : (Ps = 0, Tf = n) : Ps = 0, Ir(), null;
  }
  function Du() {
    if (ja !== null) {
      var n = Dd(Cf), r = Pa.transition, l = Vt;
      try {
        if (Pa.transition = null, Vt = 16 > n ? 16 : n, ja === null) var c = !1;
        else {
          if (n = ja, ja = null, Cf = 0, wt & 6) throw Error(f(331));
          var p = wt;
          for (wt |= 4, $e = n.current; $e !== null; ) {
            var g = $e, T = g.child;
            if ($e.flags & 16) {
              var M = g.deletions;
              if (M !== null) {
                for (var z = 0; z < M.length; z++) {
                  var Z = M[z];
                  for ($e = Z; $e !== null; ) {
                    var pe = $e;
                    switch (pe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Su(8, pe, g);
                    }
                    var ye = pe.child;
                    if (ye !== null) ye.return = pe, $e = ye;
                    else for (; $e !== null; ) {
                      pe = $e;
                      var de = pe.sibling, ze = pe.return;
                      if (dm(pe), pe === Z) {
                        $e = null;
                        break;
                      }
                      if (de !== null) {
                        de.return = ze, $e = de;
                        break;
                      }
                      $e = ze;
                    }
                  }
                }
                var He = g.alternate;
                if (He !== null) {
                  var Ye = He.child;
                  if (Ye !== null) {
                    He.child = null;
                    do {
                      var An = Ye.sibling;
                      Ye.sibling = null, Ye = An;
                    } while (Ye !== null);
                  }
                }
                $e = g;
              }
            }
            if (g.subtreeFlags & 2064 && T !== null) T.return = g, $e = T;
            else e: for (; $e !== null; ) {
              if (g = $e, g.flags & 2048) switch (g.tag) {
                case 0:
                case 11:
                case 15:
                  Su(9, g, g.return);
              }
              var I = g.sibling;
              if (I !== null) {
                I.return = g.return, $e = I;
                break e;
              }
              $e = g.return;
            }
          }
          var F = n.current;
          for ($e = F; $e !== null; ) {
            T = $e;
            var Q = T.child;
            if (T.subtreeFlags & 2064 && Q !== null) Q.return = T, $e = Q;
            else e: for (T = F; $e !== null; ) {
              if (M = $e, M.flags & 2048) try {
                switch (M.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yf(9, M);
                }
              } catch (Qe) {
                wn(M, M.return, Qe);
              }
              if (M === T) {
                $e = null;
                break e;
              }
              var Ee = M.sibling;
              if (Ee !== null) {
                Ee.return = M.return, $e = Ee;
                break e;
              }
              $e = M.return;
            }
          }
          if (wt = p, Ir(), Ja && typeof Ja.onPostCommitFiberRoot == "function") try {
            Ja.onPostCommitFiberRoot(Ju, n);
          } catch {
          }
          c = !0;
        }
        return c;
      } finally {
        Vt = l, Pa.transition = r;
      }
    }
    return !1;
  }
  function bm(n, r, l) {
    r = xo(l, r), r = im(n, r, 1), n = Co(n, r, 1), r = ar(), n !== null && (Xo(n, 1, r), Gn(n, r));
  }
  function wn(n, r, l) {
    if (n.tag === 3) bm(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        bm(r, n, l);
        break;
      } else if (r.tag === 1) {
        var c = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && ($a === null || !$a.has(c))) {
          n = xo(l, n), n = om(r, n, 1), r = Co(r, n, 1), n = ar(), r !== null && (Xo(r, 1, n), Gn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function C0(n, r, l) {
    var c = n.pingCache;
    c !== null && c.delete(r), r = ar(), n.pingedLanes |= n.suspendedLanes & l, Rn === n && (Wn & l) === l && (Yn === 4 || Yn === 3 && (Wn & 130023424) === Wn && 500 > $t() - bf ? El(n, 0) : Rp |= l), Gn(n, r);
  }
  function Em(n, r) {
    r === 0 && (n.mode & 1 ? (r = Hl, Hl <<= 1, !(Hl & 130023424) && (Hl = 4194304)) : r = 1);
    var l = ar();
    n = Wi(n, r), n !== null && (Xo(n, r, l), Gn(n, l));
  }
  function _p(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Em(n, l);
  }
  function T0(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var c = n.stateNode, p = n.memoizedState;
        p !== null && (l = p.retryLane);
        break;
      case 19:
        c = n.stateNode;
        break;
      default:
        throw Error(f(314));
    }
    c !== null && c.delete(r), Em(n, l);
  }
  var Cm;
  Cm = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Tn.current) Kr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Kr = !1, Gi(n, r, l);
      Kr = !!(n.flags & 131072);
    }
    else Kr = !1, un && r.flags & 1048576 && ip(r, tu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var c = r.type;
        Ls(n, r), n = r.pendingProps;
        var p = Da(r, pt.current);
        ru(r, l), p = fe(null, r, c, n, p, l);
        var g = $n();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, hn(c) ? (g = !0, zc(r)) : g = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Vc(r), p.updater = vl, r.stateNode = p, p._reactInternals = r, mp(r, c, n, l), r = ff(null, r, c, !0, g, l)) : (r.tag = 0, un && g && Uc(r), Mn(null, r, p, l), r = r.child), r;
      case 16:
        c = r.elementType;
        e: {
          switch (Ls(n, r), n = r.pendingProps, p = c._init, c = p(c._payload), r.type = c, p = r.tag = x0(c), n = qr(c, n), p) {
            case 0:
              r = St(null, r, c, n, l);
              break e;
            case 1:
              r = Ns(null, r, c, n, l);
              break e;
            case 11:
              r = vu(null, r, c, n, l);
              break e;
            case 14:
              r = Ro(null, r, c, qr(c.type, n), l);
              break e;
          }
          throw Error(f(
            306,
            c,
            ""
          ));
        }
        return r;
      case 0:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : qr(c, p), St(n, r, c, p, l);
      case 1:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : qr(c, p), Ns(n, r, c, p, l);
      case 3:
        e: {
          if (p0(r), n === null) throw Error(f(387));
          c = r.pendingProps, g = r.memoizedState, p = g.element, au(n, r), Ic(r, c, null, l);
          var T = r.memoizedState;
          if (c = T.element, g.isDehydrated) if (g = { element: c, isDehydrated: !1, cache: T.cache, pendingSuspenseBoundaries: T.pendingSuspenseBoundaries, transitions: T.transitions }, r.updateQueue.baseState = g, r.memoizedState = g, r.flags & 256) {
            p = xo(Error(f(423)), r), r = sm(n, r, c, l, p);
            break e;
          } else if (c !== p) {
            p = xo(Error(f(424)), r), r = sm(n, r, c, l, p);
            break e;
          } else for (Gr = ai(r.stateNode.containerInfo.firstChild), ha = r, un = !0, Na = null, l = qh(r, null, c, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (bn(), c === p) {
              r = Nn(n, r, l);
              break e;
            }
            Mn(n, r, c, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Jh(r), n === null && $c(r), c = r.type, p = r.pendingProps, g = n !== null ? n.memoizedProps : null, T = p.children, gs(c, p) ? T = null : g !== null && gs(c, g) && (r.flags |= 32), hl(n, r), Mn(n, r, T, l), r.child;
      case 6:
        return n === null && $c(r), null;
      case 13:
        return cm(n, r, l);
      case 4:
        return fp(r, r.stateNode.containerInfo), c = r.pendingProps, n === null ? r.child = nu(r, null, c, l) : Mn(n, r, c, l), r.child;
      case 11:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : qr(c, p), vu(n, r, c, p, l);
      case 7:
        return Mn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Mn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Mn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (c = r.type._context, p = r.pendingProps, g = r.memoizedProps, T = p.value, jt(Ii, c._currentValue), c._currentValue = T, g !== null) if (ka(g.value, T)) {
            if (g.children === p.children && !Tn.current) {
              r = Nn(n, r, l);
              break e;
            }
          } else for (g = r.child, g !== null && (g.return = r); g !== null; ) {
            var M = g.dependencies;
            if (M !== null) {
              T = g.child;
              for (var z = M.firstContext; z !== null; ) {
                if (z.context === c) {
                  if (g.tag === 1) {
                    z = Qr(-1, l & -l), z.tag = 2;
                    var Z = g.updateQueue;
                    if (Z !== null) {
                      Z = Z.shared;
                      var pe = Z.pending;
                      pe === null ? z.next = z : (z.next = pe.next, pe.next = z), Z.pending = z;
                    }
                  }
                  g.lanes |= l, z = g.alternate, z !== null && (z.lanes |= l), cp(
                    g.return,
                    l,
                    r
                  ), M.lanes |= l;
                  break;
                }
                z = z.next;
              }
            } else if (g.tag === 10) T = g.type === r.type ? null : g.child;
            else if (g.tag === 18) {
              if (T = g.return, T === null) throw Error(f(341));
              T.lanes |= l, M = T.alternate, M !== null && (M.lanes |= l), cp(T, l, r), T = g.sibling;
            } else T = g.child;
            if (T !== null) T.return = g;
            else for (T = g; T !== null; ) {
              if (T === r) {
                T = null;
                break;
              }
              if (g = T.sibling, g !== null) {
                g.return = T.return, T = g;
                break;
              }
              T = T.return;
            }
            g = T;
          }
          Mn(n, r, p.children, l), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, c = r.pendingProps.children, ru(r, l), p = La(p), c = c(p), r.flags |= 1, Mn(n, r, c, l), r.child;
      case 14:
        return c = r.type, p = qr(c, r.pendingProps), p = qr(c.type, p), Ro(n, r, c, p, l);
      case 15:
        return cf(n, r, r.type, r.pendingProps, l);
      case 17:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : qr(c, p), Ls(n, r), r.tag = 1, hn(c) ? (n = !0, zc(r)) : n = !1, ru(r, l), nm(r, c, p), mp(r, c, p, l), ff(null, r, c, !0, n, l);
      case 19:
        return bp(n, r, l);
      case 22:
        return Xr(n, r, l);
    }
    throw Error(f(156, r.tag));
  };
  function Tm(n, r) {
    return on(n, r);
  }
  function xm(n, r, l, c) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Fa(n, r, l, c) {
    return new xm(n, r, l, c);
  }
  function Mp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function x0(n) {
    if (typeof n == "function") return Mp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Te) return 11;
      if (n === _e) return 14;
    }
    return 2;
  }
  function Oo(n, r) {
    var l = n.alternate;
    return l === null ? (l = Fa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function kf(n, r, l, c, p, g) {
    var T = 2;
    if (c = n, typeof n == "function") Mp(n) && (T = 1);
    else if (typeof n == "string") T = 5;
    else e: switch (n) {
      case re:
        return Cl(l.children, p, g, r);
      case je:
        T = 8, p |= 8;
        break;
      case Fe:
        return n = Fa(12, l, r, p | 2), n.elementType = Fe, n.lanes = g, n;
      case ve:
        return n = Fa(13, l, r, p), n.elementType = ve, n.lanes = g, n;
      case Se:
        return n = Fa(19, l, r, p), n.elementType = Se, n.lanes = g, n;
      case ht:
        return Of(l, p, g, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case k:
            T = 10;
            break e;
          case oe:
            T = 9;
            break e;
          case Te:
            T = 11;
            break e;
          case _e:
            T = 14;
            break e;
          case Ce:
            T = 16, c = null;
            break e;
        }
        throw Error(f(130, n == null ? n : typeof n, ""));
    }
    return r = Fa(T, l, r, p), r.elementType = n, r.type = c, r.lanes = g, r;
  }
  function Cl(n, r, l, c) {
    return n = Fa(7, n, c, r), n.lanes = l, n;
  }
  function Of(n, r, l, c) {
    return n = Fa(22, n, c, r), n.elementType = ht, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Df(n, r, l) {
    return n = Fa(6, n, null, r), n.lanes = l, n;
  }
  function Fs(n, r, l) {
    return r = Fa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Bs(n, r, l, c, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Od(0), this.expirationTimes = Od(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Od(0), this.identifierPrefix = c, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function Np(n, r, l, c, p, g, T, M, z) {
    return n = new Bs(n, r, l, M, z), r === 1 ? (r = 1, g === !0 && (r |= 8)) : r = 0, g = Fa(3, null, null, r), n.current = g, g.stateNode = n, g.memoizedState = { element: c, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vc(g), n;
  }
  function Rm(n, r, l) {
    var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: le, key: c == null ? null : "" + c, children: n, containerInfo: r, implementation: l };
  }
  function Ap(n) {
    if (!n) return gi;
    n = n._reactInternals;
    e: {
      if (Xe(n) !== n || n.tag !== 1) throw Error(f(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (hn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(f(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (hn(l)) return Es(n, l, r);
    }
    return r;
  }
  function Lp(n, r, l, c, p, g, T, M, z) {
    return n = Np(l, c, !0, n, p, g, T, M, z), n.context = Ap(null), l = n.current, c = ar(), p = qi(l), g = Qr(c, p), g.callback = r ?? null, Co(l, g, p), n.current.lanes = p, Xo(n, p, c), Gn(n, c), n;
  }
  function _f(n, r, l, c) {
    var p = r.current, g = ar(), T = qi(p);
    return l = Ap(l), r.context === null ? r.context = l : r.pendingContext = l, r = Qr(g, T), r.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (r.callback = c), n = Co(p, r, T), n !== null && (En(n, p, T, g), Hc(n, p, T)), T;
  }
  function Vs(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function wm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function zp(n, r) {
    wm(n, r), (n = n.alternate) && wm(n, r);
  }
  function R0() {
    return null;
  }
  var Up = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Mf(n) {
    this._internalRoot = n;
  }
  Hs.prototype.render = Mf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(f(409));
    _f(n, r, null, null);
  }, Hs.prototype.unmount = Mf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ti(function() {
        _f(null, n, null, null);
      }), r[Vi] = null;
    }
  };
  function Hs(n) {
    this._internalRoot = n;
  }
  Hs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = lh();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Gt.length && r !== 0 && r < Gt[l].priority; l++) ;
      Gt.splice(l, 0, n), l === 0 && uh(n);
    }
  };
  function Do(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Nf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function km() {
  }
  function w0(n, r, l, c, p) {
    if (p) {
      if (typeof c == "function") {
        var g = c;
        c = function() {
          var Z = Vs(T);
          g.call(Z);
        };
      }
      var T = Lp(r, c, n, 0, null, !1, !1, "", km);
      return n._reactRootContainer = T, n[Vi] = T.current, Jl(n.nodeType === 8 ? n.parentNode : n), Ti(), T;
    }
    for (; p = n.lastChild; ) n.removeChild(p);
    if (typeof c == "function") {
      var M = c;
      c = function() {
        var Z = Vs(z);
        M.call(Z);
      };
    }
    var z = Np(n, 0, !1, null, null, !1, !1, "", km);
    return n._reactRootContainer = z, n[Vi] = z.current, Jl(n.nodeType === 8 ? n.parentNode : n), Ti(function() {
      _f(r, z, l, c);
    }), z;
  }
  function Af(n, r, l, c, p) {
    var g = l._reactRootContainer;
    if (g) {
      var T = g;
      if (typeof p == "function") {
        var M = p;
        p = function() {
          var z = Vs(T);
          M.call(z);
        };
      }
      _f(r, T, n, p);
    } else T = w0(l, r, n, p, c);
    return Vs(T);
  }
  oh = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ko(r.pendingLanes);
          l !== 0 && (es(r, l | 1), Gn(r, $t()), !(wt & 6) && (wu = $t() + 500, Ir()));
        }
        break;
      case 13:
        Ti(function() {
          var c = Wi(n, 1);
          if (c !== null) {
            var p = ar();
            En(c, n, 1, p);
          }
        }), zp(n, 1);
    }
  }, yc = function(n) {
    if (n.tag === 13) {
      var r = Wi(n, 134217728);
      if (r !== null) {
        var l = ar();
        En(r, n, 134217728, l);
      }
      zp(n, 134217728);
    }
  }, Ht = function(n) {
    if (n.tag === 13) {
      var r = qi(n), l = Wi(n, r);
      if (l !== null) {
        var c = ar();
        En(l, n, r, c);
      }
      zp(n, r);
    }
  }, lh = function() {
    return Vt;
  }, _d = function(n, r) {
    var l = Vt;
    try {
      return Vt = n, r();
    } finally {
      Vt = l;
    }
  }, sa = function(n, r, l) {
    switch (r) {
      case "input":
        if (On(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var c = l[r];
            if (c !== n && c.form === n.form) {
              var p = rt(c);
              if (!p) throw Error(f(90));
              be(c), On(c, p);
            }
          }
        }
        break;
      case "textarea":
        la(n, l);
        break;
      case "select":
        r = l.value, r != null && ia(n, !!l.multiple, r, !1);
    }
  }, Zu = Dp, pc = Ti;
  var k0 = { usingClientEntryPoint: !1, Events: [bs, eu, rt, Yo, Fl, Dp] }, Is = { findFiberByHostInstance: Oa, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Om = { bundleType: Is.bundleType, version: Is.version, rendererPackageName: Is.rendererPackageName, rendererConfig: Is.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: K.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ct(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Is.findFiberByHostInstance || R0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Lf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Lf.isDisabled && Lf.supportsFiber) try {
      Ju = Lf.inject(Om), Ja = Lf;
    } catch {
    }
  }
  return Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = k0, Ya.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Do(r)) throw Error(f(200));
    return Rm(n, r, null, l);
  }, Ya.createRoot = function(n, r) {
    if (!Do(n)) throw Error(f(299));
    var l = !1, c = "", p = Up;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = Np(n, 1, !1, null, null, l, !1, c, p), n[Vi] = r.current, Jl(n.nodeType === 8 ? n.parentNode : n), new Mf(r);
  }, Ya.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(f(188)) : (n = Object.keys(n).join(","), Error(f(268, n)));
    return n = Ct(r), n = n === null ? null : n.stateNode, n;
  }, Ya.flushSync = function(n) {
    return Ti(n);
  }, Ya.hydrate = function(n, r, l) {
    if (!Nf(r)) throw Error(f(200));
    return Af(null, n, r, !0, l);
  }, Ya.hydrateRoot = function(n, r, l) {
    if (!Do(n)) throw Error(f(405));
    var c = l != null && l.hydratedSources || null, p = !1, g = "", T = Up;
    if (l != null && (l.unstable_strictMode === !0 && (p = !0), l.identifierPrefix !== void 0 && (g = l.identifierPrefix), l.onRecoverableError !== void 0 && (T = l.onRecoverableError)), r = Lp(r, null, n, 1, l ?? null, p, !1, g, T), n[Vi] = r.current, Jl(n), c) for (n = 0; n < c.length; n++) l = c[n], p = l._getVersion, p = p(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, p] : r.mutableSourceEagerHydrationData.push(
      l,
      p
    );
    return new Hs(r);
  }, Ya.render = function(n, r, l) {
    if (!Nf(r)) throw Error(f(200));
    return Af(null, n, r, !1, l);
  }, Ya.unmountComponentAtNode = function(n) {
    if (!Nf(n)) throw Error(f(40));
    return n._reactRootContainer ? (Ti(function() {
      Af(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Vi] = null;
      });
    }), !0) : !1;
  }, Ya.unstable_batchedUpdates = Dp, Ya.unstable_renderSubtreeIntoContainer = function(n, r, l, c) {
    if (!Nf(l)) throw Error(f(200));
    if (n == null || n._reactInternals === void 0) throw Error(f(38));
    return Af(n, r, l, !1, c);
  }, Ya.version = "18.3.1-next-f1338f8080-20240426", Ya;
}
var Ga = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KR;
function Bz() {
  return KR || (KR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var o = ci, s = Bw(), f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, v = !1;
    function y(e) {
      v = e;
    }
    function S(e) {
      if (!v) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        x("warn", e, a);
      }
    }
    function m(e) {
      if (!v) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        x("error", e, a);
      }
    }
    function x(e, t, a) {
      {
        var i = f.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var d = a.map(function(h) {
          return String(h);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var w = 0, D = 1, A = 2, _ = 3, N = 4, P = 5, H = 6, $ = 7, U = 8, ee = 9, ue = 10, q = 11, K = 12, V = 13, le = 14, re = 15, je = 16, Fe = 17, k = 18, oe = 19, Te = 21, ve = 22, Se = 23, _e = 24, Ce = 25, ht = !0, ce = !1, Ae = !1, W = !1, se = !1, Oe = !0, Be = !1, xe = !0, it = !0, Ve = !0, Je = !0, et = /* @__PURE__ */ new Set(), st = {}, ct = {};
    function Dt(e, t) {
      be(e, t), be(e + "Capture", t);
    }
    function be(e, t) {
      st[e] && m("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), st[e] = t;
      {
        var a = e.toLowerCase();
        ct[a] = e, e === "onDoubleClick" && (ct.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        et.add(t[i]);
    }
    var Rt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Me = Object.prototype.hasOwnProperty;
    function Yt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function vn(e) {
      try {
        return On(e), !1;
      } catch {
        return !0;
      }
    }
    function On(e) {
      return "" + e;
    }
    function lr(e, t) {
      if (vn(e))
        return m("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Yt(e)), On(e);
    }
    function ur(e) {
      if (vn(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yt(e)), On(e);
    }
    function Ka(e, t) {
      if (vn(e))
        return m("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Yt(e)), On(e);
    }
    function ia(e, t) {
      if (vn(e))
        return m("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Yt(e)), On(e);
    }
    function oa(e) {
      if (vn(e))
        return m("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Yt(e)), On(e);
    }
    function tt(e) {
      if (vn(e))
        return m("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Yt(e)), On(e);
    }
    var la = 0, kr = 1, jr = 2, Dn = 3, ua = 4, uo = 5, Xa = 6, De = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", nt = De + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Et = new RegExp("^[" + De + "][" + nt + "]*$"), Bt = {}, gn = {};
    function Xn(e) {
      return Me.call(gn, e) ? !0 : Me.call(Bt, e) ? !1 : Et.test(e) ? (gn[e] = !0, !0) : (Bt[e] = !0, m("Invalid attribute name: `%s`", e), !1);
    }
    function _n(e, t, a) {
      return t !== null ? t.type === la : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Fr(e, t, a, i) {
      if (a !== null && a.type === la)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function nn(e, t, a, i) {
      if (t === null || typeof t > "u" || Fr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Dn:
            return !t;
          case ua:
            return t === !1;
          case uo:
            return isNaN(t);
          case Xa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function sa(e) {
      return rn.hasOwnProperty(e) ? rn[e] : null;
    }
    function en(e, t, a, i, u, d, h) {
      this.acceptsBooleans = t === jr || t === Dn || t === ua, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = h;
    }
    var rn = {}, jl = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    jl.forEach(function(e) {
      rn[e] = new en(
        e,
        la,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      rn[t] = new en(
        t,
        kr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      rn[e] = new en(
        e,
        jr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      rn[e] = new en(
        e,
        jr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      rn[e] = new en(
        e,
        Dn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      rn[e] = new en(
        e,
        Dn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      rn[e] = new en(
        e,
        ua,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      rn[e] = new en(
        e,
        Xa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      rn[e] = new en(
        e,
        uo,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Yo = /[\-\:]([a-z])/g, Fl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Yo, Fl);
      rn[t] = new en(
        t,
        kr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Yo, Fl);
      rn[t] = new en(
        t,
        kr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Yo, Fl);
      rn[t] = new en(
        t,
        kr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      rn[e] = new en(
        e,
        kr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Zu = "xlinkHref";
    rn[Zu] = new en(
      "xlinkHref",
      kr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      rn[e] = new en(
        e,
        kr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var pc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Go = !1;
    function Bl(e) {
      !Go && pc.test(e) && (Go = !0, m("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Qo(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        lr(a, t), i.sanitizeURL && Bl("" + a);
        var d = i.attributeName, h = null;
        if (i.type === ua) {
          if (e.hasAttribute(d)) {
            var b = e.getAttribute(d);
            return b === "" ? !0 : nn(t, a, i, !1) ? b : b === "" + a ? a : b;
          }
        } else if (e.hasAttribute(d)) {
          if (nn(t, a, i, !1))
            return e.getAttribute(d);
          if (i.type === Dn)
            return a;
          h = e.getAttribute(d);
        }
        return nn(t, a, i, !1) ? h === null ? a : h : h === "" + a ? a : h;
      }
    }
    function Vl(e, t, a, i) {
      {
        if (!Xn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return lr(a, t), u === "" + a ? a : u;
      }
    }
    function hi(e, t, a, i) {
      var u = sa(t);
      if (!_n(t, u, i)) {
        if (nn(t, a, u, i) && (a = null), i || u === null) {
          if (Xn(t)) {
            var d = t;
            a === null ? e.removeAttribute(d) : (lr(a, t), e.setAttribute(d, "" + a));
          }
          return;
        }
        var h = u.mustUseProperty;
        if (h) {
          var b = u.propertyName;
          if (a === null) {
            var E = u.type;
            e[b] = E === Dn ? !1 : "";
          } else
            e[b] = a;
          return;
        }
        var R = u.attributeName, O = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(R);
        else {
          var B = u.type, j;
          B === Dn || B === ua && a === !0 ? j = "" : (lr(a, R), j = "" + a, u.sanitizeURL && Bl(j.toString())), O ? e.setAttributeNS(O, R, j) : e.setAttribute(R, j);
        }
      }
    }
    var zi = Symbol.for("react.element"), ca = Symbol.for("react.portal"), Za = Symbol.for("react.fragment"), so = Symbol.for("react.strict_mode"), qo = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), he = Symbol.for("react.context"), Re = Symbol.for("react.forward_ref"), Xe = Symbol.for("react.suspense"), Ot = Symbol.for("react.suspense_list"), Nt = Symbol.for("react.memo"), ft = Symbol.for("react.lazy"), Ct = Symbol.for("react.scope"), Zn = Symbol.for("react.debug_trace_mode"), on = Symbol.for("react.offscreen"), Sn = Symbol.for("react.legacy_hidden"), Br = Symbol.for("react.cache"), co = Symbol.for("react.tracing_marker"), $t = Symbol.iterator, br = "@@iterator";
    function fa(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = $t && e[$t] || e[br];
      return typeof t == "function" ? t : null;
    }
    var Tt = Object.assign, mi = 0, nh, Rd, Ju, Ja, rh, xa, ah;
    function ih() {
    }
    ih.__reactDisabledLog = !0;
    function Wg() {
      {
        if (mi === 0) {
          nh = console.log, Rd = console.info, Ju = console.warn, Ja = console.error, rh = console.group, xa = console.groupCollapsed, ah = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ih,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        mi++;
      }
    }
    function vc() {
      {
        if (mi--, mi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Tt({}, e, {
              value: nh
            }),
            info: Tt({}, e, {
              value: Rd
            }),
            warn: Tt({}, e, {
              value: Ju
            }),
            error: Tt({}, e, {
              value: Ja
            }),
            group: Tt({}, e, {
              value: rh
            }),
            groupCollapsed: Tt({}, e, {
              value: xa
            }),
            groupEnd: Tt({}, e, {
              value: ah
            })
          });
        }
        mi < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Hl = f.ReactCurrentDispatcher, Ko;
    function ei(e, t, a) {
      {
        if (Ko === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Ko = i && i[1] || "";
          }
        return `
` + Ko + e;
      }
    }
    var wd = !1, hc;
    {
      var kd = typeof WeakMap == "function" ? WeakMap : Map;
      hc = new kd();
    }
    function mc(e, t) {
      if (!e || wd)
        return "";
      {
        var a = hc.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      wd = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Hl.current, Hl.current = null, Wg();
      try {
        if (t) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (J) {
              i = J;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (J) {
              i = J;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (J) {
            i = J;
          }
          e();
        }
      } catch (J) {
        if (J && i && typeof J.stack == "string") {
          for (var b = J.stack.split(`
`), E = i.stack.split(`
`), R = b.length - 1, O = E.length - 1; R >= 1 && O >= 0 && b[R] !== E[O]; )
            O--;
          for (; R >= 1 && O >= 0; R--, O--)
            if (b[R] !== E[O]) {
              if (R !== 1 || O !== 1)
                do
                  if (R--, O--, O < 0 || b[R] !== E[O]) {
                    var B = `
` + b[R].replace(" at new ", " at ");
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && hc.set(e, B), B;
                  }
                while (R >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        wd = !1, Hl.current = d, vc(), Error.prepareStackTrace = u;
      }
      var j = e ? e.displayName || e.name : "", X = j ? ei(j) : "";
      return typeof e == "function" && hc.set(e, X), X;
    }
    function Od(e, t, a) {
      return mc(e, !0);
    }
    function Xo(e, t, a) {
      return mc(e, !1);
    }
    function Yg(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function es(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return mc(e, Yg(e));
      if (typeof e == "string")
        return ei(e);
      switch (e) {
        case Xe:
          return ei("Suspense");
        case Ot:
          return ei("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Re:
            return Xo(e.render);
          case Nt:
            return es(e.type, t, a);
          case ft: {
            var i = e, u = i._payload, d = i._init;
            try {
              return es(d(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Vt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case P:
          return ei(e.type);
        case je:
          return ei("Lazy");
        case V:
          return ei("Suspense");
        case oe:
          return ei("SuspenseList");
        case w:
        case A:
        case re:
          return Xo(e.type);
        case q:
          return Xo(e.type.render);
        case D:
          return Od(e.type);
        default:
          return "";
      }
    }
    function Dd(e) {
      try {
        var t = "", a = e;
        do
          t += Vt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function oh(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function yc(e) {
      return e.displayName || "Context";
    }
    function Ht(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Za:
          return "Fragment";
        case ca:
          return "Portal";
        case qo:
          return "Profiler";
        case so:
          return "StrictMode";
        case Xe:
          return "Suspense";
        case Ot:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case he:
            var t = e;
            return yc(t) + ".Consumer";
          case L:
            var a = e;
            return yc(a._context) + ".Provider";
          case Re:
            return oh(e, e.render, "ForwardRef");
          case Nt:
            var i = e.displayName || null;
            return i !== null ? i : Ht(e.type) || "Memo";
          case ft: {
            var u = e, d = u._payload, h = u._init;
            try {
              return Ht(h(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function lh(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function _d(e) {
      return e.displayName || "Context";
    }
    function gt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case _e:
          return "Cache";
        case ee:
          var i = a;
          return _d(i) + ".Consumer";
        case ue:
          var u = a;
          return _d(u._context) + ".Provider";
        case k:
          return "DehydratedFragment";
        case q:
          return lh(a, a.render, "ForwardRef");
        case $:
          return "Fragment";
        case P:
          return a;
        case N:
          return "Portal";
        case _:
          return "Root";
        case H:
          return "Text";
        case je:
          return Ht(a);
        case U:
          return a === so ? "StrictMode" : "Mode";
        case ve:
          return "Offscreen";
        case K:
          return "Profiler";
        case Te:
          return "Scope";
        case V:
          return "Suspense";
        case oe:
          return "SuspenseList";
        case Ce:
          return "TracingMarker";
        case D:
        case w:
        case Fe:
        case A:
        case le:
        case re:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ts = f.ReactDebugCurrentFrame, zn = null, Ra = !1;
    function wa() {
      {
        if (zn === null)
          return null;
        var e = zn._debugOwner;
        if (e !== null && typeof e < "u")
          return gt(e);
      }
      return null;
    }
    function ns() {
      return zn === null ? "" : Dd(zn);
    }
    function Hn() {
      ts.getCurrentStack = null, zn = null, Ra = !1;
    }
    function Gt(e) {
      ts.getCurrentStack = e === null ? null : ns, zn = e, Ra = !1;
    }
    function Gg() {
      return zn;
    }
    function ti(e) {
      Ra = e;
    }
    function Er(e) {
      return "" + e;
    }
    function fo(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return tt(e), e;
        default:
          return "";
      }
    }
    var uh = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Il(e, t) {
      uh[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || m("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || m("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Md(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function sh(e) {
      return e._valueTracker;
    }
    function rs(e) {
      e._valueTracker = null;
    }
    function as(e) {
      var t = "";
      return e && (Md(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Wl(e) {
      var t = Md(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      tt(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, d = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(b) {
            tt(b), i = "" + b, d.call(this, b);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var h = {
          getValue: function() {
            return i;
          },
          setValue: function(b) {
            tt(b), i = "" + b;
          },
          stopTracking: function() {
            rs(e), delete e[t];
          }
        };
        return h;
      }
    }
    function Zo(e) {
      sh(e) || (e._valueTracker = Wl(e));
    }
    function ch(e) {
      if (!e)
        return !1;
      var t = sh(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = as(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function gc(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Sc = !1, is = !1, bc = !1, Nd = !1;
    function Ui(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function os(e, t) {
      var a = e, i = t.checked, u = Tt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ls(e, t) {
      Il("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !is && (m("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", wa() || "A component", t.type), is = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Sc && (m("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", wa() || "A component", t.type), Sc = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: fo(t.value != null ? t.value : i),
        controlled: Ui(t)
      };
    }
    function Ad(e, t) {
      var a = e, i = t.checked;
      i != null && hi(a, "checked", i, !1);
    }
    function Yl(e, t) {
      var a = e;
      {
        var i = Ui(t);
        !a._wrapperState.controlled && i && !Nd && (m("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Nd = !0), a._wrapperState.controlled && !i && !bc && (m("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), bc = !0);
      }
      Ad(e, t);
      var u = fo(t.value), d = t.type;
      if (u != null)
        d === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Er(u)) : a.value !== Er(u) && (a.value = Er(u));
      else if (d === "submit" || d === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? po(a, t.type, u) : t.hasOwnProperty("defaultValue") && po(a, t.type, fo(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function us(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, d = u === "submit" || u === "reset";
        if (d && (t.value === void 0 || t.value === null))
          return;
        var h = Er(i._wrapperState.initialValue);
        a || h !== i.value && (i.value = h), i.defaultValue = h;
      }
      var b = i.name;
      b !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, b !== "" && (i.name = b);
    }
    function fh(e, t) {
      var a = e;
      Yl(a, t), da(a, t);
    }
    function da(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        lr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), d = 0; d < u.length; d++) {
          var h = u[d];
          if (!(h === e || h.form !== e.form)) {
            var b = Wm(h);
            if (!b)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            ch(h), Yl(h, b);
          }
        }
      }
    }
    function po(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || gc(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Er(e._wrapperState.initialValue) : e.defaultValue !== Er(a) && (e.defaultValue = Er(a)));
    }
    var Ec = !1, Gl = !1, dh = !1;
    function Cc(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? o.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Gl || (Gl = !0, m("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (dh || (dh = !0, m("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ec && (m("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ec = !0);
    }
    function Ld(e, t) {
      t.value != null && e.setAttribute("value", Er(fo(t.value)));
    }
    var ss = Array.isArray;
    function Jn(e) {
      return ss(e);
    }
    var Tc;
    Tc = !1;
    function ph() {
      var e = wa();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var vh = ["value", "defaultValue"];
    function Qg(e) {
      {
        Il("select", e);
        for (var t = 0; t < vh.length; t++) {
          var a = vh[t];
          if (e[a] != null) {
            var i = Jn(e[a]);
            e.multiple && !i ? m("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, ph()) : !e.multiple && i && m("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, ph());
          }
        }
      }
    }
    function vo(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var d = a, h = {}, b = 0; b < d.length; b++)
          h["$" + d[b]] = !0;
        for (var E = 0; E < u.length; E++) {
          var R = h.hasOwnProperty("$" + u[E].value);
          u[E].selected !== R && (u[E].selected = R), R && i && (u[E].defaultSelected = !0);
        }
      } else {
        for (var O = Er(fo(a)), B = null, j = 0; j < u.length; j++) {
          if (u[j].value === O) {
            u[j].selected = !0, i && (u[j].defaultSelected = !0);
            return;
          }
          B === null && !u[j].disabled && (B = u[j]);
        }
        B !== null && (B.selected = !0);
      }
    }
    function zd(e, t) {
      return Tt({}, t, {
        value: void 0
      });
    }
    function hh(e, t) {
      var a = e;
      Qg(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Tc && (m("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Tc = !0);
    }
    function qg(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? vo(a, !!t.multiple, i, !1) : t.defaultValue != null && vo(a, !!t.multiple, t.defaultValue, !0);
    }
    function Kg(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? vo(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? vo(a, !!t.multiple, t.defaultValue, !0) : vo(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Xg(e, t) {
      var a = e, i = t.value;
      i != null && vo(a, !!t.multiple, i, !1);
    }
    var Ud = !1;
    function Pd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Tt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Er(a._wrapperState.initialValue)
      });
      return i;
    }
    function mh(e, t) {
      var a = e;
      Il("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Ud && (m("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", wa() || "A component"), Ud = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, d = t.defaultValue;
        if (u != null) {
          m("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (d != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Jn(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            d = u;
          }
        }
        d == null && (d = ""), i = d;
      }
      a._wrapperState = {
        initialValue: fo(i)
      };
    }
    function yh(e, t) {
      var a = e, i = fo(t.value), u = fo(t.defaultValue);
      if (i != null) {
        var d = Er(i);
        d !== a.value && (a.value = d), t.defaultValue == null && a.defaultValue !== d && (a.defaultValue = d);
      }
      u != null && (a.defaultValue = Er(u));
    }
    function gh(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function $d(e, t) {
      yh(e, t);
    }
    var Pi = "http://www.w3.org/1999/xhtml", Zg = "http://www.w3.org/1998/Math/MathML", jd = "http://www.w3.org/2000/svg";
    function xc(e) {
      switch (e) {
        case "svg":
          return jd;
        case "math":
          return Zg;
        default:
          return Pi;
      }
    }
    function Fd(e, t) {
      return e == null || e === Pi ? xc(t) : e === jd && t === "foreignObject" ? Pi : e;
    }
    var Jg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Rc, Sh = Jg(function(e, t) {
      if (e.namespaceURI === jd && !("innerHTML" in e)) {
        Rc = Rc || document.createElement("div"), Rc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Rc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Vr = 1, $i = 3, Un = 8, ni = 9, Jo = 11, wc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === $i) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, bh = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Ql = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Eh(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Ch = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ql).forEach(function(e) {
      Ch.forEach(function(t) {
        Ql[Eh(t, e)] = Ql[e];
      });
    });
    function kc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Ql.hasOwnProperty(e) && Ql[e]) ? t + "px" : (ia(t, e), ("" + t).trim());
    }
    var ql = /([A-Z])/g, e0 = /^ms-/;
    function t0(e) {
      return e.replace(ql, "-$1").toLowerCase().replace(e0, "-ms-");
    }
    var Th = function() {
    };
    {
      var xh = /^(?:webkit|moz|o)[A-Z]/, Rh = /^-ms-/, cs = /-(.)/g, Kl = /;\s*$/, Xl = {}, Zl = {}, wh = !1, Bd = !1, Vd = function(e) {
        return e.replace(cs, function(t, a) {
          return a.toUpperCase();
        });
      }, Hd = function(e) {
        Xl.hasOwnProperty(e) && Xl[e] || (Xl[e] = !0, m(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Vd(e.replace(Rh, "ms-"))
        ));
      }, kh = function(e) {
        Xl.hasOwnProperty(e) && Xl[e] || (Xl[e] = !0, m("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Oh = function(e, t) {
        Zl.hasOwnProperty(t) && Zl[t] || (Zl[t] = !0, m(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Kl, "")));
      }, Dh = function(e, t) {
        wh || (wh = !0, m("`NaN` is an invalid value for the `%s` css style property.", e));
      }, n0 = function(e, t) {
        Bd || (Bd = !0, m("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Th = function(e, t) {
        e.indexOf("-") > -1 ? Hd(e) : xh.test(e) ? kh(e) : Kl.test(t) && Oh(e, t), typeof t == "number" && (isNaN(t) ? Dh(e, t) : isFinite(t) || n0(e, t));
      };
    }
    var r0 = Th;
    function a0(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var d = i.indexOf("--") === 0;
              t += a + (d ? i : t0(i)) + ":", t += kc(i, u, d), a = ";";
            }
          }
        return t || null;
      }
    }
    function _h(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || r0(i, t[i]);
          var d = kc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, d) : a[i] = d;
        }
    }
    function i0(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ka(e) {
      var t = {};
      for (var a in e)
        for (var i = bh[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function fs(e, t) {
      {
        if (!t)
          return;
        var a = ka(e), i = ka(t), u = {};
        for (var d in a) {
          var h = a[d], b = i[d];
          if (b && h !== b) {
            var E = h + "," + b;
            if (u[E])
              continue;
            u[E] = !0, m("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", i0(e[h]) ? "Removing" : "Updating", h, b);
          }
        }
      }
    }
    var Mh = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Nh = Tt({
      menuitem: !0
    }, Mh), Ah = "__html";
    function Oc(e, t) {
      if (t) {
        if (Nh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ah in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && m("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ji(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Dc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Lh = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ri = {}, Id = new RegExp("^(aria)-[" + nt + "]*$"), ds = new RegExp("^(aria)[A-Z][" + nt + "]*$");
    function Wd(e, t) {
      {
        if (Me.call(ri, t) && ri[t])
          return !0;
        if (ds.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Lh.hasOwnProperty(a) ? a : null;
          if (i == null)
            return m("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ri[t] = !0, !0;
          if (t !== i)
            return m("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ri[t] = !0, !0;
        }
        if (Id.test(t)) {
          var u = t.toLowerCase(), d = Lh.hasOwnProperty(u) ? u : null;
          if (d == null)
            return ri[t] = !0, !1;
          if (t !== d)
            return m("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), ri[t] = !0, !0;
        }
      }
      return !0;
    }
    function zh(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Wd(e, i);
          u || a.push(i);
        }
        var d = a.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        a.length === 1 ? m("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : a.length > 1 && m("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function _c(e, t) {
      ji(e, t) || zh(e, t);
    }
    var el = !1;
    function Yd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !el && (el = !0, e === "select" && t.multiple ? m("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : m("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Gd = function() {
    };
    {
      var er = {}, Qd = /^on./, Uh = /^on[^A-Z]/, Ph = new RegExp("^(aria)-[" + nt + "]*$"), $h = new RegExp("^(aria)[A-Z][" + nt + "]*$");
      Gd = function(e, t, a, i) {
        if (Me.call(er, t) && er[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return m("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), er[t] = !0, !0;
        if (i != null) {
          var d = i.registrationNameDependencies, h = i.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var b = h.hasOwnProperty(u) ? h[u] : null;
          if (b != null)
            return m("Invalid event handler property `%s`. Did you mean `%s`?", t, b), er[t] = !0, !0;
          if (Qd.test(t))
            return m("Unknown event handler property `%s`. It will be ignored.", t), er[t] = !0, !0;
        } else if (Qd.test(t))
          return Uh.test(t) && m("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), er[t] = !0, !0;
        if (Ph.test(t) || $h.test(t))
          return !0;
        if (u === "innerhtml")
          return m("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), er[t] = !0, !0;
        if (u === "aria")
          return m("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), er[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return m("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), er[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return m("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), er[t] = !0, !0;
        var E = sa(t), R = E !== null && E.type === la;
        if (Dc.hasOwnProperty(u)) {
          var O = Dc[u];
          if (O !== t)
            return m("Invalid DOM property `%s`. Did you mean `%s`?", t, O), er[t] = !0, !0;
        } else if (!R && t !== u)
          return m("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), er[t] = !0, !0;
        return typeof a == "boolean" && Fr(t, a, E, !1) ? (a ? m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), er[t] = !0, !0) : R ? !0 : Fr(t, a, E, !1) ? (er[t] = !0, !1) : ((a === "false" || a === "true") && E !== null && E.type === Dn && (m("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), er[t] = !0), !0);
      };
    }
    var jh = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var d = Gd(e, u, t[u], a);
          d || i.push(u);
        }
        var h = i.map(function(b) {
          return "`" + b + "`";
        }).join(", ");
        i.length === 1 ? m("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e) : i.length > 1 && m("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e);
      }
    };
    function Fh(e, t, a) {
      ji(e, t) || jh(e, t, a);
    }
    var Fi = 1, ps = 2, tl = 4, o0 = Fi | ps | tl, vs = null;
    function hs(e) {
      vs !== null && m("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), vs = e;
    }
    function l0() {
      vs === null && m("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), vs = null;
    }
    function Bh(e) {
      return e === vs;
    }
    function Mc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === $i ? t.parentNode : t;
    }
    var tn = null, ho = null, Bi = null;
    function Jl(e) {
      var t = Nu(e);
      if (t) {
        if (typeof tn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Wm(a);
          tn(t.stateNode, t.type, i);
        }
      }
    }
    function Vh(e) {
      tn = e;
    }
    function Nc(e) {
      ho ? Bi ? Bi.push(e) : Bi = [e] : ho = e;
    }
    function ms() {
      return ho !== null || Bi !== null;
    }
    function ys() {
      if (ho) {
        var e = ho, t = Bi;
        if (ho = null, Bi = null, Jl(e), t)
          for (var a = 0; a < t.length; a++)
            Jl(t[a]);
      }
    }
    var nl = function(e, t) {
      return e(t);
    }, qd = function() {
    }, Kd = !1;
    function u0() {
      var e = ms();
      e && (qd(), ys());
    }
    function Xd(e, t, a) {
      if (Kd)
        return e(t, a);
      Kd = !0;
      try {
        return nl(e, t, a);
      } finally {
        Kd = !1, u0();
      }
    }
    function Ac(e, t, a) {
      nl = e, qd = a;
    }
    function Lc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Zd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Lc(t));
        default:
          return !1;
      }
    }
    function rl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Wm(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Zd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var gs = !1;
    if (Rt)
      try {
        var al = {};
        Object.defineProperty(al, "passive", {
          get: function() {
            gs = !0;
          }
        }), window.addEventListener("test", al, al), window.removeEventListener("test", al, al);
      } catch {
        gs = !1;
      }
    function Hh(e, t, a, i, u, d, h, b, E) {
      var R = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, R);
      } catch (O) {
        this.onError(O);
      }
    }
    var Jd = Hh;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ep = document.createElement("react");
      Jd = function(t, a, i, u, d, h, b, E, R) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var O = document.createEvent("Event"), B = !1, j = !0, X = window.event, J = Object.getOwnPropertyDescriptor(window, "event");
        function te() {
          ep.removeEventListener(ne, at, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = X);
        }
        var Ne = Array.prototype.slice.call(arguments, 3);
        function at() {
          B = !0, te(), a.apply(i, Ne), j = !1;
        }
        var Ke, Mt = !1, kt = !1;
        function Y(G) {
          if (Ke = G.error, Mt = !0, Ke === null && G.colno === 0 && G.lineno === 0 && (kt = !0), G.defaultPrevented && Ke != null && typeof Ke == "object")
            try {
              Ke._suppressLogging = !0;
            } catch {
            }
        }
        var ne = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", Y), ep.addEventListener(ne, at, !1), O.initEvent(ne, !1, !1), ep.dispatchEvent(O), J && Object.defineProperty(window, "event", J), B && j && (Mt ? kt && (Ke = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ke = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ke)), window.removeEventListener("error", Y), !B)
          return te(), Hh.apply(this, arguments);
      };
    }
    var s0 = Jd, mo = !1, ai = null, Ss = !1, yo = null, yi = {
      onError: function(e) {
        mo = !0, ai = e;
      }
    };
    function il(e, t, a, i, u, d, h, b, E) {
      mo = !1, ai = null, s0.apply(yi, arguments);
    }
    function Vi(e, t, a, i, u, d, h, b, E) {
      if (il.apply(this, arguments), mo) {
        var R = np();
        Ss || (Ss = !0, yo = R);
      }
    }
    function tp() {
      if (Ss) {
        var e = yo;
        throw Ss = !1, yo = null, e;
      }
    }
    function c0() {
      return mo;
    }
    function np() {
      if (mo) {
        var e = ai;
        return mo = !1, ai = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Oa(e) {
      return e._reactInternals;
    }
    function bs(e) {
      return e._reactInternals !== void 0;
    }
    function eu(e, t) {
      e._reactInternals = t;
    }
    var rt = (
      /*                      */
      0
    ), go = (
      /*                */
      1
    ), ln = (
      /*                    */
      2
    ), bt = (
      /*                       */
      4
    ), Ut = (
      /*                */
      16
    ), jt = (
      /*                 */
      32
    ), gi = (
      /*                     */
      64
    ), pt = (
      /*                   */
      128
    ), Tn = (
      /*            */
      256
    ), Hr = (
      /*                          */
      512
    ), Da = (
      /*                     */
      1024
    ), hn = (
      /*                      */
      2048
    ), _a = (
      /*                    */
      4096
    ), So = (
      /*                   */
      8192
    ), Es = (
      /*             */
      16384
    ), zc = hn | bt | gi | Hr | Da | Es, Ih = (
      /*               */
      32767
    ), pa = (
      /*                   */
      32768
    ), tr = (
      /*                */
      65536
    ), Cs = (
      /* */
      131072
    ), rp = (
      /*                       */
      1048576
    ), ap = (
      /*                    */
      2097152
    ), Ir = (
      /*                 */
      4194304
    ), bo = (
      /*                */
      8388608
    ), Wr = (
      /*               */
      16777216
    ), ol = (
      /*              */
      33554432
    ), tu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      bt | Da | 0
    ), Yr = ln | bt | Ut | jt | Hr | _a | So, Cr = bt | gi | Hr | So, Ma = hn | Ut, sr = Ir | bo | ap, Hi = f.ReactCurrentOwner;
    function va(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (ln | _a)) !== rt && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === _ ? a : null;
    }
    function ip(e) {
      if (e.tag === V) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Uc(e) {
      return e.tag === _ ? e.stateNode.containerInfo : null;
    }
    function op(e) {
      return va(e) === e;
    }
    function ha(e) {
      {
        var t = Hi.current;
        if (t !== null && t.tag === D) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || m("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", gt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Oa(e);
      return u ? va(u) === u : !1;
    }
    function Gr(e) {
      if (va(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function un(e) {
      var t = e.alternate;
      if (!t) {
        var a = va(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var d = i.return;
        if (d === null)
          break;
        var h = d.alternate;
        if (h === null) {
          var b = d.return;
          if (b !== null) {
            i = u = b;
            continue;
          }
          break;
        }
        if (d.child === h.child) {
          for (var E = d.child; E; ) {
            if (E === i)
              return Gr(d), e;
            if (E === u)
              return Gr(d), t;
            E = E.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = d, u = h;
        else {
          for (var R = !1, O = d.child; O; ) {
            if (O === i) {
              R = !0, i = d, u = h;
              break;
            }
            if (O === u) {
              R = !0, u = d, i = h;
              break;
            }
            O = O.sibling;
          }
          if (!R) {
            for (O = h.child; O; ) {
              if (O === i) {
                R = !0, i = h, u = d;
                break;
              }
              if (O === u) {
                R = !0, u = h, i = d;
                break;
              }
              O = O.sibling;
            }
            if (!R)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== _)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Na(e) {
      var t = un(e);
      return t !== null ? lp(t) : null;
    }
    function lp(e) {
      if (e.tag === P || e.tag === H)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = lp(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Wh(e) {
      var t = un(e);
      return t !== null ? Pc(t) : null;
    }
    function Pc(e) {
      if (e.tag === P || e.tag === H)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== N) {
          var a = Pc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var $c = s.unstable_scheduleCallback, Yh = s.unstable_cancelCallback, jc = s.unstable_shouldYield, Gh = s.unstable_requestPaint, bn = s.unstable_now, up = s.unstable_getCurrentPriorityLevel, Fc = s.unstable_ImmediatePriority, ll = s.unstable_UserBlockingPriority, Si = s.unstable_NormalPriority, Qh = s.unstable_LowPriority, Bc = s.unstable_IdlePriority, nu = s.unstable_yieldValue, qh = s.unstable_setDisableYieldValue, Ii = null, In = null, we = null, Aa = !1, ma = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function sp(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return m("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        it && (e = Tt({}, e, {
          getLaneLabelMap: Wi,
          injectProfilingHooks: Kh
        })), Ii = t.inject(e), In = t;
      } catch (a) {
        m("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function cp(e, t) {
      if (In && typeof In.onScheduleFiberRoot == "function")
        try {
          In.onScheduleFiberRoot(Ii, e, t);
        } catch (a) {
          Aa || (Aa = !0, m("React instrumentation encountered an error: %s", a));
        }
    }
    function ru(e, t) {
      if (In && typeof In.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & pt) === pt;
          if (Ve) {
            var i;
            switch (t) {
              case Nn:
                i = Fc;
                break;
              case Gi:
                i = ll;
                break;
              case bi:
                i = Si;
                break;
              case hu:
                i = Bc;
                break;
              default:
                i = Si;
                break;
            }
            In.onCommitFiberRoot(Ii, e, i, a);
          }
        } catch (u) {
          Aa || (Aa = !0, m("React instrumentation encountered an error: %s", u));
        }
    }
    function La(e) {
      if (In && typeof In.onPostCommitFiberRoot == "function")
        try {
          In.onPostCommitFiberRoot(Ii, e);
        } catch (t) {
          Aa || (Aa = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function ul(e) {
      if (In && typeof In.onCommitFiberUnmount == "function")
        try {
          In.onCommitFiberUnmount(Ii, e);
        } catch (t) {
          Aa || (Aa = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Pn(e) {
      if (typeof nu == "function" && (qh(e), y(e)), In && typeof In.setStrictMode == "function")
        try {
          In.setStrictMode(Ii, e);
        } catch (t) {
          Aa || (Aa = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Kh(e) {
      we = e;
    }
    function Wi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < ks; a++) {
          var i = d0(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Eo(e) {
      we !== null && typeof we.markCommitStarted == "function" && we.markCommitStarted(e);
    }
    function Vc() {
      we !== null && typeof we.markCommitStopped == "function" && we.markCommitStopped();
    }
    function au(e) {
      we !== null && typeof we.markComponentRenderStarted == "function" && we.markComponentRenderStarted(e);
    }
    function Qr() {
      we !== null && typeof we.markComponentRenderStopped == "function" && we.markComponentRenderStopped();
    }
    function Co(e) {
      we !== null && typeof we.markComponentPassiveEffectMountStarted == "function" && we.markComponentPassiveEffectMountStarted(e);
    }
    function Hc() {
      we !== null && typeof we.markComponentPassiveEffectMountStopped == "function" && we.markComponentPassiveEffectMountStopped();
    }
    function Xh(e) {
      we !== null && typeof we.markComponentPassiveEffectUnmountStarted == "function" && we.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ic() {
      we !== null && typeof we.markComponentPassiveEffectUnmountStopped == "function" && we.markComponentPassiveEffectUnmountStopped();
    }
    function Zh(e) {
      we !== null && typeof we.markComponentLayoutEffectMountStarted == "function" && we.markComponentLayoutEffectMountStarted(e);
    }
    function Ts() {
      we !== null && typeof we.markComponentLayoutEffectMountStopped == "function" && we.markComponentLayoutEffectMountStopped();
    }
    function ii(e) {
      we !== null && typeof we.markComponentLayoutEffectUnmountStarted == "function" && we.markComponentLayoutEffectUnmountStarted(e);
    }
    function iu() {
      we !== null && typeof we.markComponentLayoutEffectUnmountStopped == "function" && we.markComponentLayoutEffectUnmountStopped();
    }
    function xs(e, t, a) {
      we !== null && typeof we.markComponentErrored == "function" && we.markComponentErrored(e, t, a);
    }
    function sl(e, t, a) {
      we !== null && typeof we.markComponentSuspended == "function" && we.markComponentSuspended(e, t, a);
    }
    function fp(e) {
      we !== null && typeof we.markLayoutEffectsStarted == "function" && we.markLayoutEffectsStarted(e);
    }
    function ou() {
      we !== null && typeof we.markLayoutEffectsStopped == "function" && we.markLayoutEffectsStopped();
    }
    function Jh(e) {
      we !== null && typeof we.markPassiveEffectsStarted == "function" && we.markPassiveEffectsStarted(e);
    }
    function dp() {
      we !== null && typeof we.markPassiveEffectsStopped == "function" && we.markPassiveEffectsStopped();
    }
    function mn(e) {
      we !== null && typeof we.markRenderStarted == "function" && we.markRenderStarted(e);
    }
    function Wc() {
      we !== null && typeof we.markRenderYielded == "function" && we.markRenderYielded();
    }
    function Yc() {
      we !== null && typeof we.markRenderStopped == "function" && we.markRenderStopped();
    }
    function pp(e) {
      we !== null && typeof we.markRenderScheduled == "function" && we.markRenderScheduled(e);
    }
    function Gc(e, t) {
      we !== null && typeof we.markForceUpdateScheduled == "function" && we.markForceUpdateScheduled(e, t);
    }
    function Rs(e, t) {
      we !== null && typeof we.markStateUpdateScheduled == "function" && we.markStateUpdateScheduled(e, t);
    }
    var Ge = (
      /*                         */
      0
    ), qe = (
      /*                 */
      1
    ), vt = (
      /*                    */
      2
    ), xt = (
      /*               */
      8
    ), ya = (
      /*              */
      16
    ), lu = Math.clz32 ? Math.clz32 : Tr, ws = Math.log, f0 = Math.LN2;
    function Tr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ws(t) / f0 | 0) | 0;
    }
    var ks = 31, fe = (
      /*                        */
      0
    ), $n = (
      /*                          */
      0
    ), Ze = (
      /*                        */
      1
    ), cr = (
      /*    */
      2
    ), ga = (
      /*             */
      4
    ), Yi = (
      /*            */
      8
    ), za = (
      /*                     */
      16
    ), uu = (
      /*                */
      32
    ), cl = (
      /*                       */
      4194240
    ), su = (
      /*                        */
      64
    ), Qc = (
      /*                        */
      128
    ), qc = (
      /*                        */
      256
    ), Kc = (
      /*                        */
      512
    ), Xc = (
      /*                        */
      1024
    ), Zc = (
      /*                        */
      2048
    ), fl = (
      /*                        */
      4096
    ), Jc = (
      /*                        */
      8192
    ), cu = (
      /*                        */
      16384
    ), fu = (
      /*                       */
      32768
    ), ef = (
      /*                       */
      65536
    ), Os = (
      /*                       */
      131072
    ), tf = (
      /*                       */
      262144
    ), nf = (
      /*                       */
      524288
    ), rf = (
      /*                       */
      1048576
    ), af = (
      /*                       */
      2097152
    ), du = (
      /*                            */
      130023424
    ), dl = (
      /*                             */
      4194304
    ), of = (
      /*                             */
      8388608
    ), lf = (
      /*                             */
      16777216
    ), vp = (
      /*                             */
      33554432
    ), uf = (
      /*                             */
      67108864
    ), em = dl, Ds = (
      /*          */
      134217728
    ), hp = (
      /*                          */
      268435455
    ), pu = (
      /*               */
      268435456
    ), To = (
      /*                        */
      536870912
    ), xr = (
      /*                   */
      1073741824
    );
    function d0(e) {
      {
        if (e & Ze)
          return "Sync";
        if (e & cr)
          return "InputContinuousHydration";
        if (e & ga)
          return "InputContinuous";
        if (e & Yi)
          return "DefaultHydration";
        if (e & za)
          return "Default";
        if (e & uu)
          return "TransitionHydration";
        if (e & cl)
          return "Transition";
        if (e & du)
          return "Retry";
        if (e & Ds)
          return "SelectiveHydration";
        if (e & pu)
          return "IdleHydration";
        if (e & To)
          return "Idle";
        if (e & xr)
          return "Offscreen";
      }
    }
    var an = -1, sf = su, qr = dl;
    function pl(e) {
      switch (Mn(e)) {
        case Ze:
          return Ze;
        case cr:
          return cr;
        case ga:
          return ga;
        case Yi:
          return Yi;
        case za:
          return za;
        case uu:
          return uu;
        case su:
        case Qc:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case fl:
        case Jc:
        case cu:
        case fu:
        case ef:
        case Os:
        case tf:
        case nf:
        case rf:
        case af:
          return e & cl;
        case dl:
        case of:
        case lf:
        case vp:
        case uf:
          return e & du;
        case Ds:
          return Ds;
        case pu:
          return pu;
        case To:
          return To;
        case xr:
          return xr;
        default:
          return m("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function vl(e, t) {
      var a = e.pendingLanes;
      if (a === fe)
        return fe;
      var i = fe, u = e.suspendedLanes, d = e.pingedLanes, h = a & hp;
      if (h !== fe) {
        var b = h & ~u;
        if (b !== fe)
          i = pl(b);
        else {
          var E = h & d;
          E !== fe && (i = pl(E));
        }
      } else {
        var R = a & ~u;
        R !== fe ? i = pl(R) : d !== fe && (i = pl(d));
      }
      if (i === fe)
        return fe;
      if (t !== fe && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === fe) {
        var O = Mn(i), B = Mn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          O >= B || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          O === za && (B & cl) !== fe
        )
          return t;
      }
      (i & ga) !== fe && (i |= a & za);
      var j = e.entangledLanes;
      if (j !== fe)
        for (var X = e.entanglements, J = i & j; J > 0; ) {
          var te = Ro(J), Ne = 1 << te;
          i |= X[te], J &= ~Ne;
        }
      return i;
    }
    function tm(e, t) {
      for (var a = e.eventTimes, i = an; t > 0; ) {
        var u = Ro(t), d = 1 << u, h = a[u];
        h > i && (i = h), t &= ~d;
      }
      return i;
    }
    function nm(e, t) {
      switch (e) {
        case Ze:
        case cr:
        case ga:
          return t + 250;
        case Yi:
        case za:
        case uu:
        case su:
        case Qc:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case fl:
        case Jc:
        case cu:
        case fu:
        case ef:
        case Os:
        case tf:
        case nf:
        case rf:
        case af:
          return t + 5e3;
        case dl:
        case of:
        case lf:
        case vp:
        case uf:
          return an;
        case Ds:
        case pu:
        case To:
        case xr:
          return an;
        default:
          return m("Should have found matching lanes. This is a bug in React."), an;
      }
    }
    function rm(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, d = e.expirationTimes, h = a; h > 0; ) {
        var b = Ro(h), E = 1 << b, R = d[b];
        R === an ? ((E & i) === fe || (E & u) !== fe) && (d[b] = nm(E, t)) : R <= t && (e.expiredLanes |= E), h &= ~E;
      }
    }
    function mp(e) {
      return pl(e.pendingLanes);
    }
    function xo(e) {
      var t = e.pendingLanes & ~xr;
      return t !== fe ? t : t & xr ? xr : fe;
    }
    function yp(e) {
      return (e & Ze) !== fe;
    }
    function _s(e) {
      return (e & hp) !== fe;
    }
    function am(e) {
      return (e & du) === e;
    }
    function im(e) {
      var t = Ze | ga | za;
      return (e & t) === fe;
    }
    function om(e) {
      return (e & cl) === e;
    }
    function Ms(e, t) {
      var a = cr | ga | Yi | za;
      return (t & a) !== fe;
    }
    function lm(e, t) {
      return (t & e.expiredLanes) !== fe;
    }
    function gp(e) {
      return (e & cl) !== fe;
    }
    function um() {
      var e = sf;
      return sf <<= 1, (sf & cl) === fe && (sf = su), e;
    }
    function Kr() {
      var e = qr;
      return qr <<= 1, (qr & du) === fe && (qr = dl), e;
    }
    function Mn(e) {
      return e & -e;
    }
    function vu(e) {
      return Mn(e);
    }
    function Ro(e) {
      return 31 - lu(e);
    }
    function cf(e) {
      return Ro(e);
    }
    function Xr(e, t) {
      return (e & t) !== fe;
    }
    function hl(e, t) {
      return (e & t) === t;
    }
    function St(e, t) {
      return e | t;
    }
    function Ns(e, t) {
      return e & ~t;
    }
    function ff(e, t) {
      return e & t;
    }
    function p0(e) {
      return e;
    }
    function sm(e, t) {
      return e !== $n && e < t ? e : t;
    }
    function As(e) {
      for (var t = [], a = 0; a < ks; a++)
        t.push(e);
      return t;
    }
    function ml(e, t, a) {
      e.pendingLanes |= t, t !== To && (e.suspendedLanes = fe, e.pingedLanes = fe);
      var i = e.eventTimes, u = cf(t);
      i[u] = a;
    }
    function cm(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ro(i), d = 1 << u;
        a[u] = an, i &= ~d;
      }
    }
    function df(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function pf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = fe, e.pingedLanes = fe, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, d = e.expirationTimes, h = a; h > 0; ) {
        var b = Ro(h), E = 1 << b;
        i[b] = fe, u[b] = an, d[b] = an, h &= ~E;
      }
    }
    function Sp(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var d = Ro(u), h = 1 << d;
        // Is this one of the newly entangled lanes?
        h & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[d] & t && (i[d] |= t), u &= ~h;
      }
    }
    function fm(e, t) {
      var a = Mn(t), i;
      switch (a) {
        case ga:
          i = cr;
          break;
        case za:
          i = Yi;
          break;
        case su:
        case Qc:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case fl:
        case Jc:
        case cu:
        case fu:
        case ef:
        case Os:
        case tf:
        case nf:
        case rf:
        case af:
        case dl:
        case of:
        case lf:
        case vp:
        case uf:
          i = uu;
          break;
        case To:
          i = pu;
          break;
        default:
          i = $n;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== $n ? $n : i;
    }
    function vf(e, t, a) {
      if (ma)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = cf(a), d = 1 << u, h = i[u];
          h.add(t), a &= ~d;
        }
    }
    function bp(e, t) {
      if (ma)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = cf(t), d = 1 << u, h = a[u];
          h.size > 0 && (h.forEach(function(b) {
            var E = b.alternate;
            (E === null || !i.has(E)) && i.add(b);
          }), h.clear()), t &= ~d;
        }
    }
    function Ls(e, t) {
      return null;
    }
    var Nn = Ze, Gi = ga, bi = za, hu = To, mu = $n;
    function Ua() {
      return mu;
    }
    function xn(e) {
      mu = e;
    }
    function Rr(e, t) {
      var a = mu;
      try {
        return mu = e, t();
      } finally {
        mu = a;
      }
    }
    function v0(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function h0(e, t) {
      return e > t ? e : t;
    }
    function yu(e, t) {
      return e !== 0 && e < t;
    }
    function fr(e) {
      var t = Mn(e);
      return yu(Nn, t) ? yu(Gi, t) ? _s(t) ? bi : hu : Gi : Nn;
    }
    function hf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var $e;
    function gu(e) {
      $e = e;
    }
    function Ep(e) {
      $e(e);
    }
    var mf;
    function m0(e) {
      mf = e;
    }
    var Su;
    function yf(e) {
      Su = e;
    }
    var gf;
    function dm(e) {
      gf = e;
    }
    var Cp;
    function pm(e) {
      Cp = e;
    }
    var zs = !1, bu = [], yn = null, nr = null, Or = null, Eu = /* @__PURE__ */ new Map(), Cu = /* @__PURE__ */ new Map(), rr = [], vm = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ei(e) {
      return vm.indexOf(e) > -1;
    }
    function y0(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Tp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          yn = null;
          break;
        case "dragenter":
        case "dragleave":
          nr = null;
          break;
        case "mouseover":
        case "mouseout":
          Or = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Eu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Cu.delete(i);
          break;
        }
      }
    }
    function Tu(e, t, a, i, u, d) {
      if (e === null || e.nativeEvent !== d) {
        var h = y0(t, a, i, u, d);
        if (t !== null) {
          var b = Nu(t);
          b !== null && mf(b);
        }
        return h;
      }
      e.eventSystemFlags |= i;
      var E = e.targetContainers;
      return u !== null && E.indexOf(u) === -1 && E.push(u), e;
    }
    function hm(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var d = u;
          return yn = Tu(yn, e, t, a, i, d), !0;
        }
        case "dragenter": {
          var h = u;
          return nr = Tu(nr, e, t, a, i, h), !0;
        }
        case "mouseover": {
          var b = u;
          return Or = Tu(Or, e, t, a, i, b), !0;
        }
        case "pointerover": {
          var E = u, R = E.pointerId;
          return Eu.set(R, Tu(Eu.get(R) || null, e, t, a, i, E)), !0;
        }
        case "gotpointercapture": {
          var O = u, B = O.pointerId;
          return Cu.set(B, Tu(Cu.get(B) || null, e, t, a, i, O)), !0;
        }
      }
      return !1;
    }
    function xp(e) {
      var t = Gs(e.target);
      if (t !== null) {
        var a = va(t);
        if (a !== null) {
          var i = a.tag;
          if (i === V) {
            var u = ip(a);
            if (u !== null) {
              e.blockedOn = u, Cp(e.priority, function() {
                Su(a);
              });
              return;
            }
          } else if (i === _) {
            var d = a.stateNode;
            if (hf(d)) {
              e.blockedOn = Uc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function g0(e) {
      for (var t = gf(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < rr.length && yu(t, rr[i].priority); i++)
        ;
      rr.splice(i, 0, a), i === 0 && xp(a);
    }
    function yl(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = wr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, d = new u.constructor(u.type, u);
          hs(d), u.target.dispatchEvent(d), l0();
        } else {
          var h = Nu(i);
          return h !== null && mf(h), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Sf(e, t, a) {
      yl(e) && a.delete(t);
    }
    function Pa() {
      zs = !1, yn !== null && yl(yn) && (yn = null), nr !== null && yl(nr) && (nr = null), Or !== null && yl(Or) && (Or = null), Eu.forEach(Sf), Cu.forEach(Sf);
    }
    function wt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, zs || (zs = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Pa)));
    }
    function Rn(e) {
      if (bu.length > 0) {
        wt(bu[0], e);
        for (var t = 1; t < bu.length; t++) {
          var a = bu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      yn !== null && wt(yn, e), nr !== null && wt(nr, e), Or !== null && wt(Or, e);
      var i = function(b) {
        return wt(b, e);
      };
      Eu.forEach(i), Cu.forEach(i);
      for (var u = 0; u < rr.length; u++) {
        var d = rr[u];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; rr.length > 0; ) {
        var h = rr[0];
        if (h.blockedOn !== null)
          break;
        xp(h), h.blockedOn === null && rr.shift();
      }
    }
    var sn = f.ReactCurrentBatchConfig, Wn = !0;
    function Zr(e) {
      Wn = !!e;
    }
    function xu() {
      return Wn;
    }
    function Yn(e, t, a) {
      var i = bf(t), u;
      switch (i) {
        case Nn:
          u = Us;
          break;
        case Gi:
          u = gl;
          break;
        case bi:
        default:
          u = Ru;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Us(e, t, a, i) {
      var u = Ua(), d = sn.transition;
      sn.transition = null;
      try {
        xn(Nn), Ru(e, t, a, i);
      } finally {
        xn(u), sn.transition = d;
      }
    }
    function gl(e, t, a, i) {
      var u = Ua(), d = sn.transition;
      sn.transition = null;
      try {
        xn(Gi), Ru(e, t, a, i);
      } finally {
        xn(u), sn.transition = d;
      }
    }
    function Ru(e, t, a, i) {
      Wn && Rp(e, t, a, i);
    }
    function Rp(e, t, a, i) {
      var u = wr(e, t, a, i);
      if (u === null) {
        z0(e, t, i, wo, a), Tp(e, i);
        return;
      }
      if (hm(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Tp(e, i), t & tl && Ei(e)) {
        for (; u !== null; ) {
          var d = Nu(u);
          d !== null && Ep(d);
          var h = wr(e, t, a, i);
          if (h === null && z0(e, t, i, wo, a), h === u)
            break;
          u = h;
        }
        u !== null && i.stopPropagation();
        return;
      }
      z0(e, t, i, null, a);
    }
    var wo = null;
    function wr(e, t, a, i) {
      wo = null;
      var u = Mc(i), d = Gs(u);
      if (d !== null) {
        var h = va(d);
        if (h === null)
          d = null;
        else {
          var b = h.tag;
          if (b === V) {
            var E = ip(h);
            if (E !== null)
              return E;
            d = null;
          } else if (b === _) {
            var R = h.stateNode;
            if (hf(R))
              return Uc(h);
            d = null;
          } else h !== d && (d = null);
        }
      }
      return wo = d, null;
    }
    function bf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Nn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Gi;
        case "message": {
          var t = up();
          switch (t) {
            case Fc:
              return Nn;
            case ll:
              return Gi;
            case Si:
            case Qh:
              return bi;
            case Bc:
              return hu;
            default:
              return bi;
          }
        }
        default:
          return bi;
      }
    }
    function wu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Qi(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ef(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function wp(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var $a = null, ku = null, ja = null;
    function Cf(e) {
      return $a = e, ku = $s(), !0;
    }
    function Ps() {
      $a = null, ku = null, ja = null;
    }
    function Tf() {
      if (ja)
        return ja;
      var e, t = ku, a = t.length, i, u = $s(), d = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var h = a - e;
      for (i = 1; i <= h && t[a - i] === u[d - i]; i++)
        ;
      var b = i > 1 ? 1 - i : void 0;
      return ja = u.slice(e, b), ja;
    }
    function $s() {
      return "value" in $a ? $a.value : $a.textContent;
    }
    function Sl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ar() {
      return !0;
    }
    function qi() {
      return !1;
    }
    function En(e) {
      function t(a, i, u, d, h) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = d, this.target = h, this.currentTarget = null;
        for (var b in e)
          if (e.hasOwnProperty(b)) {
            var E = e[b];
            E ? this[b] = E(d) : this[b] = d[b];
          }
        var R = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return R ? this.isDefaultPrevented = ar : this.isDefaultPrevented = qi, this.isPropagationStopped = qi, this;
      }
      return Tt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ar);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ar);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: ar
      }), t;
    }
    var Gn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, xf = En(Gn), bl = Tt({}, Gn, {
      view: 0,
      detail: 0
    }), kp = En(bl), Op, Ci, Ou;
    function Dp(e) {
      e !== Ou && (Ou && e.type === "mousemove" ? (Op = e.screenX - Ou.screenX, Ci = e.screenY - Ou.screenY) : (Op = 0, Ci = 0), Ou = e);
    }
    var Ti = Tt({}, bl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: _p,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Dp(e), Op);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ci;
      }
    }), Rf = En(Ti), El = Tt({}, Ti, {
      dataTransfer: 0
    }), mm = En(El), ym = Tt({}, bl, {
      relatedTarget: 0
    }), js = En(ym), wf = Tt({}, Gn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), S0 = En(wf), b0 = Tt({}, Gn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), gm = En(b0), Sm = Tt({}, Gn, {
      data: 0
    }), ko = En(Sm), E0 = ko, Du = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, bm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function wn(e) {
      if (e.key) {
        var t = Du[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Sl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? bm[e.keyCode] || "Unidentified" : "";
    }
    var C0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Em(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = C0[e];
      return i ? !!a[i] : !1;
    }
    function _p(e) {
      return Em;
    }
    var T0 = Tt({}, bl, {
      key: wn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: _p,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Sl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Sl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Cm = En(T0), Tm = Tt({}, Ti, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), xm = En(Tm), Fa = Tt({}, bl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: _p
    }), Mp = En(Fa), x0 = Tt({}, Gn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Oo = En(x0), kf = Tt({}, Ti, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Cl = En(kf), Of = [9, 13, 27, 32], Df = 229, Fs = Rt && "CompositionEvent" in window, Bs = null;
    Rt && "documentMode" in document && (Bs = document.documentMode);
    var Np = Rt && "TextEvent" in window && !Bs, Rm = Rt && (!Fs || Bs && Bs > 8 && Bs <= 11), Ap = 32, Lp = String.fromCharCode(Ap);
    function _f() {
      Dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Dt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Dt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Dt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Vs = !1;
    function wm(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function zp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function R0(e, t) {
      return e === "keydown" && t.keyCode === Df;
    }
    function Up(e, t) {
      switch (e) {
        case "keyup":
          return Of.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Df;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Mf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Hs(e) {
      return e.locale === "ko";
    }
    var Do = !1;
    function Nf(e, t, a, i, u) {
      var d, h;
      if (Fs ? d = zp(t) : Do ? Up(t, i) && (d = "onCompositionEnd") : R0(t, i) && (d = "onCompositionStart"), !d)
        return null;
      Rm && !Hs(i) && (!Do && d === "onCompositionStart" ? Do = Cf(u) : d === "onCompositionEnd" && Do && (h = Tf()));
      var b = Nm(a, d);
      if (b.length > 0) {
        var E = new ko(d, t, null, i, u);
        if (e.push({
          event: E,
          listeners: b
        }), h)
          E.data = h;
        else {
          var R = Mf(i);
          R !== null && (E.data = R);
        }
      }
    }
    function km(e, t) {
      switch (e) {
        case "compositionend":
          return Mf(t);
        case "keypress":
          var a = t.which;
          return a !== Ap ? null : (Vs = !0, Lp);
        case "textInput":
          var i = t.data;
          return i === Lp && Vs ? null : i;
        default:
          return null;
      }
    }
    function w0(e, t) {
      if (Do) {
        if (e === "compositionend" || !Fs && Up(e, t)) {
          var a = Tf();
          return Ps(), Do = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!wm(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Rm && !Hs(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Af(e, t, a, i, u) {
      var d;
      if (Np ? d = km(t, i) : d = w0(t, i), !d)
        return null;
      var h = Nm(a, "onBeforeInput");
      if (h.length > 0) {
        var b = new E0("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: b,
          listeners: h
        }), b.data = d;
      }
    }
    function k0(e, t, a, i, u, d, h) {
      Nf(e, t, a, i, u), Af(e, t, a, i, u);
    }
    var Is = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Om(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Is[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Lf(e) {
      if (!Rt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Dt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Nc(i);
      var u = Nm(t, "onChange");
      if (u.length > 0) {
        var d = new xf("onChange", "change", null, a, i);
        e.push({
          event: d,
          listeners: u
        });
      }
    }
    var l = null, c = null;
    function p(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function g(e) {
      var t = [];
      r(t, c, e, Mc(e)), Xd(T, t);
    }
    function T(e) {
      LE(e, 0);
    }
    function M(e) {
      var t = Ff(e);
      if (ch(t))
        return e;
    }
    function z(e, t) {
      if (e === "change")
        return t;
    }
    var Z = !1;
    Rt && (Z = Lf("input") && (!document.documentMode || document.documentMode > 9));
    function pe(e, t) {
      l = e, c = t, l.attachEvent("onpropertychange", de);
    }
    function ye() {
      l && (l.detachEvent("onpropertychange", de), l = null, c = null);
    }
    function de(e) {
      e.propertyName === "value" && M(c) && g(e);
    }
    function ze(e, t, a) {
      e === "focusin" ? (ye(), pe(t, a)) : e === "focusout" && ye();
    }
    function He(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return M(c);
    }
    function Ye(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function An(e, t) {
      if (e === "click")
        return M(t);
    }
    function I(e, t) {
      if (e === "input" || e === "change")
        return M(t);
    }
    function F(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || po(e, "number", e.value);
    }
    function Q(e, t, a, i, u, d, h) {
      var b = a ? Ff(a) : window, E, R;
      if (p(b) ? E = z : Om(b) ? Z ? E = I : (E = He, R = ze) : Ye(b) && (E = An), E) {
        var O = E(t, a);
        if (O) {
          r(e, O, i, u);
          return;
        }
      }
      R && R(t, b, a), t === "focusout" && F(b);
    }
    function Ee() {
      be("onMouseEnter", ["mouseout", "mouseover"]), be("onMouseLeave", ["mouseout", "mouseover"]), be("onPointerEnter", ["pointerout", "pointerover"]), be("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Qe(e, t, a, i, u, d, h) {
      var b = t === "mouseover" || t === "pointerover", E = t === "mouseout" || t === "pointerout";
      if (b && !Bh(i)) {
        var R = i.relatedTarget || i.fromElement;
        if (R && (Gs(R) || Kp(R)))
          return;
      }
      if (!(!E && !b)) {
        var O;
        if (u.window === u)
          O = u;
        else {
          var B = u.ownerDocument;
          B ? O = B.defaultView || B.parentWindow : O = window;
        }
        var j, X;
        if (E) {
          var J = i.relatedTarget || i.toElement;
          if (j = a, X = J ? Gs(J) : null, X !== null) {
            var te = va(X);
            (X !== te || X.tag !== P && X.tag !== H) && (X = null);
          }
        } else
          j = null, X = a;
        if (j !== X) {
          var Ne = Rf, at = "onMouseLeave", Ke = "onMouseEnter", Mt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ne = xm, at = "onPointerLeave", Ke = "onPointerEnter", Mt = "pointer");
          var kt = j == null ? O : Ff(j), Y = X == null ? O : Ff(X), ne = new Ne(at, Mt + "leave", j, i, u);
          ne.target = kt, ne.relatedTarget = Y;
          var G = null, ge = Gs(u);
          if (ge === a) {
            var Pe = new Ne(Ke, Mt + "enter", X, i, u);
            Pe.target = Y, Pe.relatedTarget = kt, G = Pe;
          }
          bk(e, ne, G, j, X);
        }
      }
    }
    function ot(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ie = typeof Object.is == "function" ? Object.is : ot;
    function lt(e, t) {
      if (Ie(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var d = a[u];
        if (!Me.call(t, d) || !Ie(e[d], t[d]))
          return !1;
      }
      return !0;
    }
    function Qn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function At(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ki(e, t) {
      for (var a = Qn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === $i) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Qn(At(a));
      }
    }
    function O0(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, d = i.anchorOffset, h = i.focusNode, b = i.focusOffset;
      try {
        u.nodeType, h.nodeType;
      } catch {
        return null;
      }
      return ek(e, u, d, h, b);
    }
    function ek(e, t, a, i, u) {
      var d = 0, h = -1, b = -1, E = 0, R = 0, O = e, B = null;
      e: for (; ; ) {
        for (var j = null; O === t && (a === 0 || O.nodeType === $i) && (h = d + a), O === i && (u === 0 || O.nodeType === $i) && (b = d + u), O.nodeType === $i && (d += O.nodeValue.length), (j = O.firstChild) !== null; )
          B = O, O = j;
        for (; ; ) {
          if (O === e)
            break e;
          if (B === t && ++E === a && (h = d), B === i && ++R === u && (b = d), (j = O.nextSibling) !== null)
            break;
          O = B, B = O.parentNode;
        }
        O = j;
      }
      return h === -1 || b === -1 ? null : {
        start: h,
        end: b
      };
    }
    function tk(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), d = e.textContent.length, h = Math.min(t.start, d), b = t.end === void 0 ? h : Math.min(t.end, d);
        if (!u.extend && h > b) {
          var E = b;
          b = h, h = E;
        }
        var R = Ki(e, h), O = Ki(e, b);
        if (R && O) {
          if (u.rangeCount === 1 && u.anchorNode === R.node && u.anchorOffset === R.offset && u.focusNode === O.node && u.focusOffset === O.offset)
            return;
          var B = a.createRange();
          B.setStart(R.node, R.offset), u.removeAllRanges(), h > b ? (u.addRange(B), u.extend(O.node, O.offset)) : (B.setEnd(O.node, O.offset), u.addRange(B));
        }
      }
    }
    function CE(e) {
      return e && e.nodeType === $i;
    }
    function TE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : CE(e) ? !1 : CE(t) ? TE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function nk(e) {
      return e && e.ownerDocument && TE(e.ownerDocument.documentElement, e);
    }
    function rk(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function xE() {
      for (var e = window, t = gc(); t instanceof e.HTMLIFrameElement; ) {
        if (rk(t))
          e = t.contentWindow;
        else
          return t;
        t = gc(e.document);
      }
      return t;
    }
    function D0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function ak() {
      var e = xE();
      return {
        focusedElem: e,
        selectionRange: D0(e) ? ok(e) : null
      };
    }
    function ik(e) {
      var t = xE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && nk(a)) {
        i !== null && D0(a) && lk(a, i);
        for (var u = [], d = a; d = d.parentNode; )
          d.nodeType === Vr && u.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var h = 0; h < u.length; h++) {
          var b = u[h];
          b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
        }
      }
    }
    function ok(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = O0(e), t || {
        start: 0,
        end: 0
      };
    }
    function lk(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : tk(e, t);
    }
    var uk = Rt && "documentMode" in document && document.documentMode <= 11;
    function sk() {
      Dt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var zf = null, _0 = null, Pp = null, M0 = !1;
    function ck(e) {
      if ("selectionStart" in e && D0(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function fk(e) {
      return e.window === e ? e.document : e.nodeType === ni ? e : e.ownerDocument;
    }
    function RE(e, t, a) {
      var i = fk(a);
      if (!(M0 || zf == null || zf !== gc(i))) {
        var u = ck(zf);
        if (!Pp || !lt(Pp, u)) {
          Pp = u;
          var d = Nm(_0, "onSelect");
          if (d.length > 0) {
            var h = new xf("onSelect", "select", null, t, a);
            e.push({
              event: h,
              listeners: d
            }), h.target = zf;
          }
        }
      }
    }
    function dk(e, t, a, i, u, d, h) {
      var b = a ? Ff(a) : window;
      switch (t) {
        case "focusin":
          (Om(b) || b.contentEditable === "true") && (zf = b, _0 = a, Pp = null);
          break;
        case "focusout":
          zf = null, _0 = null, Pp = null;
          break;
        case "mousedown":
          M0 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          M0 = !1, RE(e, i, u);
          break;
        case "selectionchange":
          if (uk)
            break;
        case "keydown":
        case "keyup":
          RE(e, i, u);
      }
    }
    function Dm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Uf = {
      animationend: Dm("Animation", "AnimationEnd"),
      animationiteration: Dm("Animation", "AnimationIteration"),
      animationstart: Dm("Animation", "AnimationStart"),
      transitionend: Dm("Transition", "TransitionEnd")
    }, N0 = {}, wE = {};
    Rt && (wE = document.createElement("div").style, "AnimationEvent" in window || (delete Uf.animationend.animation, delete Uf.animationiteration.animation, delete Uf.animationstart.animation), "TransitionEvent" in window || delete Uf.transitionend.transition);
    function _m(e) {
      if (N0[e])
        return N0[e];
      if (!Uf[e])
        return e;
      var t = Uf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in wE)
          return N0[e] = t[a];
      return e;
    }
    var kE = _m("animationend"), OE = _m("animationiteration"), DE = _m("animationstart"), _E = _m("transitionend"), ME = /* @__PURE__ */ new Map(), NE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _u(e, t) {
      ME.set(e, t), Dt(t, [e]);
    }
    function pk() {
      for (var e = 0; e < NE.length; e++) {
        var t = NE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _u(a, "on" + i);
      }
      _u(kE, "onAnimationEnd"), _u(OE, "onAnimationIteration"), _u(DE, "onAnimationStart"), _u("dblclick", "onDoubleClick"), _u("focusin", "onFocus"), _u("focusout", "onBlur"), _u(_E, "onTransitionEnd");
    }
    function vk(e, t, a, i, u, d, h) {
      var b = ME.get(t);
      if (b !== void 0) {
        var E = xf, R = t;
        switch (t) {
          case "keypress":
            if (Sl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            E = Cm;
            break;
          case "focusin":
            R = "focus", E = js;
            break;
          case "focusout":
            R = "blur", E = js;
            break;
          case "beforeblur":
          case "afterblur":
            E = js;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            E = Rf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = mm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = Mp;
            break;
          case kE:
          case OE:
          case DE:
            E = S0;
            break;
          case _E:
            E = Oo;
            break;
          case "scroll":
            E = kp;
            break;
          case "wheel":
            E = Cl;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = gm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = xm;
            break;
        }
        var O = (d & tl) !== 0;
        {
          var B = !O && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", j = gk(a, b, i.type, O, B);
          if (j.length > 0) {
            var X = new E(b, R, null, i, u);
            e.push({
              event: X,
              listeners: j
            });
          }
        }
      }
    }
    pk(), Ee(), n(), sk(), _f();
    function hk(e, t, a, i, u, d, h) {
      vk(e, t, a, i, u, d);
      var b = (d & o0) === 0;
      b && (Qe(e, t, a, i, u), Q(e, t, a, i, u), dk(e, t, a, i, u), k0(e, t, a, i, u));
    }
    var $p = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], A0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat($p));
    function AE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Vi(i, t, void 0, e), e.currentTarget = null;
    }
    function mk(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var d = t[u], h = d.instance, b = d.currentTarget, E = d.listener;
          if (h !== i && e.isPropagationStopped())
            return;
          AE(e, E, b), i = h;
        }
      else
        for (var R = 0; R < t.length; R++) {
          var O = t[R], B = O.instance, j = O.currentTarget, X = O.listener;
          if (B !== i && e.isPropagationStopped())
            return;
          AE(e, X, j), i = B;
        }
    }
    function LE(e, t) {
      for (var a = (t & tl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], d = u.event, h = u.listeners;
        mk(d, h, a);
      }
      tp();
    }
    function yk(e, t, a, i, u) {
      var d = Mc(a), h = [];
      hk(h, e, i, a, d, t), LE(h, t);
    }
    function Cn(e, t) {
      A0.has(e) || m('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = GO(t), u = Ek(e);
      i.has(u) || (zE(t, e, ps, a), i.add(u));
    }
    function L0(e, t, a) {
      A0.has(e) && !t && m('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= tl), zE(a, e, i, t);
    }
    var Mm = "_reactListening" + Math.random().toString(36).slice(2);
    function jp(e) {
      if (!e[Mm]) {
        e[Mm] = !0, et.forEach(function(a) {
          a !== "selectionchange" && (A0.has(a) || L0(a, !1, e), L0(a, !0, e));
        });
        var t = e.nodeType === ni ? e : e.ownerDocument;
        t !== null && (t[Mm] || (t[Mm] = !0, L0("selectionchange", !1, t)));
      }
    }
    function zE(e, t, a, i, u) {
      var d = Yn(e, t, a), h = void 0;
      gs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (h = !0), e = e, i ? h !== void 0 ? Ef(e, t, d, h) : Qi(e, t, d) : h !== void 0 ? wp(e, t, d, h) : wu(e, t, d);
    }
    function UE(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
    }
    function z0(e, t, a, i, u) {
      var d = i;
      if (!(t & Fi) && !(t & ps)) {
        var h = u;
        if (i !== null) {
          var b = i;
          e: for (; ; ) {
            if (b === null)
              return;
            var E = b.tag;
            if (E === _ || E === N) {
              var R = b.stateNode.containerInfo;
              if (UE(R, h))
                break;
              if (E === N)
                for (var O = b.return; O !== null; ) {
                  var B = O.tag;
                  if (B === _ || B === N) {
                    var j = O.stateNode.containerInfo;
                    if (UE(j, h))
                      return;
                  }
                  O = O.return;
                }
              for (; R !== null; ) {
                var X = Gs(R);
                if (X === null)
                  return;
                var J = X.tag;
                if (J === P || J === H) {
                  b = d = X;
                  continue e;
                }
                R = R.parentNode;
              }
            }
            b = b.return;
          }
        }
      }
      Xd(function() {
        return yk(e, t, a, d);
      });
    }
    function Fp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function gk(e, t, a, i, u, d) {
      for (var h = t !== null ? t + "Capture" : null, b = i ? h : t, E = [], R = e, O = null; R !== null; ) {
        var B = R, j = B.stateNode, X = B.tag;
        if (X === P && j !== null && (O = j, b !== null)) {
          var J = rl(R, b);
          J != null && E.push(Fp(R, J, O));
        }
        if (u)
          break;
        R = R.return;
      }
      return E;
    }
    function Nm(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var d = u, h = d.stateNode, b = d.tag;
        if (b === P && h !== null) {
          var E = h, R = rl(u, a);
          R != null && i.unshift(Fp(u, R, E));
          var O = rl(u, t);
          O != null && i.push(Fp(u, O, E));
        }
        u = u.return;
      }
      return i;
    }
    function Pf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== P);
      return e || null;
    }
    function Sk(e, t) {
      for (var a = e, i = t, u = 0, d = a; d; d = Pf(d))
        u++;
      for (var h = 0, b = i; b; b = Pf(b))
        h++;
      for (; u - h > 0; )
        a = Pf(a), u--;
      for (; h - u > 0; )
        i = Pf(i), h--;
      for (var E = u; E--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Pf(a), i = Pf(i);
      }
      return null;
    }
    function PE(e, t, a, i, u) {
      for (var d = t._reactName, h = [], b = a; b !== null && b !== i; ) {
        var E = b, R = E.alternate, O = E.stateNode, B = E.tag;
        if (R !== null && R === i)
          break;
        if (B === P && O !== null) {
          var j = O;
          if (u) {
            var X = rl(b, d);
            X != null && h.unshift(Fp(b, X, j));
          } else if (!u) {
            var J = rl(b, d);
            J != null && h.push(Fp(b, J, j));
          }
        }
        b = b.return;
      }
      h.length !== 0 && e.push({
        event: t,
        listeners: h
      });
    }
    function bk(e, t, a, i, u) {
      var d = i && u ? Sk(i, u) : null;
      i !== null && PE(e, t, i, d, !1), u !== null && a !== null && PE(e, a, u, d, !0);
    }
    function Ek(e, t) {
      return e + "__bubble";
    }
    var Ba = !1, Bp = "dangerouslySetInnerHTML", Am = "suppressContentEditableWarning", Mu = "suppressHydrationWarning", $E = "autoFocus", Ws = "children", Ys = "style", Lm = "__html", U0, zm, Vp, jE, Um, FE, BE;
    U0 = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, zm = function(e, t) {
      _c(e, t), Yd(e, t), Fh(e, t, {
        registrationNameDependencies: st,
        possibleRegistrationNames: ct
      });
    }, FE = Rt && !document.documentMode, Vp = function(e, t, a) {
      if (!Ba) {
        var i = Pm(a), u = Pm(t);
        u !== i && (Ba = !0, m("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, jE = function(e) {
      if (!Ba) {
        Ba = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), m("Extra attributes from the server: %s", t);
      }
    }, Um = function(e, t) {
      t === !1 ? m("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : m("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, BE = function(e, t) {
      var a = e.namespaceURI === Pi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Ck = /\r\n?/g, Tk = /\u0000|\uFFFD/g;
    function Pm(e) {
      oa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Ck, `
`).replace(Tk, "");
    }
    function $m(e, t, a, i) {
      var u = Pm(t), d = Pm(e);
      if (d !== u && (i && (Ba || (Ba = !0, m('Text content did not match. Server: "%s" Client: "%s"', d, u))), a && ht))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function VE(e) {
      return e.nodeType === ni ? e : e.ownerDocument;
    }
    function xk() {
    }
    function jm(e) {
      e.onclick = xk;
    }
    function Rk(e, t, a, i, u) {
      for (var d in i)
        if (i.hasOwnProperty(d)) {
          var h = i[d];
          if (d === Ys)
            h && Object.freeze(h), _h(t, h);
          else if (d === Bp) {
            var b = h ? h[Lm] : void 0;
            b != null && Sh(t, b);
          } else if (d === Ws)
            if (typeof h == "string") {
              var E = e !== "textarea" || h !== "";
              E && wc(t, h);
            } else typeof h == "number" && wc(t, "" + h);
          else d === Am || d === Mu || d === $E || (st.hasOwnProperty(d) ? h != null && (typeof h != "function" && Um(d, h), d === "onScroll" && Cn("scroll", t)) : h != null && hi(t, d, h, u));
        }
    }
    function wk(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var d = t[u], h = t[u + 1];
        d === Ys ? _h(e, h) : d === Bp ? Sh(e, h) : d === Ws ? wc(e, h) : hi(e, d, h, i);
      }
    }
    function kk(e, t, a, i) {
      var u, d = VE(a), h, b = i;
      if (b === Pi && (b = xc(e)), b === Pi) {
        if (u = ji(e, t), !u && e !== e.toLowerCase() && m("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var E = d.createElement("div");
          E.innerHTML = "<script><\/script>";
          var R = E.firstChild;
          h = E.removeChild(R);
        } else if (typeof t.is == "string")
          h = d.createElement(e, {
            is: t.is
          });
        else if (h = d.createElement(e), e === "select") {
          var O = h;
          t.multiple ? O.multiple = !0 : t.size && (O.size = t.size);
        }
      } else
        h = d.createElementNS(b, e);
      return b === Pi && !u && Object.prototype.toString.call(h) === "[object HTMLUnknownElement]" && !Me.call(U0, e) && (U0[e] = !0, m("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), h;
    }
    function Ok(e, t) {
      return VE(t).createTextNode(e);
    }
    function Dk(e, t, a, i) {
      var u = ji(t, a);
      zm(t, a);
      var d;
      switch (t) {
        case "dialog":
          Cn("cancel", e), Cn("close", e), d = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Cn("load", e), d = a;
          break;
        case "video":
        case "audio":
          for (var h = 0; h < $p.length; h++)
            Cn($p[h], e);
          d = a;
          break;
        case "source":
          Cn("error", e), d = a;
          break;
        case "img":
        case "image":
        case "link":
          Cn("error", e), Cn("load", e), d = a;
          break;
        case "details":
          Cn("toggle", e), d = a;
          break;
        case "input":
          ls(e, a), d = os(e, a), Cn("invalid", e);
          break;
        case "option":
          Cc(e, a), d = a;
          break;
        case "select":
          hh(e, a), d = zd(e, a), Cn("invalid", e);
          break;
        case "textarea":
          mh(e, a), d = Pd(e, a), Cn("invalid", e);
          break;
        default:
          d = a;
      }
      switch (Oc(t, d), Rk(t, e, i, d, u), t) {
        case "input":
          Zo(e), us(e, a, !1);
          break;
        case "textarea":
          Zo(e), gh(e);
          break;
        case "option":
          Ld(e, a);
          break;
        case "select":
          qg(e, a);
          break;
        default:
          typeof d.onClick == "function" && jm(e);
          break;
      }
    }
    function _k(e, t, a, i, u) {
      zm(t, i);
      var d = null, h, b;
      switch (t) {
        case "input":
          h = os(e, a), b = os(e, i), d = [];
          break;
        case "select":
          h = zd(e, a), b = zd(e, i), d = [];
          break;
        case "textarea":
          h = Pd(e, a), b = Pd(e, i), d = [];
          break;
        default:
          h = a, b = i, typeof h.onClick != "function" && typeof b.onClick == "function" && jm(e);
          break;
      }
      Oc(t, b);
      var E, R, O = null;
      for (E in h)
        if (!(b.hasOwnProperty(E) || !h.hasOwnProperty(E) || h[E] == null))
          if (E === Ys) {
            var B = h[E];
            for (R in B)
              B.hasOwnProperty(R) && (O || (O = {}), O[R] = "");
          } else E === Bp || E === Ws || E === Am || E === Mu || E === $E || (st.hasOwnProperty(E) ? d || (d = []) : (d = d || []).push(E, null));
      for (E in b) {
        var j = b[E], X = h != null ? h[E] : void 0;
        if (!(!b.hasOwnProperty(E) || j === X || j == null && X == null))
          if (E === Ys)
            if (j && Object.freeze(j), X) {
              for (R in X)
                X.hasOwnProperty(R) && (!j || !j.hasOwnProperty(R)) && (O || (O = {}), O[R] = "");
              for (R in j)
                j.hasOwnProperty(R) && X[R] !== j[R] && (O || (O = {}), O[R] = j[R]);
            } else
              O || (d || (d = []), d.push(E, O)), O = j;
          else if (E === Bp) {
            var J = j ? j[Lm] : void 0, te = X ? X[Lm] : void 0;
            J != null && te !== J && (d = d || []).push(E, J);
          } else E === Ws ? (typeof j == "string" || typeof j == "number") && (d = d || []).push(E, "" + j) : E === Am || E === Mu || (st.hasOwnProperty(E) ? (j != null && (typeof j != "function" && Um(E, j), E === "onScroll" && Cn("scroll", e)), !d && X !== j && (d = [])) : (d = d || []).push(E, j));
      }
      return O && (fs(O, b[Ys]), (d = d || []).push(Ys, O)), d;
    }
    function Mk(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && Ad(e, u);
      var d = ji(a, i), h = ji(a, u);
      switch (wk(e, t, d, h), a) {
        case "input":
          Yl(e, u);
          break;
        case "textarea":
          yh(e, u);
          break;
        case "select":
          Kg(e, u);
          break;
      }
    }
    function Nk(e) {
      {
        var t = e.toLowerCase();
        return Dc.hasOwnProperty(t) && Dc[t] || null;
      }
    }
    function Ak(e, t, a, i, u, d, h) {
      var b, E;
      switch (b = ji(t, a), zm(t, a), t) {
        case "dialog":
          Cn("cancel", e), Cn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Cn("load", e);
          break;
        case "video":
        case "audio":
          for (var R = 0; R < $p.length; R++)
            Cn($p[R], e);
          break;
        case "source":
          Cn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Cn("error", e), Cn("load", e);
          break;
        case "details":
          Cn("toggle", e);
          break;
        case "input":
          ls(e, a), Cn("invalid", e);
          break;
        case "option":
          Cc(e, a);
          break;
        case "select":
          hh(e, a), Cn("invalid", e);
          break;
        case "textarea":
          mh(e, a), Cn("invalid", e);
          break;
      }
      Oc(t, a);
      {
        E = /* @__PURE__ */ new Set();
        for (var O = e.attributes, B = 0; B < O.length; B++) {
          var j = O[B].name.toLowerCase();
          switch (j) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              E.add(O[B].name);
          }
        }
      }
      var X = null;
      for (var J in a)
        if (a.hasOwnProperty(J)) {
          var te = a[J];
          if (J === Ws)
            typeof te == "string" ? e.textContent !== te && (a[Mu] !== !0 && $m(e.textContent, te, d, h), X = [Ws, te]) : typeof te == "number" && e.textContent !== "" + te && (a[Mu] !== !0 && $m(e.textContent, te, d, h), X = [Ws, "" + te]);
          else if (st.hasOwnProperty(J))
            te != null && (typeof te != "function" && Um(J, te), J === "onScroll" && Cn("scroll", e));
          else if (h && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof b == "boolean") {
            var Ne = void 0, at = b && Be ? null : sa(J);
            if (a[Mu] !== !0) {
              if (!(J === Am || J === Mu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              J === "value" || J === "checked" || J === "selected")) {
                if (J === Bp) {
                  var Ke = e.innerHTML, Mt = te ? te[Lm] : void 0;
                  if (Mt != null) {
                    var kt = BE(e, Mt);
                    kt !== Ke && Vp(J, Ke, kt);
                  }
                } else if (J === Ys) {
                  if (E.delete(J), FE) {
                    var Y = a0(te);
                    Ne = e.getAttribute("style"), Y !== Ne && Vp(J, Ne, Y);
                  }
                } else if (b && !Be)
                  E.delete(J.toLowerCase()), Ne = Vl(e, J, te), te !== Ne && Vp(J, Ne, te);
                else if (!_n(J, at, b) && !nn(J, te, at, b)) {
                  var ne = !1;
                  if (at !== null)
                    E.delete(at.attributeName), Ne = Qo(e, J, te, at);
                  else {
                    var G = i;
                    if (G === Pi && (G = xc(t)), G === Pi)
                      E.delete(J.toLowerCase());
                    else {
                      var ge = Nk(J);
                      ge !== null && ge !== J && (ne = !0, E.delete(ge)), E.delete(J);
                    }
                    Ne = Vl(e, J, te);
                  }
                  var Pe = Be;
                  !Pe && te !== Ne && !ne && Vp(J, Ne, te);
                }
              }
            }
          }
        }
      switch (h && // $FlowFixMe - Should be inferred as not undefined.
      E.size > 0 && a[Mu] !== !0 && jE(E), t) {
        case "input":
          Zo(e), us(e, a, !0);
          break;
        case "textarea":
          Zo(e), gh(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && jm(e);
          break;
      }
      return X;
    }
    function Lk(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function P0(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, m("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function $0(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, m('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function j0(e, t, a) {
      {
        if (Ba)
          return;
        Ba = !0, m("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function F0(e, t) {
      {
        if (t === "" || Ba)
          return;
        Ba = !0, m('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function zk(e, t, a) {
      switch (t) {
        case "input":
          fh(e, a);
          return;
        case "textarea":
          $d(e, a);
          return;
        case "select":
          Xg(e, a);
          return;
      }
    }
    var Hp = function() {
    }, Ip = function() {
    };
    {
      var Uk = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], HE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Pk = HE.concat(["button"]), $k = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], IE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Ip = function(e, t) {
        var a = Tt({}, e || IE), i = {
          tag: t
        };
        return HE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Pk.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Uk.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var jk = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return $k.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Fk = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, WE = {};
      Hp = function(e, t, a) {
        a = a || IE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && m("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = jk(e, u) ? null : i, h = d ? null : Fk(e, a), b = d || h;
        if (b) {
          var E = b.tag, R = !!d + "|" + e + "|" + E;
          if (!WE[R]) {
            WE[R] = !0;
            var O = e, B = "";
            if (e === "#text" ? /\S/.test(t) ? O = "Text nodes" : (O = "Whitespace text nodes", B = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : O = "<" + e + ">", d) {
              var j = "";
              E === "table" && e === "tr" && (j += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), m("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", O, E, B, j);
            } else
              m("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", O, E);
          }
        }
      };
    }
    var Fm = "suppressHydrationWarning", Bm = "$", Vm = "/$", Wp = "$?", Yp = "$!", Bk = "style", B0 = null, V0 = null;
    function Vk(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ni:
        case Jo: {
          t = i === ni ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Fd(null, "");
          break;
        }
        default: {
          var d = i === Un ? e.parentNode : e, h = d.namespaceURI || null;
          t = d.tagName, a = Fd(h, t);
          break;
        }
      }
      {
        var b = t.toLowerCase(), E = Ip(null, b);
        return {
          namespace: a,
          ancestorInfo: E
        };
      }
    }
    function Hk(e, t, a) {
      {
        var i = e, u = Fd(i.namespace, t), d = Ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: d
        };
      }
    }
    function bU(e) {
      return e;
    }
    function Ik(e) {
      B0 = xu(), V0 = ak();
      var t = null;
      return Zr(!1), t;
    }
    function Wk(e) {
      ik(V0), Zr(B0), B0 = null, V0 = null;
    }
    function Yk(e, t, a, i, u) {
      var d;
      {
        var h = i;
        if (Hp(e, null, h.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var b = "" + t.children, E = Ip(h.ancestorInfo, e);
          Hp(null, b, E);
        }
        d = h.namespace;
      }
      var R = kk(e, t, a, d);
      return qp(u, R), K0(R, t), R;
    }
    function Gk(e, t) {
      e.appendChild(t);
    }
    function Qk(e, t, a, i, u) {
      switch (Dk(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function qk(e, t, a, i, u, d) {
      {
        var h = d;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var b = "" + i.children, E = Ip(h.ancestorInfo, t);
          Hp(null, b, E);
        }
      }
      return _k(e, t, a, i);
    }
    function H0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Kk(e, t, a, i) {
      {
        var u = a;
        Hp(null, e, u.ancestorInfo);
      }
      var d = Ok(e, t);
      return qp(i, d), d;
    }
    function Xk() {
      var e = window.event;
      return e === void 0 ? bi : bf(e.type);
    }
    var I0 = typeof setTimeout == "function" ? setTimeout : void 0, Zk = typeof clearTimeout == "function" ? clearTimeout : void 0, W0 = -1, YE = typeof Promise == "function" ? Promise : void 0, Jk = typeof queueMicrotask == "function" ? queueMicrotask : typeof YE < "u" ? function(e) {
      return YE.resolve(null).then(e).catch(eO);
    } : I0;
    function eO(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function tO(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function nO(e, t, a, i, u, d) {
      Mk(e, t, a, i, u), K0(e, u);
    }
    function GE(e) {
      wc(e, "");
    }
    function rO(e, t, a) {
      e.nodeValue = a;
    }
    function aO(e, t) {
      e.appendChild(t);
    }
    function iO(e, t) {
      var a;
      e.nodeType === Un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && jm(a);
    }
    function oO(e, t, a) {
      e.insertBefore(t, a);
    }
    function lO(e, t, a) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function uO(e, t) {
      e.removeChild(t);
    }
    function sO(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Y0(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Un) {
          var d = u.data;
          if (d === Vm)
            if (i === 0) {
              e.removeChild(u), Rn(t);
              return;
            } else
              i--;
          else (d === Bm || d === Wp || d === Yp) && i++;
        }
        a = u;
      } while (a);
      Rn(t);
    }
    function cO(e, t) {
      e.nodeType === Un ? Y0(e.parentNode, t) : e.nodeType === Vr && Y0(e, t), Rn(e);
    }
    function fO(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function dO(e) {
      e.nodeValue = "";
    }
    function pO(e, t) {
      e = e;
      var a = t[Bk], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = kc("display", i);
    }
    function vO(e, t) {
      e.nodeValue = t;
    }
    function hO(e) {
      e.nodeType === Vr ? e.textContent = "" : e.nodeType === ni && e.documentElement && e.removeChild(e.documentElement);
    }
    function mO(e, t, a) {
      return e.nodeType !== Vr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function yO(e, t) {
      return t === "" || e.nodeType !== $i ? null : e;
    }
    function gO(e) {
      return e.nodeType !== Un ? null : e;
    }
    function QE(e) {
      return e.data === Wp;
    }
    function G0(e) {
      return e.data === Yp;
    }
    function SO(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function bO(e, t) {
      e._reactRetry = t;
    }
    function Hm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Vr || t === $i)
          break;
        if (t === Un) {
          var a = e.data;
          if (a === Bm || a === Yp || a === Wp)
            break;
          if (a === Vm)
            return null;
        }
      }
      return e;
    }
    function Gp(e) {
      return Hm(e.nextSibling);
    }
    function EO(e) {
      return Hm(e.firstChild);
    }
    function CO(e) {
      return Hm(e.firstChild);
    }
    function TO(e) {
      return Hm(e.nextSibling);
    }
    function xO(e, t, a, i, u, d, h) {
      qp(d, e), K0(e, a);
      var b;
      {
        var E = u;
        b = E.namespace;
      }
      var R = (d.mode & qe) !== Ge;
      return Ak(e, t, a, b, i, R, h);
    }
    function RO(e, t, a, i) {
      return qp(a, e), a.mode & qe, Lk(e, t);
    }
    function wO(e, t) {
      qp(t, e);
    }
    function kO(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Vm) {
            if (a === 0)
              return Gp(t);
            a--;
          } else (i === Bm || i === Yp || i === Wp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function qE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Bm || i === Yp || i === Wp) {
            if (a === 0)
              return t;
            a--;
          } else i === Vm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function OO(e) {
      Rn(e);
    }
    function DO(e) {
      Rn(e);
    }
    function _O(e) {
      return e !== "head" && e !== "body";
    }
    function MO(e, t, a, i) {
      var u = !0;
      $m(t.nodeValue, a, i, u);
    }
    function NO(e, t, a, i, u, d) {
      if (t[Fm] !== !0) {
        var h = !0;
        $m(i.nodeValue, u, d, h);
      }
    }
    function AO(e, t) {
      t.nodeType === Vr ? P0(e, t) : t.nodeType === Un || $0(e, t);
    }
    function LO(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Vr ? P0(a, t) : t.nodeType === Un || $0(a, t));
      }
    }
    function zO(e, t, a, i, u) {
      (u || t[Fm] !== !0) && (i.nodeType === Vr ? P0(a, i) : i.nodeType === Un || $0(a, i));
    }
    function UO(e, t, a) {
      j0(e, t);
    }
    function PO(e, t) {
      F0(e, t);
    }
    function $O(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && j0(i, t);
      }
    }
    function jO(e, t) {
      {
        var a = e.parentNode;
        a !== null && F0(a, t);
      }
    }
    function FO(e, t, a, i, u, d) {
      (d || t[Fm] !== !0) && j0(a, i);
    }
    function BO(e, t, a, i, u) {
      (u || t[Fm] !== !0) && F0(a, i);
    }
    function VO(e) {
      m("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function HO(e) {
      jp(e);
    }
    var $f = Math.random().toString(36).slice(2), jf = "__reactFiber$" + $f, Q0 = "__reactProps$" + $f, Qp = "__reactContainer$" + $f, q0 = "__reactEvents$" + $f, IO = "__reactListeners$" + $f, WO = "__reactHandles$" + $f;
    function YO(e) {
      delete e[jf], delete e[Q0], delete e[q0], delete e[IO], delete e[WO];
    }
    function qp(e, t) {
      t[jf] = e;
    }
    function Im(e, t) {
      t[Qp] = e;
    }
    function KE(e) {
      e[Qp] = null;
    }
    function Kp(e) {
      return !!e[Qp];
    }
    function Gs(e) {
      var t = e[jf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Qp] || a[jf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = qE(e); u !== null; ) {
              var d = u[jf];
              if (d)
                return d;
              u = qE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Nu(e) {
      var t = e[jf] || e[Qp];
      return t && (t.tag === P || t.tag === H || t.tag === V || t.tag === _) ? t : null;
    }
    function Ff(e) {
      if (e.tag === P || e.tag === H)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Wm(e) {
      return e[Q0] || null;
    }
    function K0(e, t) {
      e[Q0] = t;
    }
    function GO(e) {
      var t = e[q0];
      return t === void 0 && (t = e[q0] = /* @__PURE__ */ new Set()), t;
    }
    var XE = {}, ZE = f.ReactDebugCurrentFrame;
    function Ym(e) {
      if (e) {
        var t = e._owner, a = es(e.type, e._source, t ? t.type : null);
        ZE.setExtraStackFrame(a);
      } else
        ZE.setExtraStackFrame(null);
    }
    function Xi(e, t, a, i, u) {
      {
        var d = Function.call.bind(Me);
        for (var h in e)
          if (d(e, h)) {
            var b = void 0;
            try {
              if (typeof e[h] != "function") {
                var E = Error((i || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              b = e[h](t, h, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              b = R;
            }
            b && !(b instanceof Error) && (Ym(u), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, h, typeof b), Ym(null)), b instanceof Error && !(b.message in XE) && (XE[b.message] = !0, Ym(u), m("Failed %s type: %s", a, b.message), Ym(null));
          }
      }
    }
    var X0 = [], Gm;
    Gm = [];
    var Tl = -1;
    function Au(e) {
      return {
        current: e
      };
    }
    function Jr(e, t) {
      if (Tl < 0) {
        m("Unexpected pop.");
        return;
      }
      t !== Gm[Tl] && m("Unexpected Fiber popped."), e.current = X0[Tl], X0[Tl] = null, Gm[Tl] = null, Tl--;
    }
    function ea(e, t, a) {
      Tl++, X0[Tl] = e.current, Gm[Tl] = a, e.current = t;
    }
    var Z0;
    Z0 = {};
    var oi = {};
    Object.freeze(oi);
    var xl = Au(oi), _o = Au(!1), J0 = oi;
    function Bf(e, t, a) {
      return a && Mo(t) ? J0 : xl.current;
    }
    function JE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Vf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return oi;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var d = {};
        for (var h in i)
          d[h] = t[h];
        {
          var b = gt(e) || "Unknown";
          Xi(i, d, "context", b);
        }
        return u && JE(e, t, d), d;
      }
    }
    function Qm() {
      return _o.current;
    }
    function Mo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function qm(e) {
      Jr(_o, e), Jr(xl, e);
    }
    function eS(e) {
      Jr(_o, e), Jr(xl, e);
    }
    function eC(e, t, a) {
      {
        if (xl.current !== oi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ea(xl, t, e), ea(_o, a, e);
      }
    }
    function tC(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var d = gt(e) || "Unknown";
            Z0[d] || (Z0[d] = !0, m("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return a;
        }
        var h = i.getChildContext();
        for (var b in h)
          if (!(b in u))
            throw new Error((gt(e) || "Unknown") + '.getChildContext(): key "' + b + '" is not defined in childContextTypes.');
        {
          var E = gt(e) || "Unknown";
          Xi(u, h, "child context", E);
        }
        return Tt({}, a, h);
      }
    }
    function Km(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || oi;
        return J0 = xl.current, ea(xl, a, e), ea(_o, _o.current, e), !0;
      }
    }
    function nC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = tC(e, t, J0);
          i.__reactInternalMemoizedMergedChildContext = u, Jr(_o, e), Jr(xl, e), ea(xl, u, e), ea(_o, a, e);
        } else
          Jr(_o, e), ea(_o, a, e);
      }
    }
    function QO(e) {
      {
        if (!op(e) || e.tag !== D)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case _:
              return t.stateNode.context;
            case D: {
              var a = t.type;
              if (Mo(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lu = 0, Xm = 1, Rl = null, tS = !1, nS = !1;
    function rC(e) {
      Rl === null ? Rl = [e] : Rl.push(e);
    }
    function qO(e) {
      tS = !0, rC(e);
    }
    function aC() {
      tS && zu();
    }
    function zu() {
      if (!nS && Rl !== null) {
        nS = !0;
        var e = 0, t = Ua();
        try {
          var a = !0, i = Rl;
          for (xn(Nn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Rl = null, tS = !1;
        } catch (d) {
          throw Rl !== null && (Rl = Rl.slice(e + 1)), $c(Fc, zu), d;
        } finally {
          xn(t), nS = !1;
        }
      }
      return null;
    }
    var Hf = [], If = 0, Zm = null, Jm = 0, xi = [], Ri = 0, Qs = null, wl = 1, kl = "";
    function KO(e) {
      return Ks(), (e.flags & rp) !== rt;
    }
    function XO(e) {
      return Ks(), Jm;
    }
    function ZO() {
      var e = kl, t = wl, a = t & ~JO(t);
      return a.toString(32) + e;
    }
    function qs(e, t) {
      Ks(), Hf[If++] = Jm, Hf[If++] = Zm, Zm = e, Jm = t;
    }
    function iC(e, t, a) {
      Ks(), xi[Ri++] = wl, xi[Ri++] = kl, xi[Ri++] = Qs, Qs = e;
      var i = wl, u = kl, d = ey(i) - 1, h = i & ~(1 << d), b = a + 1, E = ey(t) + d;
      if (E > 30) {
        var R = d - d % 5, O = (1 << R) - 1, B = (h & O).toString(32), j = h >> R, X = d - R, J = ey(t) + X, te = b << X, Ne = te | j, at = B + u;
        wl = 1 << J | Ne, kl = at;
      } else {
        var Ke = b << d, Mt = Ke | h, kt = u;
        wl = 1 << E | Mt, kl = kt;
      }
    }
    function rS(e) {
      Ks();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        qs(e, a), iC(e, a, i);
      }
    }
    function ey(e) {
      return 32 - lu(e);
    }
    function JO(e) {
      return 1 << ey(e) - 1;
    }
    function aS(e) {
      for (; e === Zm; )
        Zm = Hf[--If], Hf[If] = null, Jm = Hf[--If], Hf[If] = null;
      for (; e === Qs; )
        Qs = xi[--Ri], xi[Ri] = null, kl = xi[--Ri], xi[Ri] = null, wl = xi[--Ri], xi[Ri] = null;
    }
    function eD() {
      return Ks(), Qs !== null ? {
        id: wl,
        overflow: kl
      } : null;
    }
    function tD(e, t) {
      Ks(), xi[Ri++] = wl, xi[Ri++] = kl, xi[Ri++] = Qs, wl = t.id, kl = t.overflow, Qs = e;
    }
    function Ks() {
      _r() || m("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Dr = null, wi = null, Zi = !1, Xs = !1, Uu = null;
    function nD() {
      Zi && m("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function oC() {
      Xs = !0;
    }
    function rD() {
      return Xs;
    }
    function aD(e) {
      var t = e.stateNode.containerInfo;
      return wi = CO(t), Dr = e, Zi = !0, Uu = null, Xs = !1, !0;
    }
    function iD(e, t, a) {
      return wi = TO(t), Dr = e, Zi = !0, Uu = null, Xs = !1, a !== null && tD(e, a), !0;
    }
    function lC(e, t) {
      switch (e.tag) {
        case _: {
          AO(e.stateNode.containerInfo, t);
          break;
        }
        case P: {
          var a = (e.mode & qe) !== Ge;
          zO(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case V: {
          var i = e.memoizedState;
          i.dehydrated !== null && LO(i.dehydrated, t);
          break;
        }
      }
    }
    function uC(e, t) {
      lC(e, t);
      var a = sN();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ut) : i.push(a);
    }
    function iS(e, t) {
      {
        if (Xs)
          return;
        switch (e.tag) {
          case _: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case P:
                var i = t.type;
                t.pendingProps, UO(a, i);
                break;
              case H:
                var u = t.pendingProps;
                PO(a, u);
                break;
            }
            break;
          }
          case P: {
            var d = e.type, h = e.memoizedProps, b = e.stateNode;
            switch (t.tag) {
              case P: {
                var E = t.type, R = t.pendingProps, O = (e.mode & qe) !== Ge;
                FO(
                  d,
                  h,
                  b,
                  E,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  O
                );
                break;
              }
              case H: {
                var B = t.pendingProps, j = (e.mode & qe) !== Ge;
                BO(
                  d,
                  h,
                  b,
                  B,
                  // TODO: Delete this argument when we remove the legacy root API.
                  j
                );
                break;
              }
            }
            break;
          }
          case V: {
            var X = e.memoizedState, J = X.dehydrated;
            if (J !== null) switch (t.tag) {
              case P:
                var te = t.type;
                t.pendingProps, $O(J, te);
                break;
              case H:
                var Ne = t.pendingProps;
                jO(J, Ne);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function sC(e, t) {
      t.flags = t.flags & ~_a | ln, iS(e, t);
    }
    function cC(e, t) {
      switch (e.tag) {
        case P: {
          var a = e.type;
          e.pendingProps;
          var i = mO(t, a);
          return i !== null ? (e.stateNode = i, Dr = e, wi = EO(i), !0) : !1;
        }
        case H: {
          var u = e.pendingProps, d = yO(t, u);
          return d !== null ? (e.stateNode = d, Dr = e, wi = null, !0) : !1;
        }
        case V: {
          var h = gO(t);
          if (h !== null) {
            var b = {
              dehydrated: h,
              treeContext: eD(),
              retryLane: xr
            };
            e.memoizedState = b;
            var E = cN(h);
            return E.return = e, e.child = E, Dr = e, wi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function oS(e) {
      return (e.mode & qe) !== Ge && (e.flags & pt) === rt;
    }
    function lS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function uS(e) {
      if (Zi) {
        var t = wi;
        if (!t) {
          oS(e) && (iS(Dr, e), lS()), sC(Dr, e), Zi = !1, Dr = e;
          return;
        }
        var a = t;
        if (!cC(e, t)) {
          oS(e) && (iS(Dr, e), lS()), t = Gp(a);
          var i = Dr;
          if (!t || !cC(e, t)) {
            sC(Dr, e), Zi = !1, Dr = e;
            return;
          }
          uC(i, a);
        }
      }
    }
    function oD(e, t, a) {
      var i = e.stateNode, u = !Xs, d = xO(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = d, d !== null;
    }
    function lD(e) {
      var t = e.stateNode, a = e.memoizedProps, i = RO(t, a, e);
      if (i) {
        var u = Dr;
        if (u !== null)
          switch (u.tag) {
            case _: {
              var d = u.stateNode.containerInfo, h = (u.mode & qe) !== Ge;
              MO(
                d,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                h
              );
              break;
            }
            case P: {
              var b = u.type, E = u.memoizedProps, R = u.stateNode, O = (u.mode & qe) !== Ge;
              NO(
                b,
                E,
                R,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                O
              );
              break;
            }
          }
      }
      return i;
    }
    function uD(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      wO(a, e);
    }
    function sD(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return kO(a);
    }
    function fC(e) {
      for (var t = e.return; t !== null && t.tag !== P && t.tag !== _ && t.tag !== V; )
        t = t.return;
      Dr = t;
    }
    function ty(e) {
      if (e !== Dr)
        return !1;
      if (!Zi)
        return fC(e), Zi = !0, !1;
      if (e.tag !== _ && (e.tag !== P || _O(e.type) && !H0(e.type, e.memoizedProps))) {
        var t = wi;
        if (t)
          if (oS(e))
            dC(e), lS();
          else
            for (; t; )
              uC(e, t), t = Gp(t);
      }
      return fC(e), e.tag === V ? wi = sD(e) : wi = Dr ? Gp(e.stateNode) : null, !0;
    }
    function cD() {
      return Zi && wi !== null;
    }
    function dC(e) {
      for (var t = wi; t; )
        lC(e, t), t = Gp(t);
    }
    function Wf() {
      Dr = null, wi = null, Zi = !1, Xs = !1;
    }
    function pC() {
      Uu !== null && (ox(Uu), Uu = null);
    }
    function _r() {
      return Zi;
    }
    function sS(e) {
      Uu === null ? Uu = [e] : Uu.push(e);
    }
    var fD = f.ReactCurrentBatchConfig, dD = null;
    function pD() {
      return fD.transition;
    }
    var Ji = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var vD = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & xt && (t = a), a = a.return;
        return t;
      }, Zs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Xp = [], Zp = [], Jp = [], ev = [], tv = [], nv = [], Js = /* @__PURE__ */ new Set();
      Ji.recordUnsafeLifecycleWarnings = function(e, t) {
        Js.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Xp.push(e), e.mode & xt && typeof t.UNSAFE_componentWillMount == "function" && Zp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Jp.push(e), e.mode & xt && typeof t.UNSAFE_componentWillReceiveProps == "function" && ev.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && tv.push(e), e.mode & xt && typeof t.UNSAFE_componentWillUpdate == "function" && nv.push(e));
      }, Ji.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Xp.length > 0 && (Xp.forEach(function(j) {
          e.add(gt(j) || "Component"), Js.add(j.type);
        }), Xp = []);
        var t = /* @__PURE__ */ new Set();
        Zp.length > 0 && (Zp.forEach(function(j) {
          t.add(gt(j) || "Component"), Js.add(j.type);
        }), Zp = []);
        var a = /* @__PURE__ */ new Set();
        Jp.length > 0 && (Jp.forEach(function(j) {
          a.add(gt(j) || "Component"), Js.add(j.type);
        }), Jp = []);
        var i = /* @__PURE__ */ new Set();
        ev.length > 0 && (ev.forEach(function(j) {
          i.add(gt(j) || "Component"), Js.add(j.type);
        }), ev = []);
        var u = /* @__PURE__ */ new Set();
        tv.length > 0 && (tv.forEach(function(j) {
          u.add(gt(j) || "Component"), Js.add(j.type);
        }), tv = []);
        var d = /* @__PURE__ */ new Set();
        if (nv.length > 0 && (nv.forEach(function(j) {
          d.add(gt(j) || "Component"), Js.add(j.type);
        }), nv = []), t.size > 0) {
          var h = Zs(t);
          m(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, h);
        }
        if (i.size > 0) {
          var b = Zs(i);
          m(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, b);
        }
        if (d.size > 0) {
          var E = Zs(d);
          m(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, E);
        }
        if (e.size > 0) {
          var R = Zs(e);
          S(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (a.size > 0) {
          var O = Zs(a);
          S(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
        if (u.size > 0) {
          var B = Zs(u);
          S(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, B);
        }
      };
      var ny = /* @__PURE__ */ new Map(), vC = /* @__PURE__ */ new Set();
      Ji.recordLegacyContextWarning = function(e, t) {
        var a = vD(e);
        if (a === null) {
          m("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!vC.has(e.type)) {
          var i = ny.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], ny.set(a, i)), i.push(e));
        }
      }, Ji.flushLegacyContextWarning = function() {
        ny.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              i.add(gt(d) || "Component"), vC.add(d.type);
            });
            var u = Zs(i);
            try {
              Gt(a), m(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Hn();
            }
          }
        });
      }, Ji.discardPendingWarnings = function() {
        Xp = [], Zp = [], Jp = [], ev = [], tv = [], nv = [], ny = /* @__PURE__ */ new Map();
      };
    }
    var cS, fS, dS, pS, vS, hC = function(e, t) {
    };
    cS = !1, fS = !1, dS = {}, pS = {}, vS = {}, hC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = gt(t) || "Component";
        pS[a] || (pS[a] = !0, m('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function hD(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function rv(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & xt || xe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== D) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !hD(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = gt(e) || "Component";
          dS[u] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), dS[u] = !0);
        }
        if (a._owner) {
          var d = a._owner, h;
          if (d) {
            var b = d;
            if (b.tag !== D)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            h = b.stateNode;
          }
          if (!h)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var E = h;
          Ka(i, "ref");
          var R = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === R)
            return t.ref;
          var O = function(B) {
            var j = E.refs;
            B === null ? delete j[R] : j[R] = B;
          };
          return O._stringRef = R, O;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function ry(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function ay(e) {
      {
        var t = gt(e) || "Component";
        if (vS[t])
          return;
        vS[t] = !0, m("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function mC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function yC(e) {
      function t(Y, ne) {
        if (e) {
          var G = Y.deletions;
          G === null ? (Y.deletions = [ne], Y.flags |= Ut) : G.push(ne);
        }
      }
      function a(Y, ne) {
        if (!e)
          return null;
        for (var G = ne; G !== null; )
          t(Y, G), G = G.sibling;
        return null;
      }
      function i(Y, ne) {
        for (var G = /* @__PURE__ */ new Map(), ge = ne; ge !== null; )
          ge.key !== null ? G.set(ge.key, ge) : G.set(ge.index, ge), ge = ge.sibling;
        return G;
      }
      function u(Y, ne) {
        var G = uc(Y, ne);
        return G.index = 0, G.sibling = null, G;
      }
      function d(Y, ne, G) {
        if (Y.index = G, !e)
          return Y.flags |= rp, ne;
        var ge = Y.alternate;
        if (ge !== null) {
          var Pe = ge.index;
          return Pe < ne ? (Y.flags |= ln, ne) : Pe;
        } else
          return Y.flags |= ln, ne;
      }
      function h(Y) {
        return e && Y.alternate === null && (Y.flags |= ln), Y;
      }
      function b(Y, ne, G, ge) {
        if (ne === null || ne.tag !== H) {
          var Pe = s1(G, Y.mode, ge);
          return Pe.return = Y, Pe;
        } else {
          var Le = u(ne, G);
          return Le.return = Y, Le;
        }
      }
      function E(Y, ne, G, ge) {
        var Pe = G.type;
        if (Pe === Za)
          return O(Y, ne, G.props.children, ge, G.key);
        if (ne !== null && (ne.elementType === Pe || // Keep this check inline so it only runs on the false path:
        Cx(ne, G) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Pe == "object" && Pe !== null && Pe.$$typeof === ft && mC(Pe) === ne.type)) {
          var Le = u(ne, G.props);
          return Le.ref = rv(Y, ne, G), Le.return = Y, Le._debugSource = G._source, Le._debugOwner = G._owner, Le;
        }
        var dt = u1(G, Y.mode, ge);
        return dt.ref = rv(Y, ne, G), dt.return = Y, dt;
      }
      function R(Y, ne, G, ge) {
        if (ne === null || ne.tag !== N || ne.stateNode.containerInfo !== G.containerInfo || ne.stateNode.implementation !== G.implementation) {
          var Pe = c1(G, Y.mode, ge);
          return Pe.return = Y, Pe;
        } else {
          var Le = u(ne, G.children || []);
          return Le.return = Y, Le;
        }
      }
      function O(Y, ne, G, ge, Pe) {
        if (ne === null || ne.tag !== $) {
          var Le = Gu(G, Y.mode, ge, Pe);
          return Le.return = Y, Le;
        } else {
          var dt = u(ne, G);
          return dt.return = Y, dt;
        }
      }
      function B(Y, ne, G) {
        if (typeof ne == "string" && ne !== "" || typeof ne == "number") {
          var ge = s1("" + ne, Y.mode, G);
          return ge.return = Y, ge;
        }
        if (typeof ne == "object" && ne !== null) {
          switch (ne.$$typeof) {
            case zi: {
              var Pe = u1(ne, Y.mode, G);
              return Pe.ref = rv(Y, null, ne), Pe.return = Y, Pe;
            }
            case ca: {
              var Le = c1(ne, Y.mode, G);
              return Le.return = Y, Le;
            }
            case ft: {
              var dt = ne._payload, yt = ne._init;
              return B(Y, yt(dt), G);
            }
          }
          if (Jn(ne) || fa(ne)) {
            var qt = Gu(ne, Y.mode, G, null);
            return qt.return = Y, qt;
          }
          ry(Y, ne);
        }
        return typeof ne == "function" && ay(Y), null;
      }
      function j(Y, ne, G, ge) {
        var Pe = ne !== null ? ne.key : null;
        if (typeof G == "string" && G !== "" || typeof G == "number")
          return Pe !== null ? null : b(Y, ne, "" + G, ge);
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case zi:
              return G.key === Pe ? E(Y, ne, G, ge) : null;
            case ca:
              return G.key === Pe ? R(Y, ne, G, ge) : null;
            case ft: {
              var Le = G._payload, dt = G._init;
              return j(Y, ne, dt(Le), ge);
            }
          }
          if (Jn(G) || fa(G))
            return Pe !== null ? null : O(Y, ne, G, ge, null);
          ry(Y, G);
        }
        return typeof G == "function" && ay(Y), null;
      }
      function X(Y, ne, G, ge, Pe) {
        if (typeof ge == "string" && ge !== "" || typeof ge == "number") {
          var Le = Y.get(G) || null;
          return b(ne, Le, "" + ge, Pe);
        }
        if (typeof ge == "object" && ge !== null) {
          switch (ge.$$typeof) {
            case zi: {
              var dt = Y.get(ge.key === null ? G : ge.key) || null;
              return E(ne, dt, ge, Pe);
            }
            case ca: {
              var yt = Y.get(ge.key === null ? G : ge.key) || null;
              return R(ne, yt, ge, Pe);
            }
            case ft:
              var qt = ge._payload, Lt = ge._init;
              return X(Y, ne, G, Lt(qt), Pe);
          }
          if (Jn(ge) || fa(ge)) {
            var qn = Y.get(G) || null;
            return O(ne, qn, ge, Pe, null);
          }
          ry(ne, ge);
        }
        return typeof ge == "function" && ay(ne), null;
      }
      function J(Y, ne, G) {
        {
          if (typeof Y != "object" || Y === null)
            return ne;
          switch (Y.$$typeof) {
            case zi:
            case ca:
              hC(Y, G);
              var ge = Y.key;
              if (typeof ge != "string")
                break;
              if (ne === null) {
                ne = /* @__PURE__ */ new Set(), ne.add(ge);
                break;
              }
              if (!ne.has(ge)) {
                ne.add(ge);
                break;
              }
              m("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ge);
              break;
            case ft:
              var Pe = Y._payload, Le = Y._init;
              J(Le(Pe), ne, G);
              break;
          }
        }
        return ne;
      }
      function te(Y, ne, G, ge) {
        for (var Pe = null, Le = 0; Le < G.length; Le++) {
          var dt = G[Le];
          Pe = J(dt, Pe, Y);
        }
        for (var yt = null, qt = null, Lt = ne, qn = 0, zt = 0, jn = null; Lt !== null && zt < G.length; zt++) {
          Lt.index > zt ? (jn = Lt, Lt = null) : jn = Lt.sibling;
          var na = j(Y, Lt, G[zt], ge);
          if (na === null) {
            Lt === null && (Lt = jn);
            break;
          }
          e && Lt && na.alternate === null && t(Y, Lt), qn = d(na, qn, zt), qt === null ? yt = na : qt.sibling = na, qt = na, Lt = jn;
        }
        if (zt === G.length) {
          if (a(Y, Lt), _r()) {
            var Pr = zt;
            qs(Y, Pr);
          }
          return yt;
        }
        if (Lt === null) {
          for (; zt < G.length; zt++) {
            var ui = B(Y, G[zt], ge);
            ui !== null && (qn = d(ui, qn, zt), qt === null ? yt = ui : qt.sibling = ui, qt = ui);
          }
          if (_r()) {
            var Ca = zt;
            qs(Y, Ca);
          }
          return yt;
        }
        for (var Ta = i(Y, Lt); zt < G.length; zt++) {
          var ra = X(Ta, Y, zt, G[zt], ge);
          ra !== null && (e && ra.alternate !== null && Ta.delete(ra.key === null ? zt : ra.key), qn = d(ra, qn, zt), qt === null ? yt = ra : qt.sibling = ra, qt = ra);
        }
        if (e && Ta.forEach(function(cd) {
          return t(Y, cd);
        }), _r()) {
          var Ll = zt;
          qs(Y, Ll);
        }
        return yt;
      }
      function Ne(Y, ne, G, ge) {
        var Pe = fa(G);
        if (typeof Pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          G[Symbol.toStringTag] === "Generator" && (fS || m("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), fS = !0), G.entries === Pe && (cS || m("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), cS = !0);
          var Le = Pe.call(G);
          if (Le)
            for (var dt = null, yt = Le.next(); !yt.done; yt = Le.next()) {
              var qt = yt.value;
              dt = J(qt, dt, Y);
            }
        }
        var Lt = Pe.call(G);
        if (Lt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var qn = null, zt = null, jn = ne, na = 0, Pr = 0, ui = null, Ca = Lt.next(); jn !== null && !Ca.done; Pr++, Ca = Lt.next()) {
          jn.index > Pr ? (ui = jn, jn = null) : ui = jn.sibling;
          var Ta = j(Y, jn, Ca.value, ge);
          if (Ta === null) {
            jn === null && (jn = ui);
            break;
          }
          e && jn && Ta.alternate === null && t(Y, jn), na = d(Ta, na, Pr), zt === null ? qn = Ta : zt.sibling = Ta, zt = Ta, jn = ui;
        }
        if (Ca.done) {
          if (a(Y, jn), _r()) {
            var ra = Pr;
            qs(Y, ra);
          }
          return qn;
        }
        if (jn === null) {
          for (; !Ca.done; Pr++, Ca = Lt.next()) {
            var Ll = B(Y, Ca.value, ge);
            Ll !== null && (na = d(Ll, na, Pr), zt === null ? qn = Ll : zt.sibling = Ll, zt = Ll);
          }
          if (_r()) {
            var cd = Pr;
            qs(Y, cd);
          }
          return qn;
        }
        for (var zv = i(Y, jn); !Ca.done; Pr++, Ca = Lt.next()) {
          var jo = X(zv, Y, Pr, Ca.value, ge);
          jo !== null && (e && jo.alternate !== null && zv.delete(jo.key === null ? Pr : jo.key), na = d(jo, na, Pr), zt === null ? qn = jo : zt.sibling = jo, zt = jo);
        }
        if (e && zv.forEach(function(BN) {
          return t(Y, BN);
        }), _r()) {
          var FN = Pr;
          qs(Y, FN);
        }
        return qn;
      }
      function at(Y, ne, G, ge) {
        if (ne !== null && ne.tag === H) {
          a(Y, ne.sibling);
          var Pe = u(ne, G);
          return Pe.return = Y, Pe;
        }
        a(Y, ne);
        var Le = s1(G, Y.mode, ge);
        return Le.return = Y, Le;
      }
      function Ke(Y, ne, G, ge) {
        for (var Pe = G.key, Le = ne; Le !== null; ) {
          if (Le.key === Pe) {
            var dt = G.type;
            if (dt === Za) {
              if (Le.tag === $) {
                a(Y, Le.sibling);
                var yt = u(Le, G.props.children);
                return yt.return = Y, yt._debugSource = G._source, yt._debugOwner = G._owner, yt;
              }
            } else if (Le.elementType === dt || // Keep this check inline so it only runs on the false path:
            Cx(Le, G) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof dt == "object" && dt !== null && dt.$$typeof === ft && mC(dt) === Le.type) {
              a(Y, Le.sibling);
              var qt = u(Le, G.props);
              return qt.ref = rv(Y, Le, G), qt.return = Y, qt._debugSource = G._source, qt._debugOwner = G._owner, qt;
            }
            a(Y, Le);
            break;
          } else
            t(Y, Le);
          Le = Le.sibling;
        }
        if (G.type === Za) {
          var Lt = Gu(G.props.children, Y.mode, ge, G.key);
          return Lt.return = Y, Lt;
        } else {
          var qn = u1(G, Y.mode, ge);
          return qn.ref = rv(Y, ne, G), qn.return = Y, qn;
        }
      }
      function Mt(Y, ne, G, ge) {
        for (var Pe = G.key, Le = ne; Le !== null; ) {
          if (Le.key === Pe)
            if (Le.tag === N && Le.stateNode.containerInfo === G.containerInfo && Le.stateNode.implementation === G.implementation) {
              a(Y, Le.sibling);
              var dt = u(Le, G.children || []);
              return dt.return = Y, dt;
            } else {
              a(Y, Le);
              break;
            }
          else
            t(Y, Le);
          Le = Le.sibling;
        }
        var yt = c1(G, Y.mode, ge);
        return yt.return = Y, yt;
      }
      function kt(Y, ne, G, ge) {
        var Pe = typeof G == "object" && G !== null && G.type === Za && G.key === null;
        if (Pe && (G = G.props.children), typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case zi:
              return h(Ke(Y, ne, G, ge));
            case ca:
              return h(Mt(Y, ne, G, ge));
            case ft:
              var Le = G._payload, dt = G._init;
              return kt(Y, ne, dt(Le), ge);
          }
          if (Jn(G))
            return te(Y, ne, G, ge);
          if (fa(G))
            return Ne(Y, ne, G, ge);
          ry(Y, G);
        }
        return typeof G == "string" && G !== "" || typeof G == "number" ? h(at(Y, ne, "" + G, ge)) : (typeof G == "function" && ay(Y), a(Y, ne));
      }
      return kt;
    }
    var Yf = yC(!0), gC = yC(!1);
    function mD(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = uc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = uc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function yD(e, t) {
      for (var a = e.child; a !== null; )
        aN(a, t), a = a.sibling;
    }
    var hS = Au(null), mS;
    mS = {};
    var iy = null, Gf = null, yS = null, oy = !1;
    function ly() {
      iy = null, Gf = null, yS = null, oy = !1;
    }
    function SC() {
      oy = !0;
    }
    function bC() {
      oy = !1;
    }
    function EC(e, t, a) {
      ea(hS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== mS && m("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = mS;
    }
    function gS(e, t) {
      var a = hS.current;
      Jr(hS, t), e._currentValue = a;
    }
    function SS(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (hl(i.childLanes, t) ? u !== null && !hl(u.childLanes, t) && (u.childLanes = St(u.childLanes, t)) : (i.childLanes = St(i.childLanes, t), u !== null && (u.childLanes = St(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && m("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function gD(e, t, a) {
      SD(e, t, a);
    }
    function SD(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, d = i.dependencies;
        if (d !== null) {
          u = i.child;
          for (var h = d.firstContext; h !== null; ) {
            if (h.context === t) {
              if (i.tag === D) {
                var b = vu(a), E = Ol(an, b);
                E.tag = sy;
                var R = i.updateQueue;
                if (R !== null) {
                  var O = R.shared, B = O.pending;
                  B === null ? E.next = E : (E.next = B.next, B.next = E), O.pending = E;
                }
              }
              i.lanes = St(i.lanes, a);
              var j = i.alternate;
              j !== null && (j.lanes = St(j.lanes, a)), SS(i.return, a, e), d.lanes = St(d.lanes, a);
              break;
            }
            h = h.next;
          }
        } else if (i.tag === ue)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === k) {
          var X = i.return;
          if (X === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          X.lanes = St(X.lanes, a);
          var J = X.alternate;
          J !== null && (J.lanes = St(J.lanes, a)), SS(X, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var te = u.sibling;
            if (te !== null) {
              te.return = u.return, u = te;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Qf(e, t) {
      iy = e, Gf = null, yS = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Xr(a.lanes, t) && gv(), a.firstContext = null);
      }
    }
    function ir(e) {
      oy && m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (yS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Gf === null) {
          if (iy === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Gf = a, iy.dependencies = {
            lanes: fe,
            firstContext: a
          };
        } else
          Gf = Gf.next = a;
      }
      return t;
    }
    var ec = null;
    function bS(e) {
      ec === null ? ec = [e] : ec.push(e);
    }
    function bD() {
      if (ec !== null) {
        for (var e = 0; e < ec.length; e++) {
          var t = ec[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var d = u.next;
              u.next = i, a.next = d;
            }
            t.pending = a;
          }
        }
        ec = null;
      }
    }
    function CC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, bS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, uy(e, i);
    }
    function ED(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, bS(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function CD(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, bS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, uy(e, i);
    }
    function Va(e, t) {
      return uy(e, t);
    }
    var TD = uy;
    function uy(e, t) {
      e.lanes = St(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = St(a.lanes, t)), a === null && (e.flags & (ln | _a)) !== rt && gx(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = St(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = St(a.childLanes, t) : (u.flags & (ln | _a)) !== rt && gx(e), i = u, u = u.return;
      if (i.tag === _) {
        var d = i.stateNode;
        return d;
      } else
        return null;
    }
    var TC = 0, xC = 1, sy = 2, ES = 3, cy = !1, CS, fy;
    CS = !1, fy = null;
    function TS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: fe
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function RC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Ol(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: TC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Pu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (fy === u && !CS && (m("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), CS = !0), EM()) {
        var d = u.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), u.pending = t, TD(e, a);
      } else
        return CD(e, u, t, a);
    }
    function dy(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (gp(a)) {
          var d = u.lanes;
          d = ff(d, e.pendingLanes);
          var h = St(d, a);
          u.lanes = h, Sp(e, h);
        }
      }
    }
    function xS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var d = null, h = null, b = a.firstBaseUpdate;
          if (b !== null) {
            var E = b;
            do {
              var R = {
                eventTime: E.eventTime,
                lane: E.lane,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null
              };
              h === null ? d = h = R : (h.next = R, h = R), E = E.next;
            } while (E !== null);
            h === null ? d = h = t : (h.next = t, h = t);
          } else
            d = h = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: d,
            lastBaseUpdate: h,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var O = a.lastBaseUpdate;
      O === null ? a.firstBaseUpdate = t : O.next = t, a.lastBaseUpdate = t;
    }
    function xD(e, t, a, i, u, d) {
      switch (a.tag) {
        case xC: {
          var h = a.payload;
          if (typeof h == "function") {
            SC();
            var b = h.call(d, i, u);
            {
              if (e.mode & xt) {
                Pn(!0);
                try {
                  h.call(d, i, u);
                } finally {
                  Pn(!1);
                }
              }
              bC();
            }
            return b;
          }
          return h;
        }
        case ES:
          e.flags = e.flags & ~tr | pt;
        case TC: {
          var E = a.payload, R;
          if (typeof E == "function") {
            SC(), R = E.call(d, i, u);
            {
              if (e.mode & xt) {
                Pn(!0);
                try {
                  E.call(d, i, u);
                } finally {
                  Pn(!1);
                }
              }
              bC();
            }
          } else
            R = E;
          return R == null ? i : Tt({}, i, R);
        }
        case sy:
          return cy = !0, i;
      }
      return i;
    }
    function py(e, t, a, i) {
      var u = e.updateQueue;
      cy = !1, fy = u.shared;
      var d = u.firstBaseUpdate, h = u.lastBaseUpdate, b = u.shared.pending;
      if (b !== null) {
        u.shared.pending = null;
        var E = b, R = E.next;
        E.next = null, h === null ? d = R : h.next = R, h = E;
        var O = e.alternate;
        if (O !== null) {
          var B = O.updateQueue, j = B.lastBaseUpdate;
          j !== h && (j === null ? B.firstBaseUpdate = R : j.next = R, B.lastBaseUpdate = E);
        }
      }
      if (d !== null) {
        var X = u.baseState, J = fe, te = null, Ne = null, at = null, Ke = d;
        do {
          var Mt = Ke.lane, kt = Ke.eventTime;
          if (hl(i, Mt)) {
            if (at !== null) {
              var ne = {
                eventTime: kt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: $n,
                tag: Ke.tag,
                payload: Ke.payload,
                callback: Ke.callback,
                next: null
              };
              at = at.next = ne;
            }
            X = xD(e, u, Ke, X, t, a);
            var G = Ke.callback;
            if (G !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ke.lane !== $n) {
              e.flags |= gi;
              var ge = u.effects;
              ge === null ? u.effects = [Ke] : ge.push(Ke);
            }
          } else {
            var Y = {
              eventTime: kt,
              lane: Mt,
              tag: Ke.tag,
              payload: Ke.payload,
              callback: Ke.callback,
              next: null
            };
            at === null ? (Ne = at = Y, te = X) : at = at.next = Y, J = St(J, Mt);
          }
          if (Ke = Ke.next, Ke === null) {
            if (b = u.shared.pending, b === null)
              break;
            var Pe = b, Le = Pe.next;
            Pe.next = null, Ke = Le, u.lastBaseUpdate = Pe, u.shared.pending = null;
          }
        } while (!0);
        at === null && (te = X), u.baseState = te, u.firstBaseUpdate = Ne, u.lastBaseUpdate = at;
        var dt = u.shared.interleaved;
        if (dt !== null) {
          var yt = dt;
          do
            J = St(J, yt.lane), yt = yt.next;
          while (yt !== dt);
        } else d === null && (u.shared.lanes = fe);
        _v(J), e.lanes = J, e.memoizedState = X;
      }
      fy = null;
    }
    function RD(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function wC() {
      cy = !1;
    }
    function vy() {
      return cy;
    }
    function kC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var d = i[u], h = d.callback;
          h !== null && (d.callback = null, RD(h, a));
        }
    }
    var av = {}, $u = Au(av), iv = Au(av), hy = Au(av);
    function my(e) {
      if (e === av)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function OC() {
      var e = my(hy.current);
      return e;
    }
    function RS(e, t) {
      ea(hy, t, e), ea(iv, e, e), ea($u, av, e);
      var a = Vk(t);
      Jr($u, e), ea($u, a, e);
    }
    function qf(e) {
      Jr($u, e), Jr(iv, e), Jr(hy, e);
    }
    function wS() {
      var e = my($u.current);
      return e;
    }
    function DC(e) {
      my(hy.current);
      var t = my($u.current), a = Hk(t, e.type);
      t !== a && (ea(iv, e, e), ea($u, a, e));
    }
    function kS(e) {
      iv.current === e && (Jr($u, e), Jr(iv, e));
    }
    var wD = 0, _C = 1, MC = 1, ov = 2, eo = Au(wD);
    function OS(e, t) {
      return (e & t) !== 0;
    }
    function Kf(e) {
      return e & _C;
    }
    function DS(e, t) {
      return e & _C | t;
    }
    function kD(e, t) {
      return e | t;
    }
    function ju(e, t) {
      ea(eo, t, e);
    }
    function Xf(e) {
      Jr(eo, e);
    }
    function OD(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function yy(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === V) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || QE(i) || G0(i))
              return t;
          }
        } else if (t.tag === oe && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & pt) !== rt;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ha = (
      /*   */
      0
    ), dr = (
      /* */
      1
    ), No = (
      /*  */
      2
    ), pr = (
      /*    */
      4
    ), Mr = (
      /*   */
      8
    ), _S = [];
    function MS() {
      for (var e = 0; e < _S.length; e++) {
        var t = _S[e];
        t._workInProgressVersionPrimary = null;
      }
      _S.length = 0;
    }
    function DD(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ue = f.ReactCurrentDispatcher, lv = f.ReactCurrentBatchConfig, NS, Zf;
    NS = /* @__PURE__ */ new Set();
    var tc = fe, Qt = null, vr = null, hr = null, gy = !1, uv = !1, sv = 0, _D = 0, MD = 25, ie = null, ki = null, Fu = -1, AS = !1;
    function Ft() {
      {
        var e = ie;
        ki === null ? ki = [e] : ki.push(e);
      }
    }
    function ke() {
      {
        var e = ie;
        ki !== null && (Fu++, ki[Fu] !== e && ND(e));
      }
    }
    function Jf(e) {
      e != null && !Jn(e) && m("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ie, typeof e);
    }
    function ND(e) {
      {
        var t = gt(Qt);
        if (!NS.has(t) && (NS.add(t), ki !== null)) {
          for (var a = "", i = 30, u = 0; u <= Fu; u++) {
            for (var d = ki[u], h = u === Fu ? e : d, b = u + 1 + ". " + d; b.length < i; )
              b += " ";
            b += h + `
`, a += b;
          }
          m(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ta() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function LS(e, t) {
      if (AS)
        return !1;
      if (t === null)
        return m("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ie), !1;
      e.length !== t.length && m(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ie, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ie(e[a], t[a]))
          return !1;
      return !0;
    }
    function ed(e, t, a, i, u, d) {
      tc = d, Qt = t, ki = e !== null ? e._debugHookTypes : null, Fu = -1, AS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = fe, e !== null && e.memoizedState !== null ? Ue.current = JC : ki !== null ? Ue.current = ZC : Ue.current = XC;
      var h = a(i, u);
      if (uv) {
        var b = 0;
        do {
          if (uv = !1, sv = 0, b >= MD)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          b += 1, AS = !1, vr = null, hr = null, t.updateQueue = null, Fu = -1, Ue.current = eT, h = a(i, u);
        } while (uv);
      }
      Ue.current = My, t._debugHookTypes = ki;
      var E = vr !== null && vr.next !== null;
      if (tc = fe, Qt = null, vr = null, hr = null, ie = null, ki = null, Fu = -1, e !== null && (e.flags & sr) !== (t.flags & sr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & qe) !== Ge && m("Internal React error: Expected static flag was missing. Please notify the React team."), gy = !1, E)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return h;
    }
    function td() {
      var e = sv !== 0;
      return sv = 0, e;
    }
    function NC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ya) !== Ge ? t.flags &= ~(ol | Wr | hn | bt) : t.flags &= ~(hn | bt), e.lanes = Ns(e.lanes, a);
    }
    function AC() {
      if (Ue.current = My, gy) {
        for (var e = Qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        gy = !1;
      }
      tc = fe, Qt = null, vr = null, hr = null, ki = null, Fu = -1, ie = null, YC = !1, uv = !1, sv = 0;
    }
    function Ao() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return hr === null ? Qt.memoizedState = hr = e : hr = hr.next = e, hr;
    }
    function Oi() {
      var e;
      if (vr === null) {
        var t = Qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = vr.next;
      var a;
      if (hr === null ? a = Qt.memoizedState : a = hr.next, a !== null)
        hr = a, a = hr.next, vr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        vr = e;
        var i = {
          memoizedState: vr.memoizedState,
          baseState: vr.baseState,
          baseQueue: vr.baseQueue,
          queue: vr.queue,
          next: null
        };
        hr === null ? Qt.memoizedState = hr = i : hr = hr.next = i;
      }
      return hr;
    }
    function LC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function zS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function US(e, t, a) {
      var i = Ao(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var d = {
        pending: null,
        interleaved: null,
        lanes: fe,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = d;
      var h = d.dispatch = UD.bind(null, Qt, d);
      return [i.memoizedState, h];
    }
    function PS(e, t, a) {
      var i = Oi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = vr, h = d.baseQueue, b = u.pending;
      if (b !== null) {
        if (h !== null) {
          var E = h.next, R = b.next;
          h.next = R, b.next = E;
        }
        d.baseQueue !== h && m("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = h = b, u.pending = null;
      }
      if (h !== null) {
        var O = h.next, B = d.baseState, j = null, X = null, J = null, te = O;
        do {
          var Ne = te.lane;
          if (hl(tc, Ne)) {
            if (J !== null) {
              var Ke = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: $n,
                action: te.action,
                hasEagerState: te.hasEagerState,
                eagerState: te.eagerState,
                next: null
              };
              J = J.next = Ke;
            }
            if (te.hasEagerState)
              B = te.eagerState;
            else {
              var Mt = te.action;
              B = e(B, Mt);
            }
          } else {
            var at = {
              lane: Ne,
              action: te.action,
              hasEagerState: te.hasEagerState,
              eagerState: te.eagerState,
              next: null
            };
            J === null ? (X = J = at, j = B) : J = J.next = at, Qt.lanes = St(Qt.lanes, Ne), _v(Ne);
          }
          te = te.next;
        } while (te !== null && te !== O);
        J === null ? j = B : J.next = X, Ie(B, i.memoizedState) || gv(), i.memoizedState = B, i.baseState = j, i.baseQueue = J, u.lastRenderedState = B;
      }
      var kt = u.interleaved;
      if (kt !== null) {
        var Y = kt;
        do {
          var ne = Y.lane;
          Qt.lanes = St(Qt.lanes, ne), _v(ne), Y = Y.next;
        } while (Y !== kt);
      } else h === null && (u.lanes = fe);
      var G = u.dispatch;
      return [i.memoizedState, G];
    }
    function $S(e, t, a) {
      var i = Oi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = u.dispatch, h = u.pending, b = i.memoizedState;
      if (h !== null) {
        u.pending = null;
        var E = h.next, R = E;
        do {
          var O = R.action;
          b = e(b, O), R = R.next;
        } while (R !== E);
        Ie(b, i.memoizedState) || gv(), i.memoizedState = b, i.baseQueue === null && (i.baseState = b), u.lastRenderedState = b;
      }
      return [b, d];
    }
    function EU(e, t, a) {
    }
    function CU(e, t, a) {
    }
    function jS(e, t, a) {
      var i = Qt, u = Ao(), d, h = _r();
      if (h) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = a(), Zf || d !== a() && (m("The result of getServerSnapshot should be cached to avoid an infinite loop"), Zf = !0);
      } else {
        if (d = t(), !Zf) {
          var b = t();
          Ie(d, b) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Zf = !0);
        }
        var E = Ky();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ms(E, tc) || zC(i, t, d);
      }
      u.memoizedState = d;
      var R = {
        value: d,
        getSnapshot: t
      };
      return u.queue = R, Ty(PC.bind(null, i, R, e), [e]), i.flags |= hn, cv(dr | Mr, UC.bind(null, i, R, d, t), void 0, null), d;
    }
    function Sy(e, t, a) {
      var i = Qt, u = Oi(), d = t();
      if (!Zf) {
        var h = t();
        Ie(d, h) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Zf = !0);
      }
      var b = u.memoizedState, E = !Ie(b, d);
      E && (u.memoizedState = d, gv());
      var R = u.queue;
      if (dv(PC.bind(null, i, R, e), [e]), R.getSnapshot !== t || E || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      hr !== null && hr.memoizedState.tag & dr) {
        i.flags |= hn, cv(dr | Mr, UC.bind(null, i, R, d, t), void 0, null);
        var O = Ky();
        if (O === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ms(O, tc) || zC(i, t, d);
      }
      return d;
    }
    function zC(e, t, a) {
      e.flags |= Es;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Qt.updateQueue;
      if (u === null)
        u = LC(), Qt.updateQueue = u, u.stores = [i];
      else {
        var d = u.stores;
        d === null ? u.stores = [i] : d.push(i);
      }
    }
    function UC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, $C(t) && jC(e);
    }
    function PC(e, t, a) {
      var i = function() {
        $C(t) && jC(e);
      };
      return a(i);
    }
    function $C(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ie(a, i);
      } catch {
        return !0;
      }
    }
    function jC(e) {
      var t = Va(e, Ze);
      t !== null && Sr(t, e, Ze, an);
    }
    function by(e) {
      var t = Ao();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: fe,
        dispatch: null,
        lastRenderedReducer: zS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = PD.bind(null, Qt, a);
      return [t.memoizedState, i];
    }
    function FS(e) {
      return PS(zS);
    }
    function BS(e) {
      return $S(zS);
    }
    function cv(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, d = Qt.updateQueue;
      if (d === null)
        d = LC(), Qt.updateQueue = d, d.lastEffect = u.next = u;
      else {
        var h = d.lastEffect;
        if (h === null)
          d.lastEffect = u.next = u;
        else {
          var b = h.next;
          h.next = u, u.next = b, d.lastEffect = u;
        }
      }
      return u;
    }
    function VS(e) {
      var t = Ao();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Ey(e) {
      var t = Oi();
      return t.memoizedState;
    }
    function fv(e, t, a, i) {
      var u = Ao(), d = i === void 0 ? null : i;
      Qt.flags |= e, u.memoizedState = cv(dr | t, a, void 0, d);
    }
    function Cy(e, t, a, i) {
      var u = Oi(), d = i === void 0 ? null : i, h = void 0;
      if (vr !== null) {
        var b = vr.memoizedState;
        if (h = b.destroy, d !== null) {
          var E = b.deps;
          if (LS(d, E)) {
            u.memoizedState = cv(t, a, h, d);
            return;
          }
        }
      }
      Qt.flags |= e, u.memoizedState = cv(dr | t, a, h, d);
    }
    function Ty(e, t) {
      return (Qt.mode & ya) !== Ge ? fv(ol | hn | bo, Mr, e, t) : fv(hn | bo, Mr, e, t);
    }
    function dv(e, t) {
      return Cy(hn, Mr, e, t);
    }
    function HS(e, t) {
      return fv(bt, No, e, t);
    }
    function xy(e, t) {
      return Cy(bt, No, e, t);
    }
    function IS(e, t) {
      var a = bt;
      return a |= Ir, (Qt.mode & ya) !== Ge && (a |= Wr), fv(a, pr, e, t);
    }
    function Ry(e, t) {
      return Cy(bt, pr, e, t);
    }
    function FC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || m("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var d = e();
        return u.current = d, function() {
          u.current = null;
        };
      }
    }
    function WS(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = bt;
      return u |= Ir, (Qt.mode & ya) !== Ge && (u |= Wr), fv(u, pr, FC.bind(null, t, e), i);
    }
    function wy(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Cy(bt, pr, FC.bind(null, t, e), i);
    }
    function AD(e, t) {
    }
    var ky = AD;
    function YS(e, t) {
      var a = Ao(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Oy(e, t) {
      var a = Oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var d = u[1];
        if (LS(i, d))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function GS(e, t) {
      var a = Ao(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Dy(e, t) {
      var a = Oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var d = u[1];
        if (LS(i, d))
          return u[0];
      }
      var h = e();
      return a.memoizedState = [h, i], h;
    }
    function QS(e) {
      var t = Ao();
      return t.memoizedState = e, e;
    }
    function BC(e) {
      var t = Oi(), a = vr, i = a.memoizedState;
      return HC(t, i, e);
    }
    function VC(e) {
      var t = Oi();
      if (vr === null)
        return t.memoizedState = e, e;
      var a = vr.memoizedState;
      return HC(t, a, e);
    }
    function HC(e, t, a) {
      var i = !im(tc);
      if (i) {
        if (!Ie(a, t)) {
          var u = um();
          Qt.lanes = St(Qt.lanes, u), _v(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, gv()), e.memoizedState = a, a;
    }
    function LD(e, t, a) {
      var i = Ua();
      xn(v0(i, Gi)), e(!0);
      var u = lv.transition;
      lv.transition = {};
      var d = lv.transition;
      lv.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (xn(i), lv.transition = u, u === null && d._updatedFibers) {
          var h = d._updatedFibers.size;
          h > 10 && S("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function qS() {
      var e = by(!1), t = e[0], a = e[1], i = LD.bind(null, a), u = Ao();
      return u.memoizedState = i, [t, i];
    }
    function IC() {
      var e = FS(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    function WC() {
      var e = BS(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    var YC = !1;
    function zD() {
      return YC;
    }
    function KS() {
      var e = Ao(), t = Ky(), a = t.identifierPrefix, i;
      if (_r()) {
        var u = ZO();
        i = ":" + a + "R" + u;
        var d = sv++;
        d > 0 && (i += "H" + d.toString(32)), i += ":";
      } else {
        var h = _D++;
        i = ":" + a + "r" + h.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function _y() {
      var e = Oi(), t = e.memoizedState;
      return t;
    }
    function UD(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Wu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GC(e))
        QC(t, u);
      else {
        var d = CC(e, t, u, i);
        if (d !== null) {
          var h = Ea();
          Sr(d, e, i, h), qC(d, t, i);
        }
      }
      KC(e, i);
    }
    function PD(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Wu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GC(e))
        QC(t, u);
      else {
        var d = e.alternate;
        if (e.lanes === fe && (d === null || d.lanes === fe)) {
          var h = t.lastRenderedReducer;
          if (h !== null) {
            var b;
            b = Ue.current, Ue.current = to;
            try {
              var E = t.lastRenderedState, R = h(E, a);
              if (u.hasEagerState = !0, u.eagerState = R, Ie(R, E)) {
                ED(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Ue.current = b;
            }
          }
        }
        var O = CC(e, t, u, i);
        if (O !== null) {
          var B = Ea();
          Sr(O, e, i, B), qC(O, t, i);
        }
      }
      KC(e, i);
    }
    function GC(e) {
      var t = e.alternate;
      return e === Qt || t !== null && t === Qt;
    }
    function QC(e, t) {
      uv = gy = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function qC(e, t, a) {
      if (gp(a)) {
        var i = t.lanes;
        i = ff(i, e.pendingLanes);
        var u = St(i, a);
        t.lanes = u, Sp(e, u);
      }
    }
    function KC(e, t, a) {
      Rs(e, t);
    }
    var My = {
      readContext: ir,
      useCallback: ta,
      useContext: ta,
      useEffect: ta,
      useImperativeHandle: ta,
      useInsertionEffect: ta,
      useLayoutEffect: ta,
      useMemo: ta,
      useReducer: ta,
      useRef: ta,
      useState: ta,
      useDebugValue: ta,
      useDeferredValue: ta,
      useTransition: ta,
      useMutableSource: ta,
      useSyncExternalStore: ta,
      useId: ta,
      unstable_isNewReconciler: ce
    }, XC = null, ZC = null, JC = null, eT = null, Lo = null, to = null, Ny = null;
    {
      var XS = function() {
        m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, mt = function() {
        m("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      XC = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", Ft(), Jf(t), YS(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", Ft(), ir(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", Ft(), Jf(t), Ty(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", Ft(), Jf(a), WS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", Ft(), Jf(t), HS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", Ft(), Jf(t), IS(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", Ft(), Jf(t);
          var a = Ue.current;
          Ue.current = Lo;
          try {
            return GS(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", Ft();
          var i = Ue.current;
          Ue.current = Lo;
          try {
            return US(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", Ft(), VS(e);
        },
        useState: function(e) {
          ie = "useState", Ft();
          var t = Ue.current;
          Ue.current = Lo;
          try {
            return by(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", Ft(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", Ft(), QS(e);
        },
        useTransition: function() {
          return ie = "useTransition", Ft(), qS();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", Ft(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", Ft(), jS(e, t, a);
        },
        useId: function() {
          return ie = "useId", Ft(), KS();
        },
        unstable_isNewReconciler: ce
      }, ZC = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", ke(), YS(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", ke(), ir(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", ke(), Ty(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", ke(), WS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", ke(), HS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", ke(), IS(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", ke();
          var a = Ue.current;
          Ue.current = Lo;
          try {
            return GS(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", ke();
          var i = Ue.current;
          Ue.current = Lo;
          try {
            return US(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", ke(), VS(e);
        },
        useState: function(e) {
          ie = "useState", ke();
          var t = Ue.current;
          Ue.current = Lo;
          try {
            return by(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", ke(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", ke(), QS(e);
        },
        useTransition: function() {
          return ie = "useTransition", ke(), qS();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", ke(), jS(e, t, a);
        },
        useId: function() {
          return ie = "useId", ke(), KS();
        },
        unstable_isNewReconciler: ce
      }, JC = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", ke(), Oy(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", ke(), ir(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", ke(), dv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", ke(), wy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", ke(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", ke(), Ry(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", ke();
          var a = Ue.current;
          Ue.current = to;
          try {
            return Dy(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", ke();
          var i = Ue.current;
          Ue.current = to;
          try {
            return PS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", ke(), Ey();
        },
        useState: function(e) {
          ie = "useState", ke();
          var t = Ue.current;
          Ue.current = to;
          try {
            return FS(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", ke(), ky();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", ke(), BC(e);
        },
        useTransition: function() {
          return ie = "useTransition", ke(), IC();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", ke(), Sy(e, t);
        },
        useId: function() {
          return ie = "useId", ke(), _y();
        },
        unstable_isNewReconciler: ce
      }, eT = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", ke(), Oy(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", ke(), ir(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", ke(), dv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", ke(), wy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", ke(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", ke(), Ry(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", ke();
          var a = Ue.current;
          Ue.current = Ny;
          try {
            return Dy(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", ke();
          var i = Ue.current;
          Ue.current = Ny;
          try {
            return $S(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", ke(), Ey();
        },
        useState: function(e) {
          ie = "useState", ke();
          var t = Ue.current;
          Ue.current = Ny;
          try {
            return BS(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", ke(), ky();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", ke(), VC(e);
        },
        useTransition: function() {
          return ie = "useTransition", ke(), WC();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", ke(), Sy(e, t);
        },
        useId: function() {
          return ie = "useId", ke(), _y();
        },
        unstable_isNewReconciler: ce
      }, Lo = {
        readContext: function(e) {
          return XS(), ir(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", mt(), Ft(), YS(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", mt(), Ft(), ir(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", mt(), Ft(), Ty(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", mt(), Ft(), WS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", mt(), Ft(), HS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", mt(), Ft(), IS(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", mt(), Ft();
          var a = Ue.current;
          Ue.current = Lo;
          try {
            return GS(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", mt(), Ft();
          var i = Ue.current;
          Ue.current = Lo;
          try {
            return US(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", mt(), Ft(), VS(e);
        },
        useState: function(e) {
          ie = "useState", mt(), Ft();
          var t = Ue.current;
          Ue.current = Lo;
          try {
            return by(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", mt(), Ft(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", mt(), Ft(), QS(e);
        },
        useTransition: function() {
          return ie = "useTransition", mt(), Ft(), qS();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", mt(), Ft(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", mt(), Ft(), jS(e, t, a);
        },
        useId: function() {
          return ie = "useId", mt(), Ft(), KS();
        },
        unstable_isNewReconciler: ce
      }, to = {
        readContext: function(e) {
          return XS(), ir(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", mt(), ke(), Oy(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", mt(), ke(), ir(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", mt(), ke(), dv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", mt(), ke(), wy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", mt(), ke(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", mt(), ke(), Ry(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", mt(), ke();
          var a = Ue.current;
          Ue.current = to;
          try {
            return Dy(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", mt(), ke();
          var i = Ue.current;
          Ue.current = to;
          try {
            return PS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", mt(), ke(), Ey();
        },
        useState: function(e) {
          ie = "useState", mt(), ke();
          var t = Ue.current;
          Ue.current = to;
          try {
            return FS(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", mt(), ke(), ky();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", mt(), ke(), BC(e);
        },
        useTransition: function() {
          return ie = "useTransition", mt(), ke(), IC();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", mt(), ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", mt(), ke(), Sy(e, t);
        },
        useId: function() {
          return ie = "useId", mt(), ke(), _y();
        },
        unstable_isNewReconciler: ce
      }, Ny = {
        readContext: function(e) {
          return XS(), ir(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", mt(), ke(), Oy(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", mt(), ke(), ir(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", mt(), ke(), dv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", mt(), ke(), wy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", mt(), ke(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", mt(), ke(), Ry(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", mt(), ke();
          var a = Ue.current;
          Ue.current = to;
          try {
            return Dy(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", mt(), ke();
          var i = Ue.current;
          Ue.current = to;
          try {
            return $S(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", mt(), ke(), Ey();
        },
        useState: function(e) {
          ie = "useState", mt(), ke();
          var t = Ue.current;
          Ue.current = to;
          try {
            return BS(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", mt(), ke(), ky();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", mt(), ke(), VC(e);
        },
        useTransition: function() {
          return ie = "useTransition", mt(), ke(), WC();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", mt(), ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", mt(), ke(), Sy(e, t);
        },
        useId: function() {
          return ie = "useId", mt(), ke(), _y();
        },
        unstable_isNewReconciler: ce
      };
    }
    var Bu = s.unstable_now, tT = 0, Ay = -1, pv = -1, Ly = -1, ZS = !1, zy = !1;
    function nT() {
      return ZS;
    }
    function $D() {
      zy = !0;
    }
    function jD() {
      ZS = !1, zy = !1;
    }
    function FD() {
      ZS = zy, zy = !1;
    }
    function rT() {
      return tT;
    }
    function aT() {
      tT = Bu();
    }
    function JS(e) {
      pv = Bu(), e.actualStartTime < 0 && (e.actualStartTime = Bu());
    }
    function iT(e) {
      pv = -1;
    }
    function Uy(e, t) {
      if (pv >= 0) {
        var a = Bu() - pv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), pv = -1;
      }
    }
    function zo(e) {
      if (Ay >= 0) {
        var t = Bu() - Ay;
        Ay = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case _:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case K:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function eb(e) {
      if (Ly >= 0) {
        var t = Bu() - Ly;
        Ly = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case _:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case K:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Uo() {
      Ay = Bu();
    }
    function tb() {
      Ly = Bu();
    }
    function nb(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function no(e, t) {
      if (e && e.defaultProps) {
        var a = Tt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var rb = {}, ab, ib, ob, lb, ub, oT, Py, sb, cb, fb, vv;
    {
      ab = /* @__PURE__ */ new Set(), ib = /* @__PURE__ */ new Set(), ob = /* @__PURE__ */ new Set(), lb = /* @__PURE__ */ new Set(), sb = /* @__PURE__ */ new Set(), ub = /* @__PURE__ */ new Set(), cb = /* @__PURE__ */ new Set(), fb = /* @__PURE__ */ new Set(), vv = /* @__PURE__ */ new Set();
      var lT = /* @__PURE__ */ new Set();
      Py = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          lT.has(a) || (lT.add(a), m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, oT = function(e, t) {
        if (t === void 0) {
          var a = Ht(e) || "Component";
          ub.has(a) || (ub.add(a), m("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(rb, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(rb);
    }
    function db(e, t, a, i) {
      var u = e.memoizedState, d = a(i, u);
      {
        if (e.mode & xt) {
          Pn(!0);
          try {
            d = a(i, u);
          } finally {
            Pn(!1);
          }
        }
        oT(t, d);
      }
      var h = d == null ? u : Tt({}, u, d);
      if (e.memoizedState = h, e.lanes === fe) {
        var b = e.updateQueue;
        b.baseState = h;
      }
    }
    var pb = {
      isMounted: ha,
      enqueueSetState: function(e, t, a) {
        var i = Oa(e), u = Ea(), d = Wu(i), h = Ol(u, d);
        h.payload = t, a != null && (Py(a, "setState"), h.callback = a);
        var b = Pu(i, h, d);
        b !== null && (Sr(b, i, d, u), dy(b, i, d)), Rs(i, d);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Oa(e), u = Ea(), d = Wu(i), h = Ol(u, d);
        h.tag = xC, h.payload = t, a != null && (Py(a, "replaceState"), h.callback = a);
        var b = Pu(i, h, d);
        b !== null && (Sr(b, i, d, u), dy(b, i, d)), Rs(i, d);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Oa(e), i = Ea(), u = Wu(a), d = Ol(i, u);
        d.tag = sy, t != null && (Py(t, "forceUpdate"), d.callback = t);
        var h = Pu(a, d, u);
        h !== null && (Sr(h, a, u, i), dy(h, a, u)), Gc(a, u);
      }
    };
    function uT(e, t, a, i, u, d, h) {
      var b = e.stateNode;
      if (typeof b.shouldComponentUpdate == "function") {
        var E = b.shouldComponentUpdate(i, d, h);
        {
          if (e.mode & xt) {
            Pn(!0);
            try {
              E = b.shouldComponentUpdate(i, d, h);
            } finally {
              Pn(!1);
            }
          }
          E === void 0 && m("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ht(t) || "Component");
        }
        return E;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !lt(a, i) || !lt(u, d) : !0;
    }
    function BD(e, t, a) {
      var i = e.stateNode;
      {
        var u = Ht(t) || "Component", d = i.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? m("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : m("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && m("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && m("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && m("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && m("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !vv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & xt) === Ge && (vv.add(t), m(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !vv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & xt) === Ge && (vv.add(t), m(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && m("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !cb.has(t) && (cb.add(t), m("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && m("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && m("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ht(t) || "A pure component"), typeof i.componentDidUnmount == "function" && m("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && m("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && m("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && m("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var h = i.props !== a;
        i.props !== void 0 && h && m("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && m("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !ob.has(t) && (ob.add(t), m("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ht(t))), typeof i.getDerivedStateFromProps == "function" && m("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && m("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && m("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var b = i.state;
        b && (typeof b != "object" || Jn(b)) && m("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && m("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function sT(e, t) {
      t.updater = pb, e.stateNode = t, eu(t, e), t._reactInternalInstance = rb;
    }
    function cT(e, t, a) {
      var i = !1, u = oi, d = oi, h = t.contextType;
      if ("contextType" in t) {
        var b = (
          // Allow null for conditional declaration
          h === null || h !== void 0 && h.$$typeof === he && h._context === void 0
        );
        if (!b && !fb.has(t)) {
          fb.add(t);
          var E = "";
          h === void 0 ? E = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof h != "object" ? E = " However, it is set to a " + typeof h + "." : h.$$typeof === L ? E = " Did you accidentally pass the Context.Provider instead?" : h._context !== void 0 ? E = " Did you accidentally pass the Context.Consumer instead?" : E = " However, it is set to an object with keys {" + Object.keys(h).join(", ") + "}.", m("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ht(t) || "Component", E);
        }
      }
      if (typeof h == "object" && h !== null)
        d = ir(h);
      else {
        u = Bf(e, t, !0);
        var R = t.contextTypes;
        i = R != null, d = i ? Vf(e, u) : oi;
      }
      var O = new t(a, d);
      if (e.mode & xt) {
        Pn(!0);
        try {
          O = new t(a, d);
        } finally {
          Pn(!1);
        }
      }
      var B = e.memoizedState = O.state !== null && O.state !== void 0 ? O.state : null;
      sT(e, O);
      {
        if (typeof t.getDerivedStateFromProps == "function" && B === null) {
          var j = Ht(t) || "Component";
          ib.has(j) || (ib.add(j), m("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", j, O.state === null ? "null" : "undefined", j));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof O.getSnapshotBeforeUpdate == "function") {
          var X = null, J = null, te = null;
          if (typeof O.componentWillMount == "function" && O.componentWillMount.__suppressDeprecationWarning !== !0 ? X = "componentWillMount" : typeof O.UNSAFE_componentWillMount == "function" && (X = "UNSAFE_componentWillMount"), typeof O.componentWillReceiveProps == "function" && O.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? J = "componentWillReceiveProps" : typeof O.UNSAFE_componentWillReceiveProps == "function" && (J = "UNSAFE_componentWillReceiveProps"), typeof O.componentWillUpdate == "function" && O.componentWillUpdate.__suppressDeprecationWarning !== !0 ? te = "componentWillUpdate" : typeof O.UNSAFE_componentWillUpdate == "function" && (te = "UNSAFE_componentWillUpdate"), X !== null || J !== null || te !== null) {
            var Ne = Ht(t) || "Component", at = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            lb.has(Ne) || (lb.add(Ne), m(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ne, at, X !== null ? `
  ` + X : "", J !== null ? `
  ` + J : "", te !== null ? `
  ` + te : ""));
          }
        }
      }
      return i && JE(e, u, d), O;
    }
    function VD(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (m("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", gt(e) || "Component"), pb.enqueueReplaceState(t, t.state, null));
    }
    function fT(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var d = gt(e) || "Component";
          ab.has(d) || (ab.add(d), m("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        pb.enqueueReplaceState(t, t.state, null);
      }
    }
    function vb(e, t, a, i) {
      BD(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, TS(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        u.context = ir(d);
      else {
        var h = Bf(e, t, !0);
        u.context = Vf(e, h);
      }
      {
        if (u.state === a) {
          var b = Ht(t) || "Component";
          sb.has(b) || (sb.add(b), m("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", b));
        }
        e.mode & xt && Ji.recordLegacyContextWarning(e, u), Ji.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var E = t.getDerivedStateFromProps;
      if (typeof E == "function" && (db(e, t, E, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (VD(e, u), py(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var R = bt;
        R |= Ir, (e.mode & ya) !== Ge && (R |= Wr), e.flags |= R;
      }
    }
    function HD(e, t, a, i) {
      var u = e.stateNode, d = e.memoizedProps;
      u.props = d;
      var h = u.context, b = t.contextType, E = oi;
      if (typeof b == "object" && b !== null)
        E = ir(b);
      else {
        var R = Bf(e, t, !0);
        E = Vf(e, R);
      }
      var O = t.getDerivedStateFromProps, B = typeof O == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !B && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (d !== a || h !== E) && fT(e, u, a, E), wC();
      var j = e.memoizedState, X = u.state = j;
      if (py(e, a, u, i), X = e.memoizedState, d === a && j === X && !Qm() && !vy()) {
        if (typeof u.componentDidMount == "function") {
          var J = bt;
          J |= Ir, (e.mode & ya) !== Ge && (J |= Wr), e.flags |= J;
        }
        return !1;
      }
      typeof O == "function" && (db(e, t, O, a), X = e.memoizedState);
      var te = vy() || uT(e, t, d, a, j, X, E);
      if (te) {
        if (!B && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Ne = bt;
          Ne |= Ir, (e.mode & ya) !== Ge && (Ne |= Wr), e.flags |= Ne;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var at = bt;
          at |= Ir, (e.mode & ya) !== Ge && (at |= Wr), e.flags |= at;
        }
        e.memoizedProps = a, e.memoizedState = X;
      }
      return u.props = a, u.state = X, u.context = E, te;
    }
    function ID(e, t, a, i, u) {
      var d = t.stateNode;
      RC(e, t);
      var h = t.memoizedProps, b = t.type === t.elementType ? h : no(t.type, h);
      d.props = b;
      var E = t.pendingProps, R = d.context, O = a.contextType, B = oi;
      if (typeof O == "object" && O !== null)
        B = ir(O);
      else {
        var j = Bf(t, a, !0);
        B = Vf(t, j);
      }
      var X = a.getDerivedStateFromProps, J = typeof X == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !J && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (h !== E || R !== B) && fT(t, d, i, B), wC();
      var te = t.memoizedState, Ne = d.state = te;
      if (py(t, i, d, u), Ne = t.memoizedState, h === E && te === Ne && !Qm() && !vy() && !Ae)
        return typeof d.componentDidUpdate == "function" && (h !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= bt), typeof d.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Da), !1;
      typeof X == "function" && (db(t, a, X, i), Ne = t.memoizedState);
      var at = vy() || uT(t, a, b, i, te, Ne, B) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ae;
      return at ? (!J && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(i, Ne, B), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(i, Ne, B)), typeof d.componentDidUpdate == "function" && (t.flags |= bt), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= Da)) : (typeof d.componentDidUpdate == "function" && (h !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= bt), typeof d.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Da), t.memoizedProps = i, t.memoizedState = Ne), d.props = i, d.state = Ne, d.context = B, at;
    }
    function nc(e, t) {
      return {
        value: e,
        source: t,
        stack: Dd(t),
        digest: null
      };
    }
    function hb(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function WD(e, t) {
      return !0;
    }
    function mb(e, t) {
      try {
        var a = WD(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, d = t.stack, h = d !== null ? d : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === D)
            return;
          console.error(i);
        }
        var b = u ? gt(u) : null, E = b ? "The above error occurred in the <" + b + "> component:" : "The above error occurred in one of your React components:", R;
        if (e.tag === _)
          R = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var O = gt(e) || "Anonymous";
          R = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + O + ".");
        }
        var B = E + `
` + h + `

` + ("" + R);
        console.error(B);
      } catch (j) {
        setTimeout(function() {
          throw j;
        });
      }
    }
    var YD = typeof WeakMap == "function" ? WeakMap : Map;
    function dT(e, t, a) {
      var i = Ol(an, a);
      i.tag = ES, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        $M(u), mb(e, t);
      }, i;
    }
    function yb(e, t, a) {
      var i = Ol(an, a);
      i.tag = ES;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var d = t.value;
        i.payload = function() {
          return u(d);
        }, i.callback = function() {
          Tx(e), mb(e, t);
        };
      }
      var h = e.stateNode;
      return h !== null && typeof h.componentDidCatch == "function" && (i.callback = function() {
        Tx(e), mb(e, t), typeof u != "function" && UM(this);
        var E = t.value, R = t.stack;
        this.componentDidCatch(E, {
          componentStack: R !== null ? R : ""
        }), typeof u != "function" && (Xr(e.lanes, Ze) || m("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", gt(e) || "Unknown"));
      }), i;
    }
    function pT(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new YD(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var d = jM.bind(null, e, t, a);
        ma && Mv(e, a), t.then(d, d);
      }
    }
    function GD(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(a), e.updateQueue = d;
      } else
        u.add(a);
    }
    function QD(e, t) {
      var a = e.tag;
      if ((e.mode & qe) === Ge && (a === w || a === q || a === re)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function vT(e) {
      var t = e;
      do {
        if (t.tag === V && OD(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function hT(e, t, a, i, u) {
      if ((e.mode & qe) === Ge) {
        if (e === t)
          e.flags |= tr;
        else {
          if (e.flags |= pt, a.flags |= Cs, a.flags &= ~(zc | pa), a.tag === D) {
            var d = a.alternate;
            if (d === null)
              a.tag = Fe;
            else {
              var h = Ol(an, Ze);
              h.tag = sy, Pu(a, h, Ze);
            }
          }
          a.lanes = St(a.lanes, Ze);
        }
        return e;
      }
      return e.flags |= tr, e.lanes = u, e;
    }
    function qD(e, t, a, i, u) {
      if (a.flags |= pa, ma && Mv(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var d = i;
        QD(a), _r() && a.mode & qe && oC();
        var h = vT(t);
        if (h !== null) {
          h.flags &= ~Tn, hT(h, t, a, e, u), h.mode & qe && pT(e, d, u), GD(h, e, d);
          return;
        } else {
          if (!yp(u)) {
            pT(e, d, u), Kb();
            return;
          }
          var b = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = b;
        }
      } else if (_r() && a.mode & qe) {
        oC();
        var E = vT(t);
        if (E !== null) {
          (E.flags & tr) === rt && (E.flags |= Tn), hT(E, t, a, e, u), sS(nc(i, a));
          return;
        }
      }
      i = nc(i, a), OM(i);
      var R = t;
      do {
        switch (R.tag) {
          case _: {
            var O = i;
            R.flags |= tr;
            var B = vu(u);
            R.lanes = St(R.lanes, B);
            var j = dT(R, O, B);
            xS(R, j);
            return;
          }
          case D:
            var X = i, J = R.type, te = R.stateNode;
            if ((R.flags & pt) === rt && (typeof J.getDerivedStateFromError == "function" || te !== null && typeof te.componentDidCatch == "function" && !vx(te))) {
              R.flags |= tr;
              var Ne = vu(u);
              R.lanes = St(R.lanes, Ne);
              var at = yb(R, X, Ne);
              xS(R, at);
              return;
            }
            break;
        }
        R = R.return;
      } while (R !== null);
    }
    function KD() {
      return null;
    }
    var hv = f.ReactCurrentOwner, ro = !1, gb, mv, Sb, bb, Eb, rc, Cb, $y, yv;
    gb = {}, mv = {}, Sb = {}, bb = {}, Eb = {}, rc = !1, Cb = {}, $y = {}, yv = {};
    function Sa(e, t, a, i) {
      e === null ? t.child = gC(t, null, a, i) : t.child = Yf(t, e.child, a, i);
    }
    function XD(e, t, a, i) {
      t.child = Yf(t, e.child, null, i), t.child = Yf(t, null, a, i);
    }
    function mT(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && Xi(
          d,
          i,
          // Resolved props
          "prop",
          Ht(a)
        );
      }
      var h = a.render, b = t.ref, E, R;
      Qf(t, u), au(t);
      {
        if (hv.current = t, ti(!0), E = ed(e, t, h, i, b, u), R = td(), t.mode & xt) {
          Pn(!0);
          try {
            E = ed(e, t, h, i, b, u), R = td();
          } finally {
            Pn(!1);
          }
        }
        ti(!1);
      }
      return Qr(), e !== null && !ro ? (NC(e, t, u), Dl(e, t, u)) : (_r() && R && rS(t), t.flags |= go, Sa(e, t, E, u), t.child);
    }
    function yT(e, t, a, i, u) {
      if (e === null) {
        var d = a.type;
        if (nN(d) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var h = d;
          return h = sd(d), t.tag = re, t.type = h, Rb(t, d), gT(e, t, h, i, u);
        }
        {
          var b = d.propTypes;
          if (b && Xi(
            b,
            i,
            // Resolved props
            "prop",
            Ht(d)
          ), a.defaultProps !== void 0) {
            var E = Ht(d) || "Unknown";
            yv[E] || (m("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", E), yv[E] = !0);
          }
        }
        var R = l1(a.type, null, i, t, t.mode, u);
        return R.ref = t.ref, R.return = t, t.child = R, R;
      }
      {
        var O = a.type, B = O.propTypes;
        B && Xi(
          B,
          i,
          // Resolved props
          "prop",
          Ht(O)
        );
      }
      var j = e.child, X = Mb(e, u);
      if (!X) {
        var J = j.memoizedProps, te = a.compare;
        if (te = te !== null ? te : lt, te(J, i) && e.ref === t.ref)
          return Dl(e, t, u);
      }
      t.flags |= go;
      var Ne = uc(j, i);
      return Ne.ref = t.ref, Ne.return = t, t.child = Ne, Ne;
    }
    function gT(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === ft) {
          var h = d, b = h._payload, E = h._init;
          try {
            d = E(b);
          } catch {
            d = null;
          }
          var R = d && d.propTypes;
          R && Xi(
            R,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ht(d)
          );
        }
      }
      if (e !== null) {
        var O = e.memoizedProps;
        if (lt(O, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ro = !1, t.pendingProps = i = O, Mb(e, u))
            (e.flags & Cs) !== rt && (ro = !0);
          else return t.lanes = e.lanes, Dl(e, t, u);
      }
      return Tb(e, t, a, i, u);
    }
    function ST(e, t, a) {
      var i = t.pendingProps, u = i.children, d = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || W)
        if ((t.mode & qe) === Ge) {
          var h = {
            baseLanes: fe,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = h, Xy(t, a);
        } else if (Xr(a, xr)) {
          var B = {
            baseLanes: fe,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = B;
          var j = d !== null ? d.baseLanes : a;
          Xy(t, j);
        } else {
          var b = null, E;
          if (d !== null) {
            var R = d.baseLanes;
            E = St(R, a);
          } else
            E = a;
          t.lanes = t.childLanes = xr;
          var O = {
            baseLanes: E,
            cachePool: b,
            transitions: null
          };
          return t.memoizedState = O, t.updateQueue = null, Xy(t, E), null;
        }
      else {
        var X;
        d !== null ? (X = St(d.baseLanes, a), t.memoizedState = null) : X = a, Xy(t, X);
      }
      return Sa(e, t, u, a), t.child;
    }
    function ZD(e, t, a) {
      var i = t.pendingProps;
      return Sa(e, t, i, a), t.child;
    }
    function JD(e, t, a) {
      var i = t.pendingProps.children;
      return Sa(e, t, i, a), t.child;
    }
    function e_(e, t, a) {
      {
        t.flags |= bt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, d = u.children;
      return Sa(e, t, d, a), t.child;
    }
    function bT(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Hr, t.flags |= ap);
    }
    function Tb(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && Xi(
          d,
          i,
          // Resolved props
          "prop",
          Ht(a)
        );
      }
      var h;
      {
        var b = Bf(t, a, !0);
        h = Vf(t, b);
      }
      var E, R;
      Qf(t, u), au(t);
      {
        if (hv.current = t, ti(!0), E = ed(e, t, a, i, h, u), R = td(), t.mode & xt) {
          Pn(!0);
          try {
            E = ed(e, t, a, i, h, u), R = td();
          } finally {
            Pn(!1);
          }
        }
        ti(!1);
      }
      return Qr(), e !== null && !ro ? (NC(e, t, u), Dl(e, t, u)) : (_r() && R && rS(t), t.flags |= go, Sa(e, t, E, u), t.child);
    }
    function ET(e, t, a, i, u) {
      {
        switch (yN(t)) {
          case !1: {
            var d = t.stateNode, h = t.type, b = new h(t.memoizedProps, d.context), E = b.state;
            d.updater.enqueueSetState(d, E, null);
            break;
          }
          case !0: {
            t.flags |= pt, t.flags |= tr;
            var R = new Error("Simulated error coming from DevTools"), O = vu(u);
            t.lanes = St(t.lanes, O);
            var B = yb(t, nc(R, t), O);
            xS(t, B);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var j = a.propTypes;
          j && Xi(
            j,
            i,
            // Resolved props
            "prop",
            Ht(a)
          );
        }
      }
      var X;
      Mo(a) ? (X = !0, Km(t)) : X = !1, Qf(t, u);
      var J = t.stateNode, te;
      J === null ? (Fy(e, t), cT(t, a, i), vb(t, a, i, u), te = !0) : e === null ? te = HD(t, a, i, u) : te = ID(e, t, a, i, u);
      var Ne = xb(e, t, a, te, X, u);
      {
        var at = t.stateNode;
        te && at.props !== i && (rc || m("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", gt(t) || "a component"), rc = !0);
      }
      return Ne;
    }
    function xb(e, t, a, i, u, d) {
      bT(e, t);
      var h = (t.flags & pt) !== rt;
      if (!i && !h)
        return u && nC(t, a, !1), Dl(e, t, d);
      var b = t.stateNode;
      hv.current = t;
      var E;
      if (h && typeof a.getDerivedStateFromError != "function")
        E = null, iT();
      else {
        au(t);
        {
          if (ti(!0), E = b.render(), t.mode & xt) {
            Pn(!0);
            try {
              b.render();
            } finally {
              Pn(!1);
            }
          }
          ti(!1);
        }
        Qr();
      }
      return t.flags |= go, e !== null && h ? XD(e, t, E, d) : Sa(e, t, E, d), t.memoizedState = b.state, u && nC(t, a, !0), t.child;
    }
    function CT(e) {
      var t = e.stateNode;
      t.pendingContext ? eC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && eC(e, t.context, !1), RS(e, t.containerInfo);
    }
    function t_(e, t, a) {
      if (CT(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, d = u.element;
      RC(e, t), py(t, i, null, a);
      var h = t.memoizedState;
      t.stateNode;
      var b = h.element;
      if (u.isDehydrated) {
        var E = {
          element: b,
          isDehydrated: !1,
          cache: h.cache,
          pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
          transitions: h.transitions
        }, R = t.updateQueue;
        if (R.baseState = E, t.memoizedState = E, t.flags & Tn) {
          var O = nc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return TT(e, t, b, a, O);
        } else if (b !== d) {
          var B = nc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return TT(e, t, b, a, B);
        } else {
          aD(t);
          var j = gC(t, null, b, a);
          t.child = j;
          for (var X = j; X; )
            X.flags = X.flags & ~ln | _a, X = X.sibling;
        }
      } else {
        if (Wf(), b === d)
          return Dl(e, t, a);
        Sa(e, t, b, a);
      }
      return t.child;
    }
    function TT(e, t, a, i, u) {
      return Wf(), sS(u), t.flags |= Tn, Sa(e, t, a, i), t.child;
    }
    function n_(e, t, a) {
      DC(t), e === null && uS(t);
      var i = t.type, u = t.pendingProps, d = e !== null ? e.memoizedProps : null, h = u.children, b = H0(i, u);
      return b ? h = null : d !== null && H0(i, d) && (t.flags |= jt), bT(e, t), Sa(e, t, h, a), t.child;
    }
    function r_(e, t) {
      return e === null && uS(t), null;
    }
    function a_(e, t, a, i) {
      Fy(e, t);
      var u = t.pendingProps, d = a, h = d._payload, b = d._init, E = b(h);
      t.type = E;
      var R = t.tag = rN(E), O = no(E, u), B;
      switch (R) {
        case w:
          return Rb(t, E), t.type = E = sd(E), B = Tb(null, t, E, O, i), B;
        case D:
          return t.type = E = t1(E), B = ET(null, t, E, O, i), B;
        case q:
          return t.type = E = n1(E), B = mT(null, t, E, O, i), B;
        case le: {
          if (t.type !== t.elementType) {
            var j = E.propTypes;
            j && Xi(
              j,
              O,
              // Resolved for outer only
              "prop",
              Ht(E)
            );
          }
          return B = yT(
            null,
            t,
            E,
            no(E.type, O),
            // The inner type can have defaults too
            i
          ), B;
        }
      }
      var X = "";
      throw E !== null && typeof E == "object" && E.$$typeof === ft && (X = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + E + ". " + ("Lazy element type must resolve to a class or function." + X));
    }
    function i_(e, t, a, i, u) {
      Fy(e, t), t.tag = D;
      var d;
      return Mo(a) ? (d = !0, Km(t)) : d = !1, Qf(t, u), cT(t, a, i), vb(t, a, i, u), xb(null, t, a, !0, d, u);
    }
    function o_(e, t, a, i) {
      Fy(e, t);
      var u = t.pendingProps, d;
      {
        var h = Bf(t, a, !1);
        d = Vf(t, h);
      }
      Qf(t, i);
      var b, E;
      au(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var R = Ht(a) || "Unknown";
          gb[R] || (m("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", R, R), gb[R] = !0);
        }
        t.mode & xt && Ji.recordLegacyContextWarning(t, null), ti(!0), hv.current = t, b = ed(null, t, a, u, d, i), E = td(), ti(!1);
      }
      if (Qr(), t.flags |= go, typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0) {
        var O = Ht(a) || "Unknown";
        mv[O] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", O, O, O), mv[O] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0
      ) {
        {
          var B = Ht(a) || "Unknown";
          mv[B] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", B, B, B), mv[B] = !0);
        }
        t.tag = D, t.memoizedState = null, t.updateQueue = null;
        var j = !1;
        return Mo(a) ? (j = !0, Km(t)) : j = !1, t.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null, TS(t), sT(t, b), vb(t, a, u, i), xb(null, t, a, !0, j, i);
      } else {
        if (t.tag = w, t.mode & xt) {
          Pn(!0);
          try {
            b = ed(null, t, a, u, d, i), E = td();
          } finally {
            Pn(!1);
          }
        }
        return _r() && E && rS(t), Sa(null, t, b, i), Rb(t, a), t.child;
      }
    }
    function Rb(e, t) {
      {
        if (t && t.childContextTypes && m("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = wa();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", d = e._debugSource;
          d && (u = d.fileName + ":" + d.lineNumber), Eb[u] || (Eb[u] = !0, m("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var h = Ht(t) || "Unknown";
          yv[h] || (m("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", h), yv[h] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var b = Ht(t) || "Unknown";
          bb[b] || (m("%s: Function components do not support getDerivedStateFromProps.", b), bb[b] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var E = Ht(t) || "Unknown";
          Sb[E] || (m("%s: Function components do not support contextType.", E), Sb[E] = !0);
        }
      }
    }
    var wb = {
      dehydrated: null,
      treeContext: null,
      retryLane: $n
    };
    function kb(e) {
      return {
        baseLanes: e,
        cachePool: KD(),
        transitions: null
      };
    }
    function l_(e, t) {
      var a = null;
      return {
        baseLanes: St(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function u_(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return OS(e, ov);
    }
    function s_(e, t) {
      return Ns(e.childLanes, t);
    }
    function xT(e, t, a) {
      var i = t.pendingProps;
      gN(t) && (t.flags |= pt);
      var u = eo.current, d = !1, h = (t.flags & pt) !== rt;
      if (h || u_(u, e) ? (d = !0, t.flags &= ~pt) : (e === null || e.memoizedState !== null) && (u = kD(u, MC)), u = Kf(u), ju(t, u), e === null) {
        uS(t);
        var b = t.memoizedState;
        if (b !== null) {
          var E = b.dehydrated;
          if (E !== null)
            return v_(t, E);
        }
        var R = i.children, O = i.fallback;
        if (d) {
          var B = c_(t, R, O, a), j = t.child;
          return j.memoizedState = kb(a), t.memoizedState = wb, B;
        } else
          return Ob(t, R);
      } else {
        var X = e.memoizedState;
        if (X !== null) {
          var J = X.dehydrated;
          if (J !== null)
            return h_(e, t, h, i, J, X, a);
        }
        if (d) {
          var te = i.fallback, Ne = i.children, at = d_(e, t, Ne, te, a), Ke = t.child, Mt = e.child.memoizedState;
          return Ke.memoizedState = Mt === null ? kb(a) : l_(Mt, a), Ke.childLanes = s_(e, a), t.memoizedState = wb, at;
        } else {
          var kt = i.children, Y = f_(e, t, kt, a);
          return t.memoizedState = null, Y;
        }
      }
    }
    function Ob(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, d = Db(u, i);
      return d.return = e, e.child = d, d;
    }
    function c_(e, t, a, i) {
      var u = e.mode, d = e.child, h = {
        mode: "hidden",
        children: t
      }, b, E;
      return (u & qe) === Ge && d !== null ? (b = d, b.childLanes = fe, b.pendingProps = h, e.mode & vt && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = 0, b.treeBaseDuration = 0), E = Gu(a, u, i, null)) : (b = Db(h, u), E = Gu(a, u, i, null)), b.return = e, E.return = e, b.sibling = E, e.child = b, E;
    }
    function Db(e, t, a) {
      return Rx(e, t, fe, null);
    }
    function RT(e, t) {
      return uc(e, t);
    }
    function f_(e, t, a, i) {
      var u = e.child, d = u.sibling, h = RT(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & qe) === Ge && (h.lanes = i), h.return = t, h.sibling = null, d !== null) {
        var b = t.deletions;
        b === null ? (t.deletions = [d], t.flags |= Ut) : b.push(d);
      }
      return t.child = h, h;
    }
    function d_(e, t, a, i, u) {
      var d = t.mode, h = e.child, b = h.sibling, E = {
        mode: "hidden",
        children: a
      }, R;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & qe) === Ge && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== h
      ) {
        var O = t.child;
        R = O, R.childLanes = fe, R.pendingProps = E, t.mode & vt && (R.actualDuration = 0, R.actualStartTime = -1, R.selfBaseDuration = h.selfBaseDuration, R.treeBaseDuration = h.treeBaseDuration), t.deletions = null;
      } else
        R = RT(h, E), R.subtreeFlags = h.subtreeFlags & sr;
      var B;
      return b !== null ? B = uc(b, i) : (B = Gu(i, d, u, null), B.flags |= ln), B.return = t, R.return = t, R.sibling = B, t.child = R, B;
    }
    function jy(e, t, a, i) {
      i !== null && sS(i), Yf(t, e.child, null, a);
      var u = t.pendingProps, d = u.children, h = Ob(t, d);
      return h.flags |= ln, t.memoizedState = null, h;
    }
    function p_(e, t, a, i, u) {
      var d = t.mode, h = {
        mode: "visible",
        children: a
      }, b = Db(h, d), E = Gu(i, d, u, null);
      return E.flags |= ln, b.return = t, E.return = t, b.sibling = E, t.child = b, (t.mode & qe) !== Ge && Yf(t, e.child, null, u), E;
    }
    function v_(e, t, a) {
      return (e.mode & qe) === Ge ? (m("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ze) : G0(t) ? e.lanes = Yi : e.lanes = xr, null;
    }
    function h_(e, t, a, i, u, d, h) {
      if (a)
        if (t.flags & Tn) {
          t.flags &= ~Tn;
          var Y = hb(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return jy(e, t, h, Y);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= pt, null;
          var ne = i.children, G = i.fallback, ge = p_(e, t, ne, G, h), Pe = t.child;
          return Pe.memoizedState = kb(h), t.memoizedState = wb, ge;
        }
      else {
        if (nD(), (t.mode & qe) === Ge)
          return jy(
            e,
            t,
            h,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (G0(u)) {
          var b, E, R;
          {
            var O = SO(u);
            b = O.digest, E = O.message, R = O.stack;
          }
          var B;
          E ? B = new Error(E) : B = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var j = hb(B, b, R);
          return jy(e, t, h, j);
        }
        var X = Xr(h, e.childLanes);
        if (ro || X) {
          var J = Ky();
          if (J !== null) {
            var te = fm(J, h);
            if (te !== $n && te !== d.retryLane) {
              d.retryLane = te;
              var Ne = an;
              Va(e, te), Sr(J, e, te, Ne);
            }
          }
          Kb();
          var at = hb(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return jy(e, t, h, at);
        } else if (QE(u)) {
          t.flags |= pt, t.child = e.child;
          var Ke = FM.bind(null, e);
          return bO(u, Ke), null;
        } else {
          iD(t, u, d.treeContext);
          var Mt = i.children, kt = Ob(t, Mt);
          return kt.flags |= _a, kt;
        }
      }
    }
    function wT(e, t, a) {
      e.lanes = St(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = St(i.lanes, t)), SS(e.return, t, a);
    }
    function m_(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === V) {
          var u = i.memoizedState;
          u !== null && wT(i, a, e);
        } else if (i.tag === oe)
          wT(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function y_(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && yy(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function g_(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Cb[e])
        if (Cb[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              m('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          m('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function S_(e, t) {
      e !== void 0 && !$y[e] && (e !== "collapsed" && e !== "hidden" ? ($y[e] = !0, m('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && ($y[e] = !0, m('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function kT(e, t) {
      {
        var a = Jn(e), i = !a && typeof fa(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return m("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function b_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Jn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!kT(e[a], a))
              return;
        } else {
          var i = fa(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var d = u.next(), h = 0; !d.done; d = u.next()) {
                if (!kT(d.value, h))
                  return;
                h++;
              }
          } else
            m('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function _b(e, t, a, i, u) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = u);
    }
    function OT(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, d = i.tail, h = i.children;
      g_(u), S_(d, u), b_(h, u), Sa(e, t, h, a);
      var b = eo.current, E = OS(b, ov);
      if (E)
        b = DS(b, ov), t.flags |= pt;
      else {
        var R = e !== null && (e.flags & pt) !== rt;
        R && m_(t, t.child, a), b = Kf(b);
      }
      if (ju(t, b), (t.mode & qe) === Ge)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var O = y_(t.child), B;
            O === null ? (B = t.child, t.child = null) : (B = O.sibling, O.sibling = null), _b(
              t,
              !1,
              // isBackwards
              B,
              O,
              d
            );
            break;
          }
          case "backwards": {
            var j = null, X = t.child;
            for (t.child = null; X !== null; ) {
              var J = X.alternate;
              if (J !== null && yy(J) === null) {
                t.child = X;
                break;
              }
              var te = X.sibling;
              X.sibling = j, j = X, X = te;
            }
            _b(
              t,
              !0,
              // isBackwards
              j,
              null,
              // last
              d
            );
            break;
          }
          case "together": {
            _b(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function E_(e, t, a) {
      RS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Yf(t, null, i, a) : Sa(e, t, i, a), t.child;
    }
    var DT = !1;
    function C_(e, t, a) {
      var i = t.type, u = i._context, d = t.pendingProps, h = t.memoizedProps, b = d.value;
      {
        "value" in d || DT || (DT = !0, m("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var E = t.type.propTypes;
        E && Xi(E, d, "prop", "Context.Provider");
      }
      if (EC(t, u, b), h !== null) {
        var R = h.value;
        if (Ie(R, b)) {
          if (h.children === d.children && !Qm())
            return Dl(e, t, a);
        } else
          gD(t, u, a);
      }
      var O = d.children;
      return Sa(e, t, O, a), t.child;
    }
    var _T = !1;
    function T_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (_T || (_T = !0, m("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, d = u.children;
      typeof d != "function" && m("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Qf(t, a);
      var h = ir(i);
      au(t);
      var b;
      return hv.current = t, ti(!0), b = d(h), ti(!1), Qr(), t.flags |= go, Sa(e, t, b, a), t.child;
    }
    function gv() {
      ro = !0;
    }
    function Fy(e, t) {
      (t.mode & qe) === Ge && e !== null && (e.alternate = null, t.alternate = null, t.flags |= ln);
    }
    function Dl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), iT(), _v(t.lanes), Xr(a, t.childLanes) ? (mD(e, t), t.child) : null;
    }
    function x_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var d = i.deletions;
        return d === null ? (i.deletions = [e], i.flags |= Ut) : d.push(e), a.flags |= ln, a;
      }
    }
    function Mb(e, t) {
      var a = e.lanes;
      return !!Xr(a, t);
    }
    function R_(e, t, a) {
      switch (t.tag) {
        case _:
          CT(t), t.stateNode, Wf();
          break;
        case P:
          DC(t);
          break;
        case D: {
          var i = t.type;
          Mo(i) && Km(t);
          break;
        }
        case N:
          RS(t, t.stateNode.containerInfo);
          break;
        case ue: {
          var u = t.memoizedProps.value, d = t.type._context;
          EC(t, d, u);
          break;
        }
        case K:
          {
            var h = Xr(a, t.childLanes);
            h && (t.flags |= bt);
            {
              var b = t.stateNode;
              b.effectDuration = 0, b.passiveEffectDuration = 0;
            }
          }
          break;
        case V: {
          var E = t.memoizedState;
          if (E !== null) {
            if (E.dehydrated !== null)
              return ju(t, Kf(eo.current)), t.flags |= pt, null;
            var R = t.child, O = R.childLanes;
            if (Xr(a, O))
              return xT(e, t, a);
            ju(t, Kf(eo.current));
            var B = Dl(e, t, a);
            return B !== null ? B.sibling : null;
          } else
            ju(t, Kf(eo.current));
          break;
        }
        case oe: {
          var j = (e.flags & pt) !== rt, X = Xr(a, t.childLanes);
          if (j) {
            if (X)
              return OT(e, t, a);
            t.flags |= pt;
          }
          var J = t.memoizedState;
          if (J !== null && (J.rendering = null, J.tail = null, J.lastEffect = null), ju(t, eo.current), X)
            break;
          return null;
        }
        case ve:
        case Se:
          return t.lanes = fe, ST(e, t, a);
      }
      return Dl(e, t, a);
    }
    function MT(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return x_(e, t, l1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Qm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ro = !0;
        else {
          var d = Mb(e, a);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & pt) === rt)
            return ro = !1, R_(e, t, a);
          (e.flags & Cs) !== rt ? ro = !0 : ro = !1;
        }
      } else if (ro = !1, _r() && KO(t)) {
        var h = t.index, b = XO();
        iC(t, b, h);
      }
      switch (t.lanes = fe, t.tag) {
        case A:
          return o_(e, t, t.type, a);
        case je: {
          var E = t.elementType;
          return a_(e, t, E, a);
        }
        case w: {
          var R = t.type, O = t.pendingProps, B = t.elementType === R ? O : no(R, O);
          return Tb(e, t, R, B, a);
        }
        case D: {
          var j = t.type, X = t.pendingProps, J = t.elementType === j ? X : no(j, X);
          return ET(e, t, j, J, a);
        }
        case _:
          return t_(e, t, a);
        case P:
          return n_(e, t, a);
        case H:
          return r_(e, t);
        case V:
          return xT(e, t, a);
        case N:
          return E_(e, t, a);
        case q: {
          var te = t.type, Ne = t.pendingProps, at = t.elementType === te ? Ne : no(te, Ne);
          return mT(e, t, te, at, a);
        }
        case $:
          return ZD(e, t, a);
        case U:
          return JD(e, t, a);
        case K:
          return e_(e, t, a);
        case ue:
          return C_(e, t, a);
        case ee:
          return T_(e, t, a);
        case le: {
          var Ke = t.type, Mt = t.pendingProps, kt = no(Ke, Mt);
          if (t.type !== t.elementType) {
            var Y = Ke.propTypes;
            Y && Xi(
              Y,
              kt,
              // Resolved for outer only
              "prop",
              Ht(Ke)
            );
          }
          return kt = no(Ke.type, kt), yT(e, t, Ke, kt, a);
        }
        case re:
          return gT(e, t, t.type, t.pendingProps, a);
        case Fe: {
          var ne = t.type, G = t.pendingProps, ge = t.elementType === ne ? G : no(ne, G);
          return i_(e, t, ne, ge, a);
        }
        case oe:
          return OT(e, t, a);
        case Te:
          break;
        case ve:
          return ST(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function nd(e) {
      e.flags |= bt;
    }
    function NT(e) {
      e.flags |= Hr, e.flags |= ap;
    }
    var AT, Nb, LT, zT;
    AT = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === P || u.tag === H)
          Gk(e, u.stateNode);
        else if (u.tag !== N) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, Nb = function(e, t) {
    }, LT = function(e, t, a, i, u) {
      var d = e.memoizedProps;
      if (d !== i) {
        var h = t.stateNode, b = wS(), E = qk(h, a, d, i, u, b);
        t.updateQueue = E, E && nd(t);
      }
    }, zT = function(e, t, a, i) {
      a !== i && nd(t);
    };
    function Sv(e, t) {
      if (!_r())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, d = null; u !== null; )
              u.alternate !== null && (d = u), u = u.sibling;
            d === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : d.sibling = null;
            break;
          }
        }
    }
    function Nr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = fe, i = rt;
      if (t) {
        if ((e.mode & vt) !== Ge) {
          for (var E = e.selfBaseDuration, R = e.child; R !== null; )
            a = St(a, St(R.lanes, R.childLanes)), i |= R.subtreeFlags & sr, i |= R.flags & sr, E += R.treeBaseDuration, R = R.sibling;
          e.treeBaseDuration = E;
        } else
          for (var O = e.child; O !== null; )
            a = St(a, St(O.lanes, O.childLanes)), i |= O.subtreeFlags & sr, i |= O.flags & sr, O.return = e, O = O.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & vt) !== Ge) {
          for (var u = e.actualDuration, d = e.selfBaseDuration, h = e.child; h !== null; )
            a = St(a, St(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, u += h.actualDuration, d += h.treeBaseDuration, h = h.sibling;
          e.actualDuration = u, e.treeBaseDuration = d;
        } else
          for (var b = e.child; b !== null; )
            a = St(a, St(b.lanes, b.childLanes)), i |= b.subtreeFlags, i |= b.flags, b.return = e, b = b.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function w_(e, t, a) {
      if (cD() && (t.mode & qe) !== Ge && (t.flags & pt) === rt)
        return dC(t), Wf(), t.flags |= Tn | pa | tr, !1;
      var i = ty(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (uD(t), Nr(t), (t.mode & vt) !== Ge) {
            var u = a !== null;
            if (u) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Wf(), (t.flags & pt) === rt && (t.memoizedState = null), t.flags |= bt, Nr(t), (t.mode & vt) !== Ge) {
            var h = a !== null;
            if (h) {
              var b = t.child;
              b !== null && (t.treeBaseDuration -= b.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return pC(), !0;
    }
    function UT(e, t, a) {
      var i = t.pendingProps;
      switch (aS(t), t.tag) {
        case A:
        case je:
        case re:
        case w:
        case q:
        case $:
        case U:
        case K:
        case ee:
        case le:
          return Nr(t), null;
        case D: {
          var u = t.type;
          return Mo(u) && qm(t), Nr(t), null;
        }
        case _: {
          var d = t.stateNode;
          if (qf(t), eS(t), MS(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var h = ty(t);
            if (h)
              nd(t);
            else if (e !== null) {
              var b = e.memoizedState;
              // Check if this is a client root
              (!b.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Tn) !== rt) && (t.flags |= Da, pC());
            }
          }
          return Nb(e, t), Nr(t), null;
        }
        case P: {
          kS(t);
          var E = OC(), R = t.type;
          if (e !== null && t.stateNode != null)
            LT(e, t, R, i, E), e.ref !== t.ref && NT(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Nr(t), null;
            }
            var O = wS(), B = ty(t);
            if (B)
              oD(t, E, O) && nd(t);
            else {
              var j = Yk(R, i, E, O, t);
              AT(j, t, !1, !1), t.stateNode = j, Qk(j, R, i, E) && nd(t);
            }
            t.ref !== null && NT(t);
          }
          return Nr(t), null;
        }
        case H: {
          var X = i;
          if (e && t.stateNode != null) {
            var J = e.memoizedProps;
            zT(e, t, J, X);
          } else {
            if (typeof X != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var te = OC(), Ne = wS(), at = ty(t);
            at ? lD(t) && nd(t) : t.stateNode = Kk(X, te, Ne, t);
          }
          return Nr(t), null;
        }
        case V: {
          Xf(t);
          var Ke = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Mt = w_(e, t, Ke);
            if (!Mt)
              return t.flags & tr ? t : null;
          }
          if ((t.flags & pt) !== rt)
            return t.lanes = a, (t.mode & vt) !== Ge && nb(t), t;
          var kt = Ke !== null, Y = e !== null && e.memoizedState !== null;
          if (kt !== Y && kt) {
            var ne = t.child;
            if (ne.flags |= So, (t.mode & qe) !== Ge) {
              var G = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !se);
              G || OS(eo.current, MC) ? kM() : Kb();
            }
          }
          var ge = t.updateQueue;
          if (ge !== null && (t.flags |= bt), Nr(t), (t.mode & vt) !== Ge && kt) {
            var Pe = t.child;
            Pe !== null && (t.treeBaseDuration -= Pe.treeBaseDuration);
          }
          return null;
        }
        case N:
          return qf(t), Nb(e, t), e === null && HO(t.stateNode.containerInfo), Nr(t), null;
        case ue:
          var Le = t.type._context;
          return gS(Le, t), Nr(t), null;
        case Fe: {
          var dt = t.type;
          return Mo(dt) && qm(t), Nr(t), null;
        }
        case oe: {
          Xf(t);
          var yt = t.memoizedState;
          if (yt === null)
            return Nr(t), null;
          var qt = (t.flags & pt) !== rt, Lt = yt.rendering;
          if (Lt === null)
            if (qt)
              Sv(yt, !1);
            else {
              var qn = DM() && (e === null || (e.flags & pt) === rt);
              if (!qn)
                for (var zt = t.child; zt !== null; ) {
                  var jn = yy(zt);
                  if (jn !== null) {
                    qt = !0, t.flags |= pt, Sv(yt, !1);
                    var na = jn.updateQueue;
                    return na !== null && (t.updateQueue = na, t.flags |= bt), t.subtreeFlags = rt, yD(t, a), ju(t, DS(eo.current, ov)), t.child;
                  }
                  zt = zt.sibling;
                }
              yt.tail !== null && bn() > rx() && (t.flags |= pt, qt = !0, Sv(yt, !1), t.lanes = em);
            }
          else {
            if (!qt) {
              var Pr = yy(Lt);
              if (Pr !== null) {
                t.flags |= pt, qt = !0;
                var ui = Pr.updateQueue;
                if (ui !== null && (t.updateQueue = ui, t.flags |= bt), Sv(yt, !0), yt.tail === null && yt.tailMode === "hidden" && !Lt.alternate && !_r())
                  return Nr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              bn() * 2 - yt.renderingStartTime > rx() && a !== xr && (t.flags |= pt, qt = !0, Sv(yt, !1), t.lanes = em);
            }
            if (yt.isBackwards)
              Lt.sibling = t.child, t.child = Lt;
            else {
              var Ca = yt.last;
              Ca !== null ? Ca.sibling = Lt : t.child = Lt, yt.last = Lt;
            }
          }
          if (yt.tail !== null) {
            var Ta = yt.tail;
            yt.rendering = Ta, yt.tail = Ta.sibling, yt.renderingStartTime = bn(), Ta.sibling = null;
            var ra = eo.current;
            return qt ? ra = DS(ra, ov) : ra = Kf(ra), ju(t, ra), Ta;
          }
          return Nr(t), null;
        }
        case Te:
          break;
        case ve:
        case Se: {
          qb(t);
          var Ll = t.memoizedState, cd = Ll !== null;
          if (e !== null) {
            var zv = e.memoizedState, jo = zv !== null;
            jo !== cd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !W && (t.flags |= So);
          }
          return !cd || (t.mode & qe) === Ge ? Nr(t) : Xr($o, xr) && (Nr(t), t.subtreeFlags & (ln | bt) && (t.flags |= So)), null;
        }
        case _e:
          return null;
        case Ce:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function k_(e, t, a) {
      switch (aS(t), t.tag) {
        case D: {
          var i = t.type;
          Mo(i) && qm(t);
          var u = t.flags;
          return u & tr ? (t.flags = u & ~tr | pt, (t.mode & vt) !== Ge && nb(t), t) : null;
        }
        case _: {
          t.stateNode, qf(t), eS(t), MS();
          var d = t.flags;
          return (d & tr) !== rt && (d & pt) === rt ? (t.flags = d & ~tr | pt, t) : null;
        }
        case P:
          return kS(t), null;
        case V: {
          Xf(t);
          var h = t.memoizedState;
          if (h !== null && h.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Wf();
          }
          var b = t.flags;
          return b & tr ? (t.flags = b & ~tr | pt, (t.mode & vt) !== Ge && nb(t), t) : null;
        }
        case oe:
          return Xf(t), null;
        case N:
          return qf(t), null;
        case ue:
          var E = t.type._context;
          return gS(E, t), null;
        case ve:
        case Se:
          return qb(t), null;
        case _e:
          return null;
        default:
          return null;
      }
    }
    function PT(e, t, a) {
      switch (aS(t), t.tag) {
        case D: {
          var i = t.type.childContextTypes;
          i != null && qm(t);
          break;
        }
        case _: {
          t.stateNode, qf(t), eS(t), MS();
          break;
        }
        case P: {
          kS(t);
          break;
        }
        case N:
          qf(t);
          break;
        case V:
          Xf(t);
          break;
        case oe:
          Xf(t);
          break;
        case ue:
          var u = t.type._context;
          gS(u, t);
          break;
        case ve:
        case Se:
          qb(t);
          break;
      }
    }
    var $T = null;
    $T = /* @__PURE__ */ new Set();
    var By = !1, Ar = !1, O_ = typeof WeakSet == "function" ? WeakSet : Set, We = null, rd = null, ad = null;
    function D_(e) {
      il(null, function() {
        throw e;
      }), np();
    }
    var __ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & vt)
        try {
          Uo(), t.componentWillUnmount();
        } finally {
          zo(e);
        }
      else
        t.componentWillUnmount();
    };
    function jT(e, t) {
      try {
        Vu(pr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function Ab(e, t, a) {
      try {
        __(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function M_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function FT(e, t) {
      try {
        VT(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function id(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ve && Je && e.mode & vt)
              try {
                Uo(), i = a(null);
              } finally {
                zo(e);
              }
            else
              i = a(null);
          } catch (u) {
            cn(e, t, u);
          }
          typeof i == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", gt(e));
        } else
          a.current = null;
    }
    function Vy(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var BT = !1;
    function N_(e, t) {
      Ik(e.containerInfo), We = t, A_();
      var a = BT;
      return BT = !1, a;
    }
    function A_() {
      for (; We !== null; ) {
        var e = We, t = e.child;
        (e.subtreeFlags & tu) !== rt && t !== null ? (t.return = e, We = t) : L_();
      }
    }
    function L_() {
      for (; We !== null; ) {
        var e = We;
        Gt(e);
        try {
          z_(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        Hn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, We = t;
          return;
        }
        We = e.return;
      }
    }
    function z_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Da) !== rt) {
        switch (Gt(e), e.tag) {
          case w:
          case q:
          case re:
            break;
          case D: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !rc && (d.props !== e.memoizedProps && m("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(e) || "instance"), d.state !== e.memoizedState && m("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(e) || "instance"));
              var h = d.getSnapshotBeforeUpdate(e.elementType === e.type ? i : no(e.type, i), u);
              {
                var b = $T;
                h === void 0 && !b.has(e.type) && (b.add(e.type), m("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", gt(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = h;
            }
            break;
          }
          case _: {
            {
              var E = e.stateNode;
              hO(E.containerInfo);
            }
            break;
          }
          case P:
          case H:
          case N:
          case Fe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Hn();
      }
    }
    function ao(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var d = u.next, h = d;
        do {
          if ((h.tag & e) === e) {
            var b = h.destroy;
            h.destroy = void 0, b !== void 0 && ((e & Mr) !== Ha ? Xh(t) : (e & pr) !== Ha && ii(t), (e & No) !== Ha && Nv(!0), Vy(t, a, b), (e & No) !== Ha && Nv(!1), (e & Mr) !== Ha ? Ic() : (e & pr) !== Ha && iu());
          }
          h = h.next;
        } while (h !== d);
      }
    }
    function Vu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, d = u;
        do {
          if ((d.tag & e) === e) {
            (e & Mr) !== Ha ? Co(t) : (e & pr) !== Ha && Zh(t);
            var h = d.create;
            (e & No) !== Ha && Nv(!0), d.destroy = h(), (e & No) !== Ha && Nv(!1), (e & Mr) !== Ha ? Hc() : (e & pr) !== Ha && Ts();
            {
              var b = d.destroy;
              if (b !== void 0 && typeof b != "function") {
                var E = void 0;
                (d.tag & pr) !== rt ? E = "useLayoutEffect" : (d.tag & No) !== rt ? E = "useInsertionEffect" : E = "useEffect";
                var R = void 0;
                b === null ? R = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof b.then == "function" ? R = `

It looks like you wrote ` + E + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + E + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : R = " You returned: " + b, m("%s must not return anything besides a function, which is used for clean-up.%s", E, R);
              }
            }
          }
          d = d.next;
        } while (d !== u);
      }
    }
    function U_(e, t) {
      if ((t.flags & bt) !== rt)
        switch (t.tag) {
          case K: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, d = i.onPostCommit, h = rT(), b = t.alternate === null ? "mount" : "update";
            nT() && (b = "nested-update"), typeof d == "function" && d(u, b, a, h);
            var E = t.return;
            e: for (; E !== null; ) {
              switch (E.tag) {
                case _:
                  var R = E.stateNode;
                  R.passiveEffectDuration += a;
                  break e;
                case K:
                  var O = E.stateNode;
                  O.passiveEffectDuration += a;
                  break e;
              }
              E = E.return;
            }
            break;
          }
        }
    }
    function P_(e, t, a, i) {
      if ((a.flags & Cr) !== rt)
        switch (a.tag) {
          case w:
          case q:
          case re: {
            if (!Ar)
              if (a.mode & vt)
                try {
                  Uo(), Vu(pr | dr, a);
                } finally {
                  zo(a);
                }
              else
                Vu(pr | dr, a);
            break;
          }
          case D: {
            var u = a.stateNode;
            if (a.flags & bt && !Ar)
              if (t === null)
                if (a.type === a.elementType && !rc && (u.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), u.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & vt)
                  try {
                    Uo(), u.componentDidMount();
                  } finally {
                    zo(a);
                  }
                else
                  u.componentDidMount();
              else {
                var d = a.elementType === a.type ? t.memoizedProps : no(a.type, t.memoizedProps), h = t.memoizedState;
                if (a.type === a.elementType && !rc && (u.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), u.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & vt)
                  try {
                    Uo(), u.componentDidUpdate(d, h, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    zo(a);
                  }
                else
                  u.componentDidUpdate(d, h, u.__reactInternalSnapshotBeforeUpdate);
              }
            var b = a.updateQueue;
            b !== null && (a.type === a.elementType && !rc && (u.props !== a.memoizedProps && m("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), u.state !== a.memoizedState && m("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), kC(a, b, u));
            break;
          }
          case _: {
            var E = a.updateQueue;
            if (E !== null) {
              var R = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case P:
                    R = a.child.stateNode;
                    break;
                  case D:
                    R = a.child.stateNode;
                    break;
                }
              kC(a, E, R);
            }
            break;
          }
          case P: {
            var O = a.stateNode;
            if (t === null && a.flags & bt) {
              var B = a.type, j = a.memoizedProps;
              tO(O, B, j);
            }
            break;
          }
          case H:
            break;
          case N:
            break;
          case K: {
            {
              var X = a.memoizedProps, J = X.onCommit, te = X.onRender, Ne = a.stateNode.effectDuration, at = rT(), Ke = t === null ? "mount" : "update";
              nT() && (Ke = "nested-update"), typeof te == "function" && te(a.memoizedProps.id, Ke, a.actualDuration, a.treeBaseDuration, a.actualStartTime, at);
              {
                typeof J == "function" && J(a.memoizedProps.id, Ke, Ne, at), LM(a);
                var Mt = a.return;
                e: for (; Mt !== null; ) {
                  switch (Mt.tag) {
                    case _:
                      var kt = Mt.stateNode;
                      kt.effectDuration += Ne;
                      break e;
                    case K:
                      var Y = Mt.stateNode;
                      Y.effectDuration += Ne;
                      break e;
                  }
                  Mt = Mt.return;
                }
              }
            }
            break;
          }
          case V: {
            W_(e, a);
            break;
          }
          case oe:
          case Fe:
          case Te:
          case ve:
          case Se:
          case Ce:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ar || a.flags & Hr && VT(a);
    }
    function $_(e) {
      switch (e.tag) {
        case w:
        case q:
        case re: {
          if (e.mode & vt)
            try {
              Uo(), jT(e, e.return);
            } finally {
              zo(e);
            }
          else
            jT(e, e.return);
          break;
        }
        case D: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && M_(e, e.return, t), FT(e, e.return);
          break;
        }
        case P: {
          FT(e, e.return);
          break;
        }
      }
    }
    function j_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === P) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? fO(u) : pO(i.stateNode, i.memoizedProps);
            } catch (h) {
              cn(e, e.return, h);
            }
          }
        } else if (i.tag === H) {
          if (a === null)
            try {
              var d = i.stateNode;
              t ? dO(d) : vO(d, i.memoizedProps);
            } catch (h) {
              cn(e, e.return, h);
            }
        } else if (!((i.tag === ve || i.tag === Se) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function VT(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case P:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & vt)
            try {
              Uo(), u = t(i);
            } finally {
              zo(e);
            }
          else
            u = t(i);
          typeof u == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", gt(e));
        } else
          t.hasOwnProperty("current") || m("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", gt(e)), t.current = i;
      }
    }
    function F_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function HT(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, HT(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === P) {
          var a = e.stateNode;
          a !== null && YO(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function B_(e) {
      for (var t = e.return; t !== null; ) {
        if (IT(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function IT(e) {
      return e.tag === P || e.tag === _ || e.tag === N;
    }
    function WT(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || IT(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== P && t.tag !== H && t.tag !== k; ) {
          if (t.flags & ln || t.child === null || t.tag === N)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & ln))
          return t.stateNode;
      }
    }
    function V_(e) {
      var t = B_(e);
      switch (t.tag) {
        case P: {
          var a = t.stateNode;
          t.flags & jt && (GE(a), t.flags &= ~jt);
          var i = WT(e);
          zb(e, i, a);
          break;
        }
        case _:
        case N: {
          var u = t.stateNode.containerInfo, d = WT(e);
          Lb(e, d, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function Lb(e, t, a) {
      var i = e.tag, u = i === P || i === H;
      if (u) {
        var d = e.stateNode;
        t ? lO(a, d, t) : iO(a, d);
      } else if (i !== N) {
        var h = e.child;
        if (h !== null) {
          Lb(h, t, a);
          for (var b = h.sibling; b !== null; )
            Lb(b, t, a), b = b.sibling;
        }
      }
    }
    function zb(e, t, a) {
      var i = e.tag, u = i === P || i === H;
      if (u) {
        var d = e.stateNode;
        t ? oO(a, d, t) : aO(a, d);
      } else if (i !== N) {
        var h = e.child;
        if (h !== null) {
          zb(h, t, a);
          for (var b = h.sibling; b !== null; )
            zb(b, t, a), b = b.sibling;
        }
      }
    }
    var Lr = null, io = !1;
    function H_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case P: {
              Lr = i.stateNode, io = !1;
              break e;
            }
            case _: {
              Lr = i.stateNode.containerInfo, io = !0;
              break e;
            }
            case N: {
              Lr = i.stateNode.containerInfo, io = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Lr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        YT(e, t, a), Lr = null, io = !1;
      }
      F_(a);
    }
    function Hu(e, t, a) {
      for (var i = a.child; i !== null; )
        YT(e, t, i), i = i.sibling;
    }
    function YT(e, t, a) {
      switch (ul(a), a.tag) {
        case P:
          Ar || id(a, t);
        case H: {
          {
            var i = Lr, u = io;
            Lr = null, Hu(e, t, a), Lr = i, io = u, Lr !== null && (io ? sO(Lr, a.stateNode) : uO(Lr, a.stateNode));
          }
          return;
        }
        case k: {
          Lr !== null && (io ? cO(Lr, a.stateNode) : Y0(Lr, a.stateNode));
          return;
        }
        case N: {
          {
            var d = Lr, h = io;
            Lr = a.stateNode.containerInfo, io = !0, Hu(e, t, a), Lr = d, io = h;
          }
          return;
        }
        case w:
        case q:
        case le:
        case re: {
          if (!Ar) {
            var b = a.updateQueue;
            if (b !== null) {
              var E = b.lastEffect;
              if (E !== null) {
                var R = E.next, O = R;
                do {
                  var B = O, j = B.destroy, X = B.tag;
                  j !== void 0 && ((X & No) !== Ha ? Vy(a, t, j) : (X & pr) !== Ha && (ii(a), a.mode & vt ? (Uo(), Vy(a, t, j), zo(a)) : Vy(a, t, j), iu())), O = O.next;
                } while (O !== R);
              }
            }
          }
          Hu(e, t, a);
          return;
        }
        case D: {
          if (!Ar) {
            id(a, t);
            var J = a.stateNode;
            typeof J.componentWillUnmount == "function" && Ab(a, t, J);
          }
          Hu(e, t, a);
          return;
        }
        case Te: {
          Hu(e, t, a);
          return;
        }
        case ve: {
          if (
            // TODO: Remove this dead flag
            a.mode & qe
          ) {
            var te = Ar;
            Ar = te || a.memoizedState !== null, Hu(e, t, a), Ar = te;
          } else
            Hu(e, t, a);
          break;
        }
        default: {
          Hu(e, t, a);
          return;
        }
      }
    }
    function I_(e) {
      e.memoizedState;
    }
    function W_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var d = u.dehydrated;
            d !== null && DO(d);
          }
        }
      }
    }
    function GT(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new O_()), t.forEach(function(i) {
          var u = BM.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ma)
              if (rd !== null && ad !== null)
                Mv(ad, rd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Y_(e, t, a) {
      rd = a, ad = e, Gt(t), QT(t, e), Gt(t), rd = null, ad = null;
    }
    function oo(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var d = i[u];
          try {
            H_(e, t, d);
          } catch (E) {
            cn(d, t, E);
          }
        }
      var h = Gg();
      if (t.subtreeFlags & Yr)
        for (var b = t.child; b !== null; )
          Gt(b), QT(b, e), b = b.sibling;
      Gt(h);
    }
    function QT(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case w:
        case q:
        case le:
        case re: {
          if (oo(t, e), Po(e), u & bt) {
            try {
              ao(No | dr, e, e.return), Vu(No | dr, e);
            } catch (dt) {
              cn(e, e.return, dt);
            }
            if (e.mode & vt) {
              try {
                Uo(), ao(pr | dr, e, e.return);
              } catch (dt) {
                cn(e, e.return, dt);
              }
              zo(e);
            } else
              try {
                ao(pr | dr, e, e.return);
              } catch (dt) {
                cn(e, e.return, dt);
              }
          }
          return;
        }
        case D: {
          oo(t, e), Po(e), u & Hr && i !== null && id(i, i.return);
          return;
        }
        case P: {
          oo(t, e), Po(e), u & Hr && i !== null && id(i, i.return);
          {
            if (e.flags & jt) {
              var d = e.stateNode;
              try {
                GE(d);
              } catch (dt) {
                cn(e, e.return, dt);
              }
            }
            if (u & bt) {
              var h = e.stateNode;
              if (h != null) {
                var b = e.memoizedProps, E = i !== null ? i.memoizedProps : b, R = e.type, O = e.updateQueue;
                if (e.updateQueue = null, O !== null)
                  try {
                    nO(h, O, R, E, b, e);
                  } catch (dt) {
                    cn(e, e.return, dt);
                  }
              }
            }
          }
          return;
        }
        case H: {
          if (oo(t, e), Po(e), u & bt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var B = e.stateNode, j = e.memoizedProps, X = i !== null ? i.memoizedProps : j;
            try {
              rO(B, X, j);
            } catch (dt) {
              cn(e, e.return, dt);
            }
          }
          return;
        }
        case _: {
          if (oo(t, e), Po(e), u & bt && i !== null) {
            var J = i.memoizedState;
            if (J.isDehydrated)
              try {
                OO(t.containerInfo);
              } catch (dt) {
                cn(e, e.return, dt);
              }
          }
          return;
        }
        case N: {
          oo(t, e), Po(e);
          return;
        }
        case V: {
          oo(t, e), Po(e);
          var te = e.child;
          if (te.flags & So) {
            var Ne = te.stateNode, at = te.memoizedState, Ke = at !== null;
            if (Ne.isHidden = Ke, Ke) {
              var Mt = te.alternate !== null && te.alternate.memoizedState !== null;
              Mt || wM();
            }
          }
          if (u & bt) {
            try {
              I_(e);
            } catch (dt) {
              cn(e, e.return, dt);
            }
            GT(e);
          }
          return;
        }
        case ve: {
          var kt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & qe
          ) {
            var Y = Ar;
            Ar = Y || kt, oo(t, e), Ar = Y;
          } else
            oo(t, e);
          if (Po(e), u & So) {
            var ne = e.stateNode, G = e.memoizedState, ge = G !== null, Pe = e;
            if (ne.isHidden = ge, ge && !kt && (Pe.mode & qe) !== Ge) {
              We = Pe;
              for (var Le = Pe.child; Le !== null; )
                We = Le, Q_(Le), Le = Le.sibling;
            }
            j_(Pe, ge);
          }
          return;
        }
        case oe: {
          oo(t, e), Po(e), u & bt && GT(e);
          return;
        }
        case Te:
          return;
        default: {
          oo(t, e), Po(e);
          return;
        }
      }
    }
    function Po(e) {
      var t = e.flags;
      if (t & ln) {
        try {
          V_(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= ~ln;
      }
      t & _a && (e.flags &= ~_a);
    }
    function G_(e, t, a) {
      rd = a, ad = t, We = e, qT(e, t, a), rd = null, ad = null;
    }
    function qT(e, t, a) {
      for (var i = (e.mode & qe) !== Ge; We !== null; ) {
        var u = We, d = u.child;
        if (u.tag === ve && i) {
          var h = u.memoizedState !== null, b = h || By;
          if (b) {
            Ub(e, t, a);
            continue;
          } else {
            var E = u.alternate, R = E !== null && E.memoizedState !== null, O = R || Ar, B = By, j = Ar;
            By = b, Ar = O, Ar && !j && (We = u, q_(u));
            for (var X = d; X !== null; )
              We = X, qT(
                X,
                // New root; bubble back up to here and stop.
                t,
                a
              ), X = X.sibling;
            We = u, By = B, Ar = j, Ub(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Cr) !== rt && d !== null ? (d.return = u, We = d) : Ub(e, t, a);
      }
    }
    function Ub(e, t, a) {
      for (; We !== null; ) {
        var i = We;
        if ((i.flags & Cr) !== rt) {
          var u = i.alternate;
          Gt(i);
          try {
            P_(t, u, i, a);
          } catch (h) {
            cn(i, i.return, h);
          }
          Hn();
        }
        if (i === e) {
          We = null;
          return;
        }
        var d = i.sibling;
        if (d !== null) {
          d.return = i.return, We = d;
          return;
        }
        We = i.return;
      }
    }
    function Q_(e) {
      for (; We !== null; ) {
        var t = We, a = t.child;
        switch (t.tag) {
          case w:
          case q:
          case le:
          case re: {
            if (t.mode & vt)
              try {
                Uo(), ao(pr, t, t.return);
              } finally {
                zo(t);
              }
            else
              ao(pr, t, t.return);
            break;
          }
          case D: {
            id(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && Ab(t, t.return, i);
            break;
          }
          case P: {
            id(t, t.return);
            break;
          }
          case ve: {
            var u = t.memoizedState !== null;
            if (u) {
              KT(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, We = a) : KT(e);
      }
    }
    function KT(e) {
      for (; We !== null; ) {
        var t = We;
        if (t === e) {
          We = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, We = a;
          return;
        }
        We = t.return;
      }
    }
    function q_(e) {
      for (; We !== null; ) {
        var t = We, a = t.child;
        if (t.tag === ve) {
          var i = t.memoizedState !== null;
          if (i) {
            XT(e);
            continue;
          }
        }
        a !== null ? (a.return = t, We = a) : XT(e);
      }
    }
    function XT(e) {
      for (; We !== null; ) {
        var t = We;
        Gt(t);
        try {
          $_(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (Hn(), t === e) {
          We = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, We = a;
          return;
        }
        We = t.return;
      }
    }
    function K_(e, t, a, i) {
      We = t, X_(t, e, a, i);
    }
    function X_(e, t, a, i) {
      for (; We !== null; ) {
        var u = We, d = u.child;
        (u.subtreeFlags & Ma) !== rt && d !== null ? (d.return = u, We = d) : Z_(e, t, a, i);
      }
    }
    function Z_(e, t, a, i) {
      for (; We !== null; ) {
        var u = We;
        if ((u.flags & hn) !== rt) {
          Gt(u);
          try {
            J_(t, u, a, i);
          } catch (h) {
            cn(u, u.return, h);
          }
          Hn();
        }
        if (u === e) {
          We = null;
          return;
        }
        var d = u.sibling;
        if (d !== null) {
          d.return = u.return, We = d;
          return;
        }
        We = u.return;
      }
    }
    function J_(e, t, a, i) {
      switch (t.tag) {
        case w:
        case q:
        case re: {
          if (t.mode & vt) {
            tb();
            try {
              Vu(Mr | dr, t);
            } finally {
              eb(t);
            }
          } else
            Vu(Mr | dr, t);
          break;
        }
      }
    }
    function eM(e) {
      We = e, tM();
    }
    function tM() {
      for (; We !== null; ) {
        var e = We, t = e.child;
        if ((We.flags & Ut) !== rt) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              We = u, aM(u, e);
            }
            {
              var d = e.alternate;
              if (d !== null) {
                var h = d.child;
                if (h !== null) {
                  d.child = null;
                  do {
                    var b = h.sibling;
                    h.sibling = null, h = b;
                  } while (h !== null);
                }
              }
            }
            We = e;
          }
        }
        (e.subtreeFlags & Ma) !== rt && t !== null ? (t.return = e, We = t) : nM();
      }
    }
    function nM() {
      for (; We !== null; ) {
        var e = We;
        (e.flags & hn) !== rt && (Gt(e), rM(e), Hn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, We = t;
          return;
        }
        We = e.return;
      }
    }
    function rM(e) {
      switch (e.tag) {
        case w:
        case q:
        case re: {
          e.mode & vt ? (tb(), ao(Mr | dr, e, e.return), eb(e)) : ao(Mr | dr, e, e.return);
          break;
        }
      }
    }
    function aM(e, t) {
      for (; We !== null; ) {
        var a = We;
        Gt(a), oM(a, t), Hn();
        var i = a.child;
        i !== null ? (i.return = a, We = i) : iM(e);
      }
    }
    function iM(e) {
      for (; We !== null; ) {
        var t = We, a = t.sibling, i = t.return;
        if (HT(t), t === e) {
          We = null;
          return;
        }
        if (a !== null) {
          a.return = i, We = a;
          return;
        }
        We = i;
      }
    }
    function oM(e, t) {
      switch (e.tag) {
        case w:
        case q:
        case re: {
          e.mode & vt ? (tb(), ao(Mr, e, t), eb(e)) : ao(Mr, e, t);
          break;
        }
      }
    }
    function lM(e) {
      switch (e.tag) {
        case w:
        case q:
        case re: {
          try {
            Vu(pr | dr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case D: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function uM(e) {
      switch (e.tag) {
        case w:
        case q:
        case re: {
          try {
            Vu(Mr | dr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function sM(e) {
      switch (e.tag) {
        case w:
        case q:
        case re: {
          try {
            ao(pr | dr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case D: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Ab(e, e.return, t);
          break;
        }
      }
    }
    function cM(e) {
      switch (e.tag) {
        case w:
        case q:
        case re:
          try {
            ao(Mr | dr, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var bv = Symbol.for;
      bv("selector.component"), bv("selector.has_pseudo_class"), bv("selector.role"), bv("selector.test_id"), bv("selector.text");
    }
    var fM = [];
    function dM() {
      fM.forEach(function(e) {
        return e();
      });
    }
    var pM = f.ReactCurrentActQueue;
    function vM(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function ZT() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && pM.current !== null && m("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var hM = Math.ceil, Pb = f.ReactCurrentDispatcher, $b = f.ReactCurrentOwner, zr = f.ReactCurrentBatchConfig, lo = f.ReactCurrentActQueue, mr = (
      /*             */
      0
    ), JT = (
      /*               */
      1
    ), Ur = (
      /*                */
      2
    ), Di = (
      /*                */
      4
    ), _l = 0, Ev = 1, ac = 2, Hy = 3, Cv = 4, ex = 5, jb = 6, _t = mr, ba = null, Ln = null, yr = fe, $o = fe, Fb = Au(fe), gr = _l, Tv = null, Iy = fe, xv = fe, Wy = fe, Rv = null, Ia = null, Bb = 0, tx = 500, nx = 1 / 0, mM = 500, Ml = null;
    function wv() {
      nx = bn() + mM;
    }
    function rx() {
      return nx;
    }
    var Yy = !1, Vb = null, od = null, ic = !1, Iu = null, kv = fe, Hb = [], Ib = null, yM = 50, Ov = 0, Wb = null, Yb = !1, Gy = !1, gM = 50, ld = 0, Qy = null, Dv = an, qy = fe, ax = !1;
    function Ky() {
      return ba;
    }
    function Ea() {
      return (_t & (Ur | Di)) !== mr ? bn() : (Dv !== an || (Dv = bn()), Dv);
    }
    function Wu(e) {
      var t = e.mode;
      if ((t & qe) === Ge)
        return Ze;
      if ((_t & Ur) !== mr && yr !== fe)
        return vu(yr);
      var a = pD() !== dD;
      if (a) {
        if (zr.transition !== null) {
          var i = zr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return qy === $n && (qy = um()), qy;
      }
      var u = Ua();
      if (u !== $n)
        return u;
      var d = Xk();
      return d;
    }
    function SM(e) {
      var t = e.mode;
      return (t & qe) === Ge ? Ze : Kr();
    }
    function Sr(e, t, a, i) {
      HM(), ax && m("useInsertionEffect must not schedule updates."), Yb && (Gy = !0), ml(e, a, i), (_t & Ur) !== fe && e === ba ? YM(t) : (ma && vf(e, t, a), GM(t), e === ba && ((_t & Ur) === mr && (xv = St(xv, a)), gr === Cv && Yu(e, yr)), Wa(e, i), a === Ze && _t === mr && (t.mode & qe) === Ge && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !lo.isBatchingLegacy && (wv(), aC()));
    }
    function bM(e, t, a) {
      var i = e.current;
      i.lanes = t, ml(e, t, a), Wa(e, a);
    }
    function EM(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (_t & Ur) !== mr
      );
    }
    function Wa(e, t) {
      var a = e.callbackNode;
      rm(e, t);
      var i = vl(e, e === ba ? yr : fe);
      if (i === fe) {
        a !== null && bx(a), e.callbackNode = null, e.callbackPriority = $n;
        return;
      }
      var u = Mn(i), d = e.callbackPriority;
      if (d === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(lo.current !== null && a !== Jb)) {
        a == null && d !== Ze && m("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && bx(a);
      var h;
      if (u === Ze)
        e.tag === Lu ? (lo.isBatchingLegacy !== null && (lo.didScheduleLegacyUpdate = !0), qO(lx.bind(null, e))) : rC(lx.bind(null, e)), lo.current !== null ? lo.current.push(zu) : Jk(function() {
          (_t & (Ur | Di)) === mr && zu();
        }), h = null;
      else {
        var b;
        switch (fr(i)) {
          case Nn:
            b = Fc;
            break;
          case Gi:
            b = ll;
            break;
          case bi:
            b = Si;
            break;
          case hu:
            b = Bc;
            break;
          default:
            b = Si;
            break;
        }
        h = e1(b, ix.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = h;
    }
    function ix(e, t) {
      if (jD(), Dv = an, qy = fe, (_t & (Ur | Di)) !== mr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Al();
      if (i && e.callbackNode !== a)
        return null;
      var u = vl(e, e === ba ? yr : fe);
      if (u === fe)
        return null;
      var d = !Ms(e, u) && !lm(e, u) && !t, h = d ? MM(e, u) : Zy(e, u);
      if (h !== _l) {
        if (h === ac) {
          var b = xo(e);
          b !== fe && (u = b, h = Gb(e, b));
        }
        if (h === Ev) {
          var E = Tv;
          throw oc(e, fe), Yu(e, u), Wa(e, bn()), E;
        }
        if (h === jb)
          Yu(e, u);
        else {
          var R = !Ms(e, u), O = e.current.alternate;
          if (R && !TM(O)) {
            if (h = Zy(e, u), h === ac) {
              var B = xo(e);
              B !== fe && (u = B, h = Gb(e, B));
            }
            if (h === Ev) {
              var j = Tv;
              throw oc(e, fe), Yu(e, u), Wa(e, bn()), j;
            }
          }
          e.finishedWork = O, e.finishedLanes = u, CM(e, h, u);
        }
      }
      return Wa(e, bn()), e.callbackNode === a ? ix.bind(null, e) : null;
    }
    function Gb(e, t) {
      var a = Rv;
      if (hf(e)) {
        var i = oc(e, t);
        i.flags |= Tn, VO(e.containerInfo);
      }
      var u = Zy(e, t);
      if (u !== ac) {
        var d = Ia;
        Ia = a, d !== null && ox(d);
      }
      return u;
    }
    function ox(e) {
      Ia === null ? Ia = e : Ia.push.apply(Ia, e);
    }
    function CM(e, t, a) {
      switch (t) {
        case _l:
        case Ev:
          throw new Error("Root did not complete. This is a bug in React.");
        case ac: {
          lc(e, Ia, Ml);
          break;
        }
        case Hy: {
          if (Yu(e, a), am(a) && // do not delay if we're inside an act() scope
          !Ex()) {
            var i = Bb + tx - bn();
            if (i > 10) {
              var u = vl(e, fe);
              if (u !== fe)
                break;
              var d = e.suspendedLanes;
              if (!hl(d, a)) {
                Ea(), df(e, d);
                break;
              }
              e.timeoutHandle = I0(lc.bind(null, e, Ia, Ml), i);
              break;
            }
          }
          lc(e, Ia, Ml);
          break;
        }
        case Cv: {
          if (Yu(e, a), om(a))
            break;
          if (!Ex()) {
            var h = tm(e, a), b = h, E = bn() - b, R = VM(E) - E;
            if (R > 10) {
              e.timeoutHandle = I0(lc.bind(null, e, Ia, Ml), R);
              break;
            }
          }
          lc(e, Ia, Ml);
          break;
        }
        case ex: {
          lc(e, Ia, Ml);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function TM(e) {
      for (var t = e; ; ) {
        if (t.flags & Es) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var d = i[u], h = d.getSnapshot, b = d.value;
                try {
                  if (!Ie(h(), b))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var E = t.child;
        if (t.subtreeFlags & Es && E !== null) {
          E.return = t, t = E;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Yu(e, t) {
      t = Ns(t, Wy), t = Ns(t, xv), cm(e, t);
    }
    function lx(e) {
      if (FD(), (_t & (Ur | Di)) !== mr)
        throw new Error("Should not already be working.");
      Al();
      var t = vl(e, fe);
      if (!Xr(t, Ze))
        return Wa(e, bn()), null;
      var a = Zy(e, t);
      if (e.tag !== Lu && a === ac) {
        var i = xo(e);
        i !== fe && (t = i, a = Gb(e, i));
      }
      if (a === Ev) {
        var u = Tv;
        throw oc(e, fe), Yu(e, t), Wa(e, bn()), u;
      }
      if (a === jb)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, lc(e, Ia, Ml), Wa(e, bn()), null;
    }
    function xM(e, t) {
      t !== fe && (Sp(e, St(t, Ze)), Wa(e, bn()), (_t & (Ur | Di)) === mr && (wv(), zu()));
    }
    function Qb(e, t) {
      var a = _t;
      _t |= JT;
      try {
        return e(t);
      } finally {
        _t = a, _t === mr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !lo.isBatchingLegacy && (wv(), aC());
      }
    }
    function RM(e, t, a, i, u) {
      var d = Ua(), h = zr.transition;
      try {
        return zr.transition = null, xn(Nn), e(t, a, i, u);
      } finally {
        xn(d), zr.transition = h, _t === mr && wv();
      }
    }
    function Nl(e) {
      Iu !== null && Iu.tag === Lu && (_t & (Ur | Di)) === mr && Al();
      var t = _t;
      _t |= JT;
      var a = zr.transition, i = Ua();
      try {
        return zr.transition = null, xn(Nn), e ? e() : void 0;
      } finally {
        xn(i), zr.transition = a, _t = t, (_t & (Ur | Di)) === mr && zu();
      }
    }
    function ux() {
      return (_t & (Ur | Di)) !== mr;
    }
    function Xy(e, t) {
      ea(Fb, $o, e), $o = St($o, t);
    }
    function qb(e) {
      $o = Fb.current, Jr(Fb, e);
    }
    function oc(e, t) {
      e.finishedWork = null, e.finishedLanes = fe;
      var a = e.timeoutHandle;
      if (a !== W0 && (e.timeoutHandle = W0, Zk(a)), Ln !== null)
        for (var i = Ln.return; i !== null; ) {
          var u = i.alternate;
          PT(u, i), i = i.return;
        }
      ba = e;
      var d = uc(e.current, null);
      return Ln = d, yr = $o = t, gr = _l, Tv = null, Iy = fe, xv = fe, Wy = fe, Rv = null, Ia = null, bD(), Ji.discardPendingWarnings(), d;
    }
    function sx(e, t) {
      do {
        var a = Ln;
        try {
          if (ly(), AC(), Hn(), $b.current = null, a === null || a.return === null) {
            gr = Ev, Tv = t, Ln = null;
            return;
          }
          if (Ve && a.mode & vt && Uy(a, !0), it)
            if (Qr(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              sl(a, i, yr);
            } else
              xs(a, t, yr);
          qD(e, a.return, a, t, yr), px(a);
        } catch (u) {
          t = u, Ln === a && a !== null ? (a = a.return, Ln = a) : a = Ln;
          continue;
        }
        return;
      } while (!0);
    }
    function cx() {
      var e = Pb.current;
      return Pb.current = My, e === null ? My : e;
    }
    function fx(e) {
      Pb.current = e;
    }
    function wM() {
      Bb = bn();
    }
    function _v(e) {
      Iy = St(e, Iy);
    }
    function kM() {
      gr === _l && (gr = Hy);
    }
    function Kb() {
      (gr === _l || gr === Hy || gr === ac) && (gr = Cv), ba !== null && (_s(Iy) || _s(xv)) && Yu(ba, yr);
    }
    function OM(e) {
      gr !== Cv && (gr = ac), Rv === null ? Rv = [e] : Rv.push(e);
    }
    function DM() {
      return gr === _l;
    }
    function Zy(e, t) {
      var a = _t;
      _t |= Ur;
      var i = cx();
      if (ba !== e || yr !== t) {
        if (ma) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Mv(e, yr), u.clear()), bp(e, t);
        }
        Ml = Ls(), oc(e, t);
      }
      mn(t);
      do
        try {
          _M();
          break;
        } catch (d) {
          sx(e, d);
        }
      while (!0);
      if (ly(), _t = a, fx(i), Ln !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Yc(), ba = null, yr = fe, gr;
    }
    function _M() {
      for (; Ln !== null; )
        dx(Ln);
    }
    function MM(e, t) {
      var a = _t;
      _t |= Ur;
      var i = cx();
      if (ba !== e || yr !== t) {
        if (ma) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Mv(e, yr), u.clear()), bp(e, t);
        }
        Ml = Ls(), wv(), oc(e, t);
      }
      mn(t);
      do
        try {
          NM();
          break;
        } catch (d) {
          sx(e, d);
        }
      while (!0);
      return ly(), fx(i), _t = a, Ln !== null ? (Wc(), _l) : (Yc(), ba = null, yr = fe, gr);
    }
    function NM() {
      for (; Ln !== null && !jc(); )
        dx(Ln);
    }
    function dx(e) {
      var t = e.alternate;
      Gt(e);
      var a;
      (e.mode & vt) !== Ge ? (JS(e), a = Xb(t, e, $o), Uy(e, !0)) : a = Xb(t, e, $o), Hn(), e.memoizedProps = e.pendingProps, a === null ? px(e) : Ln = a, $b.current = null;
    }
    function px(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & pa) === rt) {
          Gt(t);
          var u = void 0;
          if ((t.mode & vt) === Ge ? u = UT(a, t, $o) : (JS(t), u = UT(a, t, $o), Uy(t, !1)), Hn(), u !== null) {
            Ln = u;
            return;
          }
        } else {
          var d = k_(a, t);
          if (d !== null) {
            d.flags &= Ih, Ln = d;
            return;
          }
          if ((t.mode & vt) !== Ge) {
            Uy(t, !1);
            for (var h = t.actualDuration, b = t.child; b !== null; )
              h += b.actualDuration, b = b.sibling;
            t.actualDuration = h;
          }
          if (i !== null)
            i.flags |= pa, i.subtreeFlags = rt, i.deletions = null;
          else {
            gr = jb, Ln = null;
            return;
          }
        }
        var E = t.sibling;
        if (E !== null) {
          Ln = E;
          return;
        }
        t = i, Ln = t;
      } while (t !== null);
      gr === _l && (gr = ex);
    }
    function lc(e, t, a) {
      var i = Ua(), u = zr.transition;
      try {
        zr.transition = null, xn(Nn), AM(e, t, a, i);
      } finally {
        zr.transition = u, xn(i);
      }
      return null;
    }
    function AM(e, t, a, i) {
      do
        Al();
      while (Iu !== null);
      if (IM(), (_t & (Ur | Di)) !== mr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, d = e.finishedLanes;
      if (Eo(d), u === null)
        return Vc(), null;
      if (d === fe && m("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = fe, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = $n;
      var h = St(u.lanes, u.childLanes);
      pf(e, h), e === ba && (ba = null, Ln = null, yr = fe), ((u.subtreeFlags & Ma) !== rt || (u.flags & Ma) !== rt) && (ic || (ic = !0, Ib = a, e1(Si, function() {
        return Al(), null;
      })));
      var b = (u.subtreeFlags & (tu | Yr | Cr | Ma)) !== rt, E = (u.flags & (tu | Yr | Cr | Ma)) !== rt;
      if (b || E) {
        var R = zr.transition;
        zr.transition = null;
        var O = Ua();
        xn(Nn);
        var B = _t;
        _t |= Di, $b.current = null, N_(e, u), aT(), Y_(e, u, d), Wk(e.containerInfo), e.current = u, fp(d), G_(u, e, d), ou(), Gh(), _t = B, xn(O), zr.transition = R;
      } else
        e.current = u, aT();
      var j = ic;
      if (ic ? (ic = !1, Iu = e, kv = d) : (ld = 0, Qy = null), h = e.pendingLanes, h === fe && (od = null), j || yx(e.current, !1), ru(u.stateNode, i), ma && e.memoizedUpdaters.clear(), dM(), Wa(e, bn()), t !== null)
        for (var X = e.onRecoverableError, J = 0; J < t.length; J++) {
          var te = t[J], Ne = te.stack, at = te.digest;
          X(te.value, {
            componentStack: Ne,
            digest: at
          });
        }
      if (Yy) {
        Yy = !1;
        var Ke = Vb;
        throw Vb = null, Ke;
      }
      return Xr(kv, Ze) && e.tag !== Lu && Al(), h = e.pendingLanes, Xr(h, Ze) ? ($D(), e === Wb ? Ov++ : (Ov = 0, Wb = e)) : Ov = 0, zu(), Vc(), null;
    }
    function Al() {
      if (Iu !== null) {
        var e = fr(kv), t = h0(bi, e), a = zr.transition, i = Ua();
        try {
          return zr.transition = null, xn(t), zM();
        } finally {
          xn(i), zr.transition = a;
        }
      }
      return !1;
    }
    function LM(e) {
      Hb.push(e), ic || (ic = !0, e1(Si, function() {
        return Al(), null;
      }));
    }
    function zM() {
      if (Iu === null)
        return !1;
      var e = Ib;
      Ib = null;
      var t = Iu, a = kv;
      if (Iu = null, kv = fe, (_t & (Ur | Di)) !== mr)
        throw new Error("Cannot flush passive effects while already rendering.");
      Yb = !0, Gy = !1, Jh(a);
      var i = _t;
      _t |= Di, eM(t.current), K_(t, t.current, a, e);
      {
        var u = Hb;
        Hb = [];
        for (var d = 0; d < u.length; d++) {
          var h = u[d];
          U_(t, h);
        }
      }
      dp(), yx(t.current, !0), _t = i, zu(), Gy ? t === Qy ? ld++ : (ld = 0, Qy = t) : ld = 0, Yb = !1, Gy = !1, La(t);
      {
        var b = t.current.stateNode;
        b.effectDuration = 0, b.passiveEffectDuration = 0;
      }
      return !0;
    }
    function vx(e) {
      return od !== null && od.has(e);
    }
    function UM(e) {
      od === null ? od = /* @__PURE__ */ new Set([e]) : od.add(e);
    }
    function PM(e) {
      Yy || (Yy = !0, Vb = e);
    }
    var $M = PM;
    function hx(e, t, a) {
      var i = nc(a, t), u = dT(e, i, Ze), d = Pu(e, u, Ze), h = Ea();
      d !== null && (ml(d, Ze, h), Wa(d, h));
    }
    function cn(e, t, a) {
      if (D_(a), Nv(!1), e.tag === _) {
        hx(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === _) {
          hx(i, e, a);
          return;
        } else if (i.tag === D) {
          var u = i.type, d = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !vx(d)) {
            var h = nc(a, e), b = yb(i, h, Ze), E = Pu(i, b, Ze), R = Ea();
            E !== null && (ml(E, Ze, R), Wa(E, R));
            return;
          }
        }
        i = i.return;
      }
      m(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function jM(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ea();
      df(e, a), QM(e), ba === e && hl(yr, a) && (gr === Cv || gr === Hy && am(yr) && bn() - Bb < tx ? oc(e, fe) : Wy = St(Wy, a)), Wa(e, u);
    }
    function mx(e, t) {
      t === $n && (t = SM(e));
      var a = Ea(), i = Va(e, t);
      i !== null && (ml(i, t, a), Wa(i, a));
    }
    function FM(e) {
      var t = e.memoizedState, a = $n;
      t !== null && (a = t.retryLane), mx(e, a);
    }
    function BM(e, t) {
      var a = $n, i;
      switch (e.tag) {
        case V:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case oe:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), mx(e, a);
    }
    function VM(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : hM(e / 1960) * 1960;
    }
    function HM() {
      if (Ov > yM)
        throw Ov = 0, Wb = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ld > gM && (ld = 0, Qy = null, m("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function IM() {
      Ji.flushLegacyContextWarning(), Ji.flushPendingUnsafeLifecycleWarnings();
    }
    function yx(e, t) {
      Gt(e), Jy(e, Wr, sM), t && Jy(e, ol, cM), Jy(e, Wr, lM), t && Jy(e, ol, uM), Hn();
    }
    function Jy(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var d = i.subtreeFlags & t;
        i !== u && i.child !== null && d !== rt ? i = i.child : ((i.flags & t) !== rt && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var eg = null;
    function gx(e) {
      {
        if ((_t & Ur) !== mr || !(e.mode & qe))
          return;
        var t = e.tag;
        if (t !== A && t !== _ && t !== D && t !== w && t !== q && t !== le && t !== re)
          return;
        var a = gt(e) || "ReactComponent";
        if (eg !== null) {
          if (eg.has(a))
            return;
          eg.add(a);
        } else
          eg = /* @__PURE__ */ new Set([a]);
        var i = zn;
        try {
          Gt(e), m("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Gt(e) : Hn();
        }
      }
    }
    var Xb;
    {
      var WM = null;
      Xb = function(e, t, a) {
        var i = wx(WM, t);
        try {
          return MT(e, t, a);
        } catch (d) {
          if (rD() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (ly(), AC(), PT(e, t), wx(t, i), t.mode & vt && JS(t), il(null, MT, null, e, t, a), c0()) {
            var u = np();
            typeof u == "object" && u !== null && u._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var Sx = !1, Zb;
    Zb = /* @__PURE__ */ new Set();
    function YM(e) {
      if (Ra && !zD())
        switch (e.tag) {
          case w:
          case q:
          case re: {
            var t = Ln && gt(Ln) || "Unknown", a = t;
            if (!Zb.has(a)) {
              Zb.add(a);
              var i = gt(e) || "Unknown";
              m("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case D: {
            Sx || (m("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Sx = !0);
            break;
          }
        }
    }
    function Mv(e, t) {
      if (ma) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          vf(e, i, t);
        });
      }
    }
    var Jb = {};
    function e1(e, t) {
      {
        var a = lo.current;
        return a !== null ? (a.push(t), Jb) : $c(e, t);
      }
    }
    function bx(e) {
      if (e !== Jb)
        return Yh(e);
    }
    function Ex() {
      return lo.current !== null;
    }
    function GM(e) {
      {
        if (e.mode & qe) {
          if (!ZT())
            return;
        } else if (!vM() || _t !== mr || e.tag !== w && e.tag !== q && e.tag !== re)
          return;
        if (lo.current === null) {
          var t = zn;
          try {
            Gt(e), m(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, gt(e));
          } finally {
            t ? Gt(e) : Hn();
          }
        }
      }
    }
    function QM(e) {
      e.tag !== Lu && ZT() && lo.current === null && m(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Nv(e) {
      ax = e;
    }
    var _i = null, ud = null, qM = function(e) {
      _i = e;
    };
    function sd(e) {
      {
        if (_i === null)
          return e;
        var t = _i(e);
        return t === void 0 ? e : t.current;
      }
    }
    function t1(e) {
      return sd(e);
    }
    function n1(e) {
      {
        if (_i === null)
          return e;
        var t = _i(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = sd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Re,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function Cx(e, t) {
      {
        if (_i === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, d = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case D: {
            typeof i == "function" && (u = !0);
            break;
          }
          case w: {
            (typeof i == "function" || d === ft) && (u = !0);
            break;
          }
          case q: {
            (d === Re || d === ft) && (u = !0);
            break;
          }
          case le:
          case re: {
            (d === Nt || d === ft) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var h = _i(a);
          if (h !== void 0 && h === _i(i))
            return !0;
        }
        return !1;
      }
    }
    function Tx(e) {
      {
        if (_i === null || typeof WeakSet != "function")
          return;
        ud === null && (ud = /* @__PURE__ */ new WeakSet()), ud.add(e);
      }
    }
    var KM = function(e, t) {
      {
        if (_i === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Al(), Nl(function() {
          r1(e.current, i, a);
        });
      }
    }, XM = function(e, t) {
      {
        if (e.context !== oi)
          return;
        Al(), Nl(function() {
          Av(t, e, null, null);
        });
      }
    };
    function r1(e, t, a) {
      {
        var i = e.alternate, u = e.child, d = e.sibling, h = e.tag, b = e.type, E = null;
        switch (h) {
          case w:
          case re:
          case D:
            E = b;
            break;
          case q:
            E = b.render;
            break;
        }
        if (_i === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var R = !1, O = !1;
        if (E !== null) {
          var B = _i(E);
          B !== void 0 && (a.has(B) ? O = !0 : t.has(B) && (h === D ? O = !0 : R = !0));
        }
        if (ud !== null && (ud.has(e) || i !== null && ud.has(i)) && (O = !0), O && (e._debugNeedsRemount = !0), O || R) {
          var j = Va(e, Ze);
          j !== null && Sr(j, e, Ze, an);
        }
        u !== null && !O && r1(u, t, a), d !== null && r1(d, t, a);
      }
    }
    var ZM = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return a1(e.current, i, a), a;
      }
    };
    function a1(e, t, a) {
      {
        var i = e.child, u = e.sibling, d = e.tag, h = e.type, b = null;
        switch (d) {
          case w:
          case re:
          case D:
            b = h;
            break;
          case q:
            b = h.render;
            break;
        }
        var E = !1;
        b !== null && t.has(b) && (E = !0), E ? JM(e, a) : i !== null && a1(i, t, a), u !== null && a1(u, t, a);
      }
    }
    function JM(e, t) {
      {
        var a = eN(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case P:
              t.add(i.stateNode);
              return;
            case N:
              t.add(i.stateNode.containerInfo);
              return;
            case _:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function eN(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === P)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var i1;
    {
      i1 = !1;
      try {
        var xx = Object.preventExtensions({});
      } catch {
        i1 = !0;
      }
    }
    function tN(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = rt, this.subtreeFlags = rt, this.deletions = null, this.lanes = fe, this.childLanes = fe, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !i1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var li = function(e, t, a, i) {
      return new tN(e, t, a, i);
    };
    function o1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function nN(e) {
      return typeof e == "function" && !o1(e) && e.defaultProps === void 0;
    }
    function rN(e) {
      if (typeof e == "function")
        return o1(e) ? D : w;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Re)
          return q;
        if (t === Nt)
          return le;
      }
      return A;
    }
    function uc(e, t) {
      var a = e.alternate;
      a === null ? (a = li(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = rt, a.subtreeFlags = rt, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & sr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case A:
        case w:
        case re:
          a.type = sd(e.type);
          break;
        case D:
          a.type = t1(e.type);
          break;
        case q:
          a.type = n1(e.type);
          break;
      }
      return a;
    }
    function aN(e, t) {
      e.flags &= sr | ln;
      var a = e.alternate;
      if (a === null)
        e.childLanes = fe, e.lanes = t, e.child = null, e.subtreeFlags = rt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = rt, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function iN(e, t, a) {
      var i;
      return e === Xm ? (i = qe, t === !0 && (i |= xt, i |= ya)) : i = Ge, ma && (i |= vt), li(_, null, null, i);
    }
    function l1(e, t, a, i, u, d) {
      var h = A, b = e;
      if (typeof e == "function")
        o1(e) ? (h = D, b = t1(b)) : b = sd(b);
      else if (typeof e == "string")
        h = P;
      else
        e: switch (e) {
          case Za:
            return Gu(a.children, u, d, t);
          case so:
            h = U, u |= xt, (u & qe) !== Ge && (u |= ya);
            break;
          case qo:
            return oN(a, u, d, t);
          case Xe:
            return lN(a, u, d, t);
          case Ot:
            return uN(a, u, d, t);
          case on:
            return Rx(a, u, d, t);
          case Sn:
          case Ct:
          case Br:
          case co:
          case Zn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case L:
                  h = ue;
                  break e;
                case he:
                  h = ee;
                  break e;
                case Re:
                  h = q, b = n1(b);
                  break e;
                case Nt:
                  h = le;
                  break e;
                case ft:
                  h = je, b = null;
                  break e;
              }
            var E = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var R = i ? gt(i) : null;
              R && (E += `

Check the render method of \`` + R + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + E));
          }
        }
      var O = li(h, a, t, u);
      return O.elementType = e, O.type = b, O.lanes = d, O._debugOwner = i, O;
    }
    function u1(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, d = e.key, h = e.props, b = l1(u, d, h, i, t, a);
      return b._debugSource = e._source, b._debugOwner = e._owner, b;
    }
    function Gu(e, t, a, i) {
      var u = li($, e, i, t);
      return u.lanes = a, u;
    }
    function oN(e, t, a, i) {
      typeof e.id != "string" && m('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = li(K, e, i, t | vt);
      return u.elementType = qo, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function lN(e, t, a, i) {
      var u = li(V, e, i, t);
      return u.elementType = Xe, u.lanes = a, u;
    }
    function uN(e, t, a, i) {
      var u = li(oe, e, i, t);
      return u.elementType = Ot, u.lanes = a, u;
    }
    function Rx(e, t, a, i) {
      var u = li(ve, e, i, t);
      u.elementType = on, u.lanes = a;
      var d = {
        isHidden: !1
      };
      return u.stateNode = d, u;
    }
    function s1(e, t, a) {
      var i = li(H, e, null, t);
      return i.lanes = a, i;
    }
    function sN() {
      var e = li(P, null, null, Ge);
      return e.elementType = "DELETED", e;
    }
    function cN(e) {
      var t = li(k, null, null, Ge);
      return t.stateNode = e, t;
    }
    function c1(e, t, a) {
      var i = e.children !== null ? e.children : [], u = li(N, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function wx(e, t) {
      return e === null && (e = li(A, null, null, Ge)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function fN(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = W0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = $n, this.eventTimes = As(fe), this.expirationTimes = As(an), this.pendingLanes = fe, this.suspendedLanes = fe, this.pingedLanes = fe, this.expiredLanes = fe, this.mutableReadLanes = fe, this.finishedLanes = fe, this.entangledLanes = fe, this.entanglements = As(fe), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], h = 0; h < ks; h++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Xm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function kx(e, t, a, i, u, d, h, b, E, R) {
      var O = new fN(e, t, a, b, E), B = iN(t, d);
      O.current = B, B.stateNode = O;
      {
        var j = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        B.memoizedState = j;
      }
      return TS(B), O;
    }
    var f1 = "18.3.1";
    function dN(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return ur(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ca,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var d1, p1;
    d1 = !1, p1 = {};
    function Ox(e) {
      if (!e)
        return oi;
      var t = Oa(e), a = QO(t);
      if (t.tag === D) {
        var i = t.type;
        if (Mo(i))
          return tC(t, i, a);
      }
      return a;
    }
    function pN(e, t) {
      {
        var a = Oa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Na(a);
        if (u === null)
          return null;
        if (u.mode & xt) {
          var d = gt(a) || "Component";
          if (!p1[d]) {
            p1[d] = !0;
            var h = zn;
            try {
              Gt(u), a.mode & xt ? m("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : m("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              h ? Gt(h) : Hn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function Dx(e, t, a, i, u, d, h, b) {
      var E = !1, R = null;
      return kx(e, t, E, R, a, i, u, d, h);
    }
    function _x(e, t, a, i, u, d, h, b, E, R) {
      var O = !0, B = kx(a, i, O, e, u, d, h, b, E);
      B.context = Ox(null);
      var j = B.current, X = Ea(), J = Wu(j), te = Ol(X, J);
      return te.callback = t ?? null, Pu(j, te, J), bM(B, J, X), B;
    }
    function Av(e, t, a, i) {
      cp(t, e);
      var u = t.current, d = Ea(), h = Wu(u);
      pp(h);
      var b = Ox(a);
      t.context === null ? t.context = b : t.pendingContext = b, Ra && zn !== null && !d1 && (d1 = !0, m(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, gt(zn) || "Unknown"));
      var E = Ol(d, h);
      E.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && m("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), E.callback = i);
      var R = Pu(u, E, h);
      return R !== null && (Sr(R, u, h, d), dy(R, u, h)), h;
    }
    function tg(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case P:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function vN(e) {
      switch (e.tag) {
        case _: {
          var t = e.stateNode;
          if (hf(t)) {
            var a = mp(t);
            xM(t, a);
          }
          break;
        }
        case V: {
          Nl(function() {
            var u = Va(e, Ze);
            if (u !== null) {
              var d = Ea();
              Sr(u, e, Ze, d);
            }
          });
          var i = Ze;
          v1(e, i);
          break;
        }
      }
    }
    function Mx(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = sm(a.retryLane, t));
    }
    function v1(e, t) {
      Mx(e, t);
      var a = e.alternate;
      a && Mx(a, t);
    }
    function hN(e) {
      if (e.tag === V) {
        var t = Ds, a = Va(e, t);
        if (a !== null) {
          var i = Ea();
          Sr(a, e, t, i);
        }
        v1(e, t);
      }
    }
    function mN(e) {
      if (e.tag === V) {
        var t = Wu(e), a = Va(e, t);
        if (a !== null) {
          var i = Ea();
          Sr(a, e, t, i);
        }
        v1(e, t);
      }
    }
    function Nx(e) {
      var t = Wh(e);
      return t === null ? null : t.stateNode;
    }
    var Ax = function(e) {
      return null;
    };
    function yN(e) {
      return Ax(e);
    }
    var Lx = function(e) {
      return !1;
    };
    function gN(e) {
      return Lx(e);
    }
    var zx = null, Ux = null, Px = null, $x = null, jx = null, Fx = null, Bx = null, Vx = null, Hx = null;
    {
      var Ix = function(e, t, a) {
        var i = t[a], u = Jn(e) ? e.slice() : Tt({}, e);
        return a + 1 === t.length ? (Jn(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = Ix(e[i], t, a + 1), u);
      }, Wx = function(e, t) {
        return Ix(e, t, 0);
      }, Yx = function(e, t, a, i) {
        var u = t[i], d = Jn(e) ? e.slice() : Tt({}, e);
        if (i + 1 === t.length) {
          var h = a[i];
          d[h] = d[u], Jn(d) ? d.splice(u, 1) : delete d[u];
        } else
          d[u] = Yx(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return d;
      }, Gx = function(e, t, a) {
        if (t.length !== a.length) {
          S("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              S("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Yx(e, t, a, 0);
      }, Qx = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], d = Jn(e) ? e.slice() : Tt({}, e);
        return d[u] = Qx(e[u], t, a + 1, i), d;
      }, qx = function(e, t, a) {
        return Qx(e, t, 0, a);
      }, h1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      zx = function(e, t, a, i) {
        var u = h1(e, t);
        if (u !== null) {
          var d = qx(u.memoizedState, a, i);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = Tt({}, e.memoizedProps);
          var h = Va(e, Ze);
          h !== null && Sr(h, e, Ze, an);
        }
      }, Ux = function(e, t, a) {
        var i = h1(e, t);
        if (i !== null) {
          var u = Wx(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Tt({}, e.memoizedProps);
          var d = Va(e, Ze);
          d !== null && Sr(d, e, Ze, an);
        }
      }, Px = function(e, t, a, i) {
        var u = h1(e, t);
        if (u !== null) {
          var d = Gx(u.memoizedState, a, i);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = Tt({}, e.memoizedProps);
          var h = Va(e, Ze);
          h !== null && Sr(h, e, Ze, an);
        }
      }, $x = function(e, t, a) {
        e.pendingProps = qx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, Ze);
        i !== null && Sr(i, e, Ze, an);
      }, jx = function(e, t) {
        e.pendingProps = Wx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Va(e, Ze);
        a !== null && Sr(a, e, Ze, an);
      }, Fx = function(e, t, a) {
        e.pendingProps = Gx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, Ze);
        i !== null && Sr(i, e, Ze, an);
      }, Bx = function(e) {
        var t = Va(e, Ze);
        t !== null && Sr(t, e, Ze, an);
      }, Vx = function(e) {
        Ax = e;
      }, Hx = function(e) {
        Lx = e;
      };
    }
    function SN(e) {
      var t = Na(e);
      return t === null ? null : t.stateNode;
    }
    function bN(e) {
      return null;
    }
    function EN() {
      return zn;
    }
    function CN(e) {
      var t = e.findFiberByHostInstance, a = f.ReactCurrentDispatcher;
      return sp({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: zx,
        overrideHookStateDeletePath: Ux,
        overrideHookStateRenamePath: Px,
        overrideProps: $x,
        overridePropsDeletePath: jx,
        overridePropsRenamePath: Fx,
        setErrorHandler: Vx,
        setSuspenseHandler: Hx,
        scheduleUpdate: Bx,
        currentDispatcherRef: a,
        findHostInstanceByFiber: SN,
        findFiberByHostInstance: t || bN,
        // React Refresh
        findHostInstancesForRefresh: ZM,
        scheduleRefresh: KM,
        scheduleRoot: XM,
        setRefreshHandler: qM,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: EN,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: f1
      });
    }
    var Kx = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function m1(e) {
      this._internalRoot = e;
    }
    ng.prototype.render = m1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? m("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : rg(arguments[1]) ? m("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && m("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Un) {
          var i = Nx(t.current);
          i && i.parentNode !== a && m("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Av(e, t, null, null);
    }, ng.prototype.unmount = m1.prototype.unmount = function() {
      typeof arguments[0] == "function" && m("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ux() && m("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Nl(function() {
          Av(null, e, null, null);
        }), KE(t);
      }
    };
    function TN(e, t) {
      if (!rg(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Xx(e);
      var a = !1, i = !1, u = "", d = Kx;
      t != null && (t.hydrate ? S("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === zi && m(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var h = Dx(e, Xm, null, a, i, u, d);
      Im(h.current, e);
      var b = e.nodeType === Un ? e.parentNode : e;
      return jp(b), new m1(h);
    }
    function ng(e) {
      this._internalRoot = e;
    }
    function xN(e) {
      e && g0(e);
    }
    ng.prototype.unstable_scheduleHydration = xN;
    function RN(e, t, a) {
      if (!rg(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Xx(e), t === void 0 && m("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, d = !1, h = !1, b = "", E = Kx;
      a != null && (a.unstable_strictMode === !0 && (d = !0), a.identifierPrefix !== void 0 && (b = a.identifierPrefix), a.onRecoverableError !== void 0 && (E = a.onRecoverableError));
      var R = _x(t, null, e, Xm, i, d, h, b, E);
      if (Im(R.current, e), jp(e), u)
        for (var O = 0; O < u.length; O++) {
          var B = u[O];
          DD(R, B);
        }
      return new ng(R);
    }
    function rg(e) {
      return !!(e && (e.nodeType === Vr || e.nodeType === ni || e.nodeType === Jo || !Oe));
    }
    function Lv(e) {
      return !!(e && (e.nodeType === Vr || e.nodeType === ni || e.nodeType === Jo || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function Xx(e) {
      e.nodeType === Vr && e.tagName && e.tagName.toUpperCase() === "BODY" && m("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Kp(e) && (e._reactRootContainer ? m("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : m("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var wN = f.ReactCurrentOwner, Zx;
    Zx = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = Nx(e._reactRootContainer.current);
        t && t.parentNode !== e && m("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = y1(e), u = !!(i && Nu(i));
      u && !a && m("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Vr && e.tagName && e.tagName.toUpperCase() === "BODY" && m("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function y1(e) {
      return e ? e.nodeType === ni ? e.documentElement : e.firstChild : null;
    }
    function Jx() {
    }
    function kN(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var d = i;
          i = function() {
            var j = tg(h);
            d.call(j);
          };
        }
        var h = _x(
          t,
          i,
          e,
          Lu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Jx
        );
        e._reactRootContainer = h, Im(h.current, e);
        var b = e.nodeType === Un ? e.parentNode : e;
        return jp(b), Nl(), h;
      } else {
        for (var E; E = e.lastChild; )
          e.removeChild(E);
        if (typeof i == "function") {
          var R = i;
          i = function() {
            var j = tg(O);
            R.call(j);
          };
        }
        var O = Dx(
          e,
          Lu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Jx
        );
        e._reactRootContainer = O, Im(O.current, e);
        var B = e.nodeType === Un ? e.parentNode : e;
        return jp(B), Nl(function() {
          Av(t, O, a, i);
        }), O;
      }
    }
    function ON(e, t) {
      e !== null && typeof e != "function" && m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ag(e, t, a, i, u) {
      Zx(a), ON(u === void 0 ? null : u, "render");
      var d = a._reactRootContainer, h;
      if (!d)
        h = kN(a, t, e, u, i);
      else {
        if (h = d, typeof u == "function") {
          var b = u;
          u = function() {
            var E = tg(h);
            b.call(E);
          };
        }
        Av(t, h, e, u);
      }
      return tg(h);
    }
    var eR = !1;
    function DN(e) {
      {
        eR || (eR = !0, m("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = wN.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || m("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ht(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Vr ? e : pN(e, "findDOMNode");
    }
    function _N(e, t, a) {
      if (m("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Kp(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ag(null, e, t, !0, a);
    }
    function MN(e, t, a) {
      if (m("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Kp(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ag(null, e, t, !1, a);
    }
    function NN(e, t, a, i) {
      if (m("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !bs(e))
        throw new Error("parentComponent must be a valid React Component");
      return ag(e, t, a, !1, i);
    }
    var tR = !1;
    function AN(e) {
      if (tR || (tR = !0, m("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Lv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Kp(e) && e._reactRootContainer === void 0;
        t && m("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = y1(e), i = a && !Nu(a);
          i && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Nl(function() {
          ag(null, null, e, !1, function() {
            e._reactRootContainer = null, KE(e);
          });
        }), !0;
      } else {
        {
          var u = y1(e), d = !!(u && Nu(u)), h = e.nodeType === Vr && Lv(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", h ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    gu(vN), m0(hN), yf(mN), dm(Ua), pm(Rr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && m("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Vh(zk), Ac(Qb, RM, Nl);
    function LN(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!rg(t))
        throw new Error("Target container is not a DOM element.");
      return dN(e, t, null, a);
    }
    function zN(e, t, a, i) {
      return NN(e, t, a, i);
    }
    var g1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Nu, Ff, Wm, Nc, ys, Qb]
    };
    function UN(e, t) {
      return g1.usingClientEntryPoint || m('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), TN(e, t);
    }
    function PN(e, t, a) {
      return g1.usingClientEntryPoint || m('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), RN(e, t, a);
    }
    function $N(e) {
      return ux() && m("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Nl(e);
    }
    var jN = CN({
      findFiberByHostInstance: Gs,
      bundleType: 1,
      version: f1,
      rendererPackageName: "react-dom"
    });
    if (!jN && Rt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var nR = window.location.protocol;
      /^(https?|file):$/.test(nR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (nR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g1, Ga.createPortal = LN, Ga.createRoot = UN, Ga.findDOMNode = DN, Ga.flushSync = $N, Ga.hydrate = _N, Ga.hydrateRoot = PN, Ga.render = MN, Ga.unmountComponentAtNode = AN, Ga.unstable_batchedUpdates = Qb, Ga.unstable_renderSubtreeIntoContainer = zN, Ga.version = f1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ga;
}
function Vw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vw);
    } catch (o) {
      console.error(o);
    }
  }
}
process.env.NODE_ENV === "production" ? (Vw(), G1.exports = Fz()) : G1.exports = Bz();
var Hw = G1.exports;
const cg = /* @__PURE__ */ nw(Hw), XR = {
  disabled: !1
};
var Vz = process.env.NODE_ENV !== "production" ? C.oneOfType([C.number, C.shape({
  enter: C.number,
  exit: C.number,
  appear: C.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && C.oneOfType([C.string, C.shape({
  enter: C.string,
  exit: C.string,
  active: C.string
}), C.shape({
  enter: C.string,
  enterDone: C.string,
  enterActive: C.string,
  exit: C.string,
  exitDone: C.string,
  exitActive: C.string
})]);
const xg = ci.createContext(null);
var Hz = function(s) {
  return s.scrollTop;
}, Hv = "unmounted", sc = "exited", cc = "entering", gd = "entered", Q1 = "exiting", $l = /* @__PURE__ */ function(o) {
  Fw(s, o);
  function s(v, y) {
    var S;
    S = o.call(this, v, y) || this;
    var m = y, x = m && !m.isMounting ? v.enter : v.appear, w;
    return S.appearStatus = null, v.in ? x ? (w = sc, S.appearStatus = cc) : w = gd : v.unmountOnExit || v.mountOnEnter ? w = Hv : w = sc, S.state = {
      status: w
    }, S.nextCallback = null, S;
  }
  s.getDerivedStateFromProps = function(y, S) {
    var m = y.in;
    return m && S.status === Hv ? {
      status: sc
    } : null;
  };
  var f = s.prototype;
  return f.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, f.componentDidUpdate = function(y) {
    var S = null;
    if (y !== this.props) {
      var m = this.state.status;
      this.props.in ? m !== cc && m !== gd && (S = cc) : (m === cc || m === gd) && (S = Q1);
    }
    this.updateStatus(!1, S);
  }, f.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, f.getTimeouts = function() {
    var y = this.props.timeout, S, m, x;
    return S = m = x = y, y != null && typeof y != "number" && (S = y.exit, m = y.enter, x = y.appear !== void 0 ? y.appear : m), {
      exit: S,
      enter: m,
      appear: x
    };
  }, f.updateStatus = function(y, S) {
    if (y === void 0 && (y = !1), S !== null)
      if (this.cancelNextCallback(), S === cc) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var m = this.props.nodeRef ? this.props.nodeRef.current : cg.findDOMNode(this);
          m && Hz(m);
        }
        this.performEnter(y);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === sc && this.setState({
      status: Hv
    });
  }, f.performEnter = function(y) {
    var S = this, m = this.props.enter, x = this.context ? this.context.isMounting : y, w = this.props.nodeRef ? [x] : [cg.findDOMNode(this), x], D = w[0], A = w[1], _ = this.getTimeouts(), N = x ? _.appear : _.enter;
    if (!y && !m || XR.disabled) {
      this.safeSetState({
        status: gd
      }, function() {
        S.props.onEntered(D);
      });
      return;
    }
    this.props.onEnter(D, A), this.safeSetState({
      status: cc
    }, function() {
      S.props.onEntering(D, A), S.onTransitionEnd(N, function() {
        S.safeSetState({
          status: gd
        }, function() {
          S.props.onEntered(D, A);
        });
      });
    });
  }, f.performExit = function() {
    var y = this, S = this.props.exit, m = this.getTimeouts(), x = this.props.nodeRef ? void 0 : cg.findDOMNode(this);
    if (!S || XR.disabled) {
      this.safeSetState({
        status: sc
      }, function() {
        y.props.onExited(x);
      });
      return;
    }
    this.props.onExit(x), this.safeSetState({
      status: Q1
    }, function() {
      y.props.onExiting(x), y.onTransitionEnd(m.exit, function() {
        y.safeSetState({
          status: sc
        }, function() {
          y.props.onExited(x);
        });
      });
    });
  }, f.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, f.safeSetState = function(y, S) {
    S = this.setNextCallback(S), this.setState(y, S);
  }, f.setNextCallback = function(y) {
    var S = this, m = !0;
    return this.nextCallback = function(x) {
      m && (m = !1, S.nextCallback = null, y(x));
    }, this.nextCallback.cancel = function() {
      m = !1;
    }, this.nextCallback;
  }, f.onTransitionEnd = function(y, S) {
    this.setNextCallback(S);
    var m = this.props.nodeRef ? this.props.nodeRef.current : cg.findDOMNode(this), x = y == null && !this.props.addEndListener;
    if (!m || x) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var w = this.props.nodeRef ? [this.nextCallback] : [m, this.nextCallback], D = w[0], A = w[1];
      this.props.addEndListener(D, A);
    }
    y != null && setTimeout(this.nextCallback, y);
  }, f.render = function() {
    var y = this.state.status;
    if (y === Hv)
      return null;
    var S = this.props, m = S.children;
    S.in, S.mountOnEnter, S.unmountOnExit, S.appear, S.enter, S.exit, S.timeout, S.addEndListener, S.onEnter, S.onEntering, S.onEntered, S.onExit, S.onExiting, S.onExited, S.nodeRef;
    var x = jw(S, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ci.createElement(xg.Provider, {
        value: null
      }, typeof m == "function" ? m(y, x) : ci.cloneElement(ci.Children.only(m), x))
    );
  }, s;
}(ci.Component);
$l.contextType = xg;
$l.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: C.shape({
    current: typeof Element > "u" ? C.any : function(o, s, f, v, y, S) {
      var m = o[s];
      return C.instanceOf(m && "ownerDocument" in m ? m.ownerDocument.defaultView.Element : Element)(o, s, f, v, y, S);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: C.oneOfType([C.func.isRequired, C.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: C.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: C.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: C.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: C.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: C.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: C.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(s) {
    var f = Vz;
    s.addEndListener || (f = f.isRequired);
    for (var v = arguments.length, y = new Array(v > 1 ? v - 1 : 0), S = 1; S < v; S++)
      y[S - 1] = arguments[S];
    return f.apply(void 0, [s].concat(y));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: C.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: C.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: C.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: C.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: C.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: C.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: C.func
} : {};
function md() {
}
$l.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: md,
  onEntering: md,
  onEntered: md,
  onExit: md,
  onExiting: md,
  onExited: md
};
$l.UNMOUNTED = Hv;
$l.EXITED = sc;
$l.ENTERING = cc;
$l.ENTERED = gd;
$l.EXITING = Q1;
function Iz(o) {
  if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function pE(o, s) {
  var f = function(S) {
    return s && dg(S) ? s(S) : S;
  }, v = /* @__PURE__ */ Object.create(null);
  return o && YN.map(o, function(y) {
    return y;
  }).forEach(function(y) {
    v[y.key] = f(y);
  }), v;
}
function Wz(o, s) {
  o = o || {}, s = s || {};
  function f(A) {
    return A in s ? s[A] : o[A];
  }
  var v = /* @__PURE__ */ Object.create(null), y = [];
  for (var S in o)
    S in s ? y.length && (v[S] = y, y = []) : y.push(S);
  var m, x = {};
  for (var w in s) {
    if (v[w])
      for (m = 0; m < v[w].length; m++) {
        var D = v[w][m];
        x[v[w][m]] = f(D);
      }
    x[w] = f(w);
  }
  for (m = 0; m < y.length; m++)
    x[y[m]] = f(y[m]);
  return x;
}
function fc(o, s, f) {
  return f[s] != null ? f[s] : o.props[s];
}
function Yz(o, s) {
  return pE(o.children, function(f) {
    return pg(f, {
      onExited: s.bind(null, f),
      in: !0,
      appear: fc(f, "appear", o),
      enter: fc(f, "enter", o),
      exit: fc(f, "exit", o)
    });
  });
}
function Gz(o, s, f) {
  var v = pE(o.children), y = Wz(s, v);
  return Object.keys(y).forEach(function(S) {
    var m = y[S];
    if (dg(m)) {
      var x = S in s, w = S in v, D = s[S], A = dg(D) && !D.props.in;
      w && (!x || A) ? y[S] = pg(m, {
        onExited: f.bind(null, m),
        in: !0,
        exit: fc(m, "exit", o),
        enter: fc(m, "enter", o)
      }) : !w && x && !A ? y[S] = pg(m, {
        in: !1
      }) : w && x && dg(D) && (y[S] = pg(m, {
        onExited: f.bind(null, m),
        in: D.props.in,
        exit: fc(m, "exit", o),
        enter: fc(m, "enter", o)
      }));
    }
  }), y;
}
var Qz = Object.values || function(o) {
  return Object.keys(o).map(function(s) {
    return o[s];
  });
}, qz = {
  component: "div",
  childFactory: function(s) {
    return s;
  }
}, vE = /* @__PURE__ */ function(o) {
  Fw(s, o);
  function s(v, y) {
    var S;
    S = o.call(this, v, y) || this;
    var m = S.handleExited.bind(Iz(S));
    return S.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: m,
      firstRender: !0
    }, S;
  }
  var f = s.prototype;
  return f.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, f.componentWillUnmount = function() {
    this.mounted = !1;
  }, s.getDerivedStateFromProps = function(y, S) {
    var m = S.children, x = S.handleExited, w = S.firstRender;
    return {
      children: w ? Yz(y, x) : Gz(y, m, x),
      firstRender: !1
    };
  }, f.handleExited = function(y, S) {
    var m = pE(this.props.children);
    y.key in m || (y.props.onExited && y.props.onExited(S), this.mounted && this.setState(function(x) {
      var w = bg({}, x.children);
      return delete w[y.key], {
        children: w
      };
    }));
  }, f.render = function() {
    var y = this.props, S = y.component, m = y.childFactory, x = jw(y, ["component", "childFactory"]), w = this.state.contextValue, D = Qz(this.state.children).map(m);
    return delete x.appear, delete x.enter, delete x.exit, S === null ? /* @__PURE__ */ ci.createElement(xg.Provider, {
      value: w
    }, D) : /* @__PURE__ */ ci.createElement(xg.Provider, {
      value: w
    }, /* @__PURE__ */ ci.createElement(S, x, D));
  }, s;
}(ci.Component);
vE.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: C.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: C.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: C.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: C.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: C.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: C.func
} : {};
vE.defaultProps = qz;
function Iw(o) {
  const {
    className: s,
    classes: f,
    pulsate: v = !1,
    rippleX: y,
    rippleY: S,
    rippleSize: m,
    in: x,
    onExited: w,
    timeout: D
  } = o, [A, _] = me.useState(!1), N = pn(s, f.ripple, f.rippleVisible, v && f.ripplePulsate), P = {
    width: m,
    height: m,
    top: -(m / 2) + S,
    left: -(m / 2) + y
  }, H = pn(f.child, A && f.childLeaving, v && f.childPulsate);
  return !x && !A && _(!0), me.useEffect(() => {
    if (!x && w != null) {
      const $ = setTimeout(w, D);
      return () => {
        clearTimeout($);
      };
    }
  }, [w, x, D]), /* @__PURE__ */ ut.jsx("span", {
    className: N,
    style: P,
    children: /* @__PURE__ */ ut.jsx("span", {
      className: H
    })
  });
}
process.env.NODE_ENV !== "production" && (Iw.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object.isRequired,
  className: C.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: C.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: C.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: C.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: C.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: C.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: C.number,
  /**
   * exit delay
   */
  timeout: C.number.isRequired
});
const Mi = pi("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), q1 = 550, Kz = 80, Xz = lE`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Zz = lE`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Jz = lE`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, e5 = Vn("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), t5 = Vn(Iw, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Mi.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Xz};
    animation-duration: ${q1}ms;
    animation-timing-function: ${({
  theme: o
}) => o.transitions.easing.easeInOut};
  }

  &.${Mi.ripplePulsate} {
    animation-duration: ${({
  theme: o
}) => o.transitions.duration.shorter}ms;
  }

  & .${Mi.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Mi.childLeaving} {
    opacity: 0;
    animation-name: ${Zz};
    animation-duration: ${q1}ms;
    animation-timing-function: ${({
  theme: o
}) => o.transitions.easing.easeInOut};
  }

  & .${Mi.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Jz};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: o
}) => o.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Ww = /* @__PURE__ */ me.forwardRef(function(s, f) {
  const v = vi({
    props: s,
    name: "MuiTouchRipple"
  }), {
    center: y = !1,
    classes: S = {},
    className: m,
    ...x
  } = v, [w, D] = me.useState([]), A = me.useRef(0), _ = me.useRef(null);
  me.useEffect(() => {
    _.current && (_.current(), _.current = null);
  }, [w]);
  const N = me.useRef(!1), P = FL(), H = me.useRef(null), $ = me.useRef(null), U = me.useCallback((K) => {
    const {
      pulsate: V,
      rippleX: le,
      rippleY: re,
      rippleSize: je,
      cb: Fe
    } = K;
    D((k) => [...k, /* @__PURE__ */ ut.jsx(t5, {
      classes: {
        ripple: pn(S.ripple, Mi.ripple),
        rippleVisible: pn(S.rippleVisible, Mi.rippleVisible),
        ripplePulsate: pn(S.ripplePulsate, Mi.ripplePulsate),
        child: pn(S.child, Mi.child),
        childLeaving: pn(S.childLeaving, Mi.childLeaving),
        childPulsate: pn(S.childPulsate, Mi.childPulsate)
      },
      timeout: q1,
      pulsate: V,
      rippleX: le,
      rippleY: re,
      rippleSize: je
    }, A.current)]), A.current += 1, _.current = Fe;
  }, [S]), ee = me.useCallback((K = {}, V = {}, le = () => {
  }) => {
    const {
      pulsate: re = !1,
      center: je = y || V.pulsate,
      fakeElement: Fe = !1
      // For test purposes
    } = V;
    if ((K == null ? void 0 : K.type) === "mousedown" && N.current) {
      N.current = !1;
      return;
    }
    (K == null ? void 0 : K.type) === "touchstart" && (N.current = !0);
    const k = Fe ? null : $.current, oe = k ? k.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let Te, ve, Se;
    if (je || K === void 0 || K.clientX === 0 && K.clientY === 0 || !K.clientX && !K.touches)
      Te = Math.round(oe.width / 2), ve = Math.round(oe.height / 2);
    else {
      const {
        clientX: _e,
        clientY: Ce
      } = K.touches && K.touches.length > 0 ? K.touches[0] : K;
      Te = Math.round(_e - oe.left), ve = Math.round(Ce - oe.top);
    }
    if (je)
      Se = Math.sqrt((2 * oe.width ** 2 + oe.height ** 2) / 3), Se % 2 === 0 && (Se += 1);
    else {
      const _e = Math.max(Math.abs((k ? k.clientWidth : 0) - Te), Te) * 2 + 2, Ce = Math.max(Math.abs((k ? k.clientHeight : 0) - ve), ve) * 2 + 2;
      Se = Math.sqrt(_e ** 2 + Ce ** 2);
    }
    K != null && K.touches ? H.current === null && (H.current = () => {
      U({
        pulsate: re,
        rippleX: Te,
        rippleY: ve,
        rippleSize: Se,
        cb: le
      });
    }, P.start(Kz, () => {
      H.current && (H.current(), H.current = null);
    })) : U({
      pulsate: re,
      rippleX: Te,
      rippleY: ve,
      rippleSize: Se,
      cb: le
    });
  }, [y, U, P]), ue = me.useCallback(() => {
    ee({}, {
      pulsate: !0
    });
  }, [ee]), q = me.useCallback((K, V) => {
    if (P.clear(), (K == null ? void 0 : K.type) === "touchend" && H.current) {
      H.current(), H.current = null, P.start(0, () => {
        q(K, V);
      });
      return;
    }
    H.current = null, D((le) => le.length > 0 ? le.slice(1) : le), _.current = V;
  }, [P]);
  return me.useImperativeHandle(f, () => ({
    pulsate: ue,
    start: ee,
    stop: q
  }), [ue, ee, q]), /* @__PURE__ */ ut.jsx(e5, {
    className: pn(Mi.root, S.root, m),
    ref: $,
    ...x,
    children: /* @__PURE__ */ ut.jsx(vE, {
      component: null,
      exit: !0,
      children: w
    })
  });
});
process.env.NODE_ENV !== "production" && (Ww.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: C.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string
});
function n5(o) {
  return qa("MuiButtonBase", o);
}
const r5 = pi("MuiButtonBase", ["root", "disabled", "focusVisible"]), a5 = (o) => {
  const {
    disabled: s,
    focusVisible: f,
    focusVisibleClassName: v,
    classes: y
  } = o, m = Ai({
    root: ["root", s && "disabled", f && "focusVisible"]
  }, n5, y);
  return f && v && (m.root += ` ${v}`), m;
}, i5 = Vn("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (o, s) => s.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${r5.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), hE = /* @__PURE__ */ me.forwardRef(function(s, f) {
  const v = vi({
    props: s,
    name: "MuiButtonBase"
  }), {
    action: y,
    centerRipple: S = !1,
    children: m,
    className: x,
    component: w = "button",
    disabled: D = !1,
    disableRipple: A = !1,
    disableTouchRipple: _ = !1,
    focusRipple: N = !1,
    focusVisibleClassName: P,
    LinkComponent: H = "a",
    onBlur: $,
    onClick: U,
    onContextMenu: ee,
    onDragLeave: ue,
    onFocus: q,
    onFocusVisible: K,
    onKeyDown: V,
    onKeyUp: le,
    onMouseDown: re,
    onMouseLeave: je,
    onMouseUp: Fe,
    onTouchEnd: k,
    onTouchMove: oe,
    onTouchStart: Te,
    tabIndex: ve = 0,
    TouchRippleProps: Se,
    touchRippleRef: _e,
    type: Ce,
    ...ht
  } = v, ce = me.useRef(null), Ae = Uz(), W = Ku(Ae.ref, _e), [se, Oe] = me.useState(!1);
  D && se && Oe(!1), me.useImperativeHandle(y, () => ({
    focusVisible: () => {
      Oe(!0), ce.current.focus();
    }
  }), []);
  const Be = Ae.shouldMount && !A && !D;
  me.useEffect(() => {
    se && N && !A && Ae.pulsate();
  }, [A, N, se, Ae]);
  function xe(tt, la, kr = _) {
    return Sd((jr) => (la && la(jr), kr || Ae[tt](jr), !0));
  }
  const it = xe("start", re), Ve = xe("stop", ee), Je = xe("stop", ue), et = xe("stop", Fe), st = xe("stop", (tt) => {
    se && tt.preventDefault(), je && je(tt);
  }), ct = xe("start", Te), Dt = xe("stop", k), be = xe("stop", oe), Rt = xe("stop", (tt) => {
    UR(tt.target) || Oe(!1), $ && $(tt);
  }, !1), Me = Sd((tt) => {
    ce.current || (ce.current = tt.currentTarget), UR(tt.target) && (Oe(!0), K && K(tt)), q && q(tt);
  }), Yt = () => {
    const tt = ce.current;
    return w && w !== "button" && !(tt.tagName === "A" && tt.href);
  }, vn = Sd((tt) => {
    N && !tt.repeat && se && tt.key === " " && Ae.stop(tt, () => {
      Ae.start(tt);
    }), tt.target === tt.currentTarget && Yt() && tt.key === " " && tt.preventDefault(), V && V(tt), tt.target === tt.currentTarget && Yt() && tt.key === "Enter" && !D && (tt.preventDefault(), U && U(tt));
  }), On = Sd((tt) => {
    N && tt.key === " " && se && !tt.defaultPrevented && Ae.stop(tt, () => {
      Ae.pulsate(tt);
    }), le && le(tt), U && tt.target === tt.currentTarget && Yt() && tt.key === " " && !tt.defaultPrevented && U(tt);
  });
  let lr = w;
  lr === "button" && (ht.href || ht.to) && (lr = H);
  const ur = {};
  lr === "button" ? (ur.type = Ce === void 0 ? "button" : Ce, ur.disabled = D) : (!ht.href && !ht.to && (ur.role = "button"), D && (ur["aria-disabled"] = D));
  const Ka = Ku(f, ce), ia = {
    ...v,
    centerRipple: S,
    component: w,
    disabled: D,
    disableRipple: A,
    disableTouchRipple: _,
    focusRipple: N,
    tabIndex: ve,
    focusVisible: se
  }, oa = a5(ia);
  return /* @__PURE__ */ ut.jsxs(i5, {
    as: lr,
    className: pn(oa.root, x),
    ownerState: ia,
    onBlur: Rt,
    onClick: U,
    onContextMenu: Ve,
    onFocus: Me,
    onKeyDown: vn,
    onKeyUp: On,
    onMouseDown: it,
    onMouseLeave: st,
    onMouseUp: et,
    onDragLeave: Je,
    onTouchEnd: Dt,
    onTouchMove: be,
    onTouchStart: ct,
    ref: Ka,
    tabIndex: D ? -1 : ve,
    type: Ce,
    ...ur,
    ...ht,
    children: [m, Be ? /* @__PURE__ */ ut.jsx(Ww, {
      ref: W,
      center: S,
      ...Se
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (hE.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: LL,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: C.bool,
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: NL,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: C.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: C.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: C.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: C.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: C.string,
  /**
   * @ignore
   */
  href: C.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: C.elementType,
  /**
   * @ignore
   */
  onBlur: C.func,
  /**
   * @ignore
   */
  onClick: C.func,
  /**
   * @ignore
   */
  onContextMenu: C.func,
  /**
   * @ignore
   */
  onDragLeave: C.func,
  /**
   * @ignore
   */
  onFocus: C.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: C.func,
  /**
   * @ignore
   */
  onKeyDown: C.func,
  /**
   * @ignore
   */
  onKeyUp: C.func,
  /**
   * @ignore
   */
  onMouseDown: C.func,
  /**
   * @ignore
   */
  onMouseLeave: C.func,
  /**
   * @ignore
   */
  onMouseUp: C.func,
  /**
   * @ignore
   */
  onTouchEnd: C.func,
  /**
   * @ignore
   */
  onTouchMove: C.func,
  /**
   * @ignore
   */
  onTouchStart: C.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * @default 0
   */
  tabIndex: C.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: C.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: C.oneOfType([C.func, C.shape({
    current: C.shape({
      pulsate: C.func.isRequired,
      start: C.func.isRequired,
      stop: C.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: C.oneOfType([C.oneOf(["button", "reset", "submit"]), C.string])
});
function o5(o) {
  return typeof o.main == "string";
}
function l5(o, s = []) {
  if (!o5(o))
    return !1;
  for (const f of s)
    if (!o.hasOwnProperty(f) || typeof o[f] != "string")
      return !1;
  return !0;
}
function Rg(o = []) {
  return ([, s]) => s && l5(s, o);
}
function u5(o) {
  return qa("MuiButton", o);
}
const yd = pi("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Yw = /* @__PURE__ */ me.createContext({});
process.env.NODE_ENV !== "production" && (Yw.displayName = "ButtonGroupContext");
const Gw = /* @__PURE__ */ me.createContext(void 0);
process.env.NODE_ENV !== "production" && (Gw.displayName = "ButtonGroupButtonContext");
const s5 = (o) => {
  const {
    color: s,
    disableElevation: f,
    fullWidth: v,
    size: y,
    variant: S,
    classes: m
  } = o, x = {
    root: ["root", S, `${S}${Pt(s)}`, `size${Pt(y)}`, `${S}Size${Pt(y)}`, `color${Pt(s)}`, f && "disableElevation", v && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${Pt(y)}`],
    endIcon: ["icon", "endIcon", `iconSize${Pt(y)}`]
  }, w = Ai(x, u5, m);
  return {
    ...m,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...w
  };
}, Qw = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], c5 = Vn(hE, {
  shouldForwardProp: (o) => ow(o) || o === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (o, s) => {
    const {
      ownerState: f
    } = o;
    return [s.root, s[f.variant], s[`${f.variant}${Pt(f.color)}`], s[`size${Pt(f.size)}`], s[`${f.variant}Size${Pt(f.size)}`], f.color === "inherit" && s.colorInherit, f.disableElevation && s.disableElevation, f.fullWidth && s.fullWidth];
  }
})(Pl(({
  theme: o
}) => {
  const s = o.palette.mode === "light" ? o.palette.grey[300] : o.palette.grey[800], f = o.palette.mode === "light" ? o.palette.grey.A100 : o.palette.grey[700];
  return {
    ...o.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (o.vars || o).shape.borderRadius,
    transition: o.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: o.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${yd.disabled}`]: {
      color: (o.vars || o).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (o.vars || o).shadows[2],
        "&:hover": {
          boxShadow: (o.vars || o).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (o.vars || o).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (o.vars || o).shadows[8]
        },
        [`&.${yd.focusVisible}`]: {
          boxShadow: (o.vars || o).shadows[6]
        },
        [`&.${yd.disabled}`]: {
          color: (o.vars || o).palette.action.disabled,
          boxShadow: (o.vars || o).shadows[0],
          backgroundColor: (o.vars || o).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${yd.disabled}`]: {
          border: `1px solid ${(o.vars || o).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(o.palette).filter(Rg()).map(([v]) => ({
      props: {
        color: v
      },
      style: {
        "--variant-textColor": (o.vars || o).palette[v].main,
        "--variant-outlinedColor": (o.vars || o).palette[v].main,
        "--variant-outlinedBorder": o.vars ? `rgba(${o.vars.palette[v].mainChannel} / 0.5)` : Ho(o.palette[v].main, 0.5),
        "--variant-containedColor": (o.vars || o).palette[v].contrastText,
        "--variant-containedBg": (o.vars || o).palette[v].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (o.vars || o).palette[v].dark,
            "--variant-textBg": o.vars ? `rgba(${o.vars.palette[v].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : Ho(o.palette[v].main, o.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (o.vars || o).palette[v].main,
            "--variant-outlinedBg": o.vars ? `rgba(${o.vars.palette[v].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : Ho(o.palette[v].main, o.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": o.vars ? o.vars.palette.Button.inheritContainedBg : s,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": o.vars ? o.vars.palette.Button.inheritContainedHoverBg : f,
            "--variant-textBg": o.vars ? `rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})` : Ho(o.palette.text.primary, o.palette.action.hoverOpacity),
            "--variant-outlinedBg": o.vars ? `rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})` : Ho(o.palette.text.primary, o.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: o.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: o.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: o.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: o.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: o.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: o.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${yd.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${yd.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), f5 = Vn("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (o, s) => {
    const {
      ownerState: f
    } = o;
    return [s.startIcon, s[`iconSize${Pt(f.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...Qw]
}), d5 = Vn("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (o, s) => {
    const {
      ownerState: f
    } = o;
    return [s.endIcon, s[`iconSize${Pt(f.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...Qw]
}), Hg = /* @__PURE__ */ me.forwardRef(function(s, f) {
  const v = me.useContext(Yw), y = me.useContext(Gw), S = gg(v, s), m = vi({
    props: S,
    name: "MuiButton"
  }), {
    children: x,
    color: w = "primary",
    component: D = "button",
    className: A,
    disabled: _ = !1,
    disableElevation: N = !1,
    disableFocusRipple: P = !1,
    endIcon: H,
    focusVisibleClassName: $,
    fullWidth: U = !1,
    size: ee = "medium",
    startIcon: ue,
    type: q,
    variant: K = "text",
    ...V
  } = m, le = {
    ...m,
    color: w,
    component: D,
    disabled: _,
    disableElevation: N,
    disableFocusRipple: P,
    fullWidth: U,
    size: ee,
    type: q,
    variant: K
  }, re = s5(le), je = ue && /* @__PURE__ */ ut.jsx(f5, {
    className: re.startIcon,
    ownerState: le,
    children: ue
  }), Fe = H && /* @__PURE__ */ ut.jsx(d5, {
    className: re.endIcon,
    ownerState: le,
    children: H
  }), k = y || "";
  return /* @__PURE__ */ ut.jsxs(c5, {
    ownerState: le,
    className: pn(v.className, re.root, A, k),
    component: D,
    disabled: _,
    focusRipple: !P,
    focusVisibleClassName: pn(re.focusVisible, $),
    ref: f,
    type: q,
    ...V,
    classes: re,
    children: [je, x, Fe]
  });
});
process.env.NODE_ENV !== "production" && (Hg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: C.oneOfType([C.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), C.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: C.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: C.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: C.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: C.bool,
  /**
   * Element placed after the children.
   */
  endIcon: C.node,
  /**
   * @ignore
   */
  focusVisibleClassName: C.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: C.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: C.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: C.oneOfType([C.oneOf(["small", "medium", "large"]), C.string]),
  /**
   * Element placed before the children.
   */
  startIcon: C.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * @ignore
   */
  type: C.oneOfType([C.oneOf(["button", "reset", "submit"]), C.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: C.oneOfType([C.oneOf(["contained", "outlined", "text"]), C.string])
});
function RU(o) {
  const { bgcolor: s, text: f, txtcolor: v, disabled: y, onClick: S, size: m } = o;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ ut.jsx(
      Hg,
      {
        type: "button",
        onClick: S,
        disabled: y,
        size: m,
        sx: { backgroundColor: s, color: v },
        children: f
      }
    )
  );
}
const p5 = Vn(Hg)(({
  txtcolor: o,
  backgroundColor: s,
  bordercolor: f,
  borderwidth: v,
  hoverbackgroundcolor: y,
  hovertxtColor: S
}) => ({
  backgroundColor: s,
  color: o,
  border: `${v} solid ${f}`,
  "&:hover": {
    backgroundColor: y,
    color: S
  }
}));
function wU(o) {
  const { text: s, size: f, disabled: v, onClick: y } = o;
  return /* @__PURE__ */ ut.jsx(
    p5,
    {
      type: "button",
      onClick: y,
      disabled: v,
      size: f,
      ...o,
      children: s
    }
  );
}
function v5(o) {
  return qa("MuiIconButton", o);
}
const h5 = pi("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), m5 = (o) => {
  const {
    classes: s,
    disabled: f,
    color: v,
    edge: y,
    size: S
  } = o, m = {
    root: ["root", f && "disabled", v !== "default" && `color${Pt(v)}`, y && `edge${Pt(y)}`, `size${Pt(S)}`]
  };
  return Ai(m, v5, s);
}, y5 = Vn(hE, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (o, s) => {
    const {
      ownerState: f
    } = o;
    return [s.root, f.color !== "default" && s[`color${Pt(f.color)}`], f.edge && s[`edge${Pt(f.edge)}`], s[`size${Pt(f.size)}`]];
  }
})(Pl(({
  theme: o
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: o.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (o.vars || o).palette.action.active,
  transition: o.transitions.create("background-color", {
    duration: o.transitions.duration.shortest
  }),
  variants: [{
    props: {
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: o.vars ? `rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})` : Ho(o.palette.action.active, o.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Pl(({
  theme: o
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(o.palette).filter(Rg()).map(([s]) => ({
    props: {
      color: s
    },
    style: {
      color: (o.vars || o).palette[s].main
    }
  })), ...Object.entries(o.palette).filter(Rg()).map(([s]) => ({
    props: {
      color: s,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: o.vars ? `rgba(${(o.vars || o).palette[s].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : Ho((o.vars || o).palette[s].main, o.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: o.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: o.typography.pxToRem(28)
    }
  }],
  [`&.${h5.disabled}`]: {
    backgroundColor: "transparent",
    color: (o.vars || o).palette.action.disabled
  }
}))), Ig = /* @__PURE__ */ me.forwardRef(function(s, f) {
  const v = vi({
    props: s,
    name: "MuiIconButton"
  }), {
    edge: y = !1,
    children: S,
    className: m,
    color: x = "default",
    disabled: w = !1,
    disableFocusRipple: D = !1,
    disableRipple: A = !1,
    size: _ = "medium",
    ...N
  } = v, P = {
    ...v,
    edge: y,
    color: x,
    disabled: w,
    disableFocusRipple: D,
    disableRipple: A,
    size: _
  }, H = m5(P);
  return /* @__PURE__ */ ut.jsx(y5, {
    className: pn(H.root, m),
    centerRipple: !0,
    focusRipple: !D,
    disabled: w,
    disableRipple: A,
    ref: f,
    ...N,
    ownerState: P,
    children: S
  });
});
process.env.NODE_ENV !== "production" && (Ig.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: th(C.node, (o) => me.Children.toArray(o.children).some((f) => /* @__PURE__ */ me.isValidElement(f) && f.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: C.oneOfType([C.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), C.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: C.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: C.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: C.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: C.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: C.oneOfType([C.oneOf(["small", "medium", "large"]), C.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object])
});
function g5(o) {
  return qa("MuiSvgIcon", o);
}
pi("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const S5 = (o) => {
  const {
    color: s,
    fontSize: f,
    classes: v
  } = o, y = {
    root: ["root", s !== "inherit" && `color${Pt(s)}`, `fontSize${Pt(f)}`]
  };
  return Ai(y, g5, v);
}, b5 = Vn("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (o, s) => {
    const {
      ownerState: f
    } = o;
    return [s.root, f.color !== "inherit" && s[`color${Pt(f.color)}`], s[`fontSize${Pt(f.fontSize)}`]];
  }
})(Pl(({
  theme: o
}) => {
  var s, f, v, y, S, m, x, w, D, A, _, N, P, H;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (y = (s = o.transitions) == null ? void 0 : s.create) == null ? void 0 : y.call(s, "fill", {
      duration: (v = (f = (o.vars ?? o).transitions) == null ? void 0 : f.duration) == null ? void 0 : v.shorter
    }),
    variants: [
      {
        props: ($) => !$.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((m = (S = o.typography) == null ? void 0 : S.pxToRem) == null ? void 0 : m.call(S, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((w = (x = o.typography) == null ? void 0 : x.pxToRem) == null ? void 0 : w.call(x, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((A = (D = o.typography) == null ? void 0 : D.pxToRem) == null ? void 0 : A.call(D, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((o.vars ?? o).palette).filter(([, $]) => $ && $.main).map(([$]) => {
        var U, ee;
        return {
          props: {
            color: $
          },
          style: {
            color: (ee = (U = (o.vars ?? o).palette) == null ? void 0 : U[$]) == null ? void 0 : ee.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (N = (_ = (o.vars ?? o).palette) == null ? void 0 : _.action) == null ? void 0 : N.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (H = (P = (o.vars ?? o).palette) == null ? void 0 : P.action) == null ? void 0 : H.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Kv = /* @__PURE__ */ me.forwardRef(function(s, f) {
  const v = vi({
    props: s,
    name: "MuiSvgIcon"
  }), {
    children: y,
    className: S,
    color: m = "inherit",
    component: x = "svg",
    fontSize: w = "medium",
    htmlColor: D,
    inheritViewBox: A = !1,
    titleAccess: _,
    viewBox: N = "0 0 24 24",
    ...P
  } = v, H = /* @__PURE__ */ me.isValidElement(y) && y.type === "svg", $ = {
    ...v,
    color: m,
    component: x,
    fontSize: w,
    instanceFontSize: s.fontSize,
    inheritViewBox: A,
    viewBox: N,
    hasSvgAsChild: H
  }, U = {};
  A || (U.viewBox = N);
  const ee = S5($);
  return /* @__PURE__ */ ut.jsxs(b5, {
    as: x,
    className: pn(ee.root, S),
    focusable: "false",
    color: D,
    "aria-hidden": _ ? void 0 : !0,
    role: _ ? "img" : void 0,
    ref: f,
    ...U,
    ...P,
    ...H && y.props,
    ownerState: $,
    children: [H ? y.props.children : y, _ ? /* @__PURE__ */ ut.jsx("title", {
      children: _
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Kv.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: C.oneOfType([C.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), C.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: C.oneOfType([C.oneOf(["inherit", "large", "medium", "small"]), C.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: C.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: C.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: C.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: C.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: C.string
});
Kv && (Kv.muiName = "SvgIcon");
function mE(o, s) {
  function f(v, y) {
    return /* @__PURE__ */ ut.jsx(Kv, {
      "data-testid": `${s}Icon`,
      ref: y,
      ...v,
      children: o
    });
  }
  return process.env.NODE_ENV !== "production" && (f.displayName = `${s}Icon`), f.muiName = Kv.muiName, /* @__PURE__ */ me.memo(/* @__PURE__ */ me.forwardRef(f));
}
const E5 = mE(/* @__PURE__ */ ut.jsx("path", {
  d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
}), "Favorite"), kU = ({
  color: o = "red",
  disabled: s = !1,
  onClick: f
}) => /* @__PURE__ */ ut.jsx(
  Ig,
  {
    disabled: s,
    onClick: f,
    children: /* @__PURE__ */ ut.jsx(E5, { sx: { color: o } })
  }
), C5 = mE(/* @__PURE__ */ ut.jsx("path", {
  d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"
}), "FavoriteBorder"), OU = ({
  color: o = "red",
  disabled: s = !1,
  onClick: f
}) => /* @__PURE__ */ ut.jsx(
  Ig,
  {
    disabled: s,
    onClick: f,
    children: /* @__PURE__ */ ut.jsx(C5, { sx: { color: o } })
  }
);
function T5(o) {
  const s = dc(o);
  return s.body === o ? Cg(o).innerWidth > s.documentElement.clientWidth : o.scrollHeight > o.clientHeight;
}
function Wv(o, s) {
  s ? o.setAttribute("aria-hidden", "true") : o.removeAttribute("aria-hidden");
}
function ZR(o) {
  return parseInt(Cg(o).getComputedStyle(o).paddingRight, 10) || 0;
}
function x5(o) {
  const f = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(o.tagName), v = o.tagName === "INPUT" && o.getAttribute("type") === "hidden";
  return f || v;
}
function JR(o, s, f, v, y) {
  const S = [s, f, ...v];
  [].forEach.call(o.children, (m) => {
    const x = !S.includes(m), w = !x5(m);
    x && w && Wv(m, y);
  });
}
function N1(o, s) {
  let f = -1;
  return o.some((v, y) => s(v) ? (f = y, !0) : !1), f;
}
function R5(o, s) {
  const f = [], v = o.container;
  if (!s.disableScrollLock) {
    if (T5(v)) {
      const m = BL(Cg(v));
      f.push({
        value: v.style.paddingRight,
        property: "padding-right",
        el: v
      }), v.style.paddingRight = `${ZR(v) + m}px`;
      const x = dc(v).querySelectorAll(".mui-fixed");
      [].forEach.call(x, (w) => {
        f.push({
          value: w.style.paddingRight,
          property: "padding-right",
          el: w
        }), w.style.paddingRight = `${ZR(w) + m}px`;
      });
    }
    let S;
    if (v.parentNode instanceof DocumentFragment)
      S = dc(v).body;
    else {
      const m = v.parentElement, x = Cg(v);
      S = (m == null ? void 0 : m.nodeName) === "HTML" && x.getComputedStyle(m).overflowY === "scroll" ? m : v;
    }
    f.push({
      value: S.style.overflow,
      property: "overflow",
      el: S
    }, {
      value: S.style.overflowX,
      property: "overflow-x",
      el: S
    }, {
      value: S.style.overflowY,
      property: "overflow-y",
      el: S
    }), S.style.overflow = "hidden";
  }
  return () => {
    f.forEach(({
      value: S,
      el: m,
      property: x
    }) => {
      S ? m.style.setProperty(x, S) : m.style.removeProperty(x);
    });
  };
}
function w5(o) {
  const s = [];
  return [].forEach.call(o.children, (f) => {
    f.getAttribute("aria-hidden") === "true" && s.push(f);
  }), s;
}
class k5 {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(s, f) {
    let v = this.modals.indexOf(s);
    if (v !== -1)
      return v;
    v = this.modals.length, this.modals.push(s), s.modalRef && Wv(s.modalRef, !1);
    const y = w5(f);
    JR(f, s.mount, s.modalRef, y, !0);
    const S = N1(this.containers, (m) => m.container === f);
    return S !== -1 ? (this.containers[S].modals.push(s), v) : (this.containers.push({
      modals: [s],
      container: f,
      restore: null,
      hiddenSiblings: y
    }), v);
  }
  mount(s, f) {
    const v = N1(this.containers, (S) => S.modals.includes(s)), y = this.containers[v];
    y.restore || (y.restore = R5(y, f));
  }
  remove(s, f = !0) {
    const v = this.modals.indexOf(s);
    if (v === -1)
      return v;
    const y = N1(this.containers, (m) => m.modals.includes(s)), S = this.containers[y];
    if (S.modals.splice(S.modals.indexOf(s), 1), this.modals.splice(v, 1), S.modals.length === 0)
      S.restore && S.restore(), s.modalRef && Wv(s.modalRef, f), JR(S.container, s.mount, s.modalRef, S.hiddenSiblings, !1), this.containers.splice(y, 1);
    else {
      const m = S.modals[S.modals.length - 1];
      m.modalRef && Wv(m.modalRef, !1);
    }
    return v;
  }
  isTopModal(s) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === s;
  }
}
const O5 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function D5(o) {
  const s = parseInt(o.getAttribute("tabindex") || "", 10);
  return Number.isNaN(s) ? o.contentEditable === "true" || (o.nodeName === "AUDIO" || o.nodeName === "VIDEO" || o.nodeName === "DETAILS") && o.getAttribute("tabindex") === null ? 0 : o.tabIndex : s;
}
function _5(o) {
  if (o.tagName !== "INPUT" || o.type !== "radio" || !o.name)
    return !1;
  const s = (v) => o.ownerDocument.querySelector(`input[type="radio"]${v}`);
  let f = s(`[name="${o.name}"]:checked`);
  return f || (f = s(`[name="${o.name}"]`)), f !== o;
}
function M5(o) {
  return !(o.disabled || o.tagName === "INPUT" && o.type === "hidden" || _5(o));
}
function N5(o) {
  const s = [], f = [];
  return Array.from(o.querySelectorAll(O5)).forEach((v, y) => {
    const S = D5(v);
    S === -1 || !M5(v) || (S === 0 ? s.push(v) : f.push({
      documentOrder: y,
      tabIndex: S,
      node: v
    }));
  }), f.sort((v, y) => v.tabIndex === y.tabIndex ? v.documentOrder - y.documentOrder : v.tabIndex - y.tabIndex).map((v) => v.node).concat(s);
}
function A5() {
  return !0;
}
function wg(o) {
  const {
    children: s,
    disableAutoFocus: f = !1,
    disableEnforceFocus: v = !1,
    disableRestoreFocus: y = !1,
    getTabbable: S = N5,
    isEnabled: m = A5,
    open: x
  } = o, w = me.useRef(!1), D = me.useRef(null), A = me.useRef(null), _ = me.useRef(null), N = me.useRef(null), P = me.useRef(!1), H = me.useRef(null), $ = Ku(cE(s), H), U = me.useRef(null);
  me.useEffect(() => {
    !x || !H.current || (P.current = !f);
  }, [f, x]), me.useEffect(() => {
    if (!x || !H.current)
      return;
    const q = dc(H.current);
    return H.current.contains(q.activeElement) || (H.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), H.current.setAttribute("tabIndex", "-1")), P.current && H.current.focus()), () => {
      y || (_.current && _.current.focus && (w.current = !0, _.current.focus()), _.current = null);
    };
  }, [x]), me.useEffect(() => {
    if (!x || !H.current)
      return;
    const q = dc(H.current), K = (re) => {
      U.current = re, !(v || !m() || re.key !== "Tab") && q.activeElement === H.current && re.shiftKey && (w.current = !0, A.current && A.current.focus());
    }, V = () => {
      var Fe, k;
      const re = H.current;
      if (re === null)
        return;
      if (!q.hasFocus() || !m() || w.current) {
        w.current = !1;
        return;
      }
      if (re.contains(q.activeElement) || v && q.activeElement !== D.current && q.activeElement !== A.current)
        return;
      if (q.activeElement !== N.current)
        N.current = null;
      else if (N.current !== null)
        return;
      if (!P.current)
        return;
      let je = [];
      if ((q.activeElement === D.current || q.activeElement === A.current) && (je = S(H.current)), je.length > 0) {
        const oe = !!((Fe = U.current) != null && Fe.shiftKey && ((k = U.current) == null ? void 0 : k.key) === "Tab"), Te = je[0], ve = je[je.length - 1];
        typeof Te != "string" && typeof ve != "string" && (oe ? ve.focus() : Te.focus());
      } else
        re.focus();
    };
    q.addEventListener("focusin", V), q.addEventListener("keydown", K, !0);
    const le = setInterval(() => {
      q.activeElement && q.activeElement.tagName === "BODY" && V();
    }, 50);
    return () => {
      clearInterval(le), q.removeEventListener("focusin", V), q.removeEventListener("keydown", K, !0);
    };
  }, [f, v, y, m, x, S]);
  const ee = (q) => {
    _.current === null && (_.current = q.relatedTarget), P.current = !0, N.current = q.target;
    const K = s.props.onFocus;
    K && K(q);
  }, ue = (q) => {
    _.current === null && (_.current = q.relatedTarget), P.current = !0;
  };
  return /* @__PURE__ */ ut.jsxs(me.Fragment, {
    children: [/* @__PURE__ */ ut.jsx("div", {
      tabIndex: x ? 0 : -1,
      onFocus: ue,
      ref: D,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ me.cloneElement(s, {
      ref: $,
      onFocus: ee
    }), /* @__PURE__ */ ut.jsx("div", {
      tabIndex: x ? 0 : -1,
      onFocus: ue,
      ref: A,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (wg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Vg,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: C.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: C.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: C.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: C.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: C.func,
  /**
   * If `true`, focus is locked.
   */
  open: C.bool.isRequired
});
process.env.NODE_ENV !== "production" && (wg.propTypes = Dw(wg.propTypes));
function L5(o) {
  return typeof o == "function" ? o() : o;
}
const kg = /* @__PURE__ */ me.forwardRef(function(s, f) {
  const {
    children: v,
    container: y,
    disablePortal: S = !1
  } = s, [m, x] = me.useState(null), w = Ku(/* @__PURE__ */ me.isValidElement(v) ? cE(v) : null, f);
  if (B1(() => {
    S || x(L5(y) || document.body);
  }, [y, S]), B1(() => {
    if (m && !S)
      return V1(f, m), () => {
        V1(f, null);
      };
  }, [f, m, S]), S) {
    if (/* @__PURE__ */ me.isValidElement(v)) {
      const D = {
        ref: w
      };
      return /* @__PURE__ */ me.cloneElement(v, D);
    }
    return /* @__PURE__ */ ut.jsx(me.Fragment, {
      children: v
    });
  }
  return /* @__PURE__ */ ut.jsx(me.Fragment, {
    children: m && /* @__PURE__ */ Hw.createPortal(v, m)
  });
});
process.env.NODE_ENV !== "production" && (kg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: C.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: C.oneOfType([_w, C.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: C.bool
});
process.env.NODE_ENV !== "production" && (kg.propTypes = Dw(kg.propTypes));
function Og(o, s) {
  const {
    className: f,
    elementType: v,
    ownerState: y,
    externalForwardedProps: S,
    getSlotOwnerState: m,
    internalForwardedProps: x,
    ...w
  } = s, {
    component: D,
    slots: A = {
      [o]: void 0
    },
    slotProps: _ = {
      [o]: void 0
    },
    ...N
  } = S, P = A[o] || v, H = GL(_[o], y), {
    props: {
      component: $,
      ...U
    },
    internalRef: ee
  } = YL({
    className: f,
    ...w,
    externalForwardedProps: o === "root" ? N : void 0,
    externalSlotProps: H
  }), ue = Ku(ee, H == null ? void 0 : H.ref, s.ref), q = m ? m(U) : {}, K = {
    ...y,
    ...q
  }, V = o === "root" ? $ || D : $, le = WL(P, {
    ...o === "root" && !D && !A[o] && x,
    ...o !== "root" && !A[o] && x,
    ...U,
    ...V && {
      as: V
    },
    ref: ue
  }, K);
  return Object.keys(q).forEach((re) => {
    delete le[re];
  }), [P, le];
}
const z5 = (o) => o.scrollTop;
function ew(o, s) {
  const {
    timeout: f,
    easing: v,
    style: y = {}
  } = o;
  return {
    duration: y.transitionDuration ?? (typeof f == "number" ? f : f[s.mode] || 0),
    easing: y.transitionTimingFunction ?? (typeof v == "object" ? v[s.mode] : v),
    delay: y.transitionDelay
  };
}
const U5 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, yE = /* @__PURE__ */ me.forwardRef(function(s, f) {
  const v = dE(), y = {
    enter: v.transitions.duration.enteringScreen,
    exit: v.transitions.duration.leavingScreen
  }, {
    addEndListener: S,
    appear: m = !0,
    children: x,
    easing: w,
    in: D,
    onEnter: A,
    onEntered: _,
    onEntering: N,
    onExit: P,
    onExited: H,
    onExiting: $,
    style: U,
    timeout: ee = y,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: ue = $l,
    ...q
  } = s, K = me.useRef(null), V = Ku(K, cE(x), f), le = (Se) => (_e) => {
    if (Se) {
      const Ce = K.current;
      _e === void 0 ? Se(Ce) : Se(Ce, _e);
    }
  }, re = le(N), je = le((Se, _e) => {
    z5(Se);
    const Ce = ew({
      style: U,
      timeout: ee,
      easing: w
    }, {
      mode: "enter"
    });
    Se.style.webkitTransition = v.transitions.create("opacity", Ce), Se.style.transition = v.transitions.create("opacity", Ce), A && A(Se, _e);
  }), Fe = le(_), k = le($), oe = le((Se) => {
    const _e = ew({
      style: U,
      timeout: ee,
      easing: w
    }, {
      mode: "exit"
    });
    Se.style.webkitTransition = v.transitions.create("opacity", _e), Se.style.transition = v.transitions.create("opacity", _e), P && P(Se);
  }), Te = le(H), ve = (Se) => {
    S && S(K.current, Se);
  };
  return /* @__PURE__ */ ut.jsx(ue, {
    appear: m,
    in: D,
    nodeRef: K,
    onEnter: je,
    onEntered: Fe,
    onEntering: re,
    onExit: oe,
    onExited: Te,
    onExiting: k,
    addEndListener: ve,
    timeout: ee,
    ...q,
    children: (Se, _e) => /* @__PURE__ */ me.cloneElement(x, {
      style: {
        opacity: 0,
        visibility: Se === "exited" && !D ? "hidden" : void 0,
        ...U5[Se],
        ...U,
        ...x.props.style
      },
      ref: V,
      ..._e
    })
  });
});
process.env.NODE_ENV !== "production" && (yE.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: C.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: C.bool,
  /**
   * A single child content element.
   */
  children: Vg.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: C.oneOfType([C.shape({
    enter: C.string,
    exit: C.string
  }), C.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: C.bool,
  /**
   * @ignore
   */
  onEnter: C.func,
  /**
   * @ignore
   */
  onEntered: C.func,
  /**
   * @ignore
   */
  onEntering: C.func,
  /**
   * @ignore
   */
  onExit: C.func,
  /**
   * @ignore
   */
  onExited: C.func,
  /**
   * @ignore
   */
  onExiting: C.func,
  /**
   * @ignore
   */
  style: C.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: C.oneOfType([C.number, C.shape({
    appear: C.number,
    enter: C.number,
    exit: C.number
  })])
});
function P5(o) {
  return qa("MuiBackdrop", o);
}
pi("MuiBackdrop", ["root", "invisible"]);
const $5 = (o) => {
  const {
    ownerState: s,
    ...f
  } = o;
  return f;
}, j5 = (o) => {
  const {
    classes: s,
    invisible: f
  } = o;
  return Ai({
    root: ["root", f && "invisible"]
  }, P5, s);
}, F5 = Vn("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (o, s) => {
    const {
      ownerState: f
    } = o;
    return [s.root, f.invisible && s.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), gE = /* @__PURE__ */ me.forwardRef(function(s, f) {
  const v = vi({
    props: s,
    name: "MuiBackdrop"
  }), {
    children: y,
    className: S,
    component: m = "div",
    invisible: x = !1,
    open: w,
    components: D = {},
    componentsProps: A = {},
    slotProps: _ = {},
    slots: N = {},
    TransitionComponent: P,
    transitionDuration: H,
    ...$
  } = v, U = {
    ...v,
    component: m,
    invisible: x
  }, ee = j5(U), ue = {
    transition: P,
    root: D.Root,
    ...N
  }, q = {
    ...A,
    ..._
  }, K = {
    slots: ue,
    slotProps: q
  }, [V, le] = Og("root", {
    elementType: F5,
    externalForwardedProps: K,
    className: pn(ee.root, S),
    ownerState: U
  }), [re, je] = Og("transition", {
    elementType: yE,
    externalForwardedProps: K,
    ownerState: U
  }), Fe = $5(je);
  return /* @__PURE__ */ ut.jsx(re, {
    in: w,
    timeout: H,
    ...$,
    ...Fe,
    children: /* @__PURE__ */ ut.jsx(V, {
      "aria-hidden": !0,
      ...le,
      classes: ee,
      ref: f,
      children: y
    })
  });
});
process.env.NODE_ENV !== "production" && (gE.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: C.shape({
    Root: C.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: C.shape({
    root: C.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: C.bool,
  /**
   * If `true`, the component is shown.
   */
  open: C.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: C.shape({
    root: C.oneOfType([C.func, C.object]),
    transition: C.oneOfType([C.func, C.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: C.shape({
    root: C.elementType,
    transition: C.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: C.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: C.oneOfType([C.number, C.shape({
    appear: C.number,
    enter: C.number,
    exit: C.number
  })])
});
function B5(o) {
  return typeof o == "function" ? o() : o;
}
function V5(o) {
  return o ? o.props.hasOwnProperty("in") : !1;
}
const fg = new k5();
function H5(o) {
  const {
    container: s,
    disableEscapeKeyDown: f = !1,
    disableScrollLock: v = !1,
    closeAfterTransition: y = !1,
    onTransitionEnter: S,
    onTransitionExited: m,
    children: x,
    onClose: w,
    open: D,
    rootRef: A
  } = o, _ = me.useRef({}), N = me.useRef(null), P = me.useRef(null), H = Ku(P, A), [$, U] = me.useState(!D), ee = V5(x);
  let ue = !0;
  (o["aria-hidden"] === "false" || o["aria-hidden"] === !1) && (ue = !1);
  const q = () => dc(N.current), K = () => (_.current.modalRef = P.current, _.current.mount = N.current, _.current), V = () => {
    fg.mount(K(), {
      disableScrollLock: v
    }), P.current && (P.current.scrollTop = 0);
  }, le = Sd(() => {
    const _e = B5(s) || q().body;
    fg.add(K(), _e), P.current && V();
  }), re = () => fg.isTopModal(K()), je = Sd((_e) => {
    N.current = _e, _e && (D && re() ? V() : P.current && Wv(P.current, ue));
  }), Fe = me.useCallback(() => {
    fg.remove(K(), ue);
  }, [ue]);
  me.useEffect(() => () => {
    Fe();
  }, [Fe]), me.useEffect(() => {
    D ? le() : (!ee || !y) && Fe();
  }, [D, Fe, ee, y, le]);
  const k = (_e) => (Ce) => {
    var ht;
    (ht = _e.onKeyDown) == null || ht.call(_e, Ce), !(Ce.key !== "Escape" || Ce.which === 229 || // Wait until IME is settled.
    !re()) && (f || (Ce.stopPropagation(), w && w(Ce, "escapeKeyDown")));
  }, oe = (_e) => (Ce) => {
    var ht;
    (ht = _e.onClick) == null || ht.call(_e, Ce), Ce.target === Ce.currentTarget && w && w(Ce, "backdropClick");
  };
  return {
    getRootProps: (_e = {}) => {
      const Ce = Lw(o);
      delete Ce.onTransitionEnter, delete Ce.onTransitionExited;
      const ht = {
        ...Ce,
        ..._e
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...ht,
        onKeyDown: k(ht),
        ref: H
      };
    },
    getBackdropProps: (_e = {}) => {
      const Ce = _e;
      return {
        "aria-hidden": !0,
        ...Ce,
        onClick: oe(Ce),
        open: D
      };
    },
    getTransitionProps: () => {
      const _e = () => {
        U(!1), S && S();
      }, Ce = () => {
        U(!0), m && m(), y && Fe();
      };
      return {
        onEnter: NR(_e, x == null ? void 0 : x.props.onEnter),
        onExited: NR(Ce, x == null ? void 0 : x.props.onExited)
      };
    },
    rootRef: H,
    portalRef: je,
    isTopModal: re,
    exited: $,
    hasTransition: ee
  };
}
function I5(o) {
  return qa("MuiModal", o);
}
pi("MuiModal", ["root", "hidden", "backdrop"]);
const W5 = (o) => {
  const {
    open: s,
    exited: f,
    classes: v
  } = o;
  return Ai({
    root: ["root", !s && f && "hidden"],
    backdrop: ["backdrop"]
  }, I5, v);
}, Y5 = Vn("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (o, s) => {
    const {
      ownerState: f
    } = o;
    return [s.root, !f.open && f.exited && s.hidden];
  }
})(Pl(({
  theme: o
}) => ({
  position: "fixed",
  zIndex: (o.vars || o).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: s
    }) => !s.open && s.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), G5 = Vn(gE, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (o, s) => s.backdrop
})({
  zIndex: -1
}), qw = /* @__PURE__ */ me.forwardRef(function(s, f) {
  const v = vi({
    name: "MuiModal",
    props: s
  }), {
    BackdropComponent: y = G5,
    BackdropProps: S,
    classes: m,
    className: x,
    closeAfterTransition: w = !1,
    children: D,
    container: A,
    component: _,
    components: N = {},
    componentsProps: P = {},
    disableAutoFocus: H = !1,
    disableEnforceFocus: $ = !1,
    disableEscapeKeyDown: U = !1,
    disablePortal: ee = !1,
    disableRestoreFocus: ue = !1,
    disableScrollLock: q = !1,
    hideBackdrop: K = !1,
    keepMounted: V = !1,
    onBackdropClick: le,
    onClose: re,
    onTransitionEnter: je,
    onTransitionExited: Fe,
    open: k,
    slotProps: oe = {},
    slots: Te = {},
    // eslint-disable-next-line react/prop-types
    theme: ve,
    ...Se
  } = v, _e = {
    ...v,
    closeAfterTransition: w,
    disableAutoFocus: H,
    disableEnforceFocus: $,
    disableEscapeKeyDown: U,
    disablePortal: ee,
    disableRestoreFocus: ue,
    disableScrollLock: q,
    hideBackdrop: K,
    keepMounted: V
  }, {
    getRootProps: Ce,
    getBackdropProps: ht,
    getTransitionProps: ce,
    portalRef: Ae,
    isTopModal: W,
    exited: se,
    hasTransition: Oe
  } = H5({
    ..._e,
    rootRef: f
  }), Be = {
    ..._e,
    exited: se
  }, xe = W5(Be), it = {};
  if (D.props.tabIndex === void 0 && (it.tabIndex = "-1"), Oe) {
    const {
      onEnter: be,
      onExited: Rt
    } = ce();
    it.onEnter = be, it.onExited = Rt;
  }
  const Ve = {
    ...Se,
    slots: {
      root: N.Root,
      backdrop: N.Backdrop,
      ...Te
    },
    slotProps: {
      ...P,
      ...oe
    }
  }, [Je, et] = Og("root", {
    elementType: Y5,
    externalForwardedProps: Ve,
    getSlotProps: Ce,
    additionalProps: {
      ref: f,
      as: _
    },
    ownerState: Be,
    className: pn(x, xe == null ? void 0 : xe.root, !Be.open && Be.exited && (xe == null ? void 0 : xe.hidden))
  }), [st, ct] = Og("backdrop", {
    elementType: y,
    externalForwardedProps: Ve,
    additionalProps: S,
    getSlotProps: (be) => ht({
      ...be,
      onClick: (Rt) => {
        le && le(Rt), be != null && be.onClick && be.onClick(Rt);
      }
    }),
    className: pn(S == null ? void 0 : S.className, xe == null ? void 0 : xe.backdrop),
    ownerState: Be
  }), Dt = Ku(S == null ? void 0 : S.ref, ct.ref);
  return !V && !k && (!Oe || se) ? null : /* @__PURE__ */ ut.jsx(kg, {
    ref: Ae,
    container: A,
    disablePortal: ee,
    children: /* @__PURE__ */ ut.jsxs(Je, {
      ...et,
      children: [!K && y ? /* @__PURE__ */ ut.jsx(st, {
        ...ct,
        ref: Dt
      }) : null, /* @__PURE__ */ ut.jsx(wg, {
        disableEnforceFocus: $,
        disableAutoFocus: H,
        disableRestoreFocus: ue,
        isEnabled: W,
        open: k,
        children: /* @__PURE__ */ me.cloneElement(D, it)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (qw.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: C.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: C.object,
  /**
   * A single child content element.
   */
  children: Vg.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: C.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: C.shape({
    Backdrop: C.elementType,
    Root: C.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: C.shape({
    backdrop: C.oneOfType([C.func, C.object]),
    root: C.oneOfType([C.func, C.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: C.oneOfType([_w, C.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: C.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: C.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: C.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: C.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: C.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: C.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: C.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: C.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: C.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: C.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: C.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: C.func,
  /**
   * If `true`, the component is shown.
   */
  open: C.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: C.shape({
    backdrop: C.oneOfType([C.func, C.object]),
    root: C.oneOfType([C.func, C.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: C.shape({
    backdrop: C.elementType,
    root: C.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object])
});
function Q5(o) {
  return qa("MuiPaper", o);
}
pi("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const q5 = (o) => {
  const {
    square: s,
    elevation: f,
    variant: v,
    classes: y
  } = o, S = {
    root: ["root", v, !s && "rounded", v === "elevation" && `elevation${f}`]
  };
  return Ai(S, Q5, y);
}, K5 = Vn("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (o, s) => {
    const {
      ownerState: f
    } = o;
    return [s.root, s[f.variant], !f.square && s.rounded, f.variant === "elevation" && s[`elevation${f.elevation}`]];
  }
})(Pl(({
  theme: o
}) => ({
  backgroundColor: (o.vars || o).palette.background.paper,
  color: (o.vars || o).palette.text.primary,
  transition: o.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: s
    }) => !s.square,
    style: {
      borderRadius: o.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(o.vars || o).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), SE = /* @__PURE__ */ me.forwardRef(function(s, f) {
  var P;
  const v = vi({
    props: s,
    name: "MuiPaper"
  }), y = dE(), {
    className: S,
    component: m = "div",
    elevation: x = 1,
    square: w = !1,
    variant: D = "elevation",
    ...A
  } = v, _ = {
    ...v,
    component: m,
    elevation: x,
    square: w,
    variant: D
  }, N = q5(_);
  return process.env.NODE_ENV !== "production" && y.shadows[x] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${x}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${x}]\` is defined.`].join(`
`)), /* @__PURE__ */ ut.jsx(K5, {
    as: m,
    ownerState: _,
    className: pn(N.root, S),
    ref: f,
    ...A,
    style: {
      ...D === "elevation" && {
        "--Paper-shadow": (y.vars || y).shadows[x],
        ...y.vars && {
          "--Paper-overlay": (P = y.vars.overlays) == null ? void 0 : P[x]
        },
        ...!y.vars && y.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Ho("#fff", W1(x))}, ${Ho("#fff", W1(x))})`
        }
      },
      ...A.style
    }
  });
});
process.env.NODE_ENV !== "production" && (SE.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: th(HL, (o) => {
    const {
      elevation: s,
      variant: f
    } = o;
    return s > 0 && f === "outlined" ? new Error(`MUI: Combining \`elevation={${s}}\` with \`variant="${f}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: C.bool,
  /**
   * @ignore
   */
  style: C.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: C.oneOfType([C.oneOf(["elevation", "outlined"]), C.string])
});
function X5(o) {
  return qa("MuiDialog", o);
}
const A1 = pi("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), bE = /* @__PURE__ */ me.createContext({});
process.env.NODE_ENV !== "production" && (bE.displayName = "DialogContext");
const Z5 = Vn(gE, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (o, s) => s.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), J5 = (o) => {
  const {
    classes: s,
    scroll: f,
    maxWidth: v,
    fullWidth: y,
    fullScreen: S
  } = o, m = {
    root: ["root"],
    container: ["container", `scroll${Pt(f)}`],
    paper: ["paper", `paperScroll${Pt(f)}`, `paperWidth${Pt(String(v))}`, y && "paperFullWidth", S && "paperFullScreen"]
  };
  return Ai(m, X5, s);
}, eU = Vn(qw, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (o, s) => s.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), tU = Vn("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (o, s) => {
    const {
      ownerState: f
    } = o;
    return [s.container, s[`scroll${Pt(f.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
}), nU = Vn(SE, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (o, s) => {
    const {
      ownerState: f
    } = o;
    return [s.paper, s[`scrollPaper${Pt(f.scroll)}`], s[`paperWidth${Pt(String(f.maxWidth))}`], f.fullWidth && s.paperFullWidth, f.fullScreen && s.paperFullScreen];
  }
})(Pl(({
  theme: o
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState: s
    }) => !s.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: o.breakpoints.unit === "px" ? Math.max(o.breakpoints.values.xs, 444) : `max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,
      [`&.${A1.paperScrollBody}`]: {
        [o.breakpoints.down(Math.max(o.breakpoints.values.xs, 444) + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(o.breakpoints.values).filter((s) => s !== "xs").map((s) => ({
    props: {
      maxWidth: s
    },
    style: {
      maxWidth: `${o.breakpoints.values[s]}${o.breakpoints.unit}`,
      [`&.${A1.paperScrollBody}`]: {
        [o.breakpoints.down(o.breakpoints.values[s] + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState: s
    }) => s.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState: s
    }) => s.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${A1.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), Kw = /* @__PURE__ */ me.forwardRef(function(s, f) {
  const v = vi({
    props: s,
    name: "MuiDialog"
  }), y = dE(), S = {
    enter: y.transitions.duration.enteringScreen,
    exit: y.transitions.duration.leavingScreen
  }, {
    "aria-describedby": m,
    "aria-labelledby": x,
    BackdropComponent: w,
    BackdropProps: D,
    children: A,
    className: _,
    disableEscapeKeyDown: N = !1,
    fullScreen: P = !1,
    fullWidth: H = !1,
    maxWidth: $ = "sm",
    onBackdropClick: U,
    onClick: ee,
    onClose: ue,
    open: q,
    PaperComponent: K = SE,
    PaperProps: V = {},
    scroll: le = "paper",
    TransitionComponent: re = yE,
    transitionDuration: je = S,
    TransitionProps: Fe,
    ...k
  } = v, oe = {
    ...v,
    disableEscapeKeyDown: N,
    fullScreen: P,
    fullWidth: H,
    maxWidth: $,
    scroll: le
  }, Te = J5(oe), ve = me.useRef(), Se = (ce) => {
    ve.current = ce.target === ce.currentTarget;
  }, _e = (ce) => {
    ee && ee(ce), ve.current && (ve.current = null, U && U(ce), ue && ue(ce, "backdropClick"));
  }, Ce = PL(x), ht = me.useMemo(() => ({
    titleId: Ce
  }), [Ce]);
  return /* @__PURE__ */ ut.jsx(eU, {
    className: pn(Te.root, _),
    closeAfterTransition: !0,
    components: {
      Backdrop: Z5
    },
    componentsProps: {
      backdrop: {
        transitionDuration: je,
        as: w,
        ...D
      }
    },
    disableEscapeKeyDown: N,
    onClose: ue,
    open: q,
    ref: f,
    onClick: _e,
    ownerState: oe,
    ...k,
    children: /* @__PURE__ */ ut.jsx(re, {
      appear: !0,
      in: q,
      timeout: je,
      role: "presentation",
      ...Fe,
      children: /* @__PURE__ */ ut.jsx(tU, {
        className: pn(Te.container),
        onMouseDown: Se,
        ownerState: oe,
        children: /* @__PURE__ */ ut.jsx(nU, {
          as: K,
          elevation: 24,
          role: "dialog",
          "aria-describedby": m,
          "aria-labelledby": Ce,
          ...V,
          className: pn(Te.paper, V.className),
          ownerState: oe,
          children: /* @__PURE__ */ ut.jsx(bE.Provider, {
            value: ht,
            children: A
          })
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Kw.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": C.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": C.string,
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: C.elementType,
  /**
   * @ignore
   */
  BackdropProps: C.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: C.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: C.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: C.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: C.oneOfType([C.oneOf(["xs", "sm", "md", "lg", "xl", !1]), C.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: C.func,
  /**
   * @ignore
   */
  onClick: C.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: C.func,
  /**
   * If `true`, the component is shown.
   */
  open: C.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: C.elementType,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: C.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: C.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: C.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: C.oneOfType([C.number, C.shape({
    appear: C.number,
    enter: C.number,
    exit: C.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: C.object
});
function rU(o) {
  return qa("MuiTypography", o);
}
pi("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const aU = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, iU = zz(), oU = (o) => {
  const {
    align: s,
    gutterBottom: f,
    noWrap: v,
    paragraph: y,
    variant: S,
    classes: m
  } = o, x = {
    root: ["root", S, o.align !== "inherit" && `align${Pt(s)}`, f && "gutterBottom", v && "noWrap", y && "paragraph"]
  };
  return Ai(x, rU, m);
}, lU = Vn("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (o, s) => {
    const {
      ownerState: f
    } = o;
    return [s.root, f.variant && s[f.variant], f.align !== "inherit" && s[`align${Pt(f.align)}`], f.noWrap && s.noWrap, f.gutterBottom && s.gutterBottom, f.paragraph && s.paragraph];
  }
})(Pl(({
  theme: o
}) => {
  var s;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(o.typography).filter(([f, v]) => f !== "inherit" && v && typeof v == "object").map(([f, v]) => ({
      props: {
        variant: f
      },
      style: v
    })), ...Object.entries(o.palette).filter(Rg()).map(([f]) => ({
      props: {
        color: f
      },
      style: {
        color: (o.vars || o).palette[f].main
      }
    })), ...Object.entries(((s = o.palette) == null ? void 0 : s.text) || {}).filter(([, f]) => typeof f == "string").map(([f]) => ({
      props: {
        color: `text${Pt(f)}`
      },
      style: {
        color: (o.vars || o).palette.text[f]
      }
    })), {
      props: ({
        ownerState: f
      }) => f.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: f
      }) => f.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: f
      }) => f.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: f
      }) => f.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), tw = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, EE = /* @__PURE__ */ me.forwardRef(function(s, f) {
  const {
    color: v,
    ...y
  } = vi({
    props: s,
    name: "MuiTypography"
  }), S = !aU[v], m = iU({
    ...y,
    ...S && {
      color: v
    }
  }), {
    align: x = "inherit",
    className: w,
    component: D,
    gutterBottom: A = !1,
    noWrap: _ = !1,
    paragraph: N = !1,
    variant: P = "body1",
    variantMapping: H = tw,
    ...$
  } = m, U = {
    ...m,
    align: x,
    color: v,
    className: w,
    component: D,
    gutterBottom: A,
    noWrap: _,
    paragraph: N,
    variant: P,
    variantMapping: H
  }, ee = D || (N ? "p" : H[P] || tw[P]) || "span", ue = oU(U);
  return /* @__PURE__ */ ut.jsx(lU, {
    as: ee,
    ref: f,
    className: pn(ue.root, w),
    ...$,
    ownerState: U,
    style: {
      ...x !== "inherit" && {
        "--Typography-textAlign": x
      },
      ...$.style
    }
  });
});
process.env.NODE_ENV !== "production" && (EE.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: C.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: C.oneOfType([C.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), C.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: C.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: C.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: C.bool,
  /**
   * @ignore
   */
  style: C.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: C.oneOfType([C.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), C.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: C.object
});
function uU(o) {
  return qa("MuiDialogTitle", o);
}
const sU = pi("MuiDialogTitle", ["root"]), cU = (o) => {
  const {
    classes: s
  } = o;
  return Ai({
    root: ["root"]
  }, uU, s);
}, fU = Vn(EE, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (o, s) => s.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Xw = /* @__PURE__ */ me.forwardRef(function(s, f) {
  const v = vi({
    props: s,
    name: "MuiDialogTitle"
  }), {
    className: y,
    id: S,
    ...m
  } = v, x = v, w = cU(x), {
    titleId: D = S
  } = me.useContext(bE);
  return /* @__PURE__ */ ut.jsx(fU, {
    component: "h2",
    className: pn(w.root, y),
    ownerState: x,
    ref: f,
    variant: "h6",
    id: S ?? D,
    ...m
  });
});
process.env.NODE_ENV !== "production" && (Xw.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * @ignore
   */
  id: C.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object])
});
function dU(o) {
  return qa("MuiDialogContent", o);
}
pi("MuiDialogContent", ["root", "dividers"]);
const pU = (o) => {
  const {
    classes: s,
    dividers: f
  } = o;
  return Ai({
    root: ["root", f && "dividers"]
  }, dU, s);
}, vU = Vn("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (o, s) => {
    const {
      ownerState: f
    } = o;
    return [s.root, f.dividers && s.dividers];
  }
})(Pl(({
  theme: o
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState: s
    }) => s.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(o.vars || o).palette.divider}`,
      borderBottom: `1px solid ${(o.vars || o).palette.divider}`
    }
  }, {
    props: ({
      ownerState: s
    }) => !s.dividers,
    style: {
      [`.${sU.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Zw = /* @__PURE__ */ me.forwardRef(function(s, f) {
  const v = vi({
    props: s,
    name: "MuiDialogContent"
  }), {
    className: y,
    dividers: S = !1,
    ...m
  } = v, x = {
    ...v,
    dividers: S
  }, w = pU(x);
  return /* @__PURE__ */ ut.jsx(vU, {
    className: pn(w.root, y),
    ownerState: x,
    ref: f,
    ...m
  });
});
process.env.NODE_ENV !== "production" && (Zw.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: C.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object])
});
function hU(o) {
  return qa("MuiDialogActions", o);
}
pi("MuiDialogActions", ["root", "spacing"]);
const mU = (o) => {
  const {
    classes: s,
    disableSpacing: f
  } = o;
  return Ai({
    root: ["root", !f && "spacing"]
  }, hU, s);
}, yU = Vn("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (o, s) => {
    const {
      ownerState: f
    } = o;
    return [s.root, !f.disableSpacing && s.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState: o
    }) => !o.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
}), Jw = /* @__PURE__ */ me.forwardRef(function(s, f) {
  const v = vi({
    props: s,
    name: "MuiDialogActions"
  }), {
    className: y,
    disableSpacing: S = !1,
    ...m
  } = v, x = {
    ...v,
    disableSpacing: S
  }, w = mU(x);
  return /* @__PURE__ */ ut.jsx(yU, {
    className: pn(w.root, y),
    ownerState: x,
    ref: f,
    ...m
  });
});
process.env.NODE_ENV !== "production" && (Jw.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: C.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object])
});
const gU = mE(/* @__PURE__ */ ut.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), SU = Vn(Kw)(({ theme: o }) => ({
  "& .MuiDialogContent-root": {
    padding: o.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: o.spacing(1)
  }
})), DU = ({
  open: o,
  onClose: s,
  title: f,
  content: v,
  titleSx: y,
  contentSx: S,
  dialogSx: m,
  width: x = "600px",
  height: w = "auto"
}) => /* @__PURE__ */ ut.jsxs(
  SU,
  {
    onClose: s,
    "aria-labelledby": "customized-dialog-title",
    open: o,
    sx: {
      ...m,
      "& .MuiDialog-paper": {
        width: x,
        height: w,
        maxWidth: "90%"
      }
    },
    children: [
      /* @__PURE__ */ ut.jsxs(Xw, { sx: { m: 0, p: 2, ...y }, id: "customized-dialog-title", children: [
        f,
        /* @__PURE__ */ ut.jsx(
          Ig,
          {
            "aria-label": "close",
            onClick: s,
            sx: (D) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: D.palette.grey[500]
            }),
            children: /* @__PURE__ */ ut.jsx(gU, {})
          }
        )
      ] }),
      /* @__PURE__ */ ut.jsx(Zw, { dividers: !0, sx: S, children: v.map((D, A) => /* @__PURE__ */ ut.jsx(EE, { gutterBottom: !0, children: D }, A)) }),
      /* @__PURE__ */ ut.jsx(Jw, { children: /* @__PURE__ */ ut.jsx(Hg, { onClick: s, autoFocus: !0, children: "Close" }) })
    ]
  }
);
export {
  RU as CustomButton,
  DU as DanielPN,
  wU as MyButton,
  OU as MyFavouriteBorderIcon,
  kU as myfavourite
};
//# sourceMappingURL=index.es.js.map
