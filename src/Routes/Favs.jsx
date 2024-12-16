//import Card from "../Components/Card";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Contexts/AppContext";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { theme, apiData, favs } = useContext(AppContext);
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    // Filtramos los datos de los profesionales destacados
    const favProfessionals = apiData.filter((prof) =>
      favs.some((id) => prof.id === id)
    );

    // Cargados los datos de los profesionales o un array vacios
    setProfessionals(favProfessionals || []);
  }, [favs]);

  return (
    <div className={`favs favs-${theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {professionals.map((professional) => (
          <Card
            key={Date.now() + "-" + professional.id}
            name={professional.name}
            username={professional.username}
            id={professional.id}
            state={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
