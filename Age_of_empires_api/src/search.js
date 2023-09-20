import React, { useState } from 'react';

function Search({ civilizations, onSearch }) {
  const [selectedCivilization, setSelectedCivilization] = useState('');

  const handleCivilizationChange = (event) => {
    setSelectedCivilization(event.target.value);
  };

  const handleSearchClick = () => {
    const filteredCivilizations = civilizations.filter((civilization) => {
      return civilization.name === selectedCivilization;
    });

    onSearch(filteredCivilizations);
  };

  return (
    <div className="search-bar">
      <select value={selectedCivilization} onChange={handleCivilizationChange}>
        <option value="">Seleccione una civilización</option>
        {civilizations.map((civilization) => (
          <option key={civilization.name} value={civilization.name}>
            {civilization.name}
          </option>
        ))}
      </select>
      <button onClick={handleSearchClick}>Mostrar detalles</button>
    </div>
  );
}

export default Search;
