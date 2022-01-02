import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/organisms/Header";
import LandingPage from "./components/pages/LandingPage";

function Router(props) {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
