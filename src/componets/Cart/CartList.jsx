import { Trash2 } from "lucide-react";
import styles from "./Cart.module.css";

function CartList({ cart, updateCart }) {
  const handleDelete = (itemId) => {
    const updatedCart = cart.filter((product) => product.id !== itemId);
    updateCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className={styles.cartList}>
      {cart.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.productContainer}>
            <div className={styles.itemImage}>
              <img
                src={item.details.image}
                alt={item.details.title}
                className={styles.image}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.productName}>{item.details.title}</div>
              <div className={styles.productPrice}>
                ${item.details.price.toFixed(2)}
              </div>
              <div className={styles.productSize}>
                Size: {item.size || "N/A"}
              </div>
            </div>
          </div>
          <div className={styles.quality}>
            <input
              type="number"
              value={item.quantity}
              className={styles.quantityInput}
            />
          </div>
          <div className={styles.productTotalPrice}>${item.totalPrice}</div>
          <div className={styles.delete} onClick={() => handleDelete(item.id)}>
            <Trash2 className={styles.trashIcon} />
          </div>
          <hr className={styles.divider} />
        </div>
      ))}
    </div>
  );
}

export { CartList };
