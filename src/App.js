import React, { useState } from 'react';
import './App.css';


function App() {
  const [animal, updateAnimal] = useState('dogs');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Yor favorit animal</h1>
        <form>
          <div className="radio">
            <label><input type="radio"
              name='animal'
              value="dogs"
              onChange={() => updateAnimal("dogs")} /> dogs</label>
          </div>
          <div className="radio">
            <label><input type="radio"
              name='animal'
              value="cats"
              onChange={() => updateAnimal("cats")} /> cats</label>
          </div>
          <div className="radio">
            <label><input type="radio"
              name='animal'
              value="fish"
              onChange={() => updateAnimal("fish")} /> fish</label>
          </div>
          <div className="radio">
            <label><input type="radio"
              name='animal'
              value="horse"
              onChange={() => updateAnimal("horse")} /> horse</label>
          </div>
          <div className="radio">
            <label><input type="radio"
              name='animal'
              value="johnatan"
              onChange={() => updateAnimal("Johnatan")} /> Johnatan</label>
          </div>
        </form>
        <h2 style={{ color: 'blue' }}>My favorit animal is <span
          style={{ color: 'red' }}>{animal}</span> !</h2>
      </header>
    </div>
  );
}

export default App;
