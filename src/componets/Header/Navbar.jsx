import { SearchBar } from "./SearchBar";
import styles from "./Header.module.css";
import { CircleUser } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Heart } from "lucide-react";
function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.top}>
        <SearchBar />
        <div className={styles.offer}>FREE SHIPPING WORLD WIDE</div>
        <div className={styles.login}>
          <CircleUser className={styles.icon} />
          <p>Log In</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Look Book</li>
          <li>Our Brand</li>
          <li>Contact Us</li>
        </ul>
        <div className={styles.logo}>Fly Flex</div>
        <div className={styles.cart}>
          <Heart className={styles.whiteIcon} />
          <ShoppingBag className={styles.whiteIcon} />
        </div>
      </div>
    </div>
  );
}

export { NavBar };
