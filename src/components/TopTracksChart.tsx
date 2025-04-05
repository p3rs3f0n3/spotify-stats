import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface Props {
  tracks: {
    name: string;
    popularity: number;
  }[];
}

const TopTracksChart: React.FC<Props> = ({ tracks }) => {
  const data = tracks.map(track => ({
    name: track.name.length > 20 ? track.name.slice(0, 20) + '...' : track.name,
    popularity: track.popularity,
  }));

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="popularity" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopTracksChart;
