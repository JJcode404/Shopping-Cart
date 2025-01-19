import { NavBar } from "../Header/Navbar";
import { Footer } from "../Footer/footer";
import { CartList } from "./CartList";
import { CartSumary } from "./CartSumary";
import styles from "./CartItems.module.css";
import { useState, useEffect } from "react";

function CartItems() {
  const [cart, updateCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCart(storedCart);
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.cartContainer}>
        <div className={styles.header}>My Cart</div>
        <hr className={styles.divider} />
        <div className={styles.cartItems}>
          {cart && cart.length > 0 ? (
            <>
              <CartList cart={cart} updateCart={updateCart} />
              <CartSumary cart={cart} updateCart={updateCart} />
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
