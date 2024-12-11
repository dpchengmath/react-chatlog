import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

function ChatEntry({ sender, body, timeStamp, liked, onLikeToggle, isLocal }) {
  return (
    <div className={`chat-entry ${isLocal ? 'local' : 'remote'} ${liked ? 'liked' : ''}`}>
      <h3 className="entry-name">{sender}</h3>
      <section className="entry-bubble">
        <p>{body}</p>
        <time className="entry-time">
          {formatDistanceToNow(new Date(timeStamp), { addSuffix: true })}
        </time>
        <button
          className="like-button"
          onClick={onLikeToggle}
          aria-label={liked ? 'Unlike' : 'Like'}
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