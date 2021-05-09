import React from "react";
import RelatedProductSlider from "../components/RelatedProductSlider"
import RelatedProductData from "../data/RelatedProductData"
import Slider from "react-slick";

const NewArrival = () => {
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
        <div id="ProductSection-product-template" className="product-template__container prstyle1 container">
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
        </div>
      </div>
    </div>
  )
}

export default NewArrival