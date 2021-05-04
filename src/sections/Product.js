import React from "react";
import SingleProduct from  "../components/SingleProduct"
import ProductFeature from "../components/ProductFeature"
import ProductFeatureData from "../data/ProductFeatureData"
import ProductTabList from "../components/ProductTabList"
import CartComponent from "../components/CartComponent"

const Product = () => {
  return (
      
      <div id="page-content">
        <div id="MainContent" className="main-content" role="main">
         <div className="bredcrumbWrap">
        <div className="container breadcrumbs">
          <a href="index.html" title="Back to the home page">Home</a><span aria-hidden="true">›</span><span>Product With Left Thumbs</span>

        </div>
      </div>
      <div id="ProductSection-product-template" className="product-template__container prstyle1 container">
      <SingleProduct/>
                  <div className="prFeatures">
                        <div className="row">
                    {ProductFeatureData.map((data) => {
                                const {img, title, details} = data
                                return (
                                    <CartComponent key={title} img={img} title={title}
                                    details={details}  />
                                );
                            })}
                          </div>
                   </div>
                   <ProductTabList/>
          <div className="related-product grid-products">
        <header className="section-header">
          <h2 className="section-header__title text-center h2"><span>Related Products</span></h2>
          <p className="sub-heading">You can stop autoplay, increase/decrease aniamtion speed and number of grid to show and products from store admin.</p>
        </header>
        <div className="productPageSlider">



        </div></div>
      </div>
        </div>
        </div>
 
  )
}

export default Slider