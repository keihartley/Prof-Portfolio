import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeOverlay from "../Components/Custom/Overlays";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";

interface Props {}

// Background
// - Default, #141419
// - Surface, #141419

// Buttons
// - Primary, #A5C5E9
// - Secondary, #E9C9A5

// Text
// - Default, #EBEBEB
// - Surface, #D1D1D1

const App: React.FC<Props> = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <HomeOverlay />
            </>
          }
        />
        <Route path="/work" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

export default App;
