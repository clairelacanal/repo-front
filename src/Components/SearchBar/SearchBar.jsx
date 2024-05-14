import React, { useState } from "react";
import "./SearchBar.css";
//
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [equipment, setEquipment] = useState("");
  const [inst_cp, setLocation] = useState("");
  //
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Recherche pour:", equipment, inst_cp);
    //
    navigate(`/filtered-equipements?equip_nom=${equipment}&inst_cp=${inst_cp}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="group">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Equipemt (ex. salle de danse)"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="code postal (ex. 75019)"
            value={inst_cp}
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
