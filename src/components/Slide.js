import React from "react";

const Slide = ({img, title, subtle}) => {
  return (
    <div class="slide">
                	<div class="blur-up lazyload">
                        <img class="blur-up lazyload" data-src={img} src="assets/images/slideshow-banners/home11-grid-banner1.jpg" alt="Summer Hot Collection" title="Summer Hot Collection" />
                        <div class="slideshow__text-wrap slideshow__overlay classic middle">
                            <div class="slideshow__text-content middle">
                                <div class="wrap-caption right">
                                    <h2 class="h1 mega-title slideshow__title">{title}</h2>
                                    <span class="mega-subtitle slideshow__subtitle">{subtle}</span>
                                    <span class="btn">Shop now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Slide