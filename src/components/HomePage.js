import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import bannerImage from "./banner.jpg"; // Si l'image est dans le dossier src

const HomePage = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${bannerImage})` }}>
      <header className="home-header">
        <h1>Bienvenue dans LogVision – Analyse en temps réel de vos logs</h1>
      </header>

      <section className="home-about">
        <h2>À propos</h2>
        <p>
        Visualisez en temps réel les logs de deux Data Centers pour une gestion optimale et proactive de vos infrastructures Hadoop. Analysez les performances et sécurisez vos systèmes facilement.
        </p>
      </section>

      <div className="home-buttons">
        <Link to="/datacenter/datacenter1">
          <button className="kibana-button">Voir le Dashboard Datacenter 1</button>
        </Link>

        <Link to="/datacenter/datacenter2">
          <button className="kibana-button">Voir le Dashboard Datacenter 2</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

