import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
    </Routes>
  );
}
