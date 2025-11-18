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
"[project]/hooks/useBadges.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBadges",
    ()=>useBadges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$FhevmDecryptionSignature$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/FhevmDecryptionSignature.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const SKILLFORGE_ABI = [
    "function getBadge(uint256 badgeId) view returns (uint256 courseId, address earner, string badgeCID, uint256 claimedAt)",
    "function getBadgeEncryptedScore(uint256 badgeId) view returns (bytes32 encryptedTotalScoreHandle)",
    "function getCourse(uint256 courseId) view returns (address creator, string courseCID, bool active, uint256 forgedAt)",
    "function nextBadgeId() view returns (uint256)",
    "event BadgeClaimed(uint256 indexed badgeId, uint256 indexed courseId, address indexed earner, string badgeCID)"
];
function useBadges(parameters) {
    const { contractAddress, ethersReadonlyProvider, instance, ethersSigner, fhevmDecryptionSignatureStorage, chainId, userAddress } = parameters;
    const [badges, setBadges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!contractAddress || !ethersReadonlyProvider) return undefined;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(contractAddress, SKILLFORGE_ABI, ethersReadonlyProvider);
    }, [
        contractAddress,
        ethersReadonlyProvider
    ]);
    // 获取所有证书
    const fetchBadges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!contract) {
            setBadges([]);
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const allBadges = [];
            try {
                // 通过事件获取所有BadgeClaimed事件
                const filter = contract.filters.BadgeClaimed();
                const events = await contract.queryFilter(filter);
                // 从事件中提取badge IDs
                const badgeIds = new Set();
                events.forEach((event)=>{
                    if (event.args && event.args.badgeId) {
                        const badgeId = Number(event.args.badgeId);
                        const earner = event.args.earner;
                        // 如果指定了userAddress，只获取该用户的证书
                        if (!userAddress || earner.toLowerCase() === userAddress.toLowerCase()) {
                            badgeIds.add(badgeId);
                        }
                    }
                });
                // 并行获取每个证书的详情
                const badgePromises = Array.from(badgeIds).map(async (id)=>{
                    try {
                        const [courseId, earner, badgeCID, claimedAt] = await contract.getBadge(id);
                        // 再次检查用户地址（双重检查）
                        if (userAddress && earner.toLowerCase() !== userAddress.toLowerCase()) {
                            return null;
                        }
                        // 获取路径信息
                        let courseCID = "";
                        try {
                            const [creator, pCID, active, createdAt] = await contract.getCourse(Number(courseId));
                            courseCID = pCID;
                        } catch (e) {
                            console.log(`Error fetching path ${courseId}:`, e);
                        }
                        return {
                            id,
                            courseId: Number(courseId),
                            earner,
                            badgeCID,
                            claimedAt: Number(claimedAt),
                            courseCID
                        };
                    } catch (e) {
                        console.log(`Error fetching badge ${id}:`, e);
                        return null;
                    }
                });
                const results = await Promise.all(badgePromises);
                results.forEach((badge)=>{
                    if (badge) {
                        allBadges.push(badge);
                    }
                });
            } catch (e) {
                console.error("Error querying events:", e);
                // Fallback: 如果事件查询失败，尝试使用nextBadgeId
                try {
                    const nextId = await contract.nextBadgeId();
                    const totalBadges = Number(nextId);
                    for(let i = 1; i < totalBadges; i++){
                        try {
                            const [courseId, earner, badgeCID, claimedAt] = await contract.getBadge(i);
                            // 如果指定了userAddress，只获取该用户的证书
                            if (userAddress && earner.toLowerCase() !== userAddress.toLowerCase()) {
                                continue;
                            }
                            // 获取路径信息
                            let courseCID = "";
                            try {
                                const [creator, pCID, active, createdAt] = await contract.getCourse(Number(courseId));
                                courseCID = pCID;
                            } catch (e) {
                                console.log(`Error fetching path ${courseId}:`, e);
                            }
                            allBadges.push({
                                id: i,
                                courseId: Number(courseId),
                                earner,
                                badgeCID,
                                claimedAt: Number(claimedAt),
                                courseCID
                            });
                        } catch (e) {
                        // 跳过不存在的证书
                        }
                    }
                } catch (fallbackError) {
                    console.error("Fallback method also failed:", fallbackError);
                }
            }
            // 按铸造时间倒序排列
            allBadges.sort((a, b)=>b.claimedAt - a.claimedAt);
            setBadges(allBadges);
        } catch (e) {
            console.error("Error fetching badges:", e);
            setError(e.message || "Failed to fetch badges");
        } finally{
            setIsLoading(false);
        }
    }, [
        contract,
        userAddress
    ]);
    // 获取单个证书详情
    const fetchBadge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (badgeId)=>{
        if (!contract) return null;
        try {
            const [courseId, earner, badgeCID, claimedAt] = await contract.getBadge(badgeId);
            // 获取路径信息
            let courseCID = "";
            try {
                const [creator, pCID, active, createdAt] = await contract.getCourse(Number(courseId));
                courseCID = pCID;
            } catch (e) {
                console.log(`Error fetching path ${courseId}:`, e);
            }
            return {
                id: badgeId,
                courseId: Number(courseId),
                earner,
                badgeCID,
                claimedAt: Number(claimedAt),
                courseCID
            };
        } catch (e) {
            console.error(`Error fetching badge ${badgeId}:`, e);
            return null;
        }
    }, [
        contract
    ]);
    // 解密证书分数
    const decryptBadgeScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (badgeId)=>{
        if (!instance || !ethersSigner || !contractAddress || !contract) {
            return null;
        }
        try {
            // 获取证书的加密分数handle
            const encryptedScoreHandle = await contract.getBadgeEncryptedScore(badgeId);
            // 将handle转换为字符串格式
            const handle = typeof encryptedScoreHandle === 'string' ? encryptedScoreHandle : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].hexlify(encryptedScoreHandle);
            // 构建解密签名
            const sig = await __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$FhevmDecryptionSignature$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FhevmDecryptionSignature"].loadOrSign(instance, [
                contractAddress
            ], ethersSigner, fhevmDecryptionSignatureStorage);
            if (!sig) {
                return null;
            }
            // 解密
            const res = await instance.userDecrypt([
                {
                    handle,
                    contractAddress
                }
            ], sig.privateKey, sig.publicKey, sig.signature, sig.contractAddresses, sig.userAddress, sig.startTimestamp, sig.durationDays);
            return res[handle] || null;
        } catch (e) {
            console.error("Error decrypting badge score:", e);
            return null;
        }
    }, [
        instance,
        ethersSigner,
        contractAddress,
        fhevmDecryptionSignatureStorage,
        contract
    ]);
    // 为证书解密分数并更新状态
    const decryptAndUpdateBadge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (badgeId)=>{
        const score = await decryptBadgeScore(badgeId);
        if (score !== null) {
            setBadges((prev)=>prev.map((badge)=>badge.id === badgeId ? {
                        ...badge,
                        decryptedScore: score
                    } : badge));
        }
        return score;
    }, [
        decryptBadgeScore
    ]);
    // 监听事件
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!contract || !ethersReadonlyProvider) return;
        const filter = contract.filters.BadgeClaimed();
        const handleClaimed = ()=>{
            console.log("New badge claimed, refreshing...");
            fetchBadges();
        };
        // 监听事件
        contract.on(filter, handleClaimed);
        // 初始加载
        fetchBadges();
        return ()=>{
            contract.off(filter, handleClaimed);
        };
    }, [
        contract,
        ethersReadonlyProvider,
        fetchBadges
    ]);
    return {
        badges,
        isLoading,
        error,
        fetchBadges,
        fetchBadge,
        decryptBadgeScore,
        decryptAndUpdateBadge
    };
}
}),
"[project]/app/badges/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BadgesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WalletGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WalletGuard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$metamask$2f$useMetaMaskEthersSigner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/metamask/useMetaMaskEthersSigner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$useFhevm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/useFhevm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useInMemoryStorage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useBadges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useBadges.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
function BadgesPage() {
    const { storage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInMemoryStorage"])();
    const { provider, chainId, ethersSigner, ethersReadonlyProvider, initialMockChains, isConnected, accounts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$metamask$2f$useMetaMaskEthersSigner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMetaMaskEthersSigner"])();
    const { instance: fhevmInstance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$useFhevm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFhevm"])({
        provider,
        chainId,
        initialMockChains,
        enabled: isConnected
    });
    const { badges, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useBadges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBadges"])({
        contractAddress: CONTRACT_ADDRESS,
        ethersReadonlyProvider,
        instance: fhevmInstance,
        ethersSigner,
        fhevmDecryptionSignatureStorage: storage,
        chainId,
        userAddress: accounts[0]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WalletGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-5rem)] py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center space-x-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 w-8 bg-gradient-purple rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/badges/page.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-5xl animate-float",
                                        children: "🏆"
                                    }, void 0, false, {
                                        fileName: "[project]/app/badges/page.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 w-8 bg-gradient-purple rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/badges/page.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/badges/page.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-display font-black mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "My Badges"
                                }, void 0, false, {
                                    fileName: "[project]/app/badges/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/badges/page.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/80 text-lg",
                                children: "Your forged achievement badges"
                            }, void 0, false, {
                                fileName: "[project]/app/badges/page.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/badges/page.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-block h-12 w-12 border-4 border-white/20 border-t-primary rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/app/badges/page.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/70 mt-4",
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/app/badges/page.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/badges/page.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, this) : badges.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-strong rounded-3xl p-12 max-w-md mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-7xl mb-6 animate-float",
                                    children: "🏅"
                                }, void 0, false, {
                                    fileName: "[project]/app/badges/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-white mb-3",
                                    children: "No Badges Yet"
                                }, void 0, false, {
                                    fileName: "[project]/app/badges/page.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/60",
                                    children: "Complete course challenges to claim badges"
                                }, void 0, false, {
                                    fileName: "[project]/app/badges/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/badges/page.tsx",
                            lineNumber: 40,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/badges/page.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: badges.map((badge, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-3xl p-6 shadow-glass hover:shadow-glass-lg transition-all",
                                style: {
                                    animationDelay: `${index * 0.1}s`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-purple text-5xl mb-4 shadow-glow transform group-hover:scale-110 transition-transform animate-float",
                                                style: {
                                                    animationDelay: `${index * 0.2}s`
                                                },
                                                children: "🏆"
                                            }, void 0, false, {
                                                fileName: "[project]/app/badges/page.tsx",
                                                lineNumber: 51,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-display font-black gradient-text",
                                                children: [
                                                    "Badge #",
                                                    badge.id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/badges/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/badges/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-dark rounded-xl p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-xs mb-1",
                                                        children: "Course"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/badges/page.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-bold",
                                                        children: [
                                                            "#",
                                                            badge.courseId
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/badges/page.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/badges/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-dark rounded-xl p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-xs mb-1",
                                                        children: "Owner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/badges/page.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-mono text-xs",
                                                        children: badge.earner ? `${badge.earner.slice(0, 16)}...` : 'Unknown'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/badges/page.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/badges/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-dark rounded-xl p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-xs mb-1",
                                                        children: "Claimed At"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/badges/page.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white",
                                                        children: badge.claimedAt ? new Date(badge.claimedAt * 1000).toLocaleDateString('en-US') : 'Unknown'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/badges/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/badges/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 21
                                            }, this),
                                            badge.decryptedScore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-dark rounded-xl p-3 border border-primary/30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-primary font-bold text-lg",
                                                    children: [
                                                        "💎 Total Score: ",
                                                        badge.decryptedScore.toString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/badges/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/badges/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/badges/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, badge.id, true, {
                                fileName: "[project]/app/badges/page.tsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/badges/page.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/badges/page.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/badges/page.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/badges/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/idb/build/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteDB",
    ()=>deleteDB,
    "openDB",
    ()=>openDB,
    "unwrap",
    ()=>unwrap,
    "wrap",
    ()=>wrap
]);
const instanceOfAny = (object, constructors)=>constructors.some((c)=>object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
        IDBDatabase,
        IDBObjectStore,
        IDBIndex,
        IDBCursor,
        IDBTransaction
    ]);
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey
    ]);
}
const transactionDoneMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = ()=>{
            resolve(wrap(request.result));
            unlisten();
        };
        const error = ()=>{
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    // This mapping exists in reverseTransformCache but doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx)) return;
    const done = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = ()=>{
            resolve();
            unlisten();
        };
        const error = ()=>{
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get (target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done') return transactionDoneMap.get(target);
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set (target, prop, value) {
        target[prop] = value;
        return true;
    },
    has (target, prop) {
        if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    }
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function(...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(this.request);
        };
    }
    return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function') return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest) return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value)) return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value)=>reverseTransformCache.get(value);
/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */ function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event)=>{
            upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
        });
    }
    if (blocked) {
        request.addEventListener('blocked', (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
            event.oldVersion, event.newVersion, event));
    }
    openPromise.then((db)=>{
        if (terminated) db.addEventListener('close', ()=>terminated());
        if (blocking) {
            db.addEventListener('versionchange', (event)=>blocking(event.oldVersion, event.newVersion, event));
        }
    }).catch(()=>{});
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */ function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
        request.addEventListener('blocked', (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
            event.oldVersion, event));
    }
    return wrap(request).then(()=>undefined);
}
const readMethods = [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
];
const writeMethods = [
    'put',
    'add',
    'delete',
    'clear'
];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop)) return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (// Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function(storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex) target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
replaceTraps((oldTraps)=>({
        ...oldTraps,
        get: (target, prop, receiver)=>getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop)=>!!getMethod(target, prop) || oldTraps.has(target, prop)
    }));
