// Sign-In-Screen.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignInScreen({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Aquí agregarías la lógica de autenticación (Firebase o cualquier otro servicio)
    // Supongamos que la autenticación es exitosa

    if (email === 'user@example.com' && password === 'password123') { // Aquí va tu lógica real
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
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', marginTop: '10px' }}>
        Iniciar Sesión
      </button>
    </form>
  );
}

export default SignInScreen;
