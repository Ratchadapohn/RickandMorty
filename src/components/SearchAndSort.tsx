import React, { useState } from "react";
import { Character } from "../types";

interface Props {
  data: Character[];
  setData: (updatedData: Character[]) => void;
}

const SearchAndSort: React.FC<Props> = ({ data, setData }) => {
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState("");

  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  };

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) =>
      sortType === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setData(sortedData);
  };

  return (
    <div className="search-sort">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <select onChange={(e) => setSortType(e.target.value)} defaultValue="">
        <option value="" disabled>
          Sort by
        </option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <button onClick={handleSort}>Sort</button>
    </div>
  );
};

export default SearchAndSort;
