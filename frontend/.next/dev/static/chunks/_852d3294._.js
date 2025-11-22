(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, children, fullWidth, isLoading, variant = 'primary', size = 'md', iconLeft, iconRight, disabled, ...props }, ref)=>{
    // Clases base según variante
    const variantClasses = {
        primary: 'bg-blue-600/40 hover:bg-blue-600/50 border border-blue-400/30 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]',
        secondary: 'bg-slate-700/40 hover:bg-slate-700/50 border border-slate-500/30 text-slate-200 shadow-[0_0_10px_rgba(0,0,0,0.2)]',
        ghost: 'bg-transparent border border-blue-400/20 text-slate-300 hover:bg-blue-500/10 hover:border-blue-400/30'
    };
    // Clases según tamaño
    const sizeClasses = {
        sm: 'text-sm py-2 px-3',
        md: 'text-base py-3 px-5',
        lg: 'text-lg py-4 px-6'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105", variantClasses[variant], sizeClasses[size], fullWidth && 'w-full', (isLoading || disabled) && 'opacity-60 cursor-not-allowed', className),
        disabled: isLoading || disabled,
        ...props,
        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "animate-spin",
            children: "⏳ Cargando..."
        }, void 0, false, {
            fileName: "[project]/components/ui/button.tsx",
            lineNumber: 60,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                iconLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center",
                    children: iconLeft
                }, void 0, false, {
                    fileName: "[project]/components/ui/button.tsx",
                    lineNumber: 63,
                    columnNumber: 26
                }, ("TURBOPACK compile-time value", void 0)),
                children,
                iconRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center",
                    children: iconRight
                }, void 0, false, {
                    fileName: "[project]/components/ui/button.tsx",
                    lineNumber: 65,
                    columnNumber: 27
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Componente de tabla reutilizable
 */ __turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCell",
    ()=>TableCell,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
function Table({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])('min-w-full divide-y divide-secondary-200', className),
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Table;
function TableHeader({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])('bg-secondary-50', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = TableHeader;
function TableBody({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])('bg-white divide-y divide-secondary-200', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = TableBody;
function TableRow({ children, hoverable = true, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(hoverable && 'hover:bg-secondary-50 transition-colors', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c3 = TableRow;
function TableHead({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])('px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c4 = TableHead;
function TableCell({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])('px-6 py-4 whitespace-nowrap text-sm text-secondary-900', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c5 = TableCell;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableRow");
__turbopack_context__.k.register(_c4, "TableHead");
__turbopack_context__.k.register(_c5, "TableCell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modules/clientes/clientes-table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientesTable",
    ()=>ClientesTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-square.mjs [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
'use client';
;
;
;
;
function ClientesTable({ clientes, onEdit, onDelete, isLoading = false }) {
    // Loader animado
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 w-8 rounded-full border-4 border-gray-300 border-t-purple-600 animate-spin"
            }, void 0, false, {
                fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/modules/clientes/clientes-table.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    // Vista sin datos
    if (clientes.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12 opacity-80",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    className: "w-12 h-12 text-gray-400 mx-auto mb-3"
                }, void 0, false, {
                    fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "No hay clientes registrados"
                }, void 0, false, {
                    fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/modules/clientes/clientes-table.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
            className: "rounded-xl border border-white/10 bg-white/5 shadow-md min-w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        className: "bg-gray-100/70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                className: "font-semibold text-gray-700",
                                children: "Documento"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                className: "font-semibold text-gray-700",
                                children: "Nombre"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                className: "font-semibold text-gray-700",
                                children: "Contacto"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                className: "font-semibold text-gray-700",
                                children: "Dirección"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                className: "font-semibold text-gray-700",
                                children: "Estado"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                className: "text-right font-semibold text-gray-700",
                                children: "Acciones"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                    children: clientes.map((cliente)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                            className: "hover:bg-purple-50/20 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-gray-800",
                                            children: cliente.numero_documento
                                        }, void 0, false, {
                                            fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: cliente.tipo_documento
                                        }, void 0, false, {
                                            fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-gray-800",
                                        children: cliente.apellido ? `${cliente.nombre} ${cliente.apellido}` : cliente.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1 min-w-0",
                                        children: [
                                            cliente.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 text-sm text-gray-700 truncate",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        className: "w-4 h-4 text-gray-400 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate",
                                                        children: cliente.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                                lineNumber: 89,
                                                columnNumber: 21
                                            }, this),
                                            cliente.telefono && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 text-sm text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "w-4 h-4 text-gray-400 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate",
                                                        children: cliente.telefono
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                                lineNumber: 96,
                                                columnNumber: 21
                                            }, this),
                                            !cliente.email && !cliente.telefono && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-400",
                                                children: "Sin contacto"
                                            }, void 0, false, {
                                                fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                                lineNumber: 103,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                    children: cliente.direccion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-700 truncate",
                                        children: cliente.direccion
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                        lineNumber: 111,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400",
                                        children: "Sin dirección"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                        lineNumber: 115,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cliente.activo ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`,
                                        children: cliente.activo ? 'Activo' : 'Inactivo'
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                    className: "text-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "ghost",
                                                onClick: ()=>onEdit(cliente),
                                                className: "p-2 hover:bg-purple-100 rounded-xl transition",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                    className: "w-5 h-5 text-gray-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "ghost",
                                                onClick: ()=>onDelete(cliente),
                                                className: "p-2 hover:bg-red-100 rounded-xl transition",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-5 h-5 text-red-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, cliente.id, true, {
                            fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/modules/clientes/clientes-table.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/modules/clientes/clientes-table.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/modules/clientes/clientes-table.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = ClientesTable;
ClientesTable.displayName = 'ClientesTable';
var _c;
__turbopack_context__.k.register(_c, "ClientesTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block w-full rounded-xl border border-blue-400/30 bg-slate-800/50 text-white placeholder-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 22,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = 'Input';
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/types/producto.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Tipos y interfaces relacionadas con productos
 */ /**
 * Interface para producto
 */ __turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/types/cliente.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Tipos y interfaces relacionadas con clientes
 */ /**
 * Tipos de documento de identidad
 */ __turbopack_context__.s([
    "DocumentType",
    ()=>DocumentType
]);
var DocumentType = /*#__PURE__*/ function(DocumentType) {
    DocumentType["DNI"] = "DNI";
    DocumentType["RUC"] = "RUC";
    DocumentType["PASAPORTE"] = "PASAPORTE";
    DocumentType["CARNET_EXTRANJERIA"] = "CARNET_EXTRANJERIA";
    return DocumentType;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/types/venta.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaymentMethod",
    ()=>PaymentMethod,
    "SaleStatus",
    ()=>SaleStatus
]);
var SaleStatus = /*#__PURE__*/ function(SaleStatus) {
    SaleStatus["COMPLETADA"] = "completada";
    SaleStatus["CANCELADA"] = "cancelada";
    SaleStatus["PENDIENTE"] = "pendiente";
    return SaleStatus;
}({});
var PaymentMethod = /*#__PURE__*/ function(PaymentMethod) {
    PaymentMethod["EFECTIVO"] = "efectivo";
    PaymentMethod["TARJETA"] = "tarjeta";
    PaymentMethod["TRANSFERENCIA"] = "transferencia";
    PaymentMethod["YAPE"] = "yape";
    PaymentMethod["PLIN"] = "plin";
    return PaymentMethod;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/types/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Exportacion centralizada de todos los tipos
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/usuario.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$producto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/producto.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/cliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/venta.ts [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Constantes de la aplicacion
 */ __turbopack_context__.s([
    "CONFIRM_MESSAGES",
    ()=>CONFIRM_MESSAGES,
    "DOCUMENT_TYPE_OPTIONS",
    ()=>DOCUMENT_TYPE_OPTIONS,
    "IGV_PERCENTAGE",
    ()=>IGV_PERCENTAGE,
    "MAX_CART_ITEMS",
    ()=>MAX_CART_ITEMS,
    "PAYMENT_METHOD_OPTIONS",
    ()=>PAYMENT_METHOD_OPTIONS,
    "ROUTES",
    ()=>ROUTES,
    "SALE_STATUS_COLORS",
    ()=>SALE_STATUS_COLORS,
    "SALE_STATUS_OPTIONS",
    ()=>SALE_STATUS_OPTIONS,
    "SEARCH_DEBOUNCE_MS",
    ()=>SEARCH_DEBOUNCE_MS,
    "SORT_OPTIONS",
    ()=>SORT_OPTIONS,
    "USER_ROLE_COLORS",
    ()=>USER_ROLE_COLORS,
    "USER_ROLE_OPTIONS",
    ()=>USER_ROLE_OPTIONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/types/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/cliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/venta.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/usuario.ts [app-client] (ecmascript)");
;
const DOCUMENT_TYPE_OPTIONS = [
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentType"].DNI,
        label: 'DNI'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentType"].RUC,
        label: 'RUC'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentType"].PASAPORTE,
        label: 'Pasaporte'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentType"].CARNET_EXTRANJERIA,
        label: 'Carnet de Extranjeria'
    }
];
const PAYMENT_METHOD_OPTIONS = [
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentMethod"].EFECTIVO,
        label: 'Efectivo'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentMethod"].TARJETA,
        label: 'Tarjeta'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentMethod"].TRANSFERENCIA,
        label: 'Transferencia'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentMethod"].YAPE,
        label: 'Yape'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentMethod"].PLIN,
        label: 'Plin'
    }
];
const SALE_STATUS_OPTIONS = [
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaleStatus"].COMPLETADA,
        label: 'Completada'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaleStatus"].CANCELADA,
        label: 'Cancelada'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaleStatus"].PENDIENTE,
        label: 'Pendiente'
    }
];
const USER_ROLE_OPTIONS = [
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].ADMIN,
        label: 'Administrador'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].SUPERVISOR,
        label: 'Supervisor'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].VENDEDOR,
        label: 'Vendedor'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].CAJERO,
        label: 'Cajero'
    }
];
const SALE_STATUS_COLORS = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaleStatus"].COMPLETADA]: 'text-green-600 bg-green-50',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaleStatus"].CANCELADA]: 'text-red-600 bg-red-50',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaleStatus"].PENDIENTE]: 'text-yellow-600 bg-yellow-50'
};
const USER_ROLE_COLORS = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].ADMIN]: 'text-purple-600 bg-purple-50',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].SUPERVISOR]: 'text-blue-600 bg-blue-50',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].VENDEDOR]: 'text-gray-600 bg-gray-50',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].CAJERO]: 'text-emerald-600 bg-emerald-50',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].CLIENTE]: 'text-teal-600 bg-teal-50'
};
const IGV_PERCENTAGE = 0.18;
const SEARCH_DEBOUNCE_MS = 300;
const MAX_CART_ITEMS = 50;
const SORT_OPTIONS = [
    {
        value: 'fecha_creacion:desc',
        label: 'Mas recientes'
    },
    {
        value: 'fecha_creacion:asc',
        label: 'Mas antiguos'
    },
    {
        value: 'nombre:asc',
        label: 'Nombre A-Z'
    },
    {
        value: 'nombre:desc',
        label: 'Nombre Z-A'
    },
    {
        value: 'precio:asc',
        label: 'Precio menor a mayor'
    },
    {
        value: 'precio:desc',
        label: 'Precio mayor a menor'
    }
];
const CONFIRM_MESSAGES = {
    deleteProduct: '¿Estas seguro de eliminar este producto?',
    deleteClient: '¿Estas seguro de eliminar este cliente?',
    cancelSale: '¿Estas seguro de cancelar esta venta?',
    clearCart: '¿Estas seguro de vaciar el carrito?',
    logout: '¿Estas seguro de cerrar sesion?'
};
const ROUTES = {
    login: '/login',
    dashboard: '/dashboard',
    products: '/dashboard/productos',
    clients: '/dashboard/clientes',
    sales: '/dashboard/ventas',
    reports: '/dashboard/reportes'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/validators.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Funciones de validacion de datos
 */ __turbopack_context__.s([
    "getPasswordErrorMessage",
    ()=>getPasswordErrorMessage,
    "isNotEmpty",
    ()=>isNotEmpty,
    "isPositiveNumber",
    ()=>isPositiveNumber,
    "isValidClientName",
    ()=>isValidClientName,
    "isValidDNI",
    ()=>isValidDNI,
    "isValidDocument",
    ()=>isValidDocument,
    "isValidEmail",
    ()=>isValidEmail,
    "isValidPassword",
    ()=>isValidPassword,
    "isValidPhone",
    ()=>isValidPhone,
    "isValidPrice",
    ()=>isValidPrice,
    "isValidProductCode",
    ()=>isValidProductCode,
    "isValidProductName",
    ()=>isValidProductName,
    "isValidRUC",
    ()=>isValidRUC,
    "isValidStock",
    ()=>isValidStock,
    "isValidUrl",
    ()=>isValidUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/settings.ts [app-client] (ecmascript)");
;
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validation"].email.maxLength;
}
function isValidPassword(password) {
    const { minLength, maxLength, requireUppercase, requireLowercase, requireNumbers, requireSpecialChars } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validation"].password;
    if (password.length < minLength || password.length > maxLength) {
        return false;
    }
    if (requireUppercase && !/[A-Z]/.test(password)) {
        return false;
    }
    if (requireLowercase && !/[a-z]/.test(password)) {
        return false;
    }
    if (requireNumbers && !/\d/.test(password)) {
        return false;
    }
    if (requireSpecialChars && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        return false;
    }
    return true;
}
function getPasswordErrorMessage() {
    const { minLength, requireUppercase, requireLowercase, requireNumbers, requireSpecialChars } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validation"].password;
    const requirements = [
        `al menos ${minLength} caracteres`,
        requireUppercase && 'una mayuscula',
        requireLowercase && 'una minuscula',
        requireNumbers && 'un numero',
        requireSpecialChars && 'un caracter especial'
    ].filter(Boolean);
    return `La contraseña debe contener ${requirements.join(', ')}`;
}
function isValidDNI(dni) {
    return /^\d{8}$/.test(dni);
}
function isValidRUC(ruc) {
    return /^\d{11}$/.test(ruc);
}
function isValidPhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return /^9\d{8}$/.test(cleaned);
}
function isValidProductCode(code) {
    const { minLength, maxLength } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validation"].producto.codigo;
    return code.length >= minLength && code.length <= maxLength;
}
function isValidProductName(name) {
    const { minLength, maxLength } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validation"].producto.nombre;
    return name.trim().length >= minLength && name.trim().length <= maxLength;
}
function isValidPrice(price) {
    const { min, max } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validation"].producto.precio;
    return price >= min && price <= max && !isNaN(price);
}
function isValidStock(stock) {
    const { min, max } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validation"].producto.stock;
    return Number.isInteger(stock) && stock >= min && stock <= max;
}
function isValidClientName(name) {
    const { minLength, maxLength } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validation"].cliente.nombre;
    return name.trim().length >= minLength && name.trim().length <= maxLength;
}
function isValidDocument(tipo, numero) {
    const cleaned = numero.replace(/\D/g, '');
    switch(tipo){
        case 'DNI':
            return isValidDNI(cleaned);
        case 'RUC':
            return isValidRUC(cleaned);
        case 'PASAPORTE':
        case 'CARNET_EXTRANJERIA':
            return cleaned.length >= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validation"].cliente.documento.minLength && cleaned.length <= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validation"].cliente.documento.maxLength;
        default:
            return false;
    }
}
function isPositiveNumber(value) {
    return !isNaN(value) && value > 0;
}
function isNotEmpty(value) {
    return value.trim().length > 0;
}
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch  {
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modules/clientes/cliente-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClienteForm",
    ()=>ClienteForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/types/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/cliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validators.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ClienteForm({ cliente, onSubmit, onCancel, isLoading = false }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        tipo_documento: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentType"].DNI,
        numero_documento: '',
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        direccion: ''
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClienteForm.useEffect": ()=>{
            if (cliente) {
                setFormData({
                    tipo_documento: cliente.tipo_documento,
                    numero_documento: cliente.numero_documento,
                    nombre: cliente.nombre,
                    apellido: cliente.apellido || '',
                    email: cliente.email || '',
                    telefono: cliente.telefono || '',
                    direccion: cliente.direccion || ''
                });
            }
        }
    }["ClienteForm.useEffect"], [
        cliente
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        if (errors[name]) {
            setErrors((prev)=>{
                const copy = {
                    ...prev
                };
                delete copy[name];
                return copy;
            });
        }
    };
    const validateForm = ()=>{
        const newErrors = {};
        if (!formData.numero_documento.trim()) {
            newErrors.numero_documento = 'El número de documento es requerido';
        } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidDocument"])(formData.tipo_documento, formData.numero_documento)) {
            newErrors.numero_documento = 'Número de documento inválido';
        }
        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido';
        } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidClientName"])(formData.nombre)) {
            newErrors.nombre = 'Debe tener entre 2 y 200 caracteres';
        }
        if (formData.email && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidEmail"])(formData.email)) {
            newErrors.email = 'Email inválido';
        }
        if (formData.telefono && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidPhone"])(formData.telefono)) {
            newErrors.telefono = 'Debe tener 9 dígitos y empezar con 9';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) return;
        const data = {
            tipo_documento: formData.tipo_documento,
            numero_documento: formData.numero_documento.trim(),
            nombre: formData.nombre.trim(),
            apellido: formData.apellido.trim() || undefined,
            email: formData.email.trim() || undefined,
            telefono: formData.telefono.trim() || undefined,
            direccion: formData.direccion.trim() || undefined
        };
        await onSubmit(data);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1",
                                children: [
                                    "Tipo de Documento ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                        lineNumber: 128,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "tipo_documento",
                                value: formData.tipo_documento,
                                onChange: handleChange,
                                disabled: isLoading,
                                className: "w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOCUMENT_TYPE_OPTIONS"].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: opt.value,
                                        children: opt.label
                                    }, opt.value, false, {
                                        fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1",
                                children: [
                                    "Número de Documento ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                        lineNumber: 147,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                name: "numero_documento",
                                value: formData.numero_documento,
                                onChange: handleChange,
                                disabled: isLoading,
                                placeholder: "12345678",
                                className: "bg-white/5 text-white border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            errors.numero_documento && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: errors.numero_documento
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1",
                                children: [
                                    "Nombre ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                        lineNumber: 167,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                name: "nombre",
                                value: formData.nombre,
                                onChange: handleChange,
                                disabled: isLoading,
                                placeholder: "Juan",
                                className: "bg-white/5 text-white border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            errors.nombre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: errors.nombre
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1",
                                children: "Apellido"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                name: "apellido",
                                value: formData.apellido,
                                onChange: handleChange,
                                disabled: isLoading,
                                placeholder: "Pérez",
                                className: "bg-white/5 text-white border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "email",
                                name: "email",
                                value: formData.email,
                                onChange: handleChange,
                                disabled: isLoading,
                                placeholder: "correo@ejemplo.com",
                                className: "bg-white/5 text-white border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: errors.email
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1",
                                children: "Teléfono"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                name: "telefono",
                                value: formData.telefono,
                                onChange: handleChange,
                                disabled: isLoading,
                                placeholder: "987654321",
                                className: "bg-white/5 text-white border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            errors.telefono && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: errors.telefono
                            }, void 0, false, {
                                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-1",
                        children: "Dirección"
                    }, void 0, false, {
                        fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "direccion",
                        value: formData.direccion,
                        onChange: handleChange,
                        disabled: isLoading,
                        rows: 2,
                        placeholder: "Dirección opcional",
                        className: "w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    }, void 0, false, {
                        fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-3 pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "ghost",
                        onClick: onCancel,
                        disabled: isLoading,
                        className: "border border-white/20 hover:bg-white/10 text-white",
                        children: "Cancelar"
                    }, void 0, false, {
                        fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: isLoading,
                        className: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white",
                        children: isLoading ? 'Guardando...' : cliente ? 'Actualizar' : 'Crear'
                    }, void 0, false, {
                        fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/clientes/cliente-form.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/modules/clientes/cliente-form.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_s(ClienteForm, "B714XmtfyfGh90nHxUDWvBtikjQ=");
_c = ClienteForm;
var _c;
__turbopack_context__.k.register(_c, "ClienteForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/cliente-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Servicio de clientes
 * Maneja todas las operaciones CRUD de clientes
 */ __turbopack_context__.s([
    "createClient",
    ()=>createClient,
    "deleteClient",
    ()=>deleteClient,
    "getClientByDocument",
    ()=>getClientByDocument,
    "getClientById",
    ()=>getClientById,
    "getClients",
    ()=>getClients,
    "searchClients",
    ()=>searchClients,
    "updateClient",
    ()=>updateClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/endpoints.ts [app-client] (ecmascript)");
;
;
async function getClients(options = {}, token) {
    const params = {
        page: options.page || 1,
        page_size: options.page_size || 10,
        sort_by: options.sort_by,
        sort_order: options.sort_order,
        ...options.filters
    };
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientEndpoints"].base, {
        params,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function getClientById(id, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientEndpoints"].byId(id), {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function createClient(data, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientEndpoints"].create, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function updateClient(id, data, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientEndpoints"].update(id), data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function deleteClient(id, token) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientEndpoints"].delete(id), {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
async function searchClients(query, filters = {}, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientEndpoints"].search, {
        params: {
            q: query,
            ...filters
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function getClientByDocument(numeroDocumento, token) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientEndpoints"].base}/by-document`, {
            params: {
                numero_documento: numeroDocumento
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error) && error.response?.status === 404) {
            return null;
        }
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/clientes/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$clientes$2f$clientes$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modules/clientes/clientes-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$clientes$2f$cliente$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modules/clientes/cliente-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$cliente$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/cliente-service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ClientesPage() {
    _s();
    const { token } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [clientes, setClientes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingLista, setLoadingLista] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [clienteEditando, setClienteEditando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isBusy = loadingLista || saving;
    // ----------------------- Carga la lista de clientes -----------------------
    async function cargarClientes() {
        if (!token) return;
        setLoadingLista(true);
        setError(null);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$cliente$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClients"])({}, token);
            setClientes(response.items);
        } catch (err) {
            console.warn('Error al cargar clientes', err);
            setError(err?.message || 'Error al cargar clientes');
        } finally{
            setLoadingLista(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientesPage.useEffect": ()=>{
            void cargarClientes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ClientesPage.useEffect"], [
        token
    ]);
    // ----------------------- Acciones de formulario -----------------------
    function handleNuevoCliente() {
        setClienteEditando(null);
        setShowForm(true);
    }
    function handleEditarCliente(cliente) {
        setClienteEditando(cliente);
        setShowForm(true);
    }
    async function handleEliminarCliente(cliente) {
        if (!token) return;
        const confirmar = window.confirm(`¿Seguro que deseas eliminar al cliente "${cliente.nombre} ${cliente.apellido ?? ''}"?`);
        if (!confirmar) return;
        setSaving(true);
        setError(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$cliente$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteClient"])(cliente.id, token);
            await cargarClientes();
        } catch (err) {
            console.warn('Error al eliminar cliente', err);
            setError(err?.message || 'Error al eliminar cliente');
        } finally{
            setSaving(false);
        }
    }
    async function handleSubmitFormulario(data) {
        if (!token) return;
        setSaving(true);
        setError(null);
        try {
            if (clienteEditando) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$cliente$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateClient"])(clienteEditando.id, data, token);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$cliente$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])(data, token);
            }
            setShowForm(false);
            setClienteEditando(null);
            await cargarClientes();
        } catch (err) {
            console.warn('Error al guardar cliente', err);
            setError(err?.message || 'Error al guardar cliente');
        } finally{
            setSaving(false);
        }
    }
    function handleCancelarFormulario() {
        setShowForm(false);
        setClienteEditando(null);
    }
    // ----------------------- Render principal -----------------------
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "animate-slide-down",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold mb-2 text-white",
                        children: "Clientes"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/clientes/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-300 mb-6",
                        children: "Gestión de clientes"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/clientes/page.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/clientes/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 rounded-xl border border-red-400/30 bg-red-900/20 px-4 py-2 text-sm text-red-300 shadow-[0_0_10px_rgba(239,68,68,0.2)] animate-slide-up",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/dashboard/clientes/page.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900/60 backdrop-blur-xl p-6 rounded-2xl border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] space-y-6 animate-slide-up delay-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-white",
                                children: "Listado de clientes"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/clientes/page.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleNuevoCliente,
                                disabled: isBusy,
                                className: "bg-blue-600/40 hover:bg-blue-600/50 border border-blue-400/30 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300",
                                children: "Nuevo cliente"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/clientes/page.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/clientes/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-blue-400/30 rounded-xl p-4 bg-slate-800/40 backdrop-blur-sm animate-slide-up",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$clientes$2f$cliente$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClienteForm"], {
                            cliente: clienteEditando,
                            onSubmit: handleSubmitFormulario,
                            onCancel: handleCancelarFormulario,
                            isLoading: saving
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/clientes/page.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/clientes/page.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$clientes$2f$clientes$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientesTable"], {
                        clientes: clientes,
                        onEdit: handleEditarCliente,
                        onDelete: handleEliminarCliente,
                        isLoading: loadingLista
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/clientes/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/clientes/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/clientes/page.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(ClientesPage, "Py3LAKDUKJU3StI8zshRMOs+QLw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = ClientesPage;
var _c;
__turbopack_context__.k.register(_c, "ClientesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/pen-square.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>PenSquare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const PenSquare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("PenSquare", [
    [
        "path",
        {
            d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
            key: "1qinfi"
        }
    ],
    [
        "path",
        {
            d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",
            key: "w2jsv5"
        }
    ]
]);
;
 //# sourceMappingURL=pen-square.mjs.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/pen-square.mjs [app-client] (ecmascript) <export default as Edit>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Edit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-square.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>Trash2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Trash2", [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "17",
            key: "1uufr5"
        }
    ],
    [
        "line",
        {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "17",
            key: "xtxkd"
        }
    ]
]);
;
 //# sourceMappingURL=trash-2.mjs.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>Mail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const Mail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Mail", [
    [
        "rect",
        {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ]
]);
;
 //# sourceMappingURL=mail.mjs.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>Phone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const Phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Phone", [
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
;
 //# sourceMappingURL=phone.mjs.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Phone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_852d3294._.js.map