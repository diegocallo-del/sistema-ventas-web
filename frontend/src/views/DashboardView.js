export default class DashboardView {
    render() {
        return `
            <div class="dashboard-view">
                <header class="view-header">
                    <h1>Panel de Control</h1>
                    <nav class="main-nav">
                        <a href="#/productos" class="nav-link">Productos</a>
                        <a href="#/ventas" class="nav-link">Ventas</a>
                        <a href="#/clientes" class="nav-link">Clientes</a>
                        <a href="#/reportes" class="nav-link">Reportes</a>
                        <button class="btn-logout" id="logoutBtn">Cerrar Sesion</button>
                    </nav>
                </header>
                <div class="dashboard-content">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <h3>Total Productos</h3>
                            <div class="stat-value" id="totalProducts">0</div>
                        </div>
                        <div class="stat-card">
                            <h3>Ventas del Mes</h3>
                            <div class="stat-value" id="monthlySales">0</div>
                        </div>
                        <div class="stat-card">
                            <h3>Clientes Activos</h3>
                            <div class="stat-value" id="activeClients">0</div>
                        </div>
                        <div class="stat-card">
                            <h3>Ingresos Totales</h3>
                            <div class="stat-value" id="totalIncome">$0</div>
                        </div>
                    </div>
                    
                    <div class="recent-activity">
                        <h2>Actividad Reciente</h2>
                        <div class="activity-list" id="activityList">
                            <p>Cargando actividades...</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    afterRender() {
        this.loadDashboardData();
        this.setupEventListeners();
    }

    async loadDashboardData() {
        try {
            const stats = {
                totalProducts: 156,
                monthlySales: 89,
                activeClients: 234,
                totalIncome: 12560
            };

            document.getElementById('totalProducts').textContent = stats.totalProducts;
            document.getElementById('monthlySales').textContent = stats.monthlySales;
            document.getElementById('activeClients').textContent = stats.activeClients;
            document.getElementById('totalIncome').textContent = `$${stats.totalIncome}`;
            
            this.loadRecentActivity();
            
        } catch (error) {
            console.error('Error cargando datos del dashboard:', error);
        }
    }

    async loadRecentActivity() {
        const activities = [
            'Nueva venta registrada - $450.00',
            'Producto agregado al inventario',
            'Cliente nuevo registrado',
            'Reporte mensual generado'
        ];
        
        const activityList = document.getElementById('activityList');
        activityList.innerHTML = activities.map(activity => `
            <div class="activity-item">${activity}</div>
        `).join('');
    }

    setupEventListeners() {
        document.getElementById('logoutBtn').addEventListener('click', () => {
            localStorage.removeItem('authToken');
            window.location.hash = '#/login';
        });
    }

    destroy() {
        console.log('DashboardView destruido');
    }
}