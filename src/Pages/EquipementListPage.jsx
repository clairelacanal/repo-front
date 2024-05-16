import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import "./EquipementListPage.css";
import { API_BASE_URL } from "../consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheelchair } from "@fortawesome/free-solid-svg-icons";

function EquipementListPage() {
  function RenderIcon({ isHandicapped }) {
    return isHandicapped ? <FontAwesomeIcon icon={faWheelchair} /> : null;
  }

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
              <h5 className="card-title">
                {Equipement.inst_nom}{" "}
                <span className="handicap-icon">
                  <RenderIcon
                    isHandicapped={Equipement.inst_acc_handi_bool === "true"}
                  />
                </span>
              </h5>
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
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              aria-label="Aller à la première page"
            >
              1
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Page précédente"
            >
              &laquo;
            </button>
          </li>

          <li className="page-item active">
            <span className="page-link-pagination">{currentPage}</span>
          </li>

          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === nbrOfPages}
              aria-label="Page suivante"
            >
              &raquo;
            </button>
          </li>

          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setCurrentPage(nbrOfPages)}
              disabled={currentPage === nbrOfPages}
              aria-label="Aller à la dernière page"
            >
              {nbrOfPages}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EquipementListPage;
