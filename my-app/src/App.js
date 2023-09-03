import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [civilizations, setCivilizations] = useState([]);

  useEffect(() => {
    
    fetch('./civilizations.json') // Ruta relativa al archivo JSON en la carpeta public
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
        
        <ul>
          {civilizations.map((civilization) => (
            <li key={civilization.name}>
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
