import React from "react";
import { Character } from "../../types";
import { useLikedCharacters } from "../../context/LikedCharactersContext";
import "./CharacterCard.css";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { likedCharacters, toggleLike } = useLikedCharacters();

  const isLiked = likedCharacters.some((item) => item.id === character.id);

  return (
    <div className="character-card">
      <div className="character-card-image">
        <img
          src={character.image}
          alt={character.name}
          className="character-card-img"
        />
      </div>
      <h2 className="character-name">{character.name}</h2>
      <h3 className="character-species">{character.species}</h3>
      <span className="character-status">{character.status}</span>

      <button
        onClick={() => toggleLike(character)}
        className={`like-btn ${isLiked ? "liked" : ""}`}
      >
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default CharacterCard;
