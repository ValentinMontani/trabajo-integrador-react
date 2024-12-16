//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { AppContext } from "../Contexts/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, dispatch } = useContext(AppContext);

  const changeTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={`nav nav-${theme}`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className="menu">
        <Link to="home">Inicio</Link>
        <Link to="contact">Contacto</Link>
        <Link to="favs">Destacados</Link>
      </div>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
