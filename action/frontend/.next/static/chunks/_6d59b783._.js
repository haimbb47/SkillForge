(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/WalletGuard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WalletGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$metamask$2f$useMetaMaskEthersSigner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/metamask/useMetaMaskEthersSigner.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function WalletGuard(param) {
    let { children } = param;
    _s();
    const { isConnected, connect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$metamask$2f$useMetaMaskEthersSigner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetaMaskEthersSigner"])();
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-5rem)] flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-strong rounded-3xl p-10 shadow-glass-lg text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-purple opacity-5 rounded-3xl blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/components/WalletGuard.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-purple text-5xl mb-6 shadow-glow animate-float",
                                    children: "🔗"
                                }, void 0, false, {
                                    fileName: "[project]/components/WalletGuard.tsx",
                                    lineNumber: 18,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-display font-black mb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1 w-16 bg-gradient-purple mx-auto mb-6 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/WalletGuard.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/80 mb-8 leading-relaxed",
                                    children: "Please connect your MetaMask wallet to access SkillForge"
                                }, void 0, false, {
                                    fileName: "[project]/components/WalletGuard.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: connect,
                                    className: "w-full py-4 glass-strong rounded-2xl font-bold shadow-glow hover:shadow-glow-cyan transition-all btn-glass group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center justify-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "🚀"
                                            }, void 0, false, {
                                                fileName: "[project]/components/WalletGuard.tsx",
                                                lineNumber: 34,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 glass-dark rounded-2xl p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: "💡"
                                            }, void 0, false, {
                                                fileName: "[project]/components/WalletGuard.tsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex items-center justify-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px w-12 bg-gradient-to-r from-transparent to-white/20"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WalletGuard.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-1.5 w-1.5 bg-primary rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WalletGuard.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-1.5 w-1.5 bg-secondary rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WalletGuard.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(WalletGuard, "PgAmxUU26aCchOZA5zNWOi256Ko=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$metamask$2f$useMetaMaskEthersSigner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetaMaskEthersSigner"]
    ];
});
_c = WalletGuard;
var _c;
__turbopack_context__.k.register(_c, "WalletGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useValidatedProofs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useValidatedProofs",
    ()=>useValidatedProofs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SKILLFORGE_ABI = [
    "function getProof(uint256 proofId) view returns (uint256 courseId, uint256 challengeId, address learner, string proofCID, uint8 status, address validator, uint256 submittedAt)",
    "function getProofEncryptedScore(uint256 proofId) view returns (bytes32 encryptedScoreHandle)",
    "event ProofValidated(uint256 indexed proofId, address indexed validator, uint8 status)"
];
function useValidatedProofs(parameters) {
    _s();
    const { contractAddress, ethersReadonlyProvider } = parameters;
    const [proofs, setProofs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useValidatedProofs.useMemo[contract]": ()=>{
            if (!contractAddress || !ethersReadonlyProvider) return undefined;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(contractAddress, SKILLFORGE_ABI, ethersReadonlyProvider);
        }
    }["useValidatedProofs.useMemo[contract]"], [
        contractAddress,
        ethersReadonlyProvider
    ]);
    // 获取所有已审核的提交
    const fetchValidatedProofs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useValidatedProofs.useCallback[fetchValidatedProofs]": async ()=>{
            if (!contract) {
                setProofs([]);
                return;
            }
            setIsLoading(true);
            setError(null);
            try {
                // 通过事件获取所有ProofValidated事件
                const allProofs = [];
                try {
                    // 查询所有ProofValidated事件
                    const filter = contract.filters.ProofValidated();
                    const events = await contract.queryFilter(filter);
                    // 从事件中提取proof IDs
                    const proofIds = new Set();
                    events.forEach({
                        "useValidatedProofs.useCallback[fetchValidatedProofs]": (event)=>{
                            if (event.args && event.args.proofId) {
                                proofIds.add(Number(event.args.proofId));
                            }
                        }
                    }["useValidatedProofs.useCallback[fetchValidatedProofs]"]);
                    // 并行获取每个proof的详情
                    const proofPromises = Array.from(proofIds).map({
                        "useValidatedProofs.useCallback[fetchValidatedProofs].proofPromises": async (id)=>{
                            try {
                                const [courseId, challengeId, learner, proofCID, status, validator, submittedAt] = await contract.getProof(id);
                                // 只返回已审核的（status === 1 或 2）
                                const statusNum = Number(status);
                                if (statusNum === 1 || statusNum === 2) {
                                    // 获取加密分数handle
                                    let encryptedScoreHandle;
                                    try {
                                        encryptedScoreHandle = await contract.getProofEncryptedScore(id);
                                    } catch (e) {
                                        console.log("Could not get encrypted score for ".concat(id));
                                    }
                                    return {
                                        id,
                                        courseId: Number(courseId),
                                        challengeId: Number(challengeId),
                                        learner,
                                        proofCID,
                                        status: statusNum,
                                        validator,
                                        submittedAt: Number(submittedAt),
                                        encryptedScoreHandle
                                    };
                                }
                                return null;
                            } catch (e) {
                                console.log("Error fetching proof ".concat(id, ":"), e);
                                return null;
                            }
                        }
                    }["useValidatedProofs.useCallback[fetchValidatedProofs].proofPromises"]);
                    const results = await Promise.all(proofPromises);
                    results.forEach({
                        "useValidatedProofs.useCallback[fetchValidatedProofs]": (sub)=>{
                            if (sub) {
                                allProofs.push(sub);
                            }
                        }
                    }["useValidatedProofs.useCallback[fetchValidatedProofs]"]);
                } catch (e) {
                    console.error("Error querying events:", e);
                }
                // 按提交时间倒序排列
                allProofs.sort({
                    "useValidatedProofs.useCallback[fetchValidatedProofs]": (a, b)=>b.submittedAt - a.submittedAt
                }["useValidatedProofs.useCallback[fetchValidatedProofs]"]);
                setProofs(allProofs);
            } catch (e) {
                console.error("Error fetching validated proofs:", e);
                setError(e.message || "Failed to fetch proofs");
            } finally{
                setIsLoading(false);
            }
        }
    }["useValidatedProofs.useCallback[fetchValidatedProofs]"], [
        contract
    ]);
    // 监听事件
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useValidatedProofs.useEffect": ()=>{
            if (!contract || !ethersReadonlyProvider) return;
            const filterValidated = contract.filters.ProofValidated();
            const handleValidated = {
                "useValidatedProofs.useEffect.handleValidated": ()=>{
                    console.log("Proof validated, refreshing...");
                    fetchValidatedProofs();
                }
            }["useValidatedProofs.useEffect.handleValidated"];
            // 监听事件
            contract.on(filterValidated, handleValidated);
            // 初始加载
            fetchValidatedProofs();
            return ({
                "useValidatedProofs.useEffect": ()=>{
                    contract.off(filterValidated, handleValidated);
                }
            })["useValidatedProofs.useEffect"];
        }
    }["useValidatedProofs.useEffect"], [
        contract,
        ethersReadonlyProvider,
        fetchValidatedProofs
    ]);
    // 计算统计数据
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useValidatedProofs.useMemo[stats]": ()=>{
            const approved = proofs.filter({
                "useValidatedProofs.useMemo[stats]": (s)=>s.status === 1
            }["useValidatedProofs.useMemo[stats]"]).length;
            const rejected = proofs.filter({
                "useValidatedProofs.useMemo[stats]": (s)=>s.status === 2
            }["useValidatedProofs.useMemo[stats]"]).length;
            const decrypted = proofs.filter({
                "useValidatedProofs.useMemo[stats]": (s)=>s.decryptedScore !== undefined
            }["useValidatedProofs.useMemo[stats]"]).length;
            return {
                total: proofs.length,
                approved,
                rejected,
                decrypted
            };
        }
    }["useValidatedProofs.useMemo[stats]"], [
        proofs
    ]);
    return {
        proofs,
        stats,
        isLoading,
        error,
        fetchValidatedProofs
    };
}
_s(useValidatedProofs, "ysVH3und7zgdf6lteZUBv5q4eUM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/fhevm/internal/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SDK_CDN_URL",
    ()=>SDK_CDN_URL
]);
const SDK_CDN_URL = "https://cdn.zama.ai/relayer-sdk-js/0.2.0/relayer-sdk-js.umd.cjs";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/fhevm/internal/RelayerSDKLoader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RelayerSDKLoader",
    ()=>RelayerSDKLoader,
    "isFhevmWindowType",
    ()=>isFhevmWindowType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/internal/constants.ts [app-client] (ecmascript)");
