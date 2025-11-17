module.exports = [
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Componente de input reutilizable
 */ __turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ label, error, helperText, leftIcon, rightIcon, className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-secondary-700 mb-1",
                children: [
                    label,
                    props.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500 ml-1",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/input.tsx",
                        lineNumber: 23,
                        columnNumber: 32
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/input.tsx",
                lineNumber: 21,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    leftIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                        children: leftIcon
                    }, void 0, false, {
                        fileName: "[project]/components/ui/input.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: ref,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('block w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors', error ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'border-secondary-300 focus:ring-primary-500 focus:border-primary-500', leftIcon && 'pl-10', rightIcon && 'pr-10', props.disabled && 'bg-secondary-50 cursor-not-allowed', className),
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/components/ui/input.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    rightIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
                        children: rightIcon
                    }, void 0, false, {
                        fileName: "[project]/components/ui/input.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/input.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/ui/input.tsx",
                lineNumber: 57,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            helperText && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-secondary-500",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/components/ui/input.tsx",
                lineNumber: 61,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 19,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = 'Input';
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Componente de boton reutilizable
 */ __turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
function Button({ children, variant = 'primary', size = 'md', isLoading = false, fullWidth = false, className, disabled, ...props }) {
    const baseStyles = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    const variantStyles = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
        secondary: 'bg-secondary-200 text-secondary-900 hover:bg-secondary-300 focus:ring-secondary-500',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        ghost: 'bg-transparent text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500'
    };
    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(baseStyles, variantStyles[variant], sizeStyles[size], fullWidth && 'w-full', className),
        disabled: disabled || isLoading,
        ...props,
        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "animate-spin -ml-1 mr-2 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/button.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/button.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/button.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this),
                "Cargando..."
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/button.tsx",
            lineNumber: 53,
            columnNumber: 9
        }, this) : children
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Componente de tarjeta reutilizable
 */ __turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
