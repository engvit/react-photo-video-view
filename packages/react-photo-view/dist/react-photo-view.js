var e = require('react/jsx-runtime'),
  n = require('react'),
  t = require('react-dom');
function r() {
  return (
    (r = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
    r.apply(null, arguments)
  );
}
function i(e, n) {
  if (null == e) return {};
  var t = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (-1 !== n.indexOf(r)) continue;
      t[r] = e[r];
    }
  return t;
}
function o(e) {
  var t = n.useRef({ fn: e, curr: void 0 }).current;
  if (((t.fn = e), !t.curr)) {
    var r = Object.create(null);
    Object.keys(e).forEach(function (e) {
      r[e] = function () {
        var n;
        return (n = t.fn[e]).call.apply(n, [t.fn].concat([].slice.call(arguments)));
      };
    }),
      (t.curr = r);
  }
  return t.curr;
}
function a(e) {
  return n.useReducer(function (e, n) {
    return r({}, e, 'function' == typeof n ? n(e) : n);
  }, e);
}
var u = n.createContext(void 0),
  c = 'cubic-bezier(0.25, 0.8, 0.25, 1)',
  s = 20,
  l = 'undefined' != typeof window && 'ontouchstart' in window,
  d = function (e, n, t) {
    return Math.max(Math.min(e, t), n);
  },
  f = function (e, n, t) {
    return void 0 === n && (n = 0), void 0 === t && (t = 0), d(e, 1 * (1 - t), Math.max(6, n) * (1 + t));
  },
  h =
    'undefined' == typeof window || /ServerSideRendering/.test(navigator && navigator.userAgent)
      ? n.useEffect
      : n.useLayoutEffect;
function v(e, t, r) {
  var i = n.useRef(t);
  (i.current = t),
    n.useEffect(
      function () {
        function n(e) {
          i.current(e);
        }
        return (
          e && window.addEventListener(e, n, r),
          function () {
            e && window.removeEventListener(e, n);
          }
        );
      },
      [e],
    );
}
var m = ['container'];
function g(n) {
  var o = n.container,
    a = void 0 === o ? document.body : o,
    u = i(n, m);
  return t.createPortal(e.jsx('div', r({}, u)), a);
}
function p(n) {
  return e.jsx(
    'svg',
    r({ width: '44', height: '44', viewBox: '0 0 768 768' }, n, {
      children: e.jsx('path', {
        d: 'M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z',
      }),
    }),
  );
}
function x(n) {
  return e.jsx(
    'svg',
    r({ width: '44', height: '44', viewBox: '0 0 768 768' }, n, {
      children: e.jsx('path', {
        d: 'M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z',
      }),
    }),
  );
}
function w(n) {
  return e.jsx(
    'svg',
    r({ width: '44', height: '44', viewBox: '0 0 768 768' }, n, {
      children: e.jsx('path', { d: 'M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z' }),
    }),
  );
}
function y() {
  return (
    n.useEffect(function () {
      var e = document.body.style,
        n = e.overflow;
      return (
        (e.overflow = 'hidden'),
        function () {
          e.overflow = n;
        }
      );
    }, []),
    null
  );
}
function C(e) {
  var n = e.touches[0],
    t = n.clientX,
    r = n.clientY;
  if (e.touches.length >= 2) {
    var i = e.touches[1],
      o = i.clientX,
      a = i.clientY;
    return [(t + o) / 2, (r + a) / 2, Math.sqrt(Math.pow(o - t, 2) + Math.pow(a - r, 2))];
  }
  return [t, r, 0];
}
var b = function (e, n, t, r) {
  var i,
    o = t * n,
    a = (o - r) / 2,
    u = e;
  return (
    o <= r ? ((i = 1), (u = 0)) : e > 0 && a - e <= 0 ? ((i = 2), (u = a)) : e < 0 && a + e <= 0 && ((i = 3), (u = -a)),
    [i, u]
  );
};
function P(e, n, t, r, i, o, a, u, c, s) {
  void 0 === a && (a = innerWidth / 2),
    void 0 === u && (u = innerHeight / 2),
    void 0 === c && (c = 0),
    void 0 === s && (s = 0);
  var l = b(e, o, t, innerWidth)[0],
    d = b(n, o, r, innerHeight),
    f = innerWidth / 2,
    h = innerHeight / 2;
  return {
    x: a - (o / i) * (a - (f + e)) - f + (r / t >= 3 && t * o === innerWidth ? 0 : l ? c / 2 : c),
    y: u - (o / i) * (u - (h + n)) - h + (d[0] ? s / 2 : s),
    lastCX: a,
    lastCY: u,
  };
}
function j(e, n, t) {
  var r = e % 180 != 0;
  return r ? [t, n, r] : [n, t, r];
}
function k(e, n, t) {
  var r = j(t, innerWidth, innerHeight),
    i = r[0],
    o = r[1],
    a = 0,
    u = i,
    c = o,
    s = (e / n) * o,
    l = (n / e) * i;
  return (
    e < i && n < o
      ? ((u = e), (c = n))
      : e < i && n >= o
        ? (u = s)
        : (e >= i && n < o) || e / n > i / o
          ? (c = l)
          : n / e >= 3 && !r[2]
            ? (a = ((c = l) - o) / 2)
            : (u = s),
    { width: u, height: c, x: 0, y: a, pause: !0 }
  );
}
function M(e, t) {
  var r = t.leading,
    i = void 0 !== r && r,
    o = t.maxWait,
    a = t.wait,
    u = void 0 === a ? o || 0 : a,
    c = n.useRef(e);
  c.current = e;
  var s = n.useRef(0),
    l = n.useRef(),
    d = function () {
      return l.current && clearTimeout(l.current);
    },
    f = n.useCallback(
      function () {
        var e = [].slice.call(arguments),
          n = Date.now();
        function t() {
          (s.current = n), d(), c.current.apply(null, e);
        }
        var r = s.current,
          a = n - r;
        if ((0 === r && (i && t(), (s.current = n)), void 0 !== o)) {
          if (a > o) return void t();
        } else a < u && (s.current = n);
        d(),
          (l.current = setTimeout(function () {
            t(), (s.current = 0);
          }, u));
      },
      [u, o, i],
    );
  return (f.cancel = d), f;
}
var R = function (e, n, t) {
    return Y(
      e,
      n,
      t,
      100,
      function (e) {
        return e;
      },
      function () {
        return Y(n, e, t);
      },
    );
  },
  _ = function (e) {
    return 1 - Math.pow(1 - e, 4);
  };
