import React from "react";
import "../assets/header.css";
import { NavLink } from "react-router-dom";
import favicon from "../images/favicon.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-uppercase fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/accueil">
          <img src={favicon} alt="Logo Favicon" />
        </NavLink>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* Contrairement à Link, NavLink ajoute automatiquement une classe active au lien lorsque l'URL correspond à l'URL actuelle */}
              <NavLink className="nav-link" exact to="/accueil">
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/realisations">
                Réalisations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Me contacter
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
