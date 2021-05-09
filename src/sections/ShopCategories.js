import React from 'react';

import img1 from '../images/collection/home11-grid-sm-banner1.jpg'
import img2 from '../images/collection/home11-grid-sm-banner2.jpg'
import img3 from '../images/collection/home11-grid-sm-banner3.jpg'
import img4 from '../images/collection/home11-grid-sm-banner4.jpg'
import img5 from '../images/collection/home11-grid-sm-banner5.jpg'
import img6 from '../images/collection/home11-grid-sm-banner6.jpg'
import img7 from '../images/collection/home11-grid-sm-banner7.jpg'
import img8 from '../images/collection/home11-grid-sm-banner8.jpg'
import img9 from '../images/collection/home11-grid-sm-banner9.jpg'
import img10 from '../images/collection/home11-grid-sm-banner10.jpg'

const Data = [
    {
        id:1,
        img:img1,
        title1:'Shop',
        title2:'Halloween Look'
    },
    {
        id:2,
        img:img2,
        title1:'Shop',
        title2:'Heeled Boots'
    },
    {
        id:3,
        img:img3,
        title1:'Shop Cool',
        title2:'Caps'
    },
    {
        id:4,
        img:img4,
        title1:'Hot Summer Collection',
        title2:'Sun Glasses, Shoes and more'
    },
    {
        id:5,
        img:img5,
        title1:'All the Shiniest',
        title2:'Shop Jewelry'
    },
    {
        id:6,
        img:img6,
        title1:'Every Little Things',
        title2:'Shop Cosmetics'
    },
    {
        id:7,
        img:img7,
        title1:'Elevate Every Look',
        title2:'Shop Men\'s Clothing'
    },
    {
        id:8,
        img:img8,
        title1:'Shape Your look',
        title2:'Shop Now'
    },
    {
        id:9,
        img:img9,
        title1:'Shop',
        title2:'Kids'
    },
    {
        id:10,
        img:img10,
        title1:'Shop',
        title2:'Kids Accessories'
    }
]
function ShopCategories() {
  return (
    <>
    <div class="section imgBanners pb-0">
        	<div class="imgBnrOuter">
            	<div class="container-fluid">
                	<div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="section-header text-center">
                                <h2 class="h2">SHOP BY Category</h2>
                                <p>Shop the Nicest Deals on Best Prices in all category</p>
                            </div>
                            
                        </div>
                    </div>    
                	<div class="row img-grid-banner1">
                    	<div class="col-12 col-sm-12 col-md-12 col-lg-6 image-banner-1">
                        	<div class="inner topright">
                            	<a href="#">	
                               		<img data-src={Data[0].img} src={Data[0].img} alt={Data[0].title2} title={Data[0].title2} class="blur-up lazyload" />
                                    <div class="ttl">
                                    {Data[0].title1} <h5>{Data[0].title2}</h5>
                                    </div>
                                </a>
                             </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-6 image-banner-2">
                        	<div class="row">
                            	<div class="col-12 col-sm-6 col-md-6 col-lg-6 image-banner-3">
                                	<div class="inner topright">
                                        <a href="#">	
                                            <img data-src={Data[1].img} src={Data[0].img} alt={Data[1].title2} title={Data[1].title2} class="blur-up lazyload" />
                                            <div class="ttl">
                                            {Data[1].title1} <h5>{Data[1].title2}</h5>
                                            </div>
                                        </a>
                                    </div>
                            	</div>
                                <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                                	<div class="inner btmleft">
                                        <a href="#">	
                                            <img data-src={Data[2].img} src={Data[2].img} alt={Data[2].title2} title={Data[2].title2} class="blur-up lazyload" />
                                            <div class="ttl">
                                            {Data[2].title1} <h5>{Data[2].title2}</h5>
                                            </div>
                                        </a>
                                    </div>
                            	</div>   
                            </div>
                            <div class="row">
                            	<div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-4">
                                	<div class="inner center">
                                        <a href="#">	
                                            <img data-src={Data[3].img} src={Data[3].img} alt={Data[3].title2} title={Data[3].title2} class="blur-up lazyload" />
                                            <div class="ttl">
                                            {Data[3].title1} <h5>{Data[3].title2}</h5>
                                            </div>
                                        </a>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row img-grid-banner2">
                    	<div class="col-12 col-sm-12 col-md-12 col-lg-5">
                            <div class="inner topleft">
                                <a href="#">	
                                    <img data-src={Data[4].img} src={Data[4].img} alt={Data[4].title2} title={Data[4].title2} class="blur-up lazyload" />
                                    <div class="ttl">
                                    {Data[4].title1} <h5>{Data[4].title2}</h5>
                                    </div>
                                </a>
                             </div>
                         
                            <div class="inner topright">
                                <a href="#">	
                                    <img data-src={Data[5].img} src={Data[5].img} alt={Data[5].title2} title={Data[5].title2} class="blur-up lazyload" />
                                    <div class="ttl">
                                    {Data[5].title1} <h5>{Data[5].title2}</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-7 image-banner-2">
                            <div class="inner topleft">
                                <a href="#">	
                                    <img data-src={Data[6].img} src={Data[6].img} alt={Data[6].title2} title={Data[6].title2} class="blur-up lazyload" />
                                    <div class="ttl">
                                    {Data[6].title1} <h5>{Data[6].title2}</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row img-grid-banner3">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-6 image-banner-2">
                            <div class="inner center">
                                <a href="#">	
                                    <img data-src={Data[7].img} src={Data[7].img} alt={Data[7].title2} title={Data[7].title2} class="blur-up lazyload" />
                                    <div class="ttl text-center">
                                    {Data[7].title1} <h5>{Data[7].title2}</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div class="inner center">
                                <a href="#">	
                                    <img data-src={Data[8].img} src={Data[8].img} alt={Data[8].title2} title={Data[8].title2} class="blur-up lazyload" />
                                    <div class="ttl">{Data[8].title1} {Data[8].title2}</div>
                                </a>
                             </div>
                         
                            <div class="inner topright">
                                <a href="#">	
                                    <img data-src={Data[9].img} src={Data[9].img} alt={Data[9].title2} title={Data[9].title2} class="blur-up lazyload" />
                                    <div class="ttl">
                                    {Data[9].title1} <h5>{Data[9].title2}</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>
  );
}

export default ShopCategories;
