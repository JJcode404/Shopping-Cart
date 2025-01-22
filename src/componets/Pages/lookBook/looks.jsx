import { useState, useEffect } from "react";
import { Footer } from "../../Footer/footer";
import { NavBar } from "../../Header/Navbar";
import { createClient } from "pexels";
import styles from "./lookbook.module.css";

const client = createClient(
  "YT5efzEtFwU0F9LMJkHfQBu5A8bbp829iFQ93qDboSE6BFWNapsMROdR"
);

function LookBook() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.photos
      .search({ query: "fashion" })
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <NavBar />
      <div className={styles.photoGallery}>
        {data &&
          data.photos.map((photo) => (
            <div key={photo.id} className={styles.photoItem}>
              <a href={photo.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={photo.src.large}
                  alt={photo.photographer}
                  className={styles.photoImage}
                />
              </a>
              <div className={styles.photoInfo}>
                <p>Photo by {photo.photographer}</p>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
}

export { LookBook };
