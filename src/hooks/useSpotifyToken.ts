import { useEffect, useState } from 'react';

const useSpotifyToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Verifica si ya tenemos token guardado
    const savedToken = localStorage.getItem('spotify_token');
    if (savedToken) {
      setToken(savedToken);
    } else {
      // Revisa la URL si viene un token nuevo
      const hash = window.location.hash;
      const accessTokenMatch = hash.match(/access_token=([^&]*)/);

      if (accessTokenMatch) {
        const newToken = accessTokenMatch[1];
        localStorage.setItem('spotify_token', newToken);
        setToken(newToken);
        // Limpia el hash de la URL
        window.history.pushState({}, '', window.location.pathname);
      }
    }
  }, []);

  return token;
};

export default useSpotifyToken;
