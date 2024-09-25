// src/pages/Home.js
import React from "react";
import herosection from "./assets/HeroSection/herosection.png";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-12 bg-backgroundimg">
      <div className="flex flex-col items-center justify-center p-6 bg-black bg-opacity-50 rounded-lg shadow-lg mb-10 pt-10">
        <div
          className="bg-center"
          style={{
            backgroundImage: `url(${herosection})`,
            backgroundSize: "contain", // Ensures the hero section image fits nicely
            backgroundRepeat: "no-repeat",
            width: "200px", // Adjust width as needed
            height: "100px", // Adjust height as needed
            margin: "0 auto", // Centers the image horizontally
          }}
        ></div>
        <h1 className="text-white text-3xl font-bold mt-4">Welcome to Iskon</h1>
        <p
          className="text-white mt-2 text-lg"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Sri Sri Radha Gopinath Temple
        </p>
      </div>
      
    </div>
  );
};

export default Home;
