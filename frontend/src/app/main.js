// Sistema de Gestión de Ventas - Frontend Profesional
console.log('🚀 Sistema de Gestión de Ventas - Frontend Profesional');

class SalesManagementSystem {
    constructor() {
        this.init();
    }

    init() {
        // Simular carga de datos
        this.simulateLoading();
        
        // Inicializar eventos
        this.initEvents();
        
        // Cargar datos del dashboard
        this.loadDashboardData();
    }

    simulateLoading() {
        // Simular carga durante 2 segundos
        setTimeout(() => {
            document.getElementById('app-loading').style.display = 'none';
            document.getElementById('app').style.display = 'grid';
            
            // Animación de entrada
            this.animateEntrance();
        }, 2000);
    }

    animateEntrance() {
        const cards = document.querySelectorAll('.card');
        const sidebarItems = document.querySelectorAll('.menu-item');
        
        // Animación escalonada para las cards
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 300 + (index * 100));
        });

        // Animación para items del sidebar
        sidebarItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.4s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 500 + (index * 50));
        });
    }

    initEvents() {
        // Navegación del sidebar
        this.initSidebarNavigation();
        
        // Interacciones de las cards
        this.initCardInteractions();
        
        // Menú de usuario
        this.initUserMenu();
    }

    initSidebarNavigation() {
        const menuItems = document.querySelectorAll('.menu-item');
        
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remover active de todos
                menuItems.forEach(i => i.classList.remove('active'));
                
                // Agregar active al clickeado
                item.classList.add('active');
                
                // Aquí iría la lógica para cambiar vistas
                this.showNotification(`Navegando a: ${item.querySelector('span').textContent}`);
            });
        });
    }

    initCardInteractions() {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const cardType = card.classList[1].replace('-card', '');
                this.showNotification(`Ver detalles de ${cardType}`);
            });
        });
    }

    initUserMenu() {
        const userMenu = document.querySelector('.user-menu');
        
        userMenu.addEventListener('click', () => {
            this.showNotification('Menú de usuario abierto');
        });
    }

    loadDashboardData() {
        // Simular carga de datos del backend
        setTimeout(() => {
            console.log('✅ Datos del dashboard cargados');
        }, 1000);
    }

    showNotification(message) {
        // Crear notificación temporal
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary);
            color: white;
            padding: 15px 25px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animación de entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto-remover después de 3 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new SalesManagementSystem();
});

// Export para módulos
export default SalesManagementSystem;