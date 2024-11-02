import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCards from "../shop/ProductCards";
import { useFetchAllProductsQuery } from "../../redux/feature/products/productsApi";
function CategoryPage() {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {
    data: { products = [], totalPages, totalProducts } = {},
    error,
    isLoading,
  } = useFetchAllProductsQuery({});
  useEffect(() => {
    const filtered = products.filter(
      (product) => product.category === categoryName.toLocaleLowerCase()
    );
    setFilteredProducts(filtered);
  }, [categoryName]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">{categoryName}</h2>
        <p className="section__subheader">
          Browse a diverse range of categories, from chic dresses to versatile
          accessories. Elevate your style today!
        </p>
      </section>
      <div className="section__container">
        <ProductCards products={filteredProducts}></ProductCards>
      </div>
    </>
  );
}

export default CategoryPage;
