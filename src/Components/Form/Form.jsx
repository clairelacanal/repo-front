import { useState } from "react";
import "./Form.css";

function Form({ handleSubmit, data, type }) {
  const emptyForm = {
    inst_nom: "",
    inst_adresse: "",
  };

  const [formData, setFormData] = useState(data ?? emptyForm);

  function handleChange(e) {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  }

  return (
    <form
      method="post"
      className="pico"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formData);
      }}
    >
      <div className="form-field">
        <label htmlFor="inst_nom">Nom Equipement Sportif:</label>
        <input
          type="text"
          name="inst_nom"
          id="inst_nom"
          value={formData.inst_nom}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="equip_type_name">Type d'équipement Sportif:</label>
        <textarea
          name="equip_type_name"
          id="equip_type_name"
          cols="30"
          rows="1"
          value={formData.equip_type_name}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-field">
        <label htmlFor="inst_adresse">Adresse: </label>
        <textarea
          name="inst_adresse"
          id="inst_adresse"
          cols="30"
          rows="1"
          value={formData.inst_adresse}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-field">
        <label htmlFor="inst_obs">Arrondissement</label>
        <textarea
          name="inst_obs"
          id="inst_obs"
          cols="30"
          rows="1"
          value={formData.inst_obs}
          onChange={handleChange}
        ></textarea>
      </div>
      {/*
      <div className="form-field">
        <label htmlFor="new_name">new_name</label>
        <textarea
          name="new_name"
          id="new_name"
          cols="30"
          rows="1"
          value={formData.new_name}
          onChange={handleChange}
        ></textarea>
      </div>*/}

      <div className="form-field">
        <label htmlFor="equip_service_date">
          date (année) de mise en service
        </label>
        <select
          name="equip_service_date"
          id="equip_service_date"
          value={formData.equip_service_date}
          onChange={handleChange}
          style={{ width: "25%" }}
        >
          <option value="">Choisir une année</option>
          {Array.from(
            { length: new Date().getFullYear() - 1994 },
            (_, index) => (
              <option key={index} value={1995 + index}>
                {1995 + index}
              </option>
            )
          )}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="equip_url">url site web:</label>
        <textarea
          name="equip_url"
          id="equip_url"
          cols="30"
          rows="1"
          value={formData.equip_url}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-field">
        <label htmlFor="equip_nature">Activité (indoor ou outdoor): </label>
        <select
          name="equip_nature"
          id="equip_nature"
          value={formData.equip_nature}
          onChange={handleChange}
          style={{ width: "25%" }}
        >
          <option value="">Choisir une option</option>
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="inst_acc_handi_bool">Accès aux Handicapés: </label>
        <select
          name="inst_acc_handi_bool"
          id="inst_acc_handi_bool"
          value={formData.inst_acc_handi_bool ? "oui" : "non"}
          onChange={handleChange}
          style={{ width: "25%" }}
        >
          <option value="">Choisir une option</option>
          <option value="oui">oui</option>
          <option value="non">Non</option>
        </select>
      </div>

      <input type="submit" value={`${data ? "Update" : "Add"} ${type}`} />
    </form>
  );
}

export default Form;
