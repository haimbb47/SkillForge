module.exports = [
"[project]/components/WalletGuard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WalletGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$metamask$2f$useMetaMaskEthersSigner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/metamask/useMetaMaskEthersSigner.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function WalletGuard({ children }) {
    const { isConnected, connect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$metamask$2f$useMetaMaskEthersSigner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMetaMaskEthersSigner"])();
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-5rem)] flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-strong rounded-3xl p-10 shadow-glass-lg text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-purple opacity-5 rounded-3xl blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/components/WalletGuard.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-purple text-5xl mb-6 shadow-glow animate-float",
                                    children: "🔗"
                                }, void 0, false, {
                                    fileName: "[project]/components/WalletGuard.tsx",
                                    lineNumber: 18,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-display font-black mb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gradient-text",
                                        children: "Connect Wallet"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WalletGuard.tsx",
                                        lineNumber: 22,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/WalletGuard.tsx",
                                    lineNumber: 21,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1 w-16 bg-gradient-purple mx-auto mb-6 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/WalletGuard.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/80 mb-8 leading-relaxed",
                                    children: "Please connect your MetaMask wallet to access SkillForge"
                                }, void 0, false, {
                                    fileName: "[project]/components/WalletGuard.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: connect,
                                    className: "w-full py-4 glass-strong rounded-2xl font-bold shadow-glow hover:shadow-glow-cyan transition-all btn-glass group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center justify-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "🚀"
                                            }, void 0, false, {
                                                fileName: "[project]/components/WalletGuard.tsx",
                                                lineNumber: 34,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Connect MetaMask"
                                            }, void 0, false, {
                                                fileName: "[project]/components/WalletGuard.tsx",
                                                lineNumber: 35,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/WalletGuard.tsx",
                                        lineNumber: 33,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/WalletGuard.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 glass-dark rounded-2xl p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: "💡"
                                            }, void 0, false, {
                                                fileName: "[project]/components/WalletGuard.tsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-white/70 text-left",
                                                children: "Make sure you have MetaMask browser extension installed"
                                            }, void 0, false, {
                                                fileName: "[project]/components/WalletGuard.tsx",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/WalletGuard.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/WalletGuard.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex items-center justify-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px w-12 bg-gradient-to-r from-transparent to-white/20"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WalletGuard.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-1.5 w-1.5 bg-primary rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WalletGuard.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-1.5 w-1.5 bg-secondary rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WalletGuard.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-1.5 w-1.5 bg-accent rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WalletGuard.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WalletGuard.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px w-12 bg-gradient-to-l from-transparent to-white/20"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WalletGuard.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WalletGuard.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WalletGuard.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WalletGuard.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/WalletGuard.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/WalletGuard.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/fhevm/internal/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SDK_CDN_URL",
    ()=>SDK_CDN_URL
]);
const SDK_CDN_URL = "https://cdn.zama.ai/relayer-sdk-js/0.2.0/relayer-sdk-js.umd.cjs";
}),
"[project]/fhevm/internal/RelayerSDKLoader.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RelayerSDKLoader",
    ()=>RelayerSDKLoader,
    "isFhevmWindowType",
    ()=>isFhevmWindowType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/internal/constants.ts [app-ssr] (ecmascript)");
;
class RelayerSDKLoader {
    _trace;
    constructor(options){
        this._trace = options.trace;
    }
    isLoaded() {
        if ("TURBOPACK compile-time truthy", 1) {
            throw new Error("RelayerSDKLoader: can only be used in the browser.");
        }
        return isFhevmWindowType(window, this._trace);
    }
    load() {
        console.log("[RelayerSDKLoader] load...");
        if ("TURBOPACK compile-time truthy", 1) {
            console.log("[RelayerSDKLoader] window === undefined");
            return Promise.reject(new Error("RelayerSDKLoader: can only be used in the browser."));
        }
        //TURBOPACK unreachable
        ;
    }
}
function isFhevmRelayerSDKType(o, trace) {
    if (typeof o === "undefined") {
        trace?.("RelayerSDKLoader: relayerSDK is undefined");
        return false;
    }
    if (o === null) {
        trace?.("RelayerSDKLoader: relayerSDK is null");
        return false;
    }
    if (typeof o !== "object") {
        trace?.("RelayerSDKLoader: relayerSDK is not an object");
        return false;
    }
    if (!objHasProperty(o, "initSDK", "function", trace)) {
        trace?.("RelayerSDKLoader: relayerSDK.initSDK is invalid");
        return false;
    }
    if (!objHasProperty(o, "createInstance", "function", trace)) {
        trace?.("RelayerSDKLoader: relayerSDK.createInstance is invalid");
        return false;
    }
    if (!objHasProperty(o, "SepoliaConfig", "object", trace)) {
        trace?.("RelayerSDKLoader: relayerSDK.SepoliaConfig is invalid");
        return false;
    }
    if ("__initialized__" in o) {
        if (o.__initialized__ !== true && o.__initialized__ !== false) {
            trace?.("RelayerSDKLoader: relayerSDK.__initialized__ is invalid");
            return false;
        }
    }
    return true;
}
function isFhevmWindowType(win, trace) {
    if (typeof win === "undefined") {
        trace?.("RelayerSDKLoader: window object is undefined");
        return false;
    }
    if (win === null) {
        trace?.("RelayerSDKLoader: window object is null");
        return false;
    }
    if (typeof win !== "object") {
        trace?.("RelayerSDKLoader: window is not an object");
        return false;
    }
    if (!("relayerSDK" in win)) {
        trace?.("RelayerSDKLoader: window does not contain 'relayerSDK' property");
        return false;
    }
    return isFhevmRelayerSDKType(win.relayerSDK);
}
function objHasProperty(obj, propertyName, propertyType, trace) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (!(propertyName in obj)) {
        trace?.(`RelayerSDKLoader: missing ${String(propertyName)}.`);
        return false;
    }
    const value = obj[propertyName];
    if (value === null || value === undefined) {
        trace?.(`RelayerSDKLoader: ${String(propertyName)} is null or undefined.`);
        return false;
    }
    if (typeof value !== propertyType) {
        trace?.(`RelayerSDKLoader: ${String(propertyName)} is not a ${propertyType}.`);
        return false;
    }
    return true;
}
}),
"[project]/fhevm/internal/PublicKeyStorage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "publicKeyStorageGet",
    ()=>publicKeyStorageGet,
    "publicKeyStorageSet",
    ()=>publicKeyStorageSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/idb/build/index.js [app-ssr] (ecmascript)");
