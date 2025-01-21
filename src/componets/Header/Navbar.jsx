import { SearchBar } from "./SearchBar";
import styles from "./Header.module.css";
import { CircleUser } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.links} ${styles.active}` : styles.links
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? `${styles.links} ${styles.active}` : styles.links
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/lookBook"
            className={({ isActive }) =>
              isActive ? `${styles.links} ${styles.active}` : styles.links
            }
          >
            Look Book
          </NavLink>
          <li>Our Brand</li>
          <li>Contact Us</li>
        </ul>
        <div className={styles.logo}>Fly Flex</div>
        <div className={styles.cart}>
          <Heart className={styles.whiteIcon} />
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? `${styles.links} ${styles.active}` : styles.links
            }
          >
            <ShoppingBag className={styles.icon} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export { NavBar };
