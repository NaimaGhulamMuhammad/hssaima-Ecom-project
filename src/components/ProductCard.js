import React from "react"
import {Link} from "react-router-dom"

const ProductCard = ({productImg, productName, price, oldPrice, onSale, hoverImg, productLabel}) => {
    return (
        <>
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 item">
            <div class="product-image">
                <Link to="#">
                    <img class="primary blur-up lazyload" data-src={productImg} src={productImg} alt="image" title="product" />
                    <img class="hover blur-up lazyload" data-src={hoverImg} src={hoverImg} alt="image" title="product" />
                    <div class="product-labels rectangular"><span class="lbl on-sale">{onSale}</span> <span class="lbl pr-label1">{productLabel} </span></div>
                </Link>
                
                <div class="saleTime desktop" data-countdown="2022/03/01"></div>
                    <form class="variants add" action="#" onclick="window.location.href='cart.html'"method="post">
                        <button class="btn btn-addto-cart" type="button">Select Options</button>
                    </form>
                                        
                    <div class="button-set">
                        <Link to="javascript:void(0)" title="Quick View" class="quick-view-popup quick-view" data-toggle="modal" data-target="#content_quickview">
                            <i class="icon anm anm-search-plus-r"></i>
                        </Link>
                        <div class="wishlist-btn">
                            <Link class="wishlist add-to-wishlist" to="#" title="Add to Wishlist">
                                <i class="icon anm anm-heart-l"></i>
                            </Link>
                        </div>
                        <div class="compare-btn">
                            <Link class="compare add-to-compare" to="compare.html" title="Add to Compare">
                                <i class="icon anm anm-random-r"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="product-details text-center">
                    <div class="product-name">
                        <Link to="#">{productName} </Link>
                    </div>

                    <div class="product-price">
                        <span class="old-price">{oldPrice} </span>
                        <span class="price">${price} </span>
                    </div>
                                        
                    <div class="product-review">
                        <i class="font-13 fa fa-star"></i>
                        <i class="font-13 fa fa-star"></i>
                        <i class="font-13 fa fa-star"></i>
                        <i class="font-13 fa fa-star-o"></i>
                        <i class="font-13 fa fa-star-o"></i>
                    </div>
                    
                    {/* Other Images */}
                    {/* <ul class="swatches">
                        <li class="swatch medium rounded"><img src="assets/images/product-images/variant1.jpg" alt="image" /></li>
                        <li class="swatch medium rounded"><img src="assets/images/product-images/variant2.jpg" alt="image" /></li>
                        <li class="swatch medium rounded"><img src="assets/images/product-images/variant3.jpg" alt="image" /></li>
                        <li class="swatch medium rounded"><img src="assets/images/product-images/variant4.jpg" alt="image" /></li>
                        <li class="swatch medium rounded"><img src="assets/images/product-images/variant5.jpg" alt="image" /></li>
                        <li class="swatch medium rounded"><img src="assets/images/product-images/variant6.jpg" alt="image" /></li>
                    </ul> */}
                </div>
                <div class="timermobile"><div class="saleTime desktop" data-countdown="2022/03/01"></div></div>
            </div>
        </>
    );
}
export default ProductCard;
