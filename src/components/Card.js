import React from "react";

const Card = ({ content }) => {
  return (
    <figure>
      <img
        src={content.attributes.image.data.attributes.url}
        alt={"photo de " + content.attributes.categorie}
      />
    </figure>
  );
};

export default Card;
