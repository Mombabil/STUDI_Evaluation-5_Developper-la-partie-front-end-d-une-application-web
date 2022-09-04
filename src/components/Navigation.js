import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const [displayToggle, setDisplayToggle] = useState(false);

  // Gestion du State pour affichage ou non de la toggle nav
  // si la taille de l'écran vaut moins de 900px, on passe setToggle sur true, sinon sur false
  useEffect(() => {
    window.addEventListener("resize", () => {
      let size = window.screen.width;
      if (size <= 900) {
        return setToggle(true);
      } else {
        return setToggle(false), displayToggle(false);
      }
    });
    let size = window.screen.width;
    if (size <= 900) {
      return setToggle(true);
    } else {
      return setToggle(false);
    }
  }, [toggle]);

  return (
    <header className="nav-container">
      <nav className="navigation" id="toggle-selector">
        {/* Logo à gauche du header */}
        <NavLink to="/">
          <h1 className="logo">Charles Cantin</h1>
        </NavLink>

        {/* ternaire responsive design */}
        {toggle === true ? (
          // petit ecran: affiche le bouton
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="toggle-button"
            onClick={() => {
              setDisplayToggle(!displayToggle);
            }}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        ) : (
          // grand ecran: affiche le menu
          <ul className="toggle">
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Accueil</li>
            </NavLink>
            <NavLink
              to="/galerie"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Galerie</li>
            </NavLink>
            <NavLink
              to="/tarif"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Tarifs / Prestations</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        )}
      </nav>

      {/* menu format mobile */}
      <div className="toggle-nav">
        {/* on affiche si diplayToggle est true */}
        {displayToggle ? (
          <ul className="toggle-nav-ul">
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Accueil</li>
            </NavLink>
            <NavLink
              to="/galerie"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Galerie</li>
            </NavLink>
            <NavLink
              to="/tarif"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Tarifs / Prestations</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        ) : null}
      </div>
    </header>
  );
};

export default Navigation;
