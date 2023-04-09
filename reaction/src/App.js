import React from 'react';
import JokeList from './components/JokeList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
        <h1>Daily Jokes</h1>
        <JokeList />
      </div>
  );
}

export default App;
