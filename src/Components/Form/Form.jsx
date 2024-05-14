import { useState } from "react";

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
      <label>
        inst_nom
        <input
          type="text"
          name="inst_nom"
          id="inst_nom"
          value={formData.inst_nom}
          onChange={handleChange}
        />
      </label>

      <label>
        inst_adresse
        <textarea
          name="inst_adresse"
          id="inst_adresse"
          cols="20"
          rows="2"
          value={formData.inst_adresse}
          onChange={handleChange}
        ></textarea>
      </label>

      <input type="submit" value={`${data ? "Update" : "Add"} ${type}`} />
    </form>
  );
}

export default Form;
