import React from "react";

const RelatedProductSlider = ({img,labelonsale,label,productname,oldprice,newprice}) => {
  return (
    <div className="col-12 item">
       
        <div className="product-image">
          
          <a href="#">
           
            <img className="primary blur-up lazyload" data-src={img}src={img} alt="image" title="product" />
            {/* End image */}
            {/* Hover image */}
            <img className="hover blur-up lazyload" data-src={img} src={img} alt="image" title="product" />
          
            <div className="product-labels rectangular"><span className="lbl on-sale">{labelonsale}%</span> <span className="lbl pr-label1">{label}</span></div>
         
          </a>
        
          <form className="variants add" action="#" onclick="window.location.href='cart.html'" method="post">
            <button className="btn btn-addto-cart" type="button" tabIndex={0}>Select Options</button>
          </form>
          <div className="button-set">
            <a href="#" title="Quick View" className="quick-view" tabIndex={0}>
              <i className="icon anm anm-search-plus-r" />
            </a>
            <div className="wishlist-btn">
              <a className="wishlist add-to-wishlist" href="wishlist.html">
                <i className="icon anm anm-heart-l" />
              </a>
            </div>
          </div>
       
        </div>
   
        <div className="product-details text-center">
          {/* product name */}
          <div className="product-name">
            <a href="#">{productname}</a>
          </div>
          
          <div className="product-price">
            <span className="old-price">${oldprice}</span>
            <span className="price">${newprice}</span>
          </div>
       
          <div className="product-review">
            <i className="font-13 fa fa-star" />
            <i className="font-13 fa fa-star" />
            <i className="font-13 fa fa-star" />
            <i className="font-13 fa fa-star-o" />
            <i className="font-13 fa fa-star-o" />
          </div>
          {/* Variant */}
          <ul className="swatches">
            <li className="swatch medium rounded"><img src="assets/images/product-images/variant1.jpg" alt="image" /></li>
            <li className="swatch medium rounded"><img src="assets/images/product-images/variant2.jpg" alt="image" /></li>
            <li className="swatch medium rounded"><img src="assets/images/product-images/variant3.jpg" alt="image" /></li>
            <li className="swatch medium rounded"><img src="assets/images/product-images/variant4.jpg" alt="image" /></li>
            <li className="swatch medium rounded"><img src="assets/images/product-images/variant5.jpg" alt="image" /></li>
            <li className="swatch medium rounded"><img src="assets/images/product-images/variant6.jpg" alt="image" /></li>
          </ul>
          {/* End Variant */}
        </div>
        {/* End product details */}
      </div>
  )
}

export default RelatedProductSlider