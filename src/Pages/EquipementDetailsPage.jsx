import "./EquipementDetailsPage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_BASE_URL } from "../consts";

function EquipementDetailsPage() {
  const [Equipement, setEquipement] = useState(null);
  const { EquipementId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/equipments/${EquipementId}`)
      .then((response) => {
        setEquipement(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [EquipementId]);

  async function handleDelete() {
    try {
      await axios.delete(`${API_BASE_URL}/equipments/${EquipementId}`);
      navigate("/equipements");
    } catch (error) {
      console.log(error.message);
    }
  }

  if (!Equipement) {
    return <div>Loading...</div>;
  }

  return (
    <div className="EquipementDetailsPage">
      <h2>{Equipement.inst_nom}</h2>
      <p>
        <strong>ADRESSE:</strong> {Equipement.inst_adresse}
      </p>
      <p>
        <strong>OBSERVATIONS:</strong> {Equipement.inst_obs}
      </p>
      <p>
        <strong>ARRONDISSEMENT:</strong> {Equipement.new_name}
      </p>
      <p>
        <strong>CREATION:</strong> {Equipement.equip_service_date}
      </p>
      <p>
        <strong>SITE INTERNET:</strong> {Equipement.equip_url}
      </p>
      <p>
        <strong>STRUCTURE:</strong> {Equipement.equip_type_name}
      </p>
      <p>
        <strong>NATURE: </strong>
        {Equipement.equip_nature}
      </p>
      <p>
        <strong>ACCESSIBILITE:</strong>{" "}
        {Equipement.inst_acc_handi_bool ? "Oui" : "Non"}
      </p>
      <div className="container-butn">
        <button onClick={handleDelete} className="button-details delete">
          Supprimer
        </button>
        <Link
          to={`/edit-equipement/${EquipementId}`}
          className="button-details edit"
        >
          Editer
        </Link>
      </div>
    </div>
  );
}

export default EquipementDetailsPage;
