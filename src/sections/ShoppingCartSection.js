import React from "react"
import {Link} from "react-router-dom"
import CartCard from "../components/CartCard";
import { CartData } from "../data/CartData";

const ShoppingCartSection = () => {
    // const CartHeader = [{
    //     header: ["Product", "Price", "Quantity", "Total"]},
    // ];
    return (
        <>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
                <div className="alert alert-success text-uppercase" role="alert">
					<i className="icon anm anm-truck-l icon-large"></i> &nbsp;<strong>Congratulations!</strong> You`ve got free shipping!
				</div>
                <form action="#" method="post" className="cart style2">
                	<table>
                        <thead className="cart__row cart__header">
                            <tr>
                                <th colspan="2" className="text-center">Product</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-right">Total</th>
                                <th className="action">&nbsp;</th>
                            </tr>
                        </thead>
                    	<tbody>
                            {CartData.map((cartData, key) => {
                                const {productName, productImg, size, color, price, total} = cartData
                                return (
                                    <CartCard key={key} productImg={productImg} productName={productName}
                                    size={size} color={color} price={price} total={total} />
                                );
                            })}
                        </tbody>
                    	<tfoot>
                            <tr>
                                <td colspan="3" className="text-left"><Link to="http://annimexweb.com/" className="btn btn-secondary btn--small cart-continue">Continue shopping</Link></td>
                                <td colspan="3" className="text-right">
	                                <button type="submit" name="clear" className="btn btn-secondary btn--small  small--hide">Clear Cart</button>
                                    <button type="submit" name="update" className="btn btn-secondary btn--small cart-continue ml-2">Update Cart</button>
                                    </td>
                                </tr>
                        </tfoot>
                    </table> 
                    </form>                   
               	</div>


        </>
    );
}
export default ShoppingCartSection;