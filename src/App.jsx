import { Route, Routes } from "react-router-dom";
import { AppContext } from "./Contexts/AppContext";
import { useContext } from "react";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

function App() {
  const { theme } = useContext(AppContext);

  return (
    <div className={`App App-${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/professional/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
