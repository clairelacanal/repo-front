import { useNavigate, useParams } from "react-router-dom";
import Form from "../Components/Form/Form";
import { useEffect, useState } from "react";
import axios from "axios";

function EditEquipementPage() {
  const { EquipementId } = useParams();
  const navigate = useNavigate();

  const [Equipement, setEquipement] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function getEquipement() {
      try {
        const response = await axios.get(
          `http://localhost:5000/equipments/${EquipementId}`
        );
        setEquipement(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getEquipement();
  }, [EquipementId]);

  async function handleSubmit(formData) {
    try {
      await axios.put(
        `http://localhost:5000/equipments/${EquipementId}`,
        formData
      );
      navigate(`/`);
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
