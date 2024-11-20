import React, { createContext, useContext, useState } from "react";
import { Character } from "../types";

interface LikedCharactersContextType {
  likedCharacters: Character[];
  toggleLike: (character: Character) => void;
}

const LikedCharactersContext = createContext<
  LikedCharactersContextType | undefined
>(undefined);

export const LikedCharactersProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [likedCharacters, setLikedCharacters] = useState<Character[]>([]);

  const toggleLike = (character: Character) => {
    setLikedCharacters((prev) =>
      prev.some((item) => item.id === character.id)
        ? prev.filter((item) => item.id !== character.id)
        : [...prev, character]
    );
  };

  return (
    <LikedCharactersContext.Provider value={{ likedCharacters, toggleLike }}>
      {children}
    </LikedCharactersContext.Provider>
  );
};

export const useLikedCharacters = () => {
  const context = useContext(LikedCharactersContext);
  if (!context)
    throw new Error(
      "useLikedCharacters must be used within a LikedCharactersProvider"
    );
  return context;
};