;
let __dbPromise = undefined;
async function _getDB() {
    if (__dbPromise) {
        return __dbPromise;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        return undefined;
    }
    //TURBOPACK unreachable
    ;
}
function assertFhevmStoredPublicKey(value) {
    if (typeof value !== "object") {
        throw new Error(`FhevmStoredPublicKey must be an object`);
    }
    if (value === null) {
        return;
    }
    if (!("publicKeyId" in value)) {
        throw new Error(`FhevmStoredPublicKey.publicKeyId does not exist`);
    }
    if (typeof value.publicKeyId !== "string") {
        throw new Error(`FhevmStoredPublicKey.publicKeyId must be a string`);
    }
    if (!("publicKey" in value)) {
        throw new Error(`FhevmStoredPublicKey.publicKey does not exist`);
    }
    if (!(value.publicKey instanceof Uint8Array)) {
        throw new Error(`FhevmStoredPublicKey.publicKey must be a Uint8Array`);
    }
}
function assertFhevmStoredPublicParams(value) {
    if (typeof value !== "object") {
        throw new Error(`FhevmStoredPublicParams must be an object`);
    }
    if (value === null) {
        return;
    }
    if (!("publicParamsId" in value)) {
        throw new Error(`FhevmStoredPublicParams.publicParamsId does not exist`);
    }
    if (typeof value.publicParamsId !== "string") {
        throw new Error(`FhevmStoredPublicParams.publicParamsId must be a string`);
    }
    if (!("publicParams" in value)) {
        throw new Error(`FhevmStoredPublicParams.publicParams does not exist`);
    }
    if (!(value.publicParams instanceof Uint8Array)) {
        throw new Error(`FhevmStoredPublicParams.publicParams must be a Uint8Array`);
    }
}
async function publicKeyStorageGet(aclAddress) {
    const db = await _getDB();
    if (!db) {
        return {
            publicParams: null
        };
    }
    let storedPublicKey = null;
    try {
        const pk = await db.get("publicKeyStore", aclAddress);
        if (pk?.value) {
            assertFhevmStoredPublicKey(pk.value);
            storedPublicKey = pk.value;
        }
    } catch  {
    //
    }
    let storedPublicParams = null;
    try {
        const pp = await db.get("paramsStore", aclAddress);
        if (pp?.value) {
            assertFhevmStoredPublicParams(pp.value);
            storedPublicParams = pp.value;
        }
    } catch  {
    //
    }
    const publicKeyData = storedPublicKey?.publicKey;
    const publicKeyId = storedPublicKey?.publicKeyId;
    const publicParams = storedPublicParams ? {
        "2048": storedPublicParams
    } : null;
    let publicKey = undefined;
    if (publicKeyId && publicKeyData) {
        publicKey = {
            id: publicKeyId,
            data: publicKeyData
        };
    }
    return {
        ...publicKey !== undefined && {
            publicKey
        },
        publicParams
    };
}
async function publicKeyStorageSet(aclAddress, publicKey, publicParams) {
    assertFhevmStoredPublicKey(publicKey);
    assertFhevmStoredPublicParams(publicParams);
    const db = await _getDB();
    if (!db) {
        return;
    }
    if (publicKey) {
        await db.put("publicKeyStore", {
            acl: aclAddress,
            value: publicKey
        });
    }
    if (publicParams) {
        await db.put("paramsStore", {
            acl: aclAddress,
            value: publicParams
        });
    }
}
}),
"[project]/fhevm/internal/fhevm.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmAbortError",
    ()=>FhevmAbortError,
    "FhevmReactError",
    ()=>FhevmReactError,
    "createFhevmInstance",
    ()=>createFhevmInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/address/checks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/internal/RelayerSDKLoader.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$PublicKeyStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/internal/PublicKeyStorage.ts [app-ssr] (ecmascript)");
