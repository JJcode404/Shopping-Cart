import { useImageURL } from "../Shared/imageUrl";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ filteredCategory = {}, onProductCount }) {
  const { data, loading, error } = useImageURL();

  if (loading) {
    return <div className={styles.loadingMessage}>Loading...</div>;
  }

  if (error) {
    return (
      <div className={styles.errorMessage}>
        Error loading products: {error.message}
      </div>
    );
  }

  const filterItems = data
    ? data.filter((item) => {
        if (filteredCategory?.productIds) {
          return filteredCategory.productIds.includes(item.id);
        }
        if (filteredCategory?.category) {
          return item.category === filteredCategory.category;
        }
        return true;
      })
    : [];

  if (onProductCount) {
    onProductCount(filterItems.length);
  }

  return (
    <div className={styles.homeProductDisplay}>
      {filterItems.map((item) => (
        <Link to={`/productDetails/${item.id}`} className={styles.productLink}>
          <div key={item.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.productImage}
              />
            </div>
            <div className={styles.description}>
              <div className={styles.name}>{item.title}</div>
              <div className={styles.price}>${item.price}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export { ProductCard };
