import { useState, useEffect } from 'react';
import messagesData from './data/messages.json';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(messagesData);
  }, []);

  const handleLikeToggle = (id) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, liked: !entry.liked } : entry
      )
    );
  };

  return (
    <div>
      <h1>{entries.filter(entry => entry.liked).length} ❤️s</h1>
      {entries.map(entry => (
        <div key={entry.id}>
          <button
            className="like"
            onClick={() => handleLikeToggle(entry.id)}
          >
            {entry.liked ? '❤️' : '🤍'}
          </button>
          <span>{entry.sender}</span>
          <p>{entry.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;