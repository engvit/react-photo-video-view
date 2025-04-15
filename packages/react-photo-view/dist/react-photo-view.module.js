import { jsx as n, jsxs as e, Fragment as t } from 'react/jsx-runtime';
import {
  useRef as r,
  useReducer as i,
  createContext as o,
  useEffect as a,
  useLayoutEffect as c,
  useMemo as u,
  useCallback as l,
  useState as s,
  useContext as d,
  useImperativeHandle as h,
  Children as v,
  cloneElement as f,
} from 'react';
import { createPortal as m } from 'react-dom';
function g() {
  return (
    (g = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }),
    g.apply(null, arguments)
  );
}
function p(n, e) {
  if (null == n) return {};
  var t = {};
  for (var r in n)
    if ({}.hasOwnProperty.call(n, r)) {
      if (-1 !== e.indexOf(r)) continue;
      t[r] = n[r];
    }
  return t;
}
function w(n) {
  var e = r({ fn: n, curr: void 0 }).current;
  if (((e.fn = n), !e.curr)) {
    var t = Object.create(null);
    Object.keys(n).forEach(function (n) {
      t[n] = function () {
        var t;
        return (t = e.fn[n]).call.apply(t, [e.fn].concat([].slice.call(arguments)));
      };
    }),
      (e.curr = t);
  }
  return e.curr;
}
function x(n) {
  return i(function (n, e) {
    return g({}, n, 'function' == typeof e ? e(n) : e);
  }, n);
}
var y = o(void 0),
  C = 'cubic-bezier(0.25, 0.8, 0.25, 1)',
  b = 20,
  P = 'undefined' != typeof window && 'ontouchstart' in window,
  k = function (n, e, t) {
    return Math.max(Math.min(n, t), e);
  },
  _ = function (n, e, t) {
    return void 0 === e && (e = 0), void 0 === t && (t = 0), k(n, 1 * (1 - t), Math.max(6, e) * (1 + t));
  },
  M = 'undefined' == typeof window || /ServerSideRendering/.test(navigator && navigator.userAgent) ? a : c;
function Y(n, e, t) {
  var i = r(e);
  (i.current = e),
    a(
      function () {
        function e(n) {
          i.current(n);
        }
        return (
          n && window.addEventListener(n, e, t),
          function () {
            n && window.removeEventListener(n, e);
          }
        );
      },
      [n],
    );
}
var X = ['container'];
function N(e) {
  var t = e.container,
    r = void 0 === t ? document.body : t,
    i = p(e, X);
  return m(n('div', g({}, i)), r);
}
function W(e) {
  return n(
    'svg',
    g({ width: '44', height: '44', viewBox: '0 0 768 768' }, e, {
      children: n('path', {
        d: 'M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z',
      }),
    }),
  );
}
function S(e) {
  return n(
    'svg',
    g({ width: '44', height: '44', viewBox: '0 0 768 768' }, e, {
      children: n('path', { d: 'M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z' }),
    }),
  );
}
function T(e) {
  return n(
    'svg',
    g({ width: '44', height: '44', viewBox: '0 0 768 768' }, e, {
      children: n('path', { d: 'M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z' }),
    }),
  );
}
function V() {
  return (
    a(function () {
      var n = document.body.style,
        e = n.overflow;
      return (
        (n.overflow = 'hidden'),
        function () {
          n.overflow = e;
        }
      );
    }, []),
    null
  );
}
function R(n) {
  var e = n.touches[0],
    t = e.clientX,
    r = e.clientY;
  if (n.touches.length >= 2) {
    var i = n.touches[1],
      o = i.clientX,
      a = i.clientY;
    return [(t + o) / 2, (r + a) / 2, Math.sqrt(Math.pow(o - t, 2) + Math.pow(a - r, 2))];
  }
  return [t, r, 0];
}
var A = function (n, e, t, r) {
  var i,
    o = t * e,
    a = (o - r) / 2,
    c = n;
  return (
    o <= r ? ((i = 1), (c = 0)) : n > 0 && a - n <= 0 ? ((i = 2), (c = a)) : n < 0 && a + n <= 0 && ((i = 3), (c = -a)),
    [i, c]
  );
};
function E(n, e, t, r, i, o, a, c, u, l) {
  void 0 === a && (a = innerWidth / 2),
    void 0 === c && (c = innerHeight / 2),
    void 0 === u && (u = 0),
    void 0 === l && (l = 0);
  var s = A(n, o, t, innerWidth)[0],
    d = A(e, o, r, innerHeight),
    h = innerWidth / 2,
    v = innerHeight / 2;
  return {
    x: a - (o / i) * (a - (h + n)) - h + (r / t >= 3 && t * o === innerWidth ? 0 : s ? u / 2 : u),
    y: c - (o / i) * (c - (v + e)) - v + (d[0] ? l / 2 : l),
    lastCX: a,
    lastCY: c,
  };
}
function I(n, e, t) {
  var r = n % 180 != 0;
  return r ? [t, e, r] : [e, t, r];
}
function H(n, e, t) {
  var r = I(t, innerWidth, innerHeight),
    i = r[0],
    o = r[1],
    a = 0,
    c = i,
    u = o,
    l = (n / e) * o,
    s = (e / n) * i;
  return (
    n < i && e < o
      ? ((c = n), (u = e))
      : n < i && e >= o
        ? (c = l)
        : (n >= i && e < o) || n / e > i / o
          ? (u = s)
          : e / n >= 3 && !r[2]
            ? (a = ((u = s) - o) / 2)
            : (c = l),
    { width: c, height: u, x: 0, y: a, pause: !0 }
  );
}
function L(n, e) {
  var t = e.leading,
    i = void 0 !== t && t,
    o = e.maxWait,
    a = e.wait,
    c = void 0 === a ? o || 0 : a,
    u = r(n);
  u.current = n;
  var s = r(0),
    d = r(),
    h = function () {
      return d.current && clearTimeout(d.current);
    },
    v = l(
      function () {
        var n = [].slice.call(arguments),
          e = Date.now();
        function t() {
          (s.current = e), h(), u.current.apply(null, n);
        }
        var r = s.current,
          a = e - r;
        if ((0 === r && (i && t(), (s.current = e)), void 0 !== o)) {
          if (a > o) return void t();
        } else a < c && (s.current = e);
        h(),
          (d.current = setTimeout(function () {
            t(), (s.current = 0);
          }, c));
      },
      [c, o, i],
    );
  return (v.cancel = h), v;
}
var B = function (n, e, t) {
    return O(
      n,
      e,
      t,
      100,
      function (n) {
        return n;
      },
      function () {
        return O(e, n, t);
      },
    );
  },
  D = function (n) {
    return 1 - Math.pow(1 - n, 4);
  };
