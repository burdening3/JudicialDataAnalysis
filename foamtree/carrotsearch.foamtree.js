/**
 * Carrot Search FoamTree HTML5 (demo variant)
 * v3.4.2, 16c31e9d27ffc454471a6ffc4cb8e64fc6286ae8/16c31e9d, build FOAMTREE-SOFTWARE4-DIST-16, Nov 13, 2015
 *
 * Carrot Search confidential.
 * Copyright 2002-2015, Carrot Search s.c, All Rights Reserved.
 */
(function() {
    var v = function() {
        var a = window.navigator.userAgent,
            l;
        try {
            window.localStorage.setItem("ftap5caavc", "ftap5caavc"), window.localStorage.removeItem("ftap5caavc"), l = !0
        } catch (h) {
            l = !1
        }
        return {
            pf: function() {
                return /webkit/i.test(a)
            },
            nf: function() {
                return /Mac/.test(a)
            },
            mf: function() {
                return /iPad|iPod|iPhone/.test(a)
            },
            jf: function() {
                return /Android/.test(a)
            },
            gi: function() {
                return "ontouchstart" in window || !!window.DocumentTouch && document instanceof window.DocumentTouch
            },
            fi: function() {
                return l
            },
            ei: function() {
                var a = document.createElement("canvas");
                return !(!a.getContext || !a.getContext("2d"))
            },
            Ad: function(a, c) {
                return [].forEach && v.ei() ? a && a() : c && c()
            }
        }
    }();
    var C = function() {
        function a() {
            return window.performance && (window.performance.now || window.performance.mozNow || window.performance.msNow || window.performance.oNow || window.performance.webkitNow) || Date.now
        }
        var l = a();
        return {
            create: function() {
                return {
                    now: function() {
                        var h = a();
                        return function() {
                            return h.call(window.performance)
                        }
                    }()
                }
            },
            now: function() {
                return l.call(window.performance)
            }
        }
    }();

    function aa() {
        function a() {
            if (!d) throw "AF0";
            var a = C.now();
            0 !== g && (h.Hd = a - g);
            g = a;
            c = c.filter(function(a) {
                return null !== a
            });
            h.frames++;
            for (var e = 0; e < c.length; e++) {
                var b = c[e];
                null !== b && (!0 === b.ze.call(b.Wg) ? c[e] = null : H.Qc(b.repeat) && (b.repeat = b.repeat - 1, 0 >= b.repeat && (c[e] = null)))
            }
            c = c.filter(function(a) {
                return null !== a
            });
            d = !1;
            l();
            a = C.now() - a;
            0 !== a && (h.Gd = a);
            h.totalTime += a;
            h.Pe = 1E3 * h.frames / h.totalTime;
            g = 0 === c.length ? 0 : C.now()
        }

        function l() {
            0 < c.length && !d && (d = !0, f(a))
        }
        var h = this.pg = {
            frames: 0,
            totalTime: 0,
            Gd: 0,
            Hd: 0,
            Pe: 0
        };
        ca = h;
        var f = function() {
                return v.mf() ? function(a) {
                    window.setTimeout(a, 0)
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function() {
                    var a = C.create();
                    return function(e) {
                        var b = 0;
                        window.setTimeout(function() {
                            var c = a.now();
                            e();
                            b = a.now() - c
                        }, 16 > b ? 16 - b : 0)
                    }
                }()
            }(),
            c = [],
            d = !1,
            g = 0;
        this.repeat = function(a, e, b) {
            this.cancel(a);
            c.push({
                ze: a,
                Wg: b,
                repeat: e
            });
            l()
        };
        this.d = function(a, e) {
            this.repeat(a,
                1, e)
        };
        this.cancel = function(a) {
            for (var e = 0; e < c.length; e++) {
                var b = c[e];
                null !== b && b.ze === a && (c[e] = null)
            }
        };
        this.k = function() {
            c = []
        }
    }
    var ca;
    var da = v.Ad(function() {
        function a() {
            this.buffer = [];
            this.oa = 0;
            this.Ec = H.extend({}, g)
        }

        function l(a) {
            return function() {
                var e, b = this.buffer,
                    c = this.oa;
                b[c++] = "call";
                b[c++] = a;
                b[c++] = arguments.length;
                for (e = 0; e < arguments.length; e++) b[c++] = arguments[e];
                this.oa = c
            }
        }

        function h(a) {
            return function() {
                return c[a].apply(c, arguments)
            }
        }
        var f = document.createElement("canvas");
        f.width = 1;
        f.height = 1;
        var c = f.getContext("2d"),
            f = ["font"],
            d = "fillStyle globalAlpha globalCompositeOperation lineCap lineDashOffset lineJoin lineWidth miterLimit shadowBlur shadowColor shadowOffsetX shadowOffsetY strokeStyle textAlign textBaseline".split(" "),
            g = {};
        d.concat(f).forEach(function(a) {
            g[a] = c[a]
        });
        a.prototype.clear = function() {
            this.oa = 0
        };
        a.prototype.Ma = function() {
            return 0 === this.oa
        };
        a.prototype.Ra = function(a) {
            function e(a, b, e) {
                for (var c = 0, d = a.oa, f = a.buffer; c < e;) f[d++] = b[c++];
                a.oa = d
            }

            function b(a, b, e, c) {
                for (var d = 0; d < e;) switch (b[d++]) {
                    case "set":
                        a[b[d++]] = b[d++];
                        break;
                    case "setGlobalAlpha":
                        a[b[d++]] = b[d++] * c;
                        break;
                    case "call":
                        var f = b[d++];
                        switch (b[d++]) {
                            case 0:
                                a[f]();
                                break;
                            case 1:
                                a[f](b[d++]);
                                break;
                            case 2:
                                a[f](b[d++], b[d++]);
                                break;
                            case 3:
                                a[f](b[d++],
                                    b[d++], b[d++]);
                                break;
                            case 4:
                                a[f](b[d++], b[d++], b[d++], b[d++]);
                                break;
                            case 5:
                                a[f](b[d++], b[d++], b[d++], b[d++], b[d++]);
                                break;
                            case 6:
                                a[f](b[d++], b[d++], b[d++], b[d++], b[d++], b[d++]);
                                break;
                            case 7:
                                a[f](b[d++], b[d++], b[d++], b[d++], b[d++], b[d++], b[d++]);
                                break;
                            case 8:
                                a[f](b[d++], b[d++], b[d++], b[d++], b[d++], b[d++], b[d++], b[d++]);
                                break;
                            case 9:
                                a[f](b[d++], b[d++], b[d++], b[d++], b[d++], b[d++], b[d++], b[d++], b[d++]);
                                break;
                            default:
                                throw "CB0";
                        }
                }
            }
            a instanceof da ? e(a, this.buffer, this.oa) : b(a, this.buffer, this.oa, H.B(a.globalAlpha,
                1))
        };
        a.prototype.replay = a.prototype.Ra;
        a.prototype.d = function() {
            return new a
        };
        a.prototype.scratch = a.prototype.d;
        "arc arcTo beginPath bezierCurveTo clearRect clip closePath drawImage fill fillRect fillText lineTo moveTo putImageData quadraticCurveTo rect rotate scale setLineDash setTransform stroke strokeRect strokeText transform translate".split(" ").forEach(function(d) {
            a.prototype[d] = l(d)
        });
        ["measureText", "createLinearGradient", "createRadialGradient", "createPattern", "getLineDash"].forEach(function(d) {
            a.prototype[d] =
                h(d)
        });
        ["save", "restore"].forEach(function(d) {
            a.prototype[d] = function(a, b) {
                return function() {
                    a.apply(this, arguments);
                    b.apply(this, arguments)
                }
            }(l(d), h(d))
        });
        f.forEach(function(d) {
            Object.defineProperty(a.prototype, d, {
                set: function(a) {
                    c[d] = a;
                    this.Ec[d] = a;
                    var b = this.buffer;
                    b[this.oa++] = "set";
                    b[this.oa++] = d;
                    b[this.oa++] = a
                },
                get: function() {
                    return this.Ec[d]
                }
            })
        });
        d.forEach(function(d) {
            Object.defineProperty(a.prototype, d, {
                set: function(a) {
                    this.Ec[d] = a;
                    var b = this.buffer;
                    b[this.oa++] = "globalAlpha" === d ? "setGlobalAlpha" :
                        "set";
                    b[this.oa++] = d;
                    b[this.oa++] = a
                },
                get: function() {
                    return this.Ec[d]
                }
            })
        });
        a.prototype.roundRect = function(a, d, b, c, f) {
            this.beginPath();
            this.moveTo(a + f, d);
            this.lineTo(a + b - f, d);
            this.quadraticCurveTo(a + b, d, a + b, d + f);
            this.lineTo(a + b, d + c - f);
            this.quadraticCurveTo(a + b, d + c, a + b - f, d + c);
            this.lineTo(a + f, d + c);
            this.quadraticCurveTo(a, d + c, a, d + c - f);
            this.lineTo(a, d + f);
            this.quadraticCurveTo(a, d, a + f, d);
            this.closePath()
        };
        a.prototype.fillPolygonWithText = function(a, d, b, c, f) {
            f || (f = {});
            var h = {
                    qb: H.B(f.maxFontSize, M.Da.qb),
                    Xc: H.B(f.minFontSize, M.Da.Xc),
                    lineHeight: H.B(f.lineHeight, M.Da.lineHeight),
                    nb: H.B(f.horizontalPadding, M.Da.nb),
                    cb: H.B(f.verticalPadding, M.Da.cb),
                    rb: H.B(f.maxTotalTextHeight, M.Da.rb),
                    fontFamily: H.B(f.fontFamily, M.Da.fontFamily),
                    fontStyle: H.B(f.fontStyle, M.Da.fontStyle),
                    fontVariant: H.B(f.fontVariant, M.Da.fontVariant),
                    fontWeight: H.B(f.fontWeight, M.Da.fontWeight),
                    verticalAlign: H.B(f.verticalAlign, M.Da.verticalAlign)
                },
                g = f.cache;
            if (g && H.Q(f, "area")) {
                g.gd || (g.gd = new da);
                var q = f.area,
                    s = H.B(f.cacheInvalidationThreshold,
                        0.05);
                a = M.ye(h, this, c, a, T.q(a, {}), {
                    x: d,
                    y: b
                }, f.allowForcedSplit || !1, f.allowEllipsis || !1, g, q, s, f.invalidateCache)
            } else a = M.Me(h, this, c, a, T.q(a, {}), {
                x: d,
                y: b
            }, f.allowForcedSplit || !1, f.allowEllipsis || !1);
            return a.la ? {
                fit: !0,
                lineCount: a.kc,
                fontSize: a.fontSize,
                box: {
                    x: a.da.x,
                    y: a.da.y,
                    w: a.da.f,
                    h: a.da.i
                },
                ellipsis: a.cc
            } : {
                fit: !1
            }
        };
        return a
    });
    var fa = v.Ad(function() {
        function a(a) {
            this.O = a;
            this.d = [];
            this.Gb = [void 0];
            this.Lc = ["#SIZE#px sans-serif"];
            this.Id = [0];
            this.Jd = [1];
            this.ge = [0];
            this.he = [0];
            this.ie = [0];
            this.Od = [10];
            this.fc = [10];
            this.Qb = [this.Gb, this.Lc, this.fc, this.Id, this.Jd, this.ge, this.Od, this.he, this.ie];
            this.ga = [1, 0, 0, 1, 0, 0]
        }

        function l(a) {
            var d = a.O,
                c = a.Qb[0].length - 1;
            a.Gb[c] && (d.setLineDash(a.Gb[c]), d.Qj = a.Id[c]);
            d.miterLimit = a.Od[c];
            d.lineWidth = a.Jd[c];
            d.shadowBlur = a.ge[c];
            d.shadowOffsetX = a.he[c];
            d.shadowOffsetY = a.ie[c];
            d.font =
                a.Lc[c].replace("#SIZE#", a.fc[c].toString())
        }

        function h(a) {
            return function() {
                return this.O[a].apply(this.O, arguments)
            }
        }

        function f(a) {
            return function(c, e) {
                var f = this.ga;
                return this.O[a].call(this.O, d(c, e, f), g(c, e, f))
            }
        }

        function c(a) {
            return function(c, e, f, h) {
                var q = this.ga;
                return this.O[a].call(this.O, d(c, e, q), g(c, e, q), f * q[0], h * q[3])
            }
        }

        function d(a, d, c) {
            return a * c[0] + d * c[2] + c[4]
        }

        function g(a, d, c) {
            return a * c[1] + d * c[3] + c[5]
        }

        function m(a, d) {
            for (var c = 0; c < a.length; c++) a[c] *= d[0];
            return a
        }
        a.prototype.save =
            function() {
                this.d.push(this.ga.slice(0));
                for (var a = 0; a < this.Qb.length; a++) {
                    var d = this.Qb[a];
                    d.push(d[d.length - 1])
                }
                this.O.save()
            };
        a.prototype.restore = function() {
            this.ga = this.d.pop();
            for (var a = 0; a < this.Qb.length; a++) this.Qb[a].pop();
            this.O.restore();
            l(this)
        };
        a.prototype.scale = function(a, d) {
            var c = this.ga;
            c[0] *= a;
            c[1] *= a;
            c[2] *= d;
            c[3] *= d;
            var c = this.ga,
                e = this.Qb,
                f = e[0].length - 1,
                h = this.Gb[f];
            h && m(h, c);
            for (h = 2; h < e.length; h++) {
                var g = e[h];
                g[f] *= c[0]
            }
            l(this)
        };
        a.prototype.translate = function(a, d) {
            var c = this.ga;
            c[4] += c[0] * a + c[2] * d;
            c[5] += c[1] * a + c[3] * d
        };
        ["moveTo", "lineTo"].forEach(function(b) {
            a.prototype[b] = f(b)
        });
        ["clearRect", "fillRect", "strokeRect", "rect"].forEach(function(b) {
            a.prototype[b] = c(b)
        });
        "fill stroke beginPath closePath clip createImageData createPattern getImageData putImageData getLineDash setLineDash".split(" ").forEach(function(b) {
            a.prototype[b] = h(b)
        });
        [{
            tb: "lineDashOffset",
            xb: function(a) {
                return a.Id
            }
        }, {
            tb: "lineWidth",
            xb: function(a) {
                return a.Jd
            }
        }, {
            tb: "miterLimit",
            xb: function(a) {
                return a.Od
            }
        },
            {
                tb: "shadowBlur",
                xb: function(a) {
                    return a.ge
                }
            }, {
            tb: "shadowOffsetX",
            xb: function(a) {
                return a.he
            }
        }, {
            tb: "shadowOffsetY",
            xb: function(a) {
                return a.ie
            }
        }
        ].forEach(function(b) {
            Object.defineProperty(a.prototype, b.tb, {
                set: function(a) {
                    var d = b.xb(this);
                    a *= this.ga[0];
                    d[d.length - 1] = a;
                    this.O[b.tb] = a
                }
            })
        });
        var e = /(\d+(?:\.\d+)?)px/;
        Object.defineProperty(a.prototype, "font", {
            set: function(a) {
                var d = e.exec(a);
                if (1 < d.length) {
                    var c = this.fc.length - 1;
                    this.fc[c] = parseFloat(d[1]);
                    this.Lc[c] = a.replace(e, "#SIZE#px");
                    this.O.font =
                        this.Lc[c].replace("#SIZE#", (this.fc[c] * this.ga[0]).toString())
                }
            }
        });
        "fillStyle globalAlpha globalCompositeOperation lineCap lineJoin shadowColor strokeStyle textAlign textBaseline".split(" ").forEach(function(b) {
            Object.defineProperty(a.prototype, b, {
                set: function(a) {
                    this.O[b] = a
                }
            })
        });
        a.prototype.arc = function(a, c, e, f, h, q) {
            var s = this.ga;
            this.O.arc(d(a, c, s), g(a, c, s), e * s[0], f, h, q)
        };
        a.prototype.arcTo = function(a, c, e, f, h) {
            var q = this.ga;
            this.O.arc(d(a, c, q), g(a, c, q), d(e, f, q), g(e, f, q), h * q[0])
        };
        a.prototype.bezierCurveTo =
            function(a, c, e, f, h, q) {
                var s = this.ga;
                this.O.bezierCurveTo(d(a, c, s), g(a, c, s), d(e, f, s), g(e, f, s), d(h, q, s), g(h, q, s))
            };
        a.prototype.drawImage = function(a, c, e, f, h, q, s, m, l) {
            function x(c, e, f, h) {
                B.push(d(c, e, y));
                B.push(g(c, e, y));
                f = H.V(f) ? a.width : f;
                h = H.V(h) ? a.height : h;
                B.push(f * y[0]);
                B.push(h * y[3])
            }
            var y = this.ga,
                B = [a];
            H.V(q) ? x(c, e, f, h) : x(q, s, m, l);
            this.O.drawImage.apply(this.O, B)
        };
        a.prototype.quadraticCurveTo = function(a, c, e, f) {
            var h = this.ga;
            this.O.quadraticCurveTo(d(a, c, h), g(a, c, h), d(e, f, h), g(e, f, h))
        };
        a.prototype.fillText =
            function(a, c, e, f) {
                var h = this.ga;
                this.O.fillText(a, d(c, e, h), g(c, e, h), H.Qc(f) ? f * h[0] : 1E20)
            };
        a.prototype.setLineDash = function(a) {
            a = m(a.slice(0), this.ga);
            this.Gb[this.Gb.length - 1] = a;
            this.O.setLineDash(a)
        };
        return a
    });
    var ha = function() {
        var a = !v.pf() || v.mf() || v.jf() ? 1 : 7;
        return {
            bh: function() {
                function l(a) {
                    a.beginPath();
                    ga.je(a, m)
                }
                var h = document.createElement("canvas");
                h.width = 800;
                h.height = 600;
                var f = h.getContext("2d"),
                    c = h.width,
                    h = h.height,
                    d, g = 0,
                    m = [{
                        x: 0,
                        y: 100
                    }];
                for (d = 1; 6 >= d; d++) g = 2 * d * Math.PI / 6, m.push({
                    x: 0 + 100 * Math.sin(g),
                    y: 0 + 100 * Math.cos(g)
                });
                d = {
                    polygonPlainFill: [l, function(a) {
                        a.fillStyle = "rgb(255, 0, 0)";
                        a.fill()
                    }],
                    polygonPlainStroke: [l, function(a) {
                        a.strokeStyle = "rgb(128, 0, 0)";
                        a.lineWidth = 2;
                        a.closePath();
                        a.stroke()
                    }],
                    polygonGradientFill: [l, function(a) {
                        var b = a.createRadialGradient(0, 0, 10, 0, 0, 60);
                        b.addColorStop(0, "rgb(255, 0, 0)");
                        b.addColorStop(1, "rgb(255, 255, 0)");
                        a.fillStyle = b;
                        a.fill()
                    }],
                    polygonGradientStroke: [l, function(a) {
                        var b = a.createLinearGradient(-100, -100, 100, 100);
                        b.addColorStop(0, "rgb(224, 0, 0)");
                        b.addColorStop(1, "rgb(32, 0, 0)");
                        a.strokeStyle = b;
                        a.lineWidth = 2;
                        a.closePath();
                        a.stroke()
                    }],
                    polygonExposureShadow: [l, function(a) {
                        a.shadowBlur = 50;
                        a.shadowColor = "rgba(0, 0, 0, 1)";
                        a.fillStyle = "rgba(0, 0, 0, 1)";
                        a.globalCompositeOperation = "source-over";
                        a.fill();
                        a.shadowBlur = 0;
                        a.shadowColor = "transparent";
                        a.globalCompositeOperation = "destination-out";
                        a.fill()
                    }],
                    labelPlainFill: [function(a) {
                        a.fillStyle = "#000";
                        a.font = "24px sans-serif";
                        a.textAlign = "center"
                    }, function(a) {
                        a.fillText("Some text", 0, -16);
                        a.fillText("for testing purposes", 0, 16)
                    }]
                };
                var g = 100 / Object.keys(d).length,
                    e = C.now(),
                    b = {},
                    k;
                for (k in d) {
                    var n = d[k],
                        r = C.now(),
                        p, q = 0;
                    do {
                        f.save();
                        f.translate(Math.random() * c, Math.random() * h);
                        p = 3 * Math.random() + 0.5;
                        f.scale(p,
                            p);
                        for (p = 0; p < n.length; p++) n[p](f);
                        f.restore();
                        q++;
                        p = C.now()
                    } while (p - r < g);
                    b[k] = a * (p - r) / q
                }
                b.total = C.now() - e;
                return b
            }
        }
    }();
    var ga = {
        je: function(a, l) {
            var h = l[0];
            a.moveTo(h.x, h.y);
            for (var f = l.length - 1; 0 < f; f--) h = l[f], a.lineTo(h.x, h.y)
        },
        oj: function(a, l, h, f) {
            var c, d, g, m = [],
                e = 0,
                b = l.length;
            for (g = 0; g < b; g++) c = l[g], d = l[(g + 1) % b], c = T.d(c, d), c = Math.sqrt(c), m.push(c), e += c;
            h = f * (h + 0.5 * f * e / b);
            var k, n;
            f = {};
            var e = {},
                r = {},
                p = 0;
            for (g = 0; g < b; g++) c = l[g], d = l[(g + 1) % b], k = l[(g + 2) % b], n = m[(g + 1) % b], n = Math.min(0.5, h / n), T.Aa(1 - n, d, k, e), T.Aa(n, d, k, r), p++, 0 == g && (k = Math.min(0.5, h / m[0]), T.Aa(k, c, d, f), p++, a.moveTo(f.x, f.y)), a.quadraticCurveTo(d.x, d.y, e.x, e.y),
                a.lineTo(r.x, r.y);
            return !0
        }
    };

    function ia(a) {
        function l(a) {
            k[a].style.opacity = r * n[a]
        }

        function h(a) {
            a.width = Math.round(d * a.o);
            a.height = Math.round(g * a.o)
        }

        function f() {
            return /relative|absolute|fixed/.test(window.getComputedStyle(c, null).getPropertyValue("position"))
        }
        var c, d, g, m, e, b = [],
            k = {},
            n = {},
            r = 0;
        this.H = function(b) {
            c = b;
            f() || (c.style.position = "relative");
            0 != c.clientWidth && 0 != c.clientHeight || na.Xa("element has zero dimensions: " + c.clientWidth + " x " + c.clientHeight + ".");
            c.innerHTML = "";
            d = c.clientWidth;
            g = c.clientHeight;
            m = 0 !== d ? d : void 0;
            e = 0 !== g ? g : void 0;
            "embedded" === c.getAttribute("data-foamtree") && na.Xa("visualization already embedded in the element.");
            c.setAttribute("data-foamtree", "embedded");
            a.c.p("stage:initialized", this, c, d, g)
        };
        this.jb = function() {
            c.removeAttribute("data-foamtree");
            b = [];
            k = {};
            a.c.p("stage:disposed", this, c)
        };
        this.k = function() {
            f() || (c.style.position = "relative");
            d = c.clientWidth;
            g = c.clientHeight;
            if (0 !== d && 0 !== g && (d !== m || g !== e)) {
                for (var k = b.length - 1; 0 <= k; k--) h(b[k]);
                a.c.p("stage:resized", m, e, d, g);
                m = d;
                e = g
            }
        };
        this.cj =
            function(a, b) {
                a.o = b;
                h(a)
            };
        this.mc = function(d, e, f) {
            var g = document.createElement("canvas");
            g.setAttribute("style", "position: absolute; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; -webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;");
            g.o = e;
            h(g);
            b.push(g);
            k[d] = g;
            n[d] = 1;
            l(d);
            f || c.appendChild(g);
            a.c.p("stage:newLayer", d, g);
            return g
        };
        this.ic = function(a, b) {
            H.V(b) || (n[a] = b, l(a));
            return n[a]
        };
        this.d = function(a) {
            H.V(a) ||
            (r = a, H.Fa(k, function(a, b) {
                l(b)
            }));
            return r
        }
    };

    function oa(a) {
        function l(a, b, e) {
            x = !0;
            r.x = 0;
            r.y = 0;
            p.x = 0;
            p.y = 0;
            c = k;
            d.x = n.x;
            d.y = n.y;
            b();
            g *= a;
            m = e ? g / c : a;
            m = Math.max(0.25 / c, m);
            return !0
        }

        function h(a, b) {
            b.x = a.x / k + n.x;
            b.y = a.y / k + n.y;
            return b
        }

        function f(a, b, c, d, e, f, h, k, g) {
            var s = (a - c) * (f - k) - (b - d) * (e - h);
            if (1E-5 > Math.abs(s)) return !1;
            g.x = ((a * d - b * c) * (e - h) - (a - c) * (e * k - f * h)) / s;
            g.y = ((a * d - b * c) * (f - k) - (b - d) * (e * k - f * h)) / s;
            return !0
        }
        var c = 1,
            d = {
                x: 0,
                y: 0
            },
            g = 1,
            m = 1,
            e = 1,
            b = {
                x: 0,
                y: 0
            },
            k = 1,
            n = {
                x: 0,
                y: 0
            },
            r = {
                x: 0,
                y: 0
            },
            p = {
                x: 0,
                y: 0
            },
            q, s, w = {
                x: 0,
                y: 0,
                f: 0,
                i: 0
            },
            u = {
                x: 0,
                y: 0,
                f: 0,
                i: 0,
                scale: 1
            },
            x = !0;
        a.c.j("stage:initialized", function(a, b, c, d) {
            q = c;
            s = d;
            w.x = 0;
            w.y = 0;
            w.f = c;
            w.i = d;
            u.x = 0;
            u.y = 0;
            u.f = c;
            u.i = d;
            u.scale = 1
        });
        a.c.j("stage:resized", function(a, c, e, f) {
            function h(a) {
                a.x *= g;
                a.y *= m
            }

            function k(a) {
                h(a);
                a.f *= g;
                a.i *= m
            }
            q = e;
            s = f;
            var g = e / a,
                m = f / c;
            h(d);
            h(n);
            h(b);
            h(r);
            h(p);
            k(w);
            k(u)
        });
        this.Wb = function(a, c) {
            return l(c, function() {
                h(a, b)
            }, !0)
        };
        this.Y = function(a, c) {
            if (1 === Math.round(1E4 * c) / 1E4) {
                var d = w.x - n.x,
                    e = w.y - n.y;
                l(1, function() {}, !0);
                return this.d(-d, -e)
            }
            return l(c, function() {
                for (var c = !1; !c;) var c = Math.random(),
                    d = Math.random(),
                    e = Math.random(),
                    h = Math.random(),
                    c = f(a.x + c * a.f, a.y + d * a.i, w.x + c * w.f, w.y + d * w.i, a.x + e * a.f, a.y + h * a.i, w.x + e * w.f, w.y + h * w.i, b)
            }, !0)
        };
        this.qc = function(a, c) {
            var d, e, h, g;
            d = a.f / a.i;
            e = q / s;
            d < e ? (h = a.i * e, g = a.i, d = a.x - 0.5 * (h - a.f), e = a.y) : d > e ? (h = a.f, g = a.f * s / q, d = a.x, e = a.y - 0.5 * (g - a.i)) : (d = a.x, e = a.y, h = a.f, g = a.i);
            d -= h * c;
            e -= g * c;
            h *= 1 + 2 * c;
            if (f(d, e, n.x, n.y, d + h, e, n.x + q / k, n.y, b)) return l(q / k / h, H.ta, !1);
            x = !1;
            return this.d(k * (n.x - d), k * (n.y - e))
        };
        this.d = function(a, b) {
            var c = Math.round(1E4 * a) / 1E4,
                d = Math.round(1E4 * b) /
                    1E4;
            p.x += c / k;
            p.y += d / k;
            return 0 !== c || 0 !== d
        };
        this.reset = function(a) {
            a && this.content(0, 0, q, s);
            return this.Y({
                x: w.x + n.x,
                y: w.y + n.y,
                f: w.f / k,
                i: w.i / k
            }, e / g)
        };
        this.Ob = function(a) {
            e = Math.min(1, Math.round(1E4 * (a || g)) / 1E4)
        };
        this.k = function() {
            return n.x < w.x ? (w.x - n.x) * k : n.x + q / k > w.x + w.f ? -(n.x + q / k - w.x - w.f) * k : 0
        };
        this.A = function() {
            return n.y < w.y ? (w.y - n.y) * k : n.y + s / k > w.y + w.i ? -(n.y + s / k - w.y - w.i) * k : 0
        };
        this.update = function(a) {
            var e = Math.abs(Math.log(m));
            6 > e ? e = 2 : (e /= 4, e += 3 * e * (1 < m ? a : 1 - a));
            e = 1 < m ? Math.pow(a, e) : 1 - Math.pow(1 - a,
                e);
            e = (x ? e : 1) * (m - 1) + 1;
            k = c * e;
            n.x = b.x - (b.x - d.x) / e;
            n.y = b.y - (b.y - d.y) / e;
            n.x -= r.x * (1 - a) + p.x * a;
            n.y -= r.y * (1 - a) + p.y * a;
            1 === a && (r.x = p.x, r.y = p.y);
            u.x = n.x;
            u.y = n.y;
            u.f = q / k;
            u.i = s / k;
            u.scale = k
        };
        this.S = function(a) {
            a.x = u.x;
            a.y = u.y;
            a.scale = u.scale;
            return a
        };
        this.absolute = function(a, b) {
            return h(a, b || {})
        };
        this.oe = function(a, b) {
            var c = b || {};
            c.x = (a.x - n.x) * k;
            c.y = (a.y - n.y) * k;
            return c
        };
        this.Fc = function(a) {
            return this.scale() < e / a
        };
        this.Pd = function() {
            return H.Cd(k, 1)
        };
        this.scale = function() {
            return Math.round(1E4 * k) / 1E4
        };
        this.content =
            function(a, b, c, d) {
                w.x = a;
                w.y = b;
                w.f = c;
                w.i = d
            };
        this.Hc = function(a, b) {
            var c;
            for (c = a.length - 1; 0 <= c; c--) {
                var d = a[c];
                d.save();
                d.scale(k, k);
                d.translate(-n.x, -n.y)
            }
            b(u);
            for (c = a.length - 1; 0 <= c; c--) d = a[c], d.restore()
        }
    };
    var W = new function() {
        function a(a) {
            if ("hsl" == a.model || "hsla" == a.model) return a;
            var f = a.r /= 255,
                c = a.g /= 255,
                d = a.b /= 255,
                g = Math.max(f, c, d),
                m = Math.min(f, c, d),
                e, b = (g + m) / 2;
            if (g == m) e = m = 0;
            else {
                var k = g - m,
                    m = 0.5 < b ? k / (2 - g - m) : k / (g + m);
                switch (g) {
                    case f:
                        e = (c - d) / k + (c < d ? 6 : 0);
                        break;
                    case c:
                        e = (d - f) / k + 2;
                        break;
                    case d:
                        e = (f - c) / k + 4
                }
                e /= 6
            }
            a.h = 360 * e;
            a.s = 100 * m;
            a.l = 100 * b;
            a.model = "hsl";
            return a
        }
        var l = {
            h: 0,
            s: 0,
            l: 0,
            a: 1,
            model: "hsla"
        };
        this.Ha = function(h) {
            return H.Rc(h) ? a(W.Fg(h)) : H.hc(h) ? a(h) : l
        };
        this.Fg = function(a) {
            var f;
            return (f = /rgba\(\s*([^,\s]+)\s*,\s*([^,\s]+)\s*,\s*([^,\s]+)\s*,\s*([^,\s]+)\s*\)/.exec(a)) &&
            5 == f.length ? {
                r: parseFloat(f[1]),
                g: parseFloat(f[2]),
                b: parseFloat(f[3]),
                a: parseFloat(f[4]),
                model: "rgba"
            } : (f = /hsla\(\s*([^,\s]+)\s*,\s*([^,%\s]+)%\s*,\s*([^,\s%]+)%\s*,\s*([^,\s]+)\s*\)/.exec(a)) && 5 == f.length ? {
                h: parseFloat(f[1]),
                s: parseFloat(f[2]),
                l: parseFloat(f[3]),
                a: parseFloat(f[4]),
                model: "hsla"
            } : (f = /rgb\(\s*([^,\s]+)\s*,\s*([^,\s]+)\s*,\s*([^,\s]+)\s*\)/.exec(a)) && 4 == f.length ? {
                r: parseFloat(f[1]),
                g: parseFloat(f[2]),
                b: parseFloat(f[3]),
                a: 1,
                model: "rgb"
            } : (f = /hsl\(\s*([^,\s]+)\s*,\s*([^,\s%]+)%\s*,\s*([^,\s%]+)%\s*\)/.exec(a)) &&
            4 == f.length ? {
                h: parseFloat(f[1]),
                s: parseFloat(f[2]),
                l: parseFloat(f[3]),
                a: 1,
                model: "hsl"
            } : (f = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(a)) && 4 == f.length ? {
                r: parseInt(f[1], 16),
                g: parseInt(f[2], 16),
                b: parseInt(f[3], 16),
                a: 1,
                model: "rgb"
            } : (f = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(a)) && 4 == f.length ? {
                r: 17 * parseInt(f[1], 16),
                g: 17 * parseInt(f[2], 16),
                b: 17 * parseInt(f[3], 16),
                a: 1,
                model: "rgb"
            } : l
        };
        this.Ag = function(a) {
            function f(a, b, c) {
                0 > c && (c += 1);
                1 < c && (c -= 1);
                return c < 1 / 6 ? a + 6 * (b - a) * c : 0.5 > c ? b : c < 2 / 3 ?
                    a + (b - a) * (2 / 3 - c) * 6 : a
            }
            if ("rgb" == a.model || "rgba" == a.model) return Math.sqrt(a.r * a.r * 0.241 + a.g * a.g * 0.691 + a.b * a.b * 0.068) / 255;
            var c, d;
            c = a.l / 100;
            var g = a.s / 100;
            d = a.h / 360;
            if (0 == a.Tj) c = a = d = c;
            else {
                var g = 0.5 > c ? c * (1 + g) : c + g - c * g,
                    m = 2 * c - g;
                c = f(m, g, d + 1 / 3);
                a = f(m, g, d);
                d = f(m, g, d - 1 / 3)
            }
            return Math.sqrt(65025 * c * c * 0.241 + 65025 * a * a * 0.691 + 65025 * d * d * 0.068) / 255
        };
        this.Lg = function(a) {
            if (H.Rc(a)) return a;
            if (H.hc(a)) switch (a.model) {
                case "hsla":
                    return W.Gg(a);
                case "hsl":
                    return W.pe(a);
                case "rgba":
                    return W.Jg(a);
                case "rgb":
                    return W.Ig(a);
                default:
                    return "#000"
            } else return "#000"
        };
        this.Jg = function(a) {
            return "rgba(" + (0.5 + a.r | 0) + "," + (0.5 + a.g | 0) + "," + (0.5 + a.b | 0) + "," + a.a + ")"
        };
        this.Ig = function(a) {
            return "rgba(" + (0.5 + a.r | 0) + "," + (0.5 + a.g | 0) + "," + (0.5 + a.b | 0) + ")"
        };
        this.Gg = function(a) {
            return "hsla(" + (0.5 + a.h | 0) + "," + (0.5 + a.s | 0) + "%," + (0.5 + a.l | 0) + "%," + a.a + ")"
        };
        this.pe = function(a) {
            return "hsl(" + (0.5 + a.h | 0) + "," + (0.5 + a.s | 0) + "%," + (0.5 + a.l | 0) + "%)"
        };
        this.Y = function(a, f, c) {
            return "hsl(" + (0.5 + a | 0) + "," + (0.5 + f | 0) + "%," + (0.5 + c | 0) + "%)"
        }
    };

    function X() {
        var a = !1,
            l, h = [],
            f = this,
            c = new function() {
                this.N = function(c) {
                    c && (a ? c.apply(f, l) : h.push(c));
                    return this
                };
                this.gh = function(a) {
                    f = a;
                    return {
                        then: this.N
                    }
                }
            };
        this.J = function() {
            l = arguments;
            for (var c = 0; c < h.length; c++) h[c].apply(f, l);
            a = !0;
            return this
        };
        this.L = function() {
            return c
        }
    }

    function pa(a) {
        var l = new X,
            h = a.length;
        if (0 < a.length)
            for (var f = a.length - 1; 0 <= f; f--) a[f].N(function() {
                0 === --h && l.J()
            });
        else l.J();
        return l.L()
    }

    function qa(a) {
        var l = 0;
        this.d = function() {
            l++
        };
        this.k = function() {
            l--;
            0 === l && a()
        };
        this.clear = function() {
            l = 0
        };
        this.A = function() {
            return 0 === l
        }
    };
    var ra = {
        Je: function(a, l, h, f) {
            f = f || {};
            a = a.getBoundingClientRect();
            f.x = l - a.left;
            f.y = h - a.top;
            return f
        }
    };

    function sa() {
        var a = document,
            l = {};
        this.addEventListener = function(h, f) {
            var c = l[h];
            c || (c = [], l[h] = c);
            c.push(f);
            a.addEventListener(h, f)
        };
        this.d = function() {
            H.Fa(l, function(h, f) {
                for (var c = h.length - 1; 0 <= c; c--) a.removeEventListener(f, h[c])
            })
        }
    };

    function ta(a) {
        function l(a) {
            return function(b) {
                h(b) && a.apply(this, arguments)
            }
        }

        function h(b) {
            for (b = b.target; b;) {
                if (b === a) return !0;
                b = b.parentElement
            }
            return !1
        }

        function f(a, b, d) {
            d = d || {};
            c(a, d);
            for (var e = 0; e < b.length; e++) b[e].call(a.target, d);
            (void 0 === d.Kb && d.wi || "prevent" === d.Kb) && a.preventDefault();
            return d
        }

        function c(b, c) {
            ra.Je(a, b.clientX, b.clientY, c);
            c.altKey = b.altKey;
            c.metaKey = b.metaKey;
            c.ctrlKey = b.ctrlKey;
            c.shiftKey = b.shiftKey;
            c.vb = 3 === b.which;
            return c
        }
        var d = new sa,
            g = [],
            m = [],
            e = [],
            b = [],
            k = [],
            n = [],
            r = [],
            p = [],
            q = [],
            s = [];
        this.d = function(a) {
            g.push(a)
        };
        this.k = function(a) {
            b.push(a)
        };
        this.ya = function(a) {
            m.push(a)
        };
        this.Ha = function(a) {
            e.push(a)
        };
        this.Aa = function(a) {
            s.push(a)
        };
        this.za = function(a) {
            k.push(a)
        };
        this.Ja = function(a) {
            n.push(a)
        };
        this.Y = function(a) {
            r.push(a)
        };
        this.A = function(a) {
            p.push(a)
        };
        this.S = function(a) {
            q.push(a)
        };
        this.jb = function() {
            d.d()
        };
        var w, u, x, y, B = {
                x: 0,
                y: 0
            },
            A = {
                x: 0,
                y: 0
            },
            z = !1,
            J = !1;
        d.addEventListener("mousedown", l(function(b) {
            if (b.target !== a) {
                var c = f(b, e);
                A.x = c.x;
                A.y = c.y;
                B.x = c.x;
                B.y =
                    c.y;
                z = !0;
                f(b, r);
                u = !1;
                w = window.setTimeout(function() {
                    100 > T.d(B, c) && (window.clearTimeout(y), f(b, m), u = !0)
                }, 400)
            }
        }));
        d.addEventListener("mouseup", function(a) {
            function c(a) {
                var b = {};
                b.x = a.pageX;
                b.y = a.pageY;
                return b
            }
            if (z) {
                J && f(a, q);
                window.clearTimeout(w);
                if (!u && !J && h(a)) {
                    var d = c(a);
                    x && 100 > T.d(d, x) ? f(a, b) : f(a, g);
                    x = d;
                    y = window.setTimeout(function() {
                        x = null
                    }, 350)
                }
                J = z = !1
            }
        });
        d.addEventListener("mousemove", function(a) {
            var b = c(a, {});
            h(a) && f(a, k, {
                type: "move"
            });
            B.x = b.x;
            B.y = b.y;
            z && !J && 100 < T.d(A, B) && (J = !0);
            J && f(a, p,
                b)
        });
        d.addEventListener("mouseout", l(function(a) {
            f(a, n, {
                type: "out"
            })
        }));
        d.addEventListener(void 0 !== document.onmousewheel ? "mousewheel" : "MozMousePixelScroll", l(function(a) {
            var b = a.wheelDelta,
                c = a.detail;
            f(a, s, {
                td: (c ? b ? 0 < b / c / 40 * c ? 1 : -1 : -c / (v.nf() ? 40 : 19) : b / 40) / 3,
                wi: !0
            })
        }));
        d.addEventListener("contextmenu", l(function(a) {
            a.preventDefault()
        }))
    };
    var Y = function() {
        function a(a) {
            return function(d) {
                return Math.pow(d, a)
            }
        }

        function l(a) {
            return function(d) {
                return 1 - Math.pow(1 - d, a)
            }
        }

        function h(a) {
            return function(d) {
                return 1 > (d *= 2) ? 0.5 * Math.pow(d, a) : 1 - 0.5 * Math.abs(Math.pow(2 - d, a))
            }
        }

        function f(a) {
            return function(d) {
                for (var f = 0; f < a.length; f++) d = (0, a[f])(d);
                return d
            }
        }
        return {
            pa: function(a) {
                switch (a) {
                    case "linear":
                        return Y.Hb;
                    case "bounce":
                        return Y.Tg;
                    case "squareIn":
                        return Y.mg;
                    case "squareOut":
                        return Y.Pb;
                    case "squareInOut":
                        return Y.ng;
                    case "cubicIn":
                        return Y.Xg;
                    case "cubicOut":
                        return Y.Ae;
                    case "cubicInOut":
                        return Y.Yg;
                    case "quadIn":
                        return Y.Oi;
                    case "quadOut":
                        return Y.Qi;
                    case "quadInOut":
                        return Y.Pi;
                    default:
                        return Y.Hb
                }
            },
            Hb: function(a) {
                return a
            },
            Tg: f([h(2), function(a) {
                return 0 === a ? 0 : 1 === a ? 1 : a * (a * (a * (a * (25.9425 * a - 85.88) + 105.78) - 58.69) + 13.8475)
            }]),
            mg: a(2),
            Pb: l(2),
            ng: h(2),
            Xg: a(3),
            Ae: l(3),
            Yg: h(3),
            Oi: a(2),
            Qi: l(2),
            Pi: h(2),
            d: f
        }
    }();
    var H = {
        V: function(a) {
            return void 0 === a
        },
        of: function(a) {
            return null === a
        },
        Qc: function(a) {
            return "[object Number]" === Object.prototype.toString.call(a)
        },
        Rc: function(a) {
            return "[object String]" === Object.prototype.toString.call(a)
        },
        Dd: function(a) {
            return "function" === typeof a
        },
        hc: function(a) {
            return a === Object(a)
        },
        Cd: function(a, l) {
            return 1E-6 > a - l && -1E-6 < a - l
        },
        kf: function(a) {
            return H.V(a) || H.of(a) || H.Rc(a) && !/\S/.test(a)
        },
        Q: function(a, l) {
            return a && a.hasOwnProperty(l)
        },
        mb: function(a, l) {
            if (a)
                for (var h = l.length -
                    1; 0 <= h; h--)
                    if (a.hasOwnProperty(l[h])) return !0;
            return !1
        },
        extend: function(a) {
            H.ah(Array.prototype.slice.call(arguments, 1), function(l) {
                if (l)
                    for (var h in l) l.hasOwnProperty(h) && (a[h] = l[h])
            });
            return a
        },
        A: function(a, l) {
            return a.map(function(a) {
                return a[l]
            }, [])
        },
        ah: function(a, l, h) {
            null != a && (a.forEach ? a.forEach(l, h) : H.Fa(a, l, h))
        },
        Fa: function(a, l, h) {
            for (var f in a)
                if (a.hasOwnProperty(f) && !1 === l.call(h, a[f], f, a)) break
        },
        B: function() {
            for (var a = 0; a < arguments.length; a++) {
                var l = arguments[a];
                if (!(H.V(l) || H.Qc(l) &&
                    isNaN(l) || H.Rc(l) && H.kf(l))) return l
            }
        },
        ag: function(a, l) {
            var h = a.indexOf(l);
            0 <= h && a.splice(h, 1)
        },
        Zg: function(a, l, h) {
            var f;
            return function() {
                var c = this,
                    d = arguments,
                    g = h && !f;
                clearTimeout(f);
                f = setTimeout(function() {
                    f = null;
                    h || a.apply(c, d)
                }, l);
                g && a.apply(c, d)
            }
        },
        defer: function(a) {
            setTimeout(a, 1)
        },
        k: function(a) {
            return a
        },
        ta: function() {}
    };
    var ua = {
        hi: function(a, l, h) {
            return v.fi() ? function() {
                var f = l + ":" + JSON.stringify(arguments),
                    c = window.localStorage.getItem(f);
                c && (c = JSON.parse(c));
                if (c && Date.now() - c.t < h) return c.v;
                c = a.apply(this, arguments);
                window.localStorage.setItem(f, JSON.stringify({
                    v: c,
                    t: Date.now()
                }));
                return c
            } : a
        }
    };
    var va = {
        m: function(a, l) {
            function h() {
                var f = [];
                if (Array.isArray(a))
                    for (var c = 0; c < a.length; c++) {
                        var d = a[c];
                        d && f.push(d.apply(l, arguments))
                    } else a && f.push(a.apply(l, arguments));
                return f
            }
            h.empty = function() {
                return 0 === a.length && !H.Dd(a)
            };
            return h
        }
    };

    function wa() {
        var a = {};
        this.j = function(l, h) {
            var f = a[l];
            f || (f = [], a[l] = f);
            f.push(h)
        };
        this.p = function(l, h) {
            var f = a[l];
            if (f)
                for (var c = Array.prototype.slice.call(arguments, 1), d = 0; d < f.length; d++) f[d].apply(this, c)
        }
    };
    var xa = {
        ig: function(a) {
            for (var l = "", h = 0; h < a.length; h++) l += String.fromCharCode(a.charCodeAt(h) ^ 1);
            return l
        }
    };

    function ya(a) {
        function l(b, c, h) {
            var l = this,
                p, q = 0;
            this.id = g++;
            this.name = h ? h : "{unnamed on " + b + "}";
            this.target = function() {
                return b
            };
            this.Eb = function() {
                return -1 != e.indexOf(l)
            };
            this.start = function() {
                if (!l.Eb()) {
                    if (-1 == e.indexOf(l)) {
                        var b = m.now();
                        !0 === l.xf(b) && (e = e.slice(), e.push(l))
                    }
                    0 < e.length && a.repeat(f)
                }
                return this
            };
            this.stop = function() {
                for (d(l); p < c.length; p++) {
                    var a = c[p];
                    a.hb && a.Va.call()
                }
                return this
            };
            this.cg = function() {
                p = void 0
            };
            this.xf = function(a) {
                q++;
                if (0 !== c.length) {
                    var b;
                    H.V(p) ? (p = 0, b = c[p], b.W &&
                    b.W.call(b, a, q, l)) : b = c[p];
                    for (; p < c.length;) {
                        if (b.Va && b.Va.call(b, a, q, l)) return !0;
                        b.Ca && b.Ca.call(b, a, q, l);
                        H.V(p) && (p = -1);
                        ++p < c.length && (b = c[p], b.W && b.W.call(b, a, q, l))
                    }
                }
                return !1
            }
        }

        function h(a) {
            return H.V(a) ? e.slice() : e.filter(function(c) {
                return c.target() === a
            })
        }

        function f() {
            c();
            0 == e.length && a.cancel(f)
        }

        function c() {
            var a = m.now();
            e.forEach(function(c) {
                !0 !== c.xf(a) && d(c)
            })
        }

        function d(a) {
            e = e.filter(function(c) {
                return c !== a
            })
        }
        var g = 0,
            m = C.create(),
            e = [];
        this.d = function() {
            for (var a = e.length - 1; 0 <= a; a--) e[a].stop();
            e = []
        };
        this.D = function() {
            function a() {}

            function c(a) {
                var b = a.target,
                    d = a.duration,
                    e = a.ca,
                    f, k;
                this.W = function() {
                    f = {};
                    for (var c in a.G) b.hasOwnProperty(c) && (f[c] = {
                        start: H.V(a.G[c].start) ? b[c] : H.Dd(a.G[c].start) ? a.G[c].start.call(void 0) : a.G[c].start,
                        end: H.V(a.G[c].end) ? b[c] : H.Dd(a.G[c].end) ? a.G[c].end.call(void 0) : a.G[c].end,
                        P: H.V(a.G[c].P) ? Y.Hb : a.G[c].P
                    });
                    k = m.now()
                };
                this.Va = function() {
                    var a = m.now() - k,
                        a = 0 === d ? 1 : Math.min(d, a) / d,
                        c;
                    for (c in f) {
                        var h = f[c];
                        b[c] = h.start + (h.end - h.start) * h.P(a)
                    }
                    e && e.call(b, a);
                    return 1 > a
                }
            }

            function d(a, b, c) {
                this.hb = c;
                this.Va = function() {
                    a.call(b);
                    return !1
                }
            }

            function e(a) {
                var b;
                this.W = function(c, d) {
                    b = d + a
                };
                this.Va = function(a, c) {
                    return c < b
                }
            }

            function f(a) {
                var b;
                this.W = function(c) {
                    b = c + a
                };
                this.Va = function(a) {
                    return a < b
                }
            }

            function g(a) {
                this.W = function() {
                    a.forEach(function(a) {
                        a.start()
                    })
                };
                this.Va = function() {
                    for (var b = 0; b < a.length; b++)
                        if (a[b].Eb()) return !0;
                    return !1
                }
            }
            a.m = function(a, b) {
                return new function() {
                    function h(b, c, e, f) {
                        return c ? (H.V(e) && (e = a), b.zb(new d(c, e, f))) : b
                    }
                    var m = [];
                    this.zb =
                        function(a) {
                            m.push(a);
                            return this
                        };
                    this.eb = function(a) {
                        return this.zb(new f(a))
                    };
                    this.me = function(a) {
                        return this.zb(new e(a || 1))
                    };
                    this.call = function(a, b) {
                        return h(this, a, b, !1)
                    };
                    this.hb = function(a, b) {
                        return h(this, a, b, !0)
                    };
                    this.ia = function(b) {
                        H.V(b.target) && (b.target = a);
                        return this.zb(new c(b))
                    };
                    this.Wa = function(a) {
                        return this.zb(new g(a))
                    };
                    this.cg = function() {
                        return this.zb({
                            Va: function(a, b) {
                                b.cg();
                                return !0
                            }
                        })
                    };
                    this.xa = function() {
                        return new l(a, m, b)
                    };
                    this.start = function() {
                        return this.xa().start()
                    };
                    this.Dg = function() {
                        var a = new X;
                        this.me().call(a.J).xa();
                        return a.L()
                    };
                    this.ab = function() {
                        var a = this.Dg();
                        this.start();
                        return a
                    }
                }
            };
            a.tc = function(c) {
                h(c).forEach(function(a) {
                    a.stop()
                });
                return a.m(c, void 0)
            };
            return a
        }()
    };
    var $ = function() {
        var a = {
            Ie: function(a, h) {
                if (a.e)
                    for (var f = a.e, c = 0; c < f.length; c++) h(f[c], c)
            },
            Ic: function(l, h) {
                if (l.e)
                    for (var f = l.e, c = 0; c < f.length; c++)
                        if (!1 === a.Ic(f[c], h) || !1 === h(f[c], c)) return !1
            }
        };
        a.F = a.Ic;
        a.Jc = function(l, h) {
            if (l.e)
                for (var f = l.e, c = 0; c < f.length; c++)
                    if (!1 === h(f[c], c) || !1 === a.Jc(f[c], h)) return !1
        };
        a.Ea = function(l, h) {
            if (l.e)
                for (var f = l.e, c = 0; c < f.length; c++)
                    if (!1 === a.Ea(f[c], h)) return !1;
            return h(l)
        };
        a.Kj = a.Ea;
        a.ud = function(l, h) {
            !1 !== h(l) && a.Jc(l, h)
        };
        a.Kc = function(l, h) {
            var f = [];
            a.Jc(l, function(a) {
                f.push(a)
            });
            return h ? f.filter(h) : f
        };
        a.He = function(a, h) {
            for (var f = a.parent; f && !1 !== h(f);) f = f.parent
        };
        a.ii = function(a, h) {
            for (var f = a.parent; f && f !== h;) f = f.parent;
            return !!f
        };
        return a
    }();
    var T = new function() {
        function a(a, f) {
            var c = a.x - f.x,
                d = a.y - f.y;
            return c * c + d * d
        }

        function l(a, f, c) {
            for (var d = 0; d < a.length; d++) {
                var g = T.za(a[d], a[d + 1] || a[0], f, c, !0);
                if (g) return g
            }
        }
        this.za = function(a, f, c, d, g) {
            var m = a.x;
            a = a.y;
            var e = f.x - m;
            f = f.y - a;
            var b = c.x,
                k = c.y;
            c = d.x - b;
            var n = d.y - k;
            d = e * n - c * f;
            if (!(1E-12 >= d && -1E-12 <= d) && (b = b - m, k = k - a, c = (b * n - c * k) / d, d = (b * f - e * k) / d, 0 <= d && (g || 1 >= d) && 0 <= c && 1 >= c)) return {
                x: m + e * c,
                y: a + f * c
            }
        };
        this.Hg = function(a, f, c, d) {
            var g = a.x;
            a = a.y;
            var m = f.x - g;
            f = f.y - a;
            var e = c.x;
            c = c.y;
            var b = d.x - e;
            d = d.y -
                c;
            var k = m * d - b * f;
            if (!(1E-12 >= k && -1E-12 <= k) && (d = ((e - g) * d - b * (c - a)) / k, 0 <= d && 1 >= d)) return {
                x: g + m * d,
                y: a + f * d
            }
        };
        this.qe = function(a, f, c) {
            for (var d = T.k(f, {}), g = T.k(c, {}), m, e = g.x - d.x, b = g.y - d.y, k = [], g = 0; g < c.length; g++) m = c[g], k.push({
                x: m.x - e,
                y: m.y - b
            });
            c = [];
            m = [];
            for (g = 0; g < a.length; g++) {
                var n = a[g],
                    r = l(f, d, n);
                r ? (c.push(r), m.push(l(k, d, n))) : (c.push(null), m.push(null))
            }
            for (g = 0; g < a.length; g++)
                if (r = c[g], n = m[g], r && n) {
                    f = a[g];
                    var k = d,
                        p = r.x - d.x,
                        r = r.y - d.y,
                        r = Math.sqrt(p * p + r * r);
                    if (1E-12 < r) {
                        var p = f.x - d.x,
                            q = f.y - d.y,
                            r = Math.sqrt(p *
                                p + q * q) / r;
                        f.x = k.x + r * (n.x - k.x);
                        f.y = k.y + r * (n.y - k.y)
                    } else f.x = k.x, f.y = k.y
                } for (g = 0; g < a.length; g++) m = a[g], m.x += e, m.y += b
        };
        this.q = function(a, f) {
            if (0 !== a.length) {
                var c, d, g, m;
                c = d = a[0].x;
                g = m = a[0].y;
                for (var e = a.length; 0 < --e;) c = Math.min(c, a[e].x), d = Math.max(d, a[e].x), g = Math.min(g, a[e].y), m = Math.max(m, a[e].y);
                f.x = c;
                f.y = g;
                f.f = d - c;
                f.i = m - g;
                return f
            }
        };
        this.A = function(a) {
            return [{
                x: a.x,
                y: a.y
            }, {
                x: a.x + a.f,
                y: a.y
            }, {
                x: a.x + a.f,
                y: a.y + a.i
            }, {
                x: a.x,
                y: a.y + a.i
            }]
        };
        this.k = function(a, f) {
            for (var c = 0, d = 0, g = a.length, m = a[0], e = 0, b = 1; b <
            g - 1; b++) var k = a[b],
                     n = a[b + 1],
                     l = m.y + k.y + n.y,
                     p = (k.x - m.x) * (n.y - m.y) - (n.x - m.x) * (k.y - m.y),
                     c = c + p * (m.x + k.x + n.x),
                     d = d + p * l,
                     e = e + p;
            f.x = c / (3 * e);
            f.y = d / (3 * e);
            f.ja = e / 2;
            return f
        };
        this.se = function(a, f) {
            this.k(a, f);
            f.Mb = Math.sqrt(f.ja / Math.PI)
        };
        this.fb = function(a, f) {
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    g = a[c + 1] || a[0];
                if (0 > (f.y - d.y) * (g.x - d.x) - (f.x - d.x) * (g.y - d.y)) return !1
            }
            return !0
        };
        this.Kg = function(a, f, c) {
            var d = a.x,
                g = f.x;
            a.x > f.x && (d = f.x, g = a.x);
            g > c.x + c.f && (g = c.x + c.f);
            d < c.x && (d = c.x);
            if (d > g) return !1;
            var m = a.y,
                e = f.y,
                b = f.x -
                    a.x;
            1E-7 < Math.abs(b) && (e = (f.y - a.y) / b, a = a.y - e * a.x, m = e * d + a, e = e * g + a);
            m > e && (d = e, e = m, m = d);
            e > c.y + c.i && (e = c.y + c.i);
            m < c.y && (m = c.y);
            return m <= e
        };
        this.te = function(h, f, c, d, g) {
            var m, e;

            function b(b, c, d) {
                if (f.x === n.x && f.y === n.y) return d;
                var g = l(h, f, n),
                    p = Math.sqrt(a(g, f) / (b * b + c * c));
                return p < k ? (k = p, m = g.x, e = g.y, 0 !== c ? Math.abs(e - f.y) / Math.abs(c) : Math.abs(m - f.x) / Math.abs(b)) : d
            }
            d = H.B(d, 0.5);
            g = H.B(g, 0.5);
            c = H.B(c, 1);
            var k = Number.MAX_VALUE;
            e = m = 0;
            var n = {
                    x: 0,
                    y: 0
                },
                r, p = d * c;
            c = (1 - d) * c;
            d = 1 - g;
            n.x = f.x - p;
            n.y = f.y - g;
            r = b(p, g, r);
            n.x =
                f.x + c;
            n.y = f.y - g;
            r = b(c, g, r);
            n.x = f.x - p;
            n.y = f.y + d;
            r = b(p, d, r);
            n.x = f.x + c;
            n.y = f.y + d;
            return r = b(c, d, r)
        };
        this.Cg = function(a, f) {
            function c(a, c, d) {
                var e = c.x,
                    f = d.x;
                c = c.y;
                d = d.y;
                var g = f - e,
                    h = d - c;
                return Math.abs(h * a.x - g * a.y - e * d + f * c) / Math.sqrt(g * g + h * h)
            }
            for (var d = a.length, g = c(f, a[d - 1], a[0]), m = 0; m < d - 1; m++) {
                var e = c(f, a[m], a[m + 1]);
                e < g && (g = e)
            }
            return g
        };
        this.Ub = function(a, f, c) {
            var d;
            c = {
                x: f.x + Math.cos(c),
                y: f.y - Math.sin(c)
            };
            var g = [],
                m = [],
                e = a.length;
            for (d = 0; d < e; d++) {
                var b = T.Hg(a[d], a[(d + 1) % e], f, c);
                if (b && (g.push(b), 2 == m.push(d))) break
            }
            if (2 ==
                g.length) {
                var b = g[0],
                    g = g[1],
                    k = m[0],
                    m = m[1],
                    n = [g, b];
                for (d = k + 1; d <= m; d++) n.push(a[d]);
                for (d = [b, g]; m != k;) m = (m + 1) % e, d.push(a[m]);
                a = [n, d];
                e = c.x - f.x;
                d = g.x - b.x;
                0 === e && (e = c.y - f.y, d = g.y - b.y);
                (0 > e ? -1 : 0 < e ? 1 : 0) !== (0 > d ? -1 : 0 < d ? 1 : 0) && a.reverse();
                return a
            }
        };
        this.Aa = function(a, f, c, d) {
            d.x = a * (f.x - c.x) + c.x;
            d.y = a * (f.y - c.y) + c.y;
            return d
        };
        this.d = a;
        this.re = function(a, f, c) {
            if (H.Qc(f)) f = 2 * Math.PI * f / 360;
            else {
                var d = T.q(a, {});
                switch (f) {
                    case "random":
                        f = Math.random() * Math.PI * 2;
                        break;
                    case "top":
                        f = Math.atan2(-d.i, 0);
                        break;
                    case "bottom":
                        f =
                            Math.atan2(d.i, 0);
                        break;
                    case "topleft":
                        f = Math.atan2(-d.i, -d.f);
                        break;
                    default:
                        f = Math.atan2(d.i, d.f)
                }
            }
            d = T.k(a, {});
            return T.Aa(c, l(a, d, {
                x: d.x + Math.cos(f),
                y: d.y + Math.sin(f)
            }), d, {})
        };
        return this
    };
    var za = new function() {
        function a(a, c) {
            this.face = a;
            this.hd = c;
            this.nc = this.bd = null
        }

        function l(a, c, f) {
            this.ma = [a, c, f];
            this.C = Array(3);
            var e = c.y - a.y,
                b = f.z - a.z,
                k = c.x - a.x;
            c = c.z - a.z;
            var h = f.x - a.x;
            a = f.y - a.y;
            this.Na = {
                x: e * b - c * a,
                y: c * h - k * b,
                z: k * a - e * h
            };
            this.ib = [];
            this.qd = this.visible = !1
        }
        this.S = function(d) {
            function f(b, c, d) {
                var k, g, h = b.ma[0],
                    q = b.Na,
                    m = q.x,
                    s = q.y,
                    q = q.z,
                    l = Array(n);
                c = c.ib;
                k = c.length;
                for (e = 0; e < k; e++) g = c[e].hd, l[g.index] = !0, 0 > m * (g.x - h.x) + s * (g.y - h.y) + q * (g.z - h.z) && a.d(b, g);
                c = d.ib;
                k = c.length;
                for (e = 0; e < k; e++) g =
                    c[e].hd, !0 !== l[g.index] && 0 > m * (g.x - h.x) + s * (g.y - h.y) + q * (g.z - h.z) && a.d(b, g)
            }
            var m, e, b, k, n = d.length;
            for (m = 0; m < n; m++) d[m].index = m, d[m].Yb = null;
            var r = [],
                p;
            if (0 < (p = function() {
                function b(a, c, d, e) {
                    var f = (c.y - a.y) * (d.z - a.z) - (c.z - a.z) * (d.y - a.y),
                        g = (c.z - a.z) * (d.x - a.x) - (c.x - a.x) * (d.z - a.z),
                        k = (c.x - a.x) * (d.y - a.y) - (c.y - a.y) * (d.x - a.x);
                    return f * e.x + g * e.y + k * e.z > f * a.x + g * a.y + k * a.z ? new l(a, c, d) : new l(d, c, a)
                }

                function c(a, b, d, e) {
                    function f(a, b, c) {
                        a = a.ma;
                        b = a[0] == b ? 0 : a[1] == b ? 1 : 2;
                        return a[(b + 1) % 3] != c ? (b + 2) % 3 : b
                    }
                    b.C[f(b, d, e)] =
                        a;
                    a.C[f(a, e, d)] = b
                }
                if (4 > n) return 0;
                var e = d[0],
                    f = d[1],
                    g = d[2],
                    k = d[3],
                    h = b(e, f, g, k),
                    q = b(e, g, k, f),
                    m = b(e, f, k, g),
                    s = b(f, g, k, e);
                c(h, q, g, e);
                c(h, m, e, f);
                c(h, s, f, g);
                c(q, m, k, e);
                c(q, s, g, k);
                c(m, s, k, f);
                r.push(h, q, m, s);
                for (e = 4; e < n; e++)
                    for (f = d[e], g = 0; 4 > g; g++) k = r[g], h = k.ma[0], q = k.Na, 0 > q.x * (f.x - h.x) + q.y * (f.y - h.y) + q.z * (f.z - h.z) && a.d(k, f);
                return 4
            }())) {
                for (; p < n;) {
                    b = d[p];
                    if (b.Yb) {
                        for (m = b.Yb; null !== m;) m.face.visible = !0, m = m.nc;
                        var q, s;
                        m = 0;
                        a: for (; m < r.length; m++)
                            if (k = r[m], !1 === k.visible) {
                                var w = k.C;
                                for (e = 0; 3 > e; e++)
                                    if (!0 === w[e].visible) {
                                        q =
                                            k;
                                        s = e;
                                        break a
                                    }
                            } k = [];
                        var w = [],
                            u = q,
                            x = s;
                        do
                            if (k.push(u), w.push(x), x = (x + 1) % 3, !1 === u.C[x].visible) {
                                do
                                    for (m = u.ma[x], u = u.C[x], e = 0; 3 > e; e++) u.ma[e] == m && (x = e); while (!1 === u.C[x].visible && (u !== q || x !== s))
                            } while (u !== q || x !== s);
                        var y = null,
                            B = null;
                        for (m = 0; m < k.length; m++) {
                            var u = k[m],
                                x = w[m],
                                A = u.C[x],
                                z = u.ma[(x + 1) % 3],
                                J = u.ma[x],
                                L = z.y - b.y,
                                P = J.z - b.z,
                                U = z.x - b.x,
                                Q = z.z - b.z,
                                E = J.x - b.x,
                                V = J.y - b.y,
                                N;
                            0 < c.length ? (N = c.pop(), N.ma[0] = b, N.ma[1] = z, N.ma[2] = J, N.Na.x = L * P - Q * V, N.Na.y = Q * E - U * P, N.Na.z = U * V - L * E, N.ib.length = 0, N.visible = !1, N.qd = !0) :
                                N = {
                                    ma: [b, z, J],
                                    C: Array(3),
                                    Na: {
                                        x: L * P - Q * V,
                                        y: Q * E - U * P,
                                        z: U * V - L * E
                                    },
                                    ib: [],
                                    visible: !1
                                };
                            r.push(N);
                            u.C[x] = N;
                            N.C[1] = u;
                            null !== B && (B.C[0] = N, N.C[2] = B);
                            B = N;
                            null === y && (y = N);
                            f(N, u, A)
                        }
                        B.C[0] = y;
                        y.C[2] = B;
                        m = [];
                        for (e = 0; e < r.length; e++)
                            if (k = r[e], !0 === k.visible) {
                                w = k.ib;
                                u = w.length;
                                for (b = 0; b < u; b++) x = w[b], y = x.bd, B = x.nc, null !== y && (y.nc = B), null !== B && (B.bd = y), null === y && (x.hd.Yb = B), h.push(x);
                                k.qd && c.push(k)
                            } else m.push(k);
                        r = m
                    }
                    p++
                }
                for (m = 0; m < r.length; m++) k = r[m], k.qd && c.push(k)
            }
            return {
                Ke: r
            }
        };
        a.d = function(c, f) {
            var m;
            0 < h.length ? (m = h.pop(),
                m.face = c, m.hd = f, m.nc = null, m.bd = null) : m = new a(c, f);
            c.ib.push(m);
            var e = f.Yb;
            null !== e && (e.bd = m);
            m.nc = e;
            f.Yb = m
        };
        for (var h = Array(2E3), f = 0; f < h.length; f++) h[f] = new a(null, null);
        for (var c = Array(1E3), f = 0; f < c.length; f++) c[f] = {
            ma: Array(3),
            C: Array(3),
            Na: {
                x: 0,
                y: 0,
                z: 0
            },
            ib: [],
            visible: !1
        }
    };
    var Aa = new function() {
        function a(a, f, c, d, g, m, e, b) {
            var k = (a - c) * (m - b) - (f - d) * (g - e);
            return Math.abs(k) < l ? void 0 : {
                x: ((a * d - f * c) * (g - e) - (a - c) * (g * b - m * e)) / k,
                y: ((a * d - f * c) * (m - b) - (f - d) * (g * b - m * e)) / k
            }
        }
        var l = 1E-12;
        this.bb = function(h, f) {
            for (var c = h[0], d = c.x, g = c.y, m = c.x, e = c.y, b = h.length - 1; 0 < b; b--) c = h[b], d = Math.min(d, c.x), g = Math.min(g, c.y), m = Math.max(m, c.x), e = Math.max(e, c.y);
            if (m - d < 3 * f || e - g < 3 * f) c = void 0;
            else {
                a: {
                    c = !0;void 0 == c && (c = !1);d = [];g = h.length;
                    for (m = 0; m <= g; m++) {
                        var e = h[m % g],
                            b = h[(m + 1) % g],
                            k = h[(m + 2) % g],
                            n, r, p;
                        n = b.x -
                            e.x;
                        r = b.y - e.y;
                        p = Math.sqrt(n * n + r * r);
                        var q = f * n / p,
                            s = f * r / p;
                        n = k.x - b.x;
                        r = k.y - b.y;
                        p = Math.sqrt(n * n + r * r);
                        n = f * n / p;
                        r = f * r / p;
                        if (e = a(e.x - s, e.y + q, b.x - s, b.y + q, b.x - r, b.y + n, k.x - r, k.y + n))
                            if (d.push(e), k = d.length, c && 3 <= k && (e = d[k - 3], b = d[k - 2], k = d[k - 1], 0 > (b.x - e.x) * (k.y - e.y) - (k.x - e.x) * (b.y - e.y))) {
                                c = void 0;
                                break a
                            }
                    }
                    d.shift();c = 3 > d.length ? void 0 : d
                }
                if (!c) a: {
                    d = h.slice(0);
                    for (c = 0; c < h.length; c++) {
                        m = h[c % h.length];
                        b = h[(c + 1) % h.length];
                        k = b.x - m.x;
                        g = b.y - m.y;
                        e = Math.sqrt(k * k + g * g);
                        k = f * k / e;
                        e = f * g / e;
                        g = m.x - e;
                        m = m.y + k;
                        e = b.x - e;
                        b = b.y + k;
                        if (0 != d.length) {
                            s =
                                g - e;
                            r = m - b;
                            k = [];
                            n = p = !0;
                            q = void 0;
                            for (q = 0; q < d.length; q++) {
                                var w = s * (m - d[q].y) - (g - d[q].x) * r;
                                w <= l && w >= -l && (w = 0);
                                k.push(w);
                                0 < w && (p = !1);
                                0 > w && (n = !1)
                            }
                            if (p) d = [];
                            else if (!n) {
                                s = [];
                                for (q = 0; q < d.length; q++) r = (q + 1) % d.length, p = k[q], n = k[r], 0 <= p && s.push(d[q]), (0 < p && 0 > n || 0 > p && 0 < n) && s.push(a(d[q].x, d[q].y, d[r].x, d[r].y, g, m, e, b));
                                d = s
                            }
                        }
                        if (3 > d.length) {
                            c = void 0;
                            break a
                        }
                    }
                    c = d
                }
            }
            return c
        };
        return this
    };
    var Ba = new function() {
        function a(a) {
            for (var f = a[0].x, c = a[0].y, d = f, g = c, m = 1; m < a.length; m++) var e = a[m],
                f = Math.min(f, e.x),
                c = Math.min(c, e.y),
                d = Math.max(d, e.x),
                g = Math.max(g, e.y);
            a = d - f;
            g = g - c;
            return [{
                x: f + 2 * a,
                y: c + 2 * g,
                f: 0
            }, {
                x: f + 2 * a,
                y: c - 2 * g,
                f: 0
            }, {
                x: f - 2 * a,
                y: c + 2 * g,
                f: 0
            }]
        }
        var l = 1E-12;
        this.S = function(h, f) {
            function c() {
                for (b = 0; b < p.length; b++) {
                    var a = p[b],
                        c = a.ma,
                        d = c[0],
                        e = c[1],
                        f = c[2],
                        c = d.x,
                        k = d.y,
                        d = d.z,
                        g = e.x,
                        h = e.y,
                        e = e.z,
                        q = f.x,
                        m = f.y,
                        f = f.z,
                        s = c * (h - m) + g * (m - k) + q * (k - h);
                    a.ha = {
                        x: -(k * (e - f) + h * (f - d) + m * (d - e)) / s / 2,
                        y: -(d * (g - q) + e * (q -
                            c) + f * (c - g)) / s / 2
                    }
                }
            }

            function d(a) {
                for (b = 0; b < p.length; b++) {
                    var c = p[b];
                    c.sb = !T.fb(a, c.ha)
                }
            }

            function g(a, b) {
                var c = Array(b.length),
                    d;
                for (d = 0; d < c.length; d++) c[d] = [];
                for (d = 0; d < a.length; d++) {
                    var e = a[d];
                    if (!(0 > e.Na.z))
                        for (var f = e.C, k = 0; k < f.length; k++) {
                            var g = f[k];
                            if (!(0 > g.Na.z)) {
                                var h = e.ma,
                                    q = h[(k + 1) % 3].index,
                                    h = h[k].index;
                                2 < q && c[q - 3].push([e, g, 2 < h ? b[h - 3] : null])
                            }
                        }
                }
                return c
            }

            function m(a) {
                var b = [a[0]],
                    c = a[0][0],
                    d = a[0][1],
                    e = a.length,
                    f = 1;
                a: for (; f < e; f++)
                    for (var k = 1; k < e; k++) {
                        var g = a[k];
                        if (null !== g) {
                            if (g[1] === c)
                                if (b.unshift(g),
                                    c = g[0], a[k] = null, b.length === e) break a;
                                else continue;
                            if (g[0] === d && (b.push(g), d = g[1], a[k] = null, b.length === e)) break a
                        }
                    }
                b[0][0] != b[e - 1][1] && b.push([b[e - 1][1], b[0][0]]);
                return b
            }

            function e(a, b, c, d) {
                var e = [],
                    f = [],
                    k = c.length,
                    g, h = b.length,
                    q = 0,
                    m = -1,
                    s = -1,
                    n = -1,
                    p = null,
                    w = d;
                for (d = 0; d < k; d++) {
                    var r = (w + 1) % k,
                        u = c[w][0],
                        D = c[r][0];
                    if (T.d(u.ha, D.ha) > l)
                        if (u.sb && D.sb) {
                            var K = [],
                                O = [];
                            for (g = 0; g < h; g++) {
                                m = (q + 1) % h;
                                if (p = T.za(b[q], b[m], u.ha, D.ha, !1))
                                    if (O.push(q), 2 === K.push(p)) break;
                                q = m
                            }
                            if (2 === K.length) {
                                m = K[1];
                                p = T.d(u.ha, K[0]);
                                m =
                                    T.d(u.ha, m);
                                u = p < m ? 0 : 1;
                                p = p < m ? 1 : 0;
                                m = O[u]; - 1 === s && (s = m);
                                if (-1 !== n)
                                    for (; m != n;) n = (n + 1) % h, e.push(b[n]), f.push(null);
                                e.push(K[u], K[p]);
                                f.push(c[w][2], null);
                                n = O[p]
                            }
                        } else if (u.sb && !D.sb)
                            for (g = 0; g < h; g++) {
                                m = (q + 1) % h;
                                if (p = T.za(b[q], b[m], u.ha, D.ha, !1)) {
                                    if (-1 !== n)
                                        for (K = n; q != K;) K = (K + 1) % h, e.push(b[K]), f.push(null);
                                    e.push(p);
                                    f.push(c[w][2]); - 1 === s && (s = q);
                                    break
                                }
                                q = m
                            } else if (!u.sb && D.sb)
                            for (g = 0; g < h; g++) {
                                m = (q + 1) % h;
                                if (p = T.za(b[q], b[m], u.ha, D.ha, !1)) {
                                    e.push(u.ha, p);
                                    f.push(c[w][2], null);
                                    n = q;
                                    break
                                }
                                q = m
                            } else e.push(u.ha), f.push(c[w][2]);
                    w = r
                }
                if (0 == e.length) f = e = null;
                else if (-1 !== n)
                    for (; s != n;) n = (n + 1) % h, e.push(b[n]), f.push(null);
                a.n = e;
                a.C = f
            }
            if (1 === h.length) h[0].n = f.slice(0), h[0].C = [];
            else {
                var b, k;
                k = a(f);
                var n = [],
                    r;
                for (b = 0; b < k.length; b++) r = k[b], n.push({
                    x: r.x,
                    y: r.y,
                    z: r.x * r.x + r.y * r.y - r.f
                });
                for (b = 0; b < h.length; b++) r = h[b], r.n = null, n.push({
                    x: r.x,
                    y: r.y,
                    z: r.x * r.x + r.y * r.y - r.f
                });
                var p = za.S(n).Ke;
                c();
                d(f);
                n = g(p, h);
                for (b = 0; b < h.length; b++)
                    if (r = n[b], 0 !== r.length) {
                        var q = h[b];
                        r = m(r);
                        var s = r.length,
                            w = -1;
                        for (k = 0; k < s; k++) r[k][0].sb && (w = k);
                        if (0 <= w) e(q, f,
                            r, w);
                        else {
                            var w = [],
                                u = [];
                            for (k = 0; k < s; k++) T.d(r[k][0].ha, r[(k + 1) % s][0].ha) > l && (w.push(r[k][0].ha), u.push(r[k][2]));
                            q.n = w;
                            q.C = u
                        }
                        q.n && 3 > q.n.length && (q.n = null, q.C = null)
                    }
            }
        };
        this.zc = function(h, f) {
            var c, d, g = !1,
                m = h.length;
            for (d = 0; d < m; d++) c = h[d], null === c.n && (g = !0), c.ne = c.f;
            if (g) {
                var g = a(f),
                    e = [],
                    b, k;
                d = h.length;
                for (c = 0; c < g.length; c++) b = g[c], e.push({
                    x: b.x,
                    y: b.y,
                    z: b.x * b.x + b.y * b.y
                });
                for (c = 0; c < d; c++) b = h[c], e.push({
                    x: b.x,
                    y: b.y,
                    z: b.x * b.x + b.y * b.y
                });
                b = za.S(e).Ke;
                g = Array(d);
                for (c = 0; c < d; c++) g[c] = {};
                e = b.length;
                for (c = 0; c <
                e; c++)
                    if (k = b[c], 0 < k.Na.z) {
                        var n = k.ma,
                            l = n.length;
                        for (k = 0; k < l - 1; k++) {
                            var p = n[k].index - 3,
                                q = n[k + 1].index - 3;
                            0 <= p && 0 <= q && (g[p][q] = !0, g[q][p] = !0)
                        }
                        k = n[0].index - 3;
                        0 <= q && 0 <= k && (g[q][k] = !0, g[k][q] = !0)
                    } for (c = 0; c < d; c++) {
                    k = g[c];
                    b = h[c];
                    var q = Number.MAX_VALUE,
                        e = null,
                        s;
                    for (s in k) k = h[s], n = T.d(b, k), q > n && (q = n, e = k);
                    b.Rj = e;
                    b.vf = Math.sqrt(q)
                }
                for (d = 0; d < m; d++) c = h[d], s = Math.min(Math.sqrt(c.f), 0.95 * c.vf), c.f = s * s;
                this.S(h, f);
                for (d = 0; d < m; d++) c = h[d], c.ne !== c.f && 0 < c.uc && (s = Math.min(c.uc, c.ne - c.f), c.f += s, c.uc -= s)
            }
        }
    };
    var Ca = new function() {
        this.Bg = function(a) {
            a = a.e;
            for (var l = 0, h = a.length, f = 0; f < h; f++) {
                var c = a[f];
                if (c.n) {
                    var d = c.x,
                        g = c.y;
                    T.k(c.n, c);
                    d = d - c.x;
                    c = g - c.y;
                    c = (0 < d ? d : -d) + (0 < c ? c : -c);
                    l < c && (l = c)
                }
            }
            return l
        };
        this.ya = function(a, l) {
            var h = a.e,
                f, c, d, g;
            switch (l) {
                case "random":
                    return a.e[Math.floor(h.length * Math.random())];
                case "topleft":
                    f = h[0];
                    var m = f.x + f.y;
                    for (g = 1; g < h.length; g++) c = h[g], d = c.x + c.y, d < m && (m = d, f = c);
                    return f;
                case "bottomright":
                    f = h[0];
                    m = f.x + f.y;
                    for (g = 1; g < h.length; g++) c = h[g], d = c.x + c.y, d > m && (m = d, f = c);
                    return f;
                default:
                    f = h[0];
                    d = c = T.d(a, f);
                    for (g = h.length - 1; 1 <= g; g--) m = h[g], c = T.d(a, m), c < d && (d = c, f = m);
                    return f
            }
        };
        this.Ja = function(a, l, h) {
            var f = a.e;
            if (f[0].C) {
                var c = f.length;
                for (a = 0; a < c; a++) f[a].jd = !1, f[a].gc = 0;
                var c = [],
                    d, g;
                g = d = 0;
                c[d++] = l || f[0];
                for (l = l.gc = 0; g < d;)
                    if (f = c[g++], !f.jd && f.C) {
                        h(f, l++, f.gc);
                        f.jd = !0;
                        var m = f.C,
                            e = m.length;
                        for (a = 0; a < e; a++) {
                            var b = m[a];
                            b && !0 !== b.jd && (0 === b.gc && (b.gc = f.gc + 1), c[d++] = b)
                        }
                    }
            } else
                for (a = 0; a < f.length; a++) h(f[a], a, 1)
        }
    };
    var M = function() {
        function a(a, e, k, q, s, p, w, Q) {
            var E = H.extend({}, m, a);
            1 > a.lineHeight && (a.lineHeight = 1);
            a = E.fontFamily;
            var V = E.fontStyle + " " + E.fontVariant + " " + E.fontWeight,
                N = E.qb,
                t = E.Xc,
                F = V + " " + a;
            E.Oe = F;
            var G = {
                la: !1,
                kc: 0,
                fontSize: 0
            };
            e.save();
            e.font = V + " " + y + "px " + a;
            e.textBaseline = "middle";
            e.textAlign = "center";
            l(e, E);
            k = k.trim();
            u.text = k;
            c(q, s, p, x);
            if (/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/.test(k)) f(u), h(e, u, F), d(E, u, x, t, N, !0, G);
            else if (h(e, u, F), d(E, u, x, t, N, !1,
                G), !G.la && (w && (f(u), h(e, u, F)), Q || w)) Q && (G.cc = !0), d(E, u, x, t, t, !0, G);
            if (G.la) {
                var I = "",
                    D = 0,
                    K = Number.MAX_VALUE,
                    O = Number.MIN_VALUE;
                g(E, u, G.kc, G.fontSize, x, G.cc, function(a, c) {
                    0 < I.length && c === b && (I += b);
                    I += a
                }, function(a, b, c, d, f) {
                    d === r && (I += n);
                    e.save();
                    e.translate(p.x, b);
                    a = G.fontSize / y;
                    e.scale(a, a);
                    e.fillText(I, 0, 0);
                    e.restore();
                    I = c;
                    D < f && (D = f);
                    K > b && (K = b);
                    O < b && (O = b)
                });
                G.da = {
                    x: p.x - D / 2,
                    y: K - G.fontSize / 2,
                    f: D,
                    i: O - K + G.fontSize
                };
                e.restore()
            } else e.clear && e.clear();
            return G
        }

        function l(a, c) {
            var d = c.Oe,
                f = e[d];
            void 0 ===
            f && (f = {}, e[d] = f);
            f[b] = a.measureText(b).width;
            f[k] = a.measureText(k).width
        }

        function h(a, b, c) {
            var d, f = b.text.split(/(\n|[ \f\r\t\v\u2028\u2029]+|\u00ad+|\u200b+)/),
                k = [],
                g = [],
                h = f.length >>> 1;
            for (d = 0; d < h; d++) k.push(f[2 * d]), g.push(f[2 * d + 1]);
            2 * d < f.length && (k.push(f[2 * d]), g.push(void 0));
            c = e[c];
            for (d = 0; d < k.length; d++) f = k[d], h = c[f], void 0 === h && (h = a.measureText(f).width, c[f] = h);
            b.kd = k;
            b.jg = g
        }

        function f(a) {
            for (var c = a.text.split(/\s+/), d = [], e = {
                ".": !0,
                ",": !0,
                ";": !0,
                "?": !0,
                "!": !0,
                ":": !0,
                "\u3002": !0
            }, f = 0; f < c.length; f++) {
                var k =
                    c[f];
                if (3 < k.length) {
                    for (var g = "", g = g + k.charAt(0), g = g + k.charAt(1), h = 2; h < k.length - 2; h++) {
                        var q = k.charAt(h);
                        e[q] || (g += p);
                        g += q
                    }
                    g += p;
                    g += k.charAt(k.length - 2);
                    g += k.charAt(k.length - 1);
                    d.push(g)
                } else d.push(k)
            }
            a.text = d.join(b)
        }

        function c(a, b, c, d) {
            for (var e, f, g = 0; g < a.length; g++) a[g].y === b.y && (void 0 === e ? e = g : f = g);
            void 0 === f && (f = e);
            e !== f && a[f].x < a[e].x && (g = e, e = f, f = g);
            d.n = a;
            d.q = b;
            d.sd = c;
            d.tf = e;
            d.uf = f
        }

        function d(a, b, c, d, e, f, k) {
            var h = a.lineHeight,
                q = Math.max(a.cb, 0.001),
                m = a.rb,
                n = b.kd,
                s = c.sd,
                p = c.q,
                l = void 0,
                w = void 0;
            switch (a.verticalAlign) {
                case "top":
                    s = p.y + p.i - s.y;
                    break;
                case "bottom":
                    s = s.y - p.y;
                    break;
                default:
                    s = 2 * Math.min(s.y - p.y, p.y + p.i - s.y)
            }
            m = Math.min(s, m * c.q.i);
            if (0 >= m) k.la = !1;
            else {
                s = d;
                e = Math.min(e, m);
                p = Math.min(1, m / Math.max(20, b.kd.length));
                do {
                    var r = (s + e) / 2,
                        x = Math.min(n.length, Math.floor((m + r * (h - 1 - 2 * q)) / (r * h))),
                        u = void 0;
                    if (0 < x) {
                        var y = 1,
                            Z = x;
                        do {
                            var S = Math.floor((y + Z) / 2);
                            if (g(a, b, S, r, c, f && r === d && S === x, null, null)) {
                                if (Z = l = u = S, y === Z) break
                            } else if (y = S + 1, y > Z) break
                        } while (1)
                    }
                    void 0 !== u ? s = w = r : e = r
                } while (e - s > p);
                void 0 ===
                w ? (k.la = !1, k.fontSize = 0) : (k.la = !0, k.fontSize = w, k.kc = l, k.cc = f && r === s)
            }
        }

        function g(a, c, d, f, g, h, m, n) {
            var p = a.nb,
                l = f * (a.lineHeight - 1),
                r = a.verticalAlign,
                x = Math.max(a.cb, 0.001);
            a = e[a.Oe];
            var u = c.kd;
            c = c.jg;
            var G = g.n,
                I = g.sd,
                D = g.tf,
                K = g.uf,
                O;
            switch (r) {
                case "top":
                    g = I.y + f / 2 + f * x;
                    O = 1;
                    break;
                case "bottom":
                    g = I.y - (f * d + l * (d - 1)) + f / 2 - f * x;
                    O = -1;
                    break;
                default:
                    g = I.y - (f * (d - 1) / 2 + l * (d - 1) / 2), O = 1
            }
            r = g;
            for (x = 0; x < d; x++) q[2 * x] = g - f / 2, q[2 * x + 1] = g + f / 2, g += O * f, g += O * l;
            for (; s.length < q.length;) s.push(Array(2));
            x = q;
            g = 2 * d;
            O = s;
            for (var R = G.length,
                     Z = D, D = (D - 1 + R) % R, S = K, K = (K + 1) % R, ba = 0; ba < g;) {
                for (var ja = x[ba], ka = G[D]; ka.y < ja;) Z = D, D = (D - 1 + R) % R, ka = G[D];
                for (var ea = G[K]; ea.y < ja;) S = K, K = (K + 1) % R, ea = G[K];
                var la = G[Z],
                    ma = G[S],
                    ea = ma.x + (ea.x - ma.x) * (ja - ma.y) / (ea.y - ma.y);
                O[ba][0] = la.x + (ka.x - la.x) * (ja - la.y) / (ka.y - la.y);
                O[ba][1] = ea;
                ba++
            }
            for (x = 0; x < d; x++) G = 2 * x, g = I.x, O = g - s[G][0], R = s[G][1] - g, O = O < R ? O : R, R = g - s[G + 1][0], G = s[G + 1][1] - g, G = R < G ? R : G, w[x] = 2 * (O < G ? O : G) - p * f;
            Z = a[b] * f / y;
            O = a[k] * f / y;
            p = 0;
            D = w[p];
            I = 0;
            G = void 0;
            for (x = 0; x < u.length; x++) {
                g = u[x];
                S = c[x];
                R = a[g] * f / y;
                if (I + R < D && u.length -
                    x >= d - p && "\n" != G) I += R, " " === S && (I += Z), m && m(g, G);
                else {
                    if (R > D && (p !== d - 1 || !h)) return !1;
                    if (p + 1 >= d) {
                        if (h) {
                            d = D - I - O;
                            if (d > O || R > O) d = Math.floor(g.length * d / R), 0 < d && m && m(g.substring(0, d), G);
                            m && m(k, void 0);
                            n && n(p, r, g, G, I);
                            return !0
                        }
                        return !1
                    }
                    p++;
                    n && n(p, r, g, G, I);
                    r += f;
                    r += l;
                    D = w[p];
                    I = R;
                    " " === S && (I += Z);
                    if (R > D && (p !== d || !h)) return !1
                }
                G = S
            }
            n && n(p, r, void 0, void 0, I);
            return !0
        }
        var m = {
                qb: 72,
                Xc: 0,
                lineHeight: 1.05,
                nb: 1,
                cb: 0.5,
                rb: 0.9,
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "normal",
                fontVariant: "normal",
                verticalAlign: "center"
            },
            e = {},
            b = " ",
            k = "\u2026",
            n = "\u2010",
            r = "\u00ad",
            p = "\u200b",
            q = [],
            s = [],
            w = [],
            u = {
                text: "",
                kd: void 0,
                jg: void 0
            },
            x = {
                n: void 0,
                q: void 0,
                sd: void 0,
                tf: 0,
                uf: 0
            },
            y = 100;
        return {
            Me: a,
            ye: function(b, c, d, e, f, g, k, h, q, m, s, n) {
                var p, l = 0,
                    w = 0;
                d = d.toString().trim();
                !n && q.result && d === q.qg && Math.abs(m - q.ve) / m <= s && (p = q.result, p.la && (l = g.x - q.xg, w = g.y - q.yg, s = q.gd, c.save(), c.translate(l, w), s.Ra(c), c.restore()));
                p || (s = q.gd, s.clear(), p = a(b, s, d, e, f, g, k, h), p.la && s.Ra(c), q.ve = m, q.xg = g.x, q.yg = g.y, q.result = p, q.qg = d);
                return p.la ? {
                    la: !0,
                    kc: p.kc,
                    fontSize: p.fontSize,
                    da: {
                        x: p.da.x + l,
                        y: p.da.y + w,
                        f: p.da.f,
                        i: p.da.i
                    },
                    cc: p.cc
                } : {
                    la: !1
                }
            },
            vi: function() {
                return {
                    ve: 0,
                    xg: 0,
                    yg: 0,
                    result: void 0,
                    gd: new da,
                    qg: void 0
                }
            },
            Da: m
        }
    }();
    var Da = new function() {
        function a(a, c) {
            return function(d, g, m, e) {
                function b(a, d, e, f, g) {
                    if (0 != a.length) {
                        var q = a.shift(),
                            s = h(q),
                            n, p, l, r;
                        if (c(f, g)) {
                            n = d;
                            l = s / f;
                            do {
                                s = q.shift();
                                p = s.vc;
                                r = p / l;
                                p = s;
                                var Q = e,
                                    E = l;
                                p.x = n + r / 2;
                                p.y = Q + E / 2;
                                m && k(s, n, e, r, l);
                                n += r
                            } while (0 < q.length);
                            return b(a, d, e + l, f, g - l)
                        }
                        n = e;
                        r = s / g;
                        do s = q.shift(), p = s.vc, l = p / r, p = s, Q = n, E = l, p.x = d + r / 2, p.y = Q + E / 2, m && k(s, d, n, r, l), n += l; while (0 < q.length);
                        return b(a, d + r, e, f - r, g)
                    }
                }

                function k(a, b, c, d, e) {
                    a.n = [{
                        x: b,
                        y: c
                    }, {
                        x: b + d,
                        y: c
                    }, {
                        x: b + d,
                        y: c + e
                    }, {
                        x: b,
                        y: c + e
                    }]
                }
                var n = g.x,
                    l =
                        g.y,
                    p = g.f;
                g = g.i;
                if (0 != d.length)
                    if (1 == d.length) d[0].x = n + p / 2, d[0].y = l + g / 2, d[0].Bd = 0, m && k(d[0], n, l, p, g);
                    else {
                        d = d.slice(0);
                        for (var q = 0, s = 0; s < d.length; s++) q += d[s].T;
                        q = p * g / q;
                        for (s = 0; s < d.length; s++) d[s].vc = d[s].T * q;
                        e = a(d, p, g, [
                            [d.shift()]
                        ], e);
                        b(e, n, l, p, g)
                    }
            }
        }

        function l(a, c, d, g) {
            function m(a) {
                return Math.max(Math.pow(k * a / b, d), Math.pow(b / (k * a), g))
            }
            var e = h(a),
                b = e * e,
                k = c * c;
            c = m(a[0].vc);
            for (e = 1; e < a.length; e++) c = Math.max(c, m(a[e].vc));
            return c
        }

        function h(a) {
            for (var c = 0, d = 0; d < a.length; d++) c += a[d].vc;
            return c
        }
        this.ue =
            a(function(a, c, d, g, m) {
                m = Math.pow(2, m);
                for (var e = 1 / m, b = c < d; 0 < a.length;) {
                    var k = g[g.length - 1],
                        n = a.shift(),
                        r = b ? c : d,
                        p = b ? m : e,
                        q = b ? e : m,
                        s = l(k, r, p, q);
                    k.push(n);
                    r = l(k, r, p, q);
                    s < r && (k.pop(), g.push([n]), b ? d -= h(k) / c : c -= h(k) / d, b = c < d)
                }
                return g
            }, function(a, c) {
                return a < c
            });
        this.Vb = a(function(a, c, d, g, h) {
            function e(a) {
                if (1 < g.length) {
                    for (var d = g[g.length - 1], e = g[g.length - 2].slice(0), f = 0; f < d.length; f++) e.push(d[f]);
                    l(e, c, b, k) < a && g.splice(-2, 2, e)
                }
            }
            for (var b = Math.pow(2, h), k = 1 / b; 0 < a.length;) {
                d = g[g.length - 1];
                h = l(d, c, b, k);
                if (0 ==
                    a.length) return;
                var n = a.shift();
                d.push(n);
                var r = l(d, c, b, k);
                h < r && (d.pop(), e(h), g.push([n]))
            }
            e(l(g[g.length - 1], c, b, k));
            return g
        }, function() {
            return !0
        })
    };

    function Ea(a) {
        var l = {},
            h = a.Sd,
            f;
        a.c.j("model:loaded", function(a) {
            f = a
        });
        this.H = function() {
            a.c.p("api:initialized", this)
        };
        this.Bc = function(a, d, f, m) {
            this.md(l, d);
            this.nd(l, d);
            this.ld(l, d, !1);
            m && m(l);
            a(h, l, f)
        };
        this.rd = function(a, d, g, h, e, b, k) {
            if (a) {
                for (a = d.length - 1; 0 <= a; a--) {
                    var n = d[a],
                        l = H.extend({
                            group: n.group
                        }, e);
                    l[g] = h(n);
                    b(l)
                }
                0 < d.length && k(H.extend({
                    groups: $.Kc(f, h).map(function(a) {
                        return a.group
                    })
                }, e))
            }
        };
        this.nd = function(a, d) {
            a.selected = d.selected;
            a.hovered = d.Cb;
            a.open = d.open;
            a.openness = d.Jb;
            a.exposed =
                d.U;
            a.exposure = d.ka;
            a.transitionProgress = d.ua;
            a.revealed = !d.ba.Ma();
            a.browseable = d.Oa ? d.M : void 0;
            a.visible = d.ea;
            a.labelDrawn = d.ra && d.ra.la;
            return a
        };
        this.md = function(a, d) {
            var f = d.parent;
            a.group = d.group;
            a.parent = f && f.group;
            a.weightNormalized = d.vg;
            a.level = d.R - 1;
            a.siblingCount = f && f.e.length;
            a.hasChildren = !d.empty();
            a.index = d.index;
            a.indexByWeight = d.Bd;
            a.description = d.description;
            a.attribution = d.na;
            return a
        };
        this.ld = function(a, d, f) {
            a.polygonCenterX = d.K.x;
            a.polygonCenterY = d.K.y;
            a.polygonArea = d.K.ja;
            a.boxLeft =
                d.q.x;
            a.boxTop = d.q.y;
            a.boxWidth = d.q.f;
            a.boxHeight = d.q.i;
            if (d.ra && d.ra.la) {
                var h = d.ra.da;
                a.labelBoxLeft = h.x;
                a.labelBoxTop = h.y;
                a.labelBoxWidth = h.f;
                a.labelBoxHeight = h.i;
                a.labelFontSize = d.ra.fontSize
            }
            f && d.aa && (a.polygon = d.aa.map(function(a) {
                return {
                    x: a.x,
                    y: a.y
                }
            }), a.neighbors = d.C && d.C.map(function(a) {
                return a && a.group
            }));
            return a
        }
    };
    var na = new function() {
        var a = window.console;
        this.Xa = function(a) {
            throw "FoamTree: " + a;
        };
        this.info = function(l) {
            a.info("FoamTree: " + l)
        };
        this.warn = function(l) {
            a.warn("FoamTree: " + l)
        }
    };

    function Fa(a) {
        function l(b, d) {
            b.e = [];
            b.Pa = !0;
            var e = c(d),
                f = 0;
            if ("flattened" == a.$a && 0 < d.length && 0 < b.R) {
                var g = d.reduce(function(a, b) {
                        return a + H.B(b.weight, 1)
                    }, 0),
                    k = h(b.group, !1);
                k.description = !0;
                k.T = g * a.ac;
                k.index = f++;
                k.parent = b;
                k.R = b.R + 1;
                k.id = k.id + "_d";
                b.e.push(k)
            }
            for (g = 0; g < d.length; g++) {
                var q = d[g],
                    k = H.B(q.weight, 1);
                if (0 >= k)
                    if (a.rj) k = 0.9 * e;
                    else continue;
                q = h(q, !0);
                q.T = k;
                q.index = f;
                q.parent = b;
                q.R = b.R + 1;
                b.e.push(q);
                f++
            }
        }

        function h(a, b) {
            var c = new Ga;
            f(a);
            c.id = a.__id;
            c.group = a;
            b && (n[a.__id] = c);
            return c
        }

        function f(a) {
            H.Q(a, "__id") || (Object.defineProperty(a, "__id", {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: k
            }), k++)
        }

        function c(a) {
            for (var b = Number.MAX_VALUE, c = 0; c < a.length; c++) {
                var d = a[c].weight;
                0 < d && b > d && (b = d)
            }
            b === Number.MAX_VALUE && (b = 1);
            return b
        }

        function d(a) {
            if (!a.empty()) {
                a = a.e;
                var b = 0,
                    c;
                for (c = a.length - 1; 0 <= c; c--) {
                    var d = a[c].T;
                    b < d && (b = d)
                }
                for (c = a.length - 1; 0 <= c; c--) d = a[c], d.vg = d.T / b
            }
        }

        function g(a) {
            if (!a.empty()) {
                a = a.e.slice(0).sort(function(a, b) {
                    return a.T < b.T ? 1 : a.T > b.T ? -1 : a.index - b.index
                });
                for (var b = 0; b < a.length; b++) a[b].Bd = b
            }
        }

        function m() {
            for (var c = b.e.reduce(function(a, b) {
                return a + b.T
            }, 0), d = 0; d < b.e.length; d++) {
                var e = b.e[d];
                e.na && (e.T = Math.max(0.025, a.Sg) * c)
            }
        }
        var e = this,
            b = new Ga,
            k, n, r, p, q;
        this.H = function() {
            return b
        };
        this.S = function(b) {
            var c = b.group.groups,
                e = a.ni;
            return !b.e && !b.description && c && 0 < c.length && q + c.length <= e ? (q += c.length, l(b, c), d(b), g(b), !0) : !1
        };
        this.Y = function(a) {
            function c(a) {
                var b = a.groups;
                if (b)
                    for (var d = 0; d < b.length; d++) {
                        var e = b[d];
                        f(e);
                        var g = e.__id;
                        n[g] = null;
                        p[g] = a;
                        g = e.id;
                        H.V(g) || (r[g] = e);
                        c(e)
                    }
            }

            function e(a, b) {
                if (!a) return b;
                var c = Math.max(b, a.__id || 0),
                    d = a.groups;
                if (d && 0 < d.length)
                    for (var f = d.length - 1; 0 <= f; f--) c = e(d[f], c);
                return c
            }
            b.group = a;
            b.Ba = !1;
            b.M = !1;
            b.Oa = !1;
            b.open = !0;
            b.Jb = 1;
            k = e(a, 0) + 1;
            n = {};
            r = {};
            p = {};
            q = 0;
            a && (f(a), n[a.__id] = b, H.V(a.id) || (r[a.id] = a), c(a));
            l(b, a && a.groups || []);
            (function(a) {
                if (!a.empty()) {
                    var b = h({
                        attribution: !0
                    });
                    b.index = a.e.length;
                    b.parent = a;
                    b.R = a.R + 1;
                    b.na = !0;
                    a.e.push(b);
                    a.e.pop();
                }
            })(b);
            d(b);
            m();
            g(b)
        };
        this.update = function() {
            $.Ea(b, function(a) {
                if (!a.empty()) {
                    a =
                        a.e;
                    for (var b = c(a.map(function(a) {
                        return a.group
                    })), d = 0; d < a.length; d++) {
                        var e = a[d];
                        e.T = 0 < e.group.weight ? e.group.weight : 0.9 * b
                    }
                }
            });
            d(b);
            m();
            g(b)
        };
        this.A = function(a) {
            return function() {
                if (H.V(a) || H.of(a)) return [];
                if (Array.isArray(a)) return a.map(e.d, e);
                if (H.hc(a)) {
                    if (H.Q(a, "__id")) return [e.d(a)];
                    if (H.Q(a, "all")) {
                        var c = [];
                        $.F(b, function(a) {
                            c.push(a)
                        });
                        return c
                    }
                    if (H.Q(a, "groups")) return e.A(a.groups)
                }
                return [e.d(a)]
            }().filter(function(a) {
                return void 0 !== a
            })
        };
        this.d = function(a) {
            if (H.hc(a) && H.Q(a, "__id")) {
                if (a =
                    a.__id, H.Q(n, a)) {
                    if (null === n[a]) {
                        for (var b = p[a], c = []; b;) {
                            b = b.__id;
                            c.push(b);
                            if (n[b]) break;
                            b = p[b]
                        }
                        for (b = c.length - 1; 0 <= b; b--) this.S(n[c[b]])
                    }
                    return n[a]
                }
            } else if (H.Q(r, a)) return this.d(r[a])
        };
        this.k = function(a, b, c) {
            return {
                e: e.A(a),
                Ia: H.B(a && a[b], !0),
                Ga: H.B(a && a.keepPrevious, c)
            }
        }
    }

    function Ha(a, l, h) {
        var f = {};
        l.Ga && $.F(a, function(a) {
            h(a) && (f[a.id] = a)
        });
        a = l.e;
        l = l.Ia;
        for (var c = a.length - 1; 0 <= c; c--) {
            var d = a[c];
            f[d.id] = l ? d : void 0
        }
        var g = [];
        H.Fa(f, function(a) {
            void 0 !== a && g.push(a)
        });
        return g
    };

    function Ia(a) {
        function l(a, b) {
            var c = a.ka;
            b.opacity = 1;
            b.Ka = 1;
            b.va = 0 > c ? 1 - p.ci / 100 * c : 1;
            b.wa = 0 > c ? 1 - p.di / 100 * c : 1;
            b.fa = 0 > c ? 1 + 0.5 * c : 1
        }

        function h(a) {
            a = a.ka;
            return Math.max(0.001, 0 === a ? 1 : 1 + a * (p.Ta - 1))
        }

        function f(a, b) {
            for (var c = a.reduce(function(a, b) {
                a[b.id] = b;
                return a
            }, {}), d = a.length - 1; 0 <= d; d--) $.F(a[d], function(a) {
                c[a.id] = void 0
            });
            var e = [];
            H.Fa(c, function(a) {
                a && $.He(a, function(a) {
                    a.open || e.push(a)
                })
            });
            var f = [];
            H.Fa(c, function(a) {
                a && a.open && f.push(a)
            });
            d = [];
            0 !== e.length && d.push(y.Ib({
                e: e,
                Ia: !0,
                Ga: !0
            }, b, !0));
            return pa(d)
        }

        function c(c, f, h, n) {
            var l = m();
            if (0 === c.length && !l) return (new X).J().L();
            var s = c.reduce(function(a, b) {
                    a[b.id] = !0;
                    return a
                }, {}),
                r = [];
            c = [];
            if (B.reduce(function(a, b) {
                return a || s[b.id] && (!b.U || 1 !== b.ka) || !s[b.id] && !b.parent.U && (b.U || -1 !== b.ka)
            }, !1)) {
                var y = [],
                    z = {};
                B.forEach(function(a) {
                    s[a.id] && (a.U || r.push(a), a.U = !0, $.Ea(a, function(a) {
                        y.push(b(a, 1));
                        z[a.id] = !0
                    }))
                });
                0 < y.length ? ($.F(q, function(a) {
                    s[a.id] || (a.U && r.push(a), a.U = !1);
                    z[a.id] || y.push(b(a, -1))
                }), c.push(x.D.m({}).Wa(y).call(k).ab()),
                    d(s), c.push(g(l)), h && (u.qc(A, p.Oc, p.Sa, Y.pa(p.ec)), u.Ob())) : (c.push(e(h)), f && $.F(q, function(a) {
                    a.U && r.push(a)
                }))
            }
            return pa(c).N(function() {
                w.rd(f, r, "exposed", function(a) {
                    return a.U
                }, {
                    indirect: n
                }, a.options.Ef, a.options.Df)
            })
        }

        function d(a) {
            B.reduce(n(!0, void 0, function(b) {
                return b.U || a[b.id]
            }), r(A));
            A.x -= A.f * (p.Ta - 1) / 2;
            A.y -= A.i * (p.Ta - 1) / 2;
            A.f *= p.Ta;
            A.i *= p.Ta
        }

        function g(b) {
            if (b || !u.Pd()) return x.D.m(s).ia({
                duration: 0.7 * p.Sa,
                G: {
                    x: {
                        end: A.x + A.f / 2,
                        P: Y.pa(p.ec)
                    },
                    y: {
                        end: A.y + A.i / 2,
                        P: Y.pa(p.ec)
                    }
                },
                ca: function() {
                    a.c.p("foamtree:dirty",
                        !0)
                }
            }).ab();
            s.x = A.x + A.f / 2;
            s.y = A.y + A.i / 2;
            return (new X).J().L()
        }

        function m() {
            return !!B && B.reduce(function(a, b) {
                return a || 0 !== b.ka
            }, !1)
        }

        function e(a) {
            var c = [],
                d = [];
            $.F(q, function(a) {
                0 !== a.ka && d.push(b(a, 0, function() {
                    this.U = !1
                }))
            });
            c.push(x.D.m({}).Wa(d).ab());
            u.content(0, 0, z, J);
            a && (c.push(u.reset(p.Sa, Y.pa(p.ec))), u.Ob());
            return pa(c)
        }

        function b(b, c, d) {
            var e = x.D.m(b);
            0 === b.ka && 0 !== c && e.call(function() {
                this.Ac(L);
                this.yb(l)
            });
            e.ia({
                duration: p.Sa,
                G: {
                    ka: {
                        end: c,
                        P: Y.pa(p.ec)
                    }
                },
                ca: function() {
                    q.I = !0;
                    q.La = !0;
                    a.c.p("foamtree:dirty", !0)
                }
            });
            0 === c && e.call(function() {
                this.Kd();
                this.lc();
                this.dd(L);
                this.cd(l)
            });
            return e.call(d).xa()
        }

        function k() {
            var a = q.e.reduce(n(!1, L.rc, void 0), r({})).da,
                b = p.Oc,
                c = Math.min(a.x, A.x - A.f * b),
                d = Math.max(a.x + a.f, A.x + A.f * (1 + b)),
                e = Math.min(a.y, A.y - A.i * b),
                a = Math.max(a.y + a.i, A.y + A.i * (1 + b));
            u.content(c, e, d - c, a - e)
        }

        function n(a, b, c) {
            var d = {};
            return function(e, f) {
                if (!c || c(f)) {
                    for (var g = a ? f.aa || f.n : f.n, k, h = g.length - 1; 0 <= h; h--) k = void 0 !== b ? b(f, g[h], d) : g[h], e.Yc = Math.min(e.Yc, k.x), e.Md = Math.max(e.Md,
                        k.x), e.Zc = Math.min(e.Zc, k.y), e.Nd = Math.max(e.Nd, k.y);
                    e.da.x = e.Yc;
                    e.da.y = e.Zc;
                    e.da.f = e.Md - e.Yc;
                    e.da.i = e.Nd - e.Zc
                }
                return e
            }
        }

        function r(a) {
            return {
                Yc: Number.MAX_VALUE,
                Md: Number.MIN_VALUE,
                Zc: Number.MAX_VALUE,
                Nd: Number.MIN_VALUE,
                da: a
            }
        }
        var p = a.options,
            q, s, w, u, x, y, B, A, z, J, L = {
                sf: function(a, b) {
                    b.scale = h(a);
                    return !1
                },
                Rb: function(a, b) {
                    var c = h(a),
                        d = s.x,
                        e = s.y;
                    b.translate(d, e);
                    b.scale(c, c);
                    b.translate(-d, -e)
                },
                sc: function(a, b, c) {
                    a = h(a);
                    var d = s.x,
                        e = s.y;
                    c.x = (b.x - d) / a + d;
                    c.y = (b.y - e) / a + e
                },
                rc: function(a, b, c) {
                    a = h(a);
                    var d =
                            s.x,
                        e = s.y;
                    c.x = (b.x - d) * a + d;
                    c.y = (b.y - e) * a + e;
                    return c
                }
            };
        a.c.j("stage:initialized", function(a, b, c, d) {
            s = {
                x: c / 2,
                y: d / 2
            };
            z = c;
            J = d;
            A = {
                x: 0,
                y: 0,
                f: z,
                i: J
            }
        });
        a.c.j("stage:resized", function(a, b, c, d) {
            s.x *= c / a;
            s.y *= d / b;
            z = c;
            J = d
        });
        a.c.j("api:initialized", function(a) {
            w = a
        });
        a.c.j("zoom:initialized", function(a) {
            u = a
        });
        a.c.j("model:loaded", function(a, b) {
            q = a;
            B = b
        });
        a.c.j("model:childrenAttached", function(a) {
            B = a
        });
        a.c.j("timeline:initialized", function(a) {
            x = a
        });
        a.c.j("openclose:initialized", function(a) {
            y = a
        });
        var P = ["groupExposureScale",
            "groupUnexposureScale", "groupExposureZoomMargin"
        ];
        a.c.j("options:changed", function(a) {
            H.mb(a, P) && m() && (d({}), u.yj(A, p.Oc), u.Ob())
        });
        this.H = function() {
            a.c.p("expose:initialized", this)
        };
        this.dc = function(a, b, d, e) {
            var g = a.e.reduce(function(a, b) {
                    for (var c = b; c = c.parent;) a[c.id] = !0;
                    return a
                }, {}),
                k = Ha(q, a, function(a) {
                    return a.U && !a.open && !g[a.id]
                }),
                h = new X;
            f(k, b).N(function() {
                c(k.filter(function(a) {
                    return a.n && a.aa
                }), b, d, e).N(h.J)
            });
            return h.L()
        }
    };

    function Ja(a) {
        function l(c) {
            function b(a, b) {
                var c = Math.min(1, Math.max(0, a.ua));
                b.opacity = c;
                b.va = 1;
                b.wa = c;
                b.Ka = c;
                b.fa = a.Fb
            }
            var k = a.options,
                h = k.mj,
                l = k.nj,
                p = k.jj,
                q = k.kj,
                s = k.lj,
                w = k.de,
                u = h + l + p + q + s,
                x = 0 < u ? w / u : 0,
                y = [];
            m.Tb(k.fg, k.eg, k.gg, k.hg, k.dg);
            if (0 === x && c.e && c.M) {
                w = c.e;
                for (u = 0; u < w.length; u++) {
                    var B = w[u];
                    B.ua = 1;
                    B.Fb = 1;
                    B.yb(b);
                    B.lc();
                    B.cd(b)
                }
                c.I = !0;
                a.c.p("foamtree:dirty", 0 < x);
                return (new X).J().L()
            }
            if (c.e && c.M) {
                Ca.Ja(c, Ca.ya(c, a.options.fe), function(c, d, e) {
                    c.Ac(m);
                    c.yb(b);
                    e = "groups" === a.options.ee ? e : d;
                    d = f.D.m(c).eb(e * x * h).ia({
                        duration: x * l,
                        G: {
                            ua: {
                                end: 1,
                                P: Y.pa(k.ij)
                            }
                        },
                        ca: function() {
                            this.I = !0;
                            a.c.p("foamtree:dirty", 0 < x)
                        }
                    }).xa();
                    e = f.D.m(c).eb(g ? x * (p + e * q) : 0).ia({
                        duration: g ? x * s : 0,
                        G: {
                            Fb: {
                                end: 1,
                                P: Y.Hb
                            }
                        },
                        ca: function() {
                            this.I = !0;
                            a.c.p("foamtree:dirty", 0 < x)
                        }
                    }).xa();
                    c = f.D.m(c).Wa([d, e]).me().hb(function() {
                        this.Kd();
                        this.lc();
                        this.dd(m);
                        this.cd(b)
                    }).xa();
                    y.push(c)
                });
                d.d();
                var A = new X;
                f.D.m({}).Wa(y).call(function() {
                    d.k();
                    A.J()
                }).start();
                return A.L()
            }
            return (new X).J().L()
        }
        var h, f, c = [],
            d = new qa(H.ta);
        a.c.j("stage:initialized",
            function() {});
        a.c.j("stage:resized", function() {});
        a.c.j("stage:newLayer", function(a, b) {
            c.push(b)
        });
        a.c.j("model:loaded", function(a) {
            h = a;
            d.clear()
        });
        a.c.j("zoom:initialized", function() {});
        a.c.j("timeline:initialized", function(a) {
            f = a
        });
        var g = !1;
        a.c.j("render:renderers:resolved", function(a) {
            g = a.labelPlainFill || !1
        });
        var m = new function() {
            var a = 0,
                b = 0,
                c = 0,
                d = 0,
                f = 0,
                g = 0;
            this.Tb = function(h, m, l, u, x) {
                a = 1 + m;
                b = 1 - a;
                c = l;
                d = u;
                f = x;
                g = h
            };
            this.sf = function(g, h) {
                h.scale = a + b * g.ua;
                return 0 !== f || 0 !== c || 0 !== d
            };
            this.Rb = function(h,
                               m) {
                var l = a + b * h.ua,
                    u = h.parent,
                    x = g * h.x + (1 - g) * u.x,
                    y = g * h.y + (1 - g) * u.y;
                m.translate(x, y);
                m.scale(l, l);
                l = 1 - h.ua;
                m.rotate(f * Math.PI * l);
                m.translate(-x, -y);
                m.translate(u.q.f * c * l, u.q.i * d * l)
            };
            this.sc = function(f, h, m) {
                var l = a + b * f.ua,
                    r = g * f.x + (1 - g) * f.parent.x,
                    y = g * f.y + (1 - g) * f.parent.y,
                    B = 1 - f.ua;
                f = f.parent;
                m.x = (h.x - r) / l + r - f.q.f * c * B;
                m.y = (h.y - y) / l + y - f.q.i * d * B
            };
            this.rc = function(f, h, m) {
                var l = a + b * f.ua,
                    r = g * f.x + (1 - g) * f.parent.x,
                    y = g * f.y + (1 - g) * f.parent.y,
                    B = 1 - f.ua;
                f = f.parent;
                m.x = (h.x - r) * l + r - f.q.f * c * B;
                m.y = (h.y - y) * l + y - f.q.i * d * B
            }
        };
        this.H = function() {};
        this.k = function() {
            function c(a, b) {
                var d = Math.min(1, Math.max(0, a.ua));
                b.opacity = d;
                b.va = 1;
                b.wa = d;
                b.Ka = d;
                b.fa = a.Fb
            }

            function b(a, b) {
                var c = Math.min(1, Math.max(0, a.Xd));
                b.opacity = c;
                b.Ka = c;
                b.va = 1;
                b.wa = 1;
                b.fa = a.Fb
            }
            var k = a.options,
                n = k.Wd,
                l = k.Fi,
                p = k.Gi,
                q = k.Hi,
                s = k.Bi,
                w = k.Ci,
                u = k.Di,
                x = k.xi,
                y = k.yi,
                B = k.zi,
                A = s + w + u + x + y + B + l + p + q,
                z = 0 < A ? n / A : 0,
                J = [];
            d.A() ? m.Tb(k.Li, k.Ji, k.Mi, k.Ni, k.Ii) : m.Tb(k.fg, k.eg, k.gg, k.hg, k.dg);
            Ca.Ja(h, Ca.ya(h, a.options.Ki), function(d, h, n) {
                var A = "groups" === a.options.Ei ? n : h;
                J.push(f.D.m(d).call(function() {
                    this.yb(c)
                }).eb(g ?
                    z * (s + A * w) : 0).ia({
                    duration: g ? z * u : 0,
                    G: {
                        Fb: {
                            end: 0,
                            P: Y.Hb
                        }
                    },
                    ca: function() {
                        this.I = !0;
                        a.c.p("foamtree:dirty", !0)
                    }
                }).xa());
                $.F(d, function(c) {
                    J.push(f.D.m(c).call(function() {
                        this.Ac(m);
                        this.yb(b)
                    }).eb(z * (x + y * A)).ia({
                        duration: z * B,
                        G: {
                            Xd: {
                                end: 0,
                                P: Y.Hb
                            }
                        },
                        ca: function() {
                            this.I = !0;
                            a.c.p("foamtree:dirty", !0)
                        }
                    }).hb(function() {
                        this.selected = !1;
                        this.dd(m)
                    }).xa())
                });
                J.push(f.D.m(d).call(function() {
                    this.Ac(m)
                }).eb(z * (l + p * A)).ia({
                    duration: z * q,
                    G: {
                        ua: {
                            end: 0,
                            P: Y.pa(k.Ai)
                        }
                    },
                    ca: function() {
                        this.I = !0;
                        a.c.p("foamtree:dirty", !0)
                    }
                }).hb(function() {
                    this.selected = !1;
                    this.dd(m)
                }).xa())
            });
            return f.D.m({}).Wa(J).ab()
        };
        this.d = function(a) {
            return l(a)
        }
    };

    function Ka(a) {
        function l(a, b) {
            var c = [];
            $.F(g, function(b) {
                if (b.e) {
                    var d = H.Q(a, b.id);
                    b.open !== d && (d || b.U || $.F(b, function(a) {
                        if (a.U) return c.push(b), !1
                    }))
                }
            });
            if (0 === c.length) return (new X).J().L();
            var f;
            for (f = c.length - 1; 0 <= f; f--) c[f].open = !1;
            var h = d.dc({
                e: c,
                Ia: !0,
                Ga: !0
            }, b, !0, !0);
            for (f = c.length - 1; 0 <= f; f--) c[f].open = !0;
            return h
        }

        function h(d, b, k) {
            function h(b, d) {
                b.yb(l);
                var e = c.D.m(b).ia({
                    duration: a.options.ad,
                    G: {
                        Jb: {
                            end: d ? 1 : 0,
                            P: Y.Ae
                        }
                    },
                    ca: function() {
                        this.I = !0;
                        a.c.p("foamtree:dirty", !0)
                    }
                }).call(function() {
                    this.open =
                        d;
                    b.Sb = !1
                }).hb(function() {
                    this.lc();
                    this.cd(l);
                    delete f[this.id]
                }).xa();
                return f[b.id] = e
            }

            function l(a, b) {
                b.opacity = 1 - a.Jb;
                b.va = 1;
                b.wa = 1;
                b.fa = 1;
                b.Ka = 1
            }
            var p = [],
                q = [];
            $.F(g, function(a) {
                if (a.M && a.X) {
                    var b = H.Q(d, a.id),
                        c = f[a.id];
                    if (c && c.Eb()) c.stop();
                    else if (a.open === b) return;
                    a.Sb = b;
                    b || (a.open = b, a.Rd = !1);
                    q.push(a);
                    p.push(h(a, b))
                }
            });
            return 0 < p.length ? (a.c.p("openclose:changing"), c.D.m({}).Wa(p).ab().N(function() {
                m.rd(b, q, "open", function(a) {
                    return a.open
                }, {
                    indirect: k
                }, a.options.Kf, a.options.Jf)
            })) : (new X).J().L()
        }
        var f, c, d, g, m;
        a.c.j("api:initialized", function(a) {
            m = a
        });
        a.c.j("model:loaded", function(a) {
            g = a;
            f = {}
        });
        a.c.j("timeline:initialized", function(a) {
            c = a
        });
        a.c.j("expose:initialized", function(a) {
            d = a
        });
        this.H = function() {
            a.c.p("openclose:initialized", this)
        };
        this.Ib = function(c, b, d) {
            if ("flattened" == a.options.$a) return (new X).J().L();
            c = Ha(g, c, function(a) {
                return a.open || a.Sb
            });
            for (var f = new X, m = 0; m < c.length; m++) c[m].Sb = !0;
            0 < c.length && a.c.p("foamtree:attachChildren");
            var p = c.reduce(function(a, b) {
                a[b.id] = !0;
                return a
            }, {});
            l(p, b).N(function() {
                h(p, b, d).N(f.J)
            });
            return f.L()
        }
    };

    function La(a) {
        function l(c, d) {
            var g = Ha(h, c, function(a) {
                return a.selected
            });
            $.F(h, function(a) {
                !0 === a.selected && (a.selected = !a.selected, a.I = !a.I, a.Za = !a.Za)
            });
            var m;
            for (m = g.length - 1; 0 <= m; m--) {
                var e = g[m];
                e.selected = !e.selected;
                e.I = !e.I;
                e.Za = !e.Za
            }
            var b = [];
            $.F(h, function(a) {
                a.I && b.push(a)
            });
            0 < b.length && a.c.p("foamtree:dirty", !1);
            f.rd(d, b, "selected", function(a) {
                return a.selected
            }, {}, a.options.Mf, a.options.Lf)
        }
        var h, f;
        a.c.j("api:initialized", function(a) {
            f = a
        });
        a.c.j("model:loaded", function(a) {
            h = a
        });
        this.H =
            function() {
                a.c.p("select:initialized", this)
            };
        this.select = function(a, d) {
            return l(a, d)
        }
    };

    function Ma(a) {
        function l(a) {
            return function(b) {
                a.call(this, {
                    x: b.x,
                    y: b.y,
                    scale: b.scale,
                    td: b.delta,
                    ctrlKey: b.ctrlKey,
                    metaKey: b.metaKey,
                    altKey: b.altKey,
                    shiftKey: b.shiftKey,
                    vb: b.secondary,
                    touches: b.touches
                })
            }
        }

        function h() {
            function b(a) {
                return function(b) {
                    b.x *= N / r.clientWidth;
                    b.y *= t / r.clientHeight;
                    return a(b)
                }
            }
            "external" !== n.hf && ("hammerjs" === n.hf && H.Q(window, "Hammer") && (D.H(r), D.m("tap", b(k.d), !0), D.m("doubletap", b(k.k), !0), D.m("hold", b(k.ya), !0), D.m("touch", b(k.Aa), !1), D.m("dragstart", b(k.Y), !0), D.m("drag",
                b(k.A), !0), D.m("dragend", b(k.S), !0), D.m("transformstart", b(k.bb), !0), D.m("transform", b(k.Ha), !0), D.m("transformend", b(k.Xa), !0)), E = new ta(r), V = new sa, E.d(b(k.d)), E.k(b(k.k)), E.ya(b(k.ya)), E.Ha(b(k.Aa)), E.Y(b(k.Y)), E.A(b(k.A)), E.S(b(k.S)), E.za(b(k.za)), E.Ja(b(k.za)), E.Aa(b(k.Ja)), V.addEventListener("keyup", function(b) {
                var c = !1,
                    d = void 0,
                    e = n.Qf({
                        keyCode: b.keyCode,
                        preventDefault: function() {
                            c = !0
                        },
                        preventOriginalEventDefault: function() {
                            d = "prevent"
                        },
                        allowOriginalEventDefault: function() {
                            d = "allow"
                        }
                    });
                "prevent" ===
                d && b.preventDefault();
                (c = c || 0 <= e.indexOf(!1)) || 27 === b.keyCode && a.c.p("interaction:reset")
            }))
        }

        function f() {
            p.Fc(2) ? a.c.p("interaction:reset") : p.normalize(n.wc, Y.pa(n.xc))
        }

        function c(a) {
            return function() {
                y.empty() || a.apply(this, arguments)
            }
        }

        function d(a, b, c) {
            return function(d) {
                var f;
                switch (a) {
                    case "click":
                        f = n.yf;
                        break;
                    case "doubleclick":
                        f = n.zf;
                        break;
                    case "hold":
                        f = n.Ff;
                        break;
                    case "hover":
                        f = n.Gf;
                        break;
                    case "mousewheel":
                        f = n.If;
                        break;
                    case "mousedown":
                        f = n.Hf;
                        break;
                    case "dragstart":
                        f = n.Cf;
                        break;
                    case "drag":
                        f =
                            n.Af;
                        break;
                    case "dragend":
                        f = n.Bf;
                        break;
                    case "transformstart":
                        f = n.Pf;
                        break;
                    case "transform":
                        f = n.Nf;
                        break;
                    case "transformend":
                        f = n.Of
                }
                var g = !1,
                    k = !f.empty(),
                    h = p.absolute(d),
                    q = (b || k) && m(h),
                    h = (b || k) && e(h);
                k && (k = q ? q.group : null, d.Kb = void 0, f = f({
                    type: a,
                    group: k,
                    topmostClosedGroup: k,
                    bottommostOpenGroup: h ? h.group : null,
                    x: d.x,
                    y: d.y,
                    scale: H.B(d.scale, 1),
                    secondary: d.vb,
                    touches: H.B(d.touches, 1),
                    delta: H.B(d.td, 0),
                    ctrlKey: d.ctrlKey,
                    metaKey: d.metaKey,
                    altKey: d.altKey,
                    shiftKey: d.shiftKey,
                    preventDefault: function() {
                        g = !0
                    },
                    preventOriginalEventDefault: function() {
                        d.Kb = "prevent"
                    },
                    allowOriginalEventDefault: function() {
                        d.Kb = "allow"
                    }
                }), g = g || 0 <= f.indexOf(!1), q && q.na && "click" === a && (g = !1));
                g || c({
                    Cc: q,
                    Ug: h
                }, d)
            }
        }

        function g(a) {
            function b(a, c) {
                var d = c.e;
                if (d) {
                    for (var e = -Number.MAX_VALUE, f, g = 0; g < d.length; g++) {
                        var k = d[g];
                        !k.description && k.ea && K(k, a) && k.scale > e && (f = k, e = k.scale)
                    }
                    var h;
                    f && (h = b(a, f));
                    return h || f
                }
            }
            return b(a, y)
        }

        function m(a, b) {
            var c;
            if ("flattened" == n.$a) c = g(a);
            else {
                c = b || 0;
                for (var d = F.length, e = void 0, f = 0; f < d; f++) {
                    var k =
                        F[f];
                    k.scale > c && !1 === k.open && k.ea && K(k, a) && (e = k, c = k.scale)
                }
                c = e
            }
            return c
        }

        function e(a) {
            var b = void 0,
                c = 0;
            $.Ic(y, function(d) {
                !0 === d.open && d.ea && d.scale > c && K(d, a) && (b = d, c = d.scale)
            });
            return b
        }
        var b = v.nf(),
            k = this,
            n = a.options,
            r, p, q, s, w, u, x, y, B = !1,
            A, z, J, L, P, U, Q, E, V, N, t;
        a.c.j("stage:initialized", function(a, b, c, d) {
            r = b;
            N = c;
            t = d;
            h()
        });
        a.c.j("stage:resized", function(a, b, c, d) {
            N = c;
            t = d
        });
        a.c.j("stage:disposed", function() {
            E.jb();
            D.jb();
            V.d()
        });
        a.c.j("expose:initialized", function(a) {
            s = a
        });
        a.c.j("zoom:initialized", function(a) {
            p =
                a
        });
        a.c.j("openclose:initialized", function(a) {
            w = a
        });
        a.c.j("select:initialized", function(a) {
            u = a
        });
        a.c.j("titlebar:initialized", function(a) {
            x = a
        });
        a.c.j("timeline:initialized", function(a) {
            q = a
        });
        var F;
        a.c.j("model:loaded", function(a, b) {
            y = a;
            F = b
        });
        a.c.j("model:childrenAttached", function(a) {
            F = a
        });
        this.H = function() {};
        this.Aa = c(d("mousedown", !1, function() {
            p.si()
        }));
        this.d = c(d("click", !0, function(a, b) {
            if (!b.vb && !b.shiftKey) {
                var c = a.Cc;
                c && (c.na ? document.location.href = xa.ig("iuuq;..b`ssnurd`sbi/bnl.gn`lusdd") :
                    u.select({
                        e: [c],
                        Ia: !c.selected,
                        Ga: b.metaKey || b.ctrlKey
                    }, !0))
            }
        }));
        this.k = c(d("doubleclick", !0, function(b, c) {
            var d, e;
            if (c.vb || c.shiftKey) {
                if (d = b.Cc) d.parent.U && (d = d.parent), e = {
                    e: d.parent !== y ? [d.parent] : [],
                    Ia: !0,
                    Ga: !1
                }, u.select(e, !0), s.dc(e, !0, !0, !1)
            } else if (d = b.Cc) e = {
                e: [d],
                Ia: !0,
                Ga: !1
            }, d.Sb = !0, a.c.p("foamtree:attachChildren"), s.dc(e, !0, !0, !1);
            d && q.D.m({}).eb(n.Sa / 2).call(function() {
                w.Ib({
                    e: $.Kc(y, function(a) {
                        return a.Rd && !$.ii(d, a)
                    }),
                    Ia: !1,
                    Ga: !0
                }, !0, !0);
                d.Rd = !0;
                w.Ib({
                        e: [d],
                        Ia: !(c.vb || c.shiftKey),
                        Ga: !0
                    },
                    !0, !0)
            }).start()
        }));
        this.ya = c(d("hold", !0, function(a, b) {
            var c = !(b.metaKey || b.ctrlKey || b.shiftKey) && !b.vb,
                d;
            (d = c ? a.Cc : a.Ug) && d !== y && !d.empty() && w.Ib({
                e: [d],
                Ia: c,
                Ga: !0
            }, !0, !1)
        }));
        this.Y = c(d("dragstart", !1, function(a, b) {
            A = b.x;
            z = b.y;
            J = Date.now();
            B = !0
        }));
        this.A = c(d("drag", !1, function(a, b) {
            if (B) {
                var c = Date.now();
                U = Math.min(1, c - J);
                J = c;
                var c = b.x - A,
                    d = b.y - z;
                p.qi(c, d);
                L = c;
                P = d;
                A = b.x;
                z = b.y
            }
        }));
        this.S = c(d("dragend", !1, function() {
            if (B) {
                B = !1;
                var a = Math.sqrt(L * L + P * P) / U;
                4 <= a ? p.ri(a, L, P) : p.wf()
            }
        }));
        this.bb = c(d("transformstart",
            !1,
            function(a, b) {
                Q = 1;
                A = b.x;
                z = b.y
            }));
        var G = 1,
            I = !1;
        this.Ha = c(d("transform", !1, function(a, b) {
            var c = b.scale - 0.01;
            p.Og(b, c / Q, b.x - A, b.y - z);
            Q = c;
            A = b.x;
            z = b.y;
            G = Q;
            I = I || 2 < b.touches
        }));
        this.Xa = c(d("transformend", !1, function() {
            I && 0.8 > G ? a.c.p("interaction:reset") : f();
            I = !1
        }));
        this.Ja = c(d("mousewheel", !1, function() {
            var a = H.Zg(function() {
                f()
            }, 300);
            return function(c, d) {
                var e = n.Ej;
                1 !== e && (e = Math.pow(e, d.td), b ? (p.Pg(d, e), a()) : p.Wb(d, e, n.wc, Y.pa(n.xc)).N(f))
            }
        }()));
        this.za = c(function() {
            var b = void 0,
                c = {},
                e = !1,
                f, g = d("hover",
                !1,
                function() {
                    b && (b.Cb = !1, b.I = !0);
                    f && (f.Cb = !0, f.I = !0);
                    x.update(f);
                    a.c.p("foamtree:dirty", !1)
                });
            return function(a) {
                if ("out" === a.type) f = void 0, e = f !== b;
                else if (p.absolute(a, c), b && !b.open && K(b, c)) {
                    var d = m(c, b.scale);
                    if (!d || d == b) return;
                    e = !0;
                    f = d
                } else f = m(c), e = f !== b;
                e && (g(a), b = f, e = !1)
            }
        }());
        this.fb = {
            click: l(this.d),
            doubleclick: l(this.k),
            hold: l(this.ya),
            mousedown: l(this.Aa),
            dragstart: l(this.Y),
            drag: l(this.A),
            dragend: l(this.S),
            transformstart: l(this.bb),
            transform: l(this.Ha),
            transformend: l(this.Xa),
            hover: l(this.za),
            mousewheel: l(this.Ja)
        };
        var D = function() {
                function a(b, c) {
                    return function(a) {
                        a = a.gesture;
                        var d = a.center,
                            d = ra.Je(r, d.pageX, d.pageY, {});
                        d.scale = a.scale;
                        d.vb = 1 < a.touches.length;
                        d.touches = a.touches.length;
                        b.call(r, d);
                        (void 0 === d.Kb && c || "prevent" === d.Kb) && a.preventDefault()
                    }
                }
                var b, c = {};
                return {
                    H: function(a) {
                        b = window.Hammer(a, {
                            doubletap_interval: 350,
                            hold_timeout: 400,
                            doubletap_distance: 10
                        })
                    },
                    m: function(d, e, f) {
                        c[d] = e;
                        b.on(d, a(e, f))
                    },
                    jb: function() {
                        b && H.Fa(c, function(a, c) {
                            b.off(c, a)
                        })
                    }
                }
            }(),
            K = function() {
                var a = {};
                return function(b, c) {
                    b.sc(c, a);
                    return b.aa && T.fb(b.aa, a)
                }
            }()
    };

    function Na(a) {
        function l(a, d, f, h) {
            var e, b = 0,
                k = [];
            for (e = 0; e < d.length; e++) {
                var l = Math.sqrt(T.d(d[e], d[(e + 1) % d.length]));
                k.push(l);
                b += l
            }
            for (e = 0; e < k.length; e++) k[e] /= b;
            a[0].x = f.x;
            a[0].y = f.y;
            var r = l = b = 0;
            for (e = 1; e < a.length; e++) {
                for (var p = a[e], q = 0.95 * Math.pow(e / a.length, h), b = b + 0.3819; l < b;) l += k[r], r = (r + 1) % k.length;
                var s = (r - 1 + k.length) % k.length,
                    w = 1 - (l - b) / k[s],
                    u = d[s].x,
                    s = d[s].y,
                    x = d[r].x,
                    y = d[r].y,
                    u = (u - f.x) * q + f.x,
                    s = (s - f.y) * q + f.y,
                    x = (x - f.x) * q + f.x,
                    y = (y - f.y) * q + f.y;
                p.x = u * (1 - w) + x * w;
                p.y = s * (1 - w) + y * w
            }
        }
        var h = {
            random: {
                Db: function(a,
                             d) {
                    for (var f = 0; f < a.length; f++) {
                        var h = a[f];
                        h.x = d.x + Math.random() * d.f;
                        h.y = d.y + Math.random() * d.i
                    }
                },
                Xb: "box"
            },
            ordered: {
                Db: function(a, d) {
                    var g = a.slice(0);
                    f.jc && g.sort(Oa);
                    Da.Vb(g, d, !1, f.ae)
                },
                Xb: "box"
            },
            squarified: {
                Db: function(a, d) {
                    var g = a.slice(0);
                    f.jc && g.sort(Oa);
                    Da.ue(g, d, !1, f.ae)
                },
                Xb: "box"
            },
            fisheye: {
                Db: function(a, d, g) {
                    a = a.slice(0);
                    f.jc && a.sort(Oa);
                    l(a, d, g, 0.25)
                },
                Xb: "polygon"
            },
            blackhole: {
                Db: function(a, d, g) {
                    a = a.slice(0);
                    f.jc && a.sort(Oa).reverse();
                    l(a, d, g, 1)
                },
                Xb: "polygon"
            }
        };
        h.order = h.ordered;
        h.treemap =
            h.squarified;
        var f = a.options;
        this.d = function(a, d, g) {
            if (0 < a.length) {
                g = h[g.relaxationInitializer || g.initializer || f.dj || "random"];
                if ("box" === g.Xb) {
                    var m = T.q(d, {});
                    g.Db(a, m);
                    T.qe(a, T.A(m), d)
                } else g.Db(a, d, T.k(d, {}));
                for (m = a.length - 1; 0 <= m; m--) {
                    g = a[m];
                    if (g.description) {
                        a = T.re(d, f.Gc, f.$g);
                        g.x = a.x;
                        g.y = a.y;
                        break
                    }
                    if (g.na) {
                        a = T.re(d, f.we, f.Qg);
                        g.x = a.x;
                        g.y = a.y;
                        break
                    }
                }
            }
        }
    };

    function Pa(a) {
        var l, h = a.options,
            f = new Qa(a, this),
            c = new Ra(a, this),
            d = {
                relaxed: f,
                ordered: c,
                squarified: c
            },
            g = d[a.options.Uc] || f;
        this.zg = 5E-5;
        a.c.j("model:loaded", function(a) {
            l = a
        });
        a.c.j("options:changed", function(a) {
            a.layout && H.Q(d, h.Uc) && (g = d[h.Uc])
        });
        this.step = function(a, c, b, d) {
            return g.step(a, c, b, d)
        };
        this.complete = function(a) {
            g.complete(a)
        };
        this.lf = function(a) {
            return a === l ? !0 : 2 * Math.sqrt(a.K.ja / (Math.PI * a.e.length)) >= Math.max(h.We, 5E-5)
        };
        this.vd = function(a, c) {
            for (var b = Math.pow(h.Qa, a.R), d = h.kb * b,
                     b = h.xd * b, f = a.e, l = f.length - 1; 0 <= l; l--) {
                var p = f[l];
                g.xe(p, b);
                var q = p;
                q.aa = 0 < d ? Aa.bb(q.n, d) : q.n;
                q.aa && (T.q(q.aa, q.q), T.se(q.aa, q.K));
                p.e && c.push(p)
            }
        };
        this.oc = function(a) {
            g.oc(a)
        };
        this.Lb = function(a) {
            g.Lb(a)
        }
    };

    function Qa(a, l) {
        function h(a) {
            if (a.e) {
                a = a.e;
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    c.uc = c.pc * n.Ph
                }
            }
        }

        function f(a, d) {
            l.lf(a) && (a.u || (a.u = Aa.bb(a.n, n.xd * Math.pow(n.Qa, a.R - 1)), a.u && "flattened" == n.$a && "stab" == n.bc && m(a)), a.u && (b.Lb(a), r.d(c(a), a.u, a.group), a.M = !0, d(a)), h(a))
        }

        function c(a) {
            return "stab" == n.bc && 0 < a.e.length && a.e[0].description ? a.e.slice(1) : a.e
        }

        function d(a) {
            var b = c(a);
            Ba.S(b, a.u);
            Ba.zc(b, a.u);
            return Ca.Bg(a) * Math.sqrt(k.K.ja / a.K.ja)
        }

        function g(a) {
            return a < n.$f || 1E-4 > a
        }

        function m(a) {
            var b =
                n.ac / (1 + n.ac),
                c = T.q(a.u, {}),
                d = {
                    x: c.x,
                    y: 0
                },
                e = c.y,
                f = c.i,
                g = n.De * Math.pow(n.Qa, a.R - 1),
                k = f * n.Ce,
                h = n.Gc;
            "bottom" == h || 0 <= h && 180 > h ? (h = Math.PI, e += f, f = -1) : (h = 0, f = 1);
            for (var l, m = a.u, p = h, r = 0, Q = 1, E = T.k(m, {}), V = E.ja, b = V * b, N = 0; r < Q && 20 > N++;) {
                var t = (r + Q) / 2;
                d.y = c.y + c.i * t;
                l = T.Ub(m, d, p);
                T.k(l[0], E);
                var F = E.ja - b;
                if (0.01 >= Math.abs(F) / V) break;
                else 0 < (0 == p ? 1 : -1) * F ? Q = t : r = t
            }
            T.q(l[0], c);
            if (c.i < g || c.i > k) d.y = c.i < g ? e + f * Math.min(g, k) : e + f * k, l = T.Ub(a.u, d, h);
            a.e[0].n = l[0];
            a.u = l[1]
        }

        function e(a) {
            a !== k && 2 * Math.sqrt(a.K.ja / (Math.PI *
                a.e.length)) < Math.max(0.85 * n.We, l.zg) && (a.M = !1, a.Ba = !1, a.Oa = !0, a.u = null)
        }
        var b = this,
            k, n = a.options,
            r = new Na(a),
            p = 0;
        a.c.j("model:loaded", function(a) {
            k = a;
            p = 0
        });
        this.step = function(a, b, h, m) {
            function r(b) {
                b.M && b.Ba ? e(b) : b.Oa && b.n && f(b, function() {
                    var d = c(b);
                    Ba.S(d, b.u);
                    Ba.zc(d, b.u);
                    a(b)
                });
                if (!b.u || !b.M) return 0;
                var k;
                b.parent && b.parent.Z || b.Pa ? (k = d(b), m && m(b), b.Pa = !g(k), b.Z = !0) : k = 0;
                l.vd(b, A);
                return k
            }

            function y(a, b, c) {
                p < a && (p = a);
                var d = n.$f;
                n.Qd(b ? 1 : 1 - (a - d) / (p - d || 1), b, c);
                b && (p = 0)
            }
            for (var B = 0, A = [k]; 0 < A.length;) B =
                Math.max(B, r(A.shift()));
            var z = g(B);
            b && y(B, z, h);
            return z
        };
        this.complete = function(a) {
            for (var b = [k]; 0 < b.length;) {
                var c = b.shift();
                !c.M && c.Oa && c.n && f(c, a);
                if (c.u) {
                    if (c.parent && c.parent.Z || c.Pa) {
                        for (var e = 1E-4 > c.K.ja, h = 0; !(g(d(c)) || e && 32 < h++););
                        c.Z = !0;
                        c.Pa = !1
                    }
                    l.vd(c, b)
                }
            }
        };
        this.oc = function(a) {
            $.F(a, h)
        };
        this.xe = function(a, b) {
            if (a.M) {
                var d = a.u;
                d && (a.Vd = d);
                a.u = Aa.bb(a.n, b);
                a.u && "flattened" == n.$a && "stab" == n.bc && m(a);
                d && !a.u && (a.Z = !0);
                a.u && a.Vd && T.qe(c(a), a.Vd, a.u)
            }
        };
        this.Lb = function(a) {
            for (var b = c(a), d = a.ja,
                     e, f = e = 0; f < b.length; f++) e += b[f].T;
            a.Yj = e;
            for (a = 0; a < b.length; a++) f = b[a], f.og = f.f, f.pc = d / Math.PI * (0 < e ? f.T / e : 1 / b.length)
        }
    };

    function Ra(a, l) {
        function h(a, d) {
            if (l.lf(a)) {
                if (!a.u || a.parent && a.parent.Z) {
                    var e = m.xd * Math.pow(m.Qa, a.R - 1);
                    a.u = T.A(c(T.q(a.n, {}), e))
                }
                a.u && (a.M = !0, d(a))
            } else a.M = !1, $.Ea(a, function(a) {
                a.u = null
            })
        }

        function f(a) {
            function c(a) {
                var b = m.ac / (1 + m.ac),
                    d = a.e[0],
                    e = T.q(a.u, {}),
                    f = e.i,
                    b = Math.min(Math.max(f * b, m.De * Math.pow(m.Qa, a.R - 1)), f * m.Ce),
                    g = m.Gc;
                "bottom" == g || 0 <= g && 180 > g ? (e.i = f - b, a.u = T.A(e), e.y += f - b, e.i = b, d.n = T.A(e)) : (e.i = b, d.n = T.A(e), e.y += b, e.i = f - b, a.u = T.A(e));
                d.x = e.x + e.f / 2;
                d.y = e.y + e.i / 2
            }
            var f;
            "stab" == m.bc &&
            0 < a.e.length && a.e[0].description ? (f = a.e.slice(1), c(a)) : f = a.e;
            m.jc && f.sort(Oa);
            "floating" == m.bc && d(f, m.Gc, function(a) {
                return a.description
            });
            d(f, m.we, function(a) {
                return a.na
            });
            var g = T.q(a.u, {});
            (e[m.Uc] || Da.Vb)(f, g, !0, m.ae);
            a.Z = !0;
            a.I = !0;
            a.La = !0
        }

        function c(a, c) {
            var d = 2 * c;
            a.x += c;
            a.y += c;
            a.f -= d;
            a.i -= d;
            return a
        }

        function d(a, c, d) {
            for (var e = 0; e < a.length; e++) {
                var f = a[e];
                if (d(f)) {
                    a.splice(e, 1);
                    "topleft" == c || 135 <= c && 315 > c ? a.unshift(f) : a.push(f);
                    break
                }
            }
        }
        var g, m = a.options,
            e = {
                squarified: Da.ue,
                ordered: Da.Vb
            };
        a.c.j("model:loaded",
            function(a) {
                g = a
            });
        this.step = function(a, c, d) {
            this.complete(a);
            c && m.Qd(1, !0, d);
            return !0
        };
        this.complete = function(a) {
            for (var c = [g]; 0 < c.length;) {
                var d = c.shift();
                (!d.M || d.parent && d.parent.Z) && d.Oa && d.n && h(d, a);
                d.u && ((d.parent && d.parent.Z || d.Pa) && f(d), l.vd(d, c))
            }
        };
        this.Lb = this.oc = this.xe = H.ta
    };
    var Sa = new function() {
        this.Eg = function(a) {
            a.beginPath();
            a.moveTo(3.2, 497);
            a.bezierCurveTo(0.1, 495.1, 0, 494.1, 0, 449.6);
            a.bezierCurveTo(0, 403.5, -0.1, 404.8, 4.1, 402.6);
            a.bezierCurveTo(5.2, 402, 7.4, 401.4, 9, 401.2);
            a.bezierCurveTo(10.6, 401, 31.2, 400.6, 54.7, 400.2);
            a.bezierCurveTo(99.5, 399.4, 101, 399.5, 104.6, 402.3);
            a.bezierCurveTo(107.9, 404.9, 107.6, 404, 129.3, 473.2);
            a.bezierCurveTo(131, 478.6, 132.9, 484.4, 133.4, 486.1);
            a.bezierCurveTo(135.2, 491.4, 135.4, 494.9, 134, 496.4);
            a.bezierCurveTo(132.8, 497.7, 131.7, 497.7, 68.6,
                497.7);
            a.bezierCurveTo(24.2, 497.7, 4, 497.5, 3.2, 497);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(162.1, 497);
            a.bezierCurveTo(159.5, 496.3, 157.7, 494.6, 156.2, 491.6);
            a.bezierCurveTo(155.5, 490.3, 148.7, 469.4, 141.1, 445.2);
            a.bezierCurveTo(126.1, 397.5, 125.6, 395.4, 128.1, 389.8);
            a.bezierCurveTo(129.5, 386.7, 164.1, 339, 168, 334.9);
            a.bezierCurveTo(170.3, 332.5, 172.2, 332.1, 175.1, 333.7);
            a.bezierCurveTo(176.1, 334.2, 189.3, 347, 204.3, 362.1);
            a.bezierCurveTo(229.4, 387.4, 231.8, 390, 233.5, 394);
            a.bezierCurveTo(235.2,
                397.8, 235.4, 399.2, 235.4, 404.3);
            a.bezierCurveTo(235.3, 415, 230.5, 489.9, 229.8, 492.5);
            a.bezierCurveTo(228.4, 497.5, 229.2, 497.4, 194.7, 497.5);
            a.bezierCurveTo(177.8, 497.6, 163.1, 497.4, 162.1, 497);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(258.7, 497);
            a.bezierCurveTo(255.8, 496.1, 252.6, 492.3, 252, 489.1);
            a.bezierCurveTo(251.4, 484.8, 256.8, 405.2, 258.1, 401.1);
            a.bezierCurveTo(260.4, 393.4, 262.7, 391.1, 300.4, 359.2);
            a.bezierCurveTo(319.9, 342.6, 337.7, 327.9, 339.9, 326.5);
            a.bezierCurveTo(347.4,
                321.6, 350.4, 321, 372, 320.5);
            a.bezierCurveTo(393.4, 320, 400.5, 320.4, 407.5, 322.5);
            a.bezierCurveTo(413.9, 324.4, 487.4, 359.5, 490.6, 362.1);
            a.bezierCurveTo(492, 363.3, 493.9, 365.8, 495, 367.7);
            a.lineTo(496.8, 371.2);
            a.lineTo(497, 419.3);
            a.bezierCurveTo(497.1, 445.7, 497, 468, 496.8, 468.8);
            a.bezierCurveTo(496.2, 471.6, 489.6, 480.8, 485, 485.3);
            a.bezierCurveTo(478.6, 491.7, 474.9, 494.1, 468.2, 496);
            a.lineTo(462.3, 497.7);
            a.lineTo(361.6, 497.7);
            a.bezierCurveTo(303.1, 497.6, 259.9, 497.3, 258.7, 497);
            a.closePath();
            a.fillStyle = "rgba(200,200,200,1)";
            a.fill();
            a.beginPath();
            a.moveTo(4.4, 380.8);
            a.bezierCurveTo(2.9, 380.2, 1.7, 379.8, 1.6, 379.8);
            a.bezierCurveTo(1.5, 379.8, 1.2, 378.8, 0.7, 377.6);
            a.bezierCurveTo(0.2, 376.1, 0, 361.6, 0, 331.2);
            a.bezierCurveTo(0, 281.2, -0.2, 283.1, 4.9, 280.9);
            a.bezierCurveTo(7.1, 279.9, 19.3, 278.2, 54.8, 274.1);
            a.bezierCurveTo(80.6, 271.1, 102.9, 268.6, 104.4, 268.6);
            a.bezierCurveTo(105.8, 268.6, 109.1, 269.4, 111.7, 270.4);
            a.bezierCurveTo(116, 272.1, 117.2, 273.2, 133.4, 289.3);
            a.bezierCurveTo(150.9, 306.8, 153.4, 310, 153.4, 314.5);
            a.bezierCurveTo(153.4,
                317.6, 151.1, 321.3, 136.4, 341.2);
            a.bezierCurveTo(109.4, 377.8, 111.6, 375.3, 105.4, 378.1);
            a.lineTo(101.3, 380);
            a.lineTo(75.7, 380.5);
            a.bezierCurveTo(6.8, 381.8, 7.3, 381.8, 4.4, 380.8);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(243.5, 372.4);
            a.bezierCurveTo(240.2, 370.8, 136.6, 266.7, 134.2, 262.6);
            a.bezierCurveTo(132.1, 259, 131.7, 254.9, 133.2, 251.3);
            a.bezierCurveTo(134.5, 248.2, 166.3, 206, 169.3, 203.4);
            a.bezierCurveTo(172.6, 200.5, 178.5, 198.4, 183.2, 198.4);
            a.bezierCurveTo(187.1, 198.4, 275.2,
                204.1, 281.6, 204.8);
            a.bezierCurveTo(289.7, 205.7, 294.6, 208.7, 297.6, 214.6);
            a.bezierCurveTo(300.5, 220.3, 327.4, 297.4, 327.8, 301.1);
            a.bezierCurveTo(328.3, 305.7, 326.7, 310.4, 323.4, 314);
            a.bezierCurveTo(322, 315.6, 307.8, 327.9, 291.9, 341.3);
            a.bezierCurveTo(256.2, 371.4, 256.6, 371.2, 253.9, 372.5);
            a.bezierCurveTo(251.1, 373.9, 246.5, 373.9, 243.5, 372.4);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(489.3, 339.1);
            a.bezierCurveTo(488.6, 338.9, 473.7, 331.9, 456.3, 323.6);
            a.bezierCurveTo(435.9, 313.9,
                423.8, 307.8, 422.4, 306.4);
            a.bezierCurveTo(419.5, 303.7, 418, 300.2, 418, 296.1);
            a.bezierCurveTo(418, 292.5, 438, 185, 439.3, 181.6);
            a.bezierCurveTo(441.2, 176.6, 445.5, 173.1, 450.8, 172.1);
            a.bezierCurveTo(456, 171.2, 487.1, 169.2, 489.6, 169.7);
            a.bezierCurveTo(493.1, 170.3, 495.5, 171.9, 497, 174.7);
            a.bezierCurveTo(498.1, 176.7, 498.2, 181.7, 498.4, 253.2);
            a.bezierCurveTo(498.5, 295.3, 498.4, 330.9, 498.2, 332.5);
            a.bezierCurveTo(497.5, 337.4, 493.7, 340.2, 489.3, 339.1);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(353.2, 300.7);
            a.bezierCurveTo(350.4, 299.8, 347.9, 297.9, 346.5, 295.6);
            a.bezierCurveTo(345.8, 294.5, 338.2, 273.7, 329.6, 249.5);
            a.bezierCurveTo(314.6, 207.1, 314.1, 205.3, 314.1, 200.4);
            a.bezierCurveTo(314.1, 196.7, 314.4, 194.6, 315.3, 193);
            a.bezierCurveTo(316, 191.7, 322.5, 181.6, 329.8, 170.6);
            a.bezierCurveTo(346.8, 144.8, 345.4, 145.8, 365.8, 144.4);
            a.bezierCurveTo(380.9, 143.4, 385.7, 143.7, 390.6, 146.3);
            a.bezierCurveTo(397.3, 149.8, 417.4, 164.4, 419.2, 167);
            a.bezierCurveTo(422.4, 171.8, 422.4, 171.8, 410.6, 234.4);
            a.bezierCurveTo(402.3,
                278.6, 399.3, 293.2, 398.1, 295.3);
            a.bezierCurveTo(395.4, 300.1, 393.7, 300.5, 373, 300.9);
            a.bezierCurveTo(363.1, 301.1, 354.2, 301, 353.2, 300.7);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(6.2, 259.9);
            a.bezierCurveTo(4.9, 259.2, 3.2, 257.8, 2.4, 256.8);
            a.bezierCurveTo(1, 254.9, 1, 254.8, 0.8, 148.7);
            a.bezierCurveTo(0.7, 74, 0.9, 40.8, 1.4, 36.7);
            a.bezierCurveTo(2.3, 29.6, 4.7, 24.4, 9.8, 18.3);
            a.bezierCurveTo(14.1, 13.1, 20.9, 7.3, 25, 5.3);
            a.bezierCurveTo(26.5, 4.6, 31, 3.3, 34.9, 2.6);
            a.bezierCurveTo(41.3,
                1.3, 44.2, 1.2, 68.5, 1.4);
            a.lineTo(95.1, 1.6);
            a.lineTo(99, 3.5);
            a.bezierCurveTo(101.2, 4.6, 103.9, 6.6, 105.2, 8.1);
            a.bezierCurveTo(107.7, 11, 153.1, 88.2, 155.8, 94);
            a.bezierCurveTo(159.1, 101.4, 159.6, 104.7, 159.5, 121.6);
            a.bezierCurveTo(159.5, 147.8, 158.4, 177.2, 157.3, 181);
            a.bezierCurveTo(156.8, 182.8, 155.6, 186.1, 154.6, 188.1);
            a.bezierCurveTo(152.6, 192.2, 119.5, 237.2, 115.1, 241.8);
            a.bezierCurveTo(112.1, 244.9, 106.3, 248.3, 102, 249.4);
            a.bezierCurveTo(99.2, 250.1, 13, 261.1, 10.1, 261.1);
            a.bezierCurveTo(9.2, 261.1, 7.5, 260.6, 6.2,
                259.9);
            a.closePath();
            a.fillStyle = "rgba(200,200,200,1)";
            a.fill();
            a.beginPath();
            a.moveTo(234.1, 183.4);
            a.bezierCurveTo(180.2, 179.7, 182.3, 180, 179.5, 174.5);
            a.lineTo(178, 171.4);
            a.lineTo(178.7, 142.4);
            a.bezierCurveTo(179.4, 114.8, 179.5, 113.3, 180.9, 110.4);
            a.bezierCurveTo(183.5, 105, 182.7, 105.2, 237.9, 95.3);
            a.bezierCurveTo(285.1, 86.7, 287.9, 86.3, 291, 87.1);
            a.bezierCurveTo(292.8, 87.6, 295.3, 88.8, 296.7, 89.9);
            a.bezierCurveTo(299.1, 91.8, 321.9, 124.4, 325, 130.3);
            a.bezierCurveTo(326.9, 134, 327.2, 139.1, 325.7, 142.6);
            a.bezierCurveTo(324.5,
                145.5, 302.5, 179.1, 300.2, 181.5);
            a.bezierCurveTo(297, 184.9, 293.5, 186.3, 287.4, 186.5);
            a.bezierCurveTo(284.4, 186.6, 260.4, 185.2, 234.1, 183.4);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(435.8, 153.4);
            a.bezierCurveTo(434.8, 153.1, 433, 152.3, 431.7, 151.6);
            a.bezierCurveTo(428.4, 150, 410.1, 137.1, 407, 134.4);
            a.bezierCurveTo(404.1, 131.8, 402.7, 128.3, 403.2, 125.1);
            a.bezierCurveTo(403.6, 122.9, 420.3, 81.3, 423, 75.9);
            a.bezierCurveTo(424.7, 72.6, 426.6, 70.4, 429.3, 68.9);
            a.bezierCurveTo(431.1, 67.9,
                435, 67.7, 462.2, 67.6);
            a.lineTo(493.1, 67.3);
            a.lineTo(495.4, 69.6);
            a.bezierCurveTo(497, 71.3, 497.8, 72.8, 498.1, 75);
            a.bezierCurveTo(498.4, 76.6, 498.5, 92.9, 498.4, 111.1);
            a.bezierCurveTo(498.2, 141.2, 498.1, 144.3, 497, 146.3);
            a.bezierCurveTo(494.8, 150.3, 493.3, 150.6, 470.3, 152.4);
            a.bezierCurveTo(448.6, 154, 438.8, 154.3, 435.8, 153.4);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(346.6, 125.3);
            a.bezierCurveTo(345, 124.5, 342.6, 122.6, 341.4, 121);
            a.bezierCurveTo(337.1, 115.7, 313, 79.8, 311.6, 76.7);
            a.bezierCurveTo(309.4, 71.7, 309.3, 68, 311.2, 58.2);
            a.bezierCurveTo(319.2, 16.9, 321.3, 7.1, 322.4, 5.2);
            a.bezierCurveTo(323.1, 4, 324.7, 2.4, 326, 1.6);
            a.bezierCurveTo(328.3, 0.3, 329.4, 0.3, 353.9, 0.3);
            a.bezierCurveTo(379.2, 0.3, 379.5, 0.3, 382.4, 1.8);
            a.bezierCurveTo(384, 2.7, 386, 4.5, 386.9, 5.9);
            a.bezierCurveTo(388.6, 8.6, 405.1, 46.3, 407.2, 52.2);
            a.bezierCurveTo(408.7, 56.3, 408.8, 60.7, 407.7, 64.1);
            a.bezierCurveTo(407.3, 65.4, 402.2, 78.2, 396.3, 92.7);
            a.bezierCurveTo(382.6, 126.3, 384.1, 124.6, 366.6, 126);
            a.bezierCurveTo(353.4, 127.1,
                350, 127, 346.6, 125.3);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(179.2, 85.6);
            a.bezierCurveTo(175.7, 84.6, 171.9, 82, 170, 79.2);
            a.bezierCurveTo(167.2, 75.2, 130.6, 12.4, 129.3, 9.3);
            a.bezierCurveTo(128.2, 6.7, 128.1, 5.9, 128.8, 4.2);
            a.bezierCurveTo(130.5, 0, 125.2, 0.3, 211.7, 0);
            a.bezierCurveTo(255.3, -0.1, 292.2, 0, 293.9, 0.3);
            a.bezierCurveTo(297.7, 0.8, 301.1, 4, 301.8, 7.6);
            a.bezierCurveTo(302.3, 10.5, 293.9, 55.2, 291.9, 59.6);
            a.bezierCurveTo(290.4, 63, 286.1, 66.9, 282.3, 68.3);
            a.bezierCurveTo(279.6,
                69.3, 193.5, 85.1, 185.5, 86.1);
            a.bezierCurveTo(183.8, 86.3, 181, 86.1, 179.2, 85.6);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(431.9, 47.7);
            a.bezierCurveTo(428.7, 46.9, 426.4, 45.2, 424.6, 42.3);
            a.bezierCurveTo(421.8, 37.8, 409.2, 7.7, 409.2, 5.5);
            a.bezierCurveTo(409.2, 1.2, 408, 1.3, 451.6, 1.3);
            a.bezierCurveTo(495, 1.3, 494, 1.2, 496.1, 5.4);
            a.bezierCurveTo(497, 7.2, 497.2, 10.2, 497, 25.5);
            a.lineTo(496.8, 43.5);
            a.lineTo(494.9, 45.4);
            a.lineTo(493, 47.3);
            a.lineTo(474.8, 47.7);
            a.bezierCurveTo(450.1, 48.3,
                434.5, 48.3, 431.9, 47.7);
            a.closePath();
            a.fillStyle = "rgba(200,200,200,1)";
            a.fill();
            a.beginPath();
            a.moveTo(1.3, 511.9);
            a.lineTo(1.3, 514.3);
            a.lineTo(3.7, 514.3);
            a.bezierCurveTo(7.2, 514.4, 9.5, 515.5, 10.6, 517.6);
            a.bezierCurveTo(11.7, 519.8, 12.1, 522.7, 12, 526.3);
            a.lineTo(12, 591);
            a.lineTo(22.8, 591);
            a.lineTo(22.8, 553.2);
            a.lineTo(49.9, 553.2);
            a.lineTo(49.9, 548.5);
            a.lineTo(22.8, 548.5);
            a.lineTo(22.8, 516.7);
            a.lineTo(41.9, 516.7);
            a.bezierCurveTo(46.7, 516.7, 50.4, 517.8, 52.9, 520);
            a.bezierCurveTo(55.5, 522.2, 56.8, 525.7, 56.8,
                530.5);
            a.lineTo(59.2, 530.5);
            a.lineTo(59.2, 521.5);
            a.bezierCurveTo(59.3, 519, 58.7, 516.8, 57.3, 514.9);
            a.bezierCurveTo(55.9, 513, 53.1, 512, 49, 511.9);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(107.6, 562.8);
            a.bezierCurveTo(107.6, 569.9, 106.2, 575.7, 103.5, 580.3);
            a.bezierCurveTo(100.8, 584.8, 97.2, 587.2, 92.7, 587.4);
            a.bezierCurveTo(88.1, 587.2, 84.5, 584.8, 81.8, 580.3);
            a.bezierCurveTo(79.1, 575.7, 77.8, 569.9, 77.7, 562.8);
            a.bezierCurveTo(77.8, 555.8, 79.1, 550, 81.8, 545.4);
            a.bezierCurveTo(84.5,
                540.8, 88.1, 538.4, 92.7, 538.3);
            a.bezierCurveTo(97.2, 538.4, 100.8, 540.8, 103.5, 545.4);
            a.bezierCurveTo(106.2, 550, 107.6, 555.8, 107.6, 562.8);
            a.moveTo(66.3, 562.8);
            a.bezierCurveTo(66.4, 571.1, 68.7, 578, 73.2, 583.5);
            a.bezierCurveTo(77.8, 589.1, 84.2, 591.9, 92.7, 592.1);
            a.bezierCurveTo(101.1, 591.9, 107.6, 589.1, 112.1, 583.5);
            a.bezierCurveTo(116.7, 578, 118.9, 571.1, 119, 562.8);
            a.bezierCurveTo(118.9, 554.5, 116.7, 547.6, 112.1, 542.1);
            a.bezierCurveTo(107.6, 536.6, 101.1, 533.7, 92.7, 533.5);
            a.bezierCurveTo(84.2, 533.7, 77.8, 536.6, 73.2,
                542.1);
            a.bezierCurveTo(68.7, 547.6, 66.4, 554.5, 66.3, 562.8);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(161.5, 579.6);
            a.bezierCurveTo(160.3, 581.4, 158.9, 583.1, 157.2, 584.5);
            a.bezierCurveTo(155.4, 585.9, 153.1, 586.7, 150.1, 586.8);
            a.bezierCurveTo(147, 586.8, 144.4, 585.9, 142.2, 584);
            a.bezierCurveTo(140, 582.1, 138.9, 579.3, 138.8, 575.4);
            a.bezierCurveTo(138.8, 571.7, 140.5, 568.9, 143.8, 566.7);
            a.bezierCurveTo(147.2, 564.6, 151.9, 563.5, 157.9, 563.4);
            a.lineTo(161.5, 563.4);
            a.moveTo(172.3, 591);
            a.lineTo(172.3, 558.6);
            a.bezierCurveTo(172.1, 548.2, 169.9, 541.3, 165.8, 538);
            a.bezierCurveTo(161.7, 534.7, 156.9, 533.2, 151.3, 533.5);
            a.bezierCurveTo(147.6, 533.5, 144.1, 533.8, 140.8, 534.5);
            a.bezierCurveTo(137.4, 535.1, 135, 536.2, 133.4, 537.7);
            a.bezierCurveTo(131.9, 539.2, 131.1, 540.8, 130.7, 542.6);
            a.bezierCurveTo(130.4, 544.4, 130.3, 546.4, 130.4, 548.5);
            a.lineTo(135.8, 548.5);
            a.bezierCurveTo(136.7, 544.6, 138.3, 542, 140.5, 540.5);
            a.bezierCurveTo(142.8, 538.9, 145.6, 538.2, 148.9, 538.3);
            a.bezierCurveTo(152.6, 538.1, 155.6, 539.4,
                157.9, 542.2);
            a.bezierCurveTo(160.2, 545, 161.4, 550.5, 161.5, 558.6);
            a.lineTo(157.9, 558.6);
            a.bezierCurveTo(149.6, 558.5, 142.5, 559.7, 136.6, 562.1);
            a.bezierCurveTo(130.7, 564.5, 127.6, 568.9, 127.4, 575.4);
            a.bezierCurveTo(127.7, 581.8, 129.8, 586.3, 133.6, 588.7);
            a.bezierCurveTo(137.4, 591.1, 141.1, 592.3, 144.7, 592.1);
            a.bezierCurveTo(149.2, 592.1, 152.8, 591.3, 155.6, 590);
            a.bezierCurveTo(158.3, 588.6, 160.3, 587.1, 161.5, 585.6);
            a.lineTo(162.1, 585.6);
            a.lineTo(166.3, 591);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(200.3, 539.5);
            a.bezierCurveTo(199.8, 538, 198.7, 536.8, 197, 536);
            a.bezierCurveTo(195.4, 535.1, 193.1, 534.7, 190.2, 534.7);
            a.lineTo(179.4, 534.7);
            a.lineTo(179.4, 537.1);
            a.lineTo(181.8, 537.1);
            a.bezierCurveTo(185.3, 537.1, 187.6, 538.2, 188.7, 540.4);
            a.bezierCurveTo(189.8, 542.5, 190.3, 545.4, 190.2, 549.1);
            a.lineTo(190.2, 591);
            a.lineTo(200.9, 591);
            a.lineTo(200.9, 545.2);
            a.bezierCurveTo(202.4, 543.5, 204.2, 542, 206.2, 540.8);
            a.bezierCurveTo(208.3, 539.6, 210.5, 538.9, 212.9, 538.9);
            a.bezierCurveTo(215.9, 538.8, 218.3, 540, 219.9,
                542.5);
            a.bezierCurveTo(221.6, 544.9, 222.4, 549.1, 222.5, 555);
            a.lineTo(222.5, 591);
            a.lineTo(233.2, 591);
            a.lineTo(233.2, 555);
            a.bezierCurveTo(233.3, 553.8, 233.2, 552.3, 233.2, 550.6);
            a.bezierCurveTo(233.1, 549, 232.9, 547.6, 232.6, 546.7);
            a.bezierCurveTo(233.9, 544.8, 235.7, 543, 238, 541.4);
            a.bezierCurveTo(240.4, 539.8, 242.7, 539, 245.2, 538.9);
            a.bezierCurveTo(248.2, 538.8, 250.6, 540, 252.3, 542.5);
            a.bezierCurveTo(253.9, 544.9, 254.8, 549.1, 254.8, 555);
            a.lineTo(254.8, 591);
            a.lineTo(265.6, 591);
            a.lineTo(265.6, 555);
            a.bezierCurveTo(265.4,
                546.5, 263.8, 540.8, 260.6, 537.8);
            a.bezierCurveTo(257.4, 534.7, 253.4, 533.3, 248.8, 533.5);
            a.bezierCurveTo(245.4, 533.5, 242.2, 534.2, 238.9, 535.7);
            a.bezierCurveTo(235.7, 537.1, 233, 539.2, 230.9, 541.9);
            a.bezierCurveTo(229.3, 538.6, 227.3, 536.4, 224.8, 535.2);
            a.bezierCurveTo(222.3, 534, 219.5, 533.4, 216.5, 533.5);
            a.bezierCurveTo(212.9, 533.6, 209.8, 534.2, 207.1, 535.4);
            a.bezierCurveTo(204.5, 536.5, 202.4, 537.9, 200.9, 539.5);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(284, 511.9);
            a.bezierCurveTo(279.9,
                512, 277.2, 513, 275.8, 514.9);
            a.bezierCurveTo(274.4, 516.8, 273.7, 519, 273.8, 521.5);
            a.lineTo(273.8, 530.5);
            a.lineTo(276.2, 530.5);
            a.bezierCurveTo(276.3, 525.7, 277.6, 522.2, 280.1, 520);
            a.bezierCurveTo(282.7, 517.8, 286.4, 516.7, 291.2, 516.7);
            a.lineTo(302, 516.7);
            a.lineTo(302, 590.9);
            a.lineTo(312.7, 590.9);
            a.lineTo(312.7, 516.7);
            a.lineTo(339.7, 516.7);
            a.lineTo(339.7, 511.9);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(349.4, 590.9);
            a.lineTo(360.2, 590.9);
            a.lineTo(360.2, 546.7);
            a.bezierCurveTo(361.4,
                544.8, 363, 543.4, 364.9, 542.3);
            a.bezierCurveTo(366.9, 541.2, 369.1, 540.7, 371.5, 540.7);
            a.bezierCurveTo(373.7, 540.7, 375.5, 541, 377.2, 541.6);
            a.bezierCurveTo(378.9, 542.2, 380.2, 543.1, 381.1, 544.3);
            a.lineTo(385.9, 540.7);
            a.bezierCurveTo(385.3, 539.5, 384.7, 538.4, 384, 537.5);
            a.bezierCurveTo(383.4, 536.6, 382.6, 535.9, 381.7, 535.3);
            a.bezierCurveTo(380.8, 534.7, 379.7, 534.2, 378.3, 533.9);
            a.bezierCurveTo(377, 533.6, 375.8, 533.5, 374.5, 533.5);
            a.bezierCurveTo(370.9, 533.6, 367.9, 534.3, 365.5, 535.7);
            a.bezierCurveTo(363.2, 537, 361.4,
                538.5, 360.2, 540.1);
            a.lineTo(359.6, 540.1);
            a.bezierCurveTo(359, 538.3, 357.9, 536.9, 356.3, 536);
            a.bezierCurveTo(354.6, 535.1, 352.4, 534.7, 349.4, 534.7);
            a.lineTo(339.8, 534.7);
            a.lineTo(339.8, 537.1);
            a.lineTo(341, 537.1);
            a.bezierCurveTo(344.5, 537.1, 346.8, 538.2, 347.9, 540.4);
            a.bezierCurveTo(349, 542.5, 349.5, 545.4, 349.4, 549.1);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(440.3, 559.8);
            a.bezierCurveTo(440.3, 551.4, 438.3, 544.9, 434.4, 540.4);
            a.bezierCurveTo(430.4, 535.8, 424.4, 533.5, 416.3, 533.5);
            a.bezierCurveTo(408.8, 533.7, 403, 536.6, 399, 542.1);
            a.bezierCurveTo(395, 547.6, 393, 554.5, 393, 562.8);
            a.bezierCurveTo(393, 571.1, 395.1, 578, 399.3, 583.5);
            a.bezierCurveTo(403.5, 589.1, 409.7, 591.9, 418.1, 592.1);
            a.bezierCurveTo(422.6, 592.2, 426.7, 591.2, 430.2, 589.2);
            a.bezierCurveTo(433.8, 587.2, 437, 584, 439.7, 579.6);
            a.lineTo(437.3, 577.8);
            a.bezierCurveTo(435.2, 580.8, 432.9, 583.1, 430.2, 584.8);
            a.bezierCurveTo(427.6, 586.5, 424.4, 587.3, 420.5, 587.4);
            a.bezierCurveTo(415.4, 587.2, 411.4, 585.1, 408.6, 580.9);
            a.bezierCurveTo(405.8,
                576.8, 404.4, 571.3, 404.4, 564.6);
            a.lineTo(440, 564.6);
            a.moveTo(404.4, 559.8);
            a.bezierCurveTo(404.4, 553.7, 405.6, 548.7, 407.9, 544.9);
            a.bezierCurveTo(410.3, 541, 413.3, 539, 416.9, 538.9);
            a.bezierCurveTo(421.1, 538.9, 424.3, 540.8, 426.4, 544.4);
            a.bezierCurveTo(428.4, 548.1, 429.5, 553.2, 429.5, 559.8);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill();
            a.beginPath();
            a.moveTo(497.1, 559.8);
            a.bezierCurveTo(497.1, 551.4, 495.1, 544.9, 491.2, 540.4);
            a.bezierCurveTo(487.2, 535.8, 481.2, 533.5, 473.1, 533.5);
            a.bezierCurveTo(465.6, 533.7,
                459.9, 536.6, 455.9, 542.1);
            a.bezierCurveTo(451.9, 547.6, 449.8, 554.5, 449.8, 562.8);
            a.bezierCurveTo(449.8, 571.1, 451.9, 578, 456.1, 583.5);
            a.bezierCurveTo(460.3, 589.1, 466.6, 591.9, 474.9, 592.1);
            a.bezierCurveTo(479.4, 592.2, 483.5, 591.2, 487.1, 589.2);
            a.bezierCurveTo(490.6, 587.2, 493.8, 584, 496.5, 579.6);
            a.lineTo(494.1, 577.8);
            a.bezierCurveTo(492, 580.8, 489.7, 583.1, 487.1, 584.8);
            a.bezierCurveTo(484.4, 586.5, 481.2, 587.3, 477.3, 587.4);
            a.bezierCurveTo(472.2, 587.2, 468.2, 585.1, 465.4, 580.9);
            a.bezierCurveTo(462.6, 576.8, 461.2, 571.3,
                461.2, 564.6);
            a.lineTo(496.8, 564.6);
            a.moveTo(461.2, 559.8);
            a.bezierCurveTo(461.2, 553.7, 462.4, 548.7, 464.8, 544.9);
            a.bezierCurveTo(467.1, 541, 470.1, 539, 473.7, 538.9);
            a.bezierCurveTo(477.9, 538.9, 481.1, 540.8, 483.2, 544.4);
            a.bezierCurveTo(485.3, 548.1, 486.3, 553.2, 486.3, 559.8);
            a.closePath();
            a.fillStyle = "rgba(220,20,3,1)";
            a.fill()
        }
    };
    Sa.yc = {
        width: 498,
        height: 592
    };

    function Ta(a, l) {
        function h(a, b, c, d) {
            null === a && c.clearRect(0, 0, J, L);
            var e, f = Array(S.length);
            for (e = S.length - 1; 0 <= e; e--) f[e] = S[e].qa(c, d);
            for (e = S.length - 1; 0 <= e; e--) f[e] && S[e].W(c, d);
            E.Hc([c, z], function(d) {
                var e;
                if (null !== a) {
                    c.save();
                    c.globalCompositeOperation = "destination-out";
                    c.fillStyle = c.strokeStyle = "rgba(255, 255, 255, 1)";
                    for (e = a.length - 1; 0 <= e; e--) {
                        var g = a[e],
                            k = g.n;
                        k && (c.save(), c.beginPath(), g.Rb(c), ga.je(c, k), c.fill(), g = t.kb * Math.pow(t.Qa, g.R - 1), 0 < g && (c.lineWidth = g / 2, c.stroke()), c.restore())
                    }
                    c.restore()
                }
                d =
                    d.scale;
                if (0 !== b.length) {
                    e = {};
                    for (k = S.length - 1; 0 <= k; k--) S[k].Mg(e);
                    for (g = Z.length - 1; 0 <= g; g--)
                        if (k = Z[g], e[k.id])
                            for (var h = k.$d, k = 0; k < b.length; k++) {
                                var l = b[k];
                                !l.parent || l.parent.Ba && l.parent.M ? h(l, d) : l.ba.clear()
                            }
                }
                for (e = S.length - 1; 0 <= e; e--) g = S[e], f[e] && g.ce(b, c, d)
            });
            for (e = S.length - 1; 0 <= e; e--) f[e] && S[e].Ca(c);
            t.od && (c.canvas.style.opacity = 0.99, setTimeout(function() {
                c.canvas.style.opacity = 1
            }, 1))
        }

        function f(a) {
            q === w ? a < 0.9 * n && (q = s, x = y, m()) : a >= n && (q = w, x = B, m())
        }

        function c() {
            function a(b, c, d) {
                b.Ab = Math.floor(1E3 *
                    b.scale) - d * c;
                0 < b.opacity && !b.open && c++;
                var e = b.e;
                if (e)
                    for (var f = e.length - 1; 0 <= f; f--) b.$ && a(e[f], c, d)
            }
            var b = null,
                c = null,
                e = null;
            E.Hc([], function(g) {
                f(g.scale);
                var h = !1;
                $.F(F, function(a) {
                    a.$ && (h = a.Kd() || h, a.lc(), a.Ua = U.d(a) || a.Ua)
                });
                h && (F.I = !0);
                var l = "onSurfaceDirty" === t.mh;
                $.ud(F, function(a) {
                    a.parent && a.parent.Z && (a.ba.clear(), a.Ua = !0, l || (a.Dc = !0, a.Zb.clear()));
                    l && (a.Dc = !0, a.Zb.clear())
                });
                var m = g.scale * g.scale;
                $.ud(F, function(a) {
                    if (a.M) {
                        for (var b = a.e, c = 0; c < b.length; c++)
                            if (5 < b[c].K.ja * m) {
                                a.X = !0;
                                return
                            } a.X = !1
                    }
                });
                k(g);
                e = [];
                $.Jc(F, function(a) {
                    if (a.parent.X && a.ea && a.$) {
                        e.push(a);
                        for (var b = a.parent; b !== F && (b.open || 0 === b.opacity);) b = b.parent;
                        b !== F && 0.02 > Math.abs(b.scale - a.scale) && (a.scale = Math.min(a.scale, b.scale))
                    }
                });
                a(F, 0, "flattened" == t.$a ? -1 : 1);
                e.sort(function(a, b) {
                    return a.Ab - b.Ab
                });
                if (d()) b = e, c = null;
                else {
                    var p = {},
                        n = {},
                        q = "none" != t.zd && t.kb < t.lb / 2,
                        r = t.kb < t.Pc / 2 + t.yd * t.Ye.a;
                    $.F(F, function(a) {
                        if (a.$ && !a.description && (a.Z || a.I || a.Wc && a.parent.X && a.Ua)) {
                            var b, c, d = [a],
                                e = a.C || a.parent.e;
                            if (q)
                                for (b = 0; b < e.length; b++)(c =
                                    e[b]) && d.push(c);
                            else if (r)
                                if (!a.selected && a.Za) {
                                    c = !0;
                                    for (b = 0; b < e.length; b++) e[b] ? d.push(e[b]) : c = !1;
                                    !c && 1 < a.R && d.push(a.parent)
                                } else
                                    for (b = 0; b < e.length; b++)(c = e[b]) && c.selected && d.push(c);
                            var f;
                            for (b = a.parent; b != F;) b.selected && (f = b), b = b.parent;
                            f && d.push(f);
                            for (b = 0; b < d.length; b++) {
                                f = d[b];
                                for (a = f.parent; a && a !== F;) 0 < a.opacity && (f = a), a = a.parent;
                                n[f.id] = !0;
                                $.Ea(f, function(a) {
                                    p[a.id] = !0
                                })
                            }
                        }
                    });
                    b = e.filter(function(a) {
                        return p[a.id]
                    });
                    c = b.filter(function(a) {
                        return n[a.id]
                    })
                }
            });
            (function() {
                var a = !1;
                t.Zf && $.F(F,
                    function(b) {
                        if (b.$ && 0 !== b.sa.a && 1 !== b.sa.a) return a = !0, !1
                    });
                a ? ($.Ic(F, function(a) {
                    if (a.$ && (a.opacity !== a.$c || a.La)) {
                        var b = a.e;
                        if (b) {
                            for (var c = 0, d = b.length - 1; 0 <= d; d--) c = Math.max(c, b[d].Vc);
                            a.Vc = c + a.opacity * a.sa.a
                        } else a.Vc = a.opacity * a.sa.a
                    }
                }), $.F(F, function(a) {
                    if (a.$ && (a.opacity !== a.$c || a.La)) {
                        for (var b = a.Vc, c = a;
                             (c = c.parent) && c !== F;) b += c.opacity * c.sa.a * t.Xf;
                        a.pd = 0 < b ? 1 - Math.pow(1 - a.sa.a, 1 / b) : 0;
                        a.$c = a.opacity
                    }
                })) : $.F(F, function(a) {
                    a.$ && (a.pd = 1, a.$c = -1)
                })
            })();
            return {
                ug: b,
                tg: c,
                ea: e
            }
        }

        function d() {
            var a =
                F.Z || F.I || "none" == t.ff;
            if (!a && !F.empty()) {
                var b = F.e[0].scale;
                $.F(F, function(c) {
                    if (c.$ && c.ea && c.scale !== b) return a = !0, !1
                })
            }!a && 0 < t.Se && 1 != t.Ta && $.F(F, function(b) {
                if (b.$ && 0 < b.ka) return a = !0, !1
            });
            "accurate" == t.ff && (a = (a = a || 0 === t.kb) || "none" != t.zd && t.kb < t.lb / 2, !a && t.kb < t.Pc / 2 + t.yd * t.Ye.a && $.F(F, function(b) {
                if (b.$ && (b.selected && !b.Za || !b.selected && b.Za)) return a = !0, !1
            }));
            return a
        }

        function g() {
            if (t.o !== t.wb) return !0;
            var a = "polygonPlainFill polygonPlainStroke polygonGradientFill polygonGradientStroke labelPlainFill contentDecoration".split(" ");
            $.F(F, function(b) {
                if (b.$ && b.U) return a.push("polygonExposureShadow"), !1
            });
            for (var b = a.length - 1; 0 <= b; b--) {
                var c = a[b];
                if (!!I[c] !== !!K[c]) return !0
            }
            return !1
        }

        function m() {
            function a(c, d, e, f, g) {
                function k(a, b, c, d, e) {
                    a[d] && (b -= c * r[d], a[d] = !1, e && (b += c * r[e], a[e] = !0));
                    return b
                }
                c = H.extend({}, c);
                switch (e) {
                    case "never":
                        c.labelPlainFill = !1;
                        break;
                    case "always":
                    case "auto":
                        c.labelPlainFill = !0
                }
                if (t.Nc) switch (f) {
                    case "never":
                        c.contentDecoration = !1;
                        break;
                    case "always":
                    case "auto":
                        c.contentDecoration = !0
                } else c.contentDecoration = !1;
                var h = 0;
                H.Fa(c, function(a, b) {
                    a && (h += d * r["contentDecoration" === b ? "labelPlainFill" : b])
                });
                c.polygonExposureShadow = b;
                h += 2 * r.polygonExposureShadow;
                if (h <= g || (h = k(c, h, 2, "polygonExposureShadow")) <= g || (h = k(c, h, d, "polygonGradientFill", "polygonPlainFill")) <= g || (h = k(c, h, d, "polygonGradientStroke")) <= g || (h = k(c, h, d, "polygonPlainStroke")) <= g || "auto" === f && (h = k(c, h, d, "contentDecoration")) <= g) return c;
                "auto" === e && (h = k(c, h, d, "labelPlainFill"));
                return c
            }
            var b = q === s,
                c = 0,
                d = 0;
            $.Ie(F, function(a) {
                var b = 1;
                $.F(a, function() {
                    b++
                });
                c += b;
                d = Math.max(d, b)
            });
            var e = {};
            switch (t.vh) {
                case "plain":
                    e.polygonPlainFill = !0;
                    break;
                case "gradient":
                    e.polygonPlainFill = !b, e.polygonGradientFill = b
            }
            switch (t.zd) {
                case "plain":
                    e.polygonPlainStroke = !0;
                    break;
                case "gradient":
                    e.polygonPlainStroke = !b, e.polygonGradientStroke = b
            }
            I = a(e, c, t.Cj, t.Aj, t.Bj);
            K = a(e, 2 * d, "always", "always", t.fh);
            D = a(e, c, "always", "always", t.eh)
        }

        function e(a) {
            return function(b, c) {
                return b === q ? !0 === I[a] : !0 === (c ? K : D)[a]
            }
        }

        function b(a, b) {
            return function(c, d) {
                return a(c, d) && b(c, d)
            }
        }

        function k(a) {
            F.ea = !0;
            $.ud(F, function(b) {
                if (b.$ && b.X && b.Ba && b.M && (F.I || b.Z || b.ke)) {
                    b.ke = !1;
                    var c = b.e,
                        d = {
                            x: 0,
                            y: 0,
                            f: 0,
                            i: 0
                        },
                        e = !!b.u;
                    if (1 < J / a.f) {
                        var f;
                        for (f = c.length - 1; 0 <= f; f--) c[f].ea = !1;
                        if (b.ea && e)
                            for (f = c.length - 1; 0 <= f; f--)
                                if (b = c[f], 1 !== b.scale && (b.sc(a, d), d.f = a.f / b.scale, d.i = a.i / b.scale), !1 === b.ea && b.n) {
                                    var e = b.n,
                                        g = e.length;
                                    if (T.fb(b.n, 1 === b.scale ? a : d)) b.ea = !0;
                                    else
                                        for (var k = 0; k < g; k++)
                                            if (T.Kg(e[k], e[(k + 1) % g], 1 === b.scale ? a : d)) {
                                                b.ea = !0;
                                                b.C && (b = b.C[k]) && (c[b.index].ea = !0);
                                                break
                                            }
                                }
                    } else
                        for (f = 0; f < c.length; f++) c[f].ea = e
                }
            })
        }
        var n = v.pf() ? 50 : 1E4,
            r, p, q, s, w, u, x, y, B, A, z, J, L, P, U = new Ua(a),
            Q = new Va(a),
            E, V, N, t = a.options,
            F, G, I, D, K;
        a.c.j("stage:initialized", function(a, b, c, d) {
            P = a;
            J = c;
            L = d;
            p = P.mc("wireframe", t.wb, !1);
            s = p.getContext("2d");
            w = new fa(s);
            u = P.mc("hifi", t.o, !1);
            y = u.getContext("2d");
            B = new fa(y);
            q = s;
            x = y;
            s.o = t.wb;
            w.o = t.wb;
            y.o = t.o;
            B.o = t.o;
            A = P.mc("tmp", Math.max(t.o, t.wb), !0);
            z = A.getContext("2d");
            z.o = 1;
            [s, y, z].forEach(function(a) {
                a.scale(a.o, a.o)
            })
        });
        a.c.j("stage:resized", function(a, b, c, d) {
            J = c;
            L = d;
            [s, y, z].forEach(function(a) {
                a.scale(a.o,
                    a.o)
            })
        });
        a.c.j("model:loaded", function(b) {
            function c(a) {
                var b = 0;
                if (!a.empty()) {
                    for (var d = a.e, e = d.length - 1; 0 <= e; e--) b = Math.max(b, c(d[e]));
                    b += 1
                }
                return a.lg = b
            }
            F = b;
            G = !0;
            c(F);
            m();
            a.c.p("render:renderers:resolved", I, K, D)
        });
        var O = "groupFillType groupStrokeType wireframeDrawMaxDuration wireframeLabelDrawing wireframeContentDecorationDrawing finalCompleteDrawMaxDuration finalIncrementalDrawMaxDuration groupContentDecorator".split(" "),
            R = ["groupLabelLightColor", "groupLabelDarkColor", "groupLabelColorThreshold",
                "groupUnexposureLabelColorThreshold"
            ];
        a.c.j("options:changed", function(a) {
            function b(a, c, d, e) {
                P.cj(a, d);
                c.o = d;
                e && c.scale(d, d)
            }
            a.dataObject || (H.mb(a, O) && m(), H.mb(a, R) && $.F(F, function(a) {
                a.wd = -1
            }));
            var c = H.Q(a, "pixelRatio");
            a = H.Q(a, "wireframePixelRatio");
            if (c || a) c && b(u, x, t.o, !0), a && b(p, q, t.wb, !0), b(A, z, Math.max(t.o, t.wb), !1)
        });
        a.c.j("zoom:initialized", function(a) {
            E = a
        });
        a.c.j("timeline:initialized", function(a) {
            V = a
        });
        a.c.j("api:initialized", function(a) {
            N = a
        });
        var Z = [{
                id: "offsetPolygon",
                $d: function(a) {
                    if ((0 <
                        a.opacity && (!1 === a.open || !0 === a.selected) || !a.X) && a.ba.Ma()) {
                        var b = a.ba;
                        b.clear();
                        if (a.aa) {
                            var c = a.aa,
                                d = t.hh;
                            0 < d ? (d = Math.min(1, d * Math.pow(1 - t.ih * d, a.lg)), ga.oj(b, c, a.parent.K.Mb / 32, d)) : ga.je(b, c)
                        }
                        a.Td = !0
                    }
                }
            }, {
                id: "label",
                $d: function(a) {
                    a.Ua && a.Wc && U.k(a)
                }
            }, {
                id: "custom",
                $d: function(b, c) {
                    if (b.aa && (0 < b.opacity && (!1 === b.open || !0 === b.selected) || !b.X) && b.Dc && a.options.Nc && !b.na) {
                        var d = {};
                        N.md(d, b);
                        N.nd(d, b);
                        N.ld(d, b, !0);
                        d.context = b.Zb;
                        d.polygonContext = b.ba;
                        d.labelContext = b.Sc;
                        d.shapeDirty = b.Td;
                        d.viewportScale =
                            c;
                        var e = {
                            groupLabelDrawn: !0,
                            groupPolygonDrawn: !0
                        };
                        a.options.lh(a.Sd, d, e);
                        e.groupLabelDrawn || (b.qf = !1);
                        e.groupPolygonDrawn || (b.Ud = !1);
                        b.Td = !1;
                        b.Dc = !1
                    }
                }
            }].reverse(),
            S = [new function(a) {
                var b = Array(a.length);
                this.ce = function(c, d, e) {
                    if (0 !== c.length) {
                        var f, g, k = [],
                            h = c[0].Ab;
                        for (f = 0; f < c.length; f++) g = c[f], g.Ab !== h && (k.push(f), h = g.Ab);
                        k.push(f);
                        for (var l = h = 0; l < k.length; l++) {
                            for (var m = k[l], p = a.length - 1; 0 <= p; p--)
                                if (b[p]) {
                                    var n = a[p];
                                    d.save();
                                    for (f = h; f < m; f++) g = c[f], d.save(), g.Rb(d), n.ub.call(n, g, d, e), d.restore();
                                    n.gb.call(n, d, e);
                                    d.restore()
                                } h = m
                        }
                    }
                };
                this.qa = function(c, d) {
                    for (var e = !1, f = a.length - 1; 0 <= f; f--) b[f] = a[f].qa(c, d), e |= b[f];
                    return e
                };
                this.W = function(c, d) {
                    for (var e = a.length - 1; 0 <= e; e--)
                        if (b[e]) {
                            var f = a[e];
                            f.W.call(f, c, d)
                        }
                };
                this.Ca = function(c) {
                    for (var d = a.length - 1; 0 <= d; d--)
                        if (b[d]) {
                            var e = a[d];
                            e.Ca.call(e, c)
                        }
                };
                this.Mg = function(c) {
                    for (var d = a.length - 1; 0 <= d; d--) {
                        var e = a[d];
                        if (b[d])
                            for (var f = e.Ya.length - 1; 0 <= f; f--) c[e.Ya[f]] = !0
                    }
                }
            }([{
                Ya: ["offsetPolygon"],
                qa: e("polygonExposureShadow"),
                W: function(a) {
                    z.save();
                    z.scale(a.o, a.o)
                },
                Ca: function() {
                    z.restore()
                },
                d: function() {},
                gb: function(a) {
                    this.kg && (this.kg = !1, a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(A, 0, 0, a.canvas.width, a.canvas.height, 0, 0, a.canvas.width, a.canvas.height), a.restore(), z.save(), z.setTransform(1, 0, 0, 1, 0, 0), z.clearRect(0, 0, A.width, A.height), z.restore())
                },
                ub: function(a, b, c) {
                    if (!(a.open && a.X || a.ba.Ma())) {
                        var d = t.Se * a.opacity * a.ka * ("flattened" == t.$a ? 1 - a.parent.ka : (1 - a.Jb) * a.parent.Jb) * (1.1 <= t.Ta ? 1 : (t.Ta - 1) / 0.1);
                        0 < d && (z.save(), z.beginPath(),
                            a.Rb(z), a.ba.Ra(z), z.shadowBlur = c * b.o * d, z.shadowColor = t.nh, z.fillStyle = "rgba(0, 0, 0, 1)", z.globalCompositeOperation = "source-over", z.globalAlpha = a.opacity, z.fill(), z.shadowBlur = 0, z.shadowColor = "transparent", z.globalCompositeOperation = "destination-out", z.fill(), z.restore(), this.kg = !0)
                    }
                }
            }, {
                Ya: ["offsetPolygon"],
                qa: function() {
                    return !0
                },
                W: function() {
                    function a(b) {
                        var d = b.sa,
                            e = b.Cb,
                            f = b.selected,
                            g = c(d.l * b.va + (e ? t.Ah : 0) + (f ? t.Rh : 0)),
                            k = c(d.s * b.wa + (e ? t.Bh : 0) + (f ? t.Sh : 0));
                        b = b.Re;
                        b.h = (d.h + (e ? t.zh : 0) + (f ? t.Qh : 0)) %
                            360;
                        b.s = k;
                        b.l = g;
                        return b
                    }

                    function c(a) {
                        return 100 < a ? 100 : 0 > a ? 0 : a
                    }
                    var d = [{
                            type: "fill",
                            qa: e("polygonPlainFill"),
                            fd: function(b, c) {
                                c.fillStyle = W.pe(a(b))
                            }
                        }, {
                            type: "fill",
                            qa: e("polygonGradientFill"),
                            fd: function(b, d) {
                                var e = b.K.Mb,
                                    f = a(b),
                                    e = d.createRadialGradient(b.x, b.y, 0, b.x, b.y, e * t.rh);
                                e.addColorStop(0, W.Y((f.h + t.oh) % 360, c(f.s + t.qh), c(f.l + t.ph)));
                                e.addColorStop(1, W.Y((f.h + t.sh) % 360, c(f.s + t.uh), c(f.l + t.th)));
                                b.ba.Ra(d);
                                d.fillStyle = e
                            }
                        }, {
                            type: "stroke",
                            qa: b(e("polygonPlainStroke"), function() {
                                return 0 < t.lb
                            }),
                            fd: function(a, b) {
                                var d = a.sa,
                                    e = a.Cb,
                                    f = a.selected;
                                b.strokeStyle = W.Y((d.h + t.bf + (e ? t.Te : 0) + (f ? t.Ze : 0)) % 360, c(d.s * a.wa + t.df + (e ? t.Ve : 0) + (f ? t.af : 0)), c(d.l * a.va + t.cf + (e ? t.Ue : 0) + (f ? t.$e : 0)));
                                b.lineWidth = t.lb * Math.pow(t.Qa, a.R - 1)
                            }
                        }, {
                            type: "stroke",
                            qa: b(e("polygonGradientStroke"), function() {
                                return 0 < t.lb
                            }),
                            fd: function(a, b) {
                                var d = a.K.Mb * t.Yh,
                                    e = a.sa,
                                    f = Math.PI * t.Uh / 180,
                                    d = b.createLinearGradient(a.x + d * Math.cos(f), a.y + d * Math.sin(f), a.x + d * Math.cos(f + Math.PI), a.y + d * Math.sin(f + Math.PI)),
                                    g = a.Cb,
                                    k = a.selected,
                                    f = (e.h + t.bf +
                                        (g ? t.Te : 0) + (k ? t.Ze : 0)) % 360,
                                    h = c(e.s * a.wa + t.df + (g ? t.Ve : 0) + (k ? t.af : 0)),
                                    e = c(e.l * a.va + t.cf + (g ? t.Ue : 0) + (k ? t.$e : 0));
                                d.addColorStop(0, W.Y((f + t.Vh) % 360, c(h + t.Xh), c(e + t.Wh)));
                                d.addColorStop(1, W.Y((f + t.Zh) % 360, c(h + t.ai), c(e + t.$h)));
                                b.strokeStyle = d;
                                b.lineWidth = t.lb * Math.pow(t.Qa, a.R - 1)
                            }
                        }],
                        f = Array(d.length);
                    return function(a, b) {
                        for (var c = d.length - 1; 0 <= c; c--) f[c] = d[c].qa(a, b);
                        this.sj = d;
                        this.Vg = f
                    }
                }(),
                Ca: function() {},
                d: function() {},
                gb: function() {},
                ub: function(a, b) {
                    if (a.Ud && !((0 === a.opacity || a.open) && a.X || a.ba.Ma() ||
                        !t.Ee && a.description)) {
                        var c = this.sj,
                            d = this.Vg;
                        b.beginPath();
                        a.ba.Ra(b);
                        for (var e = !1, f = !1, g = c.length - 1; 0 <= g; g--) {
                            var k = c[g];
                            if (d[g]) switch (k.fd(a, b), k.type) {
                                case "fill":
                                    e = !0;
                                    break;
                                case "stroke":
                                    f = !0
                            }
                        }
                        c = (a.X ? a.opacity : 1) * a.sa.a;
                        d = !a.empty();
                        g = t.Zf ? a.pd : 1;
                        e && (e = d && a.X && a.M && a.e[0].$ ? 1 - a.e.reduce(function(a, b) {
                            return a + b.ua * b.Xd
                        }, 0) / a.e.length * (1 - t.Xf) : 1, b.globalAlpha = c * e * g, Wa(b));
                        f && (b.globalAlpha = c * (d ? t.ti : 1) * g, b.closePath(), Xa(b), b.stroke())
                    }
                }
            }, {
                Ya: ["offsetPolygon"],
                qa: function() {
                    return 0 < t.Pc
                },
                W: function() {},
                Ca: function() {},
                d: function() {},
                gb: function() {},
                ub: function(a, b, c) {
                    if (a.Ud && a.selected && !a.ba.Ma()) {
                        b.globalAlpha = a.Ka;
                        b.beginPath();
                        var d = Math.pow(t.Qa, a.R - 1);
                        b.lineWidth = t.Pc * d;
                        b.strokeStyle = t.Th;
                        var e = t.yd;
                        0 < e && (b.shadowBlur = e * d * c * b.o, b.shadowColor = t.Xe);
                        a.ba.Ra(b);
                        b.closePath();
                        b.stroke()
                    }
                }
            }, {
                Ya: [],
                qa: function() {
                    return !0
                },
                W: function() {},
                Ca: function() {},
                d: function() {},
                gb: function() {},
                ub: function(a, b) {
                    function c(d) {
                        var e = Sa.yc.width,
                            f = Sa.yc.height,
                            g = T.te(a.aa, a.K, e / f),
                            g = Math.min(Math.min(0.9 * g, 0.5 *
                                a.q.i) / f, 0.5 * a.q.f / e);
                        b.save();
                        b.translate(a.x, a.y);
                        b.globalAlpha = a.opacity * a.fa;
                        b.scale(g, g);
                        b.translate(-e / 2, -f / 2);
                        d(b);
                        b.restore()
                    }
                    a.na && !a.ba.Ma() && c(function(a) {
                        Sa.Eg(a)
                    })
                }
            }, {
                Ya: [],
                qa: function(a, b) {
                    return function(c, d) {
                        return a(c, d) || b(c, d)
                    }
                }(e("labelPlainFill"), b(e("contentDecoration"), function() {
                    return t.Nc
                })),
                W: function() {},
                Ca: function() {},
                d: function() {},
                gb: function() {},
                ub: function(a, b, c) {
                    (0 < a.opacity && 0 < a.fa && !a.open || !a.X) && !a.ba.Ma() && (a.Tc = a.ra && a.ra.la && t.o * a.ra.fontSize * a.scale * c >= t.Nh,
                        !t.Ee && a.description ? a.pb = a.parent.pb : "auto" === a.Ed ? (b = a.Re, c = b.h + (b.s << 9) + (b.l << 16), a.wd !== c && (a.pb = W.Ag(b) > (0 > a.ka ? t.bi : t.Ch) ? t.Dh : t.Mh, a.wd = c)) : a.pb = a.Ed)
                }
            }, {
                Ya: ["custom"],
                qa: b(e("contentDecoration"), function() {
                    return t.Nc
                }),
                W: function() {},
                Ca: function() {},
                d: function() {},
                gb: function() {},
                ub: function(a, b) {
                    !(0 < a.opacity && 0 < a.fa && !a.open || !a.X) || a.Zb.Ma() || a.ba.Ma() || !a.Tc && void 0 !== a.ra || (b.globalAlpha = a.fa * (a.X ? a.opacity : 1) * (a.empty() ? 1 : t.Yf), b.fillStyle = a.pb, b.strokeStyle = a.pb, a.Zb.Ra(b))
                }
            }, {
                Ya: ["label"],
                qa: e("labelPlainFill"),
                W: function() {},
                Ca: function() {},
                d: function() {},
                gb: function() {},
                ub: function(a, b, c) {
                    if (a.qf && a.Wc && (0 < a.opacity && 0 < a.fa && !a.open || !a.X) && !a.ba.Ma() && a.ra)
                        if (b.fillStyle = a.pb, b.globalAlpha = a.fa * (a.X ? a.opacity : 1) * (a.empty() ? 1 : t.Yf), a.Tc) Ya(a, b, c);
                        else {
                            var d = a.K.Mb;
                            c = d / 15;
                            var e = 0.5 * d / 15,
                                d = d / 5,
                                f = a.K.x;
                            a = a.K.y;
                            b.fillRect(f - e, a - e, c, c);
                            b.fillRect(f - e - d, a - e, c, c);
                            b.fillRect(f - e + d, a - e, c, c)
                        }
                }
            }].reverse())];
        this.H = function() {
            r = ua.hi(function() {
                return ha.bh()
            }, "CarrotSearchFoamTree", 12096E5)($a());
            Q.H()
        };
        this.clear = function() {
            q.clearRect(0, 0, J, L);
            x.clearRect(0, 0, J, L)
        };
        this.ce = function() {
            function a() {
                window.clearTimeout(b);
                b = setTimeout(function() {
                    if (g()) {
                        var a = !d();
                        h(null, e.ea, x, a);
                        H.defer(function() {
                            ba.pj()
                        })
                    }
                }, Math.max(t.Dj, 3 * l.pg.Hd, 3 * l.pg.Gd))
            }
            var b, e;
            return function(b) {
                ab(Q);
                e = c();
                var d = null !== e.tg,
                    f = 0 < P.ic("hifi"),
                    g = f && (d || !b);
                b = d || G || !b;
                G = !1;
                f && !g && ba.qj();
                h(e.tg, e.ug, g ? x : q, b);
                $.Ea(F, function(a) {
                    a.Z = !1;
                    a.I = !1;
                    a.Za = !1
                });
                g || a();
                t.Tf(d)
            }
        }();
        this.d = function(a) {
            a = a || {};
            ab(Q);
            F.I = !0;
            var b =
                    c(),
                d = t.o;
            try {
                var e = H.B(a.pixelRatio, t.o);
                t.o = e;
                var f = P.mc("export", e, !0),
                    g = f.getContext("2d");
                q === w && (g = new fa(g));
                g.scale(e, e);
                var k = H.Q(a, "backgroundColor");
                k && (g.save(), g.fillStyle = a.backgroundColor, g.fillRect(0, 0, J, L), g.restore());
                h(k ? [] : null, b.ug, g, !0)
            } finally {
                t.o = d
            }
            return f.toDataURL(H.B(a.format, "image/png"), H.B(a.quality, 0.8))
        };
        var ba = function() {
            function a(b, d, e, f) {
                function g(a, b, c, d) {
                    return V.D.m({
                        opacity: P.ic(a)
                    }).ia({
                        duration: c,
                        G: {
                            opacity: {
                                end: b,
                                P: d
                            }
                        },
                        ca: function() {
                            P.ic(a, this.opacity)
                        }
                    }).xa()
                }
                var k = H.Cd(P.ic(b), 1),
                    h = H.Cd(P.ic(e), 0);
                if (!k || !h) {
                    for (var l = c.length - 1; 0 <= l; l--) c[l].stop();
                    c = [];
                    k || c.push(g(b, 1, d, Y.Pb));
                    h || c.push(g(e, 0, f, Y.mg));
                    return V.D.m({}).Wa(c).start()
                }
            }
            var b, c = [];
            return {
                qj: function() {
                    t.od ? 1 !== p.style.opacity && (p.style.visibility = "visible", u.style.visibility = "hidden", p.style.opacity = 1, u.style.opacity = 0) : b && b.Eb() || (b = a("wireframe", t.Ne, "hifi", t.Ne))
                },
                pj: function() {
                    t.od ? (u.style.visibility = "visible", p.style.visibility = "hidden", p.style.opacity = 0, u.style.opacity = 1) : a("hifi",
                        t.wg, "wireframe", t.wg)
                }
            }
        }();
        ab = function(a) {
            a.apply()
        };
        Wa = function(a) {
            a.fill()
        };
        Xa = function(a) {
            a.stroke()
        };
        return this
    }
    var Wa, Xa, ab;

    function Ua(a) {
        function l(a) {
            return f.Lh ? (e.fontFamily = c.fontFamily, e.fontStyle = c.fontStyle, e.fontVariant = c.fontVariant, e.fontWeight = c.fontWeight, e.lineHeight = c.lineHeight, e.horizontalPadding = c.nb, e.verticalPadding = c.cb, e.maxTotalTextHeight = c.rb, e.maxFontSize = c.qb, g.Bc(f.Kh, a, e), d.fontFamily = e.fontFamily, d.fontStyle = e.fontStyle, d.fontVariant = e.fontVariant, d.fontWeight = e.fontWeight, d.lineHeight = e.lineHeight, d.nb = e.horizontalPadding, d.cb = e.verticalPadding, d.rb = e.maxTotalTextHeight, d.qb = e.maxFontSize,
                d) : c
        }

        function h(a) {
            "undefined" !== typeof a.groupLabelFontFamily && (c.fontFamily = a.groupLabelFontFamily);
            "undefined" !== typeof a.groupLabelFontStyle && (c.fontStyle = a.groupLabelFontStyle);
            "undefined" !== typeof a.groupLabelFontVariant && (c.fontVariant = a.groupLabelFontVariant);
            "undefined" !== typeof a.groupLabelFontWeight && (c.fontWeight = a.groupLabelFontWeight);
            "undefined" !== typeof a.groupLabelLineHeight && (c.lineHeight = a.groupLabelLineHeight);
            "undefined" !== typeof a.groupLabelHorizontalPadding && (c.nb = a.groupLabelHorizontalPadding);
            "undefined" !== typeof a.groupLabelVerticalPadding && (c.cb = a.groupLabelVerticalPadding);
            "undefined" !== typeof a.groupLabelMaxTotalHeight && (c.rb = a.groupLabelMaxTotalHeight);
            "undefined" !== typeof a.groupLabelMaxFontSize && (c.qb = a.groupLabelMaxFontSize)
        }
        var f = a.options,
            c = {},
            d = {},
            g, m = {
                groupLabel: ""
            },
            e = {};
        a.c.j("api:initialized", function(a) {
            g = a
        });
        a.c.j("options:changed", h);
        h(a.Sd);
        this.d = function(a) {
            if (!a.aa) return !1;
            var c = a.group.label;
            f.Fh && !a.na && (m.labelText = c, g.Bc(f.Eh, a, m), c = m.labelText);
            a.rf = c;
            return a.Fd !=
                c
        };
        this.k = function(a) {
            var c = a.rf;
            a.Fd = c;
            a.Sc.clear();
            a.ra = void 0;
            !a.aa || H.kf(c) || "flattened" == f.$a && !a.empty() && a.M || (a.ra = M.ye(l(a), a.Sc, c, a.aa, a.q, a.K, !1, !1, a.ji, a.K.ja, f.Oh, a.Ua));
            a.Ua = !1
        };
        Ya = this.A = function(a, c) {
            a.Sc.Ra(c)
        }
    }
    var Ya;

    function Va(a) {
        function l(a, c) {
            var d = a.e,
                e = d.length,
                f, g, h = m.K.Mb;
            for (f = 0; f < e; f++) g = d[f], g.Bb = (180 * (Math.atan2(g.x - a.x, g.y - a.y) + c) / Math.PI + 180) / 360, g.Mc = Math.min(1, Math.sqrt(T.d(g, a)) / h)
        }

        function h(a, c) {
            var d = a.e,
                e = d.length;
            if (1 === e || 2 === e && d[0].description) d[0].Bb = 0.5;
            else {
                var f, g, h = 0,
                    l = Number.MAX_VALUE,
                    m = Math.sin(c),
                    x = Math.cos(c);
                for (f = 0; f < e; f++) {
                    g = d[f];
                    var y = g.x * m + g.y * x;
                    h < y && (h = y);
                    l > y && (l = y);
                    g.Bb = y;
                    g.Mc = 1
                }
                for (f = 0; f < e; f++) g = d[f], g.Bb = (g.Bb - l) / (h - l)
            }
        }

        function f(a, c, d, e) {
            c = c[e];
            return c + (d[e] - c) * a
        }
        var c = {
                radial: l,
                linear: h
            },
            d = a.options,
            g, m, e = {
                groupColor: null,
                labelColor: null
            };
        a.c.j("model:loaded", function(a) {
            m = a
        });
        a.c.j("api:initialized", function(a) {
            g = a
        });
        this.H = function() {};
        this.apply = function() {
            function a(c) {
                if (c.M && c.Ba) {
                    var h = c.e,
                        l, m;
                    if (c.Z || c.La || w) {
                        0 === c.R ? n(c, d.Si * Math.PI / 180) : r(c, d.Wi * Math.PI / 180);
                        for (l = h.length - 1; 0 <= l; l--) {
                            m = h[l];
                            m.La = !0;
                            var J = m.Bb,
                                L, P, U, Q, E = m.Qe;
                            0 === c.R ? (L = f(J, p, q, "h"), P = (x + (1 - x) * m.Mc) * f(J, p, q, "s"), U = (1 + (0 > m.ka ? u * (m.ka + 1) : u) * (1 - m.Mc)) * f(J, p, q, "l"), Q = f(J, p, q, "a")) : (U =
                                c.sa, L = U.h, P = U.s, U = k(U.l, J, d.Xi, d.Yi), Q = c.Qe.a);
                            E.h = L;
                            E.s = P;
                            E.l = U;
                            E.a = Q;
                            L = m.sa;
                            m.na ? (L.h = 0, L.s = 0, L.l = "light" == d.Rg ? 90 : 10, L.a = 1) : (L.h = E.h, L.s = E.s, L.l = E.l, L.a = E.a);
                            w && !m.na && (e.groupColor = L, e.labelColor = "auto", g.Bc(s, m, e, function(a) {
                                a.ratio = J
                            }), m.sa = W.Ha(e.groupColor), m.sa.a = H.Q(e.groupColor, "a") ? e.groupColor.a : 1, "auto" !== e.labelColor && (m.Ed = W.Lg(e.labelColor)))
                        }
                        c.La = !1
                    }
                    for (l = h.length - 1; 0 <= l; l--) a(h[l])
                }
            }

            function k(a, b, c, d) {
                var e = 0 > a + c * d ? 0 : 100 < a + c * d ? 100 : a + c * d;
                return e + b * ((0 > a - c * (1 - d) ? 0 : 100 < a - c * (1 - d) ?
                    100 : a - c * (1 - d)) - e)
            }
            var n = c[d.Ri] || l,
                r = h,
                p = d.aj,
                q = d.Ui,
                s = d.jh,
                w = d.kh,
                u = d.Vi,
                x = d.Zi;
            a(m)
        };
        return this
    };

    function Ga() {
        this.uc = this.ne = this.pc = this.og = this.f = this.vg = this.T = this.y = this.x = this.id = 0;
        this.n = this.parent = this.e = null;
        this.q = {
            x: 0,
            y: 0,
            f: 0,
            i: 0
        };
        this.C = null;
        this.Fd = this.rf = void 0;
        this.jd = !1;
        this.Mc = this.Bb = 0;
        this.Qe = {
            h: 0,
            s: 0,
            l: 0,
            a: 0,
            model: "hsla"
        };
        this.sa = {
            h: 0,
            s: 0,
            l: 0,
            a: 0,
            model: "hsla"
        };
        this.Re = {
            h: 0,
            s: 0,
            l: 0,
            model: "hsl"
        };
        this.wd = -1;
        this.Ed = "auto";
        this.pb = "#000";
        this.lg = this.R = this.Bd = this.index = 0;
        this.na = !1;
        this.ja = this.vf = 0;
        this.ea = !1;
        this.aa = null;
        this.K = {
            x: 0,
            y: 0,
            ja: 0,
            Mb: 0
        };
        this.Vd = this.u = null;
        this.Wc = this.$ = this.Za = this.Dc = this.ke = this.Td = this.Ua = this.La = this.I = this.Z = this.Pa = this.Ba = this.M = this.Oa = !1;
        this.wa = this.va = this.Ka = this.fa = this.opacity = this.scale = 1;
        this.ua = 0;
        this.Xd = 1;
        this.Jb = this.ka = this.Fb = 0;
        this.description = this.selected = this.Cb = this.Rd = this.open = this.U = !1;
        this.Ab = 0;
        this.qf = this.Ud = this.X = !0;
        this.ra = void 0;
        this.Tc = !1;
        this.Sc = new da;
        this.ba = new da;
        this.Zb = new da;
        this.ji = M.vi();
        this.Vc = 0;
        this.pd = 1;
        this.$c = -1;
        this.empty = function() {
            return !this.e || 0 === this.e.length
        };
        var a = [];
        this.Ac =
            function(c) {
                a.push(c)
            };
        this.dd = function(c) {
            H.ag(a, c)
        };
        var l = {
            scale: 1
        };
        this.Kd = function() {
            var c = !1;
            this.scale = 1;
            for (var d = 0; d < a.length; d++) c = a[d].sf(this, l) || c, this.scale *= l.scale;
            return c
        };
        this.Rb = function(c) {
            for (var d = 0; d < a.length; d++) a[d].Rb(this, c)
        };
        this.rc = function(c, d) {
            d.x = c.x;
            d.y = c.y;
            for (var f = 0; f < a.length; f++) a[f].rc(this, d, d);
            return d
        };
        this.sc = function(c, d) {
            d.x = c.x;
            d.y = c.y;
            for (var f = 0; f < a.length; f++) a[f].sc(this, d, d);
            return d
        };
        var h = [];
        this.yb = function(a) {
            h.push(a)
        };
        this.cd = function(a) {
            H.ag(h,
                a)
        };
        var f = {
            opacity: 1,
            wa: 1,
            va: 1,
            fa: 1,
            Ka: 1
        };
        this.lc = function() {
            if (0 !== h.length) {
                this.Ka = this.fa = this.va = this.wa = this.opacity = 1;
                for (var a = h.length - 1; 0 <= a; a--)(0, h[a])(this, f), this.opacity *= f.opacity, this.va *= f.va, this.wa *= f.wa, this.fa *= f.fa, this.Ka *= f.Ka
            }
        }
    }

    function Oa(a, l) {
        return l.T > a.T ? 1 : l.T < a.T ? -1 : a.index - l.index
    };

    function bb(a) {
        var l = this,
            h, f, c, d, g = a.options,
            m, e;
        a.c.j("stage:initialized", function(b, e, m, r) {
            c = m;
            d = r;
            h = b.mc("titlebar", g.o, !1);
            f = h.getContext("2d");
            f.o = g.o;
            f.scale(f.o, f.o);
            a.c.p("titlebar:initialized", l)
        });
        a.c.j("stage:resized", function(a, e, g, h) {
            c = g;
            d = h;
            f.scale(f.o, f.o)
        });
        a.c.j("zoom:initialized", function(a) {
            e = a
        });
        a.c.j("api:initialized", function(a) {
            m = a
        });
        a.c.j("model:loaded", function() {
            f.clearRect(0, 0, c, d)
        });
        this.update = function(a) {
            f.clearRect(0, 0, c, d);
            if (a) {
                !a.empty() && a.e[0].description && (a =
                    a.e[0]);
                var k = g.xj,
                    h = g.wj,
                    l = Math.min(d / 2, g.le + 2 * k),
                    p = l - 2 * k,
                    q = c - 2 * h;
                if (!(0 >= p || 0 >= q)) {
                    var s = a.Tc ? a.ra.fontSize * a.scale * e.scale() : 0,
                        w, u = {
                            titleBarText: a.Fd,
                            titleBarTextColor: g.sg,
                            titleBarBackgroundColor: g.rg,
                            titleBarMaxFontSize: g.le,
                            titleBarShown: s < g.oi
                        };
                    a.na ? w = xa.ig("B`ssnu!Rd`sbi!Gn`lUsdd!whrt`mh{`uhno/!Bmhbj!uid!mnfn!un!fn!un!iuuq;..b`ssnurd`sbi/bnl.gn`lusdd!gns!lnsd!edu`hmr/") : (m.Bc(g.tj, a, u, function(a) {
                        a.titleBarWidth = q;
                        a.titleBarHeight = p;
                        a.labelFontSize = s;
                        a.viewportScale = e.scale()
                    }), w = u.titleBarText);
                    w && 0 !== w.length && u.titleBarShown && (a = e.oe(a.rc(a, {}), {}).y > d / 2, k = {
                        x: h,
                        y: a ? k : d - l + k,
                        f: q,
                        i: p
                    }, h = T.A(k), f.fillStyle = g.rg, f.fillRect(0, a ? 0 : d - l, c, l), f.fillStyle = g.sg, M.Me({
                        fontFamily: g.uj || g.Gh,
                        fontStyle: g.Vj || g.Hh,
                        fontWeight: g.Xj || g.Jh,
                        fontVariant: g.Wj || g.Ih,
                        qb: g.le,
                        Xc: g.vj,
                        nb: 0,
                        cb: 0,
                        rb: 1
                    }, f, w, h, k, {
                        x: k.x + k.f / 2,
                        y: k.y + k.i / 2
                    }, !0, !0).la || f.clearRect(0, 0, c, d))
                }
            }
        }
    };

    function cb(a) {
        function l(a, b, c) {
            u = !0;
            k && k.stop();
            r && r.stop();
            return g(e.reset(a), b, c).N(function() {
                u = !1
            })
        }

        function h(b) {
            e.update(b);
            s.I = !0;
            a.c.p("foamtree:dirty", !0)
        }

        function f(a, b) {
            return e.d((0 !== e.k() ? 0.35 : 1) * a, (0 !== e.A() ? 0.35 : 1) * b)
        }

        function c() {
            if (1 === b.Nb) {
                var a = Math.round(1E4 * e.k()) / 1E4;
                0 !== a && (n.Yd = a, k = w.D.tc(n).ia({
                    duration: 500,
                    G: {
                        x: {
                            start: a,
                            end: 0,
                            P: Y.Pb
                        }
                    },
                    ca: function() {
                        e.d(n.x - n.Yd, 0);
                        h(1);
                        n.Yd = n.x
                    }
                }).start())
            }
        }

        function d() {
            if (1 === b.Nb) {
                var a = Math.round(1E4 * e.A()) / 1E4;
                0 !== a && (p.Zd = a, r = w.D.tc(p).ia({
                    duration: 500,
                    G: {
                        y: {
                            start: a,
                            end: 0,
                            P: Y.Pb
                        }
                    },
                    ca: function() {
                        e.d(0, p.y - p.Zd);
                        h(1);
                        p.Zd = p.y
                    }
                }).start())
            }
        }

        function g(a, c, d) {
            return a ? w.D.tc(b).ia({
                duration: void 0 === c ? 700 : c,
                G: {
                    Nb: {
                        start: 0,
                        end: 1,
                        P: d || Y.ng
                    }
                },
                ca: function() {
                    h(b.Nb)
                }
            }).ab() : (new X).J().L()
        }

        function m(a) {
            return function() {
                return u ? (new X).J().L() : a.apply(this, arguments)
            }
        }
        var e = new oa(a),
            b = {
                Nb: 1
            },
            k, n = {
                Fe: 0,
                x: 0,
                Yd: 0
            },
            r, p = {
                Ge: 0,
                y: 0,
                Zd: 0
            },
            q = this,
            s, w, u = !1;
        a.c.j("model:loaded", function(a) {
            s = a;
            e.reset(!1);
            e.update(1)
        });
        a.c.j("timeline:initialized", function(a) {
            w =
                a
        });
        this.H = function() {
            a.c.p("zoom:initialized", this)
        };
        this.reset = function(a, b) {
            e.Ob(1);
            return l(!0, a, b)
        };
        this.normalize = m(function(a, b) {
            e.Fc(1) ? l(!1, a, b) : q.wf()
        });
        this.wf = function() {
            c();
            d()
        };
        this.k = m(function(a, b, c, d) {
            return q.qc(a.q, b, c, d)
        });
        this.Wb = m(function(a, b, c, d) {
            return g(e.Wb(a, b), c, d)
        });
        this.qc = m(function(a, b, c, d) {
            return g(e.qc(a, b), c, d)
        });
        this.yj = m(function(a, b) {
            e.qc(a, b) && h(1)
        });
        this.qi = m(function(a, c) {
            1 === b.Nb && f(a, c) && h(1)
        });
        this.Pg = m(function(a, b) {
            e.Wb(a, b) && h(1)
        });
        this.Og = m(function(a,
                             b, c, d) {
            a = 0 | e.Wb(a, b);
            (a |= f(c, d)) && h(1)
        });
        this.ri = m(function(a, g, l) {
            1 === b.Nb && (k = w.D.tc(n).ia({
                duration: a / 0.03,
                G: {
                    Fe: {
                        start: g,
                        end: 0,
                        P: Y.Pb
                    }
                },
                ca: function() {
                    e.d(n.Fe, 0) && h(1);
                    c()
                }
            }).start(), r = w.D.tc(p).ia({
                duration: a / 0.03,
                G: {
                    Ge: {
                        start: l,
                        end: 0,
                        P: Y.Pb
                    }
                },
                ca: function() {
                    f(0, p.Ge) && h(1);
                    d()
                }
            }).start())
        });
        this.si = function() {
            k && 0 === e.k() && k.stop();
            r && 0 === e.A() && r.stop()
        };
        this.Hc = function(a, b) {
            e.Hc(a, b)
        };
        this.Ob = function(a) {
            return e.Ob(a)
        };
        this.Fc = function(a) {
            return e.Fc(a)
        };
        this.Pd = function() {
            return e.Pd()
        };
        this.absolute = function(a, b) {
            return e.absolute(a, b)
        };
        this.oe = function(a, b) {
            return e.oe(a, b)
        };
        this.scale = function() {
            return e.scale()
        };
        this.d = function(a) {
            return e.S(a)
        };
        this.content = function(a, b, c, d) {
            e.content(a, b, c, d)
        }
    };

    function db(a, l, h) {
        function f(a) {
            var b = [];
            $.F(n, function(c) {
                a(c) && b.push(c.group)
            });
            return {
                groups: b
            }
        }

        function c(a, b) {
            var c = k.options,
                d = c.hj,
                e = c.gj,
                c = c.de,
                f = 0 < d + e ? c : 0,
                g = [];
            Ca.Ja(a, Ca.ya(a, k.options.fe), function(a, c, h) {
                c = "groups" === k.options.ee ? h : c;
                a.e && (a = p.D.m(a).eb(f * (e + d * c)).call(b).xa(), g.push(a))
            });
            return p.D.m({}).Wa(g).ab()
        }

        function d(a) {
            R || (R = !0, r.d(function() {
                R = !1;
                k.c.p("repaint:before");
                B.ce(this.Ng)
            }, {
                Ng: a
            }))
        }

        function g() {
            function a(d, e) {
                var f = d.$;
                d.$ = e <= b;
                d.Wc = e <= c;
                d.$ != f && $.He(d, function(a) {
                    a.ke = !0
                });
                d.open || d.Sb || e++;
                if (f = d.e)
                    for (var g = 0; g < f.length; g++) a(f[g], e)
            }
            var b = k.options.Ld,
                c = Math.min(k.options.Ld, k.options.mi);
            a(n, 1)
        }

        function m() {
            var a = [],
                b = e();
            b.pi && k.c.p("model:childrenAttached", $.Kc(n));
            b.bj && y.complete(function(b) {
                K.ob(b);
                a.push(b)
            });
            for (b = 0; b < a.length; b++) {
                var c = a[b];
                c.Ba = !0;
                J.d(c)
            }
        }

        function e() {
            var a = k.options.Ld,
                b = !1,
                c = !1;
            w.scale();
            w.scale();
            for (var d = [n, 1]; 0 < d.length;) {
                var e = d.shift(),
                    f = d.shift(),
                    g = !e.na && f < a,
                    c = c || g;
                e.Oa = e.Oa || g;
                e.open || e.Sb || f++;
                var h = e.e;
                !h && g && (b = x.S(e) ||
                    b, h = e.e);
                if (h)
                    for (e = 0; e < h.length; e++) d.push(h[e], f)
            }
            return {
                pi: b,
                bj: c
            }
        }
        var b = this,
            k = {
                c: new wa,
                options: l,
                Sd: h
            },
            n, r = new aa,
            p = new ya(r),
            q = C.create(),
            s = new ia(k),
            w = new cb(k),
            u = new Ea(k),
            x = new Fa(k.options),
            y = new Pa(k),
            B = new Ta(k, r),
            A = new Ma(k);
        new bb(k);
        var z = new Ia(k),
            J = new Ja(k),
            L = new Ka(k),
            P = new La(k);
        k.c.j("stage:initialized", function(a, b, c, d) {
            t.gf(c, d)
        });
        k.c.j("stage:resized", function(a, b, c, d) {
            t.fj(a, b, c, d)
        });
        k.c.j("foamtree:attachChildren", m);
        k.c.j("openclose:changing", g);
        k.c.j("interaction:reset",
            function() {
                O(!0)
            });
        k.c.j("foamtree:dirty", d);
        this.H = function() {
            k.c.p("timeline:initialized", p);
            n = x.H();
            s.H(a);
            u.H();
            B.H();
            A.H();
            z.H();
            J.H();
            w.H();
            L.H();
            P.H()
        };
        this.jb = function() {
            p.d();
            D.stop();
            r.k();
            s.jb()
        };
        var U = "groupLabelFontFamily groupLabelFontStyle groupLabelFontVariant groupLabelFontWeight groupLabelLineHeight groupLabelHorizontalPadding groupLabelVerticalPadding groupLabelDottingThreshold groupLabelMaxTotalHeight groupLabelMinFontSize groupLabelMaxFontSize groupLabelDecorator".split(" "),
            Q = "rainbowColorDistribution rainbowLightnessDistribution rainbowColorDistributionAngle rainbowLightnessDistributionAngle rainbowColorModelStartPoint rainbowLightnessCorrection rainbowSaturationCorrection rainbowStartColor rainbowEndColor rainbowHueShift rainbowHueShiftCenter rainbowSaturationShift rainbowSaturationShiftCenter rainbowLightnessShift rainbowLightnessShiftCenter attributionTheme".split(" "),
            E = !1,
            V = ["groupBorderRadius", "groupBorderRadiusCorrection", "groupBorderWidth", "groupInsetWidth",
                "groupBorderWidthScaling"
            ],
            N = ["maxGroupLevelsDrawn", "maxGroupLabelLevelsDrawn"];
        this.Tb = function(a) {
            k.c.p("options:changed", a);
            H.mb(a, U) && $.F(n, function(a) {
                a.Ua = !0
            });
            H.mb(a, Q) && (n.La = !0);
            H.mb(a, V) && (E = !0);
            H.mb(a, N) && (g(), m())
        };
        this.reload = function() {
            F.reload()
        };
        this.Ub = function(a, b) {
            H.defer(function() {
                if (E) t.ki(a);
                else {
                    if (b)
                        for (var c = x.A(b), e = c.length - 1; 0 <= e; e--) c[e].I = !0;
                    else n.I = !0;
                    d(a)
                }
            })
        };
        this.Y = function() {
            s.k()
        };
        this.update = function() {
            x.update();
            t.zj()
        };
        this.reset = function() {
            return O(!1)
        };
        this.S =
            B.d;
        this.Aa = function() {
            var a = {};
            return function(b, c) {
                var d = x.d(b);
                return d ? u.ld(a, d, c) : null
            }
        }();
        this.ya = function() {
            var a = {};
            return function(b) {
                return (b = x.d(b)) ? u.nd(a, b) : null
            }
        }();
        this.fb = function() {
            var a = {};
            return function(b) {
                return (b = x.d(b)) ? u.md(a, b) : null
            }
        }();
        this.za = function() {
            var a = {};
            return function() {
                return w.d(a)
            }
        }();
        this.Vb = function() {
            this.A({
                groups: f(function(a) {
                    return a.group.selected
                }),
                newState: !0,
                keepPrevious: !1
            });
            this.k({
                groups: f(function(a) {
                    return a.group.open
                }),
                newState: !0,
                keepPrevious: !1
            });
            this.d({
                groups: f(function(a) {
                    return a.group.exposed
                }),
                newState: !0,
                keepPrevious: !1
            })
        };
        this.Ha = function() {
            return f(function(a) {
                return a.U
            })
        };
        this.d = function(a) {
            return F.submit(function() {
                return z.dc(x.k(a, "exposed", !1), !1, !0, !1)
            })
        };
        this.Ja = function() {
            return f(function(a) {
                return a.open
            })
        };
        this.k = function(a) {
            return F.submit(function() {
                return L.Ib(x.k(a, "open", !0), !1, !1)
            })
        };
        this.Xa = function() {
            return f(function(a) {
                return a.selected
            })
        };
        this.A = function(a) {
            return F.submit(function() {
                P.select(x.k(a, "selected",
                    !0), !1);
                return (new X).J().L()
            })
        };
        this.zc = function(a) {
            return (a = x.d(a)) ? a === n ? w.reset(l.wc, Y.pa(l.xc)) : w.k(a, l.Oc, l.wc, Y.pa(l.xc)) : (new X).J().L()
        };
        this.bb = function(a) {
            return A.fb[a]
        };
        this.yc = function() {
            var a = ca;
            return {
                frames: a.frames,
                totalTime: a.totalTime,
                lastFrameTime: a.Gd,
                lastInterFrameTime: a.Hd,
                fps: a.Pe
            }
        };
        var t = function() {
                function a(d, f) {
                    var g = d || c,
                        h = f || e;
                    c = g;
                    e = h;
                    var k = l.$b && l.$b.boundary;
                    k && 2 < k.length ? n.n = k.map(function(a) {
                        return {
                            x: g * a.x,
                            y: h * a.y
                        }
                    }) : n.n = [{
                        x: 0,
                        y: 0
                    }, {
                        x: g,
                        y: 0
                    }, {
                        x: g,
                        y: h
                    }, {
                        x: 0,
                        y: h
                    }];
                    b()
                }

                function b() {
                    n.Z = !0;
                    n.u = n.n;
                    n.q = T.q(n.n, n.q);
                    n.K = n;
                    T.se(n.n, n.K)
                }
                var c, e;
                return {
                    gf: a,
                    fj: function(b, c, e, f) {
                        K.stop();
                        var g = e / b,
                            h = f / c;
                        $.Ie(n, function(a) {
                            a.x = a.x * g + (Math.random() - 0.5) * e / 1E3;
                            a.y = a.y * h + (Math.random() - 0.5) * f / 1E3
                        });
                        a(e, f);
                        n.Pa = !0;
                        y.step(K.ob, !0, !1, function(a) {
                            var b = a.e;
                            if (b) {
                                y.Lb(a);
                                for (var c = b.length - 1; 0 <= c; c--) {
                                    var d = b[c];
                                    d.f = d.pc
                                }
                                a.Pa = !0
                            }
                        }) ? d(!1) : (y.oc(n), k.options.be ? (d(!1), D.bg(), D.ed()) : (y.complete(K.ob), n.La = !0, d(!1)))
                    },
                    ki: function(a) {
                        var c = !1;
                        n.empty() || (b(), D.Eb() || (c = y.step(K.ob,
                            !1, !1), d(a)));
                        return c
                    },
                    zj: function() {
                        $.Ea(n, function(a) {
                            a.empty() || y.Lb(a)
                        });
                        y.oc(n);
                        k.options.be ? (D.bg(), $.Ea(n, function(a) {
                            a.empty() || K.ef(a)
                        })) : ($.Ea(n, function(a) {
                            a.empty() || K.ob(n)
                        }), y.complete(K.ob), n.La = !0, d(!1))
                    }
                }
            }(),
            F = function() {
                function a() {
                    0 === l.Wd && w.reset(0);
                    k.options.Sf(l.$b);
                    t.gf();
                    x.Y(l.$b);
                    e();
                    g();
                    k.c.p("model:loaded", n, $.Kc(n));
                    var b;
                    n.empty() || (n.open = !0, n.Oa = !0, l.be ? b = D.ed() : (D.ui(), b = h()), d(), 0 < l.de ? (B.clear(), s.d(1)) : b = pa([b, f(1)]));
                    k.options.Rf(l.$b);
                    b && (k.options.Vf(), b.N(function() {
                        r.d(k.options.Uf)
                    }))
                }

                function d() {
                    var a = l.Sa,
                        c = l.ad;
                    l.Sa = 0;
                    l.ad = 0;
                    b.Vb();
                    l.Sa = a;
                    l.ad = c
                }

                function f(a, b) {
                    return 0 === l.Le || b ? (s.d(a), (new X).J().L()) : p.D.m({
                        opacity: s.d()
                    }).me(2).ia({
                        duration: l.Le,
                        G: {
                            opacity: {
                                end: a,
                                P: Y.pa(l.dh)
                            }
                        },
                        ca: function() {
                            s.d(this.opacity)
                        }
                    }).ab()
                }

                function h() {
                    $.Ea(n, function(a) {
                        a.Ba = !1
                    });
                    var a = new X,
                        b = new qa(a.J);
                    b.d();
                    n.Ba = !0;
                    J.d(n).N(b.k);
                    c(n, function Za() {
                        this.M && this.n && (this.Z = this.Ba = !0, b.d(), J.d(this).N(b.k), b.d(), c(this, Za).N(b.k))
                    });
                    return a.L()
                }

                function m() {
                    for (var a = 0; a < u.length; a++) {
                        var b =
                                u[a],
                            c = b.action();
                        H.Q(c, "then") ? c.N(b.Be.J) : b.Be.J()
                    }
                    u = []
                }
                var q = !1,
                    u = [];
                return {
                    reload: function() {
                        q || (n.empty() ? a() : (K.stop(), p.d(), D.stop(), q = !0, pa(0 < l.Wd ? [J.k(), O(!1)] : [f(0)]).N(function() {
                            f(0, !0);
                            q = !1;
                            a();
                            H.defer(m)
                        })))
                    },
                    submit: function(a) {
                        if (q) {
                            var b = new X;
                            u.push({
                                action: a,
                                Be: b
                            });
                            return b.L()
                        }
                        return a()
                    }
                }
            }(),
            G, I = new qa(function() {
                G.J()
            }),
            D = function() {
                function a() {
                    f || (I.A() && (G = new X), I.d(), b(), f = !0, r.repeat(e));
                    return G.L()
                }

                function b() {
                    g = q.now()
                }

                function e() {
                    var b = q.now() - g > l.ej,
                        b = y.step(function(b) {
                            b.Ba = !0;
                            K.ef(b);
                            I.d();
                            J.d(b).N(I.k);
                            I.d();
                            c(b, function() {
                                this.Oa = !0;
                                a()
                            }).N(I.k)
                        }, !0, b) || b;
                    d(!0);
                    b && (f = !1, I.k());
                    return b
                }
                var f = !1,
                    g;
                return {
                    ui: function() {
                        y.complete(K.ob)
                    },
                    ed: a,
                    bg: b,
                    Eb: function() {
                        return !I.A()
                    },
                    stop: function() {
                        r.cancel(e);
                        f = !1;
                        I.clear()
                    }
                }
            }(),
            K = function() {
                function a(b) {
                    var c = !b.empty();
                    b.Ba = !0;
                    if (c) {
                        for (var d = b.e, e = d.length - 1; 0 <= e; e--) {
                            var f = d[e];
                            f.f = f.pc
                        }
                        b.Pa = !0
                    }
                    return c
                }
                var b = [];
                return {
                    ef: function(c) {
                        var d = k.options,
                            e = d.xh;
                        0 < e ? Ca.Ja(c, Ca.ya(c, k.options.fe), function(a, c, f) {
                            c = "groups" ===
                            k.options.ee ? f : c;
                            I.d();
                            b.push(p.D.m(a).eb(c * d.wh * e).ia({
                                duration: e,
                                G: {
                                    f: {
                                        start: a.og,
                                        end: a.pc,
                                        P: Y.pa(d.yh)
                                    }
                                },
                                ca: function() {
                                    this.f = Math.max(0, this.f);
                                    this.parent.Pa = !0;
                                    D.ed()
                                }
                            }).hb(I.k).start())
                        }) : a(c) && D.ed()
                    },
                    ob: a,
                    stop: function() {
                        for (var a = b.length - 1; 0 <= a; a--) b[a].stop();
                        b = []
                    }
                }
            }(),
            O = function() {
                var a = !1;
                return function(b) {
                    if (a) return (new X).J().L();
                    a = !0;
                    var c = [];
                    c.push(w.reset(l.wc, Y.pa(l.xc)));
                    var d = new X;
                    z.dc({
                        e: [],
                        Ia: !1,
                        Ga: !1
                    }, b, !1, !0).N(function() {
                        L.Ib({
                            e: [],
                            Ia: !1,
                            Ga: !1
                        }, b, !1).N(d.J)
                    });
                    c.push(d.L());
                    return pa(c).N(function() {
                        a = !1;
                        b && l.Wf()
                    })
                }
            }(),
            R = !1
    }

    function $a() {
        return {
            version: "3.4.2",
            build: "16c31e9d27ffc454471a6ffc4cb8e64fc6286ae8/16c31e9d",
            brandingAllowed: !1
        }
    };
    v.Ad(function() {
        window.CarrotSearchFoamTree = function(a) {
            function l(a, b) {
                if (!m || m.exists(a)) switch (a) {
                    case "selection":
                        return k.Xa();
                    case "open":
                        return k.Ja();
                    case "exposure":
                        return k.Ha();
                    case "state":
                        return k.ya.apply(this, b);
                    case "geometry":
                        return k.Aa.apply(this, b);
                    case "hierarchy":
                        return k.fb.apply(this, b);
                    case "imageData":
                        return k.S.apply(this, b);
                    case "viewport":
                        return k.za();
                    case "times":
                        return k.yc();
                    case "onModelChanged":
                    case "onRedraw":
                    case "onRolloutStart":
                    case "onRolloutComplete":
                    case "onRelaxationStep":
                    case "onGroupHover":
                    case "onGroupOpenOrCloseChanging":
                    case "onGroupExposureChanging":
                    case "onGroupSelectionChanging":
                    case "onGroupSelectionChanged":
                    case "onGroupClick":
                    case "onGroupDoubleClick":
                    case "onGroupHold":
                        var c =
                            e[a];
                        return Array.isArray(c) ? c : [c];
                    default:
                        return e[a]
                }
            }

            function h(a) {
                function d(a, b) {
                    return H.Q(f, a) ? (b(f[a]), delete f[a], 1) : 0
                }
                var f;
                if (0 === arguments.length) return 0;
                1 === arguments.length ? f = H.extend({}, arguments[0]) : 2 === arguments.length && (f = {}, f[arguments[0]] = arguments[1]);
                m && m.validate(f, b.li);
                var g = 0;
                k && (g += d("selection", k.A), g += d("open", k.k), g += d("exposure", k.d));
                var h = {};
                H.Fa(f, function(a, b) {
                    if (e[b] !== a || H.hc(a)) h[b] = a, g++;
                    e[b] = a
                });
                0 < g && c(h);
                return g
            }

            function f(a, b) {
                var d = "on" + a.charAt(0).toUpperCase() +
                    a.slice(1),
                    f = e[d];
                e[d] = b(Array.isArray(f) ? f : [f]);
                f = {};
                f[d] = e[d];
                c(f)
            }

            function c(a) {
                (function() {
                    function c(b, d) {
                        return H.Q(a, b) || void 0 === d ? va.m(e[b], g) : d
                    }
                    b.li = e.logging;
                    b.$b = e.dataObject;
                    b.o = e.pixelRatio;
                    b.wb = e.wireframePixelRatio;
                    b.$a = e.stacking;
                    b.bc = e.descriptionGroupType;
                    b.Gc = e.descriptionGroupPosition;
                    b.$g = e.descriptionGroupDistanceFromCenter;
                    b.ac = e.descriptionGroupSize;
                    b.De = e.descriptionGroupMinHeight;
                    b.Ce = e.descriptionGroupMaxHeight;
                    b.Ee = e.descriptionGroupPolygonDrawn;
                    b.Uc = e.layout;
                    b.jc = e.layoutByWeightOrder;
                    b.rj = e.showZeroWeightGroups;
                    b.We = e.groupMinDiameter;
                    b.ae = e.rectangleAspectRatioPreference;
                    b.dj = e.initializer || e.relaxationInitializer;
                    b.ej = e.relaxationMaxDuration;
                    b.be = e.relaxationVisible;
                    b.$f = e.relaxationQualityThreshold;
                    b.Ph = e.groupResizingBudget;
                    b.xh = e.groupGrowingDuration;
                    b.wh = e.groupGrowingDrag;
                    b.yh = e.groupGrowingEasing;
                    b.hh = e.groupBorderRadius;
                    b.kb = e.groupBorderWidth;
                    b.Qa = e.groupBorderWidthScaling;
                    b.xd = e.groupInsetWidth;
                    b.ih = e.groupBorderRadiusCorrection;
                    b.lb = e.groupStrokeWidth;
                    b.Pc = e.groupSelectionOutlineWidth;
                    b.Th = e.groupSelectionOutlineColor;
                    b.yd = e.groupSelectionOutlineShadowSize;
                    b.Xe = e.groupSelectionOutlineShadowColor;
                    b.Qh = e.groupSelectionFillHueShift;
                    b.Sh = e.groupSelectionFillSaturationShift;
                    b.Rh = e.groupSelectionFillLightnessShift;
                    b.Ze = e.groupSelectionStrokeHueShift;
                    b.af = e.groupSelectionStrokeSaturationShift;
                    b.$e = e.groupSelectionStrokeLightnessShift;
                    b.vh = e.groupFillType;
                    b.rh = e.groupFillGradientRadius;
                    b.oh = e.groupFillGradientCenterHueShift;
                    b.qh = e.groupFillGradientCenterSaturationShift;
                    b.ph = e.groupFillGradientCenterLightnessShift;
                    b.sh = e.groupFillGradientRimHueShift;
                    b.uh = e.groupFillGradientRimSaturationShift;
                    b.th = e.groupFillGradientRimLightnessShift;
                    b.zd = e.groupStrokeType;
                    b.lb = e.groupStrokeWidth;
                    b.bf = e.groupStrokePlainHueShift;
                    b.df = e.groupStrokePlainSaturationShift;
                    b.cf = e.groupStrokePlainLightnessShift;
                    b.Yh = e.groupStrokeGradientRadius;
                    b.Uh = e.groupStrokeGradientAngle;
                    b.Zh = e.groupStrokeGradientUpperHueShift;
                    b.ai = e.groupStrokeGradientUpperSaturationShift;
                    b.$h = e.groupStrokeGradientUpperLightnessShift;
                    b.Vh = e.groupStrokeGradientLowerHueShift;
                    b.Xh = e.groupStrokeGradientLowerSaturationShift;
                    b.Wh = e.groupStrokeGradientLowerLightnessShift;
                    b.zh = e.groupHoverFillHueShift;
                    b.Bh = e.groupHoverFillSaturationShift;
                    b.Ah = e.groupHoverFillLightnessShift;
                    b.Te = e.groupHoverStrokeHueShift;
                    b.Ve = e.groupHoverStrokeSaturationShift;
                    b.Ue = e.groupHoverStrokeLightnessShift;
                    b.Ta = e.groupExposureScale;
                    b.nh = e.groupExposureShadowColor;
                    b.Se = e.groupExposureShadowSize;
                    b.Oc = e.groupExposureZoomMargin;
                    b.ci = e.groupUnexposureLightnessShift;
                    b.di = e.groupUnexposureSaturationShift;
                    b.bi =
                        e.groupUnexposureLabelColorThreshold;
                    b.Sa = e.exposeDuration;
                    b.ec = e.exposeEasing;
                    b.ad = e.openCloseDuration;
                    b.jh = va.m(e.groupColorDecorator, g);
                    b.kh = e.groupColorDecorator !== H.ta;
                    b.Eh = va.m(e.groupLabelDecorator, g);
                    b.Fh = e.groupLabelDecorator !== H.ta;
                    b.Kh = va.m(e.groupLabelLayoutDecorator, g);
                    b.Lh = e.groupLabelLayoutDecorator !== H.ta;
                    b.lh = va.m(e.groupContentDecorator, g);
                    b.Nc = e.groupContentDecorator !== H.ta;
                    b.mh = e.groupContentDecoratorTriggering;
                    b.$i = e.rainbowStartColor;
                    b.Ti = e.rainbowEndColor;
                    b.Ri = e.rainbowColorDistribution;
                    b.Si = e.rainbowColorDistributionAngle;
                    b.Wi = e.rainbowLightnessDistributionAngle;
                    b.Xi = e.rainbowLightnessShift;
                    b.Yi = e.rainbowLightnessShiftCenter;
                    b.Zi = e.rainbowSaturationCorrection;
                    b.Vi = e.rainbowLightnessCorrection;
                    b.Xf = e.parentFillOpacity;
                    b.ti = e.parentStrokeOpacity;
                    b.Yf = e.parentLabelOpacity;
                    b.Zf = e.parentOpacityBalancing;
                    b.Oh = e.groupLabelUpdateThreshold;
                    b.Gh = e.groupLabelFontFamily;
                    b.Hh = e.groupLabelFontStyle;
                    b.Ih = e.groupLabelFontVariant;
                    b.Jh = e.groupLabelFontWeight;
                    b.Nh = e.groupLabelMinFontSize;
                    b.Nj = e.groupLabelMaxFontSize;
                    b.Mj = e.groupLabelLineHeight;
                    b.Lj = e.groupLabelHorizontalPadding;
                    b.Pj = e.groupLabelVerticalPadding;
                    b.Oj = e.groupLabelMaxTotalHeight;
                    b.Dh = e.groupLabelDarkColor;
                    b.Mh = e.groupLabelLightColor;
                    b.Ch = e.groupLabelColorThreshold;
                    b.Bj = e.wireframeDrawMaxDuration;
                    b.Cj = e.wireframeLabelDrawing;
                    b.Aj = e.wireframeContentDecorationDrawing;
                    b.wg = e.wireframeToFinalFadeDuration;
                    b.Dj = e.wireframeToFinalFadeDelay;
                    b.eh = e.finalCompleteDrawMaxDuration;
                    b.fh = e.finalIncrementalDrawMaxDuration;
                    b.Ne = e.finalToWireframeFadeDuration;
                    b.od =
                        e.androidStockBrowserWorkaround;
                    b.ff = e.incrementalDraw;
                    b.ni = e.maxGroups;
                    b.Ld = e.maxGroupLevelsDrawn;
                    b.mi = e.maxGroupLabelLevelsDrawn;
                    b.fe = e.rolloutStartPoint;
                    b.ee = e.rolloutMethod;
                    b.ij = e.rolloutEasing;
                    b.de = e.rolloutDuration;
                    b.eg = e.rolloutScalingStrength;
                    b.gg = e.rolloutTranslationXStrength;
                    b.hg = e.rolloutTranslationYStrength;
                    b.dg = e.rolloutRotationStrength;
                    b.fg = e.rolloutTransformationCenter;
                    b.mj = e.rolloutPolygonDrag;
                    b.nj = e.rolloutPolygonDuration;
                    b.jj = e.rolloutLabelDelay;
                    b.kj = e.rolloutLabelDrag;
                    b.lj = e.rolloutLabelDuration;
                    b.hj = e.rolloutChildGroupsDrag;
                    b.gj = e.rolloutChildGroupsDelay;
                    b.Ki = e.pullbackStartPoint;
                    b.Ei = e.pullbackMethod;
                    b.Ai = e.pullbackEasing;
                    b.Sj = e.pullbackType;
                    b.Wd = e.pullbackDuration;
                    b.Ji = e.pullbackScalingStrength;
                    b.Mi = e.pullbackTranslationXStrength;
                    b.Ni = e.pullbackTranslationYStrength;
                    b.Ii = e.pullbackRotationStrength;
                    b.Li = e.pullbackTransformationCenter;
                    b.Fi = e.pullbackPolygonDelay;
                    b.Gi = e.pullbackPolygonDrag;
                    b.Hi = e.pullbackPolygonDuration;
                    b.Bi = e.pullbackLabelDelay;
                    b.Ci = e.pullbackLabelDrag;
                    b.Di = e.pullbackLabelDuration;
                    b.xi = e.pullbackChildGroupsDelay;
                    b.yi = e.pullbackChildGroupsDrag;
                    b.zi = e.pullbackChildGroupsDuration;
                    b.Le = e.fadeDuration;
                    b.dh = e.fadeEasing;
                    b.Ej = e.zoomMouseWheelFactor;
                    b.wc = e.zoomMouseWheelDuration;
                    b.xc = e.zoomMouseWheelEasing;
                    b.oi = e.maxLabelSizeForTitleBar;
                    b.uj = e.titleBarFontFamily;
                    b.rg = e.titleBarBackgroundColor;
                    b.sg = e.titleBarTextColor;
                    b.vj = e.titleBarMinFontSize;
                    b.le = e.titleBarMaxFontSize;
                    b.wj = e.titleBarTextPaddingLeftRight;
                    b.xj = e.titleBarTextPaddingTopBottom;
                    b.tj = e.titleBarDecorator;
                    b.Ij = e.attributionText;
                    b.Fj = e.attributionLogo;
                    b.Hj = e.attributionLogoScale;
                    b.Jj = e.attributionUrl;
                    b.we = e.attributionPosition;
                    b.Qg = e.attributionDistanceFromCenter;
                    b.Sg = e.attributionWeight;
                    b.Rg = e.attributionTheme;
                    b.hf = e.interactionHandler;
                    b.Sf = c("onModelChanging", b.Sf);
                    b.Rf = c("onModelChanged", b.Rf);
                    b.Tf = c("onRedraw", b.Tf);
                    b.Vf = c("onRolloutStart", b.Vf);
                    b.Uf = c("onRolloutComplete", b.Uf);
                    b.Qd = c("onRelaxationStep", b.Qd);
                    b.Wf = c("onViewReset", b.Wf);
                    b.Kf = c("onGroupOpenOrCloseChanging", b.Kf);
                    b.Jf = c("onGroupOpenOrCloseChanged", b.Jf);
                    b.Ef = c("onGroupExposureChanging", b.Ef);
                    b.Df = c("onGroupExposureChanged", b.Df);
                    b.Mf = c("onGroupSelectionChanging", b.Mf);
                    b.Lf = c("onGroupSelectionChanged", b.Lf);
                    b.Gf = c("onGroupHover", b.Gf);
                    b.yf = c("onGroupClick", b.yf);
                    b.zf = c("onGroupDoubleClick", b.zf);
                    b.Ff = c("onGroupHold", b.Ff);
                    b.If = c("onGroupMouseWheel", b.If);
                    b.Hf = c("onGroupMouseDown", b.Hf);
                    b.Cf = c("onGroupDragStart", b.Cf);
                    b.Af = c("onGroupDrag", b.Af);
                    b.Bf = c("onGroupDragEnd", b.Bf);
                    b.Pf = c("onGroupTransformStart", b.Pf);
                    b.Nf = c("onGroupTransform", b.Nf);
                    b.Of =
                        c("onGroupTransformEnd", b.Of);
                    b.Qf = c("onKeyUp", b.Qf)
                })();
                b.aj = W.Ha(b.$i);
                b.Ui = W.Ha(b.Ti);
                b.Ye = W.Ha(b.Xe);
                b.Gj = null;
                k && (k.Tb(a), H.Q(a, "dataObject") && k.reload())
            }

            function d(a) {
                return function() {
                    return a.apply(this, arguments).gh(g)
                }
            }
            var g = this,
                m = window.CarrotSearchFoamTree.asserts,
                e = H.extend({}, window.CarrotSearchFoamTree.defaults),
                b = {};
            h(a);
            (a = e.element || document.getElementById(e.id)) || na.Xa("Element to embed FoamTree in not found.");
            e.element = a;
            var k = new db(a, b, e);
            k.H();
            var n = {
                get: function(a) {
                    return 0 ===
                    arguments.length ? H.extend({}, e) : l(arguments[0], Array.prototype.slice.call(arguments, 1))
                },
                set: h,
                on: function(a, b) {
                    f(a, function(a) {
                        a.push(b);
                        return a
                    })
                },
                off: function(a, b) {
                    f(a, function(a) {
                        return a.filter(function(a) {
                            return a !== b
                        })
                    })
                },
                resize: k.Y,
                redraw: k.Ub,
                update: k.update,
                select: d(k.A),
                expose: d(k.d),
                open: d(k.k),
                reset: d(k.reset),
                zoom: d(k.zc),
                trigger: function(a, b) {
                    var c = k.bb(a);
                    c && c(b)
                },
                dispose: function() {
                    function a() {
                        throw "FoamTree instance disposed";
                    }
                    k.jb();
                    H.Fa(n, function(b, c) {
                        "dispose" !== c && (g[c] = a)
                    })
                }
            };
            H.Fa(n, function(a, b) {
                g[b] = a
            });
            k.reload()
        };
        window["CarrotSearchFoamTree.asserts"] && (window.CarrotSearchFoamTree.asserts = window["CarrotSearchFoamTree.asserts"], delete window["CarrotSearchFoamTree.asserts"]);
        window.CarrotSearchFoamTree.supported = !0;
        window.CarrotSearchFoamTree.version = $a;
        window.CarrotSearchFoamTree.defaults = Object.freeze({
            id: void 0,
            element: void 0,
            logging: !1,
            dataObject: void 0,
            pixelRatio: 1,
            wireframePixelRatio: 1,
            layout: "relaxed",
            layoutByWeightOrder: !0,
            showZeroWeightGroups: !0,
            groupMinDiameter: 10,
            rectangleAspectRatioPreference: -1,
            relaxationInitializer: "fisheye",
            relaxationMaxDuration: 3E3,
            relaxationVisible: !1,
            relaxationQualityThreshold: 1,
            stacking: "hierarchical",
            descriptionGroupType: "stab",
            descriptionGroupPosition: 225,
            descriptionGroupDistanceFromCenter: 1,
            descriptionGroupSize: 0.125,
            descriptionGroupMinHeight: 35,
            descriptionGroupMaxHeight: 0.5,
            descriptionGroupPolygonDrawn: !1,
            maxGroups: 5E4,
            maxGroupLevelsDrawn: 4,
            maxGroupLabelLevelsDrawn: 3,
            groupGrowingDuration: 0,
            groupGrowingEasing: "bounce",
            groupGrowingDrag: 0,
            groupResizingBudget: 2,
            groupBorderRadius: 0.15,
            groupBorderWidth: 4,
            groupBorderWidthScaling: 0.6,
            groupInsetWidth: 6,
            groupBorderRadiusCorrection: 1,
            groupSelectionOutlineWidth: 5,
            groupSelectionOutlineColor: "#222",
            groupSelectionOutlineShadowSize: 0,
            groupSelectionOutlineShadowColor: "#fff",
            groupSelectionFillHueShift: 0,
            groupSelectionFillSaturationShift: 0,
            groupSelectionFillLightnessShift: 0,
            groupSelectionStrokeHueShift: 0,
            groupSelectionStrokeSaturationShift: 0,
            groupSelectionStrokeLightnessShift: -10,
            groupFillType: "gradient",
            groupFillGradientRadius: 1,
            groupFillGradientCenterHueShift: 0,
            groupFillGradientCenterSaturationShift: 0,
            groupFillGradientCenterLightnessShift: 20,
            groupFillGradientRimHueShift: 0,
            groupFillGradientRimSaturationShift: 0,
            groupFillGradientRimLightnessShift: -5,
            groupStrokeType: "plain",
            groupStrokeWidth: 1.5,
            groupStrokePlainHueShift: 0,
            groupStrokePlainSaturationShift: 0,
            groupStrokePlainLightnessShift: -10,
            groupStrokeGradientRadius: 1,
            groupStrokeGradientAngle: 45,
            groupStrokeGradientUpperHueShift: 0,
            groupStrokeGradientUpperSaturationShift: 0,
            groupStrokeGradientUpperLightnessShift: 20,
            groupStrokeGradientLowerHueShift: 0,
            groupStrokeGradientLowerSaturationShift: 0,
            groupStrokeGradientLowerLightnessShift: -20,
            groupHoverFillHueShift: 0,
            groupHoverFillSaturationShift: 0,
            groupHoverFillLightnessShift: 20,
            groupHoverStrokeHueShift: 0,
            groupHoverStrokeSaturationShift: 0,
            groupHoverStrokeLightnessShift: -10,
            groupExposureScale: 1.15,
            groupExposureShadowColor: "rgba(0, 0, 0, 0.5)",
            groupExposureShadowSize: 50,
            groupExposureZoomMargin: 0.1,
            groupUnexposureLightnessShift: 65,
            groupUnexposureSaturationShift: -65,
            groupUnexposureLabelColorThreshold: 0.35,
            exposeDuration: 700,
            exposeEasing: "squareInOut",
            groupColorDecorator: H.ta,
            groupLabelDecorator: H.ta,
            groupLabelLayoutDecorator: H.ta,
            groupContentDecorator: H.ta,
            groupContentDecoratorTriggering: "onLayoutDirty",
            openCloseDuration: 500,
            rainbowColorDistribution: "radial",
            rainbowColorDistributionAngle: -45,
            rainbowLightnessDistributionAngle: 45,
            rainbowSaturationCorrection: 0.1,
            rainbowLightnessCorrection: 0.4,
            rainbowStartColor: "hsla(0, 100%, 55%, 1)",
            rainbowEndColor: "hsla(359, 100%, 55%, 1)",
            rainbowLightnessShift: 30,
            rainbowLightnessShiftCenter: 0.4,
            parentFillOpacity: 0.7,
            parentStrokeOpacity: 1,
            parentLabelOpacity: 1,
            parentOpacityBalancing: !0,
            wireframeDrawMaxDuration: 15,
            wireframeLabelDrawing: "auto",
            wireframeContentDecorationDrawing: "auto",
            wireframeToFinalFadeDuration: 500,
            wireframeToFinalFadeDelay: 300,
            finalCompleteDrawMaxDuration: 80,
            finalIncrementalDrawMaxDuration: 100,
            finalToWireframeFadeDuration: 200,
            androidStockBrowserWorkaround: v.jf(),
            incrementalDraw: "fast",
            groupLabelFontFamily: "sans-serif",
            groupLabelFontStyle: "normal",
            groupLabelFontWeight: "normal",
            groupLabelFontVariant: "normal",
            groupLabelLineHeight: 1.05,
            groupLabelHorizontalPadding: 1,
            groupLabelVerticalPadding: 1,
            groupLabelMinFontSize: 6,
            groupLabelMaxFontSize: 160,
            groupLabelMaxTotalHeight: 0.9,
            groupLabelUpdateThreshold: 0.05,
            groupLabelDarkColor: "#000",
            groupLabelLightColor: "#fff",
            groupLabelColorThreshold: 0.35,
            rolloutStartPoint: "center",
            rolloutEasing: "squareOut",
            rolloutMethod: "groups",
            rolloutDuration: 2E3,
            rolloutScalingStrength: -0.7,
            rolloutTranslationXStrength: 0,
            rolloutTranslationYStrength: 0,
            rolloutRotationStrength: -0.7,
            rolloutTransformationCenter: 0.7,
            rolloutPolygonDrag: 0.1,
            rolloutPolygonDuration: 0.5,
            rolloutLabelDelay: 0.8,
            rolloutLabelDrag: 0.1,
            rolloutLabelDuration: 0.5,
            rolloutChildGroupsDrag: 0.1,
            rolloutChildGroupsDelay: 0.2,
            pullbackStartPoint: "center",
            pullbackEasing: "squareIn",
            pullbackMethod: "groups",
            pullbackDuration: 1500,
            pullbackScalingStrength: -0.7,
            pullbackTranslationXStrength: 0,
            pullbackTranslationYStrength: 0,
            pullbackRotationStrength: -0.7,
            pullbackTransformationCenter: 0.7,
            pullbackPolygonDelay: 0.3,
            pullbackPolygonDrag: 0.1,
            pullbackPolygonDuration: 0.8,
            pullbackLabelDelay: 0,
            pullbackLabelDrag: 0.1,
            pullbackLabelDuration: 0.3,
            pullbackChildGroupsDelay: 0.1,
            pullbackChildGroupsDrag: 0.1,
            pullbackChildGroupsDuration: 0.3,
            fadeDuration: 700,
            fadeEasing: "cubicInOut",
            zoomMouseWheelFactor: 1.5,
            zoomMouseWheelDuration: 500,
            zoomMouseWheelEasing: "squareOut",
            maxLabelSizeForTitleBar: 8,
            titleBarFontFamily: null,
            titleBarFontStyle: "normal",
            titleBarFontWeight: "normal",
            titleBarFontVariant: "normal",
            titleBarBackgroundColor: "rgba(0, 0, 0, 0.5)",
            titleBarTextColor: "rgba(255, 255, 255, 1)",
            titleBarMinFontSize: 10,
            titleBarMaxFontSize: 40,
            titleBarTextPaddingLeftRight: 20,
            titleBarTextPaddingTopBottom: 15,
            titleBarDecorator: H.ta,
            attributionText: null,
            attributionLogo: null,
            attributionLogoScale: 0.5,
            attributionUrl: "http://carrotsearch.com/foamtree",
            attributionPosition: "bottom-right",
            attributionDistanceFromCenter: 1,
            attributionWeight: 0.025,
            attributionTheme: "light",
            interactionHandler: v.gi() ? "hammerjs" : "builtin",
            onModelChanging: [],
            onModelChanged: [],
            onRedraw: [],
            onRolloutStart: [],
            onRolloutComplete: [],
            onRelaxationStep: [],
            onViewReset: [],
            onGroupOpenOrCloseChanging: [],
            onGroupOpenOrCloseChanged: [],
            onGroupExposureChanging: [],
            onGroupExposureChanged: [],
            onGroupSelectionChanging: [],
            onGroupSelectionChanged: [],
            onGroupHover: [],
            onGroupClick: [],
            onGroupDoubleClick: [],
            onGroupHold: [],
            onGroupMouseWheel: [],
            onGroupMouseDown: [],
            onGroupDragStart: [],
            onGroupDrag: [],
            onGroupDragEnd: [],
            onGroupTransformStart: [],
            onGroupTransform: [],
            onGroupTransformEnd: [],
            onKeyUp: [],
            selection: null,
            open: null,
            exposure: null,
            imageData: null,
            hierarchy: null,
            geometry: null,
            state: null,
            viewport: null,
            times: null
        });
        window.CarrotSearchFoamTree.geometry = Object.freeze(function() {
            return {
                rectangleInPolygon: function(a, l, h, f, c, d, g) {
                    c = H.B(c, 1);
                    d = H.B(d, 0.5);
                    g = H.B(g, 0.5);
                    a = T.te(a, {
                        x: l,
                        y: h
                    }, f, d, g) * c;
                    return {
                        x: l - a * f * d,
                        y: h - a * g,
                        w: a * f,
                        h: a
                    }
                },
                circleInPolygon: function(a, l, h) {
                    return T.Cg(a, {
                        x: l,
                        y: h
                    })
                },
                stabPolygon: function(a, l, h, f) {
                    return T.Ub(a, {
                        x: l,
                        y: h
                    }, f)
                },
                polygonCentroid: function(a) {
                    a = T.k(a, {});
                    return {
                        x: a.x,
                        y: a.y,
                        area: a.ja
                    }
                },
                boundingBox: function(a) {
                    for (var l = a[0].x, h = a[0].y, f = a[0].x, c = a[0].y, d = 1; d < a.length; d++) {
                        var g = a[d];
                        g.x < l && (l = g.x);
                        g.y < h && (h = g.y);
                        g.x > f && (f = g.x);
                        g.y > c && (c = g.y)
                    }
                    return {
                        x: l,
                        y: h,
                        w: f - l,
                        h: c - h
                    }
                }
            }
        }())
    }, function() {
        window.CarrotSearchFoamTree = function() {
            window.console.error("FoamTree is not supported on this browser.")
        };
        window.CarrotSearchFoamTree.Uj = !1
    });
})();