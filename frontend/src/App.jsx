import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/items')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Items from database: </h1>
      {items.length > 0 ? (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No items found.</p>
      )}

    </div>
  );
}


export default App;
