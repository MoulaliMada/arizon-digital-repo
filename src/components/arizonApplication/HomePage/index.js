import React from "react";
import Header from "../Header";
import ProductListingPage from "../ProductListingPage";
import "./index.css";

function HomePage() {
  return (
    <div className="home_bg_container">
      <Header />
      <ProductListingPage />
    </div>
  );
}

export default HomePage;
