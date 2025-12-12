(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/assets/logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/logo.2f69b829.png");}),
"[project]/src/assets/logo.png.mjs { IMAGE => \"[project]/src/assets/logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1UlEQVR42i3OQWoCQRAF0J9kEdybQIQEQiCQdUyySMy0jjLa1V3d7Sg4KKKMgoILN4pewQN4BA/h6Zx2ZvH4BfUXH85ZOOsZGMNg1gWGYQPEXYek7/mShtaqkJdAtne/nsXl/cKVJNubINJXIlJothXwy2N7WLXPu2W8fAnn4knMwopIG89i8vVeTyo4brk1HbnTWzgdPNTSVrmWRll2Hv9Tfg2GH9jM7Z00rvTTULdVIfEZSFQF4btO+GsSkPQYzmgQEaQnZZ4ZPxQqO4hkgXK+lPG/C+82Pld8KAd3AAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useActiveSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useActiveSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useActiveSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "15cd629898f9ff991b6ffb0564ed3933abd09bd25f2b54063edb481538c54d77") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "15cd629898f9ff991b6ffb0564ed3933abd09bd25f2b54063edb481538c54d77";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_useActiveSectionUseEffect, t0);
}
_s(useActiveSection, "OD7bBpZva5O2jO+Puf00hKivP7c=");
function _useActiveSectionUseEffect() {
    const device = window.innerWidth > 768 ? "desktop" : "mobile";
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(`.navbar__menu--${device} .navbar__menu-link`);
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach({
            "useActiveSection[useEffect() > <anonymous> > entries.forEach()]": (entry)=>{
                const id = entry.target.getAttribute("id");
                const link = document.querySelector(`.navbar__menu--${device} .navbar__menu-link[href="#${id}"]`);
                if (entry.isIntersecting) {
                    navLinks.forEach(_useActiveSectionUseEffectAnonymousEntriesForEachNavLinksForEach);
                    link?.classList.add("is-active");
                }
            }
        }["useActiveSection[useEffect() > <anonymous> > entries.forEach()]"]);
    }, {
        threshold: 0.1
    });
    sections.forEach({
        "useActiveSection[useEffect() > sections.forEach()]": (section)=>observer.observe(section)
    }["useActiveSection[useEffect() > sections.forEach()]"]);
    return ()=>observer.disconnect();
}
function _useActiveSectionUseEffectAnonymousEntriesForEachNavLinksForEach(l) {
    return l.classList.remove("is-active");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/navbar/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo.png.mjs { IMAGE => "[project]/src/assets/logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActiveSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useActiveSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "f3b46ab7f9ccb9ef15f56107ff4c718566c3a7a065ad1cf1c5b0596e3af6c291") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f3b46ab7f9ccb9ef15f56107ff4c718566c3a7a065ad1cf1c5b0596e3af6c291";
    }
    const [scrollDirection, setScrollDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActiveSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                name: "Home",
                path: "#home",
                id: 1
            },
            {
                name: "A Exitos",
                path: "#about",
                id: 2
            },
            {
                name: "Servi\xE7os",
                path: "#servicos",
                id: 3
            },
            {
                name: "Clientes",
                path: "#clientes",
                id: 4
            },
            {
                name: "Projetos",
                path: "#projects",
                id: 5
            },
            {
                name: "Contato",
                path: "#contato",
                id: 6
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const menuItens = t0;
    const toggleMenu = _NavbarToggleMenu;
    const handleNavClick = _NavbarHandleNavClick;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Navbar[useEffect()]": ()=>{
                let lastScrollY = window.scrollY;
                const handleScroll = {
                    "Navbar[useEffect() > handleScroll]": ()=>{
                        const currentScrollY = window.scrollY;
                        if (currentScrollY > lastScrollY && currentScrollY > 50) {
                            setTimeout({
                                "Navbar[useEffect() > handleScroll > setTimeout()]": ()=>setScrollDirection("down")
                            }["Navbar[useEffect() > handleScroll > setTimeout()]"], 500);
                        } else {
                            if (currentScrollY < lastScrollY) {
                                setScrollDirection("up");
                            }
                        }
                        lastScrollY = currentScrollY;
                    }
                }["Navbar[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Navbar[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const t3 = `navbar ${scrollDirection === "down" ? "navbar--hidden" : ""}`;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "navbar__logo",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#home",
                className: "navbar__logo-link",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    width: 120,
                    height: 40,
                    alt: "Logo",
                    priority: true,
                    className: "navbar__logo-image"
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                    lineNumber: 90,
                    columnNumber: 86
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/navbar/Navbar.tsx",
                lineNumber: 90,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/navbar/Navbar.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "navbar__menu navbar__menu--desktop",
            children: menuItens.map({
                "Navbar[menuItens.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "navbar__menu-item",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.path,
                            className: "navbar__menu-link",
                            onClick: {
                                "Navbar[menuItens.map() > <a>.onClick]": (event)=>handleNavClick(event, item.path)
                            }["Navbar[menuItens.map() > <a>.onClick]"],
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 98,
                            columnNumber: 92
                        }, this)
                    }, item.id, false, {
                        fileName: "[project]/src/components/navbar/Navbar.tsx",
                        lineNumber: 98,
                        columnNumber: 44
                    }, this)
            }["Navbar[menuItens.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/navbar/Navbar.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "navbar__toggle",
            id: "menuBtn",
            "aria-label": "Abrir menu",
            onClick: toggleMenu,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                    lineNumber: 108,
                    columnNumber: 103
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                    lineNumber: 108,
                    columnNumber: 111
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                    lineNumber: 108,
                    columnNumber: 119
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navbar/Navbar.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "navbar__mobile-list",
            children: menuItens.map({
                "Navbar[menuItens.map()]": (item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "navbar__menu-item",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item_0.path,
                            className: "navbar__menu-link",
                            onClick: {
                                "Navbar[menuItens.map() > <a>.onClick]": (event_0)=>{
                                    handleNavClick(event_0, item_0.path);
                                    toggleMenu();
                                }
                            }["Navbar[menuItens.map() > <a>.onClick]"],
                            children: item_0.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 116,
                            columnNumber: 96
                        }, this)
                    }, item_0.id, false, {
                        fileName: "[project]/src/components/navbar/Navbar.tsx",
                        lineNumber: 116,
                        columnNumber: 46
                    }, this)
            }["Navbar[menuItens.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/navbar/Navbar.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://instagram.com/",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Instagram",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                size: 22
            }, void 0, false, {
                fileName: "[project]/src/components/navbar/Navbar.tsx",
                lineNumber: 129,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/navbar/Navbar.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "navbar__mobile",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "navbar__mobile-footer",
                    children: [
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://linkedin.com/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": "LinkedIn",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {
                                size: 22
                            }, void 0, false, {
                                fileName: "[project]/src/components/navbar/Navbar.tsx",
                                lineNumber: 136,
                                columnNumber: 185
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 136,
                            columnNumber: 89
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                    lineNumber: 136,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navbar/Navbar.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] !== t3) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t3,
            children: [
                t4,
                t5,
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navbar/Navbar.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[10] = t3;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "navbar__overlay",
            onClick: toggleMenu
        }, void 0, false, {
            fileName: "[project]/src/components/navbar/Navbar.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t10,
                t11
            ]
        }, void 0, true);
        $[13] = t10;
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    return t12;
}
_s(Navbar, "Zao9BOxI4kSarYJxOaDL96ybFqc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActiveSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Navbar;
function _NavbarHandleNavClick(e, id) {
    e.preventDefault();
    const section = document.querySelector(id);
    section?.scrollIntoView({
        behavior: "smooth"
    });
}
function _NavbarToggleMenu() {
    const btn = document.getElementById("menuBtn");
    const menu = document.querySelector(".navbar__mobile");
    const overlay = document.querySelector(".navbar__overlay");
    const html = document.querySelector("html");
    if (btn && menu && overlay && html) {
        html.classList.toggle("overflow-hidden");
        btn.classList.toggle("navbar__toggle--open");
        menu.classList.toggle("navbar__mobile--open");
        overlay.classList.toggle("navbar__overlay--active");
    }
}
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_417b0446._.js.map