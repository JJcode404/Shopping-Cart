import { useImageURL } from "../Shared/imageUrl";

function ProductCard({ filteredCategory = {} }) {
  const { data, loading, error } = useImageURL();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  const filterItems = data
    ? data.filter((item) => {
        if (filteredCategory?.productIds) {
          return filteredCategory.productIds.includes(item.id);
        }
        if (filteredCategory?.category) {
          return item.category === filteredCategory.category;
        }
        return true;
      })
    : [];

  return (
    <div className="home-product-display">
      {filterItems.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt={item.title} className="product-image" />
          <div className="description">
            <div className="name">{item.title}</div>
            <div className="price">${item.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { ProductCard };
