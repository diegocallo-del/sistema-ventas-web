import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/config/firebase';
import { signInWithCredential, GoogleAuthProvider } from 'firebase/auth';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: 'Token es requerido' },
        { status: 400 }
      );
    }

    // Verificar que Firebase esté configurado
    if (!auth) {
      return NextResponse.json(
        { error: 'Firebase no está configurado' },
        { status: 500 }
      );
    }

    // Verificar token de Google con Firebase
    const credential = GoogleAuthProvider.credential(null, token);
    const userCredential = await signInWithCredential(auth, credential);
    const firebaseUser = userCredential.user;

    // Obtener datos del usuario
    const userData = {
      id: firebaseUser.uid,
      nombre: firebaseUser.displayName?.split(' ')[0] || 'Usuario',
      apellido: firebaseUser.displayName?.split(' ').slice(1).join(' ') || '',
      email: firebaseUser.email!,
      role: 'CLIENTE', // Rol por defecto
      activo: true,
      fechaCreacion: firebaseUser.metadata.creationTime,
      fechaActualizacion: new Date().toISOString(),
    };

    // Enviar token al backend para validación y obtener datos reales
    const backendResponse = await fetch(`${process.env.BACKEND_URL}/api/auth/google/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: firebaseUser.email,
        googleId: firebaseUser.uid,
        displayName: firebaseUser.displayName,
      }),
    });

    if (backendResponse.ok) {
      const backendUserData = await backendResponse.json();
      return NextResponse.json({
        ...backendUserData,
        token,
      });
    }

    // Si el backend no responde, devolver datos básicos
    return NextResponse.json({
      ...userData,
      token,
    });

  } catch (error: any) {
    console.error('Error en login con Google:', error);

    return NextResponse.json(
      { error: 'Error en el inicio de sesión con Google' },
      { status: 500 }
    );
  }
}