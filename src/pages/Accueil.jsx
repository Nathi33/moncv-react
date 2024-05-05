import "../assets/accueil.css";
import React from "react";
import { Link } from "react-router-dom";

const Accueil = () => {
  return (
    <div className="main-accueil">
      <div className="main-overlay">
        <div className="accueil-description">
          <h1 className="h1-accueil">Bonjour, je suis John Doe</h1>
          <h2 className="h2-accueil">Développeur web full stack</h2>
          <Link className="btn btn-primary" role="button" to="/apropos">
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
