import styles from "./ProductDetails.module.css";
import { useImageURL } from "../Shared/imageUrl";
import { useParams } from "react-router-dom";
import { Button } from "../Shared/Button";
import { Footer } from "../Footer/footer";
import { NavBar } from "../Header/Navbar";
import { Heart } from "lucide-react";

function ProductDetails() {
  const { id } = useParams();
  const { loading, error, data } = useImageURL(
    `https://fakestoreapi.com/products/${id}`
  );
  console.log("am here");

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
              <input type="number" value="1" className={styles.QuantityInput} />
            </div>
            <div className={styles.productSizes}>
              <label htmlFor="size">Size:</label>
              <select id="size">
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
              </select>
            </div>
            <div className={styles.productActions}>
              <div className={styles.inlineButtons}>
                <Button
                  type="submit"
                  text="Add To Cart"
                  color="black"
                  width="auto"
                  padding="10px"
                />
                <button className={styles.wishButton}>
                  <span>
                    <Heart />
                  </span>
                </button>
              </div>
              <Button
                type="submit"
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
