import "../assets/footer.css";
import React from "react";

import { Link } from "react-router-dom";

import logogit from "../images/logogit.png";
import logolinkedin from "../images/logolinkedin.png";
import logotwitter from "../images/logotwitter.png";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-top row">
        <div className="presentation col-md-6 col-lg-3">
          <div className="container-description">
            <p className="nom">
              <strong>John Doe</strong>
            </p>
            <address className="adresse">
              40, rue Laure Diabold <br />
              69009 Lyon, France
            </address>
            <p className="tel">Téléphone : 06 20 30 40 50</p>
          </div>
          <div className="container-logo">
            <Link
              target="_blank"
              // Empêche suivi SEO
              rel="noopener noreferrer"
              to="https://github.com/github-john-doe"
            >
              <img className="logo" src={logogit} alt="Logo GitHub" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://twitter.com/twitter-john-doe"
            >
              <img className="logo" src={logotwitter} alt="Logo Twitter" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.linkedin.com/linkedin-john-doe"
            >
              <img className="logo" src={logolinkedin} alt="Logo Linkedin" />
            </Link>
          </div>
        </div>

        <div className="liens col-md-6 col-lg-3">
          <p className="lien-titre">
            <strong>Liens utiles</strong>
          </p>
          <div className="container-liens">
            <ul className="container-liste">
              <li>
                <Link className="liste-liens" to="/">
                  Accueil
                </Link>
              </li>
              <li>
                <Link className="liste-liens" to="/#apropos">
                  A propos
                </Link>
              </li>
              <li>
                <Link className="liste-liens" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="liste-liens" to="/contact">
                  Me contacter
                </Link>
              </li>
              <li>
                <Link className="liste-liens" to="/mentionslegales">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="projets col-md-6 col-lg-3">
          <p className="projet-titre">
            <strong>Mes dernières réalisations</strong>
          </p>
          <div className="container-projets">
            <ul className="container-liste">
              <li>
                <Link className="liste-liens" to="/projet1">
                  Fresh food
                </Link>
              </li>
              <li>
                <Link className="liste-liens" to="/projet2">
                  Restaurant Akira
                </Link>
              </li>
              <li>
                <Link className="liste-liens" to="/projet3">
                  Espace bien-être
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="articles col-md-6 col-lg-3">
          <p className="article-titre">
            <strong>Mes derniers articles</strong>
          </p>
          <div className="container-articles">
            <ul className="container-liste">
              <li>
                <Link className="liste-liens">Coder son site en HTML/CSS</Link>
              </li>
              <li>
                <Link className="liste-liens">
                  Vendre ses produits sur le web
                </Link>
              </li>
              <li>
                <Link className="liste-liens">Se positionner sur Google</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© Design by John Doe</p>
      </div>
    </div>
  );
};

export default Footer;
