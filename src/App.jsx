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
// pass down the function that will allow us to save the state of our entries.
// Pass it down from app to chat log
// From chat log to chat entry
// Register the event handler to the button and use the onclick event on the button
// Assign the function that we pass from app to chat log to chat entry
// update proptypes

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