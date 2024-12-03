import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, signInWithPopup } from './firebase';

function SignInScreen({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('Usuario autenticado:', user);
      alert(`¡Hola, ${user.displayName}!`);
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/inicio');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión con Google');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <button onClick={loginWithGoogle}>Iniciar sesión con Google</button>
    </div>
  );
}

export default SignInScreen;