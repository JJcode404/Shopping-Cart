import React, { useState } from "react";
import styles from "./Shop.module.css";
import { ProductCard } from "../../Product/ProductCard";

function JewelryProducts() {
  const [productCount, setProductCount] = useState(0);

  return (
    <>
      <div className={styles.top}>
        <h1>Jewelry</h1>
      </div>
      <div className={styles.sort}>
        <span>{productCount} Products</span>
        <div>Sort By: Recommended</div>
      </div>
      <div className={styles.displayImages}>
        <ProductCard
          onProductCount={setProductCount}
          filteredCategory={{ category: "jewelery" }}
        />
      </div>
    </>
  );
}

export { JewelryProducts };
