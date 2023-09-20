import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Search from './search';

function App() {
  const [civilizations, setCivilizations] = useState([]);
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    axios.get('/api/civilizations')
      .then(response => {
        if (Array.isArray(response.data)) {
          setCivilizations(response.data);
        } else {
          console.error('La respuesta no es un arreglo:', response.data);
        }
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleSearch = (filteredCivilizations) => {
    setCivilizations(filteredCivilizations);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Search
          civilizations={civilizations}
          filterType={filterType}
          onSearch={handleSearch}
        />
        <div className="filter">
          <select value={filterType} onChange={handleFilterChange}>
            <option value="">Todos los tipos</option>
            <option value="Infantry">Infantería</option>
            <option value="Cavalry">Caballería</option>
            <option value="monk">Monje</option>
          </select>
        </div>
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
