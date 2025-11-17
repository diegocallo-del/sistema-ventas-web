(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Componente de input reutilizable
 */ __turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = ({ label, error, helperText, leftIcon, rightIcon, className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-secondary-700 mb-1",
                children: [
                    label,
                    props.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    leftIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                        children: leftIcon
                    }, void 0, false, {
                        fileName: "[project]/components/ui/input.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: ref,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])('block w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors', error ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'border-secondary-300 focus:ring-primary-500 focus:border-primary-500', leftIcon && 'pl-10', rightIcon && 'pr-10', props.disabled && 'bg-secondary-50 cursor-not-allowed', className),
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/components/ui/input.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    rightIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/ui/input.tsx",
                lineNumber: 57,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            helperText && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c1 = Input;
Input.displayName = 'Input';
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Componente de boton reutilizable
 */ __turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(baseStyles, variantStyles[variant], sizeStyles[size], fullWidth && 'w-full', className),
        disabled: disabled || isLoading,
        ...props,
        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "animate-spin -ml-1 mr-2 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
function Card({ children, variant = 'default', className, ...props }) {
    const variantStyles = {
        default: 'bg-white rounded-lg shadow',
        bordered: 'bg-white rounded-lg border border-secondary-200',
        elevated: 'bg-white rounded-lg shadow-lg'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(variantStyles[variant], className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])('px-6 py-4 border-b border-secondary-200', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])('text-lg font-semibold text-secondary-900', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardContent({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])('px-6 py-4', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c3 = CardContent;
function CardFooter({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])('px-6 py-4 border-t border-secondary-200 bg-secondary-50', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c4 = CardFooter;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardContent");
__turbopack_context__.k.register(_c4, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/auth-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Store global de autenticacion usando Zustand CON PERSISTENCIA
 */ __turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        // Estado inicial
        user: null,
        token: null,
        refreshToken: null,
        isLoading: true,
        isAuthenticated: false,
        /**
       * Inicia sesion con usuario y tokens
       */ login: (user, token, refreshToken)=>{
            console.log('🔄 Store.login():', {
                user: user.username,
                token: token.substring(0, 10) + '...',
                refreshToken: refreshToken.substring(0, 10) + '...'
            });
            // Guardar en localStorage y cookie para que proxy.ts pueda leer el token
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem('user_data', JSON.stringify(user));
                localStorage.setItem('auth_token', token);
                localStorage.setItem('refresh_token', refreshToken);
                document.cookie = `auth_token=${token}; path=/; max-age=86400`;
                console.log('💾 Store: Datos guardados en localStorage y cookie');
            }
            // Actualizar estado
            set({
                user,
                token,
                refreshToken,
                isAuthenticated: true,
                isLoading: false
            });
            console.log('✅ Store: Login completado - Estado actualizado');
        },
        /**
       * Cierra sesion y limpia datos
       */ logout: ()=>{
            console.log('🔄 Store: Iniciando logout...');
            // Limpiar localStorage
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.removeItem('user_data');
                localStorage.removeItem('auth_token');
                localStorage.removeItem('refresh_token');
                console.log('🧹 Store: localStorage limpiado');
            }
            // Actualizar estado
            set({
                user: null,
                token: null,
                refreshToken: null,
                isAuthenticated: false,
                isLoading: false
            });
            console.log('✅ Store: Logout completado');
        },
        /**
       * Inicializa el store desde localStorage
       */ initialize: ()=>{
            console.log('🔄 Store: Inicializando desde localStorage...');
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const userData = localStorage.getItem('user_data');
                const token = localStorage.getItem('auth_token');
                const refreshToken = localStorage.getItem('refresh_token');
                console.log('📦 Store.initialize(): Datos encontrados:', {
                    userData: userData ? '✅' : '❌',
                    token: token ? '✅' : '❌',
                    refreshToken: refreshToken ? '✅' : '❌'
                });
                if (userData && token) {
                    const user = JSON.parse(userData);
                    set({
                        user,
                        token,
                        refreshToken,
                        isAuthenticated: true,
                        isLoading: false
                    });
                    console.log('✅ Store: Usuario autenticado cargado:', user.username);
                } else {
                    set({
                        isLoading: false,
                        isAuthenticated: false
                    });
                    console.log('❌ Store: No hay usuario autenticado en localStorage');
                }
            } catch (error) {
                console.error('💥 Store: Error en initialize():', error);
                set({
                    isLoading: false,
                    isAuthenticated: false
                });
            }
        },
        /**
       * Limpia el estado de loading
       */ clearLoading: ()=>{
            set({
                isLoading: false
            });
        }
    }), {
    name: 'auth-storage',
    // Solo persistir estos campos
    partialize: (state)=>({
            user: state.user,
            token: state.token,
            refreshToken: state.refreshToken,
            isAuthenticated: state.isAuthenticated
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/types/usuario.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserRole",
    ()=>UserRole
]);
var UserRole = /*#__PURE__*/ function(UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["SUPERVISOR"] = "supervisor";
    UserRole["VENDEDOR"] = "vendedor";
    UserRole["CAJERO"] = "cajero";
    UserRole["CLIENTE"] = "cliente";
    return UserRole;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/roles/role-types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Definicion de tipos y constantes relacionadas con roles y permisos
 */ __turbopack_context__.s([
    "Permission",
    ()=>Permission
]);
var Permission = /*#__PURE__*/ function(Permission) {
    // Productos
    Permission["PRODUCTOS_VER"] = "productos:ver";
    Permission["PRODUCTOS_CREAR"] = "productos:crear";
    Permission["PRODUCTOS_EDITAR"] = "productos:editar";
    Permission["PRODUCTOS_ELIMINAR"] = "productos:eliminar";
    // Clientes
    Permission["CLIENTES_VER"] = "clientes:ver";
    Permission["CLIENTES_CREAR"] = "clientes:crear";
    Permission["CLIENTES_EDITAR"] = "clientes:editar";
    Permission["CLIENTES_ELIMINAR"] = "clientes:eliminar";
    // Ventas
    Permission["VENTAS_VER"] = "ventas:ver";
    Permission["VENTAS_CREAR"] = "ventas:crear";
    Permission["VENTAS_CANCELAR"] = "ventas:cancelar";
    Permission["VENTAS_VER_TODAS"] = "ventas:ver_todas";
    // Reportes
    Permission["REPORTES_VER"] = "reportes:ver";
    Permission["REPORTES_EXPORTAR"] = "reportes:exportar";
    // Usuarios
    Permission["USUARIOS_VER"] = "usuarios:ver";
    Permission["USUARIOS_CREAR"] = "usuarios:crear";
    Permission["USUARIOS_EDITAR"] = "usuarios:editar";
    Permission["USUARIOS_ELIMINAR"] = "usuarios:eliminar";
    // Configuracion
    Permission["CONFIG_VER"] = "config:ver";
    Permission["CONFIG_EDITAR"] = "config:editar";
    return Permission;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/roles/role-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Configuración de permisos por rol
 */ __turbopack_context__.s([
    "roleDescriptions",
    ()=>roleDescriptions,
    "roleLabels",
    ()=>roleLabels,
    "rolePermissions",
    ()=>rolePermissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/usuario.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/roles/role-types.ts [app-client] (ecmascript)");
;
;
const rolePermissions = {
    /**
   * Administrador: acceso completo a todas las funcionalidades
   */ [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].ADMIN]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_EDITAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_ELIMINAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_EDITAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_ELIMINAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].VENTAS_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].VENTAS_CANCELAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER_TODAS,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].REPORTES_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].REPORTES_EXPORTAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].USUARIOS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].USUARIOS_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].USUARIOS_EDITAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].USUARIOS_ELIMINAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].CONFIG_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].CONFIG_EDITAR
    ],
    /**
   * Supervisor: puede gestionar productos, clientes, ventas y ver reportes
   */ [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].SUPERVISOR]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_EDITAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_EDITAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].VENTAS_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].VENTAS_CANCELAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER_TODAS,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].REPORTES_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].REPORTES_EXPORTAR
    ],
    /**
   * Vendedor: puede realizar ventas y ver productos y clientes
   */ [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].VENDEDOR]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].VENTAS_CREAR
    ],
    /**
   * Cajero: enfocado en registrar y cobrar ventas en caja
   */ [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].CAJERO]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].VENTAS_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].VENTAS_CANCELAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_VER
    ],
    /**
   * Cliente: si lo quieres agregar
   */ [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].CLIENTE]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER
    ]
};
const roleLabels = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].ADMIN]: 'Administrador',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].SUPERVISOR]: 'Supervisor',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].VENDEDOR]: 'Vendedor',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].CAJERO]: 'Cajero',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].CLIENTE]: 'Cliente'
};
const roleDescriptions = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].ADMIN]: 'Acceso completo al sistema, puede gestionar usuarios y configuración',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].SUPERVISOR]: 'Puede gestionar productos, clientes, ventas y ver reportes',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].VENDEDOR]: 'Puede realizar ventas y consultar productos y clientes',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].CAJERO]: 'Puede registrar y cobrar ventas en caja, gestionando clientes básicos',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].CLIENTE]: 'Solo puede consultar sus propias ventas'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/roles/role-checker.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Funciones utilitarias para verificar permisos y roles
 */ __turbopack_context__.s([
    "canAccessSection",
    ()=>canAccessSection,
    "getUserPermissions",
    ()=>getUserPermissions,
    "hasAllPermissions",
    ()=>hasAllPermissions,
    "hasAnyPermission",
    ()=>hasAnyPermission,
    "hasAnyRole",
    ()=>hasAnyRole,
    "hasPermission",
    ()=>hasPermission,
    "hasRole",
    ()=>hasRole,
    "isAdmin",
    ()=>isAdmin,
    "isSupervisorOrAbove",
    ()=>isSupervisorOrAbove
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/usuario.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/roles/role-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/roles/role-config.ts [app-client] (ecmascript)");
;
;
;
function hasPermission(user, permission) {
    if (!user) return false;
    const permissions = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rolePermissions"][user.rol];
    return permissions.includes(permission);
}
function hasAnyPermission(user, permissions) {
    if (!user) return false;
    return permissions.some((permission)=>hasPermission(user, permission));
}
function hasAllPermissions(user, permissions) {
    if (!user) return false;
    return permissions.every((permission)=>hasPermission(user, permission));
}
function hasRole(user, role) {
    if (!user) return false;
    return user.rol === role;
}
function hasAnyRole(user, roles) {
    if (!user) return false;
    return roles.includes(user.rol);
}
function getUserPermissions(user) {
    if (!user) return [];
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rolePermissions"][user.rol];
}
function canAccessSection(user, section) {
    if (!user) return false;
    // El dashboard es visible para cualquier usuario autenticado
    if (section === 'dashboard') {
        return true;
    }
    const sectionPermissions = {
        productos: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_VER,
        clientes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_VER,
        ventas: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER,
        reportes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].REPORTES_VER,
        usuarios: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].USUARIOS_VER,
        configuracion: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].CONFIG_VER
    };
    const requiredPermission = sectionPermissions[section];
    if (!requiredPermission) return false;
    return hasPermission(user, requiredPermission);
}
function isAdmin(user) {
    return hasRole(user, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].ADMIN);
}
function isSupervisorOrAbove(user) {
    return hasAnyRole(user, [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].ADMIN,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].SUPERVISOR
    ]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/config/test-users.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "debugUsers",
    ()=>debugUsers,
    "loginTestUser",
    ()=>loginTestUser,
    "testUsers",
    ()=>testUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/usuario.ts [app-client] (ecmascript)");
