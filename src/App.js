import React from 'react';
import './App.css';
import Cards from './components/Cards';
import showcase from './images/showcase.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={showcase} alt="showcase logo" />
      </header>
      <main>
        <Cards />
      </main>
    </div>
  );
}

export default App;
