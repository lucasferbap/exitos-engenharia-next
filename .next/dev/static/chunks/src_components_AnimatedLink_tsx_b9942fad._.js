(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AnimatedLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function AnimatedLink(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "0a9efc40685f7f188a643693d605028aa55666c2b2ab6f6e2f8efb08e54fb69a") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0a9efc40685f7f188a643693d605028aa55666c2b2ab6f6e2f8efb08e54fb69a";
    }
    const { href, children } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[1] !== href || $[2] !== router) {
        t1 = ({
            "AnimatedLink[handleClick]": (e)=>{
                e.preventDefault();
                const wrapper = document.querySelector(".page-wrapper");
                if (wrapper) {
                    wrapper.classList.remove("enter-active");
                    wrapper.classList.add("exit-active");
                    setTimeout({
                        "AnimatedLink[handleClick > setTimeout()]": ()=>router.push(href)
                    }["AnimatedLink[handleClick > setTimeout()]"], 400);
                } else {
                    router.push(href);
                }
            }
        })["AnimatedLink[handleClick]"];
        $[1] = href;
        $[2] = router;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleClick = t1;
    let t2;
    if ($[4] !== children || $[5] !== handleClick || $[6] !== href) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            onClick: handleClick,
            className: "navbar__menu-link",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/AnimatedLink.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[4] = children;
        $[5] = handleClick;
        $[6] = href;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    return t2;
}
_s(AnimatedLink, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AnimatedLink;
var _c;
__turbopack_context__.k.register(_c, "AnimatedLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_AnimatedLink_tsx_b9942fad._.js.map