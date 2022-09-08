import React from "react";

const Tarif = ({ img, title, description, supplement, tarif }) => {
  return (
    <div className="tarif-container">
      <h2>{title}</h2>
      <div id="description">
        <figure>
          <img src={img} alt="categorie" />
        </figure>
        <p className="description">{description}</p>
        <p className="supplement">{supplement}</p>
        <p className="price">{tarif}</p>
      </div>
    </div>
  );
};

export default Tarif;
