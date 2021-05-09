import React from "react";
import SingleProduct from "../components/SingleProduct"
import ProductFeature from "../components/ProductFeature"
import ProductFeatureData from "../data/ProductFeatureData"
import ProductTabList from "../components/ProductTabList"
import RelatedProductSlider from "../components/RelatedProductSlider"
import RelatedProductData from "../data/RelatedProductData"
import RecentlyProductSlider from "../components/RecentlyProductSlider"
import RecentlyProductData from "../data/RecentlyProductData"
import Slider from "react-slick";


const Product = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (

    <div id="page-content">
      <div id="MainContent" className="main-content" role="main">
        <div className="bredcrumbWrap">
          <div className="container breadcrumbs">
            <a href="index.html" title="Back to the home page">Home</a><span aria-hidden="true">›</span><span>Product With Left Thumbs</span>

          </div>
        </div>
        <div id="ProductSection-product-template" className="product-template__container prstyle1 container">
          <SingleProduct />
          <div className="prFeatures">
            <div className="row">
              {ProductFeatureData.map((data) => {
                const { img, title, details } = data
                return (
                  <ProductFeature key={title} img={img} title={title}
                    details={details} />
                );
              })}
            </div>
          </div>
          <ProductTabList />

          <div className="related-product grid-products">
            <header className="section-header">
              <h2 className="section-header__title text-center h2"><span>Related Products</span></h2>
              <p className="sub-heading">You can stop autoplay, increase/decrease aniamtion speed and number of grid to show and products from store admin.</p>
            </header>
            <div className="productPageSlider">
              <Slider  {...settings}>
                {RelatedProductData.map((data) => {
                  const { img, hoverImg, labelonSale, label, productname, oldprice, newprice,swatch, starRate} = data
                  return (
                    
                    <RelatedProductSlider key={productname} img={img} hoverImg={hoverImg} labelonSale={labelonSale} label={label} productname={productname} oldprice={oldprice} newprice={newprice} swatch={swatch} starRate={starRate}/>
                  );
                })}
              </Slider>
            </div>
          </div>

          <div class="related-product grid-products">
            <header class="section-header">
              <h2 class="section-header__title text-center h2"><span>Recently Viewed Product</span></h2>
              <p class="sub-heading">You can manage this section from store admin as describe in above section</p>
            </header>
            <div class="productPageSlider">
              <Slider  {...settings}>
                {RecentlyProductData.map((data) => {
                  const { img, hoverImg, labelonSale, label, productname} = data
                  return (
                    <RecentlyProductSlider key={productname} img={img} hoverImg={hoverImg} labelonSale={labelonSale} label={label} productname={productname}  />
                  );
                })}
              </Slider>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product