/**
 * Servicio simple de usuarios
 * Solo para operaciones básicas de listas y cambio de roles
 */

/**
 * Interfaz para usuario básico
 */
export interface UsuarioDTO {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  activo: boolean;
}

/**
 * Obtiene usuarios básicos (VENDEDOR/CLIENTE)
 */
export async function getUsuarios(): Promise<UsuarioDTO[]> {
  const token = localStorage.getItem('auth_token');
  const response = await fetch('/api/usuarios', {
    headers: {
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

/**
 * Cambia rol de un usuario
 */
export async function cambiarRolUsuario(userId: number, nuevoRol: string): Promise<UsuarioDTO> {
  const token = localStorage.getItem('auth_token');

  const response = await fetch(`/api/usuarios/${userId}/role?nuevoRol=${encodeURIComponent(nuevoRol)}`, {
    method: 'POST',
    headers: {
      'Authorization': token ? `Bearer ${token}` : '',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

export async function eliminarUsuario(userId: number): Promise<void> {
  const token = localStorage.getItem('auth_token');

  const response = await fetch(`/api/usuarios/${userId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': token ? `Bearer ${token}` : '',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
}
