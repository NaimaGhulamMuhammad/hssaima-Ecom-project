import React from 'react';
import Topbar from "../components/Topbar"
import Navbar from "../components/header/Navbar"
import Product from "../sections/Product"

function ProductWithLeftThumb() {
  return (
    <>
    <div className="pageWrapper">
    <Topbar/>
    <Navbar/>
    <Product/>
    </div>
    </>
  );
}

export default ProductWithLeftThumb;
