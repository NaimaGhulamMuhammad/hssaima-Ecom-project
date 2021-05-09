import React from "react"
import PageTitle from "../components/PageTitle"
import FilterBarSection from "../sections/FilterBarSection"
import Footer from "../sections/Footer"
import ShopLeftProducts from "../sections/ShopLeftProducts"
import SideLeftBanner from "../sections/SideLeftBanner"

const ShopLeftSidebar = () => {
    return(
        <>
            <div className="pageWrapper">
            <SideLeftBanner/>
                <div id="page-content">
                    <div className="container">
                    <br/>
                        <div className="row">
                            <FilterBarSection />
                            <ShopLeftProducts />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
export default ShopLeftSidebar;