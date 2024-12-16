import { AppContext } from "../Contexts/AppContext";
import { useContext } from "react";

const Footer = () => {
  const { theme } = useContext(AppContext);

  return (
    <footer className={`footer footer-${theme}`}>
      <p>Powered by: </p>
      <img src="./images/DM.png" alt="DM-logo" />
    </footer>
  );
};

export default Footer;
