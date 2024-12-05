import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home1 from "./pages/Home1.jsx";
import Contact1 from "./pages/Contact1.jsx";
import Header from "./pages/Header.jsx";
import Home2 from "./pages/Home2.jsx";
import Product from "./pages/Product.jsx";
import Detail from "./pages/Detail.jsx";
import Admin from "./pages/Admin.jsx";
import HomePage from "./pages/HomePage.jsx";
import CustomLink from "./pages/CustomLink.jsx";
import ListUser from "./pages/ListUser.jsx";
import UserDetail from "./pages/UserDetail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/home" element={<Home1 />} />
        <Route path="/contact1" element={<Contact1 />} />
        <Route path="/header" element={<Header />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/custom-link" element={<CustomLink />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/users" element={<ListUser />} />
        <Route path="/user-detail/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