const advanceMethodProps = [
    'continue',
    'continuePrimaryKey',
    'advance'
];
const methodMap = {};
const advanceResults = new WeakMap();
const ittrProxiedCursorToOriginalProxy = new WeakMap();
const cursorIteratorTraps = {
    get (target, prop) {
        if (!advanceMethodProps.includes(prop)) return target[prop];
        let cachedFunc = methodMap[prop];
        if (!cachedFunc) {
            cachedFunc = methodMap[prop] = function(...args) {
                advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
            };
        }
        return cachedFunc;
    }
};
async function* iterate(...args) {
    // tslint:disable-next-line:no-this-assignment
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
        cursor = await cursor.openCursor(...args);
    }
    if (!cursor) return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    // Map this double-proxy back to the original, so other cursor methods work.
    reverseTransformCache.set(proxiedCursor, unwrap(cursor));
    while(cursor){
        yield proxiedCursor;
        // If one of the advancing methods was not called, call continue().
        cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
        advanceResults.delete(proxiedCursor);
    }
}
function isIteratorProp(target, prop) {
    return prop === Symbol.asyncIterator && instanceOfAny(target, [
        IDBIndex,
        IDBObjectStore,
        IDBCursor
    ]) || prop === 'iterate' && instanceOfAny(target, [
        IDBIndex,
        IDBObjectStore
    ]);
}
replaceTraps((oldTraps)=>({
        ...oldTraps,
        get (target, prop, receiver) {
            if (isIteratorProp(target, prop)) return iterate;
            return oldTraps.get(target, prop, receiver);
        },
        has (target, prop) {
            return isIteratorProp(target, prop) || oldTraps.has(target, prop);
        }
    }));
;
}),
];

//# sourceMappingURL=_77deba70._.js.map