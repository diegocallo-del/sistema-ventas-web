module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// D:\sistema-ventas-web\frontend\lib\utils.ts
/**
 * Combina clases condicionalmente (TailwindCSS)
 */ __turbopack_context__.s([
    "cn",
    ()=>cn,
    "sleep",
    ()=>sleep
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
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
"[project]/store/auth-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Store global de autenticacion usando Zustand CON PERSISTENCIA
 */ __turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
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
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
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
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
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
            if ("TURBOPACK compile-time truthy", 1) {
                set({
                    isLoading: false
                });
                return;
            }
            //TURBOPACK unreachable
            ;
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
}),
"[project]/lib/types/usuario.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/roles/role-types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/roles/role-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/usuario.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/roles/role-types.ts [app-ssr] (ecmascript)");
;
;
const rolePermissions = {
    /**
   * Administrador: acceso completo a todas las funcionalidades
   */ [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].ADMIN]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_EDITAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_ELIMINAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_EDITAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_ELIMINAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_CANCELAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER_TODAS,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].REPORTES_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].REPORTES_EXPORTAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].USUARIOS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].USUARIOS_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].USUARIOS_EDITAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].USUARIOS_ELIMINAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].CONFIG_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].CONFIG_EDITAR
    ],
    /**
   * Supervisor: puede gestionar productos, clientes y ventas, y ver reportes globales de vendedores y sus clientes
   */ [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].SUPERVISOR]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_EDITAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_EDITAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_CANCELAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER_TODAS,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].REPORTES_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].REPORTES_EXPORTAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].USUARIOS_VER
    ],
    /**
   * Vendedor: gestiona productos con proveedores, atiende a sus clientes y puede ver reportes de su propia gestión
   */ [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].VENDEDOR]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_EDITAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_EDITAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].REPORTES_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].REPORTES_EXPORTAR
    ],
    /**
   * Cajero: enfocado en registrar y cobrar ventas en caja (actualmente no se utiliza)
   */ [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].CAJERO]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_CANCELAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_VER
    ],
    /**
   * Cliente: compra y vende dentro del sistema (solo ve sus propias operaciones)
   */ [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].CLIENTE]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_CREAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_EDITAR,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_CREAR
    ]
};
const roleLabels = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].ADMIN]: 'Administrador',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].SUPERVISOR]: 'Supervisor',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].VENDEDOR]: 'Vendedor',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].CAJERO]: 'Cajero',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].CLIENTE]: 'Cliente'
};
const roleDescriptions = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].ADMIN]: 'Acceso completo al sistema, puede gestionar usuarios y configuración',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].SUPERVISOR]: 'Puede gestionar productos, clientes y ventas, y ver reportes globales de vendedores y sus clientes',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].VENDEDOR]: 'Orientado a proveedores: gestiona productos, atiende a sus clientes y puede ver reportes de su propia gestión',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].CAJERO]: 'Puede registrar y cobrar ventas en caja, gestionando clientes básicos',
    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].CLIENTE]: 'Cliente tipo Mercado Libre: puede ver productos, comprar/vender y consultar solo sus propias operaciones'
};
}),
"[project]/lib/roles/role-checker.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/usuario.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/roles/role-types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/roles/role-config.ts [app-ssr] (ecmascript)");
;
;
;
function hasPermission(user, permission) {
    if (!user) return false;
    const permissions = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rolePermissions"][user.rol];
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rolePermissions"][user.rol];
}
function canAccessSection(user, section) {
    if (!user) return false;
    // El dashboard es visible para cualquier usuario autenticado
    if (section === 'dashboard') {
        return true;
    }
    const sectionPermissions = {
        productos: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].PRODUCTOS_VER,
        clientes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].CLIENTES_VER,
        ventas: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].VENTAS_VER,
        reportes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].REPORTES_VER,
        usuarios: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].USUARIOS_VER,
        configuracion: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Permission"].CONFIG_VER
    };
    const requiredPermission = sectionPermissions[section];
    if (!requiredPermission) return false;
    return hasPermission(user, requiredPermission);
}
function isAdmin(user) {
    return hasRole(user, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].ADMIN);
}
function isSupervisorOrAbove(user) {
    return hasAnyRole(user, [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].ADMIN,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].SUPERVISOR
    ]);
}
}),
"[project]/lib/config/test-users.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "debugUsers",
    ()=>debugUsers,
    "loginTestUser",
    ()=>loginTestUser,
    "testUsers",
    ()=>testUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/usuario.ts [app-ssr] (ecmascript)");
