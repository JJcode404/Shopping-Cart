import React, { useState } from "react";
import styles from "./Shop.module.css";
import { ProductCard } from "../../Product/ProductCard";

function AllProducts() {
  const [productCount, setProductCount] = useState(0);

  return (
    <>
      <div className={styles.top}>
        <h1>ALL PRODUCTS</h1>
        <p>
          Discover our full range of stylish and versatile pieces. From everyday
          essentials to standout designs, find quality and comfort all in one
          place.
        </p>
      </div>
      <div className={styles.sort}>
        <span>{productCount} Products</span>
        <div>Sort By: Recommended</div>
      </div>
      <div className={styles.displayImages}>
        <ProductCard onProductCount={setProductCount} />
      </div>
    </>
  );
}

export { AllProducts };
