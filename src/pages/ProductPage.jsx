import React, { useState,useEffect } from "react";
import SearchBar from "../component/product/SearchBar";
import ProductContent from "../component/product/ProductContent";
import Footer from "../component/Footer";

const ProductPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  useEffect(() => {
    // Scrolls to the top when the component is mounted
    window.scrollTo(0, 0);
    
  }, []); // Runs only once when the component is mounted

  return (
    <div style={{ marginTop: "100px" }}>
      <SearchBar onSearch={handleSearch} />
      <ProductContent searchQuery={searchQuery} category="fruits" />
      <Footer />
    </div>
  );
};

export default ProductPage;