;
;
class RelayerSDKLoader {
    isLoaded() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return isFhevmWindowType(window, this._trace);
    }
    load() {
        console.log("[RelayerSDKLoader] load...");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if ("relayerSDK" in window) {
            if (!isFhevmRelayerSDKType(window.relayerSDK, this._trace)) {
                console.log("[RelayerSDKLoader] window.relayerSDK === undefined");
                throw new Error("RelayerSDKLoader: Unable to load FHEVM Relayer SDK");
            }
            return Promise.resolve();
        }
        return new Promise((resolve, reject)=>{
            const existingScript = document.querySelector('script[src="'.concat(__TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_CDN_URL"], '"]'));
            if (existingScript) {
                if (!isFhevmWindowType(window, this._trace)) {
                    reject(new Error("RelayerSDKLoader: window object does not contain a valid relayerSDK object."));
                }
                resolve();
                return;
            }
            const script = document.createElement("script");
            script.src = __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_CDN_URL"];
            script.type = "text/javascript";
            script.async = true;
            script.onload = ()=>{
                if (!isFhevmWindowType(window, this._trace)) {
                    console.log("[RelayerSDKLoader] script onload FAILED...");
                    reject(new Error("RelayerSDKLoader: Relayer SDK script has been successfully loaded from ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_CDN_URL"], ", however, the window.relayerSDK object is invalid.")));
                }
                resolve();
            };
            script.onerror = ()=>{
                console.log("[RelayerSDKLoader] script onerror... ");
                reject(new Error("RelayerSDKLoader: Failed to load Relayer SDK from ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_CDN_URL"])));
            };
            console.log("[RelayerSDKLoader] add script to DOM...");
            document.head.appendChild(script);
            console.log("[RelayerSDKLoader] script added!");
        });
    }
    constructor(options){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_trace", void 0);
        this._trace = options.trace;
    }
}
function isFhevmRelayerSDKType(o, trace) {
    if (typeof o === "undefined") {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK is undefined");
        return false;
    }
    if (o === null) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK is null");
        return false;
    }
    if (typeof o !== "object") {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK is not an object");
        return false;
    }
    if (!objHasProperty(o, "initSDK", "function", trace)) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK.initSDK is invalid");
        return false;
    }
    if (!objHasProperty(o, "createInstance", "function", trace)) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK.createInstance is invalid");
        return false;
    }
    if (!objHasProperty(o, "SepoliaConfig", "object", trace)) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK.SepoliaConfig is invalid");
        return false;
    }
    if ("__initialized__" in o) {
        if (o.__initialized__ !== true && o.__initialized__ !== false) {
            trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK.__initialized__ is invalid");
            return false;
        }
    }
    return true;
}
function isFhevmWindowType(win, trace) {
    if (typeof win === "undefined") {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: window object is undefined");
        return false;
    }
    if (win === null) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: window object is null");
        return false;
    }
    if (typeof win !== "object") {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: window is not an object");
        return false;
    }
    if (!("relayerSDK" in win)) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: window does not contain 'relayerSDK' property");
        return false;
    }
    return isFhevmRelayerSDKType(win.relayerSDK);
}
function objHasProperty(obj, propertyName, propertyType, trace) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (!(propertyName in obj)) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: missing ".concat(String(propertyName), "."));
        return false;
    }
    const value = obj[propertyName];
    if (value === null || value === undefined) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: ".concat(String(propertyName), " is null or undefined."));
        return false;
    }
    if (typeof value !== propertyType) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: ".concat(String(propertyName), " is not a ").concat(propertyType, "."));
        return false;
    }
    return true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/fhevm/internal/PublicKeyStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "publicKeyStorageGet",
    ()=>publicKeyStorageGet,
    "publicKeyStorageSet",
    ()=>publicKeyStorageSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/idb/build/index.js [app-client] (ecmascript)");
