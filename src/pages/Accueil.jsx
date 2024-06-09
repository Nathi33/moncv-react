import "../assets/accueil.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import about from "../images/about.jpg";

const Accueil = () => {
  // showApropos contrôle l'affiche de la section À propos et setShowApropos met à jour l'état
  const [showApropos, setShowApropos] = useState(false);
  // Permet de récupérer l'URL actuelle
  const location = useLocation();

  // Fonction permettant de basculer l'affichage de la section À propos
  const toggleApropos = () => {
    setShowApropos(!showApropos);
  };

  // useEffect permet de déclencher une action lorsqu'un élément de dépendance change
  useEffect(() => {
    // Si l'URL contient #apropos, affiche la section À propos
    if (location.hash === "#apropos") {
      setShowApropos(true);
    }
  }, [location]);

  return (
    <main className="general-accueil">
      <section className="main-accueil">
        <div className="main-overlay">
          <header className="accueil-description">
            <h1 className="h1-accueil">Bonjour, je suis John Doe</h1>
            <h2 className="h2-accueil">Développeur web full stack</h2>
            <button className="btn btn-primary" onClick={toggleApropos}>
              En savoir plus
            </button>
          </header>
        </div>
      </section>

      {showApropos && (
        <section className="section-apropos" id="apropos">
          <article className="apropos-content">
            <div className="container-apropos row">
              <div className="apropos-left col-md-6">
                <header>
                  <h3 className="h3-apropos">À propos</h3>
                </header>
                <p>
                  Passionné par l'informatique et les nouvelles technologies,
                  j'ai suivi une formation d'
                  <strong>intégrateur-développeur web</strong> au CEF. Au cours
                  de cette formation, j'ai pu acquérir des bases solides pour
                  travailler dans le domaine du
                  <strong> développement web</strong>.
                </p>
                <p>
                  Basé à Lyon, je suis en recherche d'une alternance au sein
                  d'une agence digitale pour consolider ma formation de
                  <strong> développeur web full stack</strong>.
                </p>
                <p>
                  J'accorde une attention particulière à la qualité du code que
                  j'écris et je respecte les bonnes pratiques du web.
                </p>
              </div>
              <aside className="apropos-right col-md-6">
                <img src={about} alt="Profil" />
                <header>
                  <h3 className="h3-competences">Mes compétences</h3>
                </header>
                <p className="p-progress">html5 90%</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-label="Danger example"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="p-progress">css3 80%</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-label="Info example"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="p-progress">javaScript 70%</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    aria-label="Warning example"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="p-progress">php 60%</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-label="Success example"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="p-progress">react 50%</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-label="Success example"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </aside>
            </div>
          </article>
        </section>
      )}
    </main>
  );
};

export default Accueil;
