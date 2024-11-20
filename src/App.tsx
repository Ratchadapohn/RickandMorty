import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LikedCharactersProvider } from "./context/LikedCharactersContext";
import HomePage from "./pages/HomePage";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import LoginPage from "./pages/Login";
import LikedItemsPage from "./pages/LikedItemsPage";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  const handleCategoryChange = (category: string) => {
    console.log(category);
  };

  const setData = (value: React.SetStateAction<any[]>) => {
    console.log(value);
  };

  return (
    <Router>
      <LikedCharactersProvider>
        <Routes>
          <Route
            path="/*"
            element={
              <Navbar
                category=""
                onCategoryChange={handleCategoryChange}
                setData={setData}
              />
            }
          />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/liked-items" element={<LikedItemsPage />} />
          <Route path="/" element={<SplashScreen />} />
        </Routes>
      </LikedCharactersProvider>
    </Router>
  );
};

export default App;
