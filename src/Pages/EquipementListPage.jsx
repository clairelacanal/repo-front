import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./EquipementListPage.css";

function EquipementListPage() {
  const [Equipements, setEquipements] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [equipementsPerPage] = useState(10);

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

  const indexOfLastEquipement = currentPage * equipementsPerPage;
  const indexOfFirstEquipement = indexOfLastEquipement - equipementsPerPage;
  const currentEquipements = Equipements.slice(
    indexOfFirstEquipement,
    indexOfLastEquipement
  );

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="EquipementListPage">
      {currentEquipements.map((Equipement) => (
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

      <ul className="pagination">
        {Array(Math.ceil(Equipements.length / equipementsPerPage))
          .fill()
          .map((_, index) => (
            <li key={index} className="page-item">
              <a
                onClick={() => paginate(index + 1)}
                className="page-link"
                href="#"
              >
                {index + 1}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default EquipementListPage;
