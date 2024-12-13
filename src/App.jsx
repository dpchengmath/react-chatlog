import { useState} from 'react';
import './App.css';
import messagesData from './data/messages.json';
import ChatLog from './components/ChatLog';

function App() {
  const [entries, setEntries] = useState(messagesData);

  const toggleLike = (id) => {
    setEntries(entries => entries.map(entry => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked};
      } else {
        return entry;
      }
    }));
  };

  return (
    <div id="App">
      <header>
        <h1>{entries.filter(entry => entry.liked).length} ❤️s</h1>
      </header>
      <main>
        <ChatLog
          entries={entries}
          onLikeToggle={toggleLike}/>
      </main>
    </div>
  );
}

export default App;