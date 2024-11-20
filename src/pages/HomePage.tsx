import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { fetchCharacters, fetchLocations, fetchEpisodes } from "../utils/api";
import { Character } from "../types";
import Footer from "../components/Footer/Footer";
import CharacterSlider from "../components/CharacterSlider/CharacterSlider";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import "./css/Homepage.css";

const HomePage: React.FC = () => {
  const [category, setCategory] = useState("character");
  const [data, setData] = useState<Character[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (category === "character") {
        setData(await fetchCharacters());
      } else if (category === "location") {
        setData(await fetchLocations());
      } else if (category === "episode") {
        setData(await fetchEpisodes());
      }
    };
    fetchData();
  }, [category]);

  const charactersForSlider = data.map(({ id, name, image }) => ({
    id,
    name,
    image,
  }));

  const loadMore = () => {
    if (visibleCount < data.length) {
      setVisibleCount(visibleCount + 6);
    } else {
      setIsAllLoaded(true);
    }
  };

  return (
    <div>
      <Navbar
        category={category}
        onCategoryChange={setCategory}
        setData={setData}
      />

      <CharacterSlider characters={charactersForSlider} />

      <div className="data-grid">
        {data.slice(0, visibleCount).map((item) => (
          <CharacterCard key={item.id} character={item} />
        ))}
      </div>

      {!isAllLoaded && (
        <button onClick={loadMore} className="load-more-btn">
          Load More
        </button>
      )}

      <Footer />
    </div>
  );
};

export default HomePage;
