import { Button } from "../Shared/Button";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitch } from "lucide-react";
import { Linkedin } from "lucide-react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>Fly Flex</div>
      <div className={styles.details}>
        <div className={styles.openingHours}>
          <h2>OPENING HOURS</h2>
          <p>Mon-Fri:10am - 8pm</p>
          <p>Sat:10am - 4pm</p>
          <p>Sun:10am -6pm</p>
        </div>
        <div className={styles.terms}>
          <h2>TERMS & CONDITIONS</h2>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Shipping Policy</p>
          <p>Refund Policy</p>
          <p>Accessibility Statement</p>
        </div>
        <div className={styles.emailForm}>
          <h2>BE OUR FRIEND</h2>
          <form action="">
            <label htmlFor="email">
              Enter Your Email Here <span>*</span>
            </label>
            <input type="email" name="email" className={styles.searchInput} />
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="checkbox"
                className={styles.searchInput}
              />
              <label htmlFor="checkbox">
                Yes, subscribe me to your newsletter
              </label>
            </div>
            <Button
              type="submit"
              text="Subscribe Now"
              background="#D0CECE"
              padding="10px"
              color="#000000"
            />
          </form>
        </div>
        <div className={styles.assistance}>
          <h2>NEED ASSISTANCE</h2>
          <p>No: +254715369733</p>
          <p>Flyflex001@gmail.com</p>
        </div>
        <div className={styles.socials}>
          <h2>STAY CONNECTED</h2>
          <div className={styles.icons}>
            <Facebook />
            <Twitter />
            <Twitch />
            <Instagram />
            <Linkedin />
          </div>
        </div>
        <div className={styles.copyright}>
          © 2024 by FlyFlex. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export { Footer };
