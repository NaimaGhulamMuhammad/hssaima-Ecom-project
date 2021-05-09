import React from "react"
import {Link} from "react-router-dom"
import WidgetComponent from "../components/WidgetComponent";
import {ShoppingData} from "../data/ShoppingData"
import banner from "../images/side-banner-2.jpg"

const FilterBarSection = () => {
    return (
        <>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 sidebar filterbar">
                	<div className="closeFilter d-block d-md-none d-lg-none"><i className="icon icon anm anm-times-l"></i></div>
                	<div className="sidebar_tags">
                    	<div className="sidebar_widget categories filter-widget">
                            <div className="widget-title"><h2>Categories</h2></div>
                            <div className="widget-content">
                                <ul className="sidebar_categories">
                                    <li className="level1 sub-level"><Link to="#;" className="site-nav">Clothing</Link>
                                    	<ul className="sublinks">
                                        	<li className="level2"><Link to="#;" className="site-nav">Men</Link></li>
                                            <li className="level2"><Link to="#;" className="site-nav">Women</Link></li>
                                            <li className="level2"><Link to="#;" className="site-nav">Child</Link></li>
                                            <li className="level2"><Link to="#;" className="site-nav">View All Clothing</Link></li>
                                        </ul>
                                    </li>
                                    <li className="level1 sub-level"><Link to="#;" className="site-nav">Jewellery</Link>
                                    	<ul className="sublinks">
                                        	<li className="level2"><Link to="#;" className="site-nav">Ring</Link></li>
                                            <li className="level2"><Link to="#;" className="site-nav">Neckalses</Link></li>
                                            <li className="level2"><Link to="#;" className="site-nav">Eaarings</Link></li>
                                            <li className="level2"><Link to="#;" className="site-nav">View All Jewellery</Link></li>
                                        </ul>
                                    </li>
                                    <li className="lvl-1"><Link to="#;" className="site-nav">Shoes</Link></li>
                                    <li className="lvl-1"><Link to="#;" className="site-nav">Accessories</Link></li>
                                    <li className="lvl-1"><Link to="#;" className="site-nav">Collections</Link></li>
                                    <li className="lvl-1"><Link to="#;" className="site-nav">Sale</Link></li>
                                    <li className="lvl-1"><Link to="#;" className="site-nav">Page</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="sidebar_widget filterBox filter-widget">
                            <div className="widget-title">
                            	<h2>Price</h2>
                            </div>
                            <form action="#" method="post" className="price-filter">
                                <div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                	<div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <p className="no-margin"><input id="amount" type="text" /></p>
                                    </div>
                                    <div className="col-6 text-right margin-25px-top">
                                        <button className="btn btn-secondary btn--small">filter</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="sidebar_widget filterBox filter-widget size-swacthes">
                            <div className="widget-title"><h2>Size</h2></div>
                            <div className="filter-color swacth-list">
                            	<ul>
                                    <li><span className="swacth-btn checked">X</span></li>
                                    <li><span className="swacth-btn">XL</span></li>
                                    <li><span className="swacth-btn">XLL</span></li>
                                    <li><span className="swacth-btn">M</span></li>
                                    <li><span className="swacth-btn">L</span></li>
                                    <li><span className="swacth-btn">S</span></li>
                                    <li><span className="swacth-btn">XXXL</span></li>
                                    <li><span className="swacth-btn">XXL</span></li>
                                    <li><span className="swacth-btn">XS</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="sidebar_widget filterBox filter-widget">
                            <div className="widget-title"><h2>Color</h2></div>
                            <div className="filter-color swacth-list clearfix">
                                <span className="swacth-btn black"></span>
                                <span className="swacth-btn white checked"></span>
                                <span className="swacth-btn red"></span>
                                <span className="swacth-btn blue"></span>
                                <span className="swacth-btn pink"></span>
                                <span className="swacth-btn gray"></span>
                                <span className="swacth-btn green"></span>
                                <span className="swacth-btn orange"></span>
                                <span className="swacth-btn yellow"></span>
                                <span className="swacth-btn blueviolet"></span>
                                <span className="swacth-btn brown"></span>
                                <span className="swacth-btn darkGoldenRod"></span> 
                                <span className="swacth-btn darkGreen"></span> 
                                <span className="swacth-btn darkRed"></span> 
                                <span className="swacth-btn dimGrey"></span>
                                <span className="swacth-btn khaki"></span> 
                            </div>
                        </div>

                        <div className="sidebar_widget filterBox filter-widget">
                            <div className="widget-title"><h2>Brands</h2></div>
                            <ul>
                                <li>
                                  <input type="checkbox" value="allen-vela" id="check1" />
                                  <label for="check1"><span><span></span></span>Allen Vela</label>
                                </li>
                                <li>
                                  <input type="checkbox" value="oxymat" id="check3" />
                                  <label for="check3"><span><span></span></span>Oxymat</label>
                                </li>
                                <li>
                                  <input type="checkbox" value="vanelas" id="check4" />
                                  <label for="check4"><span><span></span></span>Vanelas</label>
                                </li>
                                <li>
                                  <input type="checkbox" value="pagini" id="check5" />
                                  <label for="check5"><span><span></span></span>Pagini</label>
                                </li>
                                <li>
                                  <input type="checkbox" value="monark" id="check6" />
                                  <label for="check6"><span><span></span></span>Monark</label>
                                </li>
                            </ul>
                        </div>

						<div className="sidebar_widget">
                        	<div className="widget-title"><h2>Popular Products</h2></div>
							    <div className="widget-content">
                                    <div className="list list-sidebar-products">
                                        <div className="grid">
                                            {ShoppingData.map((shopData, key) => {
                                                const {productName, productImg, price} = shopData
                                                return (
                                                    <WidgetComponent key={key} productImg={productImg} 
                                                    productName={[productName]} price={price} />
                                                );
                                            })}
                                        </div>
                                    </div>
                          	    </div>
						    </div>
                        
                            <div className="sidebar_widget static-banner">
                                <img src={banner} alt="" />
                            </div>
                        
                            <div className="sidebar_widget">
                                <div className="widget-title"><h2>Information</h2></div>
                                <div className="widget-content"><p>Use this text to share information about your brand with your customers. Describe a product, share announcements, or welcome customers to your store.</p></div>
                            </div>
                        
                            <div className="sidebar_widget">
                            <div className="widget-title">
                                <h2>Product Tags</h2>
                            </div>
                            <div className="widget-content">
                                <ul className="product-tags">
                                <li><Link to="#" title="Show products matching tag $100 - $400">$100 - $400</Link></li>
                                <li><Link to="#" title="Show products matching tag $400 - $600">$400 - $600</Link></li>
                                <li><Link to="#" title="Show products matching tag $600 - $800">$600 - $800</Link></li>
                                <li><Link to="#" title="Show products matching tag Above $800">Above $800</Link></li>
                                <li><Link to="#" title="Show products matching tag Allen Vela">Allen Vela</Link></li>
                                <li><Link to="#" title="Show products matching tag Black">Black</Link></li>
                                <li><Link to="#" title="Show products matching tag Blue">Blue</Link></li>
                                <li><Link to="#" title="Show products matching tag Cantitate">Cantitate</Link></li>
                                <li><Link to="#" title="Show products matching tag Famiza">Famiza</Link></li>
                                <li><Link to="#" title="Show products matching tag Gray">Gray</Link></li>
                                <li><Link to="#" title="Show products matching tag Green">Green</Link></li>
                                <li><Link to="#" title="Show products matching tag Hot">Hot</Link></li>
                                <li><Link to="#" title="Show products matching tag jean shop">jean shop</Link></li>
                                <li><Link to="#" title="Show products matching tag jesse kamm">jesse kamm</Link></li>
                                <li><Link to="#" title="Show products matching tag L">L</Link></li>
                                <li><Link to="#" title="Show products matching tag Lardini"></Link></li>
                                <li><Link to="#" title="Show products matching tag lareida">lareida</Link></li>
                                <li><Link to="#" title="Show products matching tag Lirisla">Lirisla</Link></li>
                                <li><Link to="#" title="Show products matching tag M">M</Link></li>
                                <li><Link to="#" title="Show products matching tag mini-dress">mini-dress</Link></li>
                                <li><Link to="#" title="Show products matching tag Monark">Monark</Link></li>
                                <li><Link to="#" title="Show products matching tag Navy">Navy</Link></li>
                                <li><Link to="#" title="Show products matching tag new">new</Link></li>
                                <li><Link to="#" title="Show products matching tag new arrivals">new arrivals</Link></li>
                                <li><Link to="#" title="Show products matching tag Orange">Orange</Link></li>
                                <li><Link to="#" title="Show products matching tag oxford">oxford</Link></li>
                                <li><Link to="#" title="Show products matching tag Oxymat">Oxymat</Link></li>
                                </ul>
                                <span className="btn btn--small btnview">View all</span> </div>
                            </div>
                </div>
            </div>
        </>
    );
}
export default FilterBarSection;