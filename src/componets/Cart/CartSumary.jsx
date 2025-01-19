import styles from "./CartSummary.module.css";
import { Button } from "../Shared/Button";

function CartSumary({ cart }) {
  const cartTotalPrice = cart.reduce((accumulator, item) => {
    return accumulator + parseInt(item.totalPrice);
  }, 0);

  return (
    <div className={styles.summaryContainer}>
      <div className={styles.hearder}>Order Summary</div>
      <hr />
      <div className={styles.subtotalContainer}>
        <div className={styles.subtotal}>Subtotal</div>
        <div className={styles.subtotalPrice}>${cartTotalPrice}</div>
      </div>
      <div className={styles.totalContainer}>
        <div className={styles.total}>Total</div>
        <div className={styles.totalPrice}>${cartTotalPrice}</div>
      </div>
      <div className={styles.checkOut}>
        <Button
          type="submit"
          text="Checkout"
          color="white"
          background="black"
          width="100%"
          padding="15px"
          fontSize="16px"
          border="none"
        />
      </div>
    </div>
  );
}

export { CartSumary };
