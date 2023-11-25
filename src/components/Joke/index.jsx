import { useState } from 'react';
import './index.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [counterLikes, setCounterLikes] = useState(likes);
  const [counterDislikes, setCounterDislikes] = useState(dislikes);

  const handleClick = (e) => {
    console.log('hello hello');
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={() => setCounterLikes(counterLikes + 1)}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {counterLikes}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={() => setCounterDislikes(counterDislikes + 1)}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {counterDislikes}
        </span>
      </div>
    </div>
  );
};
