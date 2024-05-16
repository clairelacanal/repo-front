import axios from "axios";
import Form from "../Components/Form/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API_BASE_URL } from "../consts";

function NewEquipement() {
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(formData) {
    console.log(formData);
    try {
      await axios.post(`${API_BASE_URL}/equipments`, formData);
      navigate("/");
    } catch (error) {
      setErrorMsg(error.message);
    }
  }
  return (
    <div>
      <h1>Create a new Equipement</h1>
      {errorMsg && <div>{errorMsg}</div>}
      <Form handleSubmit={handleSubmit} type="Equipement" />
    </div>
  );
}
export default NewEquipement;
