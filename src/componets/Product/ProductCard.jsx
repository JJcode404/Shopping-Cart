import { useImageURL } from "../Shared/imageUrl";
import styles from "./Product.module.css";

function ProductCard({ filteredCategory = {} }) {
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

  return (
    <div className={styles.homeProductDisplay}>
      {filterItems.map((item) => (
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
      ))}
    </div>
  );
}

export { ProductCard };
