import React from "react";
import Navigation from "../components/Navigation";
import Tarif from "../components/Tarif";

const Tarifs = () => {
  return (
    <>
      <Navigation />
      <div className="tarifs-container">
        <Tarif
          title="Juste Moi"
          img="./juste-moi.jpg"
          description="Séance pour une personne"
          supplement="en exterieur ou en studio"
          tarif="130 euros"
        />
        <Tarif
          title="Pour deux"
          img="./pour-deux.jpg"
          description="Pour deux personnes"
          supplement="en exterieur ou en studio"
          tarif="195 euros"
        />
        <Tarif
          title="Famille"
          img="./famille.jpg"
          description="Pour la famille ou les amis jusqu'à 4 personnes"
          supplement="en extérieur ou en studio - 30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu'à 2 ans)"
          tarif="220 euros"
        />
        <Tarif
          title="Il était une fois"
          img="./grossesse.jpg"
          description="Photo de grossesse"
          supplement="A votre domicile, en extérieur ou en studio"
          tarif="130 euros"
        />
        <Tarif
          title="Mon bébé"
          img="./bebe.jpg"
          description="Photo d'enfant jusqu'à 3 ans"
          supplement="photo à domicile"
          tarif="130 euros"
        />
        <Tarif
          title="J'immortalise l'événement"
          img="./event.jpg"
          description="Prestation de mariage ou baptême sur devis"
          tarif="sur mesure"
        />
      </div>
    </>
  );
};

export default Tarifs;
