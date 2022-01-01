import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";

function Router(props) {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
