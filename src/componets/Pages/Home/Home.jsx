import { Button } from "../../Shared/Button";
import styles from "./Home.module.css";
import { NavBar } from "../../Header/Navbar";
import { ProductCard } from "../../Product/ProductCard";
import { Footer } from "../../Footer/footer";
import { Navigate } from "react-router-dom";

function HomePageContainer() {
  return (
    <div className={styles.mainSection}>
      <div className={styles.overlay}>
        <h1>NEW COLLECTION</h1>
        <p>Unleash your style with our exclusive collection.</p>
        <Button
          type="primary"
          text="Shop Now"
          border="2px solid #BF4F74"
          fontSize="20"
        />
      </div>
    </div>
  );
}
function DisplaySection() {
  return (
    <div className="displaySection">
      <div className={styles.displayHeader}>
        <h1>OUR BEST SELLLERS</h1>
        <p>Don't miss out</p>
      </div>
      <div className="displayImages">
        <ProductCard filteredCategory={{ productIds: [5, 8, 7] }} />
      </div>
      <div className={styles.shop}></div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <NavBar />
      <HomePageContainer />
      <DisplaySection />
      <Footer />
    </>
  );
}
export { HomePage };
