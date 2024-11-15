import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Inicio from './inicio';
import SignInScreen from './login';
import { auth, provider } from './firebaseConfig';
import { signInWithPopup } from 'firebase/auth';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verifica el estado de autenticación en el montaje del componente
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  return (
    <Router>
      <Routes>
        {/* Ruta para la pantalla de inicio de sesión */}
        <Route path="/login" element={<SignInScreen setIsAuthenticated={setIsAuthenticated} />} />

        {/* Ruta protegida para la pantalla de Inicio */}
        <Route
          path="/inicio"
          element={isAuthenticated ? <Inicio /> : <Navigate to="/login" replace />}
        />

        {/* Ruta principal que muestra la bienvenida */}
        <Route
          path="/"
          element={
            <div style={styles.container}>
              <header style={styles.header}>
                <h1>Bienvenido a A.C.M.E.</h1>
                <p>Explora todas las funciones de nuestra app y simplifica la entrega de tus certificados médicos.</p>
                <Link to="/inicio" style={styles.button}>Empezar</Link>
              </header>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

// Estilos en línea para el componente
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    margin: 0,
    backgroundColor: '#f3f4f6',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default App;
