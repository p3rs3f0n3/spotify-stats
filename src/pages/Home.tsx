import React from 'react';
import useSpotifyToken from '../hooks/useSpotifyToken';
import Login from '../components/Login';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const token = useSpotifyToken();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
  }, [token, navigate]);

  return <Login />;
};

export default Home;
