import { NavBar } from "../Header/Navbar";
import { Footer } from "../Footer/footer";
import { CartList } from "./CartList";
import styles from "./CartItems.module.css";

function CartItems() {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return (
    <>
      <NavBar />
      <div className={styles.cartContainer}>
        <div className={styles.header}>My Cart</div>
        <hr className={styles.divider} />
        <div className={styles.cartItems}>
          {cart && cart.length > 0 ? (
            <>
              <CartList cart={cart} />
              {/* <CartSummary cart={cart} /> */}
            </>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyMessage}>Your cart is empty.</div>
              <p className={styles.shopLink}>Continue Shopping</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export { CartItems };
