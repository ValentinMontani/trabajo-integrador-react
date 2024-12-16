import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./Server/MirageConf";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import App from "./App";
import StateProvider from "./Components/StateProvider";

import "./index.css";

makeServer();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <StateProvider>
        <App />
      </StateProvider>
    </BrowserRouter>
  </StrictMode>
);
