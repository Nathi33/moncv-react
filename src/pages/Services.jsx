import "../assets/services.css";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <main className="main-services">
      <section className="banner"></section>
      <header className="titre-services">
        <h3 className="h3-services">Mon offre de services</h3>
        <p className="p-services">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
        <div className="separateur"></div>
      </header>
      <div class="block-services row justify-content-around">
        <article class="description-services col-md-3">
          <FontAwesomeIcon className="icon" icon={faDisplay} />
          <h4 className="h4-services">UX Design</h4>
          <p className="p-block">
            L'<strong>UX Design</strong> est une méthode de conception centrée
            sur l'utilisateur. Son but est d'offrir une expérience de navigation
            optimale à l'internaute.
          </p>
        </article>
        <article class="description-services col-md-3">
          <FontAwesomeIcon className="icon" icon={faFileCode} />
          <h4 className="h4-services">Développement web</h4>
          <p className="p-block">
            Le <strong>développement de site web</strong> repose sur
            l'utilisation des langages HTML, CSS, JavaScript et PHP.
          </p>
        </article>
        <article class="description-services col-md-3">
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlassDollar} />
          <h4 className="h4-services">Référencement</h4>
          <p className="p-block">
            Le <strong>référencement naturel d'un site</strong>, aussi appelé
            SEO, consiste à mettre des techniques en oeuvre pour améliorer sa
            position dans les résultats des moteurs de recherche.
          </p>
        </article>
      </div>
    </main>
  );
};

export default Services;
