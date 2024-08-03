// useState permet de gérer l'état dans le composant
import React from "react";

import PageRouter from "./pages/PageRouter";
import ScrollToTopButton from "./composants/ScrollToTopButton";
import GitHubProfile from "./composants/GitHubProfile";

function App() {
  return (
    <div className="App">
      <PageRouter />
      <GitHubProfile username="github-john-doe" />
      {/* Affiche le bouton de retour seulement si showButton est true */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
