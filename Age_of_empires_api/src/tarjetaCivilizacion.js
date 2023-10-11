import React from "react";
import "./tarjeta.css"; // Asegúrate de que la ruta sea correcta

function TarjetaCivilizacion({ civilization }) {
 
  const renderCivilizationProperties = () => {
    const properties = [];

    for (const property in civilization) {
      if (civilization.hasOwnProperty(property)) {
        properties.push(
          <p className="property" key={property}>
            <strong>{property}:</strong> {civilization[property]}
          </p>
        );
      }
    }

    return properties;
  };

  return (
    <div className="card">
      <h2>{civilization.name}</h2>
      <img className="property-image" src={civilization.image} alt={civilization.name} />
      {renderCivilizationProperties()}
    </div>
  );
}

export default TarjetaCivilizacion;
