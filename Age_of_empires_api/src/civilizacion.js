import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Search from './search';

function App() {
  const [originalCivilizations, setOriginalCivilizations] = useState([]); // Mantén la lista original aquí
  const [civilizations, setCivilizations] = useState([]);
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    axios.get('/api/civilizations')
      .then(response => {
        setOriginalCivilizations(response.data); // Guarda la lista original
        setCivilizations(response.data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
    filterCivilizations(originalCivilizations, event.target.value); // Filtra la copia con el nuevo valor
  };

  const handleSearch = (filteredCivilizations) => {
    setCivilizations(filteredCivilizations);
  };

  // Función para filtrar la lista de civilizaciones
  const filterCivilizations = (list, type) => {
    if (type === '') {
      setCivilizations(list); // Si no hay filtro, muestra la lista completa
    } else {
      const filteredCivilizations = list.filter((civilization) => {
        return civilization.army_type === type;
      });
      setCivilizations(filteredCivilizations); // Muestra solo las civilizaciones filtradas
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Search
          civilizations={originalCivilizations} // Pasa la lista original
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
