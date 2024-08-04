import "../assets/gitHubProfile.css";
// useState : hook permettant de gérer l'état local dans un composant fonctionnel
// useEffect : hook permettant d'effectuer des effets de bord dans un composant fonctionnel
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

// Déclaration de la fonction GitHubProfile avec comme prpo le nom d'utilisateur GitHub
function GitHubProfile({ username }) {
  // Déclaration de l'état profileData (utilisé pour stocker les données du profil récupérées depuis l'API GitHub) avec la fonction setProfileData pour le modifier initialisé à null car les données ne sont pas encore chargées
  const [profileData, setProfileData] = useState(null);
  // Déclaration de l'état loading (utilisé pour afficher un message de chargement) avec la fonction setLoading pour le modifier initialisé à true car les données sont en cours de chargement
  const [loading, setLoading] = useState(true);
  // Déclaration de l'état error (utilisé pour afficher un message d'erreur si la récupération des données échoue) avec la fonction setError pour le modifier initialisé à null car il n'y a pas encore d'erreur
  const [error, setError] = useState(null);

  // Utilisation du hook useEffect pour effectuer une action asynchrone (récupération des données du profil GitHub) lors du premier rendu du composant ou lorsque la valeur de la prop username change
  useEffect(() => {
    // Définition de la fonction asynchrone fetchProfileData pour récupérer les données du profil utilisateur via l'API GitHub
    const fetchProfileData = async () => {
      // Try tente d'exécuter la requête réseau
      try {
        // Affichage du message de chargement
        setLoading(true);
        // fetch est utilisé pour envoyer une requête à l'API GitHub pour obtenir les données de l'utilisateur spécifié par username
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        // Si la réponse n'est pas ok, une erreur est levée
        if (!response.ok) {
          throw new Error("Profil introuvable");
        }
        // Les données JSON de la réponse sont extraaites et stockées dans profilDataa via setProfileData (data)
        const data = await response.json();
        setProfileData(data);
        // si une erreur survient lors de la récupération des données, elle est capturée et stockée dans l'état error via setError(er.message)
      } catch (err) {
        setError(err.message);
        // mise à jour de loading à false pour une indiquer que la requête est terminée
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [username]);

  // Si les données sont en cours de chargement, un message de chargement est affiché
  if (loading) {
    return <div>Chargement...</div>;
  }

  // Si une erreur s'est produite, un message d'erreur est affiché
  if (error) {
    return <div>Erreur : {error}</div>;
  }

  // Si les données du profil ne sont pas disponibles, le composant ne rend rien
  if (!profileData) {
    return null;
  }

  // Formater les dates pour une meilleure lisibilité
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

  return (
    <div className="github-profile">
      <h1>Github user </h1>
      <h2>{profileData.name || username}</h2>
      <img
        src={profileData.avatar_url}
        alt={`${username} avatar`}
        width="150"
      />
      <p className="element">{profileData.bio}</p>
      <p>
        <strong>Abonnés : </strong> {profileData.followers}
      </p>
      <p className="element">
        <strong>Abonnements : </strong> {profileData.following}
      </p>
      <p className="element">
        <strong>Créé le : </strong> {formatDate(profileData.created_at)}
      </p>
      <p className="element">
        <strong>Modifié le : </strong> {formatDate(profileData.updated_at)}
      </p>
      <p className="element">
        URL repositories :{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={profileData.html_url}
        >
          {" "}
          https://api.github.com/users/github-john-doe/repos
        </Link>
      </p>
    </div>
  );
}

export default GitHubProfile;
