import React from 'react';

function Search({
  civilizations,
  filterType,
  onSearch,
  selectedCivilization,
  onSelectedCivilizationChange,
  onSearchClick,
}) {
  const handleCivilizationChange = (event) => {
    onSelectedCivilizationChange(event.target.value);
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
      <button onClick={onSearchClick}>Mostrar detalles</button>
    </div>
  );
}

export default Search;