;
let __dbPromise = undefined;
async function _getDB() {
    if (__dbPromise) {
        return __dbPromise;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    __dbPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openDB"])("fhevm", 1, {
        upgrade (db) {
            if (!db.objectStoreNames.contains("paramsStore")) {
                db.createObjectStore("paramsStore", {
                    keyPath: "acl"
                });
            }
            if (!db.objectStoreNames.contains("publicKeyStore")) {
                db.createObjectStore("publicKeyStore", {
                    keyPath: "acl"
                });
            }
        }
    });
    return __dbPromise;
}
function assertFhevmStoredPublicKey(value) {
    if (typeof value !== "object") {
        throw new Error("FhevmStoredPublicKey must be an object");
    }
    if (value === null) {
        return;
    }
    if (!("publicKeyId" in value)) {
        throw new Error("FhevmStoredPublicKey.publicKeyId does not exist");
    }
    if (typeof value.publicKeyId !== "string") {
        throw new Error("FhevmStoredPublicKey.publicKeyId must be a string");
    }
    if (!("publicKey" in value)) {
        throw new Error("FhevmStoredPublicKey.publicKey does not exist");
    }
    if (!(value.publicKey instanceof Uint8Array)) {
        throw new Error("FhevmStoredPublicKey.publicKey must be a Uint8Array");
    }
}
function assertFhevmStoredPublicParams(value) {
    if (typeof value !== "object") {
        throw new Error("FhevmStoredPublicParams must be an object");
    }
    if (value === null) {
        return;
    }
    if (!("publicParamsId" in value)) {
        throw new Error("FhevmStoredPublicParams.publicParamsId does not exist");
    }
    if (typeof value.publicParamsId !== "string") {
        throw new Error("FhevmStoredPublicParams.publicParamsId must be a string");
    }
    if (!("publicParams" in value)) {
        throw new Error("FhevmStoredPublicParams.publicParams does not exist");
    }
    if (!(value.publicParams instanceof Uint8Array)) {
        throw new Error("FhevmStoredPublicParams.publicParams must be a Uint8Array");
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
        if (pk === null || pk === void 0 ? void 0 : pk.value) {
            assertFhevmStoredPublicKey(pk.value);
            storedPublicKey = pk.value;
        }
    } catch (e) {
    //
    }
    let storedPublicParams = null;
    try {
        const pp = await db.get("paramsStore", aclAddress);
        if (pp === null || pp === void 0 ? void 0 : pp.value) {
            assertFhevmStoredPublicParams(pp.value);
            storedPublicParams = pp.value;
        }
    } catch (e) {
    //
    }
    const publicKeyData = storedPublicKey === null || storedPublicKey === void 0 ? void 0 : storedPublicKey.publicKey;
    const publicKeyId = storedPublicKey === null || storedPublicKey === void 0 ? void 0 : storedPublicKey.publicKeyId;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/fhevm/internal/fhevm.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmAbortError",
    ()=>FhevmAbortError,
    "FhevmReactError",
    ()=>FhevmReactError,
    "createFhevmInstance",
    ()=>createFhevmInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/address/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/internal/RelayerSDKLoader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$PublicKeyStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/internal/PublicKeyStorage.ts [app-client] (ecmascript)");
;
;
;
;
class FhevmReactError extends Error {
    constructor(code, message, options){
        super(message, options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "code", void 0);
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
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmWindowType"])(window, console.log)) {
        return false;
    }
    return window.relayerSDK.__initialized__ === true;
};
const fhevmLoadSDK = ()=>{
    const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RelayerSDKLoader"]({
        trace: console.log
    });
    return loader.load();
};
const fhevmInitSDK = async (options)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmWindowType"])(window, console.log)) {
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
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(a)) {
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
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](providerOrUrl);
        return Number((await provider.getNetwork()).chainId);
    }
    const chainId = await providerOrUrl.request({
        method: "eth_chainId"
    });
    return Number.parseInt(chainId, 16);
}
async function getWeb3Client(rpcUrl) {
    const rpc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](rpcUrl);
    try {
        const version = await rpc.send("web3_clientVersion", []);
        return version;
    } catch (e) {
        throwFhevmError("WEB3_CLIENTVERSION_ERROR", "The URL ".concat(rpcUrl, " is not a Web3 node or is not reachable. Please check the endpoint."), e);
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
    } catch (e) {
        return undefined;
    }
}
async function getFHEVMRelayerMetadata(rpcUrl) {
    const rpc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](rpcUrl);
    try {
        const version = await rpc.send("fhevm_relayer_metadata", []);
        return version;
    } catch (e) {
        throwFhevmError("FHEVM_RELAYER_METADATA_ERROR", "The URL ".concat(rpcUrl, " is not a FHEVM Hardhat node or is not reachable. Please check the endpoint."), e);
    } finally{
        rpc.destroy();
    }
}
async function resolve(providerOrUrl, mockChains) {
    const chainId = await getChainId(providerOrUrl);
    let rpcUrl = typeof providerOrUrl === "string" ? providerOrUrl : undefined;
    const _mockChains = {
        31337: "http://localhost:8545",
        ...mockChains !== null && mockChains !== void 0 ? mockChains : {}
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
            const fhevmMock = await __turbopack_context__.A("[project]/fhevm/internal/mock/fhevmMock.ts [app-client] (ecmascript, async loader)");
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
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmWindowType"])(window, console.log)) {
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
        throw new Error("Invalid address: ".concat(aclAddress));
    }
    const pub = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$PublicKeyStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicKeyStorageGet"])(aclAddress);
    throwIfAborted();
    const config = {
        ...relayerSDK.SepoliaConfig,
        network: providerOrUrl,
        publicKey: pub.publicKey,
        publicParams: pub.publicParams
    };
    notify("creating");
    const instance = await relayerSDK.createInstance(config);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$PublicKeyStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicKeyStorageSet"])(aclAddress, instance.getPublicKey(), instance.getPublicParams(2048));
    throwIfAborted();
    return instance;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/fhevm/useFhevm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFhevm",
    ()=>useFhevm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$fhevm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/internal/fhevm.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function _assert(condition, message) {
    if (!condition) {
        const m = message ? "Assertion failed: ".concat(message) : "Assertion failed.";
        console.error(m);
        throw new Error(m);
    }
}
function useFhevm(parameters) {
    _s();
    const { provider, chainId, initialMockChains, enabled = true } = parameters;
    const [instance, _setInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [status, _setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [error, _setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [_isRunning, _setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(enabled);
    const [_providerChanged, _setProviderChanged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const _abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const _providerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(provider);
    const _chainIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(chainId);
    const _mockChainsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initialMockChains);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFhevm.useCallback[refresh]": ()=>{
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
                _setProviderChanged({
                    "useFhevm.useCallback[refresh]": (prev)=>prev + 1
                }["useFhevm.useCallback[refresh]"]);
            }
        }
    }["useFhevm.useCallback[refresh]"], [
        provider,
        chainId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFhevm.useEffect": ()=>{
            refresh();
        }
    }["useFhevm.useEffect"], [
        refresh
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFhevm.useEffect": ()=>{
            _setIsRunning(enabled);
        }
    }["useFhevm.useEffect"], [
        enabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFhevm.useEffect": ()=>{
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$fhevm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFhevmInstance"])({
                    signal: thisSignal,
                    provider: thisProvider,
                    mockChains: thisRpcUrlsByChainId,
                    onStatusChange: {
                        "useFhevm.useEffect": (s)=>console.log("[useFhevm] createFhevmInstance status changed: ".concat(s))
                    }["useFhevm.useEffect"]
                }).then({
                    "useFhevm.useEffect": (i)=>{
                        console.log("[useFhevm] createFhevmInstance created!");
                        if (thisSignal.aborted) return;
                        _assert(thisProvider === _providerRef.current, "thisProvider === _providerRef.current");
                        _setInstance(i);
                        _setError(undefined);
                        _setStatus("ready");
                    }
                }["useFhevm.useEffect"]).catch({
                    "useFhevm.useEffect": (e)=>{
                        console.log("Error Was thrown !!! error... " + e.name);
                        if (thisSignal.aborted) return;
                        _assert(thisProvider === _providerRef.current, "thisProvider === _providerRef.current");
                        _setInstance(undefined);
                        _setError(e);
                        _setStatus("error");
                    }
                }["useFhevm.useEffect"]);
            }
        }
    }["useFhevm.useEffect"], [
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
_s(useFhevm, "FnHDS2iQ+HIIYWVBLBtg967ZgT8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/fhevm/GenericStringStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GenericStringInMemoryStorage",
    ()=>GenericStringInMemoryStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
;
;
var _store = /*#__PURE__*/ new WeakMap();
class GenericStringInMemoryStorage {
    getItem(key) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _store).has(key) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _store).get(key) : null;
    }
    setItem(key, value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _store).set(key, value);
    }
    removeItem(key) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _store).delete(key);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _store, {
            writable: true,
            value: new Map()
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useInMemoryStorage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInMemoryStorage",
    ()=>useInMemoryStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$GenericStringStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/GenericStringStorage.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useInMemoryStorage() {
    _s();
    const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useInMemoryStorage.useMemo[storage]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$GenericStringStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenericStringInMemoryStorage"]()
    }["useInMemoryStorage.useMemo[storage]"], []);
    return {
        storage
    };
}
_s(useInMemoryStorage, "yvOIewgf/X9JQTBy9oa2LBBO0cI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/fhevm/FhevmDecryptionSignature.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmDecryptionSignature",
    ()=>FhevmDecryptionSignature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
;
;
;
function _timestampNow() {
    return Math.floor(Date.now() / 1000);
}
var _contractAddresses = /*#__PURE__*/ new WeakMap(), _userAddress = /*#__PURE__*/ new WeakMap(), _publicKey = /*#__PURE__*/ new WeakMap(), _key = /*#__PURE__*/ new WeakMap();
class FhevmDecryptionSignatureStorageKey {
    get contractAddresses() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses);
    }
    get userAddress() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress);
    }
    get publicKey() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey);
    }
    get key() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _key);
    }
    constructor(instance, contractAddresses, userAddress, publicKey){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _key, {
            writable: true,
            value: void 0
        });
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(userAddress)) {
            throw new TypeError("Invalid address ".concat(userAddress));
        }
        const sortedContractAddresses = contractAddresses.sort();
        const emptyEIP712 = instance.createEIP712(publicKey !== null && publicKey !== void 0 ? publicKey : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress, sortedContractAddresses, 0, 0);
        try {
            const hash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].TypedDataEncoder.hash(emptyEIP712.domain, {
                UserDecryptRequestVerification: emptyEIP712.types.UserDecryptRequestVerification
            }, emptyEIP712.message);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses, sortedContractAddresses);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress, userAddress);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _key, "".concat(userAddress, ":").concat(hash));
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}
var _publicKey1 = /*#__PURE__*/ new WeakMap(), _privateKey = /*#__PURE__*/ new WeakMap(), _signature = /*#__PURE__*/ new WeakMap(), _startTimestamp = /*#__PURE__*/ new WeakMap(), _durationDays = /*#__PURE__*/ new WeakMap(), _userAddress1 = /*#__PURE__*/ new WeakMap(), _contractAddresses1 = /*#__PURE__*/ new WeakMap(), _eip712 = /*#__PURE__*/ new WeakMap();
class FhevmDecryptionSignature {
    get privateKey() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _privateKey);
    }
    get publicKey() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey1);
    }
    get signature() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signature);
    }
    get contractAddresses() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1);
    }
    get startTimestamp() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startTimestamp);
    }
    get durationDays() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _durationDays);
    }
    get userAddress() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress1);
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
            publicKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey1),
            privateKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _privateKey),
            signature: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signature),
            startTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startTimestamp),
            durationDays: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _durationDays),
            userAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress1),
            contractAddresses: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1),
            eip712: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _eip712)
        };
    }
    static fromJSON(json) {
        const data = typeof json === "string" ? JSON.parse(json) : json;
        return new FhevmDecryptionSignature(data);
    }
    isValid() {
        return _timestampNow() < (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startTimestamp) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _durationDays) * 24 * 60 * 60;
    }
    async saveToGenericStringStorage(storage, instance, withPublicKey) {
        try {
            const value = JSON.stringify(this);
            const storageKey = new FhevmDecryptionSignatureStorageKey(instance, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress1), withPublicKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey1) : undefined);
            await storage.setItem(storageKey.key, value);
            console.log("signature saved! contracts=".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1).length));
        } catch (e) {
            console.error("FhevmDecryptionSignature.saveToGenericStringStorage() failed!");
        }
    }
    static async loadFromGenericStringStorage(storage, instance, contractAddresses, userAddress, publicKey) {
        try {
            const storageKey = new FhevmDecryptionSignatureStorageKey(instance, contractAddresses, userAddress, publicKey);
            const result = await storage.getItem(storageKey.key);
            if (!result) {
                console.warn("Could not load signature! key=".concat(storageKey.key));
                return null;
            }
            try {
                const kps = FhevmDecryptionSignature.fromJSON(result);
                if (!kps.isValid()) {
                    return null;
                }
                return kps;
            } catch (e) {
                return null;
            }
        } catch (e) {
            console.error("FhevmDecryptionSignature.loadFromGenericStringStorage() failed!");
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
        } catch (e) {
            return null;
        }
    }
    static async loadOrSign(instance, contractAddresses, signer, storage, keyPair) {
        const userAddress = await signer.getAddress();
        const cached = await FhevmDecryptionSignature.loadFromGenericStringStorage(storage, instance, contractAddresses, userAddress, keyPair === null || keyPair === void 0 ? void 0 : keyPair.publicKey);
        if (cached) {
            return cached;
        }
        const { publicKey, privateKey } = keyPair !== null && keyPair !== void 0 ? keyPair : instance.generateKeypair();
        const sig = await FhevmDecryptionSignature.new(instance, contractAddresses, publicKey, privateKey, signer);
        if (!sig) {
            return null;
        }
        await sig.saveToGenericStringStorage(storage, instance, Boolean(keyPair === null || keyPair === void 0 ? void 0 : keyPair.publicKey));
        return sig;
    }
    constructor(parameters){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _privateKey, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signature, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startTimestamp, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _durationDays, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _eip712, {
            writable: true,
            value: void 0
        });
        if (!FhevmDecryptionSignature.checkIs(parameters)) {
            throw new TypeError("Invalid FhevmDecryptionSignatureType");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey1, parameters.publicKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _privateKey, parameters.privateKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signature, parameters.signature);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startTimestamp, parameters.startTimestamp);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _durationDays, parameters.durationDays);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress1, parameters.userAddress);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1, parameters.contractAddresses);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _eip712, parameters.eip712);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useSkillForge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSkillForge",
    ()=>useSkillForge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$FhevmDecryptionSignature$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/FhevmDecryptionSignature.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// 辅助函数：将handle转换为bytes32格式
