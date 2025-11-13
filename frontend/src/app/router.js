class Router {
    constructor() {
        this.routes = new Map();
        this.currentRoute = null;
        this.currentView = null;
        this.middlewares = [];
    }

    addRoute(path, name, componentLoader, middlewares = []) {
        this.routes.set(path, {
            name,
            componentLoader,
            middlewares
        });
    }

    async navigate(path, replace = false) {
        if (path === this.currentRoute) return;

        const route = this.routes.get(path);
        if (!route) {
            this.showNotFound();
            return;
        }

        for (const middleware of route.middlewares) {
            const result = await middleware();
            if (result === false) return;
        }

        try {
            const componentModule = await route.componentLoader();
            const ComponentClass = componentModule.default;
            
            if (this.currentView && typeof this.currentView.destroy === 'function') {
                this.currentView.destroy();
            }

            this.currentView = new ComponentClass();
            this.currentRoute = path;
            
            this.render();
            
            if (replace) {
                window.history.replaceState({}, '', `#${path}`);
            } else {
                window.history.pushState({}, '', `#${path}`);
            }

        } catch (error) {
            console.error('Error navegando a ruta:', error);
            this.showError();
        }
    }

    render() {
        const appContainer = document.getElementById('app');
        if (this.currentView && typeof this.currentView.render === 'function') {
            appContainer.innerHTML = this.currentView.render();
            
            if (typeof this.currentView.afterRender === 'function') {
                setTimeout(() => this.currentView.afterRender(), 0);
            }
        }
    }

    init() {
        window.addEventListener('hashchange', () => {
            const path = window.location.hash.slice(1) || '/';
            this.navigate(path, true);
        });

        const initialPath = window.location.hash.slice(1) || '/';
        this.navigate(initialPath, true);
    }

    async requireAuth() {
        const token = localStorage.getItem('authToken');
        if (!token) {
            this.navigate('/login');
            return false;
        }
        return true;
    }

    async requireGuest() {
        const token = localStorage.getItem('authToken');
        if (token) {
            this.navigate('/');
            return false;
        }
        return true;
    }

    showNotFound() {
        document.getElementById('app').innerHTML = `
            <div class="not-found">
                <h1>404 - Pagina No Encontrada</h1>
                <p>La pagina que busca no existe.</p>
                <a href="#/" class="btn-primary">Volver al Inicio</a>
            </div>
        `;
    }

    showError() {
        document.getElementById('app').innerHTML = `
            <div class="route-error">
                <h2>Error de Navegacion</h2>
                <p>No se pudo cargar la pagina solicitada.</p>
                <button onclick="window.location.reload()" class="btn-primary">Reintentar</button>
            </div>
        `;
    }
}

export default new Router();