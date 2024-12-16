import { useContext, useState } from "react";
import { AppContext } from "../Contexts/AppContext";

const Form = () => {
  const { theme } = useContext(AppContext);
  const [formData, setFormData] = useState();
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);

  //Aqui deberan implementar el form completo con sus validaciones
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData?.name && formData?.email && regex.test(formData.email)) {
      console.log(formData);
      setSubmit(true);
    } else {
      setError("Por favor verifique su información nuevamente");
    }
    // Envio de datos
  };

  return (
    <div className={`form-${theme}`}>
      {submit ? (
        <div>
          <p>
            Gracias {formData?.name}, te contactaremos cuando antes vía mail
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              label="Nombre completo"
              value={formData?.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Correo:
            <input
              type="email"
              name="email"
              label="Correo"
              value={formData?.email}
              onChange={handleChange}
            />
          </label>
          {error && <small>{error}</small>}
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Form;
