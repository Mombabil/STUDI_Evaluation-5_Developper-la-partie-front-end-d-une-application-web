import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <main className="home-container">
        <div className="left-content">
          <img src="./bg-mid.png" alt="photographe" />
        </div>
        <div className="middle-content">
          <img src="./logo.png" alt="logo charles cantin" />
        </div>
        <div className="right-content">
          <img src="./bg-right.png" alt="logo charles cantin" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
