import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [civilizations, setCivilizations] = useState([]);

  useEffect(() => {
    fetch('/Age_of_empires_api/public/civilization.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON.');
        }
        return response.json();
      })
      .then((data) => {
        setCivilizations(data.civilization);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Civilizaciones de Age of Empires 2</h1>
        <ul>
          {civilizations.map((civilization, index) => (
            <li key={index}>
              <h2>{civilization.name}</h2>
              <p>Expansión: {civilization.expansion}</p>
              <p>Ventajas: {civilization.civilization_bonus}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
