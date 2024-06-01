import "../assets/realisations.css";
import React from "react";
import { NavLink } from "react-router-dom";

import freshfood from "../images/fresh-food.jpg";
import restaurantjaponais from "../images/restaurant-japonais.jpg";
import bienetre from "../images/espace-bien-etre.jpg";

const Realisations = () => {
  return (
    <div className="main-realisations">
      <div className="banner"></div>
      <div className="titre-realisations">
        <h3 className="h3-realisations">Portfolio</h3>
        <p className="p-realisations">
          Voici quelques-unes de mes réalisations
        </p>
        <div className="separateur"></div>
      </div>

      <div className="container-realisations row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col text-center">
          <div className="card h-100">
            <img src={freshfood} className="card-img-top" alt="fresh-food" />
            <div className="card-body">
              <h5 className="card-title">Fresh food</h5>
              <p className="card-text">
                Réalisation d'un site avec commande en ligne.
              </p>
              <NavLink to="/restaurant" className="btn btn-outline-primary">
                Voir
              </NavLink>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                Site réalisé avec PHP et MySQL
              </small>
            </div>
          </div>
        </div>
        <div className="col text-center">
          <div className="card h-100">
            <img
              src={restaurantjaponais}
              className="card-img-top"
              alt="restaurant-japonais"
            />
            <div className="card-body">
              <h5 className="card-title">Restaurant Akira</h5>
              <p className="card-text">Réalisation d'un site vitrine.</p>
              <NavLink to="/restaurant" className="btn btn-outline-primary">
                Voir
              </NavLink>
            </div>
            <div className="card-footer">
              <small className="text-muted">Site réalisé avec WordPress</small>
            </div>
          </div>
        </div>
        <div className="col text-center">
          <div className="card h-100">
            <img
              src={bienetre}
              className="card-img-top"
              alt="espace bien-être"
            />
            <div className="card-body">
              <h5 className="card-title">Espace bien-être</h5>
              <p className="card-text">
                Réalisation d'un site vitrine pour un praticien de bien-être.
              </p>
              <NavLink to="/restaurant" className="btn btn-outline-primary">
                Voir
              </NavLink>
            </div>
            <div className="card-footer">
              <small className="text-muted">Site réalisé en HTML/CSS</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realisations;
