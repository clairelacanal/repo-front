import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import "./EquipementListPage.css";
import { API_BASE_URL } from "../consts";

function EquipementListPage() {
  const [Equipements, setEquipements] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [nbrOfPages, setnbrOfPages] = useState(1);

  const equipementsPerPage = 12;

  const [search] = useSearchParams();
  let searchQuerry = "";
  const equip_nom = search.get("equip_nom") || "";
  const inst_cp = search.get("inst_cp") || "";

  if (equip_nom) {
    searchQuerry += `equip_nom=${equip_nom.toUpperCase()}&`;
  }
  if (inst_cp) {
    searchQuerry += `inst_cp=${inst_cp}`;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/equipments?_page=${currentPage}&_limit=${equipementsPerPage}&${searchQuerry}`
        );
        setEquipements(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [currentPage, search]);

  useEffect(() => {
    async function fetchPageCount() {
      try {
        const response = await axios.head(
          `${API_BASE_URL}/equipments?_page=1&${searchQuerry}`
        );

        const totalCount = parseInt(response.headers["x-total-count"]);
        const pageCount = Math.ceil(totalCount / equipementsPerPage);

        setnbrOfPages(pageCount);
      } catch (error) {
        console.error("error :", error);
      }
    }

    fetchPageCount();
  }, [search]);

  return (
    <div id="equipements">
      <Link to="/new-Equipement" className="button-add">
        + Nouvel équipement
      </Link>
      <div className="EquipementListPage">
        {Equipements.map((Equipement) => (
          <div
            key={Equipement.id}
            className="Equipement-item card"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">{Equipement.inst_nom}</h5>
              <p>{Equipement.equip_type_name}</p>
              <p className="card-text">
                {Equipement.inst_adresse} - {Equipement.inst_cp}
              </p>
              <Link
                className="btn btn-primary"
                to={`/Equipement-details/${Equipement.id}`}
              >
                En savoir +
              </Link>
            </div>
          </div>
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

          <button onClick={() => setCurrentPage((currentPage) => 1)}>1</button>

          <button
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
            disabled={currentPage === 1 ? true : false}
          >
            previous Page
          </button>

          <span>{currentPage}</span>

          <button
            className="page-link-pagination"
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
            disabled={currentPage === nbrOfPages ? true : false}
          >
            page suivante
          </button>

          <button onClick={() => setCurrentPage((currentPage) => nbrOfPages)}>
            {nbrOfPages}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default EquipementListPage;
