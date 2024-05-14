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
          to={`/Equipement-details/${Equipement.id}`}
          className="Equipement-item card"
          style={{ width: "18rem" }}
        >
          <img
            src={Equipement.image}
            className="card-img-top"
            alt={Equipement.inst_nom}
          />
          <div className="card-body">
            <h5 className="card-title">{Equipement.inst_nom}</h5>
            <p className="card-text">{Equipement.inst_adresse}</p>
            <a href="#" className="btn btn-primary">
              En savoir +
            </a>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default EquipementListPage;
