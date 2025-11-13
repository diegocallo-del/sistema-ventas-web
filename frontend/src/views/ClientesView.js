export default class ClientsView {
    render() {
        return `
            <div class="clients-view">
                <header class="view-header">
                    <h1>Gestion de Clientes</h1>
                    <div class="view-actions">
                        <button class="btn-primary" id="addClientBtn">Agregar Cliente</button>
                    </div>
                </header>
                <div class="view-content">
                    <div class="clients-table-container">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Telefono</th>
                                    <th>Total Compras</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="clientsTableBody">
                                <tr>
                                    <td colspan="6" class="text-center">Cargando clientes...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }

    afterRender() {
        this.loadClients();
        this.setupEventListeners();
    }

    async loadClients() {
        try {
            const clients = [
                { id: 1, nombre: 'Juan Perez', email: 'juan@email.com', telefono: '+123456789', totalCompras: 2450.00 },
                { id: 2, nombre: 'Maria Garcia', email: 'maria@email.com', telefono: '+987654321', totalCompras: 1890.50 },
                { id: 3, nombre: 'Carlos Lopez', email: 'carlos@email.com', telefono: '+456123789', totalCompras: 3200.75 }
            ];
            
            this.renderClientsTable(clients);
            
        } catch (error) {
            console.error('Error cargando clientes:', error);
        }
    }

    renderClientsTable(clients) {
        const tbody = document.getElementById('clientsTableBody');
        
        tbody.innerHTML = clients.map(client => `
            <tr>
                <td>${client.id}</td>
                <td>${client.nombre}</td>
                <td>${client.email}</td>
                <td>${client.telefono}</td>
                <td>$${client.totalCompras}</td>
                <td>
                    <button class="btn-action edit" data-id="${client.id}">Editar</button>
                    <button class="btn-action view" data-id="${client.id}">Ver</button>
                </td>
            </tr>
        `).join('');
    }

    setupEventListeners() {
        document.getElementById('addClientBtn').addEventListener('click', () => {
            this.showClientModal();
        });
    }

    showClientModal() {
        alert('Funcionalidad de agregar cliente - En desarrollo');
    }

    destroy() {
        console.log('ClientsView destruido');
    }
}