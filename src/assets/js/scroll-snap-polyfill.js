! function(e, t, n) {
    "use strict";

    function r(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }

    function i(e, t) {
        var n, r = 0;
        if (!e || !t) return !1;
        for (; n = t[r++];)
            if (e === n) return !0;
        return !1
    }

    function o(e) {
        return l.test(e)
    }

    function s(e) {
        var t, n = 0;
        for (this._rules = []; t = e[n++];) this._rules.push(new a(t))
    }

    function a(e) {
        this._rule = e
    }

    function u(e) {
        return this instanceof u ? (this._options = e, e.keywords || (this._options = {
            keywords: e
        }), this._promise = [], this._getStylesheets(), this._downloadStylesheets(), this._parseStylesheets(), this._filterCSSByKeywords(), this._buildMediaQueryMap(), this._reportInitialMatches(), void this._addMediaListeners()) : new u(e)
    }
    var l = RegExp("^" + String({}.valueOf).replace(/[.*+?\^${}()|\[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
        c = function() {
            var e = t.getElementsByTagName("base")[0],
                n = /^([a-zA-Z:]*\/\/)/;
            return function(t) {
                var r = !n.test(t) && !e || t.replace(RegExp.$1, "").split("/")[0] === location.host;
                return r
            }
        }(),
        f = {
            matchMedia: e.matchMedia && e.matchMedia("only all").matches,
            nativeMatchMedia: o(e.matchMedia)
        },
        h = function() {
            function t(e) {
                for (var t, n = 0; t = e[n++];) u[t] || i(t, l) || l.push(t)
            }

            function n() {
                if (0 === h.readyState || 4 === h.readyState) {
                    var e;
                    (e = l[0]) && r(e), e || s()
                }
            }

            function r(e) {
                f++, h.open("GET", e, !0), h.onreadystatechange = function() {
                    4 != h.readyState || 200 != h.status && 304 != h.status || (u[e] = h.responseText, l.shift(), n())
                }, h.send(null)
            }

            function o(e) {
                for (var t, n = 0, r = 0; t = e[n++];) u[t] && r++;
                return r === e.length
            }

            function s() {
                for (var e; e = c.shift();) a(e.urls, e.fn)
            }

            function a(e, t) {
                for (var n, r = [], i = 0; n = e[i++];) r.push(u[n]);
                t.call(null, r)
            }
            var u = {},
                l = [],
                c = [],
                f = 0,
                h = function() {
                    var t;
                    try {
                        t = new e.XMLHttpRequest
                    } catch (n) {
                        t = new e.ActiveXObject("Microsoft.XMLHTTP")
                    }
                    return t
                }();
            return {
                request: function(e, r) {
                    c.push({
                        urls: e,
                        fn: r
                    }), o(e) ? s() : (t(e), n())
                },
                clearCache: function() {
                    u = {}
                },
                _getRequestCount: function() {
                    return f
                }
            }
        }(),
        d = {
            _cache: {},
            clearCache: function() {
                d._cache = {}
            },
            parse: function(e, t) {
                function n() {
                    return s(/^\{\s*/)
                }

                function i() {
                    return s(/^\}\s*/)
                }

                function o() {
                    var t, n = [];
                    for (a(), u(n);
                        "}" != e.charAt(0) && (t = w() || S());) n.push(t), u(n);
                    return n
                }

                function s(t) {
                    var n = t.exec(e);
                    if (n) return e = e.slice(n[0].length), n
                }

                function a() {
                    s(/^\s*/)
                }

                function u(e) {
                    e = e || [];
                    for (var t; t = l();) e.push(t);
                    return e
                }

                function l() {
                    if ("/" == e[0] && "*" == e[1]) {
                        for (var t = 2;
                            "*" != e[t] || "/" != e[t + 1];) ++t;
                        t += 2;
                        var n = e.slice(2, t - 2);
                        return e = e.slice(t), a(), {
                            comment: n
                        }
                    }
                }

                function c() {
                    var e = s(/^([^{]+)/);
                    if (e) return r(e[0]).split(/\s*,\s*/)
                }

                function f() {
                    var e = s(/^(\*?[\-\w]+)\s*/);
                    if (e && (e = e[0], s(/^:\s*/))) {
                        var t = s(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)\s*/);
                        if (t) return t = r(t[0]), s(/^[;\s]*/), {
                            property: e,
                            value: t
                        }
                    }
                }

                function h() {
                    for (var e, t = []; e = s(/^(from|to|\d+%|\.\d+%|\d+\.\d+%)\s*/);) t.push(e[1]), s(/^,\s*/);
                    return t.length ? {
                        values: t,
                        declarations: L()
                    } : void 0
                }

                function p() {
                    var e = s(/^@([\-\w]+)?keyframes */);
                    if (e) {
                        var t = e[1],
                            e = s(/^([\-\w]+)\s*/);
                        if (e) {
                            var r = e[1];
                            if (n()) {
                                u();
                                for (var o, a = []; o = h();) a.push(o), u();
                                if (i()) {
                                    var l = {
                                        name: r,
                                        keyframes: a
                                    };
                                    return t && (l.vendor = t), l
                                }
                            }
                        }
                    }
                }

                function m() {
                    var e = s(/^@supports *([^{]+)/);
                    if (e) {
                        var t = r(e[1]);
                        if (n()) {
                            u();
                            var a = o();
                            if (i()) return {
                                supports: t,
                                rules: a
                            }
                        }
                    }
                }

                function y() {
                    var e = s(/^@media *([^{]+)/);
                    if (e) {
                        var t = r(e[1]);
                        if (n()) {
                            u();
                            var a = o();
                            if (i()) return {
                                media: t,
                                rules: a
                            }
                        }
                    }
                }

                function v() {
                    var e = s(/^@page */);
                    if (e) {
                        var t = c() || [],
                            r = [];
                        if (n()) {
                            u();
                            for (var o; o = f() || x();) r.push(o), u();
                            if (i()) return {
                                type: "page",
                                selectors: t,
                                declarations: r
                            }
                        }
                    }
                }

                function x() {
                    var e = s(/^@([a-z\-]+) */);
                    if (e) {
                        var t = e[1];
                        return {
                            type: t,
                            declarations: L()
                        }
                    }
                }

                function _() {
                    return E("import")
                }

                function g() {
                    return E("charset")
                }

                function M() {
                    return E("namespace")
                }

                function E(e) {
                    var t = s(new RegExp("^@" + e + " *([^;\\n]+);\\s*"));
                    if (t) {
                        var n = {};
                        return n[e] = r(t[1]), n
                    }
                }

                function L() {
                    var e = [];
                    if (n()) {
                        u();
                        for (var t; t = f();) e.push(t), u();
                        if (i()) return e
                    }
                }

                function w() {
                    return p() || y() || m() || _() || g() || M() || v()
                }

                function S() {
                    var e = c();
                    if (e) return u(), {
                        selectors: e,
                        declarations: L()
                    }
                }
                return t && d._cache[t] ? d._cache[t] : (e = e.replace(/\/\*[\s\S]*?\*\//g, ""), d._cache[t] = o())
            },
            filter: function(e, t) {
                function n(e, t) {
                    return e || t ? e ? e.concat(t) : [t] : void 0
                }

                function i(e) {
                    null == e.media && delete e.media, null == e.supports && delete e.supports, c.push(e)
                }

                function o(e, t) {
                    if (t)
                        for (var n = t.length; n--;)
                            if (e.indexOf(t[n]) >= 0) return !0
                }

                function s(e, t) {
                    for (var n, i, o, s, a = /\*/, u = 0; n = t[u++];)
                        if (i = n.split(":"), o = new RegExp("^" + r(i[0]).replace(a, ".*") + "$"), s = new RegExp("^" + r(i[1]).replace(a, ".*") + "$"), o.test(e.property) && s.test(e.value)) return !0
                }

                function a(e, n, r) {
                    return t.selectors && o(e.selectors.join(","), t.selectors) ? (i({
                        media: n,
                        supports: r,
                        selectors: e.selectors,
                        declarations: e.declarations
                    }), !0) : void 0
                }

                function u(e, n, r) {
                    if (t.declarations)
                        for (var o, a = 0; o = e.declarations[a++];)
                            if (s(o, t.declarations)) return i({
                                media: n,
                                supports: r,
                                selectors: e.selectors,
                                declarations: e.declarations
                            }), !0
                }

                function l(e, t, r) {
                    for (var i, o = 0; i = e[o++];) i.declarations ? a(i, t, r) || u(i, t, r) : i.rules && i.media ? l(i.rules, n(t, i.media), r) : i.rules && i.supports && l(i.rules, t, n(r, i.supports))
                }
                var c = [];
                return l(e), c
            }
        },
        p = function() {
            function n() {
                if (o) return o;
                var e = t.documentElement,
                    n = t.body,
                    r = e.style.fontSize,
                    i = n.style.fontSize,
                    s = t.createElement("div");
                return e.style.fontSize = "1em", n.style.fontSize = "1em", n.appendChild(s), s.style.width = "1em", s.style.position = "absolute", o = s.offsetWidth, n.removeChild(s), n.style.fontSize = i, e.style.fontSize = r, o
            }

            function r(t) {
                return e.matchMedia(t)
            }

            function i(e) {
                var r, i, o = !1;
                return s = t.documentElement.clientWidth, a.test(e) && (r = "em" === RegExp.$2 ? parseFloat(RegExp.$1) * n() : parseFloat(RegExp.$1)), u.test(e) && (i = "em" === RegExp.$2 ? parseFloat(RegExp.$1) * n() : parseFloat(RegExp.$1)), r && i ? o = s >= r && i >= s : (r && s >= r && (o = !0), i && i >= s && (o = !0)), {
                    matches: o,
                    media: e
                }
            }
            var o, s, a = /\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
                u = /\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
                l = {};
            return {
                matchMedia: function(e) {
                    return f.matchMedia ? r(e) : i(e)
                },
                clearCache: function() {
                    f.nativeMatchMedia || (s = null, l = {})
                }
            }
        }(),
        m = function() {
            function t(e, t) {
                var n;
                return function() {
                    clearTimeout(n), n = setTimeout(e, t)
                }
            }
            var n = function() {
                    var e = [];
                    return {
                        add: function(t, n, r) {
                            for (var i, o = 0; i = e[o++];)
                                if (i.polyfill == t && i.mql === n && i.fn === r) return !1;
                            n.addListener(r), e.push({
                                polyfill: t,
                                mql: n,
                                fn: r
                            })
                        },
                        remove: function(t) {
                            for (var n, r = 0; n = e[r++];) n.polyfill === t && (n.mql.removeListener(n.fn), e.splice(--r, 1))
                        }
                    }
                }(),
                r = function(t) {
                    function n() {
                        for (var e, n = 0; e = t[n++];) e.fn()
                    }
                    return {
                        add: function(r, i) {
                            t.length || (e.addEventListener ? e.addEventListener("resize", n, !1) : e.attachEvent("onresize", n)), t.push({
                                polyfill: r,
                                fn: i
                            })
                        },
                        remove: function(r) {
                            for (var i, o = 0; i = t[o++];) i.polyfill === r && t.splice(--o, 1);
                            t.length || (e.removeEventListener ? e.removeEventListener("resize", n, !1) : e.detachEvent && e.detachEvent("onresize", n))
                        }
                    }
                }([]);
            return {
                removeListeners: function(e) {
                    f.nativeMatchMedia ? n.remove(e) : r.remove(e)
                },
                addListeners: function(e, i) {
                    function o() {
                        if (f.nativeMatchMedia)
                            for (var o in a) a.hasOwnProperty(o) && ! function(t, r) {
                                n.add(e, t, function() {
                                    i.call(e, r, t.matches)
                                })
                            }(a[o], o);
                        else {
                            var u = t(function(e, t) {
                                return function() {
                                    s(e, t)
                                }
                            }(e, a), e._options.debounceTimeout || 100);
                            r.add(e, u)
                        }
                    }

                    function s(e, t) {
                        var n, r = {};
                        p.clearCache();
                        for (n in t) t.hasOwnProperty(n) && (r[n] = p.matchMedia(n).matches, r[n] != u[n] && i.call(e, n, p.matchMedia(n).matches));
                        u = r
                    }
                    var a = e._mediaQueryMap,
                        u = {};
                    ! function() {
                        for (var e in a) a.hasOwnProperty(e) && (u[e] = p.matchMedia(e).matches)
                    }(), o()
                }
            }
        }();
    s.prototype.each = function(e, t) {
        var n, r = 0;
        for (t || (t = this); n = this._rules[r++];) e.call(t, n)
    }, s.prototype.size = function() {
        return this._rules.length
    }, s.prototype.at = function(e) {
        return this._rules[e]
    }, a.prototype.getDeclaration = function() {
        for (var e, t = {}, n = 0, r = this._rule.declarations; e = r[n++];) t[e.property] = e.value;
        return t
    }, a.prototype.getSelectors = function() {
        return this._rule.selectors.join(", ")
    }, a.prototype.getMedia = function() {
        return this._rule.media.join(" and ")
    }, u.prototype.doMatched = function(e) {
        return this._doMatched = e, this._resolve(), this
    }, u.prototype.undoUnmatched = function(e) {
        return this._undoUnmatched = e, this._resolve(), this
    }, u.prototype.getCurrentMatches = function() {
        for (var e, t, n = 0, r = []; e = this._filteredRules[n++];) t = e.media && e.media.join(" and "), (!t || p.matchMedia(t).matches) && r.push(e);
        return new s(r)
    }, u.prototype.destroy = function() {
        this._undoUnmatched && (this._undoUnmatched(this.getCurrentMatches()), m.removeListeners(this))
    }, u.prototype._defer = function(e, t) {
        e.call(this) ? t.call(this) : this._promise.push({
            condition: e,
            callback: t
        })
    }, u.prototype._resolve = function() {
        for (var e, t = 0; e = this._promise[t];) e.condition.call(this) ? (this._promise.splice(t, 1), e.callback.call(this)) : t++
    }, u.prototype._getStylesheets = function() {
        var e, n, r, o, s, a, u, l = 0,
            f = [];
        if (this._options.include) {
            for (n = this._options.include; e = n[l++];)
                if (r = t.getElementById(e)) {
                    if ("STYLE" === r.nodeName) {
                        u = {
                            text: r.textContent
                        }, f.push(u);
                        continue
                    }
                    if (r.media && "print" == r.media) continue;
                    if (!c(r.href)) continue;
                    u = {
                        href: r.href
                    }, r.media && (u.media = r.media), f.push(u)
                }
        } else {
            for (n = this._options.exclude, o = t.getElementsByTagName("link"); r = o[l++];) r.rel && "stylesheet" == r.rel && "print" != r.media && c(r.href) && !i(r.id, n) && (u = {
                href: r.href
            }, r.media && (u.media = r.media), f.push(u));
            for (a = t.getElementsByTagName("style"), l = 0; s = a[l++];) u = {
                text: s.textContent
            }, f.push(u)
        }
        return this._stylesheets = f
    }, u.prototype._downloadStylesheets = function() {
        for (var e, t = this, n = [], r = 0; e = this._stylesheets[r++];) n.push(e.href);
        h.request(n, function(e) {
            for (var n, r = 0; n = e[r];) t._stylesheets[r++].text = n;
            t._resolve()
        })
    }, u.prototype._parseStylesheets = function() {
        this._defer(function() {
            return this._stylesheets && this._stylesheets.length && this._stylesheets[0].text
        }, function() {
            for (var e, t = 0; e = this._stylesheets[t++];) e.rules = d.parse(e.text, e.url)
        })
    }, u.prototype._filterCSSByKeywords = function() {
        this._defer(function() {
            return this._stylesheets && this._stylesheets.length && this._stylesheets[0].rules
        }, function() {
            for (var e, t, n = [], r = 0; e = this._stylesheets[r++];) t = e.media, t && "all" != t && "screen" != t ? n.push({
                rules: e.rules,
                media: e.media
            }) : n = n.concat(e.rules);
            this._filteredRules = d.filter(n, this._options.keywords)
        })
    }, u.prototype._buildMediaQueryMap = function() {
        this._defer(function() {
            return this._filteredRules
        }, function() {
            var e, t, n = 0;
            for (this._mediaQueryMap = {}; t = this._filteredRules[n++];) t.media && (e = t.media.join(" and "), this._mediaQueryMap[e] = p.matchMedia(e))
        })
    }, u.prototype._reportInitialMatches = function() {
        this._defer(function() {
            return this._filteredRules && this._doMatched
        }, function() {
            this._doMatched(this.getCurrentMatches())
        })
    }, u.prototype._addMediaListeners = function() {
        this._defer(function() {
            return this._filteredRules && this._doMatched && this._undoUnmatched
        }, function() {
            m.addListeners(this, function(e, t) {
                for (var n, r = 0, i = [], o = []; n = this._filteredRules[r++];) n.media && n.media.join(" and ") == e && (t ? i : o).push(n);
                i.length && this._doMatched(new s(i)), o.length && this._undoUnmatched(new s(o))
            })
        })
    }, u.modules = {
        DownloadManager: h,
        StyleManager: d,
        MediaManager: p,
        EventManager: m
    }, u.constructors = {
        Ruleset: s,
        Rule: a
    }, e.Polyfill = u
}(window, document),
function(e, t, n) {
    "use strict";

    function r(e) {
        e.each(function(e) {
            var n = t.querySelectorAll(e.getSelectors()),
                r = e.getDeclaration();
            [].forEach.call(n, function(e) {
                o(e, r)
            })
        })
    }

    function i(e) {
        e.each(function(e) {
            var n = t.querySelectorAll(e.getSelectors());
            [].forEach.call(n, function(e) {
                s(e)
            })
        })
    }

    function o(e, n) {
        if ("undefined" != typeof n["scroll-snap-coordinate"]) return e.snapLengthUnit = p(n), a(e);
        var r = e.tagName;
        ("body" == r.toLowerCase() || "html" == r.toLowerCase()) && (e = t), e.addEventListener("scroll", q, !1), "undefined" != typeof n["scroll-snap-destination"] ? e.snapLengthUnit = p(n) : e.snapLengthUnit = d(n), e.snapElements = []
    }

    function s(e) {
        var n = e.tagName;
        ("body" == n.toLowerCase() || "html" == n.toLowerCase()) && (e = t), e.removeEventListener("scroll", q, !1), e.snapLengthUnit = null, e.snapElements = []
    }

    function a(e) {
        for (var t = e; e && e !== document; e = e.parentNode) "undefined" != typeof e.snapElements && e.snapElements.push(t)
    }

    function u(e, t, n) {
        var r = {
                y: m(t, t.snapLengthUnit.y),
                x: y(t, t.snapLengthUnit.x)
            },
            i = e.scrollTop,
            o = e.scrollLeft,
            s = {
                y: i / r.y,
                x: o / r.x
            },
            a = {
                y: z.y / r.y,
                x: z.x / r.x
            },
            u = {
                y: 0,
                x: 0
            };
        u.y = c(n.y, s.y), u.x = c(n.x, s.x), u.y = f(a.y, s.y, u.y, z.y, i), u.x = f(a.x, s.x, u.x, z.x, o);
        var l = {
            y: u.y * r.y,
            x: u.x * r.x
        };
        return l.y = h(0, v(e), l.y), l.x = h(0, x(e), l.x), l
    }

    function l(e, t, n) {
        for (var r = t.snapElements.length, i = e.scrollTop, o = e.scrollLeft, s = Math.min(n.y, n.x), a = {
                y: m(t, t.snapLengthUnit.y),
                x: y(t, t.snapLengthUnit.x)
            }, u = {
                y: 0,
                x: 0
            }, l = A + s; r > l && l >= 0; l += s)
            if (k = t.snapElements[l], u = {
                    y: k.offsetTop - e.offsetTop + m(k, k.snapLengthUnit.y),
                    x: k.offsetLeft - e.offsetLeft + y(k, k.snapLengthUnit.x)
                }, k.snapCoords = u, o <= u.x && o + g(e) >= u.x && i <= u.y && i + _(e) >= u.y) return A = l, {
                y: h(0, v(e), u.y - a.y),
                x: h(0, x(e), u.x - a.x)
            };
        return 1 == s && l === r - 1 ? (A = r - 1, {
            y: h(0, v(e), u.y - a.y),
            x: h(0, x(e), u.x - a.x)
        }) : -1 == s && 0 === l ? (A = 0, {
            y: h(0, v(e), u.y - a.y),
            x: h(0, x(e), u.x - a.x)
        }) : {
            y: h(0, v(e), t.snapElements[A].snapCoords.y - a.y),
            x: h(0, x(e), t.snapElements[A].snapCoords.x - a.x)
        }
    }

    function c(e, t) {
        return -1 === e ? Math.floor(t) : Math.ceil(t)
    }

    function f(e, t, n, r, i) {
        return Math.abs(e - t) >= T && Math.abs(n - t) > L ? Math.round(t) : Math.abs(r - i) < S && Math.abs(e - t) < T && Math.abs(n - t) > w ? Math.round(t) : n
    }

    function h(e, t, n) {
        return Math.max(Math.min(n, t), e)
    }

    function d(e) {
        var t, n = /repeat\((\d+)(px|vh|vw|%)\)/g,
            r = {
                y: {
                    value: "px",
                    unit: 0
                },
                x: {
                    value: "px",
                    unit: 0
                }
            };
        return "undefined" !== e["scroll-snap-points-y"] && (t = n.exec(e["scroll-snap-points-y"]), null !== t && (r.y = {
            value: t[1],
            unit: t[2]
        })), "undefined" !== e["scroll-snap-points-x"] && (t = n.exec(e["scroll-snap-points-x"]), null !== t && (r.x = {
            value: t[1],
            unit: t[2]
        })), r
    }

    function p(e) {
        var t, n, r = /(\d+)(px|%) (\d+)(px|%)/g,
            i = {
                y: {
                    value: "px",
                    unit: 0
                },
                x: {
                    value: "px",
                    unit: 0
                }
            };
        return "undefined" != typeof e["scroll-snap-coordinate"] ? t = "scroll-snap-coordinate" : "undefined" != typeof e["scroll-snap-destination"] && (t = "scroll-snap-destination"), null !== t && (n = r.exec(e[t]), null !== n && (i.y = {
            value: n[1],
            unit: n[2]
        }, i.x = {
            value: n[3],
            unit: n[4]
        })), i
    }

    function m(n, r) {
        return "vh" == r.unit ? Math.max(t.documentElement.clientHeight, e.innerHeight || 1) / 100 * r.value : "%" == r.unit ? _(n) / 100 * r.value : _(n) / r.value
    }

    function y(n, r) {
        return "vw" == r.unit ? Math.max(t.documentElement.clientWidth, e.innerWidth || 1) / 100 * r.value : "%" == r.unit ? g(n) / 100 * r.value : g(n) / r.value
    }

    function v(e) {
        return e.scrollHeight
    }

    function x(e) {
        return e.scrollWidth
    }

    function _(e) {
        return e.offsetHeight
    }

    function g(e) {
        return e.offsetWidth
    }

    function M(n) {
        return n == t || n == e ? t.documentElement.scrollTop > 0 || t.documentElement.scrollLeft > 0 ? t.documentElement : t.querySelector("body") : n
    }

    function E(n, r) {
        var i = Math.abs(n - r),
            o = 100 / Math.max(t.documentElement.clientHeight, e.innerHeight || 1) * i,
            s = 100 / C * o;
        return isNaN(s) ? 0 : Math.max(C / 1.5, Math.min(s, C))
    }
    var L = 1 - .18,
        w = .95,
        S = 5,
        T = 2,
        R = 45,
        C = 768;
    if (!("scrollSnapType" in t.documentElement.style || "webkitScrollSnapType" in t.documentElement.style || "msScrollSnapType" in t.documentElement.style)) {
        var b, N, U = null,
            z = null,
            q = function(e) {
                b = e.target, N = M(b), j && (cancelAnimationFrame(j) || clearTimeout(j)), U ? clearTimeout(U) : z = {
                    y: N.scrollTop,
                    x: N.scrollLeft
                }, U = setTimeout($, R)
            },
            $ = function() {
                if (z.y != N.scrollTop || z.x != N.scrollLeft) {
                    var e, t = {
                        y: z.y - N.scrollTop > 0 ? -1 : 1,
                        x: z.x - N.scrollLeft > 0 ? -1 : 1
                    };
                    e = "undefined" != typeof N.snapElements && N.snapElements.length > 0 ? l(N, b, t) : u(N, b, t), b.removeEventListener("scroll", q, !1), O(N, e, function() {
                        b.addEventListener("scroll", q, !1)
                    }), isNaN(e.x || !isNaN(e.y)) || (z = e)
                }
            },
            k = null,
            A = 0,
            F = function(e) {
                return e * e * e
            },
            H = function(e, t, n, r) {
                return n > r ? t : e + (t - e) * F(n / r)
            },
            j = null,
            O = function(t, n, r) {
                var i = {
                        y: t.scrollTop,
                        x: t.scrollLeft
                    },
                    o = Date.now(),
                    s = e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || function(t) {
                        e.setTimeout(t, 15)
                    },
                    a = Math.max(E(i.y, n.y), E(i.x, n.x)),
                    u = function() {
                        var e = Date.now() - o;
                        if (isNaN(n.y) || (t.scrollTop = H(i.y, n.y, e, a)), isNaN(n.x) || (t.scrollLeft = H(i.x, n.x, e, a)), e > a) {
                            if ("function" == typeof r) return r(n)
                        } else j = s(u)
                    };
                u()
            };
        new Polyfill({
            declarations: ["scroll-snap-type:*", "scroll-snap-point-y:*", "scroll-snap-coordinate:*", "scroll-snap-destination:*"]
        }).doMatched(r).undoUnmatched(i)
    }
}(window, document);