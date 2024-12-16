// import Card from "../Components/Card";

import Card from "../Components/Card";
import { AppContext } from "../Contexts/AppContext";
import { useContext } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, apiData, favs } = useContext(AppContext);

  return (
    <main className={`home home-${theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {apiData.map((professional) => (
          <Card
            key={Date.now() + "-" + professional.id}
            name={professional.name}
            username={professional.username}
            id={professional.id}
            state={favs.some((id) => id === professional.id)}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
