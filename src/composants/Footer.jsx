import "../assets/footer.css";
import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="main-footer">
      <section className="footer-top row">
        <article className="presentation col-md-6 col-lg-3">
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
              <FontAwesomeIcon className="logo" icon={faGithub} />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://twitter.com/twitter-john-doe"
            >
              <FontAwesomeIcon className="logo" icon={faSquareTwitter} />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.linkedin.com/linkedin-john-doe"
            >
              <FontAwesomeIcon className="logo" icon={faLinkedin} />
            </Link>
          </div>
        </article>

        <article className="liens col-md-6 col-lg-3">
          <p className="lien-titre">
            <strong>Liens utiles</strong>
          </p>
          <div className="container-liens">
            <ul className="container-liste">
              <li>
                <Link className="liste-liens" to="/">
                  <FontAwesomeIcon
                    className="angle-right"
                    icon={faAngleRight}
                  />
                  Accueil
                </Link>
              </li>
              <li>
                <Link className="liste-liens" to="/#apropos">
                  <FontAwesomeIcon
                    className="angle-right"
                    icon={faAngleRight}
                  />
                  A propos
                </Link>
              </li>
              <li>
                <Link className="liste-liens" to="/services">
                  <FontAwesomeIcon
                    className="angle-right"
                    icon={faAngleRight}
                  />
                  Services
                </Link>
              </li>
              <li>
                <Link className="liste-liens" to="/contact">
                  <FontAwesomeIcon
                    className="angle-right"
                    icon={faAngleRight}
                  />
                  Me contacter
                </Link>
              </li>
              <li>
                <Link className="liste-liens" to="/mentionslegales">
                  <FontAwesomeIcon
                    className="angle-right"
                    icon={faAngleRight}
                  />
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </article>

        <article className="projets col-md-6 col-lg-3">
          <p className="projet-titre">
            <strong>Mes dernières réalisations</strong>
          </p>
          <div className="container-projets">
            <ul className="container-liste">
              <li>
                <Link className="liste-liens" to="/projet1">
                  <FontAwesomeIcon
                    className="angle-right"
                    icon={faAngleRight}
                  />
                  Fresh food
                </Link>
              </li>
              <li>
                <Link className="liste-liens" to="/projet2">
                  <FontAwesomeIcon
                    className="angle-right"
                    icon={faAngleRight}
                  />
                  Restaurant Akira
                </Link>
              </li>
              <li>
                <Link className="liste-liens" to="/projet3">
                  <FontAwesomeIcon
                    className="angle-right"
                    icon={faAngleRight}
                  />
                  Espace bien-être
                </Link>
              </li>
            </ul>
          </div>
        </article>

        <article className="articles col-md-6 col-lg-3">
          <p className="article-titre">
            <strong>Mes derniers articles</strong>
          </p>
          <div className="container-articles">
            <ul className="container-liste">
              <li>
                <Link className="liste-liens">
                  <FontAwesomeIcon
                    className="angle-right"
                    icon={faAngleRight}
                  />
                  Coder son site en HTML/CSS
                </Link>
              </li>
              <li>
                <Link className="liste-liens">
                  <FontAwesomeIcon
                    className="angle-right"
                    icon={faAngleRight}
                  />
                  Vendre ses produits sur le web
                </Link>
              </li>
              <li>
                <Link className="liste-liens">
                  <FontAwesomeIcon
                    className="angle-right"
                    icon={faAngleRight}
                  />
                  Se positionner sur Google
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section className="footer-bottom">
        <p className="copyright">© Design by John Doe</p>
      </section>
    </footer>
  );
};

export default Footer;
