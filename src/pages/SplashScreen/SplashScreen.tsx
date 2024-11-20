import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRandomCharacter } from "../../utils/api";
import { Character } from "../../types";
import "./SplashScreen.css";

const SplashScreen: React.FC = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getCharacter = async () => {
      const data = await fetchRandomCharacter();
      setCharacter(data);
    };
    getCharacter();
  }, []);

  return (
    <div className="splash">
      {character ? (
        <>
          <img
            src={character.image}
            alt="Character"
            className="welcome-pic"
            onClick={() => navigate("/home")}
          />
          <img src="/RicknMortybg.png" alt="" className="logo-pic" />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SplashScreen;
