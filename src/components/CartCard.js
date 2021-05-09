import React from "react"
import {Link} from "react-router-dom"

const CartCard = ({productImg, productName, size, color, price, total}) => {
    return (
        <>
            <tr className="cart__row border-bottom line1 cart-flex border-top">
                <td className="cart__image-wrapper cart-flex-item">
                    <Link to="#"><img className="cart__image" src={productImg} alt="Elastic Waist Dress - Navy / Small" /></Link>
                 </td>

                <td className="cart__meta small--text-left cart-flex-item">
                    <div className="list-view-item__title">
                        <Link to="#">{productName} </Link>
                    </div>
                                        
                    <div className="cart__meta-text">
                        Color:{color} <br />Size: {size} <br />
                    </div>
                </td>

                <td className="cart__price-wrapper cart-flex-item">
                    <span className="money">${price}</span>
                </td>
                            
                <td className="cart__update-wrapper cart-flex-item text-right">
                    <div className="cart__qty text-center">
                        <div className="qtyField">
                            <Link className="qtyBtn minus" to="javascript:void(0);"><i className="icon icon-minus"></i></Link>
                            <input className="cart__qty-input qty" type="text" name="updates[]" id="qty" value="1" pattern="[0-9]*" />
                            <Link className="qtyBtn plus" href="javascript:void(0);"><i className="icon icon-plus"></i></Link>
                        </div>
                    </div>
                </td>
                                    
                <td className="text-right small--hide cart-price">
                    <div><span className="money">${total}</span></div>
                </td>
                                    
                <td className="text-center small--hide"><Link to="#" className="btn btn--secondary cart__remove" title="Remove tem"><i className="icon icon anm anm-times-l"></i></Link></td>
            </tr>
        </>
    );
}
export default CartCard;