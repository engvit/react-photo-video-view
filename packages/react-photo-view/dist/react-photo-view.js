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
    x = i.format,
    w = t.visible,
    y = t.speed,
    _ = t.easing,
    S = t.wrapClassName,
    W = t.className,
    E = t.style,
    A = t.loadingElement,
    I = t.brokenElement,
    H = t.onPhotoTap,
    L = t.onMaskTap,
    F = t.onReachMove,
    B = t.onReachUp,
    D = t.onPhotoResize,
    O = t.isActive,
    q = t.expose,
    z = a(V),
    K = z[0],
    U = z[1],
    G = n.useRef(0),
    J = N(),
    Q = K.naturalWidth,
    Z = void 0 === Q ? d : Q,
    $ = K.naturalHeight,
    ee = void 0 === $ ? g : $,
    ne = K.width,
    te = void 0 === ne ? d : ne,
    re = K.height,
    ie = void 0 === re ? g : re,
    oe = K.loaded,
    ae = void 0 === oe ? !u : oe,
    ue = K.broken,
    ce = K.x,
    se = K.y,
    le = K.touched,
    de = K.stopRaf,
    fe = K.maskTouched,
    he = K.rotate,
    ve = K.scale,
    me = K.CX,
    ge = K.CY,
    pe = K.lastX,
    xe = K.lastY,
    we = K.lastCX,
    ye = K.lastCY,
    Ce = K.lastScale,
    be = K.touchTime,
    Pe = K.touchLength,
    je = K.pause,
    ke = K.reach,
    Me = o({
      onScale: function (e) {
        return Re(f(e));
      },
      onRotate: function (e) {
        he !== e && (q({ rotate: e }), U(r({ rotate: e }, k(Z, ee, e))));
      },
    });
  function Re(e, n, t) {
    ve !== e && (q({ scale: e }), U(r({ scale: e }, P(ce, se, te, ie, ve, e, n, t), e <= 1 && { x: 0, y: 0 })));
  }
  var _e = M(
    function (e, n, t) {
      if ((void 0 === t && (t = 0), (le || fe) && O)) {
        var i = j(he, te, ie),
          o = i[0],
          a = i[1];
        if (0 === t && 0 === G.current) {
          var u = Math.abs(e - me) <= 20,
            c = Math.abs(n - ge) <= 20;
          if (u && c) return void U({ lastCX: e, lastCY: n });
          G.current = u ? (n > ge ? 3 : 2) : 1;
        }
        var s,
          l = e - we,
          d = n - ye;
        if (0 === t) {
          var h = b(l + pe, ve, o, innerWidth)[0],
            v = b(d + xe, ve, a, innerHeight);
          (s = (function (e, n, t, r) {
            return (n && 1 === e) || 'x' === r ? 'x' : (t && e > 1) || 'y' === r ? 'y' : void 0;
          })(G.current, h, v[0], ke)),
            void 0 !== s && F(s, e, n, ve);
        }
        if ('x' === s || fe) return void U({ reach: 'x' });
        var m = f(ve + ((t - Pe) / 100 / 2) * ve, Z / te, 0.2);
        q({ scale: m }), U(r({ touchLength: t, reach: s, scale: m }, P(ce, se, te, ie, ve, m, e, n, l, d)));
      }
    },
    { maxWait: 8 },
  );
  function Ye(e) {
    return !de && !le && (J.current && U(r({}, e, { pause: w })), J.current);
  }
  var Xe,
    Ne,
    Se,
    We,
    Ee,
    Te,
    Ve,
    Ae,
    Ie =
      ((Ee = function (e) {
        return Ye({ x: e });
      }),
      (Te = function (e) {
        return Ye({ y: e });
      }),
      (Ve = function (e) {
        return J.current && (q({ scale: e }), U({ scale: e })), !le && J.current;
      }),
      (Ae = o({
        X: function (e) {
          return Ee(e);
        },
        Y: function (e) {
          return Te(e);
        },
        S: function (e) {
          return Ve(e);
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
          return null !== _ && Y(e, _, Ae.X), null !== X && Y(n, X, Ae.Y), void (u !== a && Y(a, u, Ae.S));
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
            (u && !E && ((E = !0), m ? Y(r, c, Ae.X) : R(c, r + (r - c), Ae.X)),
            l && !T && ((T = !0), x ? Y(i, d, Ae.Y) : R(d, i + (i - d), Ae.Y)),
            E && T)
          )
            return !1;
          var v = E || Ae.X(c),
            g = T || Ae.Y(d);
          return v && g;
        });
      }),
    He =
      ((Xe = H),
      (Ne = function (e, n) {
        ke || Re(1 !== ve ? 1 : Math.max(2, Z / te), e, n);
      }),
      (Se = n.useRef(0)),
      (We = M(
        function () {
          (Se.current = 0), Xe.apply(void 0, [].slice.call(arguments));
        },
        { wait: 300 },
      )),
      function () {
        var e = [].slice.call(arguments);
        (Se.current += 1), We.apply(void 0, e), Se.current >= 2 && (We.cancel(), (Se.current = 0), Ne.apply(void 0, e));
      });
  function Le(e, n) {
    if (((G.current = 0), (le || fe) && O)) {
      U({ touched: !1, maskTouched: !1, pause: !1, stopRaf: !1, reach: void 0 });
      var t = f(ve, Z / te);
      if ((Ie(ce, se, pe, xe, te, ie, ve, t, Ce, he, be), B(e, n), me === e && ge === n)) {
        if (le) return void He(e, n);
        fe && L(e, n);
      }
    }
  }
  function Fe(e, n, t) {
    void 0 === t && (t = 0),
      U({
        touched: !0,
        CX: e,
        CY: n,
        lastCX: e,
        lastCY: n,
        lastX: ce,
        lastY: se,
        lastScale: ve,
        touchLength: t,
        touchTime: Date.now(),
      });
  }
  function Be(e) {
    U({ maskTouched: !0, CX: e.clientX, CY: e.clientY, lastX: ce, lastY: se });
  }
  v(l ? void 0 : 'mousemove', function (e) {
    e.preventDefault(), _e(e.clientX, e.clientY);
  }),
    v(l ? void 0 : 'mouseup', function (e) {
      Le(e.clientX, e.clientY);
    }),
    v(
      l ? 'touchmove' : void 0,
      function (e) {
        e.preventDefault();
        var n = C(e);
        _e.apply(void 0, n);
      },
      { passive: !1 },
    ),
    v(
      l ? 'touchend' : void 0,
      function (e) {
        var n = e.changedTouches[0];
        Le(n.clientX, n.clientY);
      },
      { passive: !1 },
    ),
    v(
      'resize',
      M(
        function () {
          ae && !le && (U(k(Z, ee, he)), D());
        },
        { maxWait: 8 },
      ),
    ),
    h(
      function () {
        O && q(r({ scale: ve, rotate: he }, Me));
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
    })(w, p, ae, ce, se, te, ie, ve, y, function (e) {
      return U({ pause: e });
    }),
    Oe = De[4],
    qe = De[6],
    ze = 'transform ' + y + 'ms ' + _,
    Ke = {
      className: W,
      onMouseDown: l
        ? void 0
        : function (e) {
            e.stopPropagation(), 0 === e.button && Fe(e.clientX, e.clientY, 0);
          },
      onTouchStart: l
        ? function (e) {
            e.stopPropagation(), Fe.apply(void 0, C(e));
          }
        : void 0,
      onWheel: function (e) {
        if (!ke) {
          var n = f(ve - e.deltaY / 100 / 2, Z / te);
          U({ stopRaf: !0 }), Re(n, e.clientX, e.clientY);
        }
      },
      style: {
        width: De[2] + 'px',
        height: De[3] + 'px',
        opacity: De[5],
        objectFit: 4 === qe ? void 0 : De[7],
        transform: he ? 'rotate(' + he + 'deg)' : void 0,
        transition:
          qe > 2 ? ze + ', opacity ' + y + 'ms ease, height ' + (qe < 4 ? y / 2 : qe > 4 ? y : 0) + 'ms ' + _ : void 0,
      },
    };
  return e.jsx('div', {
    className: 'PhotoView__PhotoWrap' + (S ? ' ' + S : ''),
    style: E,
    onMouseDown: !l && O ? Be : void 0,
    onTouchStart:
      l && O
        ? function (e) {
            return Be(e.touches[0]);
          }
        : void 0,
    children: e.jsx('div', {
      className: 'PhotoView__PhotoBox PhotoBox_' + (x || 'image'),
      style: {
        transform: 'matrix(' + Oe + ', 0, 0, ' + Oe + ', ' + De[0] + ', ' + De[1] + ')',
        transition: le || je ? void 0 : ze,
        willChange: O ? 'transform' : void 0,
      },
      children: u
        ? e.jsx(
            T,
            r({ src: u, loaded: ae, broken: ue }, Ke, {
              onPhotoLoad: function (e) {
                U(r({}, e, e.loaded && k(e.naturalWidth || 0, e.naturalHeight || 0, he)));
              },
              loadingElement: A,
              brokenElement: I,
            }),
          )
        : c && c({ attrs: Ke, scale: Oe, rotate: he }),
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
    B = t.onIndexChange,
    D = t.visible,
    O = t.onClose,
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
    me = he ? B : Z,
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
    })(D, q),
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
        fe && fe(0), G({ overlay: !0, lastBg: oe }), O(e);
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
    if (D)
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
    We = D ? oe : ae,
    Ee = de &&
      fe && {
        images: H,
        index: ve,
        visible: D,
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
      (D ? '' : ' PhotoView-Slider__willClose') +
      (N ? ' ' + N : ''),
    role: 'dialog',
    onClick: function (e) {
      return e.stopPropagation();
    },
    container: z,
    children: [
      D && e.jsx(y, {}),
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
            visible: D,
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
      f = e.format,
      h = e.triggers,
      v = void 0 === h ? ['onClick'] : h,
      m = e.children,
      g = n.useContext(u),
      p =
        ((t = function () {
          return g.nextId();
        }),
        (i = n.useRef({ sign: !1, fn: void 0 }).current).sign || ((i.sign = !0), (i.fn = t())),
        i.fn),
      x = n.useRef(null);
    n.useImperativeHandle(null == m ? void 0 : m.ref, function () {
      return x.current;
    }),
      n.useEffect(function () {
        return function () {
          g.remove(p);
        };
      }, []);
    var w = o({
        render: function (e) {
          return c && c(e);
        },
        show: function (e, n) {
          g.show(p),
            (function (e, n) {
              if (m) {
                var t = m.props[e];
                t && t(n);
              }
            })(e, n);
        },
      }),
      y = n.useMemo(function () {
        var e = {};
        return (
          v.forEach(function (n) {
            e[n] = w.show.bind(null, n);
          }),
          e
        );
      }, []);
    return (
      n.useEffect(
        function () {
          g.update({ key: p, src: a, originRef: x, render: w.render, overlay: s, width: l, height: d, format: f });
        },
        [a],
      ),
      m ? n.Children.only(n.cloneElement(m, r({}, y, { ref: x }))) : null
    );
  });
//# sourceMappingURL=react-photo-view.js.map
