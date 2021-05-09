import React from "react";
import Slider from "react-slick";
import img1 from "../images/product-detail-page/camelia-reversible-big1.jpg"
import img2 from "../images/product-detail-page/camelia-reversible-big2.jpg"
import img3 from "../images/product-detail-page/camelia-reversible-big3.jpg"
import img4 from "../images/product-detail-page/camelia-reversible-big4.jpg"
import img5 from "../images/product-detail-page/camelia-reversible-big5.jpg"
import img6 from "../images/product-detail-page/camelia-reversible-big6.jpg"
import img7 from "../images/product-detail-page/camelia-reversible-big7.jpg"
import img8 from "../images/product-detail-page/camelia-reversible-big8.jpg"
import img9 from "../images/product-detail-page/camelia-reversible-big9.jpg"
import img10 from "../images/product-detail-page/camelia-reversible-big10.jpg"

import slide1 from "../images/product-detail-page/camelia-reversible0.jpg"
import slide2 from "../images/product-detail-page/camelia-reversible.jpg"
import slide3 from "../images/product-detail-page/camelia-reversible1.jpg"
import slide4 from "../images/product-detail-page/camelia-reversible2.jpg"
import slide5 from "../images/product-detail-page/camelia-reversible3.jpg"
import slide6 from "../images/product-detail-page/camelia-reversible4.jpg"
import slide7 from "../images/product-detail-page/camelia-reversible5.jpg"

const ProductLeftSlider = () => {
  const settings = {

    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    lazyLoad: true,
    verticalSwiping: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (

    <Slider  {...settings}>

      <a data-image={img1} data-zoom-image={img1} aria-hidden="true" >
        <img className="blur-up lazyload" src={slide1} alt="" />
      </a>
      <a data-image={img2} data-zoom-image={img2} aria-hidden="true" >
        <img className="blur-up lazyload" src={slide2} alt="" />
      </a>
      <a data-image={img3} data-zoom-image={img3} aria-hidden="true" >
        <img className="blur-up lazyload" src={img6} alt="" />
      </a>
      <a data-image={img7} data-zoom-image={img7} aria-hidden="true" >
        <img className="blur-up lazyload" src={img7} alt="" />
      </a>
      <a data-image={img4} data-zoom-image={img4} aria-hidden="true" >
        <img className="blur-up lazyload" src={img8} alt="" />
      </a>
      <a data-image={img5} data-zoom-image={img5} aria-hidden="true" >
        <img className="blur-up lazyload" src={img9} alt="" />
      </a>
      <a data-image={img6} data-zoom-image={img6} aria-hidden="true" >
        <img className="blur-up lazyload" src={slide3} alt="" />
      </a>
      <a data-image={img7} data-zoom-image={img7} aria-hidden="true" >
        <img className="blur-up lazyload" src={slide4} alt="" />
      </a>
      <a data-image={img8} data-zoom-image={img8} aria-hidden="true" >
        <img className="blur-up lazyload" src={slide5} alt="" />
      </a>
      <a data-image={img9} data-zoom-image={img9} aria-hidden="true" >
        <img className="blur-up lazyload" src={slide6} alt="" />
      </a>
      <a data-image={img10} data-zoom-image={img10} aria-hidden="true" >
        <img className="blur-up lazyload" src={slide7} alt="" />
      </a>


    </Slider>

  )
}

export default ProductLeftSlider