import "./EquipementDetailsPage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function EquipementDetailsPage() {
  const [Equipement, setEquipement] = useState([]);
  const { EquipementId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/equipments/${EquipementId}`)
      .then((response) => {
        setEquipement(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [EquipementId]);

  async function handleDelete() {
    try {
      const response = await axios.delete(
        `http://localhost:5000/equipments/${EquipementId}`
      );
      console.log(response);
      //console.log(`http://localhost:5000/equipments/${EquipementId}`);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="EquipementDetailsPage">
      <h2>{Equipement.inst_nom}</h2>
      <p>{Equipement.inst_adresse}</p>
      <p>{Equipement.new_name}</p>
      <p>{Equipement.equip_type_name}</p>
      <p>{Equipement.inst_acc_handi_bool}</p>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/edit-equipement/${EquipementId}`}>Edit</Link>
    </div>
  );
}

export default EquipementDetailsPage;
