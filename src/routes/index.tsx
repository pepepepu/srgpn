import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "../pages/SplashScreen";
import Access from "../pages/Access";
import GameTeam1 from "../pages/GameTeam1";
import EndGameScreen from "../pages/EndGame";
import Results from "../pages/Results";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/access" element={<Access />} />
        <Route path="/gameTeam01" element={<GameTeam1 />} />
        <Route path="/endgame" element={<EndGameScreen />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
