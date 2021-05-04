import React from "react"
import ShoppingCartSection from "../sections/ShoppingCartSection"
import CartBillingSection from "../sections/CartBillingSection"
import Footer from "../sections/Footer"
import PageTitle from "../components/PageTitle"


 const ShoppingCart = () => {
    return(
        <>
            <div className="pageWrapper">
                <div id="page-content">
                    <PageTitle title="Shopping Cart" />

                    <div className="container">
                        <div className="row">
                            <ShoppingCartSection />
                            <CartBillingSection />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
export default ShoppingCart;