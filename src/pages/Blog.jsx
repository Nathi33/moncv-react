import "../assets/blog.css";
import React from "react";
import { NavLink } from "react-router-dom";

import coder from "../images/coder.jpg";
import croissance from "../images/croissance.jpg";
import google from "../images/google.jpg";
import screens from "../images/screens.jpg";
import seo from "../images/seo.jpg";
import technos from "../images/technos.png";

const Blog = () => {
  return (
    <div className="main-blog">
      <div className="banner"></div>
      <div className="titre-blog">
        <h3 className="h3-blog">BLOG</h3>
        <p className="p-blog">
          Retrouvez ici quelques articles sur le développement web.
        </p>
        <div className="separateur"></div>
      </div>
      <div className="container-blog row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={coder} className="card-img-top" alt="Coder son site" />
            <div className="card-body">
              <h5 className="card-title">Coder son site en HTML/CSS</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="#" className="btn btn-primary">
                Lire la suite
              </NavLink>
            </div>
            <div className="card-footer">
              <small className="text-muted">Publié le 22 août 2022</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={croissance}
              className="card-img-top"
              alt="Vendre ses produits"
            />
            <div className="card-body">
              <h5 className="card-title">Vendre ses produits sur le web</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="#" className="btn btn-primary">
                Lire la suite
              </NavLink>
            </div>
            <div className="card-footer">
              <small className="text-muted">Publié le 20 août 2022</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={google}
              className="card-img-top"
              alt="Positionnement Google"
            />
            <div className="card-body">
              <h5 className="card-title">Se positionner sur Google</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="#" className="btn btn-primary">
                Lire la suite
              </NavLink>
            </div>
            <div className="card-footer">
              <small className="text-muted">Publié le 1 août 2022</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={screens}
              className="card-img-top"
              alt="Coder en responsive"
            />
            <div className="card-body">
              <h5 className="card-title">Coder en responsive design</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="#" className="btn btn-primary">
                Lire la suite
              </NavLink>
            </div>
            <div className="card-footer">
              <small className="text-muted">Publié le 31 juillet 2022</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={seo} className="card-img-top" alt="SEO" />
            <div className="card-body">
              <h5 className="card-title">Techniques de référencement</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="#" className="btn btn-primary">
                Lire la suite
              </NavLink>
            </div>
            <div className="card-footer">
              <small className="text-muted">Publié le 30 juillet 2022</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={technos}
              className="card-img-top"
              alt="Les différrents langages"
            />
            <div className="card-body">
              <h5 className="card-title">Apprendre à coder</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="#" className="btn btn-primary">
                Lire la suite
              </NavLink>
            </div>
            <div className="card-footer">
              <small className="text-muted">Publié le 12 juillet 2022</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
