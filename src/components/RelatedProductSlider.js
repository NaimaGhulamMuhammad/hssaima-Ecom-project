import React from "react";
import ReactStars from "react-rating-stars-component";

const RelatedProductSlider = ({img,hoverImg,labelonSale,label,productname,oldprice,newprice,swatch,starRate}) => {

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
          
          
          <div className="product-price">
          {oldprice? <span className="old-price">${oldprice}</span>:<span></span>}
          {newprice? <span className="price">${newprice}</span>:<span></span>}
          </div>
    
          <div className="product-review" style={{width:"30%",
    margin:"0 auto"}}>
            <ReactStars
    count={5}
    size={15}
    isHalf={true}
    value={starRate}
    edit={false}
    emptyIcon={<i className="font-13 fa fa-star-o"></i>}
    fullIcon={<i className="font-13 fa fa-star"></i>}
    activeColor="#ff9500"

  />
          </div>
           <ul class="swatches">
            {swatch?  <li className="swatch medium rounded"><img src={swatch}alt="image" /></li>:<span></span>}
              </ul>
        </div>
      </div>
      
  )
}

export default RelatedProductSlider