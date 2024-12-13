import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

function ChatLog({ entries, onLikeToggle }) {
  return (
    <section className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}
          {...entry}
          onLikeToggle={() => onLikeToggle(entry.id)}
          isLocal={entry.isLocal}
        />
      ))}
    </section>
  );
}

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      isLocal: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatLog;