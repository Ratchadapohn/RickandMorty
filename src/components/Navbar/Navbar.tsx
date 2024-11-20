import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLikedCharacters } from "../../context/LikedCharactersContext";
import "./Navbar.css";
import { PiFinnTheHumanDuotone } from "react-icons/pi";
import { BiSolidHeartCircle } from "react-icons/bi";
import { FcCursor } from "react-icons/fc";
import { RiHomeGearFill } from "react-icons/ri";
import { Link } from "react-router-dom";

interface NavbarProps {
  category: string;
  onCategoryChange: (category: string) => void;
  setData: React.Dispatch<React.SetStateAction<any[]>>;
}

const Navbar: React.FC<NavbarProps> = ({
  category,
  onCategoryChange,
  setData,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { likedCharacters } = useLikedCharacters();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/${category}`
      );
      const data = await response.json();

      if (searchTerm) {
        setData(
          data.results.filter((item: { name: string }) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      } else {
        setData(data.results);
      }
    };

    fetchData();
  }, [searchTerm, category, setData]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="nav-top">
        <img src="/RicknMortybg.png" alt="Rick and Morty Background" />
      </div>
      <div className="nav-bottom">
        <div className="navbar-center">
          <div className="serch">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-bar"
            />
            <div className="arrow">
              <FcCursor />
            </div>
          </div>
          <div className="sort">
            <select
              onChange={(e) => onCategoryChange(e.target.value)}
              value={category}
            >
              <option value="character">Character</option>
              <option value="location">Location</option>
              <option value="episode">Episode</option>
            </select>
          </div>
        </div>
        <div className="navbar-right">
          <div className="home" onClick={() => navigate("/home")}>
            <Link to="/">
              <RiHomeGearFill />
            </Link>
          </div>

          <div className="heart-icon" onClick={() => navigate("/liked-items")}>
            <BiSolidHeartCircle />
            <span className="badge">{likedCharacters.length}</span>
          </div>

          <div className="login-button" onClick={() => navigate("/login")}>
            <PiFinnTheHumanDuotone />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
