import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import "./FilteredEquipementsPage.css";

function FilteredEquipementsPage() {
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

  //const [Equipements, setEquipements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [equipementsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/equipments?${searchQuerry}`

        //http://localhost:5000/equipments?inst_cp=75019
      )
      .then((response) => {
        setFilteredEquipements(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [equip_nom, inst_cp]);

  const indexOfLastEquipement = currentPage * equipementsPerPage;
  const indexOfFirstEquipement = indexOfLastEquipement - equipementsPerPage;
  const currentEquipements = filteredEquipements.slice(
    indexOfFirstEquipement,
    indexOfLastEquipement
  );

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container-filtering">
      {currentEquipements.map((equipement) => (
        <div key={equipement.id} className="card-item">
          <div className="card-body">
            <h5 className="card-title">{equipement.inst_nom}</h5>
            <p>{equipement.equip_type_name}</p>
            <p className="card-text">
              {equipement.inst_adresse} - {equipement.inst_cp}
            </p>
            <Link
              className="btn btn-primary"
              key={equipement.id}
              to={`/Equipement-details/${equipement.id}`}
            >
              En savoir +
            </Link>
          </div>
        </div>
      ))}

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
      </ul>
    </div>
  );
}

export default FilteredEquipementsPage;
