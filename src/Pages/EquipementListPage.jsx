import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./EquipementListPage.css";

function EquipementListPage() {
  const [Equipements, setEquipements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/equipments")
      .then((response) => {
        setEquipements(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="EquipementListPage">
      {Equipements.map((Equipement) => (
        <Link
          key={Equipement.id}
          to={`/Equipement/details/${Equipement.id}`}
          className="Equipement-item"
        >
          <div className="Equipement-card">
            <img src={Equipement.image} alt={Equipement.inst_nom} />
            <div className="Equipement-info">
              <h3>{Equipement.inst_nom}</h3>
              <p>{Equipement.inst_adresse}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default EquipementListPage;
