//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Contexts/AppContext";
import { useParams } from "react-router-dom";

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { theme, apiData } = useContext(AppContext);
  const params = useParams();
  const { id } = params;
  const [professional, setProfessional] = useState();

  // Buscamos y cargamos el profesional
  useEffect(() => {
    if (id) {
      const currentProf = apiData.find((prof) => prof.id === Number(id));
      if (currentProf) setProfessional(currentProf);
    }
  }, [id]);

  return (
    <div className={`details details-${theme}`}>
      <h1>Detail professional id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <p>
        <b>Nombre:</b> {professional?.name}
      </p>
      <p>
        <b>Usuario:</b> {professional?.username}
      </p>
      <p>
        <b>Telefono:</b> {professional?.phone}
      </p>
      <p>
        <b>Web:</b> {professional?.email}
      </p>
      <p>
        <b>Company:</b> {professional?.company.name}
      </p>
    </div>
  );
};

export default Detail;
