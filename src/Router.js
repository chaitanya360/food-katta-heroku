import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
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
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default Router;
