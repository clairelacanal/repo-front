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
      navigate("/");
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
        <strong>Addresse:</strong> {Equipement.inst_adresse}
      </p>
      <p>
        <strong>Observations:</strong> {Equipement.inst_obs}
      </p>
      <p>
        <strong>Arrondissement:</strong> {Equipement.new_name}
      </p>
      <p>
        <strong>Création:</strong> {Equipement.equip_service_date}
      </p>
      <p>
        <strong>Site internet:</strong> {Equipement.equip_url}
      </p>
      <p>
        <strong>Structure:</strong> {Equipement.equip_type_name}
      </p>
      <p>
        <strong>Nature: </strong>
        {Equipement.equip_nature}
      </p>
      <p>
        <strong>Accessibilité:</strong>{" "}
        {Equipement.inst_acc_handi_bool ? "Oui" : "Non"}
      </p>
      <button onClick={handleDelete} className="button-details delete">
        Delete
      </button>
      <Link to={`/edit-equipement/${EquipementId}`} className="button-details">
        Edit
      </Link>
    </div>
  );
}

export default EquipementDetailsPage;
