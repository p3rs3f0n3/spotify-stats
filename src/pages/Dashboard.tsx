import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopTracksChart from '../components/TopTracksChart';

interface Track {
  name: string;
  popularity: number;
  artists: { name: string }[];
}

const Dashboard: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const token = localStorage.getItem('spotify_token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;

    const fetchTopTracks = async () => {
      const res = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=10', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setTracks(data.items || []);
    };

    fetchTopTracks();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('spotify_token');
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>🎧 Tus canciones más escuchadas</h2>
        <button onClick={handleLogout} style={{ height: '30px' }}>
          Salir
        </button>
      </div>

      {tracks.length > 0 ? (
        <>
          <ul>
            {tracks.map((track, idx) => (
              <li key={idx}>
                <strong>{track.name}</strong> - {track.artists.map(a => a.name).join(', ')}
              </li>
            ))}
          </ul>

          <h3 style={{ marginTop: '40px' }}>📊 Gráfico de popularidad</h3>
          <TopTracksChart tracks={tracks} />
        </>
      ) : (
        <p>Cargando canciones...</p>
      )}
    </div>
  );
};

export default Dashboard;