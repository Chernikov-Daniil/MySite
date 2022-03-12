import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Footer } from "../footer";
import { Header } from "../header";
import { Contacts } from "../Pages/contacts";
import { Home } from "../Pages/home";
import { NoMatch } from "../Pages/noMatch";
import { Products } from "../Pages/products";

export const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contacts" element={<Contacts />} />

      <Route path="*" element={<NoMatch />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
