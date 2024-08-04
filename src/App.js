// useState permet de gérer l'état dans le composant
import React from "react";

import PageRouter from "./pages/PageRouter";
import ScrollToTopButton from "./composants/ScrollToTopButton";

function App() {
  return (
    <div className="App">
      <PageRouter />
      {/* Affiche le bouton de retour seulement si showButton est true */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