function Card({ children, variant = 'default', className, ...props }) {
    const variantStyles = {
        default: 'bg-white rounded-lg shadow',
        bordered: 'bg-white rounded-lg border border-secondary-200',
        elevated: 'bg-white rounded-lg shadow-lg'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(variantStyles[variant], className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardHeader({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('px-6 py-4 border-b border-secondary-200', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function CardTitle({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('text-lg font-semibold text-secondary-900', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function CardContent({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('px-6 py-4', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
function CardFooter({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('px-6 py-4 border-t border-secondary-200 bg-secondary-50', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/types/producto.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Tipos y interfaces relacionadas con productos
 */ /**
 * Interface para producto
 */ __turbopack_context__.s([]);
;
}),
"[project]/lib/types/cliente.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/types/venta.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/types/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Exportacion centralizada de todos los tipos
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/usuario.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$producto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/producto.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$cliente$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/cliente.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/venta.ts [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/types/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$cliente$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/cliente.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/venta.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/usuario.ts [app-ssr] (ecmascript)");
;
const DOCUMENT_TYPE_OPTIONS = [
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$cliente$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentType"].DNI,
        label: 'DNI'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$cliente$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentType"].RUC,
        label: 'RUC'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$cliente$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentType"].PASAPORTE,
        label: 'Pasaporte'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$cliente$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentType"].CARNET_EXTRANJERIA,
        label: 'Carnet de Extranjeria'
    }
];
const PAYMENT_METHOD_OPTIONS = [
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymentMethod"].EFECTIVO,
        label: 'Efectivo'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymentMethod"].TARJETA,
        label: 'Tarjeta'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymentMethod"].TRANSFERENCIA,
        label: 'Transferencia'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymentMethod"].YAPE,
        label: 'Yape'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymentMethod"].PLIN,
        label: 'Plin'
    }
];
const SALE_STATUS_OPTIONS = [
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SaleStatus"].COMPLETADA,
        label: 'Completada'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SaleStatus"].CANCELADA,
        label: 'Cancelada'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SaleStatus"].PENDIENTE,
        label: 'Pendiente'
    }
];
const USER_ROLE_OPTIONS = [
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].ADMIN,
        label: 'Administrador'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].SUPERVISOR,
        label: 'Supervisor'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].VENDEDOR,
        label: 'Vendedor'
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].CAJERO,
        label: 'Cajero'
    }
];
const SALE_STATUS_COLORS = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SaleStatus"].COMPLETADA]: 'text-green-600 bg-green-50',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SaleStatus"].CANCELADA]: 'text-red-600 bg-red-50',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SaleStatus"].PENDIENTE]: 'text-yellow-600 bg-yellow-50'
};
const USER_ROLE_COLORS = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].ADMIN]: 'text-purple-600 bg-purple-50',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].SUPERVISOR]: 'text-blue-600 bg-blue-50',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].VENDEDOR]: 'text-gray-600 bg-gray-50',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].CAJERO]: 'text-emerald-600 bg-emerald-50',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].CLIENTE]: 'text-teal-600 bg-teal-50'
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
}),
"[project]/store/venta-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Store global de ventas y carrito usando Zustand
 */ __turbopack_context__.s([
    "useVentaStore",
    ()=>useVentaStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/types/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/venta.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
;
;
;
const useVentaStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])((set, get)=>({
        // Estado inicial
        items: [],
        clienteId: null,
        metodoPago: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymentMethod"].EFECTIVO,
        observaciones: '',
        subtotal: 0,
        igv: 0,
        total: 0,
        /**
   * Agrega un item al carrito o incrementa su cantidad
   */ addItem: (producto, cantidad)=>{
            const { items } = get();
            const existingItem = items.find((item)=>item.producto.id === producto.id);
            let newItems;
            if (existingItem) {
                // Incrementar cantidad del item existente
                newItems = items.map((item)=>item.producto.id === producto.id ? {
                        ...item,
                        cantidad: item.cantidad + cantidad,
                        subtotal: (item.cantidad + cantidad) * item.precio_unitario
                    } : item);
            } else {
                // Agregar nuevo item
                const newItem = {
                    producto,
                    cantidad,
                    precio_unitario: producto.precio,
                    subtotal: producto.precio * cantidad
                };
                newItems = [
                    ...items,
                    newItem
                ];
            }
            set({
                items: newItems
            });
            get().calculateTotals();
        },
        /**
   * Elimina un item del carrito
   */ removeItem: (productoId)=>{
            const { items } = get();
            const newItems = items.filter((item)=>item.producto.id !== productoId);
            set({
                items: newItems
            });
            get().calculateTotals();
        },
        /**
   * Actualiza la cantidad de un item
   */ updateItemQuantity: (productoId, cantidad)=>{
            const { items } = get();
            if (cantidad <= 0) {
                get().removeItem(productoId);
                return;
            }
            const newItems = items.map((item)=>item.producto.id === productoId ? {
                    ...item,
                    cantidad,
                    subtotal: cantidad * item.precio_unitario
                } : item);
            set({
                items: newItems
            });
            get().calculateTotals();
        },
        /**
   * Vacia el carrito completamente
   */ clearCart: ()=>{
            set({
                items: [],
                clienteId: null,
                metodoPago: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$venta$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaymentMethod"].EFECTIVO,
                observaciones: '',
                subtotal: 0,
                igv: 0,
                total: 0
            });
        },
        /**
   * Establece el cliente para la venta
   */ setCliente: (clienteId)=>{
            set({
                clienteId
            });
        },
        /**
   * Establece el metodo de pago
   */ setMetodoPago: (metodo)=>{
            set({
                metodoPago: metodo
            });
        },
        /**
   * Establece observaciones de la venta
   */ setObservaciones: (obs)=>{
            set({
                observaciones: obs
            });
        },
        /**
   * Calcula subtotal, IGV y total
   */ calculateTotals: ()=>{
            const { items } = get();
            const subtotal = items.reduce((sum, item)=>sum + item.subtotal, 0);
            const igv = subtotal * __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IGV_PERCENTAGE"];
            const total = subtotal + igv;
            set({
                subtotal,
                igv,
                total
            });
        }
    }));
}),
"[project]/components/modules/productos/producto-item.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Componente de item de producto para el selector de ventas
 */ __turbopack_context__.s([
    "ProductoItem",
    ()=>ProductoItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/formatters.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ProductoItem({ producto, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between p-4 border border-secondary-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                            className: "w-6 h-6 text-secondary-600"
                        }, void 0, false, {
                            fileName: "[project]/components/modules/productos/producto-item.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/modules/productos/producto-item.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-secondary-900 truncate",
                                        children: producto.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/productos/producto-item.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-secondary-500",
                                        children: [
                                            "(",
                                            producto.codigo,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/modules/productos/producto-item.tsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modules/productos/producto-item.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-primary-600",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(producto.precio)
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/productos/producto-item.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xs ${producto.stock === 0 ? 'text-red-600' : producto.stock < 10 ? 'text-yellow-600' : 'text-secondary-600'}`,
                                        children: [
                                            "Stock: ",
                                            producto.stock
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/modules/productos/producto-item.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    producto.categoria && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-secondary-500",
                                        children: producto.categoria
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/productos/producto-item.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modules/productos/producto-item.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/productos/producto-item.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/productos/producto-item.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                size: "sm",
                onClick: ()=>onSelect(producto),
                disabled: producto.stock === 0 || !producto.activo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-4 h-4 mr-1"
                    }, void 0, false, {
                        fileName: "[project]/components/modules/productos/producto-item.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    "Agregar"
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/productos/producto-item.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/modules/productos/producto-item.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/modules/ventas/carrito.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Componente del carrito de compras
 */ __turbopack_context__.s([
    "Carrito",
    ()=>Carrito
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$venta$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/venta-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/formatters.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.mjs [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-ssr] (ecmascript) <export default as ShoppingCart>");
'use client';
;
;
;
;
;
function Carrito() {
    const { items, updateItemQuantity, removeItem, clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$venta$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVentaStore"])();
    if (items.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                    className: "w-12 h-12 text-secondary-400 mx-auto mb-3"
                }, void 0, false, {
                    fileName: "[project]/components/modules/ventas/carrito.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-secondary-600",
                    children: "El carrito esta vacio"
                }, void 0, false, {
                    fileName: "[project]/components/modules/ventas/carrito.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-secondary-500 mt-1",
                    children: "Agrega productos para comenzar una venta"
                }, void 0, false, {
                    fileName: "[project]/components/modules/ventas/carrito.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/modules/ventas/carrito.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 max-h-80 overflow-y-auto",
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 p-3 border border-secondary-200 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-sm truncate",
                                        children: item.producto.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/ventas/carrito.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-secondary-500",
                                        children: item.producto.codigo
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/ventas/carrito.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-primary-600 mt-1",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(item.precio_unitario)
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/ventas/carrito.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modules/ventas/carrito.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 bg-secondary-100 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>updateItemQuantity(item.producto.id, item.cantidad - 1),
                                                className: "p-1 hover:bg-secondary-200 rounded-l-lg transition-colors",
                                                disabled: item.cantidad <= 1,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/modules/ventas/carrito.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/modules/ventas/carrito.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 font-medium text-sm min-w-[2rem] text-center",
                                                children: item.cantidad
                                            }, void 0, false, {
                                                fileName: "[project]/components/modules/ventas/carrito.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>updateItemQuantity(item.producto.id, item.cantidad + 1),
                                                className: "p-1 hover:bg-secondary-200 rounded-r-lg transition-colors",
                                                disabled: item.cantidad >= item.producto.stock,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/modules/ventas/carrito.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/modules/ventas/carrito.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/modules/ventas/carrito.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>removeItem(item.producto.id),
                                        className: "p-1 text-red-600 hover:bg-red-50 rounded transition-colors",
                                        title: "Eliminar del carrito",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/modules/ventas/carrito.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/ventas/carrito.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modules/ventas/carrito.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right min-w-[5rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-sm",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(item.subtotal)
                                }, void 0, false, {
                                    fileName: "[project]/components/modules/ventas/carrito.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/modules/ventas/carrito.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.producto.id, true, {
                        fileName: "[project]/components/modules/ventas/carrito.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/modules/ventas/carrito.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "sm",
                fullWidth: true,
                onClick: ()=>{
                    if (confirm('¿Estas seguro de vaciar el carrito?')) {
                        clearCart();
                    }
                },
                className: "text-red-600 hover:bg-red-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                        className: "w-4 h-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/components/modules/ventas/carrito.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    "Vaciar Carrito"
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/ventas/carrito.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/modules/ventas/carrito.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/modules/ventas/venta-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Formulario principal para realizar una venta
 */ __turbopack_context__.s([
    "VentaForm",
    ()=>VentaForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$venta$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/venta-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/formatters.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$productos$2f$producto$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modules/productos/producto-item.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$ventas$2f$carrito$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modules/ventas/carrito.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.mjs [app-ssr] (ecmascript) <export default as UserPlus>");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function VentaForm({ clientes, productos, onClienteSelect, onCreateCliente, onSearchProducto, onSubmit, isLoading = false }) {
    const { items, clienteId, metodoPago, observaciones, subtotal, igv, total, addItem, setMetodoPago, setObservaciones } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$venta$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVentaStore"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    /**
   * Maneja la busqueda de productos
   */ const handleSearchChange = (e)=>{
        const query = e.target.value;
        setSearchQuery(query);
        onSearchProducto(query);
    };
    /**
   * Agrega un producto al carrito
   */ const handleAddProduct = (producto)=>{
        addItem(producto, 1);
    };
    /**
   * Verifica si el formulario es valido
   */ const isFormValid = ()=>{
        return items.length > 0 && clienteId !== null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "Cliente"
                                }, void 0, false, {
                                    fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: clienteId || '',
                                            onChange: (e)=>onClienteSelect(Number(e.target.value)),
                                            className: "flex-1 rounded-lg border border-secondary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500",
                                            disabled: isLoading,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Seleccionar cliente"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this),
                                                clientes.map((cliente)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: cliente.id,
                                                        children: [
                                                            cliente.nombre,
                                                            " ",
                                                            cliente.apellido,
                                                            " - ",
                                                            cliente.numero_documento
                                                        ]
                                                    }, cliente.id, true, {
                                                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: onCreateCliente,
                                            disabled: isLoading,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this),
                                                "Nuevo"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "Productos"
                                }, void 0, false, {
                                    fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Buscar productos por nombre o codigo...",
                                        value: searchQuery,
                                        onChange: handleSearchChange,
                                        leftIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "w-5 h-5 text-secondary-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                            lineNumber: 118,
                                            columnNumber: 25
                                        }, void 0),
                                        disabled: isLoading
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 space-y-2 max-h-96 overflow-y-auto",
                                        children: productos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-secondary-500 py-8",
                                            children: searchQuery ? 'No se encontraron productos' : 'Busca un producto para agregarlo a la venta'
                                        }, void 0, false, {
                                            fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this) : productos.map((producto)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$productos$2f$producto$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductoItem"], {
                                                producto: producto,
                                                onSelect: handleAddProduct
                                            }, producto.id, false, {
                                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: [
                                        "Carrito (",
                                        items.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$ventas$2f$carrito$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Carrito"], {}, void 0, false, {
                                    fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "Resumen"
                                }, void 0, false, {
                                    fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-secondary-700 mb-1",
                                                children: "Metodo de Pago"
                                            }, void 0, false, {
                                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: metodoPago,
                                                onChange: (e)=>setMetodoPago(e.target.value),
                                                className: "block w-full rounded-lg border border-secondary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500",
                                                disabled: isLoading,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PAYMENT_METHOD_OPTIONS"].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: option.value,
                                                        children: option.label
                                                    }, option.value, false, {
                                                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-secondary-700 mb-1",
                                                children: "Observaciones"
                                            }, void 0, false, {
                                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                lineNumber: 182,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: observaciones,
                                                onChange: (e)=>setObservaciones(e.target.value),
                                                rows: 2,
                                                className: "block w-full rounded-lg border border-secondary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500",
                                                placeholder: "Observaciones opcionales",
                                                disabled: isLoading
                                            }, void 0, false, {
                                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-secondary-200 pt-4 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-secondary-600",
                                                        children: "Subtotal:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(subtotal)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                lineNumber: 197,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-secondary-600",
                                                        children: "IGV (18%):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(igv)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-lg font-bold border-t border-secondary-200 pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Total:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary-600",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(total)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        fullWidth: true,
                                        onClick: onSubmit,
                                        disabled: !isFormValid() || isLoading,
                                        isLoading: isLoading,
                                        size: "lg",
                                        children: "Completar Venta"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/ventas/venta-form.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/ventas/venta-form.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/modules/ventas/venta-form.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/lib/config/env.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Configuracion centralizada de variables de entorno
 * Valida y exporta variables de entorno de forma segura
 */ // Variables requeridas
__turbopack_context__.s([
    "env",
    ()=>env,
    "timeouts",
    ()=>timeouts
]);
const requiredEnvVars = [
    'NEXT_PUBLIC_API_URL'
];
/**
 * Función de validación segura
 * Solo lanza error si estamos en el server (Node)
 */ function checkEnvVar(varName) {
    const value = process.env[varName];
    if (!value && ("TURBOPACK compile-time value", "undefined") === 'undefined') {
        throw new Error(`Variable de entorno requerida no encontrada: ${varName}`);
    }
    return value;
}
const env = {
    apiUrl: checkEnvVar('NEXT_PUBLIC_API_URL') || 'http://localhost:8000',
    isDevelopment: ("TURBOPACK compile-time value", "development") === 'development',
    isProduction: ("TURBOPACK compile-time value", "development") === 'production',
    isTest: ("TURBOPACK compile-time value", "development") === 'test'
};
const timeouts = {
    api: 30000,
    upload: 60000,
    debounce: 300
};
}),
"[project]/lib/config/endpoints.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authEndpoints",
    ()=>authEndpoints,
    "clientEndpoints",
    ()=>clientEndpoints,
    "productEndpoints",
    ()=>productEndpoints,
    "reportEndpoints",
    ()=>reportEndpoints,
    "saleEndpoints",
    ()=>saleEndpoints,
    "userEndpoints",
    ()=>userEndpoints
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/env.ts [app-ssr] (ecmascript)");
;
/**
 * Rutas centralizadas del backend
 * Mantiene todas las URLs de API en un solo lugar
 */ const API_BASE = `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"].apiUrl}/api/v1`;
const authEndpoints = {
    login: `${API_BASE}/auth/login`,
    logout: `${API_BASE}/auth/logout`,
    refresh: `${API_BASE}/auth/refresh`,
    me: `${API_BASE}/auth/me`,
    verify: `${API_BASE}/auth/verify`
};
const userEndpoints = {
    base: `${API_BASE}/usuarios`,
    byId: (id)=>`${API_BASE}/usuarios/${id}`,
    create: `${API_BASE}/usuarios`,
    update: (id)=>`${API_BASE}/usuarios/${id}`,
    delete: (id)=>`${API_BASE}/usuarios/${id}`
};
const productEndpoints = {
    base: `${API_BASE}/productos`,
    byId: (id)=>`${API_BASE}/productos/${id}`,
    create: `${API_BASE}/productos`,
    update: (id)=>`${API_BASE}/productos/${id}`,
    delete: (id)=>`${API_BASE}/productos/${id}`,
    search: `${API_BASE}/productos/search`,
    categories: `${API_BASE}/productos/categorias`
};
const clientEndpoints = {
    base: `${API_BASE}/clientes`,
    byId: (id)=>`${API_BASE}/clientes/${id}`,
    create: `${API_BASE}/clientes`,
    update: (id)=>`${API_BASE}/clientes/${id}`,
    delete: (id)=>`${API_BASE}/clientes/${id}`,
    search: `${API_BASE}/clientes/search`
};
const saleEndpoints = {
    base: `${API_BASE}/ventas`,
    byId: (id)=>`${API_BASE}/ventas/${id}`,
    create: `${API_BASE}/ventas`,
    cancel: (id)=>`${API_BASE}/ventas/${id}/cancel`,
    details: (id)=>`${API_BASE}/ventas/${id}/detalles`,
    byDate: `${API_BASE}/ventas/por-fecha`,
    byClient: (clientId)=>`${API_BASE}/ventas/cliente/${clientId}`
};
const reportEndpoints = {
    sales: `${API_BASE}/reportes/ventas`,
    products: `${API_BASE}/reportes/productos`,
    clients: `${API_BASE}/reportes/clientes`,
    dashboard: `${API_BASE}/reportes/dashboard`,
    export: `${API_BASE}/reportes/export`
};
}),
"[project]/lib/services/venta-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Servicio de ventas
 * Maneja todas las operaciones relacionadas con ventas
 */ __turbopack_context__.s([
    "cancelSale",
    ()=>cancelSale,
    "createSale",
    ()=>createSale,
    "getSaleById",
    ()=>getSaleById,
    "getSales",
    ()=>getSales,
    "getSalesByClient",
    ()=>getSalesByClient,
    "getSalesByDateRange",
    ()=>getSalesByDateRange,
    "getSalesSummary",
    ()=>getSalesSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/endpoints.ts [app-ssr] (ecmascript)");
;
;
async function getSales(options = {}, token) {
    const params = {
        page: options.page || 1,
        page_size: options.page_size || 10,
        sort_by: options.sort_by,
        sort_order: options.sort_order,
        ...options.filters
    };
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saleEndpoints"].base, {
        params,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function getSaleById(id, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saleEndpoints"].byId(id), {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function createSale(data, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saleEndpoints"].create, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function cancelSale(id, motivo, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saleEndpoints"].cancel(id), {
        motivo
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function getSalesByDateRange(fechaInicio, fechaFin, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saleEndpoints"].byDate, {
        params: {
            fecha_inicio: fechaInicio,
            fecha_fin: fechaFin
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function getSalesByClient(clientId, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saleEndpoints"].byClient(clientId), {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function getSalesSummary(filters = {}, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saleEndpoints"].base}/summary`, {
        params: filters,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
}),
"[project]/hooks/use-ventas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Hook personalizado para manejo de ventas
 */ __turbopack_context__.s([
    "useVentas",
    ()=>useVentas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/auth-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$venta$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/venta-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$venta$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/venta-service.ts [app-ssr] (ecmascript)");
;
;
;
;
function useVentas() {
    const { token, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { items, clienteId, metodoPago, observaciones, clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$venta$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVentaStore"])();
    const [sales, setSales] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pagination, setPagination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        total: 0,
        page: 1,
        page_size: 10,
        total_pages: 0
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /**
   * Carga la lista de ventas
   */ const loadSales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (options = {})=>{
        if (!token) return;
        setIsLoading(true);
        setError(null);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$venta$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSales"])(options, token);
            setSales(response.items);
            setPagination({
                total: response.total,
                page: response.page,
                page_size: response.page_size,
                total_pages: response.total_pages
            });
        } catch (err) {
            setError(err.message || 'Error al cargar ventas');
        } finally{
            setIsLoading(false);
        }
    }, [
        token
    ]);
    /**
   * Obtiene una venta por ID
   */ const getSale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        if (!token) return null;
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$venta$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSaleById"])(id, token);
        } catch (err) {
            setError(err.message || 'Error al obtener venta');
            return null;
        }
    }, [
        token
    ]);
    /**
   * Crea una nueva venta desde el carrito actual
   */ const createNewSale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!token || !clienteId || items.length === 0) {
            setError('Faltan datos para completar la venta');
            return null;
        }
        try {
            const saleData = {
                cliente_id: clienteId,
                metodo_pago: metodoPago,
                observaciones: observaciones || undefined,
                detalles: items.map((item)=>({
                        producto_id: item.producto.id,
                        cantidad: item.cantidad,
                        precio_unitario: item.precio_unitario
                    }))
            };
            const newSale = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$venta$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSale"])(saleData, token);
            clearCart();
            await loadSales();
            return newSale;
        } catch (err) {
            setError(err.message || 'Error al crear venta');
            return null;
        }
    }, [
        token,
        clienteId,
        metodoPago,
        observaciones,
        items,
        clearCart,
        loadSales
    ]);
    /**
   * Cancela una venta existente
   */ const cancelExistingSale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, motivo)=>{
        if (!token) return null;
        try {
            const canceledSale = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$venta$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cancelSale"])(id, motivo, token);
            await loadSales();
            return canceledSale;
        } catch (err) {
            setError(err.message || 'Error al cancelar venta');
            return null;
        }
    }, [
        token,
        loadSales
    ]);
    /**
   * Obtiene resumen de ventas
   */ const getSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (filters = {})=>{
        if (!token) return null;
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$venta$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSalesSummary"])(filters, token);
        } catch (err) {
            setError(err.message || 'Error al obtener resumen');
            return null;
        }
    }, [
        token
    ]);
    return {
        sales,
        pagination,
        isLoading,
        error,
        loadSales,
        getSale,
        createSale: createNewSale,
        cancelSale: cancelExistingSale,
        getSummary
    };
}
}),
"[project]/lib/services/producto-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Servicio de productos
 * Maneja todas las operaciones CRUD de productos
 */ __turbopack_context__.s([
    "checkProductCodeExists",
    ()=>checkProductCodeExists,
    "createProduct",
    ()=>createProduct,
    "deleteProduct",
    ()=>deleteProduct,
    "getCategories",
    ()=>getCategories,
    "getProductById",
    ()=>getProductById,
    "getProducts",
    ()=>getProducts,
    "searchProducts",
    ()=>searchProducts,
    "updateProduct",
    ()=>updateProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/endpoints.ts [app-ssr] (ecmascript)");
;
;
async function getProducts(options = {}, token) {
    const params = {
        page: options.page || 1,
        page_size: options.page_size || 10,
        sort_by: options.sort_by,
        sort_order: options.sort_order,
        ...options.filters
    };
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productEndpoints"].base, {
        params,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function getProductById(id, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productEndpoints"].byId(id), {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function createProduct(data, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productEndpoints"].create, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function updateProduct(id, data, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productEndpoints"].update(id), data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function deleteProduct(id, token) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productEndpoints"].delete(id), {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
async function searchProducts(query, filters = {}, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productEndpoints"].search, {
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
async function getCategories(token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productEndpoints"].categories, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function checkProductCodeExists(codigo, excludeId, token) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productEndpoints"].base}/check-codigo`, {
            params: {
                codigo,
                exclude_id: excludeId
            },
            headers: token ? {
                Authorization: `Bearer ${token}`
            } : undefined
        });
        return response.data.exists;
    } catch  {
        return false;
    }
}
}),
"[project]/hooks/use-productos.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Hook personalizado para manejo de productos
 */ __turbopack_context__.s([
    "useProductos",
    ()=>useProductos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/auth-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$producto$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/producto-service.ts [app-ssr] (ecmascript)");
;
;
;
function useProductos() {
    const { token } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pagination, setPagination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        total: 0,
        page: 1,
        page_size: 10,
        total_pages: 0
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /**
   * Carga la lista de productos
   */ const loadProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (options = {})=>{
        if (!token) return;
        setIsLoading(true);
        setError(null);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$producto$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProducts"])(options, token);
            setProducts(response.items);
            setPagination({
                total: response.total,
                page: response.page,
                page_size: response.page_size,
                total_pages: response.total_pages
            });
        } catch (err) {
            setError(err.message || 'Error al cargar productos');
        } finally{
            setIsLoading(false);
        }
    }, [
        token
    ]);
    /**
   * Busca productos por termino
   */ const searchProductsByTerm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (query, filters = {})=>{
        if (!token) return [];
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$producto$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchProducts"])(query, filters, token);
        } catch (err) {
            setError(err.message || 'Error al buscar productos');
            return [];
        }
    }, [
        token
    ]);
    /**
   * Obtiene un producto por ID
   */ const getProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        if (!token) return null;
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$producto$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductById"])(id, token);
        } catch (err) {
            setError(err.message || 'Error al obtener producto');
            return null;
        }
    }, [
        token
    ]);
    /**
   * Crea un nuevo producto
   */ const createNewProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        if (!token) return null;
        try {
            const newProduct = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$producto$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProduct"])(data, token);
            await loadProducts();
            return newProduct;
        } catch (err) {
            setError(err.message || 'Error al crear producto');
            return null;
        }
    }, [
        token,
        loadProducts
    ]);
    /**
   * Actualiza un producto existente
   */ const updateExistingProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, data)=>{
        if (!token) return null;
        try {
            const updatedProduct = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$producto$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProduct"])(id, data, token);
            await loadProducts();
            return updatedProduct;
        } catch (err) {
            setError(err.message || 'Error al actualizar producto');
            return null;
        }
    }, [
        token,
        loadProducts
    ]);
    /**
   * Elimina un producto
   */ const deleteExistingProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        if (!token) return false;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$producto$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteProduct"])(id, token);
            await loadProducts();
            return true;
        } catch (err) {
            setError(err.message || 'Error al eliminar producto');
            return false;
        }
    }, [
        token,
        loadProducts
    ]);
    return {
        products,
        pagination,
        isLoading,
        error,
        loadProducts,
        searchProducts: searchProductsByTerm,
        getProduct,
        createProduct: createNewProduct,
        updateProduct: updateExistingProduct,
        deleteProduct: deleteExistingProduct
    };
}
}),
"[project]/lib/services/cliente-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/endpoints.ts [app-ssr] (ecmascript)");
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
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientEndpoints"].base, {
        params,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function getClientById(id, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientEndpoints"].byId(id), {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function createClient(data, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientEndpoints"].create, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function updateClient(id, data, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientEndpoints"].update(id), data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
async function deleteClient(id, token) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientEndpoints"].delete(id), {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
async function searchClients(query, filters = {}, token) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientEndpoints"].search, {
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientEndpoints"].base}/by-document`, {
            params: {
                numero_documento: numeroDocumento
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(error) && error.response?.status === 404) {
            return null;
        }
        throw error;
    }
}
}),
"[project]/app/dashboard/ventas/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VentasPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$ventas$2f$venta$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modules/ventas/venta-form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$ventas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-ventas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$productos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-productos.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/auth-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$venta$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/venta-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$cliente$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/cliente-service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function VentasPage() {
    const { token } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { createSale, isLoading: ventasCargando, error: ventasError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$ventas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVentas"])();
    const { products, loadProducts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$productos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductos"])();
    const { setCliente } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$venta$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVentaStore"])();
    const [clientes, setClientes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [productosVisibles, setProductosVisibles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inicializando, setInicializando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [enviando, setEnviando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function inicializar() {
            if (!token) {
                setInicializando(false);
                return;
            }
            try {
                const respuestaClientes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$cliente$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClients"])({}, token);
                setClientes(respuestaClientes.items);
                await loadProducts();
            } catch (error) {
                console.warn('Error cargando datos de ventas (clientes):', error);
            } finally{
                setInicializando(false);
            }
        }
        inicializar();
    }, [
        token,
        loadProducts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setProductosVisibles(products);
    }, [
        products
    ]);
    function handleClienteSelect(clienteId) {
        setCliente(clienteId);
    }
    function handleSearchProducto(query) {
        if (!query) {
            setProductosVisibles(products);
            return;
        }
        const lower = query.toLowerCase();
        const filtrados = products.filter((producto)=>producto.nombre.toLowerCase().includes(lower) || String(producto.codigo ?? '').toLowerCase().includes(lower));
        setProductosVisibles(filtrados);
    }
    async function handleSubmit() {
        setEnviando(true);
        try {
            await createSale();
        } finally{
            setEnviando(false);
        }
    }
    const cargando = inicializando || ventasCargando || enviando;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold mb-2",
                        children: "Ventas"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/ventas/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-6",
                        children: "Realizar y gestionar ventas"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/ventas/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/ventas/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            ventasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 rounded border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700",
                children: ventasError
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ventas/page.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$ventas$2f$venta$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VentaForm"], {
                    clientes: clientes,
                    productos: productosVisibles,
                    onClienteSelect: handleClienteSelect,
                    onCreateCliente: ()=>{
                        // Pendiente: integrar formulario de creación de clientes desde ventas
                        console.log('Crear cliente desde ventas aún no implementado');
                    },
                    onSearchProducto: handleSearchProducto,
                    onSubmit: handleSubmit,
                    isLoading: cargando
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/ventas/page.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ventas/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/ventas/page.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d50da7d2._.js.map