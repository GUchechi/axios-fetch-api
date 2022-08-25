import './App.css';
import Axios from 'axios';
import { useState } from 'react';

function App() {

    const [joke, SetJoke] = useState("")

    const getJoke = () => {

      const config = {
        headers: {
            Accept: 'application/json',
        },
    }

      Axios.get('https://icanhazdadjoke.com', config).then((response) => {
        SetJoke(response.data["joke"]);
      })
    }

  return (
    <div className="App">
     Hello Youtube <button onClick={getJoke}>Get Joke</button>
     {joke}
    </div>
  );
}

export default App;
