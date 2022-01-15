import BadWords from './wordListTa.js';
import GoodWords from './wordListLa.js';

window.wordle = {}

window.wordle.bundle = (function() {
  function a(e) {
    return (a =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            if (
              e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
            ) {
              return 'symbol';
            } else {
              return typeof e;
            }
          })(e);
  }
  function s(e, a) {
    if (!(e instanceof a)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }
  function t(e, a) {
    for (var s = 0; s < a.length; s++) {
      var t = a[s];
      t.enumerable = t.enumerable || false;
      t.configurable = true;
      if ('value' in t) {
        t.writable = true;
      }
      Object.defineProperty(e, t.key, t);
    }
  }
  function o(e, a, s) {
    if (a) {
      t(e.prototype, a);
    }
    if (s) {
      t(e, s);
    }
    return e;
  }
  function n(e, a, s) {
    if (a in e) {
      Object.defineProperty(e, a, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[a] = s;
    }
    return e;
  }
  function r(e, a) {
    if (typeof a != 'function' && a !== null) {
      throw new TypeError('Super expression must either be null or a function');
    }
    e.prototype = Object.create(a && a.prototype, {
      constructor: { value: e, writable: true, configurable: true }
    });
    if (a) {
      l(e, a);
    }
  }
  function i(e) {
    return (i = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function l(e, a) {
    return (l =
      Object.setPrototypeOf ||
      function(e, a) {
        e.__proto__ = a;
        return e;
      })(e, a);
  }
  function d() {
    if (typeof Reflect == 'undefined' || !Reflect.construct) {
      return false;
    }
    if (Reflect.construct.sham) {
      return false;
    }
    if (typeof Proxy == 'function') {
      return true;
    }
    try {
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function() {})
      );
      return true;
    } catch (e) {
      return false;
    }
  }
  function u(e, a, s) {
    return (u = d()
      ? Reflect.construct
      : function(e, a, s) {
          var t = [null];
          t.push.apply(t, a);
          var o = new (Function.bind.apply(e, t))();
          if (s) {
            l(o, s.prototype);
          }
          return o;
        }).apply(null, arguments);
  }
  function c(e) {
    var a = typeof Map == 'function' ? new Map() : void 0;
    return (c = function(e) {
      function t() {
        return u(e, arguments, i(this).constructor);
      }
      if (
        e === null ||
        ((s = e), Function.toString.call(s).indexOf('[native code]') === -1)
      ) {
        return e;
      }
      var s;
      if (typeof e != 'function') {
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      }
      if (a !== void 0) {
        if (a.has(e)) {
          return a.get(e);
        }
        a.set(e, t);
      }
      t.prototype = Object.create(e.prototype, {
        constructor: {
          value: t,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return l(t, e);
    })(e);
  }
  function safeConstructor(e) {
    if (e === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }
    return e;
  }
  function safeClass(e, a) {
    if (!a || (typeof a != 'object' && typeof a != 'function')) {
      return safeConstructor(e);
    } else {
      return a;
    }
  }
  function safeClassInit(e) {
    var a = d();
    return function() {
      var s;
      var t = i(e);
      if (a) {
        var o = i(this).constructor;
        s = Reflect.construct(t, arguments, o);
      } else {
        s = t.apply(this, arguments);
      }
      return safeClass(this, s);
    };
  }
  function y(e, a) {
    return (
      (function(e) {
        if (Array.isArray(e)) {
          return e;
        }
      })(e) ||
      (function(e, a) {
        var s =
          e == null
            ? null
            : (typeof Symbol != 'undefined' && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (s == null) {
          return;
        }
        var t;
        var o;
        var n = [];
        var r = true;
        var i = false;
        try {
          for (
            s = s.call(e);
            !(r = (t = s.next()).done) &&
            (n.push(t.value), !a || n.length !== a);
            r = true
          ) {}
        } catch (e) {
          i = true;
          o = e;
        } finally {
          try {
            if (!r && s.return != null) {
              s.return();
            }
          } finally {
            if (i) {
              throw o;
            }
          }
        }
        return n;
      })(e, a) ||
      word2(e, a) ||
      (function() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function g(e) {
    return (
      (function(e) {
        if (Array.isArray(e)) {
          return f(e);
        }
      })(e) ||
      (function(e) {
        if (
          (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
          e['@@iterator'] != null
        ) {
          return Array.from(e);
        }
      })(e) ||
      word2(e) ||
      (function() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function word2(e, a) {
    if (e) {
      if (typeof e == 'string') {
        return f(e, a);
      }
      var s = Object.prototype.toString.call(e).slice(8, -1);
      if (s === 'Object' && e.constructor) {
        s = e.constructor.name;
      }
      if (s === 'Map' || s === 'Set') {
        return Array.from(e);
      } else if (
        s === 'Arguments' ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
      ) {
        return f(e, a);
      } else {
        return;
      }
    }
  }
  function f(e, a) {
    if (a == null || a > e.length) {
      a = e.length;
    }
    var s = 0;
    for (var t = new Array(a); s < a; s++) {
      t[s] = e[s];
    }
    return t;
  }
  function q(e, a) {
    return e === a || (e != e && a != a);
  }
  function E(e, a) {
    for (var s = e.length; s--; ) {
      if (q(e[s][0], a)) {
        return s;
      }
    }
    return -1;
  }
  function C(e) {
    var a = -1;
    var s = e == null ? 0 : e.length;
    for (this.clear(); ++a < s; ) {
      var t = e[a];
      this.set(t[0], t[1]);
    }
  }
  function D(e) {
    if (e == null) {
      if (e === void 0) {
        return '[object Undefined]';
      } else {
        return '[object Null]';
      }
    } else if (N && N in Object(e)) {
      return (function(e) {
        var a = R.call(e, P);
        var s = e[P];
        try {
          e[P] = void 0;
        } catch (e) {}
        var o = $.call(e);
        if (a) {
          e[P] = s;
        } else {
          delete e[P];
        }
        return o;
      })(e);
    } else {
      return (function(e) {
        return H.call(e);
      })(e);
    }
  }
  function G(e) {
    var s = a(e);
    return e != null && (s == 'object' || s == 'function');
  }
  function B(e) {
    if (!G(e)) {
      return false;
    }
    var a = D(e);
    return (
      a == '[object Function]' ||
      a == '[object GeneratorFunction]' ||
      a == '[object AsyncFunction]' ||
      a == '[object Proxy]'
    );
  }
  function ee(e) {
    return (
      !!G(e) &&
      !((a = e), Y && Y in a) &&
      (B(e) ? Z : U).test(
        (function(e) {
          if (e != null) {
            try {
              return J.call(e);
            } catch (e) {}
            try {
              return e + '';
            } catch (e) {}
          }
          return '';
        })(e)
      )
    );
    var a;
  }
  function ae(e, a) {
    var s = (function(e, a) {
      if (e == null) {
        return;
      } else {
        return e[a];
      }
    })(e, a);
    if (ee(s)) {
      return s;
    } else {
      return;
    }
  }
  function re(e) {
    var a = -1;
    var s = e == null ? 0 : e.length;
    for (this.clear(); ++a < s; ) {
      var t = e[a];
      this.set(t[0], t[1]);
    }
  }
  function ie(e, s) {
    var t;
    var o;
    var n = e.__data__;
    if (
      (o = a((t = s))) == 'string' ||
      o == 'number' ||
      o == 'symbol' ||
      o == 'boolean'
        ? t !== '__proto__'
        : t === null
    ) {
      return n[typeof s == 'string' ? 'string' : 'hash'];
    } else {
      return n.map;
    }
  }
  function le(e) {
    var a = -1;
    var s = e == null ? 0 : e.length;
    for (this.clear(); ++a < s; ) {
      var t = e[a];
      this.set(t[0], t[1]);
    }
  }
  function de(e) {
    var a = (this.__data__ = new C(e));
    this.size = a.size;
  }
  function ce(e, a, s) {
    if (a == '__proto__' && ue) {
      ue(e, a, {
        configurable: true,
        enumerable: true,
        value: s,
        writable: true
      });
    } else {
      e[a] = s;
    }
  }
  function pe(e, a, s) {
    if ((s !== void 0 && !q(e[a], s)) || (s === void 0 && !(a in e))) {
      ce(e, a, s);
    }
  }
  function ve(e, a) {
    var s;
    var t;
    var o = a
      ? ((s = e.buffer),
        (t = new s.constructor(s.byteLength)),
        new ke(t).set(new ke(s)),
        t)
      : e.buffer;
    return new e.constructor(o, e.byteOffset, e.length);
  }
  function qe(e) {
    var a = e && e.constructor;
    return e === ((typeof a == 'function' && a.prototype) || _e);
  }
  function Ee(e) {
    return e != null && a(e) == 'object';
  }
  function Ae(e) {
    return Ee(e) && D(e) == '[object Arguments]';
  }
  function Oe(e) {
    return (
      typeof e == 'number' && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff
    );
  }
  function Re(e) {
    return e != null && Oe(e.length) && !B(e);
  }
  function Ze(e, a) {
    if (
      (a !== 'constructor' || typeof e[a] != 'function') &&
      a != '__proto__'
    ) {
      return e[a];
    }
  }
  function aa(e, a, s) {
    var t = e[a];
    if (!ea.call(e, a) || !q(t, s) || (s === void 0 && !(a in e))) {
      ce(e, a, s);
    }
  }
  function ta(e, s) {
    var t = a(e);
    return (
      !!(s = s == null ? 0x1fffffffffffff : s) &&
      (t == 'number' || (t != 'symbol' && sa.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < s
    );
  }
  function na(e, a) {
    var s = Me(e);
    var t = !s && Ie(e);
    var o = !s && !t && Ne(e);
    var n = !s && !t && !o && Qe(e);
    var r = s || t || o || n;
    var i = r
      ? (function(e, a) {
          var s = -1;
          for (var t = Array(e); ++s < e; ) {
            t[s] = a(s);
          }
          return t;
        })(e.length, String)
      : [];
    var l = i.length;
    for (var d in e) {
      if (
        (!!a || !!oa.call(e, d)) &&
        (!r ||
          (d != 'length' &&
            (!o || (d != 'offset' && d != 'parent')) &&
            (!n || (d != 'buffer' && d != 'byteLength' && d != 'byteOffset')) &&
            !ta(d, l)))
      ) {
        i.push(d);
      }
    }
    return i;
  }
  function ia(e) {
    if (!G(e)) {
      return (function(e) {
        var a = [];
        if (e != null) {
          for (var s in Object(e)) {
            a.push(s);
          }
        }
        return a;
      })(e);
    }
    var a = qe(e);
    var s = [];
    for (var t in e) {
      if (t != 'constructor' || (!a && ra.call(e, t))) {
        s.push(t);
      }
    }
    return s;
  }
  function la(e) {
    if (Re(e)) {
      return na(e, true);
    } else {
      return ia(e);
    }
  }
  function da(e) {
    return (function(e, a, s, t) {
      var o = !s;
      if (!s) {
        s = {};
      }
      var n = -1;
      for (var r = a.length; ++n < r; ) {
        var i = a[n];
        var l = t ? t(s[i], e[i], i, s, e) : void 0;
        if (l === void 0) {
          l = e[i];
        }
        if (o) {
          ce(s, i, l);
        } else {
          aa(s, i, l);
        }
      }
      return s;
    })(e, la(e));
  }
  function ua(e, a, s, t, o, n, r) {
    var i = Ze(e, s);
    var l = Ze(a, s);
    var d = r.get(l);
    if (d) {
      pe(e, s, d);
    } else {
      var u;
      var c = n ? n(i, l, s + '', e, a, r) : void 0;
      var p = c === void 0;
      if (p) {
        var m = Me(l);
        var h = !m && Ne(l);
        var y = !m && !h && Qe(l);
        c = l;
        if (m || h || y) {
          if (Me(i)) {
            c = i;
          } else if (Ee((u = i)) && Re(u)) {
            c = (function() {
              var a;
              var s = -1;
              var t = i.length;
              for (a || (a = Array(t)); ++s < t; ) {
                a[s] = i[s];
              }
              return a;
            })();
          } else if (h) {
            p = false;
            c = (function() {
              return l.slice();
              var s = l.length;
              var t = fe ? fe(s) : new l.constructor(s);
              l.copy(t);
              return t;
            })();
          } else if (y) {
            p = false;
            c = ve(l, true);
          } else {
            c = [];
          }
        } else if (
          (function() {
            if (!Ee(l) || D(l) != '[object Object]') {
              return false;
            }
            var a = Se(l);
            if (a === null) {
              return true;
            }
            var s = Fe.call(a, 'constructor') && a.constructor;
            return typeof s == 'function' && s instanceof s && Be.call(s) == We;
          })() ||
          Ie(l)
        ) {
          c = i;
          if (Ie(i)) {
            c = da(i);
          } else if (!G(i) || !!B(i)) {
            c = (function() {
              if (typeof l.constructor != 'function' || qe(l)) {
                return {};
              } else {
                return xe(Se(l));
              }
            })();
          }
        } else {
          p = false;
        }
      }
      if (p) {
        r.set(l, c);
        o(c, l, t, n, r);
        r.delete(l);
      }
      pe(e, s, c);
    }
  }
  function ca(e, a, s, t, o) {
    if (e !== a) {
      (function(e, a, s) {
        var t = -1;
        var o = Object(e);
        var n = s(e);
        for (var r = n.length; r--; ) {
          var i = n[me ? r : ++t];
          if (a(o[i], i, o) === false) {
            break;
          }
        }
        return e;
      })(
        a,
        function(n, r) {
          if (!o) {
            o = new de();
          }
          if (G(n)) {
            ua(e, a, r, s, ca, t, o);
          } else {
            var i = t ? t(Ze(e, r), n, r + '', e, a, o) : void 0;
            if (i === void 0) {
              i = n;
            }
            pe(e, r, i);
          }
        },
        la
      );
    }
  }
  function pa(e) {
    return e;
  }
  function ma(e, a, s) {
    switch (s.length) {
      case 0:
        return e.call(a);
      case 1:
        return e.call(a, s[0]);
      case 2:
        return e.call(a, s[0], s[1]);
      case 3:
        return e.call(a, s[0], s[1], s[2]);
    }
    return e.apply(a, s);
  }
  function fa(e, a) {
    return ba(
      (function(e, a, s) {
        a = ha(a === void 0 ? e.length - 1 : a, 0);
        return function() {
          var t = arguments;
          var o = -1;
          var n = ha(t.length - a, 0);
          for (var r = Array(n); ++o < n; ) {
            r[o] = t[a + o];
          }
          o = -1;
          for (var i = Array(a + 1); ++o < a; ) {
            i[o] = t[o];
          }
          i[a] = s(r);
          return ma(e, this, i);
        };
      })(e, a, pa),
      e + ''
    );
  }
  function getGameState() {
    var e = window.localStorage.getItem('gameState') || JSON.stringify(gameState);
    return JSON.parse(e);
  }
  function storeGameState(e) {
    var a = getGameState();
    (function(e) {
      window.localStorage.setItem('gameState', JSON.stringify(e));
    })(va(a, e));
  }
  function Ca() {
    dataLayer.push(arguments);
  }
  function $a(e, a) {
    var s = {};
    e.forEach(function(e, t) {
      if (a[t]) {
        for (var o = 0; o < e.length; o++) {
          var n = e[o];
          var r = a[t][o];
          var i = s[n] || 'unknown';
          if (Ra[r] > Ra[i]) {
            s[n] = r;
          }
        }
      }
    });
    return s;
  }
  function Pa(e) {
    var a = ['th', 'st', 'nd', 'rd'];
    var s = e % 100;
    return e + (a[(s - 20) % 10] || a[s] || 'th');
  }
  function DayDiff(e, a) {
    var s = new Date(e);
    var t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
    return Math.round(t / 864e5);
  }
  function TodaysWord(e) {
    let wordOffset = TodaysWordOffset(e);
    wordOffset = wordOffset % GoodWords.length;
    return GoodWords[wordOffset];
  }
  function TodaysWordOffset(e) {
    return DayDiff(Ha, e);
  }
  function Wa(e) {
    var a = '';
    for (var s = 0; s < e.length; s++) {
      var t = 'abcdefghijklmnopqrstuvwxyz'.indexOf(e[s]);
      a += t >= 0 ? Fa[t] : '_';
    }
    return a;
  }
  function GetStats() {
    var e = window.localStorage.getItem('statistics') || JSON.stringify(Ua);
    return JSON.parse(e);
  }
  function Va(e) {
    const isWin = e.isWin;
    const isStreak = e.isStreak;
    const numGuesses = e.numGuesses;
    const stats = GetStats();
    if (isWin) {
      stats.guesses[numGuesses] += 1;
      if (isStreak) {
        stats.currentStreak += 1;
      } else {
        stats.currentStreak = 1;
      }
    } else {
      stats.currentStreak = 0;
      stats.guesses.fail += 1;
    }
    stats.maxStreak = Math.max(stats.currentStreak, stats.maxStreak);
    stats.gamesPlayed += 1;
    stats.gamesWon += isWin ? 1 : 0;
    stats.winPercentage = Math.round((stats.gamesWon / stats.gamesPlayed) * 100);
    stats.averageGuesses = Math.round(
      Object.entries(stats.guesses).reduce(function(e, a) {
        var s = y(a, 2);
        var t = s[0];
        var o = s[1];
        if (t === 'fail') {
          return e;
        } else {
          return (e += t * o);
        }
      }, 0) / stats.gamesWon
    );
    window.localStorage.setItem('statistics', JSON.stringify(stats));
  }
  function cs(e, a, s, t) {
    return new (s || (s = Promise))(function(o, n) {
      function r(e) {
        try {
          l(t.next(e));
        } catch (e) {
          n(e);
        }
      }
      function i(e) {
        try {
          l(t.throw(e));
        } catch (e) {
          n(e);
        }
      }
      function l(e) {
        var a;
        if (e.done) {
          o(e.value);
        } else {
          ((a = e.value),
          a instanceof s
            ? a
            : new s(function(e) {
                e(a);
              })).then(r, i);
        }
      }
      l((t = t.apply(e, a || [])).next());
    });
  }
  function ps(e, a) {
    function i(n) {
      return function(i) {
        return (function(n) {
          if (s) {
            throw new TypeError('Generator is already executing.');
          }
          while (r) {
            try {
              s = 1;
              if (
                t &&
                (o =
                  2 & n[0]
                    ? t.return
                    : n[0]
                    ? t.throw || ((o = t.return) && o.call(t), 0)
                    : t.next) &&
                !(o = o.call(t, n[1])).done
              ) {
                return o;
              }
              switch (((t = 0), o && (n = [2 & n[0], o.value]), n[0])) {
                case 0:
                case 1:
                  o = n;
                  break;
                case 4:
                  r.label++;
                  return { value: n[1], done: false };
                case 5:
                  r.label++;
                  t = n[1];
                  n = [0];
                  continue;
                case 7:
                  n = r.ops.pop();
                  r.trys.pop();
                  continue;
                default:
                  if (
                    !(o = (o = r.trys).length > 0 && o[o.length - 1]) &&
                    (n[0] === 6 || n[0] === 2)
                  ) {
                    r = 0;
                    continue;
                  }
                  if (n[0] === 3 && (!o || (n[1] > o[0] && n[1] < o[3]))) {
                    r.label = n[1];
                    break;
                  }
                  if (n[0] === 6 && r.label < o[1]) {
                    r.label = o[1];
                    o = n;
                    break;
                  }
                  if (o && r.label < o[2]) {
                    r.label = o[2];
                    r.ops.push(n);
                    break;
                  }
                  if (o[2]) {
                    r.ops.pop();
                  }
                  r.trys.pop();
                  continue;
              }
              n = a.call(e, r);
            } catch (e) {
              n = [6, e];
              t = 0;
            } finally {
              s = o = 0;
            }
          }
          if (5 & n[0]) {
            throw n[1];
          }
          return { value: n[0] ? n[1] : void 0, done: true };
        })([n, i]);
      };
    }
    var s;
    var t;
    var o;
    var r = {
      label: 0,
      sent: function() {
        if (1 & o[0]) {
          throw o[1];
        }
        return o[1];
      },
      trys: [],
      ops: []
    };
    var n = { next: i(0), throw: i(1), return: i(2) };
    if (typeof Symbol == 'function') {
      n[Symbol.iterator] = function() {
        return this;
      };
    }
    return n;
  }
  function zs(e, a, s) {
    for (var t in ((e.success = true), a)) {
      var o = a[t];
      var n = s.clipboardData;
      n.setData(t, o);
      if (t === 'text/plain' && n.getData(t) !== o) {
        e.success = false;
      }
    }
    s.preventDefault();
  }
  function js(e) {
    var a = new xs();
    var s = zs.bind(this, a, e);
    document.addEventListener('copy', s);
    try {
      document.execCommand('copy');
    } finally {
      document.removeEventListener('copy', s);
    }
    return a.success;
  }
  function Ss(e, a) {
    _s(e);
    var s = js(a);
    qs();
    return s;
  }
  function _s(e) {
    var a = document.getSelection();
    if (a) {
      var s = document.createRange();
      s.selectNodeContents(e);
      a.removeAllRanges();
      a.addRange(s);
    }
  }
  function qs() {
    var e = document.getSelection();
    if (e) {
      e.removeAllRanges();
    }
  }
  function Es(e) {
    return cs(this, void 0, void 0, function() {
      var a;
      return ps(this, function(s) {
        a = 'text/plain' in e;
        if (
          typeof ClipboardEvent == 'undefined' &&
          vs.clipboardData !== void 0 &&
          vs.clipboardData.setData !== void 0
        ) {
          if (!a) {
            throw new Error('No `text/plain` value was specified.');
          }
          t = e['text/plain'];
          if (vs.clipboardData.setData('Text', t)) {
            return [2, true];
          }
          throw new Error(
            'Copying failed, possibly because the user rejected it.'
          );
        }
        var t;
        if (
          js(e) ||
          navigator.userAgent.indexOf('Edge') > -1 ||
          Ss(document.body, e) ||
          (function(e) {
            var a = document.createElement('div');
            a.setAttribute('style', '-webkit-user-select: text !important');
            a.textContent = 'temporary element';
            document.body.appendChild(a);
            var s = Ss(a, e);
            document.body.removeChild(a);
            return s;
          })(e) ||
          (function(e) {
            var a = document.createElement('div');
            a.setAttribute('style', '-webkit-user-select: text !important');
            var s = a;
            if (a.attachShadow) {
              s = a.attachShadow({ mode: 'open' });
            }
            var t = document.createElement('span');
            t.innerText = e;
            s.appendChild(t);
            document.body.appendChild(a);
            _s(t);
            var o = document.execCommand('copy');
            qs();
            document.body.removeChild(a);
            return o;
          })(e['text/plain'])
        ) {
          return [2, true];
        } else {
          return [2, false];
        }
      });
    });
  }
  function As(e, a, s) {
    try {
      t = navigator.userAgent || navigator.vendor || window.opera;
      if (
        (!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          t
        ) &&
          !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            t.substr(0, 4)
          )) ||
        navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ||
        navigator.share === void 0 ||
        !navigator.canShare ||
        !navigator.canShare(e)
      ) {
        (function(e) {
          return cs(this, void 0, void 0, function() {
            return ps(this, function(a) {
              if (ks) {
                return [2, ks(e)];
              }
              if (
                !Es(
                  (function(e) {
                    var a = {};
                    a['text/plain'] = e;
                    return a;
                  })(e)
                )
              ) {
                throw new Error('writeText() failed');
              }
              return [2];
            });
          });
        })(e.text).then(a, s);
      } else {
        navigator.share(e);
      }
    } catch (e) {
      s();
    }
    var t;
  }
  var e = {};
  var k = document.createElement('template');
  k.innerHTML =
    "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
  var v = (function() {
    function t() {
      var e;
      s(this, t);
      n(safeConstructor((e = a.call(this))), '_letter', '');
      n(safeConstructor(e), '_state', 'empty');
      n(safeConstructor(e), '_animation', 'idle');
      n(safeConstructor(e), '_last', false);
      n(safeConstructor(e), '_reveal', false);
      e.attachShadow({ mode: 'open' });
      return e;
    }
    var e = c(HTMLElement);
    r(t, e);
    var a = safeClassInit(t);
    o(
      t,
      [
        {
          key: 'last',
          set: function(e) {
            this._last = e;
          }
        },
        {
          key: 'connectedCallback',
          value: function() {
            var e = this;
            this.shadowRoot.appendChild(k.content.cloneNode(true));
            this.$tile = this.shadowRoot.querySelector('.tile');
            this.$tile.addEventListener('animationend', function(a) {
              if (a.animationName === 'PopIn') {
                e._animation = 'idle';
              }
              if (a.animationName === 'FlipIn') {
                e.$tile.dataset.state = e._state;
                e._animation = 'flip-out';
              }
              if (a.animationName === 'FlipOut') {
                e._animation = 'idle';
                if (e._last) {
                  e.dispatchEvent(
                    new CustomEvent('game-last-tile-revealed-in-row', {
                      bubbles: true,
                      composed: true
                    })
                  );
                }
              }
              e._render();
            });
            this._render();
          }
        },
        {
          key: 'attributeChangedCallback',
          value: function(e, a, s) {
            switch (e) {
              case 'letter':
                if (s === a) {
                  break;
                }
                var t = s === 'null' ? '' : s;
                this._letter = t;
                this._state = t ? 'tbd' : 'empty';
                this._animation = t ? 'pop' : 'idle';
                break;
              case 'evaluation':
                if (!s) {
                  break;
                }
                this._state = s;
                break;
              case 'reveal':
                this._animation = 'flip-in';
                this._reveal = true;
            }
            this._render();
          }
        },
        {
          key: '_render',
          value: function() {
            if (this.$tile) {
              this.$tile.textContent = this._letter;
              if (['empty', 'tbd'].includes(this._state)) {
                this.$tile.dataset.state = this._state;
              }
              if (
                (['empty', 'tbd'].includes(this._state) || this._reveal) &&
                this.$tile.dataset.animation != this._animation
              ) {
                this.$tile.dataset.animation = this._animation;
              }
            }
          }
        }
      ],
      [
        {
          key: 'observedAttributes',
          get: function() {
            return ['letter', 'evaluation', 'reveal'];
          }
        }
      ]
    );
    return t;
  })();
  customElements.define('game-tile', v);
  var w = document.createElement('template');
  w.innerHTML =
    '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
  var x = (function() {
    function t() {
      var e;
      s(this, t);
      (e = a.call(this)).attachShadow({ mode: 'open' });
      e._letters = '';
      e._evaluation = [];
      e._length;
      return e;
    }
    var e = c(HTMLElement);
    r(t, e);
    var a = safeClassInit(t);
    o(
      t,
      [
        {
          key: 'evaluation',
          get: function() {
            return this._evaluation;
          },
          set: function(e) {
            var a = this;
            this._evaluation = e;
            if (this.$tiles) {
              this.$tiles.forEach(function(e, s) {
                e.setAttribute('evaluation', a._evaluation[s]);
                setTimeout(function() {
                  e.setAttribute('reveal', '');
                }, 300 * s);
              });
            }
          }
        },
        {
          key: 'connectedCallback',
          value: function() {
            var e = this;
            this.shadowRoot.appendChild(w.content.cloneNode(true));
            this.$row = this.shadowRoot.querySelector('.row');
            for (var s = 0; s < this._length; s++) {
              (function(a) {
                var s = document.createElement('game-tile');
                var t = e._letters[a];
                if (t) {
                  s.setAttribute('letter', t);
                }
                if (e._evaluation[a]) {
                  s.setAttribute('evaluation', e._evaluation[a]);
                  setTimeout(function() {
                    s.setAttribute('reveal', '');
                  }, 100 * a);
                }
                if (a === e._length - 1) {
                  s.last = true;
                }
                e.$row.appendChild(s);
              })(s);
            }
            this.$tiles = this.shadowRoot.querySelectorAll('game-tile');
            this.addEventListener('animationend', function(a) {
              if (a.animationName === 'Shake') {
                e.removeAttribute('invalid');
              }
            });
          }
        },
        {
          key: 'attributeChangedCallback',
          value: function(e, a, s) {
            switch (e) {
              case 'letters':
                this._letters = s || '';
                break;
              case 'length':
                this._length = parseInt(s, 10);
                break;
              case 'win':
                if (s === null) {
                  this.$tiles.forEach(function(e) {
                    e.classList.remove('win');
                  });
                  break;
                }
                this.$tiles.forEach(function(e, a) {
                  e.classList.add('win');
                  e.style.animationDelay = ''.concat(100 * a, 'ms');
                });
            }
            this._render();
          }
        },
        {
          key: '_render',
          value: function() {
            var e = this;
            if (this.$row) {
              this.$tiles.forEach(function(a, s) {
                var t = e._letters[s];
                if (t) {
                  a.setAttribute('letter', t);
                } else {
                  a.removeAttribute('letter');
                }
              });
            }
          }
        }
      ],
      [
        {
          key: 'observedAttributes',
          get: function() {
            return ['letters', 'length', 'invalid', 'win'];
          }
        }
      ]
    );
    return t;
  })();
  customElements.define('game-row', x);
  var z = document.createElement('template');
  z.innerHTML = '\n  <slot></slot>\n';
  var _ = (function() {
    function t() {
      var e;
      s(this, t);
      n(safeConstructor((e = a.call(this))), 'isDarkTheme', false);
      n(safeConstructor(e), 'isColorBlindTheme', false);
      e.attachShadow({ mode: 'open' });
      var o = JSON.parse(window.localStorage.getItem('darkTheme'));
      var r = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var i = JSON.parse(window.localStorage.getItem('colorBlindTheme'));
      if (o === true || o === false) {
        e.setDarkTheme(o);
      } else if (r) {
        e.setDarkTheme(true);
      }
      if (i === true || i === false) {
        e.setColorBlindTheme(i);
      }
      return e;
    }
    var e = c(HTMLElement);
    r(t, e);
    var a = safeClassInit(t);
    o(t, [
      {
        key: 'setDarkTheme',
        value: function(e) {
          var a = document.querySelector('body');
          if (e && !a.classList.contains('nightmode')) {
            a.classList.add('nightmode');
          } else {
            a.classList.remove('nightmode');
          }
          this.isDarkTheme = e;
          window.localStorage.setItem('darkTheme', JSON.stringify(e));
        }
      },
      {
        key: 'setColorBlindTheme',
        value: function(e) {
          var a = document.querySelector('body');
          if (e && !a.classList.contains('colorblind')) {
            a.classList.add('colorblind');
          } else {
            a.classList.remove('colorblind');
          }
          this.isColorBlindTheme = e;
          window.localStorage.setItem('colorBlindTheme', JSON.stringify(e));
        }
      },
      {
        key: 'connectedCallback',
        value: function() {
          var e = this;
          this.shadowRoot.appendChild(z.content.cloneNode(true));
          this.shadowRoot.addEventListener('game-setting-change', function(a) {
            var s = a.detail;
            var t = s.name;
            var o = s.checked;
            switch (t) {
              case 'dark-theme':
                e.setDarkTheme(o);
                return;
              case 'color-blind-theme':
                e.setColorBlindTheme(o);
                return;
            }
          });
        }
      }
    ]);
    return t;
  })();
  customElements.define('game-theme-manager', _);
  var A = Array.prototype.splice;
  C.prototype.clear = function() {
    this.__data__ = [];
    this.size = 0;
  };
  C.prototype.delete = function(e) {
    var a = this.__data__;
    var s = E(a, e);
    return (
      !(s < 0) &&
      (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, true)
    );
  };
  C.prototype.get = function(e) {
    var a = this.__data__;
    var s = E(a, e);
    if (s < 0) {
      return;
    } else {
      return a[s][1];
    }
  };
  C.prototype.has = function(e) {
    return E(this.__data__, e) > -1;
  };
  C.prototype.set = function(e, a) {
    var s = this.__data__;
    var t = E(s, e);
    if (t < 0) {
      ++this.size;
      s.push([e, a]);
    } else {
      s[t][1] = a;
    }
    return this;
  };
  var L =
    (typeof global == 'undefined' ? 'undefined' : a(global)) == 'object' &&
    global &&
    global.Object === Object &&
    global;
  var T =
    (typeof self == 'undefined' ? 'undefined' : a(self)) == 'object' &&
    self &&
    self.Object === Object &&
    self;
  var I = L || T || Function('return this')();
  var M = I.Symbol;
  var O = Object.prototype;
  var R = O.hasOwnProperty;
  var $ = O.toString;
  var P = M ? M.toStringTag : void 0;
  var H = Object.prototype.toString;
  var N = M ? M.toStringTag : void 0;
  var F;
  var W = I['__core-js_shared__'];
  var Y = (F = /[^.]+$/.exec((W && W.keys && W.keys.IE_PROTO) || ''))
    ? 'Symbol(src)_1.' + F
    : '';
  var J = Function.prototype.toString;
  var U = /^\[object .+?Constructor\]$/;
  var X = Function.prototype;
  var V = Object.prototype;
  var K = X.toString;
  var Q = V.hasOwnProperty;
  var Z = RegExp(
    '^' +
      K.call(Q)
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  );
  var se = ae(I, 'Map');
  var te = ae(Object, 'create');
  var oe = Object.prototype.hasOwnProperty;
  var ne = Object.prototype.hasOwnProperty;
  re.prototype.clear = function() {
    this.__data__ = te ? te(null) : {};
    this.size = 0;
  };
  re.prototype.delete = function(e) {
    var a = this.has(e) && delete this.__data__[e];
    this.size -= a ? 1 : 0;
    return a;
  };
  re.prototype.get = function(e) {
    var a = this.__data__;
    if (te) {
      var s = a[e];
      if (s === '__lodash_hash_undefined__') {
        return;
      } else {
        return s;
      }
    }
    if (oe.call(a, e)) {
      return a[e];
    } else {
      return;
    }
  };
  re.prototype.has = function(e) {
    var a = this.__data__;
    if (te) {
      return a[e] !== void 0;
    } else {
      return ne.call(a, e);
    }
  };
  re.prototype.set = function(e, a) {
    var s = this.__data__;
    this.size += this.has(e) ? 0 : 1;
    s[e] = te && a === void 0 ? '__lodash_hash_undefined__' : a;
    return this;
  };
  le.prototype.clear = function() {
    this.size = 0;
    this.__data__ = { hash: new re(), map: new (se || C)(), string: new re() };
  };
  le.prototype.delete = function(e) {
    var a = ie(this, e).delete(e);
    this.size -= a ? 1 : 0;
    return a;
  };
  le.prototype.get = function(e) {
    return ie(this, e).get(e);
  };
  le.prototype.has = function(e) {
    return ie(this, e).has(e);
  };
  le.prototype.set = function(e, a) {
    var s = ie(this, e);
    var t = s.size;
    s.set(e, a);
    this.size += s.size == t ? 0 : 1;
    return this;
  };
  de.prototype.clear = function() {
    this.__data__ = new C();
    this.size = 0;
  };
  de.prototype.delete = function(e) {
    var a = this.__data__;
    var s = a.delete(e);
    this.size = a.size;
    return s;
  };
  de.prototype.get = function(e) {
    return this.__data__.get(e);
  };
  de.prototype.has = function(e) {
    return this.__data__.has(e);
  };
  de.prototype.set = function(e, a) {
    var s = this.__data__;
    if (s instanceof C) {
      var t = s.__data__;
      if (!se || t.length < 199) {
        t.push([e, a]);
        this.size = ++s.size;
        return this;
      }
      s = this.__data__ = new le(t);
    }
    s.set(e, a);
    this.size = s.size;
    return this;
  };
  var ue = (function() {
    try {
      var e = ae(Object, 'defineProperty');
      e({}, '', {});
      return e;
    } catch (e) {}
  })();
  var me;
  var ye =
    (e === void 0 ? 'undefined' : a(e)) == 'object' && e && !e.nodeType && e;
  var ge =
    ye &&
    (typeof module == 'undefined' ? 'undefined' : a(module)) == 'object' &&
    module &&
    !module.nodeType &&
    module;
  var be = ge && ge.exports === ye ? I.Buffer : void 0;
  var fe = be ? be.allocUnsafe : void 0;
  var ke = I.Uint8Array;
  var we = Object.create;
  var xe = (function() {
    function e() {}
    return function(a) {
      if (!G(a)) {
        return {};
      }
      if (we) {
        return we(a);
      }
      e.prototype = a;
      var s = new e();
      e.prototype = void 0;
      return s;
    };
  })();
  var ze = Object.getPrototypeOf;
  var je = Object;
  var Se = function(e) {
    return ze(je(e));
  };
  var _e = Object.prototype;
  var Ce = Object.prototype;
  var Le = Ce.hasOwnProperty;
  var Te = Ce.propertyIsEnumerable;
  var Ie = Ae(
    (function() {
      return arguments;
    })()
  )
    ? Ae
    : function(e) {
        return Ee(e) && Le.call(e, 'callee') && !Te.call(e, 'callee');
      };
  var Me = Array.isArray;
  var $e =
    (e === void 0 ? 'undefined' : a(e)) == 'object' && e && !e.nodeType && e;
  var Pe =
    $e &&
    (typeof module == 'undefined' ? 'undefined' : a(module)) == 'object' &&
    module &&
    !module.nodeType &&
    module;
  var He = Pe && Pe.exports === $e ? I.Buffer : void 0;
  var Ne =
    (He ? He.isBuffer : void 0) ||
    function() {
      return false;
    };
  var De = Function.prototype;
  var Ge = Object.prototype;
  var Be = De.toString;
  var Fe = Ge.hasOwnProperty;
  var We = Be.call(Object);
  var Ye = {};
  Ye['[object Float32Array]'] = Ye['[object Float64Array]'] = Ye[
    '[object Int8Array]'
  ] = Ye['[object Int16Array]'] = Ye['[object Int32Array]'] = Ye[
    '[object Uint8Array]'
  ] = Ye['[object Uint8ClampedArray]'] = Ye['[object Uint16Array]'] = Ye[
    '[object Uint32Array]'
  ] = true;
  Ye['[object Arguments]'] = Ye['[object Array]'] = Ye[
    '[object ArrayBuffer]'
  ] = Ye['[object Boolean]'] = Ye['[object DataView]'] = Ye[
    '[object Date]'
  ] = Ye['[object Error]'] = Ye['[object Function]'] = Ye['[object Map]'] = Ye[
    '[object Number]'
  ] = Ye['[object Object]'] = Ye['[object RegExp]'] = Ye['[object Set]'] = Ye[
    '[object String]'
  ] = Ye['[object WeakMap]'] = false;
  var Je =
    (e === void 0 ? 'undefined' : a(e)) == 'object' && e && !e.nodeType && e;
  var Ue =
    Je &&
    (typeof module == 'undefined' ? 'undefined' : a(module)) == 'object' &&
    module &&
    !module.nodeType &&
    module;
  var Xe = Ue && Ue.exports === Je && L.process;
  var Ve = (function() {
    try {
      var e = Ue && Ue.require && Ue.require('util').types;
      return e || (Xe && Xe.binding && Xe.binding('util'));
    } catch (e) {}
  })();
  var Ke = Ve && Ve.isTypedArray;
  var Qe = Ke
    ? function(a) {
        return Ke(a);
      }
    : function(e) {
        return Ee(e) && Oe(e.length) && !!Ye[D(e)];
      };
  var ea = Object.prototype.hasOwnProperty;
  var sa = /^(?:0|[1-9]\d*)$/;
  var oa = Object.prototype.hasOwnProperty;
  var ra = Object.prototype.hasOwnProperty;
  var ha = Math.max;
  var ya = ue
    ? function(e, a) {
        return ue(e, 'toString', {
          configurable: true,
          enumerable: false,
          value: ((s = a),
          function() {
            return s;
          }),
          writable: true
        });
        var s;
      }
    : pa;
  var ga = Date.now;
  var ba = (function() {
    var a = 0;
    var s = 0;
    return function() {
      var t = ga();
      var o = 16 - (t - s);
      s = t;
      if (o > 0) {
        if (++a >= 800) {
          return arguments[0];
        }
      } else {
        a = 0;
      }
      return ya.apply(void 0, arguments);
    };
  })();
  var ka = function(e, a, s) {
    ca(e, a, s);
  };
  var va = fa(function(e, s) {
    var t = -1;
    var o = s.length;
    var n = o > 1 ? s[o - 1] : void 0;
    var r = o > 2 ? s[2] : void 0;
    n = ka.length > 3 && typeof n == 'function' ? (o--, n) : void 0;
    if (
      r &&
      (function(e, s, t) {
        if (!G(t)) {
          return false;
        }
        var o = a(s);
        return (
          !!(o == 'number'
            ? Re(t) && ta(s, t.length)
            : o == 'string' && s in t) && q(t[s], e)
        );
      })(s[0], s[1], r)
    ) {
      n = o < 3 ? void 0 : n;
      o = 1;
    }
    for (e = Object(e); ++t < o; ) {
      var i = s[t];
      if (i) {
        ka(e, i, t, n);
      }
    }
    return e;
  });
  var gameState = {
    boardState: null,
    evaluations: null,
    rowIndex: null,
    solution: null,
    gameStatus: null,
    lastPlayedTs: null,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false
  };
  var Sa = document.createElement('template');
  Sa.innerHTML =
    '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Hard Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Dark Theme</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Color Blind Mode</div>\n          <div class="description">High contrast colors</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Feedback</div>\n        </div>\n        <div class="control">\n          <a href="mailto:wordle@powerlanguage.co.uk?subject=Feedback" title="wordle@powerlanguage.co.uk">Email</a>\n          |\n          <a href="https://twitter.com/intent/tweet?screen_name=powerlanguish" target="blank" title="@powerlanguish">Twitter</a>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div id="copyright">Copyright 2021-2022. All Rights Reserved.</div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
  var _a = (function() {
    function t() {
      var e;
      s(this, t);
      n(safeConstructor((e = a.call(this))), 'gameApp', void 0);
      e.attachShadow({ mode: 'open' });
      return e;
    }
    var e = c(HTMLElement);
    r(t, e);
    var a = safeClassInit(t);
    o(t, [
      {
        key: 'connectedCallback',
        value: function() {
          var e;
          var a = this;
          this.shadowRoot.appendChild(Sa.content.cloneNode(true));
          this.shadowRoot.querySelector('#hash').textContent =
            (e = window.wordle) === null || e === void 0 ? void 0 : e.hash;
          this.shadowRoot.querySelector(
            '#puzzle-number'
          ).textContent = '#'.concat(this.gameApp.dayOffset);
          this.shadowRoot.addEventListener('game-switch-change', function(e) {
            e.stopPropagation();
            var s = e.detail;
            var t = s.name;
            var o = s.checked;
            var n = s.disabled;
            a.dispatchEvent(
              new CustomEvent('game-setting-change', {
                bubbles: true,
                composed: true,
                detail: { name: t, checked: o, disabled: n }
              })
            );
            a.render();
          });
          this.render();
        }
      },
      {
        key: 'render',
        value: function() {
          var e = document.querySelector('body');
          if (e.classList.contains('nightmode')) {
            this.shadowRoot
              .querySelector('#dark-theme')
              .setAttribute('checked', '');
          }
          if (e.classList.contains('colorblind')) {
            this.shadowRoot
              .querySelector('#color-blind-theme')
              .setAttribute('checked', '');
          }
          var a = getGameState();
          if (a.hardMode) {
            this.shadowRoot
              .querySelector('#hard-mode')
              .setAttribute('checked', '');
          }
          if (
            !a.hardMode &&
            a.gameStatus === 'IN_PROGRESS' &&
            a.rowIndex !== 0
          ) {
            this.shadowRoot
              .querySelector('#hard-mode')
              .removeAttribute('checked');
            this.shadowRoot
              .querySelector('#hard-mode')
              .setAttribute('disabled', '');
          }
        }
      }
    ]);
    return t;
  })();
  customElements.define('game-settings', _a);
  var qa = document.createElement('template');
  qa.innerHTML =
    '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
  var Ea;
  var Aa = (function() {
    function t() {
      var e;
      s(this, t);
      n(safeConstructor((e = a.call(this))), '_duration', void 0);
      e.attachShadow({ mode: 'open' });
      return e;
    }
    var e = c(HTMLElement);
    r(t, e);
    var a = safeClassInit(t);
    o(t, [
      {
        key: 'connectedCallback',
        value: function() {
          var e = this;
          this.shadowRoot.appendChild(qa.content.cloneNode(true));
          var a = this.shadowRoot.querySelector('.toast');
          a.textContent = this.getAttribute('text');
          this._duration = this.getAttribute('duration') || 1e3;
          if (this._duration !== 'Infinity') {
            setTimeout(function() {
              a.classList.add('fade');
            }, this._duration);
          }
          a.addEventListener('transitionend', function(a) {
            e.parentNode.removeChild(e);
          });
        }
      }
    ]);
    return t;
  })();
  customElements.define('game-toast', Aa);
  window.dataLayer = window.dataLayer || [];
  Ca('js', new Date());
  Ca('config', 'G-2SSGMHY3NP', {
    app_version:
      (Ea = window.wordle) === null || Ea === void 0 ? void 0 : Ea.hash,
    debug_mode: false
  });

  var Ra = { unknown: 0, absent: 1, present: 2, correct: 3 };
  var Ha = new Date(2021, 5, 19, 0, 0, 0, 0);
  var Fa = [].concat(
    g('abcdefghijklmnopqrstuvwxyz'.split('').slice(13)),
    g('abcdefghijklmnopqrstuvwxyz'.split('').slice(0, 13))
  );
  var Ua = {
    currentStreak: 0,
    maxStreak: 0,
    guesses: n({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, 'fail', 0),
    winPercentage: 0,
    gamesPlayed: 0,
    gamesWon: 0,
    averageGuesses: 0
  };
  var Ka = document.createElement('template');
  Ka.innerHTML =
    '\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: 1000;\n  }\n  #system-toaster {\n    z-index: 4000;\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         WORDLE\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n';
  var Qa = document.createElement('template');
  Qa.innerHTML =
    '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
  var ss = ['Genius', 'Magnificent', 'Impressive', 'Splendid', 'Great', 'Phew'];
  var ts = (function() {
    function t() {
      var state;
      s(this, t);
      n(safeConstructor((state = a.call(this))), 'tileIndex', 0);
      n(safeConstructor(state), 'rowIndex', 0);
      n(safeConstructor(state), 'solution', void 0);
      n(safeConstructor(state), 'boardState', void 0);
      n(safeConstructor(state), 'evaluations', void 0);
      n(safeConstructor(state), 'canInput', true);
      n(safeConstructor(state), 'gameStatus', 'IN_PROGRESS');
      n(safeConstructor(state), 'letterEvaluations', {});
      n(safeConstructor(state), '$board', void 0);
      n(safeConstructor(state), '$keyboard', void 0);
      n(safeConstructor(state), '$game', void 0);
      n(safeConstructor(state), 'today', void 0);
      n(safeConstructor(state), 'lastPlayedTs', void 0);
      n(safeConstructor(state), 'lastCompletedTs', void 0);
      n(safeConstructor(state), 'hardMode', void 0);
      n(safeConstructor(state), 'dayOffset', void 0);
      state.attachShadow({ mode: 'open' });
      state.today = new Date();
      var prevGameState = getGameState();
      state.lastPlayedTs = prevGameState.lastPlayedTs;

      if (!state.lastPlayedTs || DayDiff(new Date(state.lastPlayedTs), state.today) >= 1) {
        // Reset game state
        state.boardState = new Array(6).fill('');
        state.evaluations = new Array(6).fill(null);
        state.solution = TodaysWord(state.today);
        state.dayOffset = TodaysWordOffset(state.today);
        state.lastCompletedTs = prevGameState.lastCompletedTs;
        state.hardMode = prevGameState.hardMode;
        state.restoringFromLocalStorage = false;

        storeGameState({
          rowIndex: state.rowIndex,
          boardState: state.boardState,
          evaluations: state.evaluations,
          solution: state.solution,
          gameStatus: state.gameStatus
        });

        Ca('event', 'level_start', { level_name: Wa(state.solution) });
      } else {
        // Resume game state
        state.boardState = prevGameState.boardState;
        state.evaluations = prevGameState.evaluations;
        state.rowIndex = prevGameState.rowIndex;
        state.solution = prevGameState.solution;
        state.dayOffset = TodaysWordOffset(state.today);
        state.letterEvaluations = $a(state.boardState, state.evaluations);
        state.gameStatus = prevGameState.gameStatus;
        state.lastCompletedTs = prevGameState.lastCompletedTs;
        state.hardMode = prevGameState.hardMode;
        if (state.gameStatus !== 'IN_PROGRESS') {
          state.canInput = false;
        }
        state.restoringFromLocalStorage = true;
      }
      return state;
    }
    var e = c(HTMLElement);
    r(t, e);
    var a = safeClassInit(t);
    o(t, [
      {
        key: 'evaluateRow',
        value: function() {
          if (this.tileIndex === 5 && !(this.rowIndex >= 6)) {
            var e;
            var word1 = this.$board.querySelectorAll('game-row')[this.rowIndex];
            var wordGuess = this.boardState[this.rowIndex];
            e = wordGuess;
            if (!BadWords.includes(e) && !GoodWords.includes(e)) {
              word1.setAttribute('invalid', '');
              this.addToast('Not in word list');
              return;
            }
            if (this.hardMode) {
              var t = (function(e, a, s) {
                if (!e || !a || !s) {
                  return { validGuess: true };
                }
                for (var t = 0; t < s.length; t++) {
                  if (s[t] === 'correct' && e[t] !== a[t]) {
                    return {
                      validGuess: false,
                      errorMessage: ''
                        .concat(Pa(t + 1), ' letter must be ')
                        .concat(a[t].toUpperCase())
                    };
                  }
                }
                var o = {};
                for (var n = 0; n < s.length; n++) {
                  if (['correct', 'present'].includes(s[n])) {
                    if (o[a[n]]) {
                      o[a[n]] += 1;
                    } else {
                      o[a[n]] = 1;
                    }
                  }
                }
                var r = e.split('').reduce(function(e, a) {
                  if (e[a]) {
                    e[a] += 1;
                  } else {
                    e[a] = 1;
                  }
                  return e;
                }, {});
                for (var i in o) {
                  if ((r[i] || 0) < o[i]) {
                    return {
                      validGuess: false,
                      errorMessage: 'Guess must contain '.concat(
                        i.toUpperCase()
                      )
                    };
                  }
                }
                return { validGuess: true };
              })(
                wordGuess,
                this.boardState[this.rowIndex - 1],
                this.evaluations[this.rowIndex - 1]
              );
              var o = t.validGuess;
              var n = t.errorMessage;
              if (!o) {
                word1.setAttribute('invalid', '');
                this.addToast(n || 'Not valid in hard mode');
                return;
              }
            }

            const findNewWord = () => {
              const gameState = getGameState()
              let guesses = gameState.boardState.concat([wordGuess]);
              // Remove empty strings from guesses
              guesses = guesses.filter(guess => guess.length > 0);
              // remove duplicates from guesses
              guesses = [...new Set(guesses)];
              console.log('Crap! Guessed a matching letter.', 'guesses:', guesses)

              // Find word from list GoodWords that doesn't have any letters in guesses
              const hasLetterOverlap = (word1, word2) => {
                return word1.split('').filter(letter => word2.includes(letter)).length > 0
              }
              let newSolution = GoodWords.find(word => {
                return guesses.filter(guess => hasLetterOverlap(word, guess)).length === 0
              })
              newSolution = newSolution || 'grrrr'

              console.log('New Solution:', newSolution);
              gameState.solution = newSolution;
              this.solution = newSolution;

              storeGameState(gameState);

              return newSolution
            }


            const checkGuesses = (solution) => {
              var letterGuessResults = Array(solution.length).fill('absent');
              var lettersPerfect = Array(solution.length).fill(true);
              var lettersEvaluated = Array(solution.length).fill(true);

              // Find perfect matches
              for (let letterIndex = 0; letterIndex < wordGuess.length; letterIndex++) {
                if (wordGuess[letterIndex] === solution[letterIndex] && lettersEvaluated[letterIndex]) {
                  /*
                  letterGuessResults[letterIndex] = 'correct';
                  lettersPerfect[letterIndex] = false;
                  lettersEvaluated[letterIndex] = false;
                  */
                  // Ah crap they got the letter exactly right - Quick! Let's change the word, mwahahaha!
                  const newSolution = findNewWord()
                  return checkGuesses(newSolution)
                }
              }

              // Letters present in word but not perfect match
              for (let letterIndex = 0; letterIndex < wordGuess.length; letterIndex++) {
                var letter = wordGuess[letterIndex];
                if (lettersPerfect[letterIndex]) {
                  for (var l = 0; l < solution.length; l++) {
                    var goodLetter = solution[l];
                    if (lettersEvaluated[l] && letter === goodLetter) {
                      /*
                      letterGuessResults[letterIndex] = 'present';
                      lettersEvaluated[l] = false;
                      */
                      // Ah crap they got a letter from the word - Quick! Let's change the word, mwahahaha!
                      const newSolution = findNewWord()
                      return checkGuesses(newSolution)
                      break;
                    }
                  }
                }
              }
              return letterGuessResults;
            }

            const letterGuesses = checkGuesses(this.solution)

            this.evaluations[this.rowIndex] = letterGuesses;
            this.letterEvaluations = $a(this.boardState, this.evaluations);
            word1.evaluation = this.evaluations[this.rowIndex];
            this.rowIndex += 1;
            var i = this.rowIndex >= 6;
            var l = letterGuesses.every(function(guess) {
              return guess === 'correct';
            });
            if (i || l) {
              Va({
                isWin: l,
                isStreak:
                  !!this.lastCompletedTs &&
                  DayDiff(new Date(this.lastCompletedTs), new Date()) === 1,
                numGuesses: this.rowIndex
              });
              storeGameState({ lastCompletedTs: Date.now() });
              this.gameStatus = l ? 'WIN' : 'FAIL';
              Ca('event', 'level_end', {
                level_name: Wa(this.solution),
                num_guesses: this.rowIndex,
                success: l
              });
            }
            this.tileIndex = 0;
            this.canInput = false;
            storeGameState({
              rowIndex: this.rowIndex,
              boardState: this.boardState,
              evaluations: this.evaluations,
              solution: this.solution,
              gameStatus: this.gameStatus,
              lastPlayedTs: Date.now()
            });
          }
        }
      },
      {
        key: 'addLetter',
        value: function(e) {
          if (this.gameStatus === 'IN_PROGRESS') {
            if (this.canInput) {
              if (!(this.tileIndex >= 5)) {
                this.boardState[this.rowIndex] += e;
                this.$board
                  .querySelectorAll('game-row')
                  [this.rowIndex].setAttribute(
                    'letters',
                    this.boardState[this.rowIndex]
                  );
                this.tileIndex += 1;
              }
            }
          }
        }
      },
      {
        key: 'removeLetter',
        value: function() {
          if (
            this.gameStatus === 'IN_PROGRESS' &&
            this.canInput &&
            !(this.tileIndex <= 0)
          ) {
            this.boardState[this.rowIndex] = this.boardState[
              this.rowIndex
            ].slice(0, this.boardState[this.rowIndex].length - 1);
            var e = this.$board.querySelectorAll('game-row')[this.rowIndex];
            if (this.boardState[this.rowIndex]) {
              e.setAttribute('letters', this.boardState[this.rowIndex]);
            } else {
              e.removeAttribute('letters');
            }
            e.removeAttribute('invalid');
            this.tileIndex -= 1;
          }
        }
      },
      {
        key: 'submitGuess',
        value: function() {
          if (this.gameStatus === 'IN_PROGRESS' && this.canInput) {
            if (this.tileIndex !== 5) {
              this.$board
                .querySelectorAll('game-row')
                [this.rowIndex].setAttribute('invalid', '');
              this.addToast('Not enough letters');
              return;
            }
            this.evaluateRow();
          }
        }
      },
      {
        key: 'addToast',
        value: function(e, a) {
          var s =
            arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
          var t = document.createElement('game-toast');
          t.setAttribute('text', e);
          if (a) {
            t.setAttribute('duration', a);
          }
          if (s) {
            this.shadowRoot.querySelector('#system-toaster').prepend(t);
          } else {
            this.shadowRoot.querySelector('#game-toaster').prepend(t);
          }
        }
      },
      {
        key: 'sizeBoard',
        value: function() {
          var e = this.shadowRoot.querySelector('#board-container');
          var a = Math.min(
            Math.floor(e.clientHeight * 0.8333333333333334),
            350
          );
          var s = 6 * Math.floor(a / 5);
          this.$board.style.width = ''.concat(a, 'px');
          this.$board.style.height = ''.concat(s, 'px');
        }
      },
      {
        key: 'showStatsModal',
        value: function() {
          var e = this.$game.querySelector('game-modal');
          var a = document.createElement('game-stats');
          if (this.gameStatus === 'WIN' && this.rowIndex <= 6) {
            a.setAttribute('highlight-guess', this.rowIndex);
          }
          a.gameApp = this;
          e.appendChild(a);
          e.setAttribute('open', '');
        }
      },
      {
        key: 'showHelpModal',
        value: function() {
          var e = this.$game.querySelector('game-modal');
          e.appendChild(document.createElement('game-help'));
          e.setAttribute('open', '');
        }
      },
      {
        key: 'connectedCallback',
        value: function() {
          var e = this;
          this.shadowRoot.appendChild(Ka.content.cloneNode(true));
          this.$game = this.shadowRoot.querySelector('#game');
          this.$board = this.shadowRoot.querySelector('#board');
          this.$keyboard = this.shadowRoot.querySelector('game-keyboard');
          this.sizeBoard();
          if (!this.lastPlayedTs) {
            setTimeout(function() {
              return e.showHelpModal();
            }, 100);
          }
          for (var a = 0; a < 6; a++) {
            var s = document.createElement('game-row');
            s.setAttribute('letters', this.boardState[a]);
            s.setAttribute('length', 5);
            if (this.evaluations[a]) {
              s.evaluation = this.evaluations[a];
            }
            this.$board.appendChild(s);
          }
          this.$game.addEventListener('game-key-press', function(a) {
            var s = a.detail.key;
            if (s === '\u2190' || s === 'Backspace') {
              e.removeLetter();
            } else if (s === '\u21B5' || s === 'Enter') {
              e.submitGuess();
            } else if ('abcdefghijklmnopqrstuvwxyz'.includes(s.toLowerCase())) {
              e.addLetter(s.toLowerCase());
            }
          });
          this.$game.addEventListener(
            'game-last-tile-revealed-in-row',
            function(a) {
              e.$keyboard.letterEvaluations = e.letterEvaluations;
              if (e.rowIndex < 6) {
                e.canInput = true;
              }
              var s = e.$board.querySelectorAll('game-row')[e.rowIndex - 1];
              if (
                (a.path || (a.composedPath && a.composedPath())).includes(s)
              ) {
                if (['WIN', 'FAIL'].includes(e.gameStatus)) {
                  if (e.restoringFromLocalStorage) {
                    e.showStatsModal();
                  } else {
                    if (e.gameStatus === 'WIN') {
                      s.setAttribute('win', '');
                      e.addToast(ss[e.rowIndex - 1], 2e3);
                    }
                    if (e.gameStatus === 'FAIL') {
                      e.addToast(getGameState().solution.toUpperCase(), Infinity);
                    }
                    setTimeout(function() {
                      e.showStatsModal();
                    }, 2500);
                  }
                }
                e.restoringFromLocalStorage = false;
              }
            }
          );
          this.shadowRoot.addEventListener('game-setting-change', function(a) {
            var s = a.detail;
            var t = s.name;
            var o = s.checked;
            var n = s.disabled;
            switch (t) {
              case 'hard-mode':
                if (n) {
                  e.addToast(
                    'Hard mode can only be enabled at the start of a round',
                    1500,
                    true
                  );
                } else {
                  e.hardMode = o;
                  storeGameState({ hardMode: o });
                }
                return;
            }
          });
          this.shadowRoot
            .getElementById('settings-button')
            .addEventListener('click', function(a) {
              var s = e.$game.querySelector('game-page');
              var t = document.createTextNode('Settings');
              s.appendChild(t);
              var o = document.createElement('game-settings');
              o.setAttribute('slot', 'content');
              o.gameApp = e;
              s.appendChild(o);
              s.setAttribute('open', '');
            });
          this.shadowRoot
            .getElementById('help-button')
            .addEventListener('click', function(a) {
              var s = e.$game.querySelector('game-page');
              var t = document.createTextNode('How to play');
              s.appendChild(t);
              var o = document.createElement('game-help');
              o.setAttribute('page', '');
              o.setAttribute('slot', 'content');
              s.appendChild(o);
              s.setAttribute('open', '');
            });
          this.shadowRoot
            .getElementById('statistics-button')
            .addEventListener('click', function(a) {
              e.showStatsModal();
            });
          window.addEventListener('resize', this.sizeBoard.bind(this));
        }
      },
      { key: 'disconnectedCallback', value: function() {} },
      {
        key: 'debugTools',
        value: function() {
          var e = this;
          this.shadowRoot
            .getElementById('debug-tools')
            .appendChild(Qa.content.cloneNode(true));
          this.shadowRoot
            .getElementById('toast')
            .addEventListener('click', function(a) {
              e.addToast('hello world');
            });
          this.shadowRoot
            .getElementById('modal')
            .addEventListener('click', function(a) {
              var s = e.$game.querySelector('game-modal');
              s.textContent = 'hello plz';
              s.setAttribute('open', '');
            });
          this.shadowRoot
            .getElementById('reveal')
            .addEventListener('click', function() {
              e.evaluateRow();
            });
          this.shadowRoot
            .getElementById('shake')
            .addEventListener('click', function() {
              e.$board
                .querySelectorAll('game-row')
                [e.rowIndex].setAttribute('invalid', '');
            });
          this.shadowRoot
            .getElementById('bounce')
            .addEventListener('click', function() {
              var a = e.$board.querySelectorAll('game-row')[e.rowIndex - 1];
              if (a.getAttribute('win') === '') {
                a.removeAttribute('win');
              } else {
                a.setAttribute('win', '');
              }
            });
        }
      }
    ]);
    return t;
  })();
  customElements.define('game-app', ts);
  var os = document.createElement('template');
  os.innerHTML =
    '\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: 3000;\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n';
  var ns = (function() {
    function t() {
      var e;
      s(this, t);
      (e = a.call(this)).attachShadow({ mode: 'open' });
      return e;
    }
    var e = c(HTMLElement);
    r(t, e);
    var a = safeClassInit(t);
    o(t, [
      {
        key: 'connectedCallback',
        value: function() {
          var e = this;
          this.shadowRoot.appendChild(os.content.cloneNode(true));
          this.addEventListener('click', function(a) {
            e.shadowRoot.querySelector('.content').classList.add('closing');
          });
          this.shadowRoot.addEventListener('animationend', function(a) {
            if (a.animationName === 'SlideOut') {
              e.shadowRoot
                .querySelector('.content')
                .classList.remove('closing');
              e.removeChild(e.firstChild);
              e.removeAttribute('open');
            }
          });
        }
      }
    ]);
    return t;
  })();
  customElements.define('game-modal', ns);
  var rs = document.createElement('template');
  rs.innerHTML =
    "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
  var is = document.createElement('template');
  is.innerHTML = '\n  <button>key</button>\n';
  var ls = document.createElement('template');
  ls.innerHTML = '\n  <div class="spacer"></div>\n';
  var ds = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['-', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '-'],
    ['\u21B5', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '\u2190']
  ];
  var us = (function() {
    function t() {
      var e;
      s(this, t);
      n(safeConstructor((e = a.call(this))), '_letterEvaluations', {});
      e.attachShadow({ mode: 'open' });
      return e;
    }
    var e = c(HTMLElement);
    r(t, e);
    var a = safeClassInit(t);
    o(t, [
      {
        key: 'letterEvaluations',
        set: function(e) {
          this._letterEvaluations = e;
          this._render();
        }
      },
      {
        key: 'dispatchKeyPressEvent',
        value: function(e) {
          this.dispatchEvent(
            new CustomEvent('game-key-press', {
              bubbles: true,
              composed: true,
              detail: { key: e }
            })
          );
        }
      },
      {
        key: 'connectedCallback',
        value: function() {
          var e = this;
          this.shadowRoot.appendChild(rs.content.cloneNode(true));
          this.$keyboard = this.shadowRoot.getElementById('keyboard');
          this.$keyboard.addEventListener('click', function(a) {
            var s = a.target.closest('button');
            if (s && e.$keyboard.contains(s)) {
              e.dispatchKeyPressEvent(s.dataset.key);
            }
          });
          window.addEventListener('keydown', function(a) {
            if (a.repeat !== true) {
              var s = a.key;
              var t = a.metaKey;
              var o = a.ctrlKey;
              if (!t && !o) {
                if (
                  'abcdefghijklmnopqrstuvwxyz'.includes(s.toLowerCase()) ||
                  s === 'Backspace' ||
                  s === 'Enter'
                ) {
                  e.dispatchKeyPressEvent(s);
                }
              }
            }
          });
          this.$keyboard.addEventListener('transitionend', function(a) {
            var s = a.target.closest('button');
            if (s && e.$keyboard.contains(s)) {
              s.classList.remove('fade');
            }
          });
          ds.forEach(function(a) {
            var s = document.createElement('div');
            s.classList.add('row');
            a.forEach(function(e) {
              var a;
              if ((e >= 'a' && e <= 'z') || e === '\u2190' || e === '\u21B5') {
                (a = is.content.cloneNode(true)
                  .firstElementChild).dataset.key = e;
                a.textContent = e;
                if (e === '\u2190') {
                  var t = document.createElement('game-icon');
                  t.setAttribute('icon', 'backspace');
                  a.textContent = '';
                  a.appendChild(t);
                  a.classList.add('one-and-a-half');
                }
                if (e == '\u21B5') {
                  a.textContent = 'enter';
                  a.classList.add('one-and-a-half');
                }
              } else {
                (a = ls.content.cloneNode(true)
                  .firstElementChild).classList.add(
                  e.length === 1 ? 'half' : 'one'
                );
              }
              s.appendChild(a);
            });
            e.$keyboard.appendChild(s);
          });
          this._render();
        }
      },
      {
        key: '_render',
        value: function() {
          for (var e in this._letterEvaluations) {
            var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
            a.dataset.state = this._letterEvaluations[e];
            a.classList.add('fade');
          }
        }
      }
    ]);
    return t;
  })();
  customElements.define('game-keyboard', us);
  (function() {
    (console.warn || console.log).apply(console, arguments);
  }.bind('[clipboard-polyfill]'));
  var ms;
  var hs;
  var ys;
  var gs;
  var bs = typeof navigator == 'undefined' ? void 0 : navigator;
  var fs = bs == null ? void 0 : bs.clipboard;
  if ((ms = fs == null ? void 0 : fs.read) !== null && ms !== void 0) {
    ms.bind(fs);
  }
  if ((hs = fs == null ? void 0 : fs.readText) !== null && hs !== void 0) {
    hs.bind(fs);
  }
  if ((ys = fs == null ? void 0 : fs.write) !== null && ys !== void 0) {
    ys.bind(fs);
  }
  var ks =
    (gs = fs == null ? void 0 : fs.writeText) === null || gs === void 0
      ? void 0
      : gs.bind(fs);
  var vs = typeof window == 'undefined' ? void 0 : window;
  if (vs != null) {
    vs.ClipboardItem;
  }
  var xs = function() {
    this.success = false;
  };
  var Cs = document.createElement('template');
  Cs.innerHTML =
    '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
  var Ls = document.createElement('template');
  Ls.innerHTML =
    '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
  var Ts = document.createElement('template');
  Ts.innerHTML =
    '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
  var Is = document.createElement('template');
  Is.innerHTML =
    '\n  <div class="countdown">\n    <h1>Next WORDLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
  var Ms = {
    currentStreak: 'Current Streak',
    maxStreak: 'Max Streak',
    winPercentage: 'Win %',
    gamesPlayed: 'Played',
    gamesWon: 'Won',
    averageGuesses: 'Av. Guesses'
  };
  var Os = (function() {
    function t() {
      var e;
      s(this, t);
      n(safeConstructor((e = a.call(this))), 'stats', {});
      n(safeConstructor(e), 'gameApp', void 0);
      e.attachShadow({ mode: 'open' });
      e.stats = GetStats();
      return e;
    }
    var e = c(HTMLElement);
    r(t, e);
    var a = safeClassInit(t);
    o(t, [
      {
        key: 'connectedCallback',
        value: function() {
          var e = this;
          this.shadowRoot.appendChild(Cs.content.cloneNode(true));
          var a = this.shadowRoot.getElementById('statistics');
          var s = this.shadowRoot.getElementById('guess-distribution');
          var t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
          if (
            Object.values(this.stats.guesses).every(function(e) {
              return e === 0;
            })
          ) {
            var o = document.createElement('div');
            o.classList.add('no-data');
            o.innerText = 'No Data';
            s.appendChild(o);
          } else {
            for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
              var r = n;
              var i = this.stats.guesses[n];
              var l = Ts.content.cloneNode(true);
              var d = Math.max(7, Math.round((i / t) * 100));
              l.querySelector('.guess').textContent = r;
              var u = l.querySelector('.graph-bar');
              u.style.width = ''.concat(d, '%');
              if (typeof i == 'number') {
                l.querySelector('.num-guesses').textContent = i;
                if (i > 0) {
                  u.classList.add('align-right');
                }
                var c = parseInt(this.getAttribute('highlight-guess'), 10);
                if (c && n === c) {
                  u.classList.add('highlight');
                }
              }
              s.appendChild(l);
            }
          }
          [
            'gamesPlayed',
            'winPercentage',
            'currentStreak',
            'maxStreak'
          ].forEach(function(s) {
            var t = Ms[s];
            var o = e.stats[s];
            var n = Ls.content.cloneNode(true);
            n.querySelector('.label').textContent = t;
            n.querySelector('.statistic').textContent = o;
            a.appendChild(n);
          });
          if (this.gameApp.gameStatus !== 'IN_PROGRESS') {
            var p = this.shadowRoot.querySelector('.footer');
            var m = Is.content.cloneNode(true);
            p.appendChild(m);
            this.shadowRoot
              .querySelector('button#share-button')
              .addEventListener('click', function(a) {
                a.preventDefault();
                a.stopPropagation();
                As(
                  (function(e) {
                    var a = e.evaluations;
                    var s = e.dayOffset;
                    var t = e.rowIndex;
                    var o = e.isHardMode;
                    var n = e.isWin;
                    var r = JSON.parse(
                      window.localStorage.getItem('darkTheme')
                    );
                    var i = JSON.parse(
                      window.localStorage.getItem('colorBlindTheme')
                    );
                    var l = 'Wordle '.concat(s);
                    l += ' '.concat(n ? t : 'X', '/').concat(6);
                    if (o) {
                      l += '*';
                    }
                    var d = '';
                    a.forEach(function(e) {
                      if (e) {
                        e.forEach(function(e) {
                          if (e) {
                            var a = '';
                            switch (e) {
                              case 'correct':
                                a = (function() {
                                  if (i) {
                                    return '\u{1F7E7}';
                                  } else {
                                    return '\u{1F7E9}';
                                  }
                                })();
                                break;
                              case 'present':
                                a = (function() {
                                  if (i) {
                                    return '\u{1F7E6}';
                                  } else {
                                    return '\u{1F7E8}';
                                  }
                                })();
                                break;
                              case 'absent':
                                a = (function() {
                                  if (r) {
                                    return '\u2B1B';
                                  } else {
                                    return '\u2B1C';
                                  }
                                })();
                            }
                            d += a;
                          }
                        });
                        d += '\n';
                      }
                    });
                    return { text: ''.concat(l, '\n\n').concat(d.trimEnd()) };
                  })({
                    evaluations: e.gameApp.evaluations,
                    dayOffset: e.gameApp.dayOffset,
                    rowIndex: e.gameApp.rowIndex,
                    isHardMode: e.gameApp.hardMode,
                    isWin: e.gameApp.gameStatus === 'WIN'
                  }),
                  function() {
                    e.gameApp.addToast(
                      'Copied results to clipboard',
                      2e3,
                      true
                    );
                  },
                  function() {
                    e.gameApp.addToast('Share failed', 2e3, true);
                  }
                );
              });
          }
        }
      }
    ]);
    return t;
  })();
  customElements.define('game-stats', Os);
  var Rs = document.createElement('template');
  Rs.innerHTML =
    '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
  var $s = (function() {
    function t() {
      var e;
      s(this, t);
      (e = a.call(this)).attachShadow({ mode: 'open' });
      return e;
    }
    var e = c(HTMLElement);
    r(t, e);
    var a = safeClassInit(t);
    o(
      t,
      [
        {
          key: 'connectedCallback',
          value: function() {
            var e = this;
            this.shadowRoot.appendChild(Rs.content.cloneNode(true));
            this.shadowRoot
              .querySelector('.container')
              .addEventListener('click', function(a) {
                a.stopPropagation();
                if (e.hasAttribute('checked')) {
                  e.removeAttribute('checked');
                } else {
                  e.setAttribute('checked', '');
                }
                e.dispatchEvent(
                  new CustomEvent('game-switch-change', {
                    bubbles: true,
                    composed: true,
                    detail: {
                      name: e.getAttribute('name'),
                      checked: e.hasAttribute('checked'),
                      disabled: e.hasAttribute('disabled')
                    }
                  })
                );
              });
          }
        }
      ],
      [
        {
          key: 'observedAttributes',
          get: function() {
            return ['checked'];
          }
        }
      ]
    );
    return t;
  })();
  customElements.define('game-switch', $s);
  var Ps = document.createElement('template');
  Ps.innerHTML =
    '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>WORDLE</strong> in 6 tries.</p>\n      <p>Each guess must be a valid 5 letter word. Hit the enter button to submit.</p>\n      <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>\n      <div class="examples">\n        <p><strong>Examples</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="w" evaluation="correct" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="r"></game-tile>\n            <game-tile letter="y"></game-tile>\n          </div>\n          <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="p"></game-tile>\n            <game-tile letter="i" evaluation="present" reveal></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="s"></game-tile>\n          </div>\n          <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="v"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="u" evaluation="absent" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p>The letter <strong>U</strong> is not in the word in any spot.</p>\n        </div>\n      </div>\n      <p><strong>A new WORDLE will be available each day!<strong></p>\n    </div>\n  </section>\n';
  var Hs = (function() {
    function t() {
      var e;
      s(this, t);
      (e = a.call(this)).attachShadow({ mode: 'open' });
      return e;
    }
    var e = c(HTMLElement);
    r(t, e);
    var a = safeClassInit(t);
    o(t, [
      {
        key: 'connectedCallback',
        value: function() {
          this.shadowRoot.appendChild(Ps.content.cloneNode(true));
        }
      }
    ]);
    return t;
  })();
  customElements.define('game-help', Hs);
  var Ns = document.createElement('template');
  Ns.innerHTML =
    '\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: 2000;\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n';
  var Ds = (function() {
    function t() {
      var e;
      s(this, t);
      (e = a.call(this)).attachShadow({ mode: 'open' });
      return e;
    }
    var e = c(HTMLElement);
    r(t, e);
    var a = safeClassInit(t);
    o(t, [
      {
        key: 'connectedCallback',
        value: function() {
          var e = this;
          this.shadowRoot.appendChild(Ns.content.cloneNode(true));
          this.shadowRoot
            .querySelector('game-icon')
            .addEventListener('click', function(a) {
              e.shadowRoot.querySelector('.overlay').classList.add('closing');
            });
          this.shadowRoot.addEventListener('animationend', function(a) {
            if (a.animationName === 'SlideOut') {
              e.shadowRoot
                .querySelector('.overlay')
                .classList.remove('closing');
              Array.from(e.childNodes).forEach(function(a) {
                e.removeChild(a);
              });
              e.removeAttribute('open');
            }
          });
        }
      }
    ]);
    return t;
  })();
  customElements.define('game-page', Ds);
  var Gs = document.createElement('template');
  Gs.innerHTML =
    '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
  var Bs = {
    help:
      'M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z',
    settings:
      'M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z',
    backspace:
      'M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z',
    close:
      'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    share:
      'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
    statistics:
      'M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z'
  };
  var Fs = (function() {
    function t() {
      var e;
      s(this, t);
      (e = a.call(this)).attachShadow({ mode: 'open' });
      return e;
    }
    var e = c(HTMLElement);
    r(t, e);
    var a = safeClassInit(t);
    o(t, [
      {
        key: 'connectedCallback',
        value: function() {
          this.shadowRoot.appendChild(Gs.content.cloneNode(true));
          var e = this.getAttribute('icon');
          this.shadowRoot.querySelector('path').setAttribute('d', Bs[e]);
          if (e === 'backspace') {
            this.shadowRoot
              .querySelector('path')
              .setAttribute('fill', 'var(--color-tone-1)');
          }
          if (e === 'share') {
            this.shadowRoot
              .querySelector('path')
              .setAttribute('fill', 'var(--white)');
          }
        }
      }
    ]);
    return t;
  })();
  customElements.define('game-icon', Fs);
  var Ws = document.createElement('template');
  Ws.innerHTML = '\n  <div id="timer"></div>\n';
  var Us = (function() {
    function t() {
      var e;
      s(this, t);
      n(safeConstructor((e = a.call(this))), 'targetEpochMS', void 0);
      n(safeConstructor(e), 'intervalId', void 0);
      n(safeConstructor(e), '$timer', void 0);
      e.attachShadow({ mode: 'open' });
      var o = new Date();
      o.setDate(o.getDate() + 1);
      o.setHours(0, 0, 0, 0);
      e.targetEpochMS = o.getTime();
      return e;
    }
    var e = c(HTMLElement);
    r(t, e);
    var a = safeClassInit(t);
    o(t, [
      {
        key: 'padDigit',
        value: function(e) {
          return e.toString().padStart(2, '0');
        }
      },
      {
        key: 'updateTimer',
        value: function() {
          var e;
          var a = new Date().getTime();
          var s = Math.floor(this.targetEpochMS - a);
          if (s <= 0) {
            e = '00:00:00';
          } else {
            var t = Math.floor((s % 864e5) / 36e5);
            var o = Math.floor((s % 36e5) / 6e4);
            var n = Math.floor((s % 6e4) / 1e3);
            e = ''
              .concat(this.padDigit(t), ':')
              .concat(this.padDigit(o), ':')
              .concat(this.padDigit(n));
          }
          this.$timer.textContent = e;
        }
      },
      {
        key: 'connectedCallback',
        value: function() {
          var e = this;
          this.shadowRoot.appendChild(Ws.content.cloneNode(true));
          this.$timer = this.shadowRoot.querySelector('#timer');
          this.intervalId = setInterval(function() {
            e.updateTimer();
          }, 200);
        }
      },
      {
        key: 'disconnectedCallback',
        value: function() {
          clearInterval(this.intervalId);
        }
      }
    ]);
    return t;
  })();
  customElements.define('countdown-timer', Us);
  e.CountdownTimer = Us;
  e.GameApp = ts;
  e.GameHelp = Hs;
  e.GameIcon = Fs;
  e.GameKeyboard = us;
  e.GameModal = ns;
  e.GamePage = Ds;
  e.GameRow = x;
  e.GameSettings = _a;
  e.GameStats = Os;
  e.GameSwitch = $s;
  e.GameThemeManager = _;
  e.GameTile = v;
  e.GameToast = Aa;
  Object.defineProperty(e, '__esModule', { value: true });
  return e;
})();

