import { Trash2 } from "lucide-react";
import styles from "./Cart.module.css";

function CartList({ cart }) {
  console.log(cart);

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
              value={item.quality}
              className={styles.quantityInput}
              readOnly
            />
          </div>
          <div className={styles.productTotalPrice}>
            ${item.details.price * item.quantity}
          </div>
          <div className={styles.delete}>
            <Trash2 className={styles.trashIcon} />
          </div>
          <hr className={styles.divider} />
        </div>
      ))}
    </div>
  );
}

export { CartList };