;
;
;
class FhevmReactError extends Error {
    code;
    constructor(code, message, options){
        super(message, options);
        this.code = code;
        this.name = "FhevmReactError";
    }
}
function throwFhevmError(code, message, cause) {
    throw new FhevmReactError(code, message, cause ? {
        cause
    } : undefined);
}
const isFhevmInitialized = ()=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFhevmWindowType"])(window, console.log)) {
        return false;
    }
    return window.relayerSDK.__initialized__ === true;
};
const fhevmLoadSDK = ()=>{
    const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RelayerSDKLoader"]({
        trace: console.log
    });
    return loader.load();
};
const fhevmInitSDK = async (options)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFhevmWindowType"])(window, console.log)) {
        throw new Error("window.relayerSDK is not available");
    }
    const result = await window.relayerSDK.initSDK(options);
    window.relayerSDK.__initialized__ = result;
    if (!result) {
        throw new Error("window.relayerSDK.initSDK failed.");
    }
    return true;
};
function checkIsAddress(a) {
    if (typeof a !== "string") {
        return false;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(a)) {
        return false;
    }
    return true;
}
class FhevmAbortError extends Error {
    constructor(message = "FHEVM operation was cancelled"){
        super(message);
        this.name = "FhevmAbortError";
    }
}
async function getChainId(providerOrUrl) {
    if (typeof providerOrUrl === "string") {
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](providerOrUrl);
        return Number((await provider.getNetwork()).chainId);
    }
    const chainId = await providerOrUrl.request({
        method: "eth_chainId"
    });
    return Number.parseInt(chainId, 16);
}
async function getWeb3Client(rpcUrl) {
    const rpc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](rpcUrl);
    try {
        const version = await rpc.send("web3_clientVersion", []);
        return version;
    } catch (e) {
        throwFhevmError("WEB3_CLIENTVERSION_ERROR", `The URL ${rpcUrl} is not a Web3 node or is not reachable. Please check the endpoint.`, e);
    } finally{
        rpc.destroy();
    }
}
async function tryFetchFHEVMHardhatNodeRelayerMetadata(rpcUrl) {
    const version = await getWeb3Client(rpcUrl);
    if (typeof version !== "string" || !version.toLowerCase().includes("hardhat")) {
        return undefined;
    }
    try {
        const metadata = await getFHEVMRelayerMetadata(rpcUrl);
        if (!metadata || typeof metadata !== "object") {
            return undefined;
        }
        if (!("ACLAddress" in metadata && typeof metadata.ACLAddress === "string" && metadata.ACLAddress.startsWith("0x"))) {
            return undefined;
        }
        if (!("InputVerifierAddress" in metadata && typeof metadata.InputVerifierAddress === "string" && metadata.InputVerifierAddress.startsWith("0x"))) {
            return undefined;
        }
        if (!("KMSVerifierAddress" in metadata && typeof metadata.KMSVerifierAddress === "string" && metadata.KMSVerifierAddress.startsWith("0x"))) {
            return undefined;
        }
        return metadata;
    } catch  {
        return undefined;
    }
}
async function getFHEVMRelayerMetadata(rpcUrl) {
    const rpc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](rpcUrl);
    try {
        const version = await rpc.send("fhevm_relayer_metadata", []);
        return version;
    } catch (e) {
        throwFhevmError("FHEVM_RELAYER_METADATA_ERROR", `The URL ${rpcUrl} is not a FHEVM Hardhat node or is not reachable. Please check the endpoint.`, e);
    } finally{
        rpc.destroy();
    }
}
async function resolve(providerOrUrl, mockChains) {
    const chainId = await getChainId(providerOrUrl);
    let rpcUrl = typeof providerOrUrl === "string" ? providerOrUrl : undefined;
    const _mockChains = {
        31337: "http://localhost:8545",
        ...mockChains ?? {}
    };
    if (Object.hasOwn(_mockChains, chainId)) {
        if (!rpcUrl) {
            rpcUrl = _mockChains[chainId];
        }
        return {
            isMock: true,
            chainId,
            rpcUrl
        };
    }
    return {
        isMock: false,
        chainId,
        rpcUrl
    };
}
const createFhevmInstance = async (parameters)=>{
    const throwIfAborted = ()=>{
        if (signal.aborted) throw new FhevmAbortError();
    };
    const notify = (status)=>{
        if (onStatusChange) onStatusChange(status);
    };
    const { signal, onStatusChange, provider: providerOrUrl, mockChains } = parameters;
    const { isMock, rpcUrl, chainId } = await resolve(providerOrUrl, mockChains);
    if (isMock) {
        const fhevmRelayerMetadata = await tryFetchFHEVMHardhatNodeRelayerMetadata(rpcUrl);
        if (fhevmRelayerMetadata) {
            notify("creating");
            const fhevmMock = await __turbopack_context__.A("[project]/fhevm/internal/mock/fhevmMock.ts [app-ssr] (ecmascript, async loader)");
            const mockInstance = await fhevmMock.fhevmMockCreateInstance({
                rpcUrl,
                chainId,
                metadata: fhevmRelayerMetadata
            });
            throwIfAborted();
            return mockInstance;
        }
    }
    throwIfAborted();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFhevmWindowType"])(window, console.log)) {
        notify("sdk-loading");
        await fhevmLoadSDK();
        throwIfAborted();
        notify("sdk-loaded");
    }
    if (!isFhevmInitialized()) {
        notify("sdk-initializing");
        await fhevmInitSDK();
        throwIfAborted();
        notify("sdk-initialized");
    }
    const relayerSDK = window.relayerSDK;
    const aclAddress = relayerSDK.SepoliaConfig.aclContractAddress;
    if (!checkIsAddress(aclAddress)) {
        throw new Error(`Invalid address: ${aclAddress}`);
    }
    const pub = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$PublicKeyStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicKeyStorageGet"])(aclAddress);
    throwIfAborted();
    const config = {
        ...relayerSDK.SepoliaConfig,
        network: providerOrUrl,
        publicKey: pub.publicKey,
        publicParams: pub.publicParams
    };
    notify("creating");
    const instance = await relayerSDK.createInstance(config);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$PublicKeyStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicKeyStorageSet"])(aclAddress, instance.getPublicKey(), instance.getPublicParams(2048));
    throwIfAborted();
    return instance;
};
}),
"[project]/fhevm/useFhevm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFhevm",
    ()=>useFhevm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$fhevm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/internal/fhevm.ts [app-ssr] (ecmascript)");
