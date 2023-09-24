import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Search from './search';

function App() {
  const [originalCivilizations, setOriginalCivilizations] = useState([]);
  const [civilizations, setCivilizations] = useState([]);
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    axios.get('/api/civilizations')
      .then(response => {
        setOriginalCivilizations(response.data);
        setCivilizations(response.data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
    filterCivilizations(originalCivilizations, event.target.value);
  };

  const handleSearch = (filteredCivilizations) => {
    setCivilizations(filteredCivilizations);
  };

  const renderCivilizationProperties = (civilization) => {
    const properties = [];

    for (const property in civilization) {
      if (civilization.hasOwnProperty(property)) {
        properties.push(
          <p key={property}>
            <strong>{property}:</strong> {civilization[property]}
          </p>
        );
      }
    }

    return properties;
  };

  const filterCivilizations = (list, type) => {
    if (type === '') {
      setCivilizations(list);
    } else {
      const filteredCivilizations = list.filter((civilization) => {
        return civilization.army_type === type;
      });
      setCivilizations(filteredCivilizations);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Search
          civilizations={originalCivilizations}
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
              {renderCivilizationProperties(civilization)}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
