import img1 from "../images/slideshow-banners/home11-grid-banner1.jpg"
import img2 from "../images/slideshow-banners/home11-grid-banner2.jpg"
import React from "react";
import Slide from "../components/Slide"

const Slider = () => {
  return (
    <div class="slideshow slideshow-wrapper pb-section">
        	<div class="home-slideshow">
            <Slide img={img1} title="Summer Hot Collection" subtle="SALE up to 30% off"/>
            <Slide img={img2} title="Mid Season SAle" subtle="Up to 70% off on selected item"/>
          </div>
    </div>
  )
}

export default Slider