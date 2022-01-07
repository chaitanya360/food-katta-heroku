import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/organisms/Header";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SellerRegister from "./pages/SellerRegister";

function Router(props) {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/seller-register" element={<SellerRegister />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
