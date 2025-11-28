import { LoginCredentials, User, UserRole } from '../types/usuario';

// Usuarios de prueba en memoria
export const testUsers: User[] = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@test.com',
    nombre: 'Admin',
    apellido: 'Principal',
    rol: UserRole.ADMIN,
    activo: true,
    fecha_creacion: new Date().toISOString(),
    ultimo_acceso: null,
    password: 'admin',
  },
  {
    id: 2,
    username: 'supervisor', 
    email: 'supervisor@test.com',
    nombre: 'Sara',
    apellido: 'Supervisor',
    rol: UserRole.SUPERVISOR,
    activo: true,
    fecha_creacion: new Date().toISOString(),
    ultimo_acceso: null,
    password: 'supervisor',
  },
  {
    id: 3,
    username: 'vendedor',
    email: 'vendedor@test.com',
    nombre: 'Víctor',
    apellido: 'Vendedor',
    rol: UserRole.VENDEDOR,
    activo: true,
    fecha_creacion: new Date().toISOString(),
    ultimo_acceso: null,
    password: 'vendedor',
  },
  {
    id: 4,
    username: 'cajero',
    email: 'cajero@test.com',
    nombre: 'Carlos',
    apellido: 'Cajero',
    rol: UserRole.CAJERO,
    activo: true,
    fecha_creacion: new Date().toISOString(),
    ultimo_acceso: null,
    password: 'cajero',
  },
  {
    id: 5,
    username: 'cliente',
    email: 'cliente@test.com',
    nombre: 'Carla',
    apellido: 'Cliente',
    rol: UserRole.CLIENTE,
    activo: true,
    fecha_creacion: new Date().toISOString(),
    ultimo_acceso: null,
    password: 'cliente',
  },
];

// Función INFALIBLE de login - VERSIÓN SIMPLIFICADA
export function loginTestUser(credentials: LoginCredentials): User | null {
  console.log('🔐 loginTestUser(): Credenciales recibidas:', credentials);
  
  // Validación básica
  if (!credentials?.username || !credentials?.password) {
    console.error('❌ Credenciales incompletas');
    return null;
  }

  const { username, password } = credentials;
  
  // BUSCAR USUARIO DE FORMA DIRECTA
  const user = testUsers.find(u => 
    u.username.toLowerCase() === username.toLowerCase().trim() && 
    u.password === password
  );

  console.log('👤 Resultado búsqueda:', user ? `✅ ${user.username}` : '❌ No encontrado');
  
  return user || null;
}

// Debug function
export function debugUsers(): void {
  console.log('👥 USUARIOS DISPONIBLES:');
  testUsers.forEach(user => {
    console.log(`   ${user.username} / ${user.password} (${user.rol})`);
  });
}

// Auto-debug al cargar
if (typeof window !== 'undefined') {
  setTimeout(() => {
    console.log('🔍 Debug automático de usuarios:');
    debugUsers();
  }, 1000);
}