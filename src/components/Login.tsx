import React from 'react';

const CLIENT_ID = '1942877cfa2e433688a4d7a47a4b26e2';
//const REDIRECT_URI = 'http://localhost:5173'; // o tu dominio en producción
const REDIRECT_URI = import.meta.env.DEV
  ? 'http://localhost:5173'
  : 'https://spotify-stats-sigma.vercel.app';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';
const SCOPES = ['user-top-read']; // Puedes agregar más scopes aquí

const Login: React.FC = () => {
  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join('%20')}`;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Mis Estadísticas de Spotify</h1>
      <a href={loginUrl}>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Iniciar sesión con Spotify
        </button>
      </a>
    </div>
  );
};

export default Login;
