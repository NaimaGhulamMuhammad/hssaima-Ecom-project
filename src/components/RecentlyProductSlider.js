import React from "react";

const RecentlyProductSlider = ({img,hoverImg,labelonSale,label,productname}) => {

  return (
    <div className="col-12 item">
       
        <div className="product-image">
          
          <a href="#">
           
            <img className="primary blur-up lazyload" data-src={img}src={img} alt="image" title="product" />
            {/* End image */}
            {/* Hover image */}
            <img className="hover blur-up lazyload" data-src={hoverImg} src={hoverImg} alt="image" title="product" />
          
            <div className="product-labels rectangular">{labelonSale ? <span className="lbl on-sale">{labelonSale}</span>:<span></span>}  {label?<span className="lbl pr-label1">{label}</span>:<span></span>}</div>
         
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
          
       
       
         
        </div>
        {/* End product details */}
      </div>
  )
}

export default RecentlyProductSlider