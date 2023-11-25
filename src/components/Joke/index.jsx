import { useState } from 'react';
import './index.css';

export const Joke = ({ jokes }) => {
  const [counterLikes, setCounterLikes] = useState(0);
  const [counterDislikes, setCounterDislikes] = useState(0);

  return (
    <div>
      {jokes.map((joe) => (
        <div key={joe.id} className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img className="user-avatar" src={joe.avatar} />
              <p className="user-name">{joe.name}</p>
            </div>

            <p className="joke__text">{joe.text}</p>
          </div>
          <div className="joke__likes">
            <button
              id="btn-up"
              className="btn-like btn-like--up"
              // onClick={() => setCounterLikes(counterLikes + 1)}
            ></button>
            <span id="likes-up" className="likes-count likes-count--up">
              {joe.likes}
            </span>
            <button
              id="btn-down"
              className="btn-like btn-like--down"
              // onClick={() => setCounterDislikes(counterDislikes + 1)}
            ></button>
            <span id="likes-down" className="likes-count likes-count--down">
              {joe.dislikes}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
