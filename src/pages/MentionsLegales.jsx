import "../assets/mentionsLegales.css";
import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const MentionsLegales = () => {
  return (
    <div className="main-mentions">
      <div className="titre-mentions">
        <h3 className="h3-mentions text-uppercase text-center">
          Mentions légales
        </h3>
        <div className="separateur"></div>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Editeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h5 className="h5-mentions">John Doe</h5>
              <div>
                <address>
                  <p className="p-editeur d-flex align-items-center">
                    <FontAwesomeIcon
                      className="icon me-2"
                      icon={faLocationDot}
                    />
                    <strong>40 Rue Laure Diebold </strong>
                  </p>
                  <p>
                    <strong>69009 Lyon, France</strong>
                  </p>
                </address>
                <div className="container-editeur d-flex align-items-center">
                  <FontAwesomeIcon
                    className="icon me-2"
                    icon={faMobileScreen}
                  />
                  <Link
                    className="lien"
                    target="_blank"
                    rel="noopener noreferrer"
                    to="tel:0620304050"
                  >
                    06 20 30 40 50
                  </Link>
                </div>
                <div className=" container-editeur d-flex align-items-center ">
                  <FontAwesomeIcon className="icon me-2" icon={faEnvelope} />
                  <Link
                    className="lien"
                    target="_blank"
                    rel="oopener noreferrer"
                    to="mailto:john.doe@gmail.com"
                  >
                    john.doe@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h5 className="h5-mentions">Always Data</h5>
              <address>
                <p>
                  <strong>
                    91 rue Faubourg Saint Honoré <br /> 75008 Paris
                  </strong>
                </p>
              </address>
              <div className=" container-hebergeur d-flex align-items-center ">
                <FontAwesomeIcon className="icon me-2" icon={faGlobe} />
                <Link
                  className="lien"
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.alwaysdata.com"
                >
                  www.alwaysdata.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h5 className="h5-mentions">Crédits</h5>
              <p className="p-credits">
                <strong>
                  Site développé par John Doe, étudiant du CEF. <br />
                </strong>
              </p>
              <p>
                <strong>
                  Les images libres de droit sont issues du site
                  <Link
                    className="lien-credits"
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://pixabay.com"
                  >
                    Pixabay
                  </Link>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
