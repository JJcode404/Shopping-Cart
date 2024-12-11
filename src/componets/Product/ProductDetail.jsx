import { useImageURL } from "../Shared/imageUrl";
import { useParams } from "react-router-dom";
import { Button } from "../Shared/Button";

function ProductDetails() {
  const { id } = useParams();
  const { loading, error, data } = useImageURL(
    `https://fakestoreapi.com/products/${id}`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products details: {error.message}</div>;
  }
  return (
    <>
      <div className="container">
        <div className="product">
          <div className="product-image">
            <img src={data.image} alt="Product Name" />
          </div>
          <div className="product-details">
            <h1>{data.title}</h1>
            <p className="product-price">{data.price}</p>
            <p className="product-description">{data.description}</p>
            <div className="product-sizes">
              <label htmlFor="size">Size:</label>
              <select id="size">
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
              </select>
            </div>
            <div className="product-actions">
              <Button type="submit" text="Add To Cart" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ProductDetails };
