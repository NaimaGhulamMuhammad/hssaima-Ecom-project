import React from "react"

const HeroSlide = ({img,title, subTitle1, subTitle2, position}) => {
  return(
    <div className="slide">
                	<div className="blur-up lazyload">
                        <img className="blur-up lazyload" data-src={img} src={img} alt={title} title={title} />
                        <div className="slideshow__text-wrap slideshow__overlay classNameic middle">
                            <div className="slideshow__text-content middle">
                            	<div className="container">
                                    <div className={`wrap-caption ${position}`}>
                                        <h2 className="h1 mega-title slideshow__title">{title}</h2>
                                        <span className="mega-subtitle slideshow__subtitle">{subTitle1}<br />{subTitle2}</span>
                                        <span className="btn">Shop now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}
export default HeroSlide