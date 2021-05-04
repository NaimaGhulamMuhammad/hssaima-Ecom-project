import React from "react";
import MiniCartPopup from "./MiniCartPopup"
import Navbar from "./Navbar"
import logo from "../../images/logo-text.svg"

const Header = () => {
  return (
    <div className="header-wrap animated d-flex home15-funiture-header">
    	<div className="container-fluid">        
        <div className="row align-items-center">
          <div className="col-3 col-sm-3 col-md-3 col-lg-8 d-block d-lg-none">
            <button type="button" className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open">
              <i className="icon anm anm-times-l"></i>
              <i className="anm anm-bars-r"></i>
            </button>
          </div>
            
          <div className="col-4 col-sm-3 col-md-3 col-lg-2 d-none d-lg-block">
                    <div className="site-header__search text-left">
                        <button type="button" className="search-trigger"><i className="icon anm anm-search-l"></i></button>
                    </div>
          </div>
               
          <div className="logo col-5 col-sm-6 col-md-6 col-lg-8 text-center">
                    <a href="index.html">
                        <img src={logo} alt="Belle Multipurpose Html Template" title="Belle Multipurpose Html Template" />
                    </a>
          </div>
                {/*<!--End Desktop Logo-->*/}
          <div className="col-4 col-sm-3 col-md-3 col-lg-2">
                	<div className="site-cart">
                    	<a href="#;" className="site-header__cart" title="Cart">
                        	<i className="icon anm anm-bag-l"></i>
                            <span id="CartCount" className="site-header__cart-count" data-cart-render="item_count">2</span>
                        </a>
                    <MiniCartPopup />
                  </div>
                    {/*<!--Mobile Search-->*/}
                    <div class="site-header__search d-block d-lg-none">
                    	<button type="button" class="search-trigger"><i class="icon anm anm-search-l"></i>
                      </button>
                    </div>
                   
          </div>
      </div>
        <Navbar />
    </div>
</div>
  )
}

export default Header