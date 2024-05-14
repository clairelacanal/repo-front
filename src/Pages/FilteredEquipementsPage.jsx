import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
    </div>
  );
}

export default FilteredEquipementsPage;
