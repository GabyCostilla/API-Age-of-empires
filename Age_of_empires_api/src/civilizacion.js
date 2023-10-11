import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./search";
import TarjetaCivilizacion from "./tarjetaCivilizacion";
import "./App.css";

function Civilizacion() {
  const [originalCivilizations, setOriginalCivilizations] = useState([]);
  const [civilizations, setCivilizations] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [selectedCivilization, setSelectedCivilization] = useState(""); // Nuevo estado para la civilización seleccionada

  useEffect(() => {
    axios
      .get("/api/civilizations")
      .then((response) => {
        setOriginalCivilizations(response.data);
        setCivilizations(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
    filterCivilizations(originalCivilizations, event.target.value);
  };

  const handleSearch = (filteredCivilizations) => {
    setCivilizations(filteredCivilizations);
  };

  const handleSearchClick = () => {
    const filteredCivilizations = originalCivilizations.filter(
      (civilization) => {
        return civilization.name === selectedCivilization;
      }
    );
    setCivilizations(filteredCivilizations);
  };

  const filterCivilizations = (list, type) => {
    if (type === "") {
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
          selectedCivilization={selectedCivilization}
          onSelectedCivilizationChange={setSelectedCivilization} // Pasar la función para actualizar la civilización seleccionada
          onSearchClick={handleSearchClick} // Pasar la función de búsqueda
        />
        <div className="filter">
          <select value={filterType} onChange={handleFilterChange}>
            {" "}
            <option value="">Todos los tipos</option>{" "}
            <option value="Infantry">Infantería</option>{" "}
            <option value="Foot Archer">Arquero de a pie</option>{" "}
            <option value="Defensive">Defensivo</option>{" "}
            <option value="Archer">Arquero</option>{" "}
            <option value="Cavalry">Caballería</option>{" "}
            <option value="Camel and naval">Camello y naval</option>{" "}
            <option value="Tower and naval">Torre y naval</option>{" "}
            <option value="Gunpowder and Monk">Pólvora y Monje</option>{" "}
            <option value="Cavalry Archer">Caballería arquera</option>{" "}
            <option value="Calvary and Naval">Caballería y Naval</option>{" "}
            <option value="Monk and Elephant">Monje y Elefante</option>{" "}
            <option value="Siege and Elephant Civilization">
              {" "}
              Asedio y Civilización de elefantes{" "}
            </option>{" "}
            <option value="Cavalry Infantry">
              Infantería de caballería
            </option>{" "}
            <option value="Naval and Gunpowder">Naval y Pólvora</option>{" "}
          </select>
        </div>
        <div className="civilization-cards">
          {civilizations.map((civilization) => (
            <TarjetaCivilizacion
              civilization={civilization}
              key={civilization.name}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default Civilizacion;
