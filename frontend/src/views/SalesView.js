export default class SalesView {
    render() {
        return `
            <div class="sales-view">
                <header class="view-header">
                    <h1>Gestion de Ventas</h1>
                    <div class="view-actions">
                        <button class="btn-primary" id="newSaleBtn">Nueva Venta</button>
                    </div>
                </header>
                <div class="view-content">
                    <div class="sales-stats">
                        <div class="stat-card">
                            <h3>Ventas Hoy</h3>
                            <div class="stat-value">$1,250.00</div>
                        </div>
                        <div class="stat-card">
                            <h3>Ventas del Mes</h3>
                            <div class="stat-value">$28,450.00</div>
                        </div>
                    </div>
                    
                    <div class="sales-list">
                        <h2>Ventas Recientes</h2>
                        <div class="sales-table-container">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>ID Venta</th>
                                        <th>Cliente</th>
                                        <th>Fecha</th>
                                        <th>Total</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody id="salesTableBody">
                                    <tr>
                                        <td colspan="6" class="text-center">Cargando ventas...</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    afterRender() {
        this.loadSales();
        this.setupEventListeners();
    }

    async loadSales() {
        try {
            const sales = [
                { id: 'V-001', cliente: 'Juan Perez', fecha: '2024-01-15', total: 450.00, estado: 'Completada' },
                { id: 'V-002', cliente: 'Maria Garcia', fecha: '2024-01-15', total: 289.99, estado: 'Completada' },
                { id: 'V-003', cliente: 'Carlos Lopez', fecha: '2024-01-14', total: 1299.99, estado: 'Completada' }
            ];
            
            this.renderSalesTable(sales);
            
        } catch (error) {
            console.error('Error cargando ventas:', error);
        }
    }

    renderSalesTable(sales) {
        const tbody = document.getElementById('salesTableBody');
        
        tbody.innerHTML = sales.map(sale => `
            <tr>
                <td>${sale.id}</td>
                <td>${sale.cliente}</td>
                <td>${sale.fecha}</td>
                <td>$${sale.total}</td>
                <td>
                    <span class="status-badge ${sale.estado.toLowerCase()}">
                        ${sale.estado}
                    </span>
                </td>
                <td>
                    <button class="btn-action view" data-id="${sale.id}">Ver</button>
                    <button class="btn-action delete" data-id="${sale.id}">Anular</button>
                </td>
            </tr>
        `).join('');
    }

    setupEventListeners() {
        document.getElementById('newSaleBtn').addEventListener('click', () => {
            this.startNewSale();
        });
    }

    startNewSale() {
        alert('Funcionalidad de nueva venta - En desarrollo');
    }

    destroy() {
        console.log('SalesView destruido');
    }
}