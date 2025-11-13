class Store {
    constructor() {
        this.state = {
            user: null,
            products: [],
            clients: [],
            sales: [],
            cart: [],
            ui: {
                loading: false,
                sidebarOpen: false
            }
        };
        this.subscribers = new Set();
        this.persistenceKeys = ['user', 'cart'];
    }

    async init() {
        await this.loadPersistedState();
    }

    setState(newState) {
        const oldState = { ...this.state };
        this.state = this.deepMerge(this.state, newState);
        this.notifySubscribers(oldState);
        this.persistState();
    }

    deepMerge(target, source) {
        const result = { ...target };
        
        for (const key in source) {
            if (source[key] instanceof Object && key in target) {
                result[key] = this.deepMerge(target[key], source[key]);
            } else {
                result[key] = source[key];
            }
        }
        
        return result;
    }

    subscribe(callback) {
        this.subscribers.add(callback);
        return () => this.subscribers.delete(callback);
    }

    notifySubscribers(oldState) {
        this.subscribers.forEach(callback => {
            try {
                callback(this.state, oldState);
            } catch (error) {
                console.error('Error en subscriber:', error);
            }
        });
    }

    getState() {
        return this.state;
    }

    getUser() {
        return this.state.user;
    }

    getProducts() {
        return this.state.products;
    }

    getCart() {
        return this.state.cart;
    }

    getCartTotal() {
        return this.state.cart.reduce((total, item) => 
            total + (item.precio * item.cantidad), 0
        );
    }

    setUser(user) {
        this.setState({ user });
        if (user && user.token) {
            localStorage.setItem('authToken', user.token);
        }
    }

    clearUser() {
        this.setState({ user: null });
        localStorage.removeItem('authToken');
    }

    setLoading(loading) {
        this.setState({ ui: { loading } });
    }

    addToCart(product, cantidad = 1) {
        const existingItem = this.state.cart.find(item => item.id === product.id);
        let newCart;

        if (existingItem) {
            newCart = this.state.cart.map(item =>
                item.id === product.id
                    ? { ...item, cantidad: item.cantidad + cantidad }
                    : item
            );
        } else {
            newCart = [...this.state.cart, { ...product, cantidad }];
        }

        this.setState({ cart: newCart });
    }

    removeFromCart(productId) {
        const newCart = this.state.cart.filter(item => item.id !== productId);
        this.setState({ cart: newCart });
    }

    updateCartItem(productId, cantidad) {
        const newCart = this.state.cart.map(item =>
            item.id === productId ? { ...item, cantidad } : item
        );
        this.setState({ cart: newCart });
    }

    clearCart() {
        this.setState({ cart: [] });
    }

    persistState() {
        const stateToPersist = {};
        this.persistenceKeys.forEach(key => {
            if (this.state[key] !== undefined) {
                stateToPersist[key] = this.state[key];
            }
        });
        
        try {
            localStorage.setItem('appState', JSON.stringify(stateToPersist));
        } catch (error) {
            console.warn('Error guardando estado:', error);
        }
    }

    async loadPersistedState() {
        try {
            const saved = localStorage.getItem('appState');
            if (saved) {
                const parsed = JSON.parse(saved);
                this.setState(parsed);
            }
        } catch (error) {
            console.warn('Error cargando estado persistido:', error);
            localStorage.removeItem('appState');
        }
    }
}

export default new Store();