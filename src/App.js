import './App.css';
import Axios from 'axios';

function App() {

    const getJoke = () => {

      const config = {
        headers: {
            Accept: 'application/json',
        },
    }

      Axios.get('https://icanhazdadjoke.com', config).then((response) => {
        console.log(response.data);
      })
    }

  return (
    <div className="App">
     Hello Youtube <button onClick={getJoke}>Get Joke</button>
    </div>
  );
}

export default App;
