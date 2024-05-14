import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  // États pour chaque champ de recherche
  const [equipment, setEquipment] = useState("");
  const [location, setLocation] = useState("");

  // Gestion de la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Recherche pour:", equipment, location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="group">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Equipement"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Localisation"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Rechercher
        </button>
      </div>
    </form>
  );
}

export default SearchBar;