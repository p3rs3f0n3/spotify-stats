import React, { useEffect } from 'react';

const Goodbye: React.FC = () => {
  useEffect(() => {
    // Abrir logout de Spotify
    const logoutWindow = window.open('https://accounts.spotify.com/logout', '_blank');

    // Esperar y redirigir al home
    setTimeout(() => {
      logoutWindow?.close();
      window.location.href = '/';
    }, 1500);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>👋 ¡Hasta luego!</h2>
      <p>Gracias por visitar tu mundo musical 🎶</p>
      <p>Te esperamos de nuevo pronto 💚</p>
    </div>
  );
};

export default Goodbye;
