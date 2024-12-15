import { Button } from "../../Shared/Button";
import styles from "./Shop.module.css";
import { NavBar } from "../../Header/Navbar";
import { ProductCard } from "../../Product/ProductCard";
import { Footer } from "../../Footer/footer";
import { AllProducts } from "./Allproducts";
import { Link } from "react-router-dom";

function ShopContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.browseBy}>
          <div className={styles.header}>Browse BY</div>
          <hr />
          <li>
            <Link to="/shop/allProducts">All Products</Link>
          </li>
          <li>
            <a href="#">Best Sellers</a>
          </li>
          <li>
            <a href="#">Jewelry</a>
          </li>
        </div>

        <div className={styles.filterBy}>
          <div className={styles.header}>Filter BY</div>
          <hr />
          <div className={styles.filterPrice}>
            <div className={styles.priceName}>
              Price <span className={styles.filterHiddenIcon}> + </span>
            </div>

            <label>
              Max Price:
              <input type="number" placeholder="Enter max price" />
            </label>
          </div>
          <hr />
          <div className={styles.filterColor}>
            <div className={styles.colorName}>
              Color: <span className={styles.colorSelected}>Green</span>
              <span className={styles.filterHiddenIcon}> + </span>
            </div>

            <label>
              <span className={styles.colorDiv}></span>
              <span className={styles.colorDiv}></span>
              <span className={styles.colorDiv}></span>
              <span className={styles.colorDiv}></span>
              <span className={styles.colorDiv}></span>
              <span className={styles.colorDiv}></span>
              <span className={styles.colorDiv}></span>
              <span className={styles.colorDiv}></span>
              <span className={styles.colorDiv}></span>
            </label>
          </div>
          <hr />
          <div className={styles.filterSize}>
            <div className={styles.sizeName}>
              Size <span className={styles.filterHiddenIcon}> + </span>
            </div>

            <div className={styles.sizes}>
              <label>
                <input type="checkbox" />
                <span>36</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>37</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>38</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>39</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>40</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>41</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>small</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>large</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>medium</span>
              </label>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className={styles.ProductDetails}>
        <AllProducts />
      </div>
    </div>
  );
}

function ShopPage() {
  return (
    <>
      <NavBar />
      <ShopContainer />
      <Footer />
    </>
  );
}

export { ShopPage };
