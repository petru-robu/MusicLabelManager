import React, { useEffect, useState } from 'react';
import { API_URL } from './config'; // or hardcode URL

function App() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setArtists(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Artists</h1>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {artists.map(artist => (
            <tr key={artist.id}>
              <td>{artist.id}</td>
              <td>{artist.name}</td>
              <td>{artist.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
