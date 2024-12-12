import { Button } from "../Shared/Button";
import styles from "./Home.module.css";
import { NavBar } from "../Header/Navbar";
import { ProductCard } from "../Product/ProductCard";
import { Footer } from "../Footer/footer";

function ShopContainer() {
  return (
    <>
      <div className="sidebar">
        <div className="browseBy">
          <div className="header">Browse BY</div>
          <li>
            <a href="#">All Products</a>
          </li>
          <li>
            <a href="#">Best Sellers</a>
          </li>
          <li>
            <a href="#">Jewelry</a>
          </li>
        </div>
        <hr />
        <div className="filterBy">
          <div className="header">Filter BY</div>
          <hr />
          <div className="filter-price">
            <div className="priceName">Price</div>
            <span className="filter-hidden-icon"> + </span>
            <label>
              Max Price:
              <input type="number" placeholder="Enter max price" />
            </label>
          </div>
          <hr />
          <div className="filter-color">
            <div className="colorName">
              Color <span className="colorSelected"></span>
            </div>
            <span className="filter-hidden-icon"> + </span>
            <label>
              <span className="colordiv"></span>
              <span className="colordiv"></span>
              <span className="colordiv"></span>
              <span className="colordiv"></span>
              <span className="colordiv"></span>
              <span className="colordiv"></span>
              <span className="colordiv"></span>
              <span className="colordiv"></span>
              <span className="colordiv"></span>
            </label>
          </div>
          <hr />
          <div className="filter-size">
            <div className="sizeName">Size</div>
            <span className="filter-hidden-icon"> + </span>
            <div className="sizes">
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
    </>
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
