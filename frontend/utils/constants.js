export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        LOGOUT: '/auth/logout',
        ME: '/auth/me'
    },
    PRODUCTS: {
        BASE: '/productos',
        SEARCH: '/productos/search'
    },
    SALES: {
        BASE: '/ventas',
        STATS: '/ventas/estadisticas'
    },
    CLIENTS: {
        BASE: '/clientes'
    },
    REPORTS: {
        SALES: '/reportes/ventas',
        INVENTORY: '/reportes/inventario'
    }
};

export const USER_ROLES = {
    ADMIN: 'admin',
    MANAGER: 'manager',
    SALES: 'sales'
};

export const PRODUCT_CATEGORIES = {
    ELECTRONICA: 'electronica',
    ROPA: 'ropa',
    HOGAR: 'hogar',
    OTROS: 'otros'
};

export const SALE_STATUS = {
    PENDING: 'pendiente',
    COMPLETED: 'completada',
    CANCELLED: 'cancelada'
};