import React from "react";
import { useState } from "react";

import produts from "../../data/products.json";
import ProductCards from "../shop/ProductCards";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  function handlSearch() {
    const query = searchQuery.toLowerCase();
    const filtered = produts.filter(
      (produt) =>
        produt.name.toLocaleLowerCase().includes(query) ||
        produt.description.toLocaleLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  }
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Search Page</h2>
        <p className="section__subheader">
          Browse a diverse range of categories, from chic dresses to versatile
          accessories. Elevate your style today!
        </p>
      </section>
      <section className="section__container">
        <div className="w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar w-full max-w-4xl p-2 border rounded"
            placeholder="Search for products..."
          />
          <button
            onClick={handlSearch}
            className="search-button w-full md:w-auto py-2 px-8 py2 px-8 bg-primary text-white"
          >
            Search
          </button>
        </div>
        <ProductCards products={filteredProducts} />
      </section>
    </>
  );
}

export default Search;