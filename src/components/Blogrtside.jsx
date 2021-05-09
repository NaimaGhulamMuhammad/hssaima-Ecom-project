import React from 'react'
import bp1 from '../images/blog/blog-post-1.jpg'
import bp2 from '../images/blog/blog-post-2.jpg'
import bp3 from '../images/blog/blog-post-3.jpg'
import bp4 from '../images/blog/blog-post-4.jpg'

import bps1 from '../images/blog/blog-post-sml-1.jpg'
import bps2 from '../images/blog/blog-post-sml-2.jpg'
import bps3 from '../images/blog/blog-post-sml-3.jpg'
import bps4 from '../images/blog/blog-post-sml-4.jpg'

import recentcomment from '../images/recent-commnet-img.jpg'
import mp from '../images/product-images/mini-product-img.jpg'
import mp1 from '../images/product-images/mini-product-img1.jpg'
import mp2 from '../images/product-images/mini-product-img2.jpg'
import mp3 from '../images/product-images/mini-product-img3.jpg'

const style ={
    position : "relative"
}

const Blogrtside = () => {
    return(
        <>
    <div id="page-content">
                <div className="page section-header text-center mb-0">
                    <div className="page-title">
                        <div className="wrapper"><h1 className="page-width">Blog Right Sidebar</h1></div>
                    </div>
                </div>  
        
         <div className="bredcrumbWrap">
            <div className="container breadcrumbs">
                <a href="index.html" title="Back to the home page">Home</a><span aria-hidden="true">›</span><span>Blog Right Sidebar</span>
            </div>
        </div>
        <div className="container">
        	<div className="row">
               
                <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
                	<div className="custom-search">
                        <form action="http://annimexweb.com/search" method="get" className="input-group search-header search" role="search" style={style}>
                            <input className="search-header__input search__input input-group__field" type="search" name="q" placeholder="Search" aria-label="Search" autocomplete="off"/>
                            <span className="input-group__btn"><button className="btnSearch" type="submit"> <i className="icon anm anm-search-l"></i> </button></span>
                        </form>
                    </div>
                    <div className="blog--list-view blog--grid-load-more">
                    	<div className="article"> 
                            
                             <a className="article_featured-image" href="#"><img className="blur-up lazyload" data-src={bp1} src={bp1} alt="It's all about how you wear"/></a> 
                            <h2 className="h3"><a href="blog-left-sidebar.html">It's all about how you wear</a></h2>
                            <ul className="publish-detail">                      
                                <li><i className="anm anm-user-al" aria-hidden="true"></i>  User</li>
                                <li><i className="icon anm anm-clock-r"></i> <time datetime="2017-05-02">May 02, 2017</time></li>
                                <li>
                                    <ul className="inline-list">   
                                        <li><i className="icon anm anm-comments-l"></i> <a href="#"> 0 comments</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="rte"> 
                                <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de......</p>
                                 </div>
                            <p><a href="#" className="btn btn-secondary btn--small">Read more <i className="fa fa-caret-right" aria-hidden="true"></i></a></p>
                        </div>
                        <div className="article"> 
                            
                             <a className="article_featured-image" href="#"><img className="blur-up lazyload" data-src={bp2} src={bp2} alt="27 Days of Spring Fashion Recap"/></a> 
                            <h2 className="h3"><a href="blog-right-sidebar.html">27 Days of Spring Fashion Recap</a></h2>
                            <ul className="publish-detail">                      
                                <li><i className="anm anm-user-al" aria-hidden="true"></i>  User</li>
                                <li><i className="icon anm anm-clock-r"></i> <time datetime="2017-05-02">May 02, 2017</time></li>
                                <li>
                                    <ul className="inline-list">   
                                        <li><i className="icon anm anm-comments-l"></i> <a href="#"> 0 comments</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="rte"> 
                                <p>Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire......</p>
                                 </div>
                            <p><a href="#" className="btn btn-secondary btn--small">Read more <i className="fa fa-caret-right" aria-hidden="true"></i></a></p>
                        </div>
                        <div className="article"> 
                            
                             <a className="article_featured-image" href="#"><img className="blur-up lazyload" data-src={bp3} src={bp3} alt="How to Wear The Folds Trend Four Ways"/></a> 
                            <h2 className="h3"><a href="#">How to Wear The Folds Trend Four Ways</a></h2>
                            <ul className="publish-detail">                      
                                <li><i className="anm anm-user-al" aria-hidden="true"></i>  User</li>
                                <li><i className="icon anm anm-clock-r"></i> <time datetime="2017-05-02">May 02, 2017</time></li>
                                <li>
                                    <ul className="inline-list">   
                                        <li><i className="icon anm anm-comments-l"></i> <a href="#"> 10 comments</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="rte"> 
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure......</p>
                                 </div>
                            <p><a href="#" className="btn btn-secondary btn--small">Read more <i className="fa fa-caret-right" aria-hidden="true"></i></a></p>
                        </div>
                        <div className="article"> 
                            
                             <a className="article_featured-image" href="#"><img className="blur-up lazyload" data-src={bp4} src={bp4} alt="Accusantium doloremque"/></a> 
                            <h2 className="h3"><a href="#">Accusantium doloremque</a></h2>
                            <ul className="publish-detail">                      
                                <li><i className="anm anm-user-al" aria-hidden="true"></i>  User</li>
                                <li><i className="icon anm anm-clock-r"></i> <time datetime="2017-05-02">May 02, 2017</time></li>
                                <li>
                                    <ul className="inline-list">   
                                        <li><i className="icon anm anm-comments-l"></i> <a href="#"> 3 comments</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="rte"> 
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat......</p>
                                 </div>
                            <p><a href="#" className="btn btn-secondary btn--small">Read more <i className="fa fa-caret-right" aria-hidden="true"></i></a></p>
                        </div>
                        <div className="loadmore-post">	
                            <a href="#;" className="btn loadMorepost">Load More</a>
                        </div>
                    </div>
                </div>

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
                                                <img className="grid-view-item__image blur-up lazyload" data-src={bps1} src={bps1} alt="bps1" />
                                            </a>
                                        </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">It's all about how you wear</a>
                                          <div className="grid-view-item__meta"><span className="article__date"> <time datetime="2017-05-02T14:33:00Z">May 02, 2017</time></span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src={bps2} src={bps2} alt="bps2" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">27 Days of Spring Fashion Recap</a>
                                          <div className="grid-view-item__meta"><span className="article__date"> <time datetime="2017-05-02T14:33:00Z">May 02, 2017</time> </span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src={bps3} src={bps3} alt="bps3" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">How to Wear The Folds Trend Four Ways</a>
                                          <div className="grid-view-item__meta"><span className="article__date"> <time datetime="2017-05-02T14:14:00Z">May 02, 2017</time> </span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src={bps4} src={bps4} alt="bps4" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Accusantium doloremque</a>
                                          <div className="grid-view-item__meta"><span className="article__date"> <time datetime="2017-05-02T14:12:00Z">May 02, 2017</time> </span></div>
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
                                                <img className="grid-view-item__image blur-up lazyload" data-src={recentcomment} src={recentcomment} alt="rc" />
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
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src={recentcomment} src={recentcomment} alt="" /></a> </div>
                                        <div className="details">
                                        	<div className="grid-view-item__meta"><strong>Joy</strong> On <a href="#">Lorem Ipsum</a></div>
                                        	<a className="grid-view-item__title" href="#">On sait depuis longtemps que travailler avec</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src={recentcomment} src={recentcomment} alt="" /></a> </div>
                                        <div className="details">
                                        	<div className="grid-view-item__meta"><strong>Jhon</strong> On <a href="#">Lorem Ipsum</a></div>
                                        	<a className="grid-view-item__title" href="#">On sait depuis longtemps que travailler avec</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src={recentcomment} src={recentcomment} alt="" /></a> </div>
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
						<div className="sidebar_widget">
                        	<div className="widget-title"><h2>Trending Now</h2></div>
							<div className="widget-content">
                                <div className="list list-sidebar-products">
                                  <div className="grid">
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image">
                                            <a className="grid-view-item__link" href="#">
                                                <img className="grid-view-item__image blur-up lazyload" data-src={mp} src={mp} alt="mp" />
                                            </a>
                                        </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Cena Skirt</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$173.60</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src={mp1} src={mp1} alt="mp1" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Block Button Up</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$378.00</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src={mp2} src={mp2} alt="mp2" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Balda Button Pant</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$278.60</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src={mp3} src={mp3} alt="mp3" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Border Dress in Black/Silver</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$228.00</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          	</div>
						</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>





        </>
    )
}

export default Blogrtside;