;
const testUsers = [
    {
        id: 1,
        username: 'admin',
        email: 'admin@test.com',
        nombre: 'Admin',
        apellido: 'Principal',
        rol: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].ADMIN,
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
        rol: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].SUPERVISOR,
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
        rol: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].VENDEDOR,
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
        rol: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].CAJERO,
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
        rol: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].CLIENTE,
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
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
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
"[project]/hooks/use-auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/auth-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$checker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/roles/role-checker.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$test$2d$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/test-users.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/endpoints.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function useAuth() {
    const { user, isAuthenticated, isLoading, login: storeLogin, logout: storeLogout, initialize, clearLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    // Inicializar al montar el hook
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log('🎯 useAuth inicializando...');
        initialize();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$test$2d$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["debugUsers"])();
    }, [
        initialize
    ]);
    // =============================
    // 🚀 LOGIN
    // =============================
    async function login(credentials) {
        console.log('🔐 Intentando login...', credentials);
        try {
            const loggedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$test$2d$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginTestUser"])(credentials);
            if (!loggedUser) {
                console.warn('❌ Credenciales incorrectas');
                clearLoading();
                return {
                    success: false,
                    error: 'Usuario o contraseña incorrectos'
                };
            }
            console.log(' Usuario autenticado:', loggedUser.username);
            const updatedUser = {
                ...loggedUser,
                ultimo_acceso: new Date().toISOString()
            };
            // Tokens fake para pruebas
            const token = `fake-token-${updatedUser.id}-${Date.now()}`;
            const refreshToken = `fake-refresh-${updatedUser.id}-${Date.now()}`;
            storeLogin(updatedUser, token, refreshToken);
            return {
                success: true,
                user: updatedUser
            };
        } catch (error) {
            console.error('💥 Error en login:', error);
            return {
                success: false,
                error: 'Error interno del sistema'
            };
        }
    }
    // =============================
    // 📝 REGISTRO
    // =============================
    async function register(data) {
        console.log('📝 Intentando registro...', data);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userEndpoints"].create, data);
            return {
                success: true
            };
        } catch (error) {
            console.error('💥 Error en registro:', error);
            let message = 'Error al registrarse';
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                const responseData = error.response?.data;
                const responseMessage = responseData?.message ?? responseData?.error ?? responseData?.detail;
                if (typeof responseMessage === 'string') {
                    message = responseMessage;
                }
            }
            return {
                success: false,
                error: message
            };
        }
    }
    // =============================
    // 🚪 LOGOUT
    // =============================
    function logout() {
        console.log('🚪 Cerrando sesión...');
        storeLogout();
        document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
    // =============================
    // 🔒 ROLES Y PERMISOS
    // =============================
    function hasPermission(permission) {
        if (!user) return false;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$checker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPermission"])(user, permission);
    }
    // =============================
    // 📦 RETORNO DEL HOOK
    // =============================
    return {
        user,
        isAuthenticated,
        isLoading,
        login,
        register,
        logout,
        hasPermission
    };
}
}),
"[project]/lib/config/settings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Configuraciones globales y constantes de la aplicacion
 */ /**
 * Configuracion de paginacion
 */ __turbopack_context__.s([
    "currency",
    ()=>currency,
    "dateFormat",
    ()=>dateFormat,
    "messages",
    ()=>messages,
    "pagination",
    ()=>pagination,
    "storage",
    ()=>storage,
    "validation",
    ()=>validation
]);
const pagination = {
    defaultPageSize: 10,
    pageSizeOptions: [
        10,
        25,
        50,
        100
    ],
    maxPageSize: 100
};
const validation = {
    password: {
        minLength: 8,
        maxLength: 128,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecialChars: true
    },
    username: {
        minLength: 3,
        maxLength: 50
    },
    email: {
        maxLength: 255
    },
    producto: {
        nombre: {
            minLength: 2,
            maxLength: 200
        },
        codigo: {
            minLength: 1,
            maxLength: 50
        },
        precio: {
            min: 0,
            max: 999999.99
        },
        stock: {
            min: 0,
            max: 999999
        }
    },
    cliente: {
        nombre: {
            minLength: 2,
            maxLength: 200
        },
        documento: {
            minLength: 8,
            maxLength: 20
        }
    }
};
const currency = {
    locale: 'es-PE',
    currency: 'PEN',
    symbol: 'S/'
};
const dateFormat = {
    display: 'dd/MM/yyyy',
    displayWithTime: 'dd/MM/yyyy HH:mm',
    api: 'yyyy-MM-dd',
    apiWithTime: "yyyy-MM-dd'T'HH:mm:ss"
};
const messages = {
    success: {
        created: 'Registro creado exitosamente',
        updated: 'Registro actualizado exitosamente',
        deleted: 'Registro eliminado exitosamente',
        saved: 'Cambios guardados exitosamente'
    },
    error: {
        generic: 'Ha ocurrido un error. Por favor intenta nuevamente',
        network: 'Error de conexion. Verifica tu internet',
        unauthorized: 'No tienes permisos para realizar esta accion',
        notFound: 'Registro no encontrado',
        validation: 'Por favor corrige los errores en el formulario'
    },
    confirmation: {
        delete: 'Estas seguro de eliminar este registro?',
        cancel: 'Estas seguro de cancelar? Se perderan los cambios'
    }
};
const storage = {
    keys: {
        authToken: 'auth_token',
        refreshToken: 'refresh_token',
        user: 'user_data',
        cart: 'cart_data',
        preferences: 'user_preferences'
    }
};
}),
"[project]/lib/formatters.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utilidades para formateo de datos
 */ __turbopack_context__.s([
    "capitalize",
    ()=>capitalize,
    "formatCurrency",
    ()=>formatCurrency,
    "formatDate",
    ()=>formatDate,
    "formatDateForApi",
    ()=>formatDateForApi,
    "formatDateTimeForApi",
    ()=>formatDateTimeForApi,
    "formatDocument",
    ()=>formatDocument,
    "formatFullName",
    ()=>formatFullName,
    "formatNumber",
    ()=>formatNumber,
    "formatPercentage",
    ()=>formatPercentage,
    "formatPhone",
    ()=>formatPhone,
    "toTitleCase",
    ()=>toTitleCase,
    "truncateText",
    ()=>truncateText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/es.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/settings.ts [app-ssr] (ecmascript)");
;
;
;
function formatCurrency(amount) {
    return new Intl.NumberFormat(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["currency"].locale, {
        style: 'currency',
        currency: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["currency"].currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}
function formatNumber(value, decimals = 0) {
    return new Intl.NumberFormat(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["currency"].locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(value);
}
function formatDate(date, withTime = false) {
    try {
        const dateObj = typeof date === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(date) : date;
        const formatString = withTime ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dateFormat"].displayWithTime : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dateFormat"].display;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateObj, formatString, {
            locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["es"]
        });
    } catch  {
        return 'Fecha invalida';
    }
}
function formatDateForApi(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dateFormat"].api);
}
function formatDateTimeForApi(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dateFormat"].apiWithTime);
}
function formatFullName(nombre, apellido) {
    if (!apellido) return nombre;
    return `${nombre} ${apellido}`;
}
function formatDocument(tipo, numero) {
    return `${tipo}: ${numero}`;
}
function formatPhone(phone) {
    // Eliminar caracteres no numericos
    const cleaned = phone.replace(/\D/g, '');
    // Formatear segun longitud
    if (cleaned.length === 9) {
        return cleaned.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    }
    return phone;
}
function formatPercentage(value, decimals = 2) {
    return `${formatNumber(value, decimals)}%`;
}
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength)}...`;
}
function capitalize(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
function toTitleCase(text) {
    return text.toLowerCase().split(' ').map((word)=>capitalize(word)).join(' ');
}
}),
"[project]/components/modules/layout/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/formatters.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/roles/role-config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.mjs [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>");
'use client';
;
;
;
;
;
function Header({ onMenuToggle }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    if (!user) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 h-16 w-full bg-slate-900/70 backdrop-blur-xl border-b border-blue-400/30 flex items-center justify-between px-4 sm:px-6 shadow-[0_0_15px_rgba(59,130,246,0.4)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 animate-fade-in",
                children: [
                    onMenuToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onMenuToggle,
                        className: "flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-600/40 backdrop-blur-sm text-white shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:scale-110 transition-all duration-300 hover:bg-blue-600/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/modules/layout/header.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/modules/layout/header.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-base sm:text-lg md:text-xl font-bold text-white leading-tight",
                                children: [
                                    "Bienvenido, ",
                                    user.nombre
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modules/layout/header.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-slate-300",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roleLabels"][user.rol]
                            }, void 0, false, {
                                fileName: "[project]/components/modules/layout/header.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/layout/header.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/layout/header.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 sm:gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "relative p-2 rounded-xl hover:bg-blue-500/20 hover:border hover:border-blue-400/30 transition-all duration-300 text-slate-300 hover:text-blue-400 hover:scale-110",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/layout/header.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse-slow border border-red-400/50"
                            }, void 0, false, {
                                fileName: "[project]/components/modules/layout/header.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/layout/header.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-2 rounded-xl hover:bg-blue-500/20 hover:border hover:border-blue-400/30 transition-all duration-300 text-slate-300 hover:text-blue-400 hover:scale-110",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/modules/layout/header.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/modules/layout/header.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 sm:gap-3 pl-2 sm:pl-3 border-l border-blue-400/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500/80 via-blue-600/80 to-indigo-600/80 flex items-center justify-center text-sm sm:text-base font-bold text-white shadow-[0_0_18px_rgba(59,130,246,0.6)] ring-2 ring-blue-400/70 ring-offset-2 ring-offset-slate-900",
                                    children: user.nombre.charAt(0).toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/components/modules/layout/header.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/modules/layout/header.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex flex-col min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-white truncate max-w-[120px] sm:max-w-[150px]",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatFullName"])(user.nombre, user.apellido)
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/layout/header.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400 truncate max-w-[120px] sm:max-w-[150px]",
                                        children: user.email
                                    }, void 0, false, {
                                        fileName: "[project]/components/modules/layout/header.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modules/layout/header.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modules/layout/header.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/layout/header.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/modules/layout/header.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
Header.displayName = 'Header';
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/modules/layout/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.mjs [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2d$3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bar-chart-3.mjs [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$checker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/roles/role-checker.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/usuario.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const navItems = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/modules/layout/sidebar.tsx",
            lineNumber: 27,
            columnNumber: 51
        }, ("TURBOPACK compile-time value", void 0)),
        section: 'dashboard'
    },
    {
        label: 'Productos',
        href: '/dashboard/productos',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/modules/layout/sidebar.tsx",
            lineNumber: 28,
            columnNumber: 61
        }, ("TURBOPACK compile-time value", void 0)),
        section: 'productos'
    },
    {
        label: 'Clientes',
        href: '/dashboard/clientes',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/modules/layout/sidebar.tsx",
            lineNumber: 29,
            columnNumber: 59
        }, ("TURBOPACK compile-time value", void 0)),
        section: 'clientes'
    },
    {
        label: 'Ventas',
        href: '/dashboard/ventas',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/modules/layout/sidebar.tsx",
            lineNumber: 30,
            columnNumber: 55
        }, ("TURBOPACK compile-time value", void 0)),
        section: 'ventas'
    },
    {
        label: 'Reportes',
        href: '/dashboard/reportes',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2d$3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/modules/layout/sidebar.tsx",
            lineNumber: 31,
            columnNumber: 59
        }, ("TURBOPACK compile-time value", void 0)),
        section: 'reportes'
    },
    {
        label: 'Usuarios',
        href: '/dashboard/usuarios',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/modules/layout/sidebar.tsx",
            lineNumber: 32,
            columnNumber: 59
        }, ("TURBOPACK compile-time value", void 0)),
        section: 'usuarios'
    }
];
function Sidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-60 lg:w-64 bg-slate-950/95 backdrop-blur-2xl border-r border-blue-400/30 flex flex-col shadow-[0_0_20px_rgba(59,130,246,0.15)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-16 flex items-center justify-center border-b border-blue-400/30 bg-gradient-to-r from-blue-900/50 via-indigo-900/50 to-purple-900/50 shadow-[0_0_15px_rgba(59,130,246,0.12)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-lg font-semibold text-white tracking-wide px-4 py-1.5 rounded-xl border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm shadow-[0_0_10px_rgba(59,130,246,0.2)]",
                    children: "POS System"
                }, void 0, false, {
                    fileName: "[project]/components/modules/layout/sidebar.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/modules/layout/sidebar.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 px-4 py-6 space-y-2 border-b border-blue-400/20",
                children: navItems.map((item)=>{
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roles$2f$role$2d$checker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canAccessSection"])(user, item.section)) return null;
                    const isActive = pathname === item.href;
                    let label = item.label;
                    if (user?.rol === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$usuario$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRole"].CLIENTE && item.section === 'productos') {
                        label = 'Comprar / vender';
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group', isActive ? 'bg-gradient-to-r from-blue-600/40 to-indigo-600/40 text-white border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.2)] scale-105' : 'text-slate-300 hover:bg-slate-800/50 hover:text-white hover:border hover:border-blue-400/20 hover:scale-102'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('transition-transform duration-300', isActive && 'scale-110'),
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/components/modules/layout/sidebar.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate font-medium",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/modules/layout/sidebar.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.href, true, {
                        fileName: "[project]/components/modules/layout/sidebar.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/modules/layout/sidebar.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-4 border-t border-blue-400/30 pt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: logout,
                    className: "flex items-center gap-3 px-4 py-3 w-full rounded-xl text-slate-300 hover:bg-red-500/15 hover:text-red-400 hover:border hover:border-red-400/30 transition-all duration-300 hover:scale-102",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/modules/layout/sidebar.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: "Cerrar Sesión"
                        }, void 0, false, {
                            fileName: "[project]/components/modules/layout/sidebar.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/modules/layout/sidebar.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/modules/layout/sidebar.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/modules/layout/sidebar.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
Sidebar.displayName = 'Sidebar';
}),
"[project]/components/modules/layout/protected-route.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProtectedRoute",
    ()=>ProtectedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.mjs [app-ssr] (ecmascript) <export default as AlertCircle>");
'use client';
;
;
;
;
;
function ProtectedRoute({ children, requiredPermission }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isAuthenticated, isLoading, user, hasPermission } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoading && !isAuthenticated) {
            router.push('/login');
        }
    }, [
        isAuthenticated,
        isLoading,
        router
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black animate-gradient-slow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-12 w-12 border-4 border-t-purple-600 border-white/20 rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/components/modules/layout/protected-route.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/80 text-lg",
                        children: "Cargando..."
                    }, void 0, false, {
                        fileName: "[project]/components/modules/layout/protected-route.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/layout/protected-route.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/modules/layout/protected-route.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this);
    }
    if (!isAuthenticated || !user) {
        return null;
    }
    if (requiredPermission && !hasPermission(requiredPermission)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black animate-gradient-slow px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg text-center max-w-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "mx-auto w-12 h-12 text-red-500 mb-4"
                    }, void 0, false, {
                        fileName: "[project]/components/modules/layout/protected-route.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-white mb-2",
                        children: "Acceso Denegado"
                    }, void 0, false, {
                        fileName: "[project]/components/modules/layout/protected-route.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/80",
                        children: "No tienes permisos para acceder a esta sección"
                    }, void 0, false, {
                        fileName: "[project]/components/modules/layout/protected-route.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modules/layout/protected-route.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/modules/layout/protected-route.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
ProtectedRoute.displayName = 'ProtectedRoute';
}),
"[project]/app/dashboard/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$layout$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modules/layout/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$layout$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modules/layout/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$layout$2f$protected$2d$route$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modules/layout/protected-route.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function DashboardLayout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.innerWidth >= 1024) //TURBOPACK unreachable
        ;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$layout$2f$protected$2d$route$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProtectedRoute"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen app-background",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('fixed left-0 top-0 bottom-0 z-40 w-60 lg:w-64 shrink-0 transform transition-transform duration-500 ease-in-out', isMenuOpen ? 'translate-x-0' : '-translate-x-full'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$layout$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                            fileName: "[project]/app/dashboard/layout.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/layout.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex min-h-screen w-full flex-col transition-[margin-left] duration-500 ease-in-out', isMenuOpen ? 'lg:ml-64' : 'ml-0'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$layout$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
                                onMenuToggle: ()=>setIsMenuOpen((open)=>!open)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/layout.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto max-w-6xl space-y-6",
                                    children: children
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/layout.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/layout.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/layout.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/layout.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/layout.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/dashboard/layout.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__45373cf2._.js.map