function convertHandleToBytes32(handle) {
    if (Array.isArray(handle)) {
        const uint8Array = new Uint8Array(handle);
        const hexString = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].hexlify(uint8Array);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].zeroPadValue(hexString, 32);
    } else if (handle instanceof Uint8Array) {
        const hexString = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].hexlify(handle);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].zeroPadValue(hexString, 32);
    } else if (typeof handle === 'string') {
        let hexString = handle;
        if (!hexString.startsWith('0x')) {
            hexString = '0x' + hexString;
        }
        if (hexString.length < 66) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].zeroPadValue(hexString, 32);
        }
        return hexString;
    }
    throw new Error("Unsupported handle type: ".concat(typeof handle, ", value: ").concat(JSON.stringify(handle)));
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
    _s();
    const { instance, fhevmDecryptionSignatureStorage, contractAddress, ethersSigner, ethersReadonlyProvider, chainId } = parameters;
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSkillForge.useMemo[contract]": ()=>{
            if (!contractAddress || !ethersReadonlyProvider) return undefined;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(contractAddress, SKILLFORGE_ABI, ethersReadonlyProvider);
        }
    }["useSkillForge.useMemo[contract]"], [
        contractAddress,
        ethersReadonlyProvider
    ]);
    const contractWithSigner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSkillForge.useMemo[contractWithSigner]": ()=>{
            if (!contractAddress || !ethersSigner) return undefined;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(contractAddress, SKILLFORGE_ABI, ethersSigner);
        }
    }["useSkillForge.useMemo[contractWithSigner]"], [
        contractAddress,
        ethersSigner
    ]);
    // 锻造课程
    const forgeCourse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSkillForge.useCallback[forgeCourse]": async (courseCID, totalChallenges)=>{
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
                setMessage("⏳ 交易已发送: ".concat(tx.hash));
                const receipt = await tx.wait();
                setMessage("✅ 课程锻造成功！状态: ".concat(receipt === null || receipt === void 0 ? void 0 : receipt.status));
            } catch (error) {
                console.error("ForgeCourse error:", error);
                const errorMsg = (error === null || error === void 0 ? void 0 : error.reason) || (error === null || error === void 0 ? void 0 : error.message) || "未知错误";
                setMessage("❌ 错误: ".concat(errorMsg));
            } finally{
                setIsLoading(false);
            }
        }
    }["useSkillForge.useCallback[forgeCourse]"], [
        instance,
        contractWithSigner,
        contractAddress,
        ethersSigner
    ]);
    // 提交证明
    const submitProof = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSkillForge.useCallback[submitProof]": async (courseId, challengeId, proofCID, score)=>{
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
                setMessage("⏳ 交易已发送: ".concat(tx.hash));
                const receipt = await tx.wait();
                setMessage("✅ 证明提交成功！状态: ".concat(receipt === null || receipt === void 0 ? void 0 : receipt.status));
            } catch (error) {
                console.error("SubmitProof error:", error);
                const errorMsg = (error === null || error === void 0 ? void 0 : error.reason) || (error === null || error === void 0 ? void 0 : error.message) || "未知错误";
                setMessage("❌ 错误: ".concat(errorMsg));
            } finally{
                setIsLoading(false);
            }
        }
    }["useSkillForge.useCallback[submitProof]"], [
        instance,
        contractWithSigner,
        contractAddress,
        ethersSigner
    ]);
    // 验证证明
    const validateProof = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSkillForge.useCallback[validateProof]": async (proofId, status, newScore)=>{
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
                    throw new Error("证明已被验证（当前状态: ".concat(proofStatus === 1 ? '已通过' : '已拒绝', "）"));
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
                setMessage("⏳ 交易已发送: ".concat(tx.hash));
                const receipt = await tx.wait();
                setMessage("✅ 验证成功！状态: ".concat((receipt === null || receipt === void 0 ? void 0 : receipt.status) === 1 ? '成功' : '失败'));
            } catch (error) {
                console.error("ValidateProof error:", error);
                let errorMsg = "未知错误";
                if (error === null || error === void 0 ? void 0 : error.reason) {
                    errorMsg = error.reason;
                } else if (error === null || error === void 0 ? void 0 : error.message) {
                    errorMsg = error.message;
                    if (errorMsg.includes("Not authorized")) {
                        errorMsg = "错误：您未被授权为验证者，请先授权";
                    } else if (errorMsg.includes("Already validated")) {
                        errorMsg = "错误：该证明已被验证";
                    } else if (errorMsg.includes("Invalid status")) {
                        errorMsg = "错误：无效的验证状态";
                    }
                }
                setMessage("❌ 验证失败: ".concat(errorMsg));
            } finally{
                setIsLoading(false);
            }
        }
    }["useSkillForge.useCallback[validateProof]"], [
        instance,
        contractWithSigner,
        contractAddress,
        ethersSigner
    ]);
    // 解密分数
    const decryptScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSkillForge.useCallback[decryptScore]": async (handle)=>{
            if (!instance || !ethersSigner || !contractAddress) {
                setMessage("FHEVM实例未就绪");
                return null;
            }
            setIsLoading(true);
            setMessage("🔓 正在解密分数...");
            try {
                const sig = await __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$FhevmDecryptionSignature$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmDecryptionSignature"].loadOrSign(instance, [
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
                setMessage("❌ 解密错误: ".concat(error.message));
                return null;
            } finally{
                setIsLoading(false);
            }
        }
    }["useSkillForge.useCallback[decryptScore]"], [
        instance,
        ethersSigner,
        contractAddress,
        fhevmDecryptionSignatureStorage
    ]);
    // 授权验证者
    const grantValidator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSkillForge.useCallback[grantValidator]": async (validatorAddress)=>{
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
                setMessage("⏳ 交易已发送: ".concat(tx.hash));
                const receipt = await tx.wait();
                setMessage("✅ 验证者授权成功！状态: ".concat(receipt === null || receipt === void 0 ? void 0 : receipt.status));
                return true;
            } catch (error) {
                console.error("GrantValidator error:", error);
                const errorMsg = (error === null || error === void 0 ? void 0 : error.reason) || (error === null || error === void 0 ? void 0 : error.message) || "未知错误";
                setMessage("❌ 错误: ".concat(errorMsg));
                return false;
            } finally{
                setIsLoading(false);
            }
        }
    }["useSkillForge.useCallback[grantValidator]"], [
        contractWithSigner
    ]);
    // 检查验证者授权状态
    const checkValidatorAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSkillForge.useCallback[checkValidatorAuth]": async (validatorAddress)=>{
            if (!contract) return false;
            try {
                const isAuthorized = await contract.authorizedValidators(validatorAddress);
                return isAuthorized;
            } catch (error) {
                console.error("CheckValidatorAuth error:", error);
                return false;
            }
        }
    }["useSkillForge.useCallback[checkValidatorAuth]"], [
        contract
    ]);
    // 领取徽章
    const claimBadge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSkillForge.useCallback[claimBadge]": async (courseId, badgeCID, totalScore)=>{
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
                setMessage("⏳ 交易已发送: ".concat(tx.hash));
                const receipt = await tx.wait();
                setMessage("✅ 徽章领取成功！状态: ".concat((receipt === null || receipt === void 0 ? void 0 : receipt.status) === 1 ? '成功' : '失败'));
                setTimeout({
                    "useSkillForge.useCallback[claimBadge]": ()=>{
                        window.location.href = "/badges";
                    }
                }["useSkillForge.useCallback[claimBadge]"], 2000);
            } catch (error) {
                console.error("ClaimBadge error:", error);
                const errorMsg = (error === null || error === void 0 ? void 0 : error.reason) || (error === null || error === void 0 ? void 0 : error.message) || "未知错误";
                setMessage("❌ 领取失败: ".concat(errorMsg));
            } finally{
                setIsLoading(false);
            }
        }
    }["useSkillForge.useCallback[claimBadge]"], [
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
_s(useSkillForge, "YpE7AJAxEap41RJR8XV0LR32xbo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/validated/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ValidatedPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WalletGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WalletGuard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$metamask$2f$useMetaMaskEthersSigner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/metamask/useMetaMaskEthersSigner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useValidatedProofs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useValidatedProofs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$useFhevm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/useFhevm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useInMemoryStorage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSkillForge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useSkillForge.tsx [app-client] (ecmascript)");
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
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
function ValidatedPage() {
    _s();
    const { storage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInMemoryStorage"])();
    const { provider, chainId, ethersSigner, ethersReadonlyProvider, initialMockChains } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$metamask$2f$useMetaMaskEthersSigner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetaMaskEthersSigner"])();
    const { instance: fhevmInstance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$useFhevm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFhevm"])({
        provider,
        chainId,
        initialMockChains,
        enabled: true
    });
    const { proofs, stats, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useValidatedProofs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValidatedProofs"])({
        contractAddress: CONTRACT_ADDRESS,
        ethersReadonlyProvider
    });
    const { decryptScore } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSkillForge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSkillForge"])({
        instance: fhevmInstance,
        fhevmDecryptionSignatureStorage: storage,
        contractAddress: CONTRACT_ADDRESS,
        ethersSigner,
        ethersReadonlyProvider,
        chainId
    });
    const [decryptedScores, setDecryptedScores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [decryptingId, setDecryptingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleDecrypt = async (proofId, encryptedScoreHandle)=>{
        setDecryptingId(proofId);
        try {
            const score = await decryptScore(encryptedScoreHandle);
            if (score !== null) {
                setDecryptedScores((prev)=>({
                        ...prev,
                        [proofId]: score.toString()
                    }));
            }
        } catch (error) {
            console.error("Decryption failed:", error);
        } finally{
            setDecryptingId(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WalletGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-5rem)] py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center space-x-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 w-8 bg-gradient-purple rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/validated/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-5xl animate-float",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/app/validated/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 w-8 bg-gradient-purple rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/validated/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/validated/page.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-display font-black mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "Validated Proofs"
                                }, void 0, false, {
                                    fileName: "[project]/app/validated/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/validated/page.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/80 text-lg",
                                children: "View all validated skill proofs"
                            }, void 0, false, {
                                fileName: "[project]/app/validated/page.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/validated/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-6 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-3xl p-6 shadow-glass hover:shadow-glass-lg transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/60 text-sm uppercase mb-2 font-semibold",
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/app/validated/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-4xl font-display font-black gradient-text",
                                        children: stats.total
                                    }, void 0, false, {
                                        fileName: "[project]/app/validated/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/validated/page.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-3xl p-6 shadow-glass hover:shadow-glass-lg transition-all border-2 border-success/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/60 text-sm uppercase mb-2 font-semibold",
                                        children: "Approved"
                                    }, void 0, false, {
                                        fileName: "[project]/app/validated/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-4xl font-display font-black text-success",
                                        children: stats.approved
                                    }, void 0, false, {
                                        fileName: "[project]/app/validated/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/validated/page.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-3xl p-6 shadow-glass hover:shadow-glass-lg transition-all border-2 border-danger/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/60 text-sm uppercase mb-2 font-semibold",
                                        children: "Rejected"
                                    }, void 0, false, {
                                        fileName: "[project]/app/validated/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-4xl font-display font-black text-danger",
                                        children: stats.rejected
                                    }, void 0, false, {
                                        fileName: "[project]/app/validated/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/validated/page.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/validated/page.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-block h-12 w-12 border-4 border-white/20 border-t-primary rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/app/validated/page.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/70 mt-4",
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/app/validated/page.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/validated/page.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this) : proofs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-strong rounded-3xl p-12 max-w-md mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-7xl mb-6 animate-float",
                                    children: "📋"
                                }, void 0, false, {
                                    fileName: "[project]/app/validated/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-white mb-3",
                                    children: "No Validated Proofs"
                                }, void 0, false, {
                                    fileName: "[project]/app/validated/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/60",
                                    children: "Waiting for validators to review your submissions"
                                }, void 0, false, {
                                    fileName: "[project]/app/validated/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/validated/page.tsx",
                            lineNumber: 85,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/validated/page.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: proofs.map((proof, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-3xl p-6 shadow-glass hover:shadow-glass-lg transition-all",
                                style: {
                                    animationDelay: "".concat(index * 0.1, "s")
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-display font-black gradient-text",
                                                children: [
                                                    "Proof #",
                                                    proof.id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/validated/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 rounded-full text-xs font-bold shadow-glow ".concat(proof.status === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'bg-gradient-to-r from-red-500 to-rose-500 text-white'),
                                                children: proof.status === 1 ? '✓ Approved' : '✗ Rejected'
                                            }, void 0, false, {
                                                fileName: "[project]/app/validated/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/validated/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-dark rounded-2xl p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-xs mb-1",
                                                        children: "Course"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/validated/page.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-bold",
                                                        children: [
                                                            "#",
                                                            proof.courseId
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/validated/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/validated/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-dark rounded-2xl p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-xs mb-1",
                                                        children: "Challenge"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/validated/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-bold",
                                                        children: [
                                                            "#",
                                                            proof.challengeId
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/validated/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/validated/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-dark rounded-2xl p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-xs mb-1",
                                                        children: "Learner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/validated/page.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-mono text-sm",
                                                        children: [
                                                            proof.learner.slice(0, 16),
                                                            "..."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/validated/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/validated/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 21
                                            }, this),
                                            proof.encryptedScoreHandle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-dark rounded-2xl p-4 border-2 border-primary/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white/60 text-xs font-semibold uppercase",
                                                                children: "Score"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/validated/page.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 27
                                                            }, this),
                                                            decryptedScores[proof.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-success",
                                                                children: "🔓 Decrypted"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/validated/page.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/validated/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 25
                                                    }, this),
                                                    decryptedScores[proof.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center py-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-4xl font-display font-black gradient-text",
                                                                children: decryptedScores[proof.id]
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/validated/page.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white/60 text-xs mt-1",
                                                                children: "/ 100"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/validated/page.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/validated/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDecrypt(proof.id, proof.encryptedScoreHandle),
                                                        disabled: decryptingId === proof.id,
                                                        className: "w-full py-3 bg-gradient-purple rounded-xl font-bold text-white shadow-glow hover:shadow-glow-cyan transition-all btn-glass disabled:opacity-50",
                                                        children: decryptingId === proof.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center justify-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/validated/page.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Decrypting..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/validated/page.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/validated/page.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 31
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center justify-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "🔓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/validated/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Decrypt Score"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/validated/page.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/validated/page.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/validated/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/validated/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/validated/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-3 border-t border-white/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/50",
                                            children: [
                                                "Submitted: ",
                                                new Date(proof.submittedAt * 1000).toLocaleString('en-US')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/validated/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/validated/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, proof.id, true, {
                                fileName: "[project]/app/validated/page.tsx",
                                lineNumber: 94,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/validated/page.tsx",
                        lineNumber: 92,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/validated/page.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/validated/page.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/validated/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(ValidatedPage, "IoFXvhax+/kgEXnHWRl3jr1zMZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInMemoryStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$metamask$2f$useMetaMaskEthersSigner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetaMaskEthersSigner"],
        __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$useFhevm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFhevm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useValidatedProofs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValidatedProofs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSkillForge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSkillForge"]
    ];
});
_c = ValidatedPage;
var _c;
__turbopack_context__.k.register(_c, "ValidatedPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_6d59b783._.js.map