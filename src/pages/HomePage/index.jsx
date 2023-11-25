import { Joke } from '../../components/Joke';
import './style.css';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [jokesData, setJokesData] = useState([
    {
      id: 'user01',
      avatar:
        'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png',
      name: 'Neroxx',
      text: 'The secret service isn\'t allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"',
      likes: 13,
      dislikes: 24,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      setJokesData(data.result);
      console.log(jokesData);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {jokesData.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
