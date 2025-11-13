import api from './api.js';

export class AuthService {
    async login(credentials) {
        try {
            const response = await api.post('/auth/login', credentials);
            
            if (response.token) {
                localStorage.setItem('authToken', response.token);
                return response;
            }
            
            throw new Error('Credenciales invalidas');
            
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    }

    async logout() {
        try {
            await api.post('/auth/logout');
        } catch (error) {
            console.error('Logout failed:', error);
        } finally {
            localStorage.removeItem('authToken');
        }
    }

    async getCurrentUser() {
        try {
            return await api.get('/auth/me');
        } catch (error) {
            console.error('Get current user failed:', error);
            throw error;
        }
    }

    isAuthenticated() {
        return !!localStorage.getItem('authToken');
    }
}

export default new AuthService();