import { createContext } from "react";

const AppContext = createContext();

const initialState = {
  theme: "light",
  apiData: [],
  favs: [],
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_API_DATA":
      return { ...state, apiData: action.payload };
    case "SET_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "DELETE_FAV":
      return {
        ...state,
        favs: state.favs.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};

export { AppContext, initialState, reducer };
