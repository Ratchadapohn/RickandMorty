import React, { useState } from "react";
import { useLikedCharacters } from "../context/LikedCharactersContext";
import { Character } from "../types";
import "./css/LikeItems.css";

import Footer from "../components/Footer/Footer";

const LikedItemsPage: React.FC = () => {
  const { likedCharacters } = useLikedCharacters();

  // const [category, setCategory] = useState("character");

  return (
    <div className="liked-items">
      <div className="liked-top">
        <img src="/RicknMortybg.png" alt="Rick and Morty Background" />
      </div>
      <h1>Liked Items</h1>
      <div className="liked-items-list">
        {likedCharacters.map((character: Character) => (
          <div key={character.id} className="liked-item">
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default LikedItemsPage;
