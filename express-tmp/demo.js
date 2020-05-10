window.FrontJS = function(e, t, r) {
    "use strict";
    var n = "https://collecter.frontjs.com/",
        o = "https://static.frontjs.com/dist/current/tracker.min.js",
        a = "1.0.0-rc.22",
        i = 5e3,
        s = 0,
        c = 1,
        u = 2,
        l = 4,
        f = 8,
        m = 256,
        p = 512,
        g = 513,
        d = 514,
        v = 515,
        h = 768,
        y = 769,
        D = 770,
        _ = 771,
        S = 772,
        E = 1024,
        k = ["www.google-analytics.com", "www.googletagmanager.com", "retcode.alicdn.com", "arms-retcode.aliyuncs.com", "hm.baidu.com", "zz.bdstatic.com"],
        R = function(e, t) {
            t = t || "";
            var r = {
                1001: "Invalid token",
                1002: "Invalid behaviour settings",
                1003: "Invalid origin settings",
                1004: "Invalid exclude settings",
                1005: "Invalid user data",
                1006: "Invalid history API type",
                1007: "Invalid route mapping settings",
                4000: "Bad configuration! Fail to start!",
                4001: "FrontJS is already defined, Fail to start!"
            };
            r[e] && console.warn(["Error(frontjs):", r[e], "(CODE" + e + ")", "See https://www.frontjs.com/doc/view/errcode/#" + encodeURIComponent(t)].join(" "))
        };
    if (e.FrontJS && e.FrontJS.V) return R(4001), e.FrontJS;
    var T = function(e) {
            return e && e.match(/^\w{32}$/) ? 0 : 1
        },
        C = function(e) {
            return e <= (c | u | l | f) ? 0 : 1
        },
        L = function(e) {
            e = e || [];
            for (var t = 0; t < e.length; t++)
                if ("string" == typeof e[t]);
                else if (!e[t].test) return e[t];
            return 0
        },
        w = function(e) {
            e = e || [];
            for (var t = 0; t < e.length; t++)
                if ("string" != typeof e[t][0] || "string" != typeof e[t][1]) return "Pair: " + e[t].join(",");
            return 0
        },
        I = function(e) {
            for (var t in e = e || {})
                if ("object" == typeof e[t] || "string" != typeof t) return t;
            return 0
        },
        b = {
            parseRegExp: function(e) {
                if ("string" == typeof e && e.match(/^\/(.*)\/(i|g|m|u|y)*$/)) try {
                    return new Function("return " + e)()
                } catch (e) {}
                return null
            },
            KVArrayCopy: function(e) {
                var t = {};
                for (var r in e) t[r] = e[r];
                return t
            },
            uriArrayCopy: function(e) {
                e = e || [];
                for (var t = [], r = 0; r < e.length; r++) "string" == typeof e[r] && (b.parseRegExp(e[r]) ? t.push(b.parseRegExp(e[r])) : t.push(e[r]));
                return t
            },
            routeArrayCopy: function(e) {
                e = e || [];
                for (var t = [], r = 0; r < e.length; r++) "string" == typeof e[r][0] && (b.parseRegExp(e[r][0]) ? t.push([b.parseRegExp(e[r][0]), e[r][1]]) : t.push([e[r][0], e[r][1]]));
                return t
            },
            getTime: function() {
                return (new Date).getTime()
            },
            getGUID: function(e) {
                var t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
                    r = (e || b.getTime()).toString(16);
                for (r = "0" + r; r.length < 16;) r = "f" + r;
                for (; r.length < 32;) r += t[Math.floor(16 * Math.random())];
                return r
            },
            stringifyParameter: function(e) {
                var t = [];
                if (e && e.length) {
                    for (var r = 0; r < e.length; r++)
                        if (null === e[r]) t.push("null");
                        else if (void 0 === e[r]) t.push("undefined");
                    else if (e[r] instanceof Array && "string" == typeof e[r].toString()) t.push("[" + e[r].toString() + "]");
                    else if ("object" == typeof e[r]) {
                        var n = [];
                        for (var o in e[r]) {
                            var a = "";
                            if (a += o + ": ", null === e[r][o]) a += "null";
                            else if (void 0 === e[r][o]) a += "undefined";
                            else {
                                switch (typeof e[r][o]) {
                                    case "object":
                                        e[r][o] instanceof Array && "string" == typeof e[r][o].toString() ? a += "[" + e[r][o].toString() + "]" : "function" == typeof e[r][o].valueOf && "string" == typeof e[r][o].valueOf() ? a += e[r][o].valueOf() : "function" == typeof e[r][o].toString && "string" == typeof e[r][o].toString() ? a += e[r][o].toString() : a += "[object]";
                                        break;
                                    case "function":
                                        a += "[function]";
                                        break;
                                    default:
                                        a += e[r][o].toString()
                                }
                            }
                            n.push(a)
                        }
                        t.push("{" + n.join(", ") + "}")
                    } else "function" == typeof e[r].valueOf && "string" == typeof e[r].valueOf() ? t.push(e[r].valueOf()) : "function" == typeof e[r].toString && "string" == typeof e[r].toString() ? t.push(e[r].toString()) : t.push("[object]");
                    return t.join(", ")
                }
                return "[object]"
            },
            addSlashes: function(e) {
                return e.replace(/(\.|\\|\/|\||\+|\$|\^)/g, "\\$1")
            },
            filterTrace: function(e) {
                var t = new RegExp("((?!\n).)*" + b.addSlashes(o) + ".*\n", "g");
                return e.replace(t, "")
            },
            getUserAgent: function() {
                return e.navigator.userAgent
            },
            getCurrentURL: function() {
                return $.length < 1 ? e.location.href : $[$.length - 1]
            },
            getRefererURL: function() {
                return $.length < 2 ? t.referrer : $[$.length - 2]
            },
            getRoute: function(e, t) {
                if (t)
                    for (var r = 0; r < t.length; r++) {
                        var n = e.match(t[r][0]);
                        if (n) return t[r][1].replace(/\$(\d+)/g, function() {
                            return n[arguments[1]] || "$" + arguments[1]
                        })
                    }
                return e
            },
            getViewPortSize: function() {
                return {
                    w: e.innerWidth,
                    h: e.innerHeight,
                    r: e.devicePixelRatio
                }
            },
            getClientID: function() {
                return e.localStorage ? (e.localStorage.getItem("frontjs:client:id") || e.localStorage.setItem("frontjs:client:id", b.getGUID()), e.localStorage.getItem("frontjs:client:id")) : b.getGUID()
            },
            getSessionID: function() {
                return e.sessionStorage ? (e.sessionStorage.getItem("frontjs:session:id") || e.sessionStorage.setItem("frontjs:session:id", b.getGUID()), e.sessionStorage.getItem("frontjs:session:id")) : b.getGUID()
            },
            checkCrossOrigin: function(e, t) {
                if (t) {
                    e = e || "";
                    for (var r = !1, n = 0; n < t.length; n++) "" !== t[n] && e.match(t[n]) && (r |= !0);
                    return !r
                }
                return !1
            },
            checkInBaseDomain: function(t) {
                var r = (e.location.origin || e.location.host).replace(/^http(s):\/\//, "").replace(/:(\d+)/, "").split(".").slice(-2).join(".");
                return t.toLowerCase().indexOf(r) > -1
            },
            checkTimingSlow: function(e, t) {
                return !!t && (e.send > t.sned && t.sned > 0 || e.load > t.load && t.load > 0 || e.total > t.total && t.total > 0)
            },
            calculateTrackerTiming: function(e) {
                if (e._time_done && e._time_load && e._time_send && e._time_done) {
                    var t = e._time_send - e._time_open,
                        r = e._time_load - e._time_send,
                        n = e._time_done - e._time_open;
                    return {
                        send: t = t < 0 ? null : t,
                        load: r = r < 0 ? null : r,
                        total: n = n < 0 ? null : n
                    }
                }
                return {
                    send: 0,
                    load: 0,
                    total: 0
                }
            },
            getResourceTimingData: function(t) {
                var r = e.performance && e.performance.getEntriesByType && e.performance.getEntriesByType("resource");
                if (!r) return null;
                for (var n = r.length - 1; n >= s; n--)
                    if (t.length && r[n].name.length && r[n].name.substring(r[n].name.length - t.length) === t) return b.getTimingData(r[n]);
                return null
            },
            getTimingData: function(e) {
                var t = {};
                return t.dns = e.domainLookupEnd - e.domainLookupStart, t.connect = e.connectEnd - e.connectStart, t.request = e.responseStart - e.requestStart, t.response = e.responseEnd - e.responseStart, t.dns >= 0 && t.connect >= 0 && t.request >= 0 && t.response >= 0 ? t : null
            },
            composeTrackerData: function(e, t) {
                return {
                    type: e,
                    data: t
                }
            },
            composeScriptErrorData: function(e, t, r, n, o, a) {
                return a = a && a.stack ? a.stack.toString() : "", {
                    message: e,
                    detail: {
                        err: t,
                        file: r,
                        line: n,
                        column: o,
                        trace: a = b.filterTrace(a)
                    }
                }
            },
            composeXHRErrorData: function(e, t, r, n) {
                return {
                    message: e,
                    detail: {
                        requestURL: t,
                        responseData: r,
                        timing: n
                    }
                }
            },
            composeResourceErrorData: function(e, t, r) {
                return {
                    message: e,
                    detail: {
                        tagname: t,
                        resourceURL: r
                    }
                }
            },
            composePerformaceData: function(e, t) {
                return {
                    message: e,
                    detail: t
                }
            }
        },
        U = function(t) {
            var r = {},
                a = !0;
            if (T(t.token) ? (R(1001), a &= !1) : r.token = t.token.toString(), C(t.behaviour) ? (R(1002), a &= !1) : (r.behaviour = parseInt(t.behaviour), r.behaviour || (r.behaviour = c | u | l | f)), L(t.origin)) {
                var i = L(t.behaviour);
                R(1003, i), a &= !1
            } else r.origin = b.uriArrayCopy(t.origin), r.origin.push(e.location.origin || e.location.host), r.origin.push(/^((?!:\/\/).)*$/), r.origin.push(o), r.origin.push(n);
            return L(t.exclude) ? (i = L(t.exclude), R(1004, i), a &= !1) : (r.exclude = b.uriArrayCopy(t.exclude), r.exclude.push(o), r.exclude.push(n)), I(t.userData) ? (i = I(t.userData), R(1005, i), a &= !1) : r.userData = b.KVArrayCopy(t.userData), t.optimisedForSPA ? (r.optimisedForSPA = !!t.optimisedForSPA, r.useHistory = !!t.useHistory) : (r.optimisedForSPA = !1, r.useHistory = !1), t.trustVendor && (r.origin = r.origin.concat ? r.origin.concat(k) : k), t.ignoreVendor && (r.exclude = r.exclude.concat ? r.exclude.concat(k) : k), w(t.routeMapping) ? (i = w(t.routeMapping), R(1007, i), a &= !1) : r.routeMapping = b.routeArrayCopy(t.routeMapping), !!a && r
        }(r);
    if (!U) return R(4e3), !1;
    var q = e.XMLHttpRequest;
    if (e.XMLHttpRequest = function() {
            var e = new q;
            return e._tracker_open = e.open, e.tracker = {
                _time_init: 0,
                _time_open: 0,
                _time_send: 0,
                _time_load: 0,
                _time_done: 0,
                _request_method: "",
                _request_url: "",
                _status: ""
            }, e.addEventListener("error", X), e.addEventListener("timeout", X), e.addEventListener("readystatechange", X), e.open = function(t, r, n, o, a) {
                return e.tracker._request_method = t, e.tracker._request_url = r, e.tracker._time_open = b.getTime(), e._tracker_open(t, r, !1 !== n, o, a)
            }, e
        }, e.console) {
        var j = e.console.log,
            x = e.console.warn,
            O = e.console.error;
        e.console.log = function() {
            var t = [].slice.call(arguments);
            if (!t.length) return !0;
            var r = b.composeScriptErrorData(257, b.stringifyParameter(t).substr(0, 1e3), "via console.log", 0, 0, new Error(b.stringifyParameter(t).substr(0, 1e3))),
                n = r.detail.trace.split("\n");
            U.behaviour & c && (b.checkInBaseDomain(n.shift()) || b.checkInBaseDomain(n.shift())) && N(m, r), j.apply(e.console, t)
        }, e.console.warn = function() {
            var t = [].slice.call(arguments);
            if (!t.length) return !0;
            var r = b.composeScriptErrorData(258, b.stringifyParameter(t).substr(0, 1e3), "via console.warn", 0, 0, new Error(b.stringifyParameter(t).substr(0, 1e3)));
            U.behaviour & c && N(m, r), x.apply(e.console, t)
        }, e.console.error = function() {
            var t = [].slice.call(arguments);
            if (!t.length) return !0;
            var r = b.composeScriptErrorData(259, b.stringifyParameter(t).substr(0, 1e3), "via console.error", 0, 0, new Error(b.stringifyParameter(t).substr(0, 1e3)));
            U.behaviour & c && N(m, r), O.apply(e.console, t)
        }
    }
    if (e.fetch) {
        var P = e.fetch;
        e.fetch = function() {
            var t = [].slice.call(arguments),
                r = b.getTime(),
                n = P.apply(e, t);
            return n.then(function(e) {
                if (b.checkCrossOrigin(t[0], U.exclude) && U.behaviour & l) {
                    var n = b.getTime() - r,
                        o = b.getResourceTimingData(t[0]);
                    if (b.checkCrossOrigin(t[0], U.origin)) {
                        var a = b.composeXHRErrorData(S, t[0], {
                            status: e.status
                        }, {
                            send: n,
                            load: null,
                            total: n
                        });
                        N(h, a, o)
                    }
                    e.ok ? (a = b.composeXHRErrorData(_, t[0], {
                        status: e.status
                    }, {
                        send: n,
                        load: null,
                        total: n
                    }), N(h, a, o)) : (a = b.composeXHRErrorData(y, t[0], {
                        status: e.status
                    }, {
                        send: n,
                        load: null,
                        total: n
                    }), N(h, a, o))
                } else;
            }), n
        }
    }
    if (U.optimisedForSPA && U.useHistory && e.history) {
        var A = e.history.pushState;
        e.history.pushState = function() {
            var t = [].slice.call(arguments);
            A.apply(e.history, t), G(), B()
        };
        var H = e.history.replaceState;
        e.history.replaceState = function() {
            var t = [].slice.call(arguments);
            H.apply(e.history, t), G(), B()
        }
    }

    function M(e) {
        if (!e.message) return !0;
        var t = b.composeScriptErrorData(m, e.message, e.filename, e.lineno, e.colno, e.error);
        b.checkCrossOrigin(e.filename, U.exclude) && U.behaviour & c && N(m, t)
    }

    function F(e) {
        var t = e.target.tagName,
            r = e.target.src || e.target.href;
        if (r && r.length && 0 === r.indexOf("data:") && (r = r.slice(0, 40) + "..."), !(b.checkCrossOrigin(r, U.exclude) && U.behaviour & u && r)) return !0;
        if ("load" === e.type) {
            var n = b.getResourceTimingData(r);
            if (b.checkCrossOrigin(r, U.origin)) {
                var o = b.composeResourceErrorData(d, t, r);
                N(p, o, n)
            }
            n && (o = b.composeResourceErrorData(v, t, r), N(p, o, n))
        } else "error" === e.type && (o = b.composeResourceErrorData(g, t, r), N(p, o))
    }

    function X(e) {
        var t = e.target;
        if (!(b.checkCrossOrigin(t.tracker._request_url, U.exclude) && U.behaviour & l)) return !0;
        if ("readystatechange" === e.type) {
            var r = ["_time_init", "_time_open", "_time_send", "_time_load", "_time_done"];
            if (r[t.readyState] && (t.tracker[r[t.readyState]] = b.getTime()), 4 === t.readyState) {
                t.tracker._status = t.status;
                var n = b.calculateTrackerTiming(t.tracker),
                    o = b.getResourceTimingData(t.tracker._request_url);
                if (b.checkCrossOrigin(t.tracker._request_url, U.origin)) {
                    var a = b.composeXHRErrorData(S, t.tracker._request_url, {
                        status: t.tracker._status
                    }, n);
                    N(h, a, o)
                }(n.send || n.load || n.total || t.tracker._status) && (a = t.tracker._status >= 200 && t.tracker._status < 300 ? b.composeXHRErrorData(_, t.tracker._request_url, {
                    status: t.tracker._status
                }, n) : b.composeXHRErrorData(y, t.tracker._request_url, {
                    status: t.tracker._status
                }, n), N(h, a, o))
            }
        } else "error" === e.type ? (t.tracker._status = t.status, a = b.composeXHRErrorData(y, t.tracker._request_url, {
            status: t.tracker._status
        }, n), N(h, a)) : "timeout" === e.type && (t.tracker._status = t.status, a = b.composeXHRErrorData(D, t.tracker._request_url, {
            status: t.tracker._status
        }, n), N(h, a))
    }

    function G(t) {
        if (e.performance && e.performance.timing && U.behaviour & f) {
            var r = {};
            r.dns = e.performance.timing.domainLookupEnd - e.performance.timing.domainLookupStart, r.connect = e.performance.timing.connectEnd - e.performance.timing.connectStart, r.request = e.performance.timing.responseStart - e.performance.timing.requestStart, r.response = e.performance.timing.responseEnd - e.performance.timing.responseStart, r.dom = e.performance.timing.domInteractive - e.performance.timing.domLoading, r.domContent = e.performance.timing.domComplete - e.performance.timing.domInteractive, r.load = e.performance.timing.domComplete - e.performance.timing.domainLookupStart, r.view = (new Date).getTime() - z, r.dns = r.dns < 0 ? null : r.dns, r.connect = r.connect < 0 ? null : r.connect, r.request = r.request < 0 ? null : r.request, r.response = r.response < 0 ? null : r.response, r.dom = r.dom < 0 ? null : r.dom, r.domContent = r.domContent < 0 ? null : r.domContent, r.load = r.load < 0 ? null : r.load, r.view = r.view < 0 ? null : r.view;
            var n = b.composePerformaceData(E, r);
            N(E, n)
        }
    }

    function B(t) {
        if (e.performance && e.performance.timing && U.behaviour & f) {
            var r = {};
            r.dns = e.performance.timing.domainLookupEnd - e.performance.timing.domainLookupStart, r.connect = e.performance.timing.connectEnd - e.performance.timing.connectStart, r.request = e.performance.timing.responseStart - e.performance.timing.requestStart, r.response = e.performance.timing.responseEnd - e.performance.timing.responseStart, r.dom = e.performance.timing.domInteractive - e.performance.timing.domLoading, r.domContent = e.performance.timing.domComplete - e.performance.timing.domInteractive, r.load = e.performance.timing.domComplete - e.performance.timing.domainLookupStart, r.dns = r.dns < 0 ? null : r.dns, r.connect = r.connect < 0 ? null : r.connect, r.request = r.request < 0 ? null : r.request, r.response = r.response < 0 ? null : r.response, r.dom = r.dom < 0 ? null : r.dom, r.domContent = r.domContent < 0 ? null : r.domContent, r.load = r.load < 0 ? null : r.load, $.length && (J = b.getGUID()), $.push(e.location.href), z = z ? (new Date).getTime() : e.performance.timing.domComplete, ae = b.composePerformaceData(E, r), N(E, ae), Z.dispatchEvent({
                type: "enterpage",
                url: b.getCurrentURL(),
                referer: b.getRefererURL(),
                route: b.getRoute(b.getCurrentURL(), U.routeMapping),
                refererRoute: b.getRoute(b.getRefererURL(), U.routeMapping)
            })
        }
    }

    function V(e) {
        G(), B()
    }
    if (e.performance && e.performance.timing && e.performance.timing.navigationStart) var J = b.getGUID(e.performance.timing.navigationStart);
    else J = b.getGUID();
    var $ = [],
        z = null;

    function N(e, t, r, n) {
        var o = !1,
            i = b.composeTrackerData(e, t);
        if (i.currentURL = b.getCurrentURL(), i.refererURL = b.getRefererURL(), i.currentRoute = b.getRoute(i.currentURL, U.routeMapping), i.refererRoute = b.getRoute(i.refererURL, U.routeMapping), i.viewPort = b.getViewPortSize(), i.userAgent = b.getUserAgent(), i.clientID = b.getClientID(), i.sessionID = b.getSessionID(), e === E ? (i.messageID = J, o = !0) : i.messageID = b.getGUID(n), i.token = U.token, i.version = a, i.userData = U.userData, r)
            for (var s in i.data.detail = i.data.detail || {}, r) i.data.detail[s] = r[s];
        setTimeout(function() {
            Q(i, o)
        }, 0)
    }
    var K = [],
        W = null;

    function Q(t, r) {
        if (t && K.push(t), r && K.length) {
            var o = new e.XMLHttpRequest;
            o.open("POST", n, !0), o.send(e.JSON.stringify(K)), K = [], e.clearTimeout(W), Y()
        }
    }

    function Y() {
        W = e.setTimeout(function() {
            Q(null, !0), Y()
        }, i)
    }
    Y(), e.addEventListener("beforeunload", G, !0), e.addEventListener("load", B, !0), e.addEventListener("error", M, !0), t.addEventListener("error", F, !0), t.addEventListener("load", F, !0), U.optimisedForSPA && U.useHistory ? e.addEventListener("popstate", V, !0) : U.optimisedForSPA && e.addEventListener("hashchange", V, !0);
    var Z = function(t) {
            var r = [];

            function n(e) {
                return e.message || (e = new Error(e)), e.error = e, e.filename = e.filename ? e.filename : "", e.filename += " via frontJS try - catch API", e.lineno = e.lineno ? e.lineno : 0, e.colno = e.colno ? e.colno : 0, M(e), null
            }
            return {
                try: function() {
                    var e = arguments[0],
                        t = arguments[1];
                    try {
                        return e.apply(t, [].slice.call(arguments, 2))
                    } catch (e) {
                        return n(e)
                    }
                },
                catch: n,
                addEventListener: function(e, t) {
                    r[e] = r[e] ? r[e] : [];
                    for (var n = 0; n < r[e].length; n++)
                        if (t === r[e]) return t;
                    return r[e].push(t), t
                },
                removeEventListener: function(e, t) {
                    r[e] = r[e] ? r[e] : [];
                    for (var n = [], o = 0; o < r[e].length; o++) t !== r[e][o] && n.push(r[e][o]);
                    return r[e] = n, t
                },
                dispatchEvent: function(t) {
                    var n = t.type;
                    if ("string" == typeof n) {
                        r[n] = r[n] ? r[n] : [];
                        for (var o = 0; o < r[n].length; o++) "function" == typeof r[n][o] && e.setTimeout(function(e) {
                            return function() {
                                r[n][e](t)
                            }
                        }(o), 0)
                    }
                },
                composedTry: function(e, t) {
                    return function() {
                        try {
                            return e.apply(t, [].slice.call(arguments))
                        } catch (e) {
                            return n(e)
                        }
                    }
                },
                addUserData: function(e, r) {
                    return "string" == typeof r || "number" == typeof r || "boolean" == typeof r || null === r ? (t.userData[e] = r, !0) : (R(1005, e), !1)
                },
                removeUserData: function(e) {
                    return delete t.userData[e], !0
                }
            }
        }(U),
        ee = e.performance && e.performance.getEntriesByType && e.performance.getEntriesByType("resource");
    if (ee && ee.length) {
        var te = e.performance.timing.navigationStart;
        J = b.getGUID(te);
        for (var re = 0; re < ee.length; re++) {
            var ne = b.getTimingData(ee[re]),
                oe = ee[re].name;
            if (ee[re].initiatorType && ["xmlhttprequest", "fetch"].indexOf(ee[re].initiatorType.toLowerCase()) > -1) {
                if (!(b.checkCrossOrigin(oe, U.exclude) && U.behaviour & l)) continue;
                if (b.checkCrossOrigin(oe, U.origin)) {
                    var ae = b.composeXHRErrorData(S, oe, {
                        status: 200
                    }, {
                        send: ne.request,
                        load: ne.response,
                        total: ne.request + ne.response
                    });
                    N(h, ae, ne, Math.floor(te + ee[re].startTime))
                }
                ae = b.composeXHRErrorData(_, oe, {
                    status: 200
                }, {
                    send: ne.request,
                    load: ne.response,
                    total: ne.request + ne.response
                }), N(h, ae, ne, Math.floor(te + ee[re].startTime))
            } else if (!(["navigation"].indexOf(ee[re].initiatorType.toLowerCase()) > -1)) {
                if (!(b.checkCrossOrigin(oe, U.exclude) && U.behaviour & u && oe)) continue;
                b.checkCrossOrigin(oe, U.origin) && (ae = b.composeResourceErrorData(d, ee[re].initiatorType.toUpperCase(), oe), N(p, ae, ne, Math.floor(te + ee[re].startTime))), ae = b.composeResourceErrorData(v, ee[re].initiatorType.toUpperCase(), oe), N(p, ae, ne, Math.floor(te + ee[re].startTime))
            }
        }
        s = ee.length
    }
    if (e.frontjsTmpData && (e.frontjsTmpData.length || 0 === e.frontjsTmpData.length)) var ie = {
        r: e.frontjsTmpData,
        e: [],
        l: []
    };
    else ie = e.frontjsTmpData || {
        r: [],
        e: [],
        l: []
    };
    for (re = 0; re < ie.r.length; re++) {
        var se = ie.r[re][1] && ie.r[re][1].target;
        ae = b.composeResourceErrorData(g, se.tagName, se.src || se.href), N(p, ae, null, ie.r[re][0])
    }
    for (re = 0; re < ie.e.length; re++) {
        var ce = ie.e[re][1];
        ae = b.composeScriptErrorData(m, ce.message, ce.filename, ce.lineno, ce.colno, ce.error), b.checkCrossOrigin(ce.filename, U.exclude) && U.behaviour & c && N(m, ae, null, ie.e[re][0])
    }
    if ("complete" === t.readyState && B(), ie.l && ie.l.length)
        for (var ue = 0; ue < ie.l.length; ue++) Z.addEventListener(ie.l[ue][0], ie.l[ue][1]);
    return e.document.removeEventListener("error", e.frontjsTmpCollector, !0), e.removeEventListener("error", e.frontjsTmpCollector, !0), delete e.frontjsTmpData, delete e.frontjsTmpCollector, {
        C: {
            SCRIPT: c,
            RESOURCE: u,
            XHR: l,
            PERFOMACE: f
        },
        V: a,
        try: Z.try,
        catch: Z.catch,
        addEventListener: Z.addEventListener,
        removeEventListener: Z.removeEventListener,
        composedTry: Z.composedTry,
        addUserData: Z.addUserData,
        removeUserData: Z.removeUserData
    }
}(window, document, window.frontjsConfig);
//# sourceMappingURL=tracker.min.js.map