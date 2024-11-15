import React from 'react';
import { useNavigate } from 'react-router-dom';

import { signInWithPopup } from 'firebase/auth';

function Inicio({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const handleCertificadoClick = () => {
    window.open('https://forms.gle/DTV9buVDvqqtBCpH7', '_blank');
  };
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/login');
  };
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Inicio</h1>
        
      </header>
      <div style={styles.mainContent}>
        <h2>Alumno</h2>
        <button style={styles.button2} onClick={handleCertificadoClick}>
          Subir certificado
        </button>
        <br /><br />
        <button style={styles.button2}>Notificaciones</button>
        <br /><br />
        <button onClick={handleLogout} style={{ padding: '10px', backgroundColor: '#e74c3c', color: 'white' }}>
        Cerrar Sesión
      </button>
      </div>
      <footer style={styles.footer}>
        <p>&copy; 2024 ACME S.A.</p>
        <p>
          Para más información, visita{' '}
          <a href="https://www.certificadosmedicos.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
            nuestro sitio web
          </a>
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f0f4f7',
    fontFamily: 'Arial, sans-serif',
    margin: '0',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '5px 30px',
    
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    textAlign: 'center',
  },
  mainContent: {
    textAlign: 'center',
    padding: '110px 0',
    backgroundColor: '#ffffff',
    width: '100%',
  },
  button: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
  },
  button2: {
    backgroundColor: '#a1fea1',
    color: 'black',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    margin: '5px',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    width: '100%',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Inicio;