function O(n, e, t, r, i, o) {
  void 0 === r && (r = 400), void 0 === i && (i = D);
  var a = e - n;
  if (0 !== a) {
    var c = Date.now(),
      u = 0,
      l = function () {
        var e = Math.min(1, (Date.now() - c) / r);
        t(n + i(e) * a) && e < 1 ? s() : (cancelAnimationFrame(u), e >= 1 && o && o());
      };
    s();
  }
  function s() {
    u = requestAnimationFrame(l);
  }
}
var F = { T: 0, L: 0, W: 0, H: 0, FIT: void 0 },
  j = function () {
    var n = r(!1);
    return (
      a(function () {
        return (
          (n.current = !0),
          function () {
            n.current = !1;
          }
        );
      }, []),
      n
    );
  },
  z = ['className'];
function q(t) {
  var r = t.className,
    i = void 0 === r ? '' : r,
    o = p(t, z);
  return n(
    'div',
    g({ className: 'PhotoView__Spinner ' + i }, o, {
      children: e('svg', {
        viewBox: '0 0 32 32',
        width: '36',
        height: '36',
        fill: 'white',
        children: [
          n('path', {
            opacity: '.25',
            d: 'M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4',
          }),
          n('path', { d: 'M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z' }),
        ],
      }),
    }),
  );
}
var K = ['src', 'loaded', 'broken', 'className', 'onPhotoLoad', 'loadingElement', 'brokenElement'];
function U(r) {
  var i = r.src,
    o = r.loaded,
    a = r.broken,
    c = r.className,
    u = r.onPhotoLoad,
    l = r.loadingElement,
    s = r.brokenElement,
    d = p(r, K),
    h = j();
  return i && !a
    ? e(t, {
        children: [
          n(
            'img',
            g(
              {
                className: 'PhotoView__Photo' + (c ? ' ' + c : ''),
                src: i,
                onLoad: function (n) {
                  var e = n.target;
                  h.current && u({ loaded: !0, naturalWidth: e.naturalWidth, naturalHeight: e.naturalHeight });
                },
                onError: function () {
                  h.current && u({ broken: !0 });
                },
                draggable: !1,
                alt: '',
              },
              d,
            ),
          ),
          !o && (l ? n('span', { className: 'PhotoView__icon', children: l }) : n(q, { className: 'PhotoView__icon' })),
        ],
      })
    : s
      ? n('span', { className: 'PhotoView__icon', children: 'function' == typeof s ? s({ src: i }) : s })
      : null;
}
var G = {
  naturalWidth: void 0,
  naturalHeight: void 0,
  width: void 0,
  height: void 0,
  loaded: void 0,
  broken: !1,
  x: 0,
  y: 0,
  touched: !1,
  maskTouched: !1,
  rotate: 0,
  scale: 1,
  CX: 0,
  CY: 0,
  lastX: 0,
  lastY: 0,
  lastCX: 0,
  lastCY: 0,
  lastScale: 1,
  touchTime: 0,
  touchLength: 0,
  pause: !0,
  stopRaf: !0,
  reach: void 0,
};
function J(e) {
  var t = e.item,
    i = t.src,
    o = t.render,
    c = t.width,
    u = void 0 === c ? 0 : c,
    l = t.height,
    d = void 0 === l ? 0 : l,
    h = t.originRef,
    v = t.format,
    f = e.visible,
    m = e.speed,
    p = e.easing,
    y = e.wrapClassName,
    C = e.className,
    b = e.style,
    k = e.loadingElement,
    X = e.brokenElement,
    N = e.onPhotoTap,
    W = e.onMaskTap,
    S = e.onReachMove,
    T = e.onReachUp,
    V = e.onPhotoResize,
    D = e.isActive,
    z = e.expose,
    q = x(G),
    K = q[0],
    J = q[1],
    Q = r(0),
    Z = j(),
    $ = K.naturalWidth,
    nn = void 0 === $ ? u : $,
    en = K.naturalHeight,
    tn = void 0 === en ? d : en,
    rn = K.width,
    on = void 0 === rn ? u : rn,
    an = K.height,
    cn = void 0 === an ? d : an,
    un = K.loaded,
    ln = void 0 === un ? !i : un,
    sn = K.broken,
    dn = K.x,
    hn = K.y,
    vn = K.touched,
    fn = K.stopRaf,
    mn = K.maskTouched,
    gn = K.rotate,
    pn = K.scale,
    wn = K.CX,
    xn = K.CY,
    yn = K.lastX,
    Cn = K.lastY,
    bn = K.lastCX,
    Pn = K.lastCY,
    kn = K.lastScale,
    _n = K.touchTime,
    Mn = K.touchLength,
    Yn = K.pause,
    Xn = K.reach,
    Nn = w({
      onScale: function (n) {
        return Wn(_(n));
      },
      onRotate: function (n) {
        gn !== n && (z({ rotate: n }), J(g({ rotate: n }, H(nn, tn, n))));
      },
    });
  function Wn(n, e, t) {
    pn !== n && (z({ scale: n }), J(g({ scale: n }, E(dn, hn, on, cn, pn, n, e, t), n <= 1 && { x: 0, y: 0 })));
  }
  var Sn = L(
    function (n, e, t) {
      if ((void 0 === t && (t = 0), (vn || mn) && D)) {
        var r = I(gn, on, cn),
          i = r[0],
          o = r[1];
        if (0 === t && 0 === Q.current) {
          var a = Math.abs(n - wn) <= 20,
            c = Math.abs(e - xn) <= 20;
          if (a && c) return void J({ lastCX: n, lastCY: e });
          Q.current = a ? (e > xn ? 3 : 2) : 1;
        }
        var u,
          l = n - bn,
          s = e - Pn;
        if (0 === t) {
          var d = A(l + yn, pn, i, innerWidth)[0],
            h = A(s + Cn, pn, o, innerHeight);
          (u = (function (n, e, t, r) {
            return (e && 1 === n) || 'x' === r ? 'x' : (t && n > 1) || 'y' === r ? 'y' : void 0;
          })(Q.current, d, h[0], Xn)),
            void 0 !== u && S(u, n, e, pn);
        }
        if ('x' === u || mn) return void J({ reach: 'x' });
        var v = _(pn + ((t - Mn) / 100 / 2) * pn, nn / on, 0.2);
        z({ scale: v }), J(g({ touchLength: t, reach: u, scale: v }, E(dn, hn, on, cn, pn, v, n, e, l, s)));
      }
    },
    { maxWait: 8 },
  );
  function Tn(n) {
    return !fn && !vn && (Z.current && J(g({}, n, { pause: f })), Z.current);
  }
  var Vn,
    Rn,
    An,
    En,
    In,
    Hn,
    Ln,
    Bn,
    Dn =
      ((In = function (n) {
        return Tn({ x: n });
      }),
      (Hn = function (n) {
        return Tn({ y: n });
      }),
      (Ln = function (n) {
        return Z.current && (z({ scale: n }), J({ scale: n })), !vn && Z.current;
      }),
      (Bn = w({
        X: function (n) {
          return In(n);
        },
        Y: function (n) {
          return Hn(n);
        },
        S: function (n) {
          return Ln(n);
        },
      })),
      function (n, e, t, r, i, o, a, c, u, l, s) {
        var d = I(l, i, o),
          h = d[0],
          v = d[1],
          f = A(n, c, h, innerWidth),
          m = f[0],
          g = f[1],
          p = A(e, c, v, innerHeight),
          w = p[0],
          x = p[1],
          y = Date.now() - s;
        if (y >= 200 || c !== a || Math.abs(u - a) > 1) {
          var C = E(n, e, i, o, a, c),
            b = C.x,
            P = C.y,
            k = m ? g : b !== n ? b : null,
            _ = w ? x : P !== e ? P : null;
          return null !== k && O(n, k, Bn.X), null !== _ && O(e, _, Bn.Y), void (c !== a && O(a, c, Bn.S));
        }
        var M = (n - t) / y,
          Y = (e - r) / y,
          X = Math.sqrt(Math.pow(M, 2) + Math.pow(Y, 2)),
          N = !1,
          W = !1;
        !(function (n, e) {
          var t,
            r = n,
            i = 0,
            o = 0,
            a = function (o) {
              t || (t = o);
              var a = o - t,
                l = Math.sign(n),
                s = -0.001 * l,
                d = Math.sign(-r) * Math.pow(r, 2) * 2e-4,
                h = r * a + ((s + d) * Math.pow(a, 2)) / 2;
              (i += h), (t = o), l * (r += (s + d) * a) <= 0 ? u() : e(i) ? c() : u();
            };
          function c() {
            o = requestAnimationFrame(a);
          }
          function u() {
            cancelAnimationFrame(o);
          }
          c();
        })(X, function (t) {
          var r = n + t * (M / X),
            i = e + t * (Y / X),
            o = A(r, a, h, innerWidth),
            c = o[0],
            u = o[1],
            l = A(i, a, v, innerHeight),
            s = l[0],
            d = l[1];
          if (
            (c && !N && ((N = !0), m ? O(r, u, Bn.X) : B(u, r + (r - u), Bn.X)),
            s && !W && ((W = !0), w ? O(i, d, Bn.Y) : B(d, i + (i - d), Bn.Y)),
            N && W)
          )
            return !1;
          var f = N || Bn.X(u),
            g = W || Bn.Y(d);
          return f && g;
        });
      }),
    On =
      ((Vn = N),
      (Rn = function (n, e) {
        Xn || Wn(1 !== pn ? 1 : Math.max(2, nn / on), n, e);
      }),
      (An = r(0)),
      (En = L(
        function () {
          (An.current = 0), Vn.apply(void 0, [].slice.call(arguments));
        },
        { wait: 300 },
      )),
      function () {
        var n = [].slice.call(arguments);
        (An.current += 1), En.apply(void 0, n), An.current >= 2 && (En.cancel(), (An.current = 0), Rn.apply(void 0, n));
      });
  function Fn(n, e) {
    if (((Q.current = 0), (vn || mn) && D)) {
      J({ touched: !1, maskTouched: !1, pause: !1, stopRaf: !1, reach: void 0 });
      var t = _(pn, nn / on);
      if ((Dn(dn, hn, yn, Cn, on, cn, pn, t, kn, gn, _n), T(n, e), wn === n && xn === e)) {
        if (vn) return void On(n, e);
        mn && W(n, e);
      }
    }
  }
  function jn(n, e, t) {
    void 0 === t && (t = 0),
      J({
        touched: !0,
        CX: n,
        CY: e,
        lastCX: n,
        lastCY: e,
        lastX: dn,
        lastY: hn,
        lastScale: pn,
        touchLength: t,
        touchTime: Date.now(),
      });
  }
  function zn(n) {
    J({ maskTouched: !0, CX: n.clientX, CY: n.clientY, lastX: dn, lastY: hn });
  }
  Y(P ? void 0 : 'mousemove', function (n) {
    n.preventDefault(), Sn(n.clientX, n.clientY);
  }),
    Y(P ? void 0 : 'mouseup', function (n) {
      Fn(n.clientX, n.clientY);
    }),
    Y(
      P ? 'touchmove' : void 0,
      function (n) {
        n.preventDefault();
        var e = R(n);
        Sn.apply(void 0, e);
      },
      { passive: !1 },
    ),
    Y(
      P ? 'touchend' : void 0,
      function (n) {
        var e = n.changedTouches[0];
        Fn(e.clientX, e.clientY);
      },
      { passive: !1 },
    ),
    Y(
      'resize',
      L(
        function () {
          ln && !vn && (J(H(nn, tn, gn)), V());
        },
        { maxWait: 8 },
      ),
    ),
    M(
      function () {
        D && z(g({ scale: pn, rotate: gn }, Nn));
      },
      [D],
    );
  var qn = (function (n, e, t, i, o, c, u, l, d, h) {
      var v = (function (n, e, t, i, o) {
          var a = r(!1),
            c = x({ lead: !0, scale: t }),
            u = c[0],
            l = u.lead,
            s = u.scale,
            d = c[1],
            h = L(
              function (n) {
                try {
                  return o(!0), d({ lead: !1, scale: n }), Promise.resolve();
                } catch (n) {
                  return Promise.reject(n);
                }
              },
              { wait: i },
            );
          return (
            M(
              function () {
                a.current ? (o(!1), d({ lead: !0 }), h(t)) : (a.current = !0);
              },
              [t],
            ),
            l ? [n * s, e * s, t / s] : [n * t, e * t, 1]
          );
        })(c, u, l, d, h),
        f = v[0],
        m = v[1],
        g = v[2],
        p = (function (n, e, t, i, o) {
          var c = s(F),
            u = c[0],
            l = c[1],
            d = s(0),
            h = d[0],
            v = d[1],
            f = r(),
            m = w({
              OK: function () {
                return n && v(4);
              },
            });
          function g(n) {
            o(!1), v(n);
          }
          return (
            a(
              function () {
                if ((f.current || (f.current = Date.now()), t)) {
                  if (
                    ((function (n, e) {
                      var t = n && n.current;
                      if (t && 1 === t.nodeType) {
                        var r = t.getBoundingClientRect();
                        e({
                          T: r.top,
                          L: r.left,
                          W: r.width,
                          H: r.height,
                          FIT: 'IMG' === t.tagName ? getComputedStyle(t).objectFit : void 0,
                        });
                      }
                    })(e, l),
                    n)
                  )
                    return Date.now() - f.current < 250
                      ? (v(1),
                        requestAnimationFrame(function () {
                          v(2),
                            requestAnimationFrame(function () {
                              return g(3);
                            });
                        }),
                        void setTimeout(m.OK, i))
                      : void v(4);
                  g(5);
                }
              },
              [n, t],
            ),
            [h, u]
          );
        })(n, e, t, d, h),
        y = p[0],
        C = p[1],
        b = C.W,
        P = C.FIT,
        k = innerWidth / 2,
        _ = innerHeight / 2,
        Y = y < 3 || y > 4;
      return [
        Y ? (b ? C.L : k) : i + (k - (c * l) / 2),
        Y ? (b ? C.T : _) : o + (_ - (u * l) / 2),
        f,
        Y && P ? f * (C.H / b) : m,
        0 === y ? g : Y ? b / (c * l) || 0.01 : g,
        Y ? (P ? 1 : 0) : 1,
        y,
        P,
      ];
    })(f, h, ln, dn, hn, on, cn, pn, m, function (n) {
      return J({ pause: n });
    }),
    Kn = qn[4],
    Un = qn[6],
    Gn = 'transform ' + m + 'ms ' + p,
    Jn = {
      className: C,
      onMouseDown: P
        ? void 0
        : function (n) {
            n.stopPropagation(), 0 === n.button && jn(n.clientX, n.clientY, 0);
          },
      onTouchStart: P
        ? function (n) {
            n.stopPropagation(), jn.apply(void 0, R(n));
          }
        : void 0,
      onWheel: function (n) {
        if (!Xn) {
          var e = _(pn - n.deltaY / 100 / 2, nn / on);
          J({ stopRaf: !0 }), Wn(e, n.clientX, n.clientY);
        }
      },
      style: {
        width: qn[2] + 'px',
        height: qn[3] + 'px',
        opacity: qn[5],
        objectFit: 4 === Un ? void 0 : qn[7],
        transform: gn ? 'rotate(' + gn + 'deg)' : void 0,
        transition:
          Un > 2 ? Gn + ', opacity ' + m + 'ms ease, height ' + (Un < 4 ? m / 2 : Un > 4 ? m : 0) + 'ms ' + p : void 0,
      },
    };
  return n('div', {
    className: 'PhotoView__PhotoWrap' + (y ? ' ' + y : ''),
    style: b,
    onMouseDown: !P && D ? zn : void 0,
    onTouchStart:
      P && D
        ? function (n) {
            return zn(n.touches[0]);
          }
        : void 0,
    children: n('div', {
      className: 'PhotoView__PhotoBox PhotoBox_' + (v || 'image'),
      style: {
        transform: 'matrix(' + Kn + ', 0, 0, ' + Kn + ', ' + qn[0] + ', ' + qn[1] + ')',
        transition: vn || Yn ? void 0 : Gn,
        willChange: D ? 'transform' : void 0,
      },
      children: i
        ? n(
            U,
            g({ src: i, loaded: ln, broken: sn }, Jn, {
              onPhotoLoad: function (n) {
                J(g({}, n, n.loaded && H(n.naturalWidth || 0, n.naturalHeight || 0, gn)));
              },
              loadingElement: k,
              brokenElement: X,
            }),
          )
        : o && o({ attrs: Jn, scale: Kn, rotate: gn }),
    }),
  });
}
var Q = {
  x: 0,
  touched: !1,
  pause: !1,
  lastCX: void 0,
  lastCY: void 0,
  bg: void 0,
  lastBg: void 0,
  overlay: !0,
  minimal: !0,
  scale: 1,
  rotate: 0,
};
function Z(o) {
  var a = o.loop,
    c = void 0 === a ? 3 : a,
    l = o.speed,
    d = o.easing,
    h = o.photoClosable,
    v = o.maskClosable,
    f = void 0 === v || v,
    m = o.maskOpacity,
    g = void 0 === m ? 1 : m,
    p = o.pullClosable,
    y = void 0 === p || p,
    _ = o.bannerVisible,
    X = void 0 === _ || _,
    R = o.overlayRender,
    A = o.toolbarRender,
    E = o.className,
    I = o.maskClassName,
    H = o.photoClassName,
    L = o.photoWrapClassName,
    B = o.loadingElement,
    D = o.brokenElement,
    O = o.images,
    F = o.index,
    j = void 0 === F ? 0 : F,
    z = o.onIndexChange,
    q = o.visible,
    K = o.onClose,
    U = o.afterClose,
    G = o.portalContainer,
    Z = x(Q),
    $ = Z[0],
    nn = Z[1],
    en = s(0),
    tn = en[0],
    rn = en[1],
    on = $.x,
    an = $.touched,
    cn = $.pause,
    un = $.lastCX,
    ln = $.lastCY,
    sn = $.bg,
    dn = void 0 === sn ? g : sn,
    hn = $.lastBg,
    vn = $.overlay,
    fn = $.minimal,
    mn = $.scale,
    gn = $.rotate,
    pn = $.onScale,
    wn = $.onRotate,
    xn = o.hasOwnProperty('index'),
    yn = xn ? j : tn,
    Cn = xn ? z : rn,
    bn = r(yn),
    Pn = O.length,
    kn = O[yn],
    _n = 'boolean' == typeof c ? c : Pn > c,
    Mn = (function (n, e) {
      var t = i(function (n) {
          return !n;
        }, !1)[1],
        o = r(0),
        a = (function (e) {
          var t = r(e);
          function i(n) {
            t.current = n;
          }
          return (
            u(
              function () {
                !(function (e) {
                  n ? (e(n), (o.current = 1)) : (o.current = 2);
                })(i);
              },
              [e],
            ),
            [t.current, i]
          );
        })(n),
        c = a[1];
      return [
        a[0],
        o.current,
        function () {
          t(), 2 === o.current && (c(!1), e && e()), (o.current = 0);
        },
      ];
    })(q, U),
    Yn = Mn[0],
    Xn = Mn[1],
    Nn = Mn[2];
  M(
    function () {
      if (Yn) return nn({ pause: !0, x: yn * -(innerWidth + b) }), void (bn.current = yn);
      nn(Q);
    },
    [Yn],
  );
  var Wn = w({
      close: function (n) {
        wn && wn(0), nn({ overlay: !0, lastBg: dn }), K(n);
      },
      changeIndex: function (n, e) {
        void 0 === e && (e = !1);
        var t = _n ? bn.current + (n - yn) : n,
          r = Pn - 1,
          i = k(t, 0, r),
          o = _n ? t : i,
          a = innerWidth + b;
        nn({ touched: !1, lastCX: void 0, lastCY: void 0, x: -a * o, pause: e }),
          (bn.current = o),
          Cn && Cn(_n ? (n < 0 ? r : n > r ? 0 : n) : i);
      },
    }),
    Sn = Wn.close,
    Tn = Wn.changeIndex;
  function Vn(n) {
    return n ? Sn() : nn({ overlay: !vn });
  }
  function Rn() {
    nn({ x: -(innerWidth + b) * yn, lastCX: void 0, lastCY: void 0, pause: !0 }), (bn.current = yn);
  }
  function An(n, e, t, r) {
    'x' === n
      ? (function (n) {
          if (void 0 !== un) {
            var e = n - un,
              t = e;
            !_n && ((0 === yn && e > 0) || (yn === Pn - 1 && e < 0)) && (t = e / 2),
              nn({ touched: !0, lastCX: un, x: -(innerWidth + b) * bn.current + t, pause: !1 });
          } else nn({ touched: !0, lastCX: n, x: on, pause: !1 });
        })(e)
      : 'y' === n &&
        (function (n, e) {
          if (void 0 !== ln) {
            var t = null === g ? null : k(g, 0.01, g - Math.abs(n - ln) / 100 / 4);
            nn({ touched: !0, lastCY: ln, bg: 1 === e ? t : g, minimal: 1 === e });
          } else nn({ touched: !0, lastCY: n, bg: dn, minimal: !0 });
        })(t, r);
  }
  function En(n, e) {
    var t = n - (null != un ? un : n),
      r = e - (null != ln ? ln : e),
      i = !1;
    if (t < -40) Tn(yn + 1);
    else if (t > 40) Tn(yn - 1);
    else {
      var o = -(innerWidth + b) * bn.current;
      Math.abs(r) > 100 && fn && y && ((i = !0), Sn()),
        nn({ touched: !1, x: o, lastCX: void 0, lastCY: void 0, bg: g, overlay: !!i || vn });
    }
  }
  Y('keydown', function (n) {
    if (q)
      switch (n.key) {
        case 'ArrowLeft':
          Tn(yn - 1, !0);
          break;
        case 'ArrowRight':
          Tn(yn + 1, !0);
          break;
        case 'Escape':
          Sn();
      }
  });
  var In = (function (n, e, t) {
    return u(
      function () {
        var r = n.length;
        return t
          ? n
              .concat(n)
              .concat(n)
              .slice(r + e - 1, r + e + 2)
          : n.slice(Math.max(e - 1, 0), Math.min(e + 2, r + 1));
      },
      [n, e, t],
    );
  })(O, yn, _n);
  if (!Yn) return null;
  var Hn = vn && !Xn,
    Ln = q ? dn : hn,
    Bn = pn &&
      wn && {
        images: O,
        index: yn,
        visible: q,
        onClose: Sn,
        onIndexChange: Tn,
        overlayVisible: Hn,
        overlay: kn && kn.overlay,
        scale: mn,
        rotate: gn,
        onScale: pn,
        onRotate: wn,
      },
    Dn = l ? l(Xn) : 400,
    On = d ? d(Xn) : C,
    Fn = l ? l(3) : 600,
    jn = d ? d(3) : C;
  return e(N, {
    className:
      'PhotoView-Portal' +
      (Hn ? '' : ' PhotoView-Slider__clean') +
      (q ? '' : ' PhotoView-Slider__willClose') +
      (E ? ' ' + E : ''),
    role: 'dialog',
    onClick: function (n) {
      return n.stopPropagation();
    },
    container: G,
    children: [
      q && n(V, {}),
      n('div', {
        className:
          'PhotoView-Slider__Backdrop' +
          (I ? ' ' + I : '') +
          (1 === Xn ? ' PhotoView-Slider__fadeIn' : 2 === Xn ? ' PhotoView-Slider__fadeOut' : ''),
        style: {
          background: Ln ? 'rgba(0, 0, 0, ' + Ln + ')' : void 0,
          transitionTimingFunction: On,
          transitionDuration: (an ? 0 : Dn) + 'ms',
          animationDuration: Dn + 'ms',
        },
        onAnimationEnd: Nn,
      }),
      X &&
        e('div', {
          className: 'PhotoView-Slider__BannerWrap',
          children: [
            e('div', { className: 'PhotoView-Slider__Counter', children: [yn + 1, ' / ', Pn] }),
            e('div', {
              className: 'PhotoView-Slider__BannerRight',
              children: [A && Bn && A(Bn), n(W, { className: 'PhotoView-Slider__toolbarIcon', onClick: Sn })],
            }),
          ],
        }),
      In.map(function (e, t) {
        var r = _n || 0 !== yn ? bn.current - 1 + t : yn + t;
        return n(
          J,
          {
            item: e,
            speed: Dn,
            easing: On,
            visible: q,
            onReachMove: An,
            onReachUp: En,
            onPhotoTap: function () {
              return Vn(h);
            },
            onMaskTap: function () {
              return Vn(f);
            },
            wrapClassName: L,
            className: H,
            style: {
              left: (innerWidth + b) * r + 'px',
              transform: 'translate3d(' + on + 'px, 0px, 0)',
              transition: an || cn ? void 0 : 'transform ' + Fn + 'ms ' + jn,
            },
            loadingElement: B,
            brokenElement: D,
            onPhotoResize: Rn,
            isActive: bn.current === r,
            expose: nn,
          },
          _n ? e.key + '/' + e.src + '/' + r : e.key,
        );
      }),
      !P &&
        X &&
        e(t, {
          children: [
            (_n || 0 !== yn) &&
              n('div', {
                className: 'PhotoView-Slider__ArrowLeft',
                onClick: function () {
                  return Tn(yn - 1, !0);
                },
                children: n(S, {}),
              }),
            (_n || yn + 1 < Pn) &&
              n('div', {
                className: 'PhotoView-Slider__ArrowRight',
                onClick: function () {
                  return Tn(yn + 1, !0);
                },
                children: n(T, {}),
              }),
          ],
        }),
      R && Bn && n('div', { className: 'PhotoView-Slider__Overlay', children: R(Bn) }),
    ],
  });
}
var $ = ['children', 'onIndexChange', 'onVisibleChange'],
  nn = { images: [], visible: !1, index: 0 };
