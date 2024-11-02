import React, { useState } from "react";
import ProductCards from "./ProductCards";
import { useDispatch } from "react-redux";
import { useFetchAllProductsQuery } from "../../redux/feature/products/productsApi";
function TrendingProducts() {
  const [visibleProducts, setVisibleProducts] = useState(8);
  function loadMoreProducts() {
    setVisibleProducts((prevCount) => prevCount + 4);
  }
  const {
    data: { products = [] } = {},
    error,
    isLoading,
  } = useFetchAllProductsQuery({});
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading</p>;

  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Products</h2>
      <p className="section__subheader mb-12">
        Discover the Hottest Picks: Elevate Your Style with Our Curated
        Collection of Trending Women&lsquo;s Fashion Products.
      </p>
      <div className="mt-12">
        <ProductCards products={products.slice(0, visibleProducts)} />
      </div>
      <div className="product__btn">
        {visibleProducts < products.length && (
          <button className="btn" onClick={loadMoreProducts}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
}

export default TrendingProducts;