;
;
function _assert(condition, message) {
    if (!condition) {
        const m = message ? `Assertion failed: ${message}` : `Assertion failed.`;
        console.error(m);
        throw new Error(m);
    }
}
function useFhevm(parameters) {
    const { provider, chainId, initialMockChains, enabled = true } = parameters;
    const [instance, _setInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [status, _setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [error, _setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [_isRunning, _setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(enabled);
    const [_providerChanged, _setProviderChanged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const _abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const _providerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(provider);
    const _chainIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(chainId);
    const _mockChainsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(initialMockChains);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (_abortControllerRef.current) {
            _providerRef.current = undefined;
            _chainIdRef.current = undefined;
            _abortControllerRef.current.abort();
            _abortControllerRef.current = null;
        }
        _providerRef.current = provider;
        _chainIdRef.current = chainId;
        _setInstance(undefined);
        _setError(undefined);
        _setStatus("idle");
        if (provider !== undefined) {
            _setProviderChanged((prev)=>prev + 1);
        }
    }, [
        provider,
        chainId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        refresh();
    }, [
        refresh
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        _setIsRunning(enabled);
    }, [
        enabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (_isRunning === false) {
            if (_abortControllerRef.current) {
                _abortControllerRef.current.abort();
                _abortControllerRef.current = null;
            }
            _setInstance(undefined);
            _setError(undefined);
            _setStatus("idle");
            return;
        }
        if (_isRunning === true) {
            if (_providerRef.current === undefined) {
                _setInstance(undefined);
                _setError(undefined);
                _setStatus("idle");
                return;
            }
            if (!_abortControllerRef.current) {
                _abortControllerRef.current = new AbortController();
            }
            _assert(!_abortControllerRef.current.signal.aborted, "!controllerRef.current.signal.aborted");
            _setStatus("loading");
            _setError(undefined);
            const thisSignal = _abortControllerRef.current.signal;
            const thisProvider = _providerRef.current;
            const thisRpcUrlsByChainId = _mockChainsRef.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$fhevm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFhevmInstance"])({
                signal: thisSignal,
                provider: thisProvider,
                mockChains: thisRpcUrlsByChainId,
                onStatusChange: (s)=>console.log(`[useFhevm] createFhevmInstance status changed: ${s}`)
            }).then((i)=>{
                console.log(`[useFhevm] createFhevmInstance created!`);
                if (thisSignal.aborted) return;
                _assert(thisProvider === _providerRef.current, "thisProvider === _providerRef.current");
                _setInstance(i);
                _setError(undefined);
                _setStatus("ready");
            }).catch((e)=>{
                console.log(`Error Was thrown !!! error... ` + e.name);
                if (thisSignal.aborted) return;
                _assert(thisProvider === _providerRef.current, "thisProvider === _providerRef.current");
                _setInstance(undefined);
                _setError(e);
                _setStatus("error");
            });
        }
    }, [
        _isRunning,
        _providerChanged
    ]);
    return {
        instance,
        refresh,
        error,
        status
    };
}
}),
"[project]/fhevm/GenericStringStorage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GenericStringInMemoryStorage",
    ()=>GenericStringInMemoryStorage
]);
class GenericStringInMemoryStorage {
    #store = new Map();
    getItem(key) {
        return this.#store.has(key) ? this.#store.get(key) : null;
    }
    setItem(key, value) {
        this.#store.set(key, value);
    }
    removeItem(key) {
        this.#store.delete(key);
    }
}
}),
"[project]/hooks/useInMemoryStorage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInMemoryStorage",
    ()=>useInMemoryStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$GenericStringStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/GenericStringStorage.ts [app-ssr] (ecmascript)");
"use client";
;
;
function useInMemoryStorage() {
    const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$GenericStringStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenericStringInMemoryStorage"](), []);
    return {
        storage
    };
}
}),
"[project]/fhevm/FhevmDecryptionSignature.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmDecryptionSignature",
    ()=>FhevmDecryptionSignature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
