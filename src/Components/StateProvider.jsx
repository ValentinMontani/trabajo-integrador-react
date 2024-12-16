import { AppContext, initialState, reducer } from "../Contexts/AppContext";
import { useEffect, useReducer } from "react";
import axios from "axios";

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Obtiene los datos al cargar la app
  useEffect(() => {
    getData();
  }, []);

  // Obtiene los datos de la api
  const getData = async () => {
    try {
      // Hacer peticion a la api
      const response = await axios.get("/api/professionals");

      // Despachamos los datos
      dispatch({ type: "SET_API_DATA", payload: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default StateProvider;
