import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import "./FilteredEquipementsPage.css";
import { API_BASE_URL } from "../consts";

function FilteredEquipementsPage2() {
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
  const [filteredEquipements, setFilteredEquipements] = useState([]);

  const [Equipements, setEquipements] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  //const [equipementsPerPage] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);
  const [nbrOfPages, setnbrOfPages] = useState(1);
  const equipementsPerPage = 5;

  useEffect(
    () => {
      axios
        .get(
          `${API_BASE_URL}/equipments?${searchQuerry}_page=${currentPage}&_limit=${equipementsPerPage}`

          //http://localhost:5000/equipments?inst_cp=75019
        )
        .then((response) => {
          setFilteredEquipements(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [equip_nom, inst_cp],
    currentPage
  );

  useEffect(() => {
    async function fetchPageCount() {
      try {
        const response = await axios.head(
          `${API_BASE_URL}/equipments?${searchQuerry}_page=1`
        );

        const totalCount = parseInt(response.headers["x-total-count"]);
        const pageCount = Math.ceil(totalCount / equipementsPerPage);
        console.log(totalCount);
        setnbrOfPages(pageCount);
      } catch (error) {
        console.error("error :", error);
      }
    }

    fetchPageCount();
  }, []);

  /*const indexOfLastEquipement = currentPage * equipementsPerPage;
  const indexOfFirstEquipement = indexOfLastEquipement - equipementsPerPage;
  const currentEquipements = filteredEquipements.slice(
    indexOfFirstEquipement,
    indexOfLastEquipement
  );

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }
*/
  return (
    <div>
      <h2>Equipements filtrés.. :</h2>
      {filteredEquipements.map((equipement) => (
        <div key={equipement.id}>
          <strong>
            <p>{equipement.equip_nom}</p>
          </strong>

          <p>{equipement.inst_adresse}</p>
          <p>{equipement.inst_cp}</p>
          <p>{equipement.new_name}</p>
          <hr />
          {/* ... Autres  */}
        </div>
      ))}

      {/*
      <ul className="pagination">
        {Array(Math.ceil(filteredEquipements.length / equipementsPerPage))
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
        </ul>*/}
      <ul className="pagination">
        {}

        <button onClick={() => setCurrentPage((currentPage) => 1)}>1</button>

        <button
          onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          disabled={currentPage === 1 ? true : false}
        >
          previous Page
        </button>

        <span>{currentPage}</span>

        <button
          onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          disabled={currentPage === nbrOfPages ? true : false}
        >
          next Page
        </button>

        <button onClick={() => setCurrentPage((currentPage) => nbrOfPages)}>
          {nbrOfPages}
        </button>
      </ul>
    </div>
  );
}

export default FilteredEquipementsPage2;
