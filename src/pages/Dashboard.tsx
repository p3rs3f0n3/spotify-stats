import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopTracksChart from '../components/TopTracksChart';


interface Track {
  name: string;
  popularity: number;
  artists: { name: string }[];
}

const Dashboard: React.FC = () => 
{
const [tracks, setTracks] = useState<Track[]>([]);
const token = localStorage.getItem('spotify_token');
const navigate = useNavigate();
const [error, setError] = useState<string | null>(null);

console.log("Token actual:", token);

  useEffect(() => {
    if (!token) return;

    const fetchTopTracks = async () => {
      try {
        const res = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=10', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 403) {
          setError("Parece que aún no tienes suficiente historial en Spotify. ¡Escucha algo y vuelve luego!");
          return;
        }
    
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
    
        const data = await res.json();
    
        if (!data.items || data.items.length === 0) {
          setError("😅 No encontramos canciones favoritas. ¡Escucha algunas y vuelve!");
        } else {
          setTracks(data.items);
        }

      } catch (err) {
        setError((err as Error).message);
      }
    };   

    fetchTopTracks();
  }, [token]);


  const handleLogout = () => {
    localStorage.removeItem('spotify_token');
    navigate('/goodbye');
  };


  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>🎧 Tus canciones más escuchadas</h2>
        <button onClick={handleLogout} style={{ height: '30px' }}>
          Salir
        </button>
      </div>

     {error ? (
        <div style={{ textAlign: 'center', marginTop: '40px', color: 'red' }}>
        <p>{error}</p>
      </div>
      ) : tracks.length > 0 ? (
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
      )
    }

    </div>
  );

};

export default Dashboard;