;
const testUsers = [
    {
        id: 1,
        username: 'admin',
        email: 'admin@test.com',
        nombre: 'Admin',
        apellido: 'Principal',
        rol: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].ADMIN,
        activo: true,
        fecha_creacion: new Date().toISOString(),
        ultimo_acceso: null,
        password: 'admin'
    },
    {
        id: 2,
        username: 'supervisor',
        email: 'supervisor@test.com',
        nombre: 'Sara',
        apellido: 'Supervisor',
        rol: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].SUPERVISOR,
        activo: true,
        fecha_creacion: new Date().toISOString(),
        ultimo_acceso: null,
        password: 'supervisor'
    },
    {
        id: 3,
        username: 'vendedor',
        email: 'vendedor@test.com',
        nombre: 'Víctor',
        apellido: 'Vendedor',
        rol: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].VENDEDOR,
        activo: true,
        fecha_creacion: new Date().toISOString(),
        ultimo_acceso: null,
        password: 'vendedor'
    },
    {
        id: 4,
        username: 'cajero',
        email: 'cajero@test.com',
        nombre: 'Carlos',
        apellido: 'Cajero',
        rol: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].CAJERO,
        activo: true,
        fecha_creacion: new Date().toISOString(),
        ultimo_acceso: null,
        password: 'cajero'
    },
    {
        id: 5,
        username: 'cliente',
        email: 'cliente@test.com',
        nombre: 'Carla',
        apellido: 'Cliente',
        rol: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].CLIENTE,
        activo: true,
        fecha_creacion: new Date().toISOString(),
        ultimo_acceso: null,
        password: 'cliente'
    }
];
function loginTestUser(credentials) {
    console.log('🔐 loginTestUser(): Credenciales recibidas:', credentials);
    // Validación básica
    if (!credentials?.username || !credentials?.password) {
        console.error('❌ Credenciales incompletas');
        return null;
    }
    const { username, password } = credentials;
    // BUSCAR USUARIO DE FORMA DIRECTA
    const user = testUsers.find((u)=>u.username.toLowerCase() === username.toLowerCase().trim() && u.password === password);
    console.log('👤 Resultado búsqueda:', user ? `✅ ${user.username}` : '❌ No encontrado');
    return user || null;
}
function debugUsers() {
    console.log('👥 USUARIOS DISPONIBLES:');
    testUsers.forEach((user)=>{
        console.log(`   ${user.username} / ${user.password} (${user.rol})`);
    });
}
// Auto-debug al cargar
if ("TURBOPACK compile-time truthy", 1) {
    setTimeout(()=>{
        console.log('🔍 Debug automático de usuarios:');
        debugUsers();
    }, 1000);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$checker$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/roles/role-checker.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$test$2d$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/test-users.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function useAuth() {
    _s();
    const { user, isAuthenticated, isLoading, login: storeLogin, logout: storeLogout, initialize, clearLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    // Inicializar al montar el componente
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            console.log('🎯 useAuth: Montando hook...');
            initialize();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$test$2d$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debugUsers"])();
        }
    }["useAuth.useEffect"], [
        initialize
    ]);
    async function login(credentials) {
        console.log('🚀 useAuth.login(): Iniciando proceso...', credentials);
        try {
            // 1. Validar credenciales con la función de test
            const loggedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$test$2d$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginTestUser"])(credentials);
            if (!loggedUser) {
                console.error('❌ useAuth: Login fallido - Usuario no válido');
                return {
                    success: false,
                    error: 'Usuario o contraseña incorrectos'
                };
            }
            console.log('✅ useAuth: Usuario válido encontrado:', loggedUser.username);
            // 2. Preparar datos del usuario
            const updatedUser = {
                ...loggedUser,
                ultimo_acceso: new Date().toISOString()
            };
            // 3. Generar tokens
            const token = `fake-token-${updatedUser.id}-${Date.now()}`;
            const refreshToken = `fake-refresh-${updatedUser.id}-${Date.now()}`;
            console.log('🔑 useAuth: Tokens generados');
            // 4. Llamar al store para guardar el estado
            storeLogin(updatedUser, token, refreshToken);
            console.log('🎉 useAuth: Login completado exitosamente');
            return {
                success: true,
                user: updatedUser
            };
        } catch (error) {
            console.error('💥 useAuth: Error durante login:', error);
            return {
                success: false,
                error: 'Error interno del sistema'
            };
        }
    }
    function logout() {
        console.log('🚪 useAuth: Ejecutando logout...');
        storeLogout();
        // Limpiar cookie también
        document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        console.log('✅ useAuth: Logout completado');
    }
    function hasPermission(permission) {
        if (!user) {
            return false;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$checker$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPermission"])(user, permission);
    }
    return {
        user,
        isAuthenticated,
        isLoading,
        login,
        logout,
        hasPermission
    };
}
_s(useAuth, "kCDYq9hHpzf1kidvZg6xqaAIdi4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/modules/auth/login-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginForm",
    ()=>LoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-circle.mjs [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.mjs [app-client] (ecmascript) <export default as Smartphone>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function LoginForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: '',
        password: ''
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: false,
        password: false
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        setError(null);
    };
    const handleFocus = (field)=>{
        setIsFocused((prev)=>({
                ...prev,
                [field]: true
            }));
    };
    const handleBlur = (field)=>{
        setIsFocused((prev)=>({
                ...prev,
                [field]: false
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!formData.username || !formData.password) {
            setError('Por favor, complete todos los campos requeridos');
            return;
        }
        setIsLoading(true);
        const result = await login(formData);
        if (!result.success) {
            setError(result.error || 'Error de autenticación. Verifique sus credenciales.');
            setIsLoading(false);
        } else {
        // Redirección manejada por el hook de autenticación
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 px-4 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(45deg,_#f8fafc_25%,_transparent_25%),_linear-gradient(-45deg,_#f8fafc_25%,_transparent_25%),_linear-gradient(45deg,_transparent_75%,_#f8fafc_75%),_linear-gradient(-45deg,_transparent_75%,_#f8fafc_75%)] bg-[size:20px_20px] [background-position:0_0,_0_10px,_10px_-10px,_-10px_0px] opacity-50"
            }, void 0, false, {
                fileName: "[project]/components/modules/auth/login-form.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-8 right-8 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                        className: "w-4 h-4 text-green-600"
                    }, void 0, false, {
                        fileName: "[project]/components/modules/auth/login-form.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-green-700",
                        children: "Conexión Segura SSL"
                    }, void 0, false, {
                        fileName: "[project]/components/modules/auth/login-form.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/auth/login-form.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-1/2 max-w-lg space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                            className: "w-6 h-6 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl font-bold text-slate-900",
                                                children: [
                                                    "Enterprise",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600",
                                                        children: "POS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 75
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-600",
                                                children: "Sistema de Gestión Comercial"
                                            }, void 0, false, {
                                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-bold text-slate-900 leading-tight",
                                        children: [
                                            "Gestión Empresarial",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                                lineNumber: 96,
                                                columnNumber: 34
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-blue-600",
                                                children: "Inteligente 2025"
                                            }, void 0, false, {
                                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-slate-600 leading-relaxed",
                                        children: "Acceda a la plataforma de gestión más avanzada del mercado. Control total de su negocio desde cualquier dispositivo."
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            'Dashboard analítico en tiempo real',
                                            'Gestión multi-sucursal integrada',
                                            'Reportes financieros automatizados',
                                            'Seguridad enterprise nivel bancario'
                                        ].map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5 text-green-500 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-700 font-medium",
                                                        children: feature
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-6 pt-4 border-t border-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-blue-600",
                                                        children: "15K+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-slate-600",
                                                        children: "Empresas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-blue-600",
                                                        children: "99.9%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-slate-600",
                                                        children: "Uptime"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-blue-600",
                                                        children: "ISO"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-slate-600",
                                                        children: "27001 Certified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/auth/login-form.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "w-full lg:w-1/2 max-w-md bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-xl rounded-2xl overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 pb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-2xl font-bold flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/modules/auth/login-form.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                "Acceso Seguro"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-blue-100/80 text-sm",
                                            children: "Ingrese sus credenciales corporativas"
                                        }, void 0, false, {
                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/modules/auth/login-form.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-8 space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-6",
                                    children: [
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm animate-fade-in",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "w-5 h-5 flex-shrink-0 mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/modules/auth/login-form.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold",
                                                            children: "Error de Autenticación"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1",
                                                            children: error
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/modules/auth/login-form.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-slate-700 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Usuario Corporativo"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/modules/auth/login-form.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "text",
                                                        name: "username",
                                                        value: formData.username,
                                                        onChange: handleChange,
                                                        onFocus: ()=>handleFocus('username'),
                                                        onBlur: ()=>handleBlur('username'),
                                                        placeholder: "usuario@empresa.com",
                                                        className: `pl-4 pr-4 py-3 bg-white border-2 ${isFocused.username ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-200 hover:border-slate-300'} text-slate-900 placeholder-slate-400 rounded-xl transition-all duration-200 font-medium`,
                                                        autoComplete: "username",
                                                        autoFocus: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/modules/auth/login-form.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-slate-700 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Contraseña"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/modules/auth/login-form.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            type: showPassword ? "text" : "password",
                                                            name: "password",
                                                            value: formData.password,
                                                            onChange: handleChange,
                                                            onFocus: ()=>handleFocus('password'),
                                                            onBlur: ()=>handleBlur('password'),
                                                            placeholder: "••••••••",
                                                            className: `pl-4 pr-12 py-3 bg-white border-2 ${isFocused.password ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-200 hover:border-slate-300'} text-slate-900 placeholder-slate-400 rounded-xl transition-all duration-200 font-medium`,
                                                            autoComplete: "current-password"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowPassword(!showPassword),
                                                            className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200 p-1 rounded-lg hover:bg-slate-100",
                                                            children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 37
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 70
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/modules/auth/login-form.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-2 text-slate-600 cursor-pointer group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                className: "w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "group-hover:text-slate-700 transition-colors",
                                                            children: "Mantener sesión"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/modules/auth/login-form.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/forgot-password",
                                                    className: "text-blue-600 hover:text-blue-700 font-medium transition-colors",
                                                    children: "¿Contraseña olvidada?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/modules/auth/login-form.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            disabled: isLoading,
                                            className: "w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group",
                                            size: "lg",
                                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Verificando credenciales..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                                lineNumber: 250,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                        className: "w-5 h-5 group-hover:scale-110 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Acceder al Sistema"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative py-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full border-t border-slate-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/modules/auth/login-form.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative flex justify-center text-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 bg-white text-slate-500",
                                                        children: "Soporte Técnico"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/modules/auth/login-form.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center gap-6 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/support",
                                                            className: "text-slate-600 hover:text-slate-800 transition-colors font-medium",
                                                            children: "Centro de Ayuda"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/contact",
                                                            className: "text-slate-600 hover:text-slate-800 transition-colors font-medium",
                                                            children: "Contactar Soporte"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/modules/auth/login-form.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: [
                                                        "¿Problemas de acceso? Contacte al departamento de TI",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 71
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "soporte@empresa.com | +1 (555) 123-4567"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/modules/auth/login-form.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/modules/auth/login-form.tsx",
                                            lineNumber: 273,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/modules/auth/login-form.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/auth/login-form.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/auth/login-form.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6 text-sm text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "EnterprisePOS v4.0"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "© 2025 Enterprise Solutions Inc."
                            }, void 0, false, {
                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/auth/login-form.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    "Disponible en dispositivos móviles"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/auth/login-form.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex justify-center gap-4 text-xs text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/privacy",
                                className: "hover:text-slate-600 transition-colors",
                                children: "Política de Privacidad"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/terms",
                                className: "hover:text-slate-600 transition-colors",
                                children: "Términos de Servicio"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/compliance",
                                className: "hover:text-slate-600 transition-colors",
                                children: "Cumplimiento Normativo"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/auth/login-form.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/auth/login-form.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/auth/login-form.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/modules/auth/login-form.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(LoginForm, "z9o6vwd29Lx0TrdpSXR6V+LO7ng=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = LoginForm;
var _c;
__turbopack_context__.k.register(_c, "LoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(auth)/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$auth$2f$login$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modules/auth/login-form.tsx [app-client] (ecmascript)");
'use client';
;
;
function LoginPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$auth$2f$login$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginForm"], {}, void 0, false, {
        fileName: "[project]/app/(auth)/login/page.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_effb94a6._.js.map