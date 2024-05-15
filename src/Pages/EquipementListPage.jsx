import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./EquipementListPage.css";

function EquipementListPage() {
  const [Equipements, setEquipements] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const equipementsPerPage = 5;

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/equipments?_page=${currentPage}&per_page=${equipementsPerPage}`
      )
      .then((response) => {
        setEquipements(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div id="equipements">
      <Link to="/new-Equipement">New Equipement</Link>
      <div className="EquipementListPage">
        {Equipements.map((Equipement) => (
          <Link
            key={Equipement.id}
            to={`/Equipement-details/${Equipement.id}`}
            className="Equipement-item card"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">{Equipement.inst_nom}</h5>
              <p>{Equipement.equip_type_name}</p>
              <p className="card-text">
                {Equipement.inst_adresse} - {Equipement.inst_cp}
              </p>
              <p></p>
              <a href="#" className="btn btn-primary">
                En savoir +
              </a>
            </div>
          </Link>
        ))}
        <ul className="pagination">
          {/*{Array(Math.ceil(Equipements.length / equipementsPerPage))
            .fill()
            .map((_, index) => (
              <li key={index} className="page-item">
                <button
                  onClick={() => paginate(index + 1)}
                  className="page-link"
                  href="#"
                >
                  {index + 1}
                </button>
              </li>
            ))}*/}

          <button onClick={() => setCurrentPage((page) => page + 1)}>
            next page
          </button>
        </ul>
      </div>
    </div>
  );
}

export default EquipementListPage;
