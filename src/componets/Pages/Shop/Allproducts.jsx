import React from "react";
import styles from "./Shop.module.css";
import { ProductCard } from "../../Product/ProductCard";

function AllProducts() {
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
        <span>19 Products</span>
        <div>Sort By: Recomended</div>
      </div>
      <div className={styles.displayImages}>
        <ProductCard />
      </div>
    </>
  );
}

export { AllProducts };