function en(t) {
  var i = t.children,
    o = t.onIndexChange,
    a = t.onVisibleChange,
    c = p(t, $),
    l = x(nn),
    s = l[0],
    d = l[1],
    h = r(0),
    v = s.images,
    f = s.visible,
    m = s.index,
    C = w({
      nextId: function () {
        return (h.current += 1);
      },
      update: function (n) {
        var e = v.findIndex(function (e) {
          return e.key === n.key;
        });
        if (e > -1) {
          var t = v.slice();
          return t.splice(e, 1, n), void d({ images: t });
        }
        d(function (e) {
          return { images: e.images.concat(n) };
        });
      },
      remove: function (n) {
        d(function (e) {
          var t = e.images.filter(function (e) {
            return e.key !== n;
          });
          return { images: t, index: Math.min(t.length - 1, m) };
        });
      },
      show: function (n) {
        var e = v.findIndex(function (e) {
          return e.key === n;
        });
        d({ visible: !0, index: e }), a && a(!0, e, s);
      },
    }),
    b = w({
      close: function () {
        d({ visible: !1 }), a && a(!1, m, s);
      },
      changeIndex: function (n) {
        d({ index: n }), o && o(n, s);
      },
    }),
    P = u(
      function () {
        return g({}, s, C);
      },
      [s, C],
    );
  return e(y.Provider, {
    value: P,
    children: [i, n(Z, g({ images: v, visible: f, index: m, onIndexChange: b.changeIndex, onClose: b.close }, c))],
  });
}
var tn = function (n) {
  var e,
    t,
    i = n.src,
    o = n.render,
    c = n.overlay,
    l = n.width,
    s = n.height,
    m = n.format,
    p = n.triggers,
    x = void 0 === p ? ['onClick'] : p,
    C = n.children,
    b = d(y),
    P =
      ((e = function () {
        return b.nextId();
      }),
      (t = r({ sign: !1, fn: void 0 }).current).sign || ((t.sign = !0), (t.fn = e())),
      t.fn),
    k = r(null);
  h(null == C ? void 0 : C.ref, function () {
    return k.current;
  }),
    a(function () {
      return function () {
        b.remove(P);
      };
    }, []);
  var _ = w({
      render: function (n) {
        return o && o(n);
      },
      show: function (n, e) {
        b.show(P),
          (function (n, e) {
            if (C) {
              var t = C.props[n];
              t && t(e);
            }
          })(n, e);
      },
    }),
    M = u(function () {
      var n = {};
      return (
        x.forEach(function (e) {
          n[e] = _.show.bind(null, e);
        }),
        n
      );
    }, []);
  return (
    a(
      function () {
        b.update({ key: P, src: i, originRef: k, render: _.render, overlay: c, width: l, height: s, format: m });
      },
      [i],
    ),
    C ? v.only(f(C, g({}, M, { ref: k }))) : null
  );
};
export { en as PhotoProvider, Z as PhotoSlider, tn as PhotoView };
//# sourceMappingURL=react-photo-view.module.js.map
