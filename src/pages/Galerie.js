import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Galerie = () => {
  const [getCategory, setGetCategory] = useState([]);
  const [pickCategory, setPickCategory] = useState("");
  const [getPosts, setGetPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://mombabil-photo.herokuapp.com/api/categories")
      .then((res) => setGetCategory(res.data.data));

    axios
      .get("https://mombabil-photo.herokuapp.com/api/galleries?populate=*")
      .then((res) => setGetPosts(res.data.data));
  }, [pickCategory]);

  return (
    <>
      <Navigation />
      <div className="choose-content">
        <ul>
          {getCategory.map((categorie) => (
            <li
              key={categorie.id}
              onClick={() => setPickCategory(categorie.attributes.title)}
            >
              {categorie.attributes.title}
            </li>
          ))}
          <li onClick={() => setPickCategory("")}>Toutes les photos</li>
        </ul>
      </div>
      <div className="cards-content">
        {getPosts
          // trié par id, la derniere image ajouté apparait en premier
          .sort((a, b) => b.id - a.id)
          // au click sur le bouton, on affiche la catégorie correspondante
          .filter((categorie) =>
            pickCategory
              ? categorie.attributes.categorie === pickCategory
              : categorie.id
          )
          // on parcourt le tableau recupéré par l'api et on l'affiche dans le composant Card
          .map((post) => (
            <Card content={post} key={post.id} />
          ))}
      </div>
      <Footer />
    </>
  );
};

export default Galerie;
