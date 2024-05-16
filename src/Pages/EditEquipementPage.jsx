import { useNavigate, useParams } from "react-router-dom";
import Form from "../Components/Form/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";

function EditEquipementPage() {
  const { EquipementId } = useParams();
  const navigate = useNavigate();

  const [Equipement, setEquipement] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function getEquipement() {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/equipments/${EquipementId}`
        );

        setEquipement(response.data);
      } catch (err) {
        navigate("/equipements");
        console.log(err.message);
      }
    }
    getEquipement();
  }, [EquipementId]);

  async function handleSubmit(formData) {
    try {
      await axios.put(`${API_BASE_URL}/equipments/${EquipementId}`, formData);
      navigate(`/Equipement-details/${EquipementId}`);
    } catch (error) {
      setErrorMsg(error.message);
    }
  }
  return (
    <div>
      {errorMsg && <div>{errorMsg}</div>}
      {Equipement && (
        <Form handleSubmit={handleSubmit} data={Equipement} type="Equipement" />
      )}
    </div>
  );
}

export default EditEquipementPage;
