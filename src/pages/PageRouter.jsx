import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Accueil from "./Accueil";
import Services from "./Services";
import Realisations from "./Realisations";
import Blog from "./Blog";
import Contact from "./Contact";
import MentionsLegales from "./MentionsLegales";

const PageRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Accueil />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
      </Route>
    </Routes>
  );
};

export default PageRouter;
