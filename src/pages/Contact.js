import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <>
      <Navigation />
      <div className="form">
        <h2>Contactez-nous</h2>
        <form name="contact" method="POST" data-netlify="true">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nom et prénom"
            required
          />
          <input
            type="email"
            name="mail"
            id="mail"
            placeholder="Adresse Email"
            redquired
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Numéro de telephone"
          />
          <select name="categorie" id="categorie" required>
            <option disabled selected>
              Categorie
            </option>
            <option value="">Mariage</option>
            <option value="">Grossesse</option>
            <option value="">Bébé</option>
            <option value="">Famille</option>
            <option value="">Baptême</option>
            <option value="">Couple</option>
            <option value="">Portrait</option>
          </select>
          <textarea
            name="message"
            id="message"
            placeholder="Votre message"
          ></textarea>
          <button type="submit">ENVOYER</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
