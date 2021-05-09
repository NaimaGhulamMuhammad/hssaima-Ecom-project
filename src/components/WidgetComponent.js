import React from "react"
import {Link} from "react-router-dom"

const WidgetComponent = ({productImg, productName, price}) => {
    return (
        <>
            <div className="grid__item">
                <div className="mini-list-item">
                    <div className="mini-view_image">
                        <Link className="grid-view-item__link" to="#">
                            <img className="grid-view-item__image" src={productImg} alt="" />
                        </Link>
                    </div>
                    <div className="details"> <Link className="grid-view-item__title" to="#">{productName} </Link>
                        <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">${price} </span></span></div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default WidgetComponent;