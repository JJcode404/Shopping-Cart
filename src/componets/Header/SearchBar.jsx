import { Search } from "lucide-react";
import styles from "../Header/Header.module.css";

function SearchBar() {
  return (
    <div className={styles.search}>
      <Search className={styles.icon} />
      <input
        type="text"
        placeholder="Search..."
        className={styles.searchInput}
      />
    </div>
  );
}
export { SearchBar };
