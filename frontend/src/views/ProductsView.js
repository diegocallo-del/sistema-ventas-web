export default class ProductsView {
    constructor() {
        this.products = [];
    }

    render() {
        return `
            <div class="products-view">
                <header class="view-header">
                    <h1>Gestion de Productos</h1>
                    <div class="view-actions">
                        <button class="btn-primary" id="addProductBtn">Agregar Producto</button>
                    </div>
                </header>
                <div class="view-content">
                    <div class="toolbar">
                        <div class="search-box">
                            <input type="text" id="searchInput" placeholder="Buscar productos...">
                        </div>
                        <select id="categoryFilter">
                            <option value="">Todas las categorias</option>
                            <option value="electronica">Electronica</option>
                            <option value="ropa">Ropa</option>
                            <option value="hogar">Hogar</option>
                        </select>
                    </div>
                    
                    <div class="products-table-container">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Categoria</th>
                                    <th>Precio</th>
                                    <th>Stock</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="productsTableBody">
                                <tr>
                                    <td colspan="6" class="text-center">Cargando productos...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }

    afterRender() {
        this.loadProducts();
        this.setupEventListeners();
    }

    async loadProducts() {
        try {
            this.products = [
                { id: 1, nombre: 'Laptop Dell XPS', categoria: 'electronica', precio: 1299.99, stock: 15 },
                { id: 2, nombre: 'iPhone 15 Pro', categoria: 'electronica', precio: 1199.99, stock: 8 },
                { id: 3, nombre: 'Camisa Formal', categoria: 'ropa', precio: 45.99, stock: 25 },
                { id: 4, nombre: 'Silla Oficina', categoria: 'hogar', precio: 199.99, stock: 12 }
            ];
            
            this.renderProductsTable();
            
        } catch (error) {
            console.error('Error cargando productos:', error);
        }
    }

    renderProductsTable() {
        const tbody = document.getElementById('productsTableBody');
        
        if (this.products.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6" class="text-center">No hay productos registrados</td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = this.products.map(product => `
            <tr>
                <td>${product.id}</td>
                <td>${product.nombre}</td>
                <td>${product.categoria}</td>
                <td>$${product.precio}</td>
                <td>
                    <span class="stock-badge ${product.stock < 10 ? 'low' : product.stock < 20 ? 'medium' : 'high'}">
                        ${product.stock}
                    </span>
                </td>
                <td>
                    <button class="btn-action edit" data-id="${product.id}">Editar</button>
                    <button class="btn-action delete" data-id="${product.id}">Eliminar</button>
                </td>
            </tr>
        `).join('');
    }

    setupEventListeners() {
        document.getElementById('addProductBtn').addEventListener('click', () => {
            this.showProductModal();
        });

        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterProducts(e.target.value);
        });

        document.getElementById('categoryFilter').addEventListener('change', (e) => {
            this.filterByCategory(e.target.value);
        });
    }

    filterProducts(searchTerm) {
        const filtered = this.products.filter(product =>
            product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.renderFilteredProducts(filtered);
    }

    filterByCategory(category) {
        const filtered = category ? 
            this.products.filter(product => product.categoria === category) :
            this.products;
        this.renderFilteredProducts(filtered);
    }

    renderFilteredProducts(filteredProducts) {
        const tbody = document.getElementById('productsTableBody');
        
        if (filteredProducts.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6" class="text-center">No se encontraron productos</td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = filteredProducts.map(product => `
            <tr>
                <td>${product.id}</td>
                <td>${product.nombre}</td>
                <td>${product.categoria}</td>
                <td>$${product.precio}</td>
                <td>
                    <span class="stock-badge ${product.stock < 10 ? 'low' : product.stock < 20 ? 'medium' : 'high'}">
                        ${product.stock}
                    </span>
                </td>
                <td>
                    <button class="btn-action edit" data-id="${product.id}">Editar</button>
                    <button class="btn-action delete" data-id="${product.id}">Eliminar</button>
                </td>
            </tr>
        `).join('');
    }

    showProductModal() {
        alert('Funcionalidad de agregar producto - En desarrollo');
    }

    destroy() {
        console.log('ProductsView destruido');
    }
}