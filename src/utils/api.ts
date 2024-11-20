import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async () => {
  const { data } = await axios.get(`${BASE_URL}/character`);
  return data.results;
};

export const fetchLocations = async () => {
  const { data } = await axios.get(`${BASE_URL}/location`);
  return data.results;
};
export const fetchEpisodes = async () => {
  const { data } = await axios.get(`${BASE_URL}/episode`);
  return data.results;
};
export const fetchRandomCharacter = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * data.results.length);
  return data.results[randomIndex];
};
