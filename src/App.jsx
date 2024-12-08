import { useState } from "react";
import { ProductCard } from "./componets/Product/ProductCard";
import "./App.css";

function App() {
  return (
    <>
      <ProductCard filteredCategory={{ productIds: [6, 2, 3] }} />
    </>
  );
}

export default App;
