import "../assets/contact.css";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <main className="main-contact">
      <section className="contact-overlay">
        <div className="block-contact">
          <header className="titre-contact text-center">
            <h3 className="h3-contact text-uppercase">Me contacter</h3>
            <p className="p-contact">
              Pour me contacter en vue d'un entretien ou d'une future
              collaboration, merci de remplir le formulaire de contact.
            </p>
            <div className="separateur"></div>
          </header>
          <div className="container-contact row">
            <div className="contact-form col-12 col-md-6">
              <h4 className="h4-contact">Formulaire de contact</h4>
              <div className="separateur-contact"></div>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label"></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input w-100"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label"></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input w-100"
                    placeholder="Votre adresse email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label"></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input w-100"
                    placeholder="Votre numéro de téléphone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label"></label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input w-100"
                    placeholder="Sujet"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label"></label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-message w-100"
                    placeholder="Votre message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
            <div className="container-coordonnees col-12 col-md-6">
              <h4 className="h4-contact">Mes coordonnées</h4>
              <div className="separateur-contact"></div>
              <div className="info d-flex">
                <FontAwesomeIcon className="info-icon" icon={faLocationDot} />
                <address className="info-adresse">
                  40 Rue Laure Diebold, 69009 Lyon, France
                </address>
              </div>
              <div className="info d-flex">
                <FontAwesomeIcon className="info-icon" icon={faMobileScreen} />
                <p>06 20 30 40 50</p>
              </div>
              <div className="info map-container large">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657539947!2d4.796403975194832!3d45.77866571240371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1717528692507!5m2!1sfr!2sfr"
                  className="embed-responsive-item"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  zomm="15"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
