import { useState } from "react";
import { ProductCard } from "./componets/Product/ProductCard";
import { ProductDetails } from "./componets/Product/ProductDetail";
import { NavBar } from "./componets/Header/Navbar";
import { HomePage } from "./componets/Pages/Home/Home";
import { ShopPage } from "./componets/Pages/Shop/Shop";

function App() {
  return (
    <>
      <ShopPage />
      {/* <HomePage /> */}
    </>
  );
}

export default App;
