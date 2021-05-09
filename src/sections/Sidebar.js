import React from 'react'
import img1 from "../images/blog/blog-post-sml-1.jpg"
import img2 from "../images/blog/blog-post-sml-2.jpg"
import img3 from "../images/blog/blog-post-sml-3.jpg"
import img4 from "../images/blog/blog-post-sml-4.jpg"
import cmntImg from "../images/recent-commnet-img.jpg";
// import img5 from "../images/blog/blog-post-sml-1.jpg"
// import img6 from "../images/blog/blog-post-sml-1.jpg"
function Sidebar() {
    return (

            <div className="col-12 col-sm-12 col-md-3 col-lg-3 sidebar">
                <div className="sidebar_tags">
                    <div className="sidebar_widget categories">
                        <div className="widget-title"><h2>Category</h2></div>
                        <div className="widget-content">
                            <ul className="sidebar_categories">
                                <li className="lvl-1 "><a href="http://annimexweb.com/" className="site-nav lvl-1">Beauty</a></li>
                                <li className="lvl-1  active"><a href="#" className="site-nav lvl-1">fashion</a></li>
                                <li className="lvl-1 "><a href="#" className="site-nav lvl-1">summer</a></li>
                                <li className="lvl-1 "><a href="#" className="site-nav lvl-1">trend</a></li>
                                <li className="lvl-1 "><a href="#" className="site-nav lvl-1">winter</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar_widget">
                        <div className="widget-title"><h2>Recent Posts</h2></div>
                        <div className="widget-content">
                            <div className="list list-sidebar-products">
                                <div className="grid">
                                    <div className="grid__item">
                                        <div className="mini-list-item">
                                            <div className="mini-view_image">
                                                <a className="grid-view-item__link" href="#">
                                                    <img className="grid-view-item__image blur-up lazyload" data-src={img1} src={img1} alt />
                                                </a>
                                            </div>
                                            <div className="details"> <a className="grid-view-item__title" href="#">It's all about how you wear</a>
                                                <div className="grid-view-item__meta"><span className="article__date"> <time dateTime="2017-05-02T14:33:00Z">May 02, 2017</time></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid__item">
                                        <div className="mini-list-item">
                                            <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src={img2} src={img2} alt /></a> </div>
                                            <div className="details"> <a className="grid-view-item__title" href="#">27 Days of Spring Fashion Recap</a>
                                                <div className="grid-view-item__meta"><span className="article__date"> <time dateTime="2017-05-02T14:33:00Z">May 02, 2017</time> </span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid__item">
                                        <div className="mini-list-item">
                                            <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src={img3} src={img3} alt /></a> </div>
                                            <div className="details"> <a className="grid-view-item__title" href="#">How to Wear The Folds Trend Four Ways</a>
                                                <div className="grid-view-item__meta"><span className="article__date"> <time dateTime="2017-05-02T14:14:00Z">May 02, 2017</time> </span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid__item">
                                        <div className="mini-list-item">
                                            <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src={img4} src={img4} alt /></a> </div>
                                            <div className="details"> <a className="grid-view-item__title" href="#">Accusantium doloremque</a>
                                                <div className="grid-view-item__meta"><span className="article__date"> <time dateTime="2017-05-02T14:12:00Z">May 02, 2017</time> </span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar_widget">
                        <div className="widget-title"><h2>Recent Comments</h2></div>
                        <div className="widget-content">
                            <div className="list list-sidebar-products">
                                <div className="grid">
                                    <div className="grid__item">
                                        <div className="mini-list-item">
                                            <div className="mini-view_image">
                                                <a className="grid-view-item__link" href="#">
                                                    <img className="grid-view-item__image blur-up lazyload" data-src={cmntImg} src={cmntImg} alt />
                                                </a>
                                            </div>
                                            <div className="details">
                                                <div className="grid-view-item__meta"><strong>Tim</strong> On <a href="#">Lorem Ipsum</a></div>
                                                <a className="grid-view-item__title" href="#">On sait depuis longtemps que travailler avec</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid__item">
                                        <div className="mini-list-item">
                                            <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src={cmntImg} src={cmntImg} alt /></a> </div>
                                            <div className="details">
                                                <div className="grid-view-item__meta"><strong>Joy</strong> On <a href="#">Lorem Ipsum</a></div>
                                                <a className="grid-view-item__title" href="#">On sait depuis longtemps que travailler avec</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid__item">
                                        <div className="mini-list-item">
                                            <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src={cmntImg} src={cmntImg} alt /></a> </div>
                                            <div className="details">
                                                <div className="grid-view-item__meta"><strong>Jhon</strong> On <a href="#">Lorem Ipsum</a></div>
                                                <a className="grid-view-item__title" href="#">On sait depuis longtemps que travailler avec</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid__item">
                                        <div className="mini-list-item">
                                            <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src={cmntImg} src={cmntImg} alt /></a> </div>
                                            <div className="details">
                                                <div className="grid-view-item__meta"><strong>Tim</strong> On <a href="#">Lorem Ipsum</a></div>
                                                <a className="grid-view-item__title" href="#">On sait depuis longtemps que travailler avec</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar_widget tags-clouds">
                        <div className="widget-title"><h2>Tags Cloud</h2></div>
                        <div className="widget-content">
                            <ul>
                                <li><a href="#">Fashion</a></li>
                                <li><a href="#">Clothes</a></li>
                                <li><a href="#">Shoes</a></li>
                                <li><a href="#">Jeans</a></li>
                                <li><a href="#">Furniture</a></li>
                                <li><a href="#">Sun Glasses</a></li>
                                <li><a href="#">Winter</a></li>
                                <li><a href="#">Autoparts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Sidebar
