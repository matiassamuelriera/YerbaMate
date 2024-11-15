import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, signInWithPopup } from './firebase'; // Asegúrate de que las importaciones sean correctas

function SignInScreen({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Manejar inicio de sesión con Google
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider); // Asegúrate de que el proveedor de Google esté configurado correctamente
      const user = result.user; // Obtén la información del usuario
      console.log('Usuario de Google:', user); // Verifica los detalles del usuario
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/inicio');
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      alert('Error durante el inicio de sesión con Google');
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password123') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/inicio');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <form onSubmit={handleSignIn} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Iniciar Sesión</h2>
      <label>
        Correo Electrónico:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button
        type="submit"
        style={{
          padding: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          marginTop: '10px',
        }}
      >
        Iniciar Sesión
      </button>

      <div style={{ marginTop: '20px' }}>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          style={{
            padding: '10px',
            backgroundColor: '#db4437',
            color: 'white',
          }}
        >
          Iniciar sesión con Google
        </button>
      </div>
    </form>
  );
}

export default SignInScreen;