;
function _timestampNow() {
    return Math.floor(Date.now() / 1000);
}
class FhevmDecryptionSignatureStorageKey {
    #contractAddresses;
    #userAddress;
    #publicKey;
    #key;
    constructor(instance, contractAddresses, userAddress, publicKey){
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(userAddress)) {
            throw new TypeError(`Invalid address ${userAddress}`);
        }
        const sortedContractAddresses = contractAddresses.sort();
        const emptyEIP712 = instance.createEIP712(publicKey ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress, sortedContractAddresses, 0, 0);
        try {
            const hash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].TypedDataEncoder.hash(emptyEIP712.domain, {
                UserDecryptRequestVerification: emptyEIP712.types.UserDecryptRequestVerification
            }, emptyEIP712.message);
            this.#contractAddresses = sortedContractAddresses;
            this.#userAddress = userAddress;
            this.#key = `${userAddress}:${hash}`;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
    get contractAddresses() {
        return this.#contractAddresses;
    }
    get userAddress() {
        return this.#userAddress;
    }
    get publicKey() {
        return this.#publicKey;
    }
    get key() {
        return this.#key;
    }
}
class FhevmDecryptionSignature {
    #publicKey;
    #privateKey;
    #signature;
    #startTimestamp;
    #durationDays;
    #userAddress;
    #contractAddresses;
    #eip712;
    constructor(parameters){
        if (!FhevmDecryptionSignature.checkIs(parameters)) {
            throw new TypeError("Invalid FhevmDecryptionSignatureType");
        }
        this.#publicKey = parameters.publicKey;
        this.#privateKey = parameters.privateKey;
        this.#signature = parameters.signature;
        this.#startTimestamp = parameters.startTimestamp;
        this.#durationDays = parameters.durationDays;
        this.#userAddress = parameters.userAddress;
        this.#contractAddresses = parameters.contractAddresses;
        this.#eip712 = parameters.eip712;
    }
    get privateKey() {
        return this.#privateKey;
    }
    get publicKey() {
        return this.#publicKey;
    }
    get signature() {
        return this.#signature;
    }
    get contractAddresses() {
        return this.#contractAddresses;
    }
    get startTimestamp() {
        return this.#startTimestamp;
    }
    get durationDays() {
        return this.#durationDays;
    }
    get userAddress() {
        return this.#userAddress;
    }
    static checkIs(s) {
        if (!s || typeof s !== "object") {
            return false;
        }
        if (!("publicKey" in s && typeof s.publicKey === "string")) {
            return false;
        }
        if (!("privateKey" in s && typeof s.privateKey === "string")) {
            return false;
        }
        if (!("signature" in s && typeof s.signature === "string")) {
            return false;
        }
        if (!("startTimestamp" in s && typeof s.startTimestamp === "number")) {
            return false;
        }
        if (!("durationDays" in s && typeof s.durationDays === "number")) {
            return false;
        }
        if (!("contractAddresses" in s && Array.isArray(s.contractAddresses))) {
            return false;
        }
        for(let i = 0; i < s.contractAddresses.length; ++i){
            if (typeof s.contractAddresses[i] !== "string") return false;
            if (!s.contractAddresses[i].startsWith("0x")) return false;
        }
        if (!("userAddress" in s && typeof s.userAddress === "string" && s.userAddress.startsWith("0x"))) {
            return false;
        }
        if (!("eip712" in s && typeof s.eip712 === "object" && s.eip712 !== null)) {
            return false;
        }
        if (!("domain" in s.eip712 && typeof s.eip712.domain === "object")) {
            return false;
        }
        if (!("primaryType" in s.eip712 && typeof s.eip712.primaryType === "string")) {
            return false;
        }
        if (!("message" in s.eip712)) {
            return false;
        }
        if (!("types" in s.eip712 && typeof s.eip712.types === "object" && s.eip712.types !== null)) {
            return false;
        }
        return true;
    }
    toJSON() {
        return {
            publicKey: this.#publicKey,
            privateKey: this.#privateKey,
            signature: this.#signature,
            startTimestamp: this.#startTimestamp,
            durationDays: this.#durationDays,
            userAddress: this.#userAddress,
            contractAddresses: this.#contractAddresses,
            eip712: this.#eip712
        };
    }
    static fromJSON(json) {
        const data = typeof json === "string" ? JSON.parse(json) : json;
        return new FhevmDecryptionSignature(data);
    }
    isValid() {
        return _timestampNow() < this.#startTimestamp + this.#durationDays * 24 * 60 * 60;
    }
    async saveToGenericStringStorage(storage, instance, withPublicKey) {
        try {
            const value = JSON.stringify(this);
            const storageKey = new FhevmDecryptionSignatureStorageKey(instance, this.#contractAddresses, this.#userAddress, withPublicKey ? this.#publicKey : undefined);
            await storage.setItem(storageKey.key, value);
            console.log(`signature saved! contracts=${this.#contractAddresses.length}`);
        } catch  {
            console.error(`FhevmDecryptionSignature.saveToGenericStringStorage() failed!`);
        }
    }
    static async loadFromGenericStringStorage(storage, instance, contractAddresses, userAddress, publicKey) {
        try {
            const storageKey = new FhevmDecryptionSignatureStorageKey(instance, contractAddresses, userAddress, publicKey);
            const result = await storage.getItem(storageKey.key);
            if (!result) {
                console.warn(`Could not load signature! key=${storageKey.key}`);
                return null;
            }
            try {
                const kps = FhevmDecryptionSignature.fromJSON(result);
                if (!kps.isValid()) {
                    return null;
                }
                return kps;
            } catch  {
                return null;
            }
        } catch  {
            console.error(`FhevmDecryptionSignature.loadFromGenericStringStorage() failed!`);
            return null;
        }
    }
    static async new(instance, contractAddresses, publicKey, privateKey, signer) {
        try {
            const userAddress = await signer.getAddress();
            const startTimestamp = _timestampNow();
            const durationDays = 365;
            const eip712 = instance.createEIP712(publicKey, contractAddresses, startTimestamp, durationDays);
            const signature = await signer.signTypedData(eip712.domain, {
                UserDecryptRequestVerification: eip712.types.UserDecryptRequestVerification
            }, eip712.message);
            return new FhevmDecryptionSignature({
                publicKey,
                privateKey,
                contractAddresses: contractAddresses,
                startTimestamp,
                durationDays,
                signature,
                eip712: eip712,
                userAddress
            });
        } catch  {
            return null;
        }
    }
    static async loadOrSign(instance, contractAddresses, signer, storage, keyPair) {
        const userAddress = await signer.getAddress();
        const cached = await FhevmDecryptionSignature.loadFromGenericStringStorage(storage, instance, contractAddresses, userAddress, keyPair?.publicKey);
        if (cached) {
            return cached;
        }
        const { publicKey, privateKey } = keyPair ?? instance.generateKeypair();
        const sig = await FhevmDecryptionSignature.new(instance, contractAddresses, publicKey, privateKey, signer);
        if (!sig) {
            return null;
        }
        await sig.saveToGenericStringStorage(storage, instance, Boolean(keyPair?.publicKey));
        return sig;
    }
}
}),
"[project]/hooks/useSkillForge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSkillForge",
    ()=>useSkillForge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$FhevmDecryptionSignature$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/FhevmDecryptionSignature.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
