import PropTypes from 'prop-types';
import './TimeStamp';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';

function ChatEntry({ sender, body, timeStamp, liked, onLikeToggle, isLocal }) {
  return (
    <div className={`chat-entry ${isLocal ? 'local' : 'remote'} ${liked ? 'liked' : ''}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <TimeStamp time={timeStamp}/>
        <button
          className="like"
          onClick={onLikeToggle}
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
}

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeToggle: PropTypes.func.isRequired,
  isLocal: PropTypes.bool.isRequired,
};

export default ChatEntry;