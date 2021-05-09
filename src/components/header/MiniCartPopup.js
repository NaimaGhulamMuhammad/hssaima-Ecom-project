import React from "react";

const MiniCartPopup = () => {
  return (
    <div id="header-cart" className="block block-cart">
      <ul className="mini-products-list">
        <li className="item">
          <a className="product-image" href="#">
            <img src="assets/images/product-images/cape-dress-1.jpg" alt="3/4 Sleeve Kimono Dress" title="" />
          </a>
          <div className="product-details">
            <a href="#" className="remove"><i className="anm anm-times-l" aria-hidden="true"></i></a>
            <a href="#" className="edit-i remove"><i className="anm anm-edit" aria-hidden="true"></i></a>
            <a className="pName" href="cart.html">Sleeve Kimono Dress</a>
            <div className="variant-cart">Black / XL</div>
            <div className="wrapQtyBtn">
              <div className="qtyField">
                <span className="label">Qty:</span>
                <a className="qtyBtn minus" href="javascript:void(0);"><i className="fa anm anm-minus-r" aria-hidden="true"></i></a>
                <input type="text" id="Quantity" name="quantity" value="1" className="product-form__input qty" />
                  <a className="qtyBtn plus" href="javascript:void(0);"><i className="fa anm anm-plus-r" aria-hidden="true"></i></a>
              </div>
            </div>
            <div className="priceRow">
                <div className="product-price">
                  <span className="money">$59.00</span>
                </div>
            </div>
          </div>
        </li>
          <li className="item">
            <a className="product-image" href="#">
              <img src="assets/images/product-images/cape-dress-2.jpg" alt="Elastic Waist Dress - Black / Small" title="" />
            </a>
            <div className="product-details">
              <a href="#" className="remove"><i className="anm anm-times-l" aria-hidden="true"></i></a>
              <a href="#" className="edit-i remove"><i className="anm anm-edit" aria-hidden="true"></i></a>
              <a className="pName" href="cart.html">Elastic Waist Dress</a>
              <div className="variant-cart">Gray / XXL</div>
              <div className="wrapQtyBtn">
                <div className="qtyField">
                  <span className="label">Qty:</span>
                  <a className="qtyBtn minus" href="javascript:void(0);"><i className="fa anm anm-minus-r" aria-hidden="true"></i></a>
                  <input type="text" id="Quantity" name="quantity" value="1" className="product-form__input qty" />
                    <a className="qtyBtn plus" href="javascript:void(0);"><i className="fa anm anm-plus-r" aria-hidden="true"></i></a>
                </div>
              </div>
                <div className="priceRow">
                  <div className="product-price">
                    <span className="money">$99.00</span>
                  </div>
                </div>
              </div>
            </li>
        </ul>
          <div className="total">
            <div className="total-in">
              <span className="label">Cart Subtotal:</span><span className="product-price"><span className="money">$748.00</span></span>
            </div>
            <div className="buttonSet text-center">
              <a href="cart.html" className="btn btn-secondary btn--small">View Cart</a>
              <a href="checkout.html" className="btn btn-secondary btn--small">Checkout</a>
            </div>
          </div>
                        </div>
      )
}

export default MiniCartPopup