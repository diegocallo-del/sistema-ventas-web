export default class LoginView {
    render() {
        return `
            <div class="login-view">
                <div class="login-container">
                    <div class="login-card">
                        <h1>Sistema de Ventas</h1>
                        <form id="loginForm" class="login-form">
                            <div class="form-group">
                                <label for="username">Usuario</label>
                                <input type="text" id="username" name="username" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" id="password" name="password" required>
                            </div>
                            <button type="submit" class="btn-primary btn-block">Iniciar Sesion</button>
                        </form>
                        <div id="errorMessage" class="error-message" style="display: none;"></div>
                    </div>
                </div>
            </div>
        `;
    }

    afterRender() {
        document.getElementById('loginForm').addEventListener('submit', this.handleLogin.bind(this));
    }

    async handleLogin(event) {
        event.preventDefault();
        
        const formData = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        };

        this.showLoading(true);

        try {
            await this.authenticate(formData);
            window.location.hash = '#/';
        } catch (error) {
            this.showError('Credenciales incorrectas');
        } finally {
            this.showLoading(false);
        }
    }

    async authenticate(credentials) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (credentials.username === 'admin' && credentials.password === 'admin') {
                    localStorage.setItem('authToken', 'mock-token-' + Date.now());
                    resolve();
                } else {
                    reject(new Error('Credenciales invalidas'));
                }
            }, 1000);
        });
    }

    showError(message) {
        const errorDiv = document.getElementById('errorMessage');
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
        
        setTimeout(() => {
            errorDiv.style.display = 'none';
        }, 5000);
    }

    showLoading(loading) {
        const button = document.querySelector('#loginForm button');
        if (loading) {
            button.disabled = true;
            button.textContent = 'Iniciando sesion...';
        } else {
            button.disabled = false;
            button.textContent = 'Iniciar Sesion';
        }
    }

    destroy() {
        console.log('LoginView destruido');
    }
}