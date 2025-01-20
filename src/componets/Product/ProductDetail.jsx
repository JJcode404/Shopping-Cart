import styles from "./ProductDetails.module.css";
import { useImageURL } from "../Shared/imageUrl";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "../Shared/Button";
import { Footer } from "../Footer/footer";
import { NavBar } from "../Header/Navbar";
import { Heart, TestTubeDiagonal } from "lucide-react";

function ProductDetails() {
  const { id } = useParams();
  const [value, setValue] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Small");
  const { loading, error, data } = useImageURL(
    `https://fakestoreapi.com/products/${id}`
  );

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex(
      (item) => item.id === parseInt(id)
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity = parseInt(value);
    } else {
      const product = {
        id: parseInt(id),
        quantity: parseInt(value),
        totalPrice: (value * data.price).toFixed(2),
        size: selectedSize,
        details: data,
      };
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product details: {error.message}</div>;
  }

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.productCard}>
            <div className={styles.productImage}>
              <img src={data.image} alt="Product Name" />
            </div>
          </div>
          <div className={styles.productDetails}>
            <h1>{data.title}</h1>
            <p className={styles.productPrice}>${data.price}</p>
            <p className={styles.productDescription}>{data.description}</p>
            <div className={styles.productQuantity}>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                value={value ?? 1}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  setValue(inputValue);
                  console.log(inputValue);
                }}
                className={styles.QuantityInput}
              />
            </div>
            <div className={styles.productSizes}>
              <label htmlFor="size">Size:</label>
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Extra Large">Extra Large</option>
              </select>
            </div>
            <div className={styles.productActions}>
              <div className={styles.inlineButtons}>
                <Button
                  type="primary"
                  text="Add To Cart"
                  color="black"
                  width="auto"
                  padding="10px"
                  handleClick={addToCart}
                />
                <button className={styles.wishButton}>
                  <span>
                    <Heart />
                  </span>
                </button>
              </div>
              <Button
                type="secondary"
                text="Buy Now"
                color="white"
                background="black"
                width="100%"
                padding="15px"
                fontSize="16px"
                border="none"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { ProductDetails };
