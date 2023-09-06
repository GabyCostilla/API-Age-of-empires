import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [civilizations, setCivilizations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const applyFilters = () => {
    const filteredCivilizations = civilizations.filter((civilization) => {
      if (filterType && civilization.army_type !== filterType) {
        return false;
      }
      return civilization.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setCivilizations(filteredCivilizations);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar civilización"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={applyFilters}>Buscar</button>
        </div>
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