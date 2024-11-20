import React from "react";
import { Character } from "../../types";
import "./CharacterSlider.css";

interface CharacterSliderProps {
  characters: Pick<Character, "id" | "name" | "image">[];
}

const CharacterSlider: React.FC<CharacterSliderProps> = ({ characters }) => {
  return (
    <div className="character-slider-container">
      <div className="character-slider">
        {characters.length === 0 ? (
          <p>No characters available</p>
        ) : (
          characters.map((character) => (
            <div key={character.id} className="character-card">
              <img
                src={character.image}
                alt={character.name}
                className="character-card-img"
              />
              <h2 className="character-name">{character.name}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CharacterSlider;
