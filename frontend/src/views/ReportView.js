export default class ReportsView {
    render() {
        return `
            <div class="reports-view">
                <header class="view-header">
                    <h1>Reportes y Analisis</h1>
                </header>
                <div class="view-content">
                    <div class="reports-grid">
                        <div class="report-card">
                            <h3>Reporte de Ventas</h3>
                            <p>Analisis detallado de ventas por periodo y categoria</p>
                            <button class="btn-primary" data-report="sales">Generar Reporte</button>
                        </div>
                        
                        <div class="report-card">
                            <h3>Reporte de Inventario</h3>
                            <p>Estado del inventario y productos con stock bajo</p>
                            <button class="btn-primary" data-report="inventory">Generar Reporte</button>
                        </div>
                        
                        <div class="report-card">
                            <h3>Reporte de Clientes</h3>
                            <p>Comportamiento de compra y segmentacion de clientes</p>
                            <button class="btn-primary" data-report="clients">Generar Reporte</button>
                        </div>
                        
                        <div class="report-card">
                            <h3>Reporte Financiero</h3>
                            <p>Analisis de rentabilidad y flujo de caja</p>
                            <button class="btn-primary" data-report="financial">Generar Reporte</button>
                        </div>
                    </div>
                    
                    <div class="report-params" id="reportParams" style="display: none;">
                        <h3>Parametros del Reporte</h3>
                        <div class="param-group">
                            <label for="startDate">Fecha Inicio:</label>
                            <input type="date" id="startDate">
                        </div>
                        <div class="param-group">
                            <label for="endDate">Fecha Fin:</label>
                            <input type="date" id="endDate">
                        </div>
                        <button class="btn-primary" id="generateReportBtn">Generar</button>
                    </div>
                </div>
            </div>
        `;
    }

    afterRender() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.querySelectorAll('[data-report]').forEach(button => {
            button.addEventListener('click', (e) => {
                const reportType = e.target.getAttribute('data-report');
                this.showReportParams(reportType);
            });
        });

        document.getElementById('generateReportBtn').addEventListener('click', () => {
            this.generateReport();
        });
    }

    showReportParams(reportType) {
        const paramsSection = document.getElementById('reportParams');
        paramsSection.style.display = 'block';
        
        const today = new Date().toISOString().split('T')[0];
        const firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];
        
        document.getElementById('startDate').value = firstDay;
        document.getElementById('endDate').value = today;
        
        this.currentReportType = reportType;
    }

    generateReport() {
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        
        if (!startDate || !endDate) {
            alert('Por favor seleccione ambas fechas');
            return;
        }

        alert(`Generando reporte ${this.currentReportType} del ${startDate} al ${endDate}`);
    }

    destroy() {
        console.log('ReportsView destruido');
    }
}