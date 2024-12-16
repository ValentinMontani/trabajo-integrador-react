import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, state }) => {
  const { dispatch, favs } = useContext(AppContext);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage

    // Nos fijamos si no existe en los favoritos
    if (!favs.some((prof) => prof.id === id)) {
      dispatch({ type: "SET_FAV", payload: id });
    }
  };

  const deleteFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage

    // Nos fijamos que exista en los favoritos
    if (favs.some((prof) => prof === id)) {
      dispatch({ type: "DELETE_FAV", payload: id });
    }
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <div className="content">
        <p>ID: {id}</p>
        <span>
          <b>Nombre:</b> {name}
        </span>
        <span>
          <b>Usuario:</b> {username}
        </span>
      </div>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <div className="btnContainer">
        <Link className="" to={`/professional/${id}`}>
          View Details
        </Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {state ? (
          <button onClick={deleteFav} className="favButton delete">
            -
          </button>
        ) : (
          <button onClick={addFav} className="favButton add">
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