// 辅助函数：将handle转换为bytes32格式
function convertHandleToBytes32(handle) {
    if (Array.isArray(handle)) {
        const uint8Array = new Uint8Array(handle);
        const hexString = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].hexlify(uint8Array);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].zeroPadValue(hexString, 32);
    } else if (handle instanceof Uint8Array) {
        const hexString = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].hexlify(handle);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].zeroPadValue(hexString, 32);
    } else if (typeof handle === 'string') {
        let hexString = handle;
        if (!hexString.startsWith('0x')) {
            hexString = '0x' + hexString;
        }
        if (hexString.length < 66) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].zeroPadValue(hexString, 32);
        }
        return hexString;
    }
    throw new Error(`Unsupported handle type: ${typeof handle}, value: ${JSON.stringify(handle)}`);
}
// SkillForge 合约 ABI
const SKILLFORGE_ABI = [
    "function forgeCourse(string courseCID, bytes32 encryptedTotalChallenges, bytes inputProof) returns (uint256)",
    "function submitProof(uint256 courseId, uint256 challengeId, string proofCID, bytes32 encryptedScore, bytes inputProof) returns (uint256)",
    "function validateProof(uint256 proofId, uint8 status, bytes32 newEncryptedScore, bytes inputProof)",
    "function claimBadge(uint256 courseId, string badgeCID, bytes32 encryptedTotalScore, bytes inputProof) returns (uint256)",
    "function getCourse(uint256 courseId) view returns (address creator, string courseCID, bool active, uint256 forgedAt)",
    "function getProof(uint256 proofId) view returns (uint256 courseId, uint256 challengeId, address learner, string proofCID, uint8 status, address validator, uint256 submittedAt)",
    "function getProofEncryptedScore(uint256 proofId) view returns (bytes32 encryptedScoreHandle)",
    "function getBadge(uint256 badgeId) view returns (uint256 courseId, address earner, string badgeCID, uint256 claimedAt)",
    "function getBadgeEncryptedScore(uint256 badgeId) view returns (bytes32 encryptedTotalScoreHandle)",
    "function nextProofId() view returns (uint256)",
    "function nextBadgeId() view returns (uint256)",
    "function grantValidatorRole(address validator, bool authorized)",
    "function authorizedValidators(address) view returns (bool)",
    "event CourseForged(uint256 indexed courseId, address indexed creator, string courseCID)",
    "event ProofSubmitted(uint256 indexed proofId, uint256 indexed courseId, address indexed learner, string proofCID)",
    "event ProofValidated(uint256 indexed proofId, address indexed validator, uint8 status)",
    "event BadgeClaimed(uint256 indexed badgeId, uint256 indexed courseId, address indexed earner, string badgeCID)"
];
function useSkillForge(parameters) {
    const { instance, fhevmDecryptionSignatureStorage, contractAddress, ethersSigner, ethersReadonlyProvider, chainId } = parameters;
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!contractAddress || !ethersReadonlyProvider) return undefined;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(contractAddress, SKILLFORGE_ABI, ethersReadonlyProvider);
    }, [
        contractAddress,
        ethersReadonlyProvider
    ]);
    const contractWithSigner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!contractAddress || !ethersSigner) return undefined;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(contractAddress, SKILLFORGE_ABI, ethersSigner);
    }, [
        contractAddress,
        ethersSigner
    ]);
    // 锻造课程
    const forgeCourse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (courseCID, totalChallenges)=>{
        if (!instance || !contractWithSigner || !ethersSigner) {
            setMessage("FHEVM实例或合约未就绪");
            return;
        }
        setIsLoading(true);
        setMessage("⚡ 正在加密课程数据...");
        try {
            const input = instance.createEncryptedInput(contractAddress, await ethersSigner.getAddress());
            input.add32(BigInt(totalChallenges));
            const enc = await input.encrypt();
            setMessage("🔨 正在提交锻造交易...");
            const handle = convertHandleToBytes32(enc.handles[0]);
            const tx = await contractWithSigner.forgeCourse(courseCID, handle, enc.inputProof, {
                gasLimit: 10000000
            });
            setMessage(`⏳ 交易已发送: ${tx.hash}`);
            const receipt = await tx.wait();
            setMessage(`✅ 课程锻造成功！状态: ${receipt?.status}`);
        } catch (error) {
            console.error("ForgeCourse error:", error);
            const errorMsg = error?.reason || error?.message || "未知错误";
            setMessage(`❌ 错误: ${errorMsg}`);
        } finally{
            setIsLoading(false);
        }
    }, [
        instance,
        contractWithSigner,
        contractAddress,
        ethersSigner
    ]);
    // 提交证明
    const submitProof = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (courseId, challengeId, proofCID, score)=>{
        if (!instance || !contractWithSigner || !ethersSigner) {
            setMessage("FHEVM实例或合约未就绪");
            return;
        }
        setIsLoading(true);
        setMessage("⚡ 正在加密分数...");
        try {
            const input = instance.createEncryptedInput(contractAddress, await ethersSigner.getAddress());
            input.add32(BigInt(score));
            const enc = await input.encrypt();
            setMessage("⚔️ 正在提交证明...");
            const handle = convertHandleToBytes32(enc.handles[0]);
            const tx = await contractWithSigner.submitProof(courseId, challengeId, proofCID, handle, enc.inputProof, {
                gasLimit: 10000000
            });
            setMessage(`⏳ 交易已发送: ${tx.hash}`);
            const receipt = await tx.wait();
            setMessage(`✅ 证明提交成功！状态: ${receipt?.status}`);
        } catch (error) {
            console.error("SubmitProof error:", error);
            const errorMsg = error?.reason || error?.message || "未知错误";
            setMessage(`❌ 错误: ${errorMsg}`);
        } finally{
            setIsLoading(false);
        }
    }, [
        instance,
        contractWithSigner,
        contractAddress,
        ethersSigner
    ]);
    // 验证证明
    const validateProof = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (proofId, status, newScore)=>{
        if (!instance || !contractWithSigner || !ethersSigner) {
            setMessage("FHEVM实例或合约未就绪");
            return;
        }
        setIsLoading(true);
        setMessage("🛡️ 检查证明状态...");
        try {
            // 先检查证明状态
            const proof = await contractWithSigner.getProof(proofId);
            const proofStatus = Number(proof[4]); // status是第5个返回值
            if (proofStatus !== 0) {
                throw new Error(`证明已被验证（当前状态: ${proofStatus === 1 ? '已通过' : '已拒绝'}）`);
            }
            setMessage("⚡ 加密新分数...");
            const input = instance.createEncryptedInput(contractAddress, await ethersSigner.getAddress());
            input.add32(BigInt(newScore));
            const enc = await input.encrypt();
            setMessage("🛡️ 提交验证交易...");
            const handle = convertHandleToBytes32(enc.handles[0]);
            const tx = await contractWithSigner.validateProof(proofId, status, handle, enc.inputProof, {
                gasLimit: 10000000
            });
            setMessage(`⏳ 交易已发送: ${tx.hash}`);
            const receipt = await tx.wait();
            setMessage(`✅ 验证成功！状态: ${receipt?.status === 1 ? '成功' : '失败'}`);
        } catch (error) {
            console.error("ValidateProof error:", error);
            let errorMsg = "未知错误";
            if (error?.reason) {
                errorMsg = error.reason;
            } else if (error?.message) {
                errorMsg = error.message;
                if (errorMsg.includes("Not authorized")) {
                    errorMsg = "错误：您未被授权为验证者，请先授权";
                } else if (errorMsg.includes("Already validated")) {
                    errorMsg = "错误：该证明已被验证";
                } else if (errorMsg.includes("Invalid status")) {
                    errorMsg = "错误：无效的验证状态";
                }
            }
            setMessage(`❌ 验证失败: ${errorMsg}`);
        } finally{
            setIsLoading(false);
        }
    }, [
        instance,
        contractWithSigner,
        contractAddress,
        ethersSigner
    ]);
    // 解密分数
    const decryptScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (handle)=>{
        if (!instance || !ethersSigner || !contractAddress) {
            setMessage("FHEVM实例未就绪");
            return null;
        }
        setIsLoading(true);
        setMessage("🔓 正在解密分数...");
        try {
            const sig = await __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$FhevmDecryptionSignature$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FhevmDecryptionSignature"].loadOrSign(instance, [
                contractAddress
            ], ethersSigner, fhevmDecryptionSignatureStorage);
            if (!sig) {
                setMessage("无法构建解密签名");
                return null;
            }
            const res = await instance.userDecrypt([
                {
                    handle,
                    contractAddress
                }
            ], sig.privateKey, sig.publicKey, sig.signature, sig.contractAddresses, sig.userAddress, sig.startTimestamp, sig.durationDays);
            setMessage("✅ 解密完成！");
            return res[handle];
        } catch (error) {
            setMessage(`❌ 解密错误: ${error.message}`);
            return null;
        } finally{
            setIsLoading(false);
        }
    }, [
        instance,
        ethersSigner,
        contractAddress,
        fhevmDecryptionSignatureStorage
    ]);
    // 授权验证者
    const grantValidator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (validatorAddress)=>{
        if (!contractWithSigner) {
            setMessage("合约未就绪");
            return false;
        }
        setIsLoading(true);
        setMessage("⚡ 正在授权验证者...");
        try {
            const tx = await contractWithSigner.grantValidatorRole(validatorAddress, true, {
                gasLimit: 100000
            });
            setMessage(`⏳ 交易已发送: ${tx.hash}`);
            const receipt = await tx.wait();
            setMessage(`✅ 验证者授权成功！状态: ${receipt?.status}`);
            return true;
        } catch (error) {
            console.error("GrantValidator error:", error);
            const errorMsg = error?.reason || error?.message || "未知错误";
            setMessage(`❌ 错误: ${errorMsg}`);
            return false;
        } finally{
            setIsLoading(false);
        }
    }, [
        contractWithSigner
    ]);
    // 检查验证者授权状态
    const checkValidatorAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (validatorAddress)=>{
        if (!contract) return false;
        try {
            const isAuthorized = await contract.authorizedValidators(validatorAddress);
            return isAuthorized;
        } catch (error) {
            console.error("CheckValidatorAuth error:", error);
            return false;
        }
    }, [
        contract
    ]);
    // 领取徽章
    const claimBadge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (courseId, badgeCID, totalScore)=>{
        if (!instance || !contractWithSigner || !ethersSigner) {
            setMessage("FHEVM实例或合约未就绪");
            return;
        }
        setIsLoading(true);
        setMessage("⚡ 加密总分...");
        try {
            const input = instance.createEncryptedInput(contractAddress, await ethersSigner.getAddress());
            input.add64(BigInt(totalScore));
            const enc = await input.encrypt();
            setMessage("🏅 提交领取交易...");
            const handle = convertHandleToBytes32(enc.handles[0]);
            const tx = await contractWithSigner.claimBadge(courseId, badgeCID, handle, enc.inputProof, {
                gasLimit: 5000000
            });
            setMessage(`⏳ 交易已发送: ${tx.hash}`);
            const receipt = await tx.wait();
            setMessage(`✅ 徽章领取成功！状态: ${receipt?.status === 1 ? '成功' : '失败'}`);
            setTimeout(()=>{
                window.location.href = "/badges";
            }, 2000);
        } catch (error) {
            console.error("ClaimBadge error:", error);
            const errorMsg = error?.reason || error?.message || "未知错误";
            setMessage(`❌ 领取失败: ${errorMsg}`);
        } finally{
            setIsLoading(false);
        }
    }, [
        instance,
        contractWithSigner,
        contractAddress,
        ethersSigner
    ]);
    return {
        contract,
        contractWithSigner,
        forgeCourse,
        submitProof,
        validateProof,
        claimBadge,
        decryptScore,
        grantValidator,
        checkValidatorAuth,
        message,
        isLoading
    };
}
}),
"[project]/app/forge-course/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ForgeCoursePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WalletGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WalletGuard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$useFhevm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/useFhevm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$metamask$2f$useMetaMaskEthersSigner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/metamask/useMetaMaskEthersSigner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useInMemoryStorage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSkillForge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useSkillForge.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
function ForgeCoursePage() {
    const { storage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInMemoryStorage"])();
    const { provider, chainId, ethersSigner, ethersReadonlyProvider, initialMockChains, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$metamask$2f$useMetaMaskEthersSigner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMetaMaskEthersSigner"])();
    const { instance: fhevmInstance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$useFhevm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFhevm"])({
        provider,
        chainId,
        initialMockChains,
        enabled: isConnected
    });
    const { forgeCourse, message, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSkillForge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSkillForge"])({
        instance: fhevmInstance,
        fhevmDecryptionSignatureStorage: storage,
        contractAddress: CONTRACT_ADDRESS,
        ethersSigner,
        ethersReadonlyProvider,
        chainId
    });
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        description: "",
        category: "Programming",
        difficulty: "Beginner",
        totalChallenges: 5,
        duration: "30"
    });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const mockCID = `Qm${Math.random().toString(36).substring(2, 15)}`;
        await forgeCourse(mockCID, formData.totalChallenges);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WalletGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-5rem)] py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center space-x-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 w-8 bg-gradient-purple rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forge-course/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-5xl animate-float",
                                        children: "✨"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forge-course/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 w-8 bg-gradient-purple rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forge-course/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forge-course/page.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-display font-black mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "Forge Course"
                                }, void 0, false, {
                                    fileName: "[project]/app/forge-course/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/forge-course/page.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/80 text-lg",
                                children: "Create new skill training courses with challenges"
                            }, void 0, false, {
                                fileName: "[project]/app/forge-course/page.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/forge-course/page.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-strong rounded-3xl shadow-glass-lg overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-purple p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-display font-black text-white",
                                        children: "Course Information"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forge-course/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/80 mt-2",
                                        children: "✨ All data will be encrypted with FHEVM"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forge-course/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forge-course/page.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "p-8 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-bold text-white mb-2",
                                                children: [
                                                    "Course Title ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-accent",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forge-course/page.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forge-course/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                value: formData.title,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        title: e.target.value
                                                    }),
                                                placeholder: "e.g., Full-Stack Developer Training",
                                                className: "w-full px-4 py-3 glass rounded-2xl text-white placeholder-white/40 focus:outline-none transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/app/forge-course/page.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/forge-course/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-bold text-white mb-2",
                                                children: [
                                                    "Course Description ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-accent",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forge-course/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 38
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forge-course/page.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                required: true,
                                                value: formData.description,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        description: e.target.value
                                                    }),
                                                placeholder: "Describe course content and objectives...",
                                                rows: 4,
                                                className: "w-full px-4 py-3 glass rounded-2xl text-white placeholder-white/40 focus:outline-none transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/app/forge-course/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/forge-course/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-bold text-white mb-2",
                                                        children: "Category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forge-course/page.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: formData.category,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                category: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-3 glass rounded-2xl text-white focus:outline-none transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Programming",
                                                                children: "💻 Programming"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forge-course/page.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Design",
                                                                children: "🎨 Design"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forge-course/page.tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Business",
                                                                children: "💼 Business"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forge-course/page.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Data Science",
                                                                children: "📊 Data Science"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forge-course/page.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Blockchain",
                                                                children: "⛓️ Blockchain"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forge-course/page.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forge-course/page.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forge-course/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-bold text-white mb-2",
                                                        children: "Difficulty Level"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forge-course/page.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: formData.difficulty,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                difficulty: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-3 glass rounded-2xl text-white focus:outline-none transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Beginner",
                                                                children: "⭐ Beginner"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forge-course/page.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Intermediate",
                                                                children: "⭐⭐ Intermediate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forge-course/page.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Advanced",
                                                                children: "⭐⭐⭐ Advanced"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forge-course/page.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Expert",
                                                                children: "💎 Expert"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forge-course/page.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forge-course/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forge-course/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/forge-course/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-bold text-white mb-2",
                                                        children: [
                                                            "Total Challenges ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-accent",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forge-course/page.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 38
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forge-course/page.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        required: true,
                                                        min: "1",
                                                        value: formData.totalChallenges,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                totalChallenges: parseInt(e.target.value)
                                                            }),
                                                        className: "w-full px-4 py-3 glass rounded-2xl text-white focus:outline-none transition-all"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forge-course/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-white/50 mt-2",
                                                        children: "🔒 Will be encrypted with FHE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forge-course/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forge-course/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-bold text-white mb-2",
                                                        children: "Duration (days)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forge-course/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.duration,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                duration: e.target.value
                                                            }),
                                                        placeholder: "30",
                                                        className: "w-full px-4 py-3 glass rounded-2xl text-white placeholder-white/40 focus:outline-none transition-all"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forge-course/page.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forge-course/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/forge-course/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-dark rounded-2xl p-5 border border-primary/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl",
                                                    children: "💡"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forge-course/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-sm font-bold text-primary mb-2",
                                                            children: "Encryption Info"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forge-course/page.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-white/70 leading-relaxed",
                                                            children: "Challenge count will be stored on-chain using FHEVM homomorphic encryption. Data can be computed in encrypted state but cannot be viewed by unauthorized parties."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forge-course/page.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/forge-course/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/forge-course/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/forge-course/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isLoading,
                                        className: "w-full py-4 bg-gradient-purple rounded-2xl font-bold text-white shadow-glow hover:shadow-glow-cyan transition-all btn-glass disabled:opacity-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center justify-center space-x-2",
                                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forge-course/page.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Forging..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forge-course/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "✨"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forge-course/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Start Forging"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forge-course/page.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/app/forge-course/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/forge-course/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-dark rounded-2xl p-4 border border-white/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white/90 break-all",
                                            children: message
                                        }, void 0, false, {
                                            fileName: "[project]/app/forge-course/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/forge-course/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forge-course/page.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/forge-course/page.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/forge-course/page.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/forge-course/page.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/forge-course/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_3e4489c2._.js.map