function Y(e, n, t, r, i, o) {
  void 0 === r && (r = 400), void 0 === i && (i = _);
  var a = n - e;
  if (0 !== a) {
    var u = Date.now(),
      c = 0,
      s = function () {
        var n = Math.min(1, (Date.now() - u) / r);
        t(e + i(n) * a) && n < 1 ? l() : (cancelAnimationFrame(c), n >= 1 && o && o());
      };
    l();
  }
  function l() {
    c = requestAnimationFrame(s);
  }
}
var X = { T: 0, L: 0, W: 0, H: 0, FIT: void 0 },
  N = function () {
    var e = n.useRef(!1);
    return (
      n.useEffect(function () {
        return (
          (e.current = !0),
          function () {
            e.current = !1;
          }
        );
      }, []),
      e
    );
  },
  S = ['className'];
function W(n) {
  var t = n.className,
    o = void 0 === t ? '' : t,
    a = i(n, S);
  return e.jsx(
    'div',
    r({ className: 'PhotoView__Spinner ' + o }, a, {
      children: e.jsxs('svg', {
        viewBox: '0 0 32 32',
        width: '36',
        height: '36',
        fill: 'white',
        children: [
          e.jsx('path', {
            opacity: '.25',
            d: 'M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4',
          }),
          e.jsx('path', { d: 'M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z' }),
        ],
      }),
    }),
  );
}
var E = ['src', 'loaded', 'broken', 'className', 'onPhotoLoad', 'loadingElement', 'brokenElement'];
function T(n) {
  var t = n.src,
    o = n.loaded,
    a = n.broken,
    u = n.className,
    c = n.onPhotoLoad,
    s = n.loadingElement,
    l = n.brokenElement,
    d = i(n, E),
    f = N();
  return t && !a
    ? e.jsxs(e.Fragment, {
        children: [
          e.jsx(
            'img',
            r(
              {
                className: 'PhotoView__Photo' + (u ? ' ' + u : ''),
                src: t,
                onLoad: function (e) {
                  var n = e.target;
                  f.current && c({ loaded: !0, naturalWidth: n.naturalWidth, naturalHeight: n.naturalHeight });
                },
                onError: function () {
                  f.current && c({ broken: !0 });
                },
                draggable: !1,
                alt: '',
              },
              d,
            ),
          ),
          !o &&
            (s
              ? e.jsx('span', { className: 'PhotoView__icon', children: s })
              : e.jsx(W, { className: 'PhotoView__icon' })),
        ],
      })
    : l
      ? e.jsx('span', { className: 'PhotoView__icon', children: 'function' == typeof l ? l({ src: t }) : l })
      : null;
}
var V = {
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
function A(t) {
  var i = t.item,
    u = i.src,
    c = i.render,
    s = i.width,
    d = void 0 === s ? 0 : s,
    m = i.height,
    g = void 0 === m ? 0 : m,
    p = i.originRef,
    x = t.visible,
    w = t.speed,
    y = t.easing,
    _ = t.wrapClassName,
    S = t.className,
    W = t.style,
    E = t.loadingElement,
    A = t.brokenElement,
    I = t.onPhotoTap,
    H = t.onMaskTap,
    L = t.onReachMove,
    F = t.onReachUp,
    D = t.onPhotoResize,
    O = t.isActive,
    B = t.expose,
    q = a(V),
    z = q[0],
    K = q[1],
    U = n.useRef(0),
    G = N(),
    J = z.naturalWidth,
    Q = void 0 === J ? d : J,
    Z = z.naturalHeight,
    $ = void 0 === Z ? g : Z,
    ee = z.width,
    ne = void 0 === ee ? d : ee,
    te = z.height,
    re = void 0 === te ? g : te,
    ie = z.loaded,
    oe = void 0 === ie ? !u : ie,
    ae = z.broken,
    ue = z.x,
    ce = z.y,
    se = z.touched,
    le = z.stopRaf,
    de = z.maskTouched,
    fe = z.rotate,
    he = z.scale,
    ve = z.CX,
    me = z.CY,
    ge = z.lastX,
    pe = z.lastY,
    xe = z.lastCX,
    we = z.lastCY,
    ye = z.lastScale,
    Ce = z.touchTime,
    be = z.touchLength,
    Pe = z.pause,
    je = z.reach,
    ke = o({
      onScale: function (e) {
        return Me(f(e));
      },
      onRotate: function (e) {
        fe !== e && (B({ rotate: e }), K(r({ rotate: e }, k(Q, $, e))));
      },
    });
  function Me(e, n, t) {
    he !== e && (B({ scale: e }), K(r({ scale: e }, P(ue, ce, ne, re, he, e, n, t), e <= 1 && { x: 0, y: 0 })));
  }
  var Re = M(
    function (e, n, t) {
      if ((void 0 === t && (t = 0), (se || de) && O)) {
        var i = j(fe, ne, re),
          o = i[0],
          a = i[1];
        if (0 === t && 0 === U.current) {
          var u = Math.abs(e - ve) <= 20,
            c = Math.abs(n - me) <= 20;
          if (u && c) return void K({ lastCX: e, lastCY: n });
          U.current = u ? (n > me ? 3 : 2) : 1;
        }
        var s,
          l = e - xe,
          d = n - we;
        if (0 === t) {
          var h = b(l + ge, he, o, innerWidth)[0],
            v = b(d + pe, he, a, innerHeight);
          (s = (function (e, n, t, r) {
            return (n && 1 === e) || 'x' === r ? 'x' : (t && e > 1) || 'y' === r ? 'y' : void 0;
          })(U.current, h, v[0], je)),
            void 0 !== s && L(s, e, n, he);
        }
        if ('x' === s || de) return void K({ reach: 'x' });
        var m = f(he + ((t - be) / 100 / 2) * he, Q / ne, 0.2);
        B({ scale: m }), K(r({ touchLength: t, reach: s, scale: m }, P(ue, ce, ne, re, he, m, e, n, l, d)));
      }
    },
    { maxWait: 8 },
  );
  function _e(e) {
    return !le && !se && (G.current && K(r({}, e, { pause: x })), G.current);
  }
  var Ye,
    Xe,
    Ne,
    Se,
    We,
    Ee,
    Te,
    Ve,
    Ae =
      ((We = function (e) {
        return _e({ x: e });
      }),
      (Ee = function (e) {
        return _e({ y: e });
      }),
      (Te = function (e) {
        return G.current && (B({ scale: e }), K({ scale: e })), !se && G.current;
      }),
      (Ve = o({
        X: function (e) {
          return We(e);
        },
        Y: function (e) {
          return Ee(e);
        },
        S: function (e) {
          return Te(e);
        },
      })),
      function (e, n, t, r, i, o, a, u, c, s, l) {
        var d = j(s, i, o),
          f = d[0],
          h = d[1],
          v = b(e, u, f, innerWidth),
          m = v[0],
          g = v[1],
          p = b(n, u, h, innerHeight),
          x = p[0],
          w = p[1],
          y = Date.now() - l;
        if (y >= 200 || u !== a || Math.abs(c - a) > 1) {
          var C = P(e, n, i, o, a, u),
            k = C.x,
            M = C.y,
            _ = m ? g : k !== e ? k : null,
            X = x ? w : M !== n ? M : null;
          return null !== _ && Y(e, _, Ve.X), null !== X && Y(n, X, Ve.Y), void (u !== a && Y(a, u, Ve.S));
        }
        var N = (e - t) / y,
          S = (n - r) / y,
          W = Math.sqrt(Math.pow(N, 2) + Math.pow(S, 2)),
          E = !1,
          T = !1;
        !(function (e, n) {
          var t,
            r = e,
            i = 0,
            o = 0,
            a = function (o) {
              t || (t = o);
              var a = o - t,
                s = Math.sign(e),
                l = -0.001 * s,
                d = Math.sign(-r) * Math.pow(r, 2) * 2e-4,
                f = r * a + ((l + d) * Math.pow(a, 2)) / 2;
              (i += f), (t = o), s * (r += (l + d) * a) <= 0 ? c() : n(i) ? u() : c();
            };
          function u() {
            o = requestAnimationFrame(a);
          }
          function c() {
            cancelAnimationFrame(o);
          }
          u();
        })(W, function (t) {
          var r = e + t * (N / W),
            i = n + t * (S / W),
            o = b(r, a, f, innerWidth),
            u = o[0],
            c = o[1],
            s = b(i, a, h, innerHeight),
            l = s[0],
            d = s[1];
          if (
            (u && !E && ((E = !0), m ? Y(r, c, Ve.X) : R(c, r + (r - c), Ve.X)),
            l && !T && ((T = !0), x ? Y(i, d, Ve.Y) : R(d, i + (i - d), Ve.Y)),
            E && T)
          )
            return !1;
          var v = E || Ve.X(c),
            g = T || Ve.Y(d);
          return v && g;
        });
      }),
    Ie =
      ((Ye = I),
      (Xe = function (e, n) {
        je || Me(1 !== he ? 1 : Math.max(2, Q / ne), e, n);
      }),
      (Ne = n.useRef(0)),
      (Se = M(
        function () {
          (Ne.current = 0), Ye.apply(void 0, [].slice.call(arguments));
        },
        { wait: 300 },
      )),
      function () {
        var e = [].slice.call(arguments);
        (Ne.current += 1), Se.apply(void 0, e), Ne.current >= 2 && (Se.cancel(), (Ne.current = 0), Xe.apply(void 0, e));
      });
  function He(e, n) {
    if (((U.current = 0), (se || de) && O)) {
      K({ touched: !1, maskTouched: !1, pause: !1, stopRaf: !1, reach: void 0 });
      var t = f(he, Q / ne);
      if ((Ae(ue, ce, ge, pe, ne, re, he, t, ye, fe, Ce), F(e, n), ve === e && me === n)) {
        if (se) return void Ie(e, n);
        de && H(e, n);
      }
    }
  }
  function Le(e, n, t) {
    void 0 === t && (t = 0),
      K({
        touched: !0,
        CX: e,
        CY: n,
        lastCX: e,
        lastCY: n,
        lastX: ue,
        lastY: ce,
        lastScale: he,
        touchLength: t,
        touchTime: Date.now(),
      });
  }
  function Fe(e) {
    K({ maskTouched: !0, CX: e.clientX, CY: e.clientY, lastX: ue, lastY: ce });
  }
  v(l ? void 0 : 'mousemove', function (e) {
    e.preventDefault(), Re(e.clientX, e.clientY);
  }),
    v(l ? void 0 : 'mouseup', function (e) {
      He(e.clientX, e.clientY);
    }),
    v(
      l ? 'touchmove' : void 0,
      function (e) {
        e.preventDefault();
        var n = C(e);
        Re.apply(void 0, n);
      },
      { passive: !1 },
    ),
    v(
      l ? 'touchend' : void 0,
      function (e) {
        var n = e.changedTouches[0];
        He(n.clientX, n.clientY);
      },
      { passive: !1 },
    ),
    v(
      'resize',
      M(
        function () {
          oe && !se && (K(k(Q, $, fe)), D());
        },
        { maxWait: 8 },
      ),
    ),
    h(
      function () {
        O && B(r({ scale: he, rotate: fe }, ke));
      },
      [O],
    );
  var De = (function (e, t, r, i, u, c, s, l, d, f) {
      var v = (function (e, t, r, i, o) {
          var u = n.useRef(!1),
            c = a({ lead: !0, scale: r }),
            s = c[0],
            l = s.lead,
            d = s.scale,
            f = c[1],
            v = M(
              function (e) {
                try {
                  return o(!0), f({ lead: !1, scale: e }), Promise.resolve();
                } catch (e) {
                  return Promise.reject(e);
                }
              },
              { wait: i },
            );
          return (
            h(
              function () {
                u.current ? (o(!1), f({ lead: !0 }), v(r)) : (u.current = !0);
              },
              [r],
            ),
            l ? [e * d, t * d, r / d] : [e * r, t * r, 1]
          );
        })(c, s, l, d, f),
        m = v[0],
        g = v[1],
        p = v[2],
        x = (function (e, t, r, i, a) {
          var u = n.useState(X),
            c = u[0],
            s = u[1],
            l = n.useState(0),
            d = l[0],
            f = l[1],
            h = n.useRef(),
            v = o({
              OK: function () {
                return e && f(4);
              },
            });
          function m(e) {
            a(!1), f(e);
          }
          return (
            n.useEffect(
              function () {
                if ((h.current || (h.current = Date.now()), r)) {
                  if (
                    ((function (e, n) {
                      var t = e && e.current;
                      if (t && 1 === t.nodeType) {
                        var r = t.getBoundingClientRect();
                        n({
                          T: r.top,
                          L: r.left,
                          W: r.width,
                          H: r.height,
                          FIT: 'IMG' === t.tagName ? getComputedStyle(t).objectFit : void 0,
                        });
                      }
                    })(t, s),
                    e)
                  )
                    return Date.now() - h.current < 250
                      ? (f(1),
                        requestAnimationFrame(function () {
                          f(2),
                            requestAnimationFrame(function () {
                              return m(3);
                            });
                        }),
                        void setTimeout(v.OK, i))
                      : void f(4);
                  m(5);
                }
              },
              [e, r],
            ),
            [d, c]
          );
        })(e, t, r, d, f),
        w = x[0],
        y = x[1],
        C = y.W,
        b = y.FIT,
        P = innerWidth / 2,
        j = innerHeight / 2,
        k = w < 3 || w > 4;
      return [
        k ? (C ? y.L : P) : i + (P - (c * l) / 2),
        k ? (C ? y.T : j) : u + (j - (s * l) / 2),
        m,
        k && b ? m * (y.H / C) : g,
        0 === w ? p : k ? C / (c * l) || 0.01 : p,
        k ? (b ? 1 : 0) : 1,
        w,
        b,
      ];
    })(x, p, oe, ue, ce, ne, re, he, w, function (e) {
      return K({ pause: e });
    }),
    Oe = De[4],
    Be = De[6],
    qe = 'transform ' + w + 'ms ' + y,
    ze = {
      className: S,
      onMouseDown: l
        ? void 0
        : function (e) {
            e.stopPropagation(), 0 === e.button && Le(e.clientX, e.clientY, 0);
          },
      onTouchStart: l
        ? function (e) {
            e.stopPropagation(), Le.apply(void 0, C(e));
          }
        : void 0,
      onWheel: function (e) {
        if (!je) {
          var n = f(he - e.deltaY / 100 / 2, Q / ne);
          K({ stopRaf: !0 }), Me(n, e.clientX, e.clientY);
        }
      },
      style: {
        width: De[2] + 'px',
        height: De[3] + 'px',
        opacity: De[5],
        objectFit: 4 === Be ? void 0 : De[7],
        transform: fe ? 'rotate(' + fe + 'deg)' : void 0,
        transition:
          Be > 2 ? qe + ', opacity ' + w + 'ms ease, height ' + (Be < 4 ? w / 2 : Be > 4 ? w : 0) + 'ms ' + y : void 0,
      },
    };
  return e.jsx('div', {
    className: 'PhotoView__PhotoWrap' + (_ ? ' ' + _ : ''),
    style: W,
    onMouseDown: !l && O ? Fe : void 0,
    onTouchStart:
      l && O
        ? function (e) {
            return Fe(e.touches[0]);
          }
        : void 0,
    children: e.jsx('div', {
      className: 'PhotoView__PhotoBox',
      style: {
        transform: 'matrix(' + Oe + ', 0, 0, ' + Oe + ', ' + De[0] + ', ' + De[1] + ')',
        transition: se || Pe ? void 0 : qe,
        willChange: O ? 'transform' : void 0,
      },
      children: u
        ? e.jsx(
            T,
            r({ src: u, loaded: oe, broken: ae }, ze, {
              onPhotoLoad: function (e) {
                K(r({}, e, e.loaded && k(e.naturalWidth || 0, e.naturalHeight || 0, fe)));
              },
              loadingElement: E,
              brokenElement: A,
            }),
          )
        : c && c({ attrs: ze, scale: Oe, rotate: fe }),
    }),
  });
}
var I = {
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
function H(t) {
  var r = t.loop,
    i = void 0 === r ? 3 : r,
    u = t.speed,
    f = t.easing,
    m = t.photoClosable,
    C = t.maskClosable,
    b = void 0 === C || C,
    P = t.maskOpacity,
    j = void 0 === P ? 1 : P,
    k = t.pullClosable,
    M = void 0 === k || k,
    R = t.bannerVisible,
    _ = void 0 === R || R,
    Y = t.overlayRender,
    X = t.toolbarRender,
    N = t.className,
    S = t.maskClassName,
    W = t.photoClassName,
    E = t.photoWrapClassName,
    T = t.loadingElement,
    V = t.brokenElement,
    H = t.images,
    L = t.index,
    F = void 0 === L ? 0 : L,
    D = t.onIndexChange,
    O = t.visible,
    B = t.onClose,
    q = t.afterClose,
    z = t.portalContainer,
    K = a(I),
    U = K[0],
    G = K[1],
    J = n.useState(0),
    Q = J[0],
    Z = J[1],
    $ = U.x,
    ee = U.touched,
    ne = U.pause,
    te = U.lastCX,
    re = U.lastCY,
    ie = U.bg,
    oe = void 0 === ie ? j : ie,
    ae = U.lastBg,
    ue = U.overlay,
    ce = U.minimal,
    se = U.scale,
    le = U.rotate,
    de = U.onScale,
    fe = U.onRotate,
    he = t.hasOwnProperty('index'),
    ve = he ? F : Q,
    me = he ? D : Z,
    ge = n.useRef(ve),
    pe = H.length,
    xe = H[ve],
    we = 'boolean' == typeof i ? i : pe > i,
    ye = (function (e, t) {
      var r = n.useReducer(function (e) {
          return !e;
        }, !1)[1],
        i = n.useRef(0),
        o = (function (t) {
          var r = n.useRef(t);
          function o(e) {
            r.current = e;
          }
          return (
            n.useMemo(
              function () {
                !(function (n) {
                  e ? (n(e), (i.current = 1)) : (i.current = 2);
                })(o);
              },
              [t],
            ),
            [r.current, o]
          );
        })(e),
        a = o[1];
      return [
        o[0],
        i.current,
        function () {
          r(), 2 === i.current && (a(!1), t && t()), (i.current = 0);
        },
      ];
    })(O, q),
    Ce = ye[0],
    be = ye[1],
    Pe = ye[2];
  h(
    function () {
      if (Ce) return G({ pause: !0, x: ve * -(innerWidth + s) }), void (ge.current = ve);
      G(I);
    },
    [Ce],
  );
  var je = o({
      close: function (e) {
        fe && fe(0), G({ overlay: !0, lastBg: oe }), B(e);
      },
      changeIndex: function (e, n) {
        void 0 === n && (n = !1);
        var t = we ? ge.current + (e - ve) : e,
          r = pe - 1,
          i = d(t, 0, r),
          o = we ? t : i,
          a = innerWidth + s;
        G({ touched: !1, lastCX: void 0, lastCY: void 0, x: -a * o, pause: n }),
          (ge.current = o),
          me && me(we ? (e < 0 ? r : e > r ? 0 : e) : i);
      },
    }),
    ke = je.close,
    Me = je.changeIndex;
  function Re(e) {
    return e ? ke() : G({ overlay: !ue });
  }
  function _e() {
    G({ x: -(innerWidth + s) * ve, lastCX: void 0, lastCY: void 0, pause: !0 }), (ge.current = ve);
  }
  function Ye(e, n, t, r) {
    'x' === e
      ? (function (e) {
          if (void 0 !== te) {
            var n = e - te,
              t = n;
            !we && ((0 === ve && n > 0) || (ve === pe - 1 && n < 0)) && (t = n / 2),
              G({ touched: !0, lastCX: te, x: -(innerWidth + s) * ge.current + t, pause: !1 });
          } else G({ touched: !0, lastCX: e, x: $, pause: !1 });
        })(n)
      : 'y' === e &&
        (function (e, n) {
          if (void 0 !== re) {
            var t = null === j ? null : d(j, 0.01, j - Math.abs(e - re) / 100 / 4);
            G({ touched: !0, lastCY: re, bg: 1 === n ? t : j, minimal: 1 === n });
          } else G({ touched: !0, lastCY: e, bg: oe, minimal: !0 });
        })(t, r);
  }
  function Xe(e, n) {
    var t = e - (null != te ? te : e),
      r = n - (null != re ? re : n),
      i = !1;
    if (t < -40) Me(ve + 1);
    else if (t > 40) Me(ve - 1);
    else {
      var o = -(innerWidth + s) * ge.current;
      Math.abs(r) > 100 && ce && M && ((i = !0), ke()),
        G({ touched: !1, x: o, lastCX: void 0, lastCY: void 0, bg: j, overlay: !!i || ue });
    }
  }
  v('keydown', function (e) {
    if (O)
      switch (e.key) {
        case 'ArrowLeft':
          Me(ve - 1, !0);
          break;
        case 'ArrowRight':
          Me(ve + 1, !0);
          break;
        case 'Escape':
          ke();
      }
  });
  var Ne = (function (e, t, r) {
    return n.useMemo(
      function () {
        var n = e.length;
        return r
          ? e
              .concat(e)
              .concat(e)
              .slice(n + t - 1, n + t + 2)
          : e.slice(Math.max(t - 1, 0), Math.min(t + 2, n + 1));
      },
      [e, t, r],
    );
  })(H, ve, we);
  if (!Ce) return null;
  var Se = ue && !be,
    We = O ? oe : ae,
    Ee = de &&
      fe && {
        images: H,
        index: ve,
        visible: O,
        onClose: ke,
        onIndexChange: Me,
        overlayVisible: Se,
        overlay: xe && xe.overlay,
        scale: se,
        rotate: le,
        onScale: de,
        onRotate: fe,
      },
    Te = u ? u(be) : 400,
    Ve = f ? f(be) : c,
    Ae = u ? u(3) : 600,
    Ie = f ? f(3) : c;
  return e.jsxs(g, {
    className:
      'PhotoView-Portal' +
      (Se ? '' : ' PhotoView-Slider__clean') +
      (O ? '' : ' PhotoView-Slider__willClose') +
      (N ? ' ' + N : ''),
    role: 'dialog',
    onClick: function (e) {
      return e.stopPropagation();
    },
    container: z,
    children: [
      O && e.jsx(y, {}),
      e.jsx('div', {
        className:
          'PhotoView-Slider__Backdrop' +
          (S ? ' ' + S : '') +
          (1 === be ? ' PhotoView-Slider__fadeIn' : 2 === be ? ' PhotoView-Slider__fadeOut' : ''),
        style: {
          background: We ? 'rgba(0, 0, 0, ' + We + ')' : void 0,
          transitionTimingFunction: Ve,
          transitionDuration: (ee ? 0 : Te) + 'ms',
          animationDuration: Te + 'ms',
        },
        onAnimationEnd: Pe,
      }),
      _ &&
        e.jsxs('div', {
          className: 'PhotoView-Slider__BannerWrap',
          children: [
            e.jsxs('div', { className: 'PhotoView-Slider__Counter', children: [ve + 1, ' / ', pe] }),
            e.jsxs('div', {
              className: 'PhotoView-Slider__BannerRight',
              children: [X && Ee && X(Ee), e.jsx(p, { className: 'PhotoView-Slider__toolbarIcon', onClick: ke })],
            }),
          ],
        }),
      Ne.map(function (n, t) {
        var r = we || 0 !== ve ? ge.current - 1 + t : ve + t;
        return e.jsx(
          A,
          {
            item: n,
            speed: Te,
            easing: Ve,
            visible: O,
            onReachMove: Ye,
            onReachUp: Xe,
            onPhotoTap: function () {
              return Re(m);
            },
            onMaskTap: function () {
              return Re(b);
            },
            wrapClassName: E,
            className: W,
            style: {
              left: (innerWidth + s) * r + 'px',
              transform: 'translate3d(' + $ + 'px, 0px, 0)',
              transition: ee || ne ? void 0 : 'transform ' + Ae + 'ms ' + Ie,
            },
            loadingElement: T,
            brokenElement: V,
            onPhotoResize: _e,
            isActive: ge.current === r,
            expose: G,
          },
          we ? n.key + '/' + n.src + '/' + r : n.key,
        );
      }),
      !l &&
        _ &&
        e.jsxs(e.Fragment, {
          children: [
            (we || 0 !== ve) &&
              e.jsx('div', {
                className: 'PhotoView-Slider__ArrowLeft',
                onClick: function () {
                  return Me(ve - 1, !0);
                },
                children: e.jsx(x, {}),
              }),
            (we || ve + 1 < pe) &&
              e.jsx('div', {
                className: 'PhotoView-Slider__ArrowRight',
                onClick: function () {
                  return Me(ve + 1, !0);
                },
                children: e.jsx(w, {}),
              }),
          ],
        }),
      Y && Ee && e.jsx('div', { className: 'PhotoView-Slider__Overlay', children: Y(Ee) }),
    ],
  });
}
var L = ['children', 'onIndexChange', 'onVisibleChange'],
  F = { images: [], visible: !1, index: 0 };
(exports.PhotoProvider = function (t) {
  var c = t.children,
    s = t.onIndexChange,
    l = t.onVisibleChange,
    d = i(t, L),
    f = a(F),
    h = f[0],
    v = f[1],
    m = n.useRef(0),
    g = h.images,
    p = h.visible,
    x = h.index,
    w = o({
      nextId: function () {
        return (m.current += 1);
      },
      update: function (e) {
        var n = g.findIndex(function (n) {
          return n.key === e.key;
        });
        if (n > -1) {
          var t = g.slice();
          return t.splice(n, 1, e), void v({ images: t });
        }
        v(function (n) {
          return { images: n.images.concat(e) };
        });
      },
      remove: function (e) {
        v(function (n) {
          var t = n.images.filter(function (n) {
            return n.key !== e;
          });
          return { images: t, index: Math.min(t.length - 1, x) };
        });
      },
      show: function (e) {
        var n = g.findIndex(function (n) {
          return n.key === e;
        });
        v({ visible: !0, index: n }), l && l(!0, n, h);
      },
    }),
    y = o({
      close: function () {
        v({ visible: !1 }), l && l(!1, x, h);
      },
      changeIndex: function (e) {
        v({ index: e }), s && s(e, h);
      },
    }),
    C = n.useMemo(
      function () {
        return r({}, h, w);
      },
      [h, w],
    );
  return e.jsxs(u.Provider, {
    value: C,
    children: [c, e.jsx(H, r({ images: g, visible: p, index: x, onIndexChange: y.changeIndex, onClose: y.close }, d))],
  });
}),
  (exports.PhotoSlider = H),
  (exports.PhotoView = function (e) {
    var t,
      i,
      a = e.src,
      c = e.render,
      s = e.overlay,
      l = e.width,
      d = e.height,
      f = e.triggers,
      h = void 0 === f ? ['onClick'] : f,
      v = e.children,
      m = n.useContext(u),
      g =
        ((t = function () {
          return m.nextId();
        }),
        (i = n.useRef({ sign: !1, fn: void 0 }).current).sign || ((i.sign = !0), (i.fn = t())),
        i.fn),
      p = n.useRef(null);
    n.useImperativeHandle(null == v ? void 0 : v.ref, function () {
      return p.current;
    }),
      n.useEffect(function () {
        return function () {
          m.remove(g);
        };
      }, []);
    var x = o({
        render: function (e) {
          return c && c(e);
        },
        show: function (e, n) {
          m.show(g),
            (function (e, n) {
              if (v) {
                var t = v.props[e];
                t && t(n);
              }
            })(e, n);
        },
      }),
      w = n.useMemo(function () {
        var e = {};
        return (
          h.forEach(function (n) {
            e[n] = x.show.bind(null, n);
          }),
          e
        );
      }, []);
    return (
      n.useEffect(
        function () {
          m.update({ key: g, src: a, originRef: p, render: x.render, overlay: s, width: l, height: d });
        },
        [a],
      ),
      v ? n.Children.only(n.cloneElement(v, r({}, w, { ref: p }))) : null
    );
  });
//# sourceMappingURL=react-photo-view.js.map
