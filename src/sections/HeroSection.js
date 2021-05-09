import React from "react"
import img1 from "../images/slideshow-banners/home8-jewelry-banner1.jpg"
import img2 from "../images/slideshow-banners/home8-jewelry-banner2.jpg"
import HeroSlide from "../components/HeroSlide"
import Slider from "react-slick";

const data = [
  {
    img:img1,
    title:"Wedding bands",
    subTitle1:"Wedding bands will be one of the most tangible elements of your wedding",
    subTitle2:"day, and a lasting symbol of your love",
    position:'right'
  },
  {
    img:img2,
    title:"Shop New Collection",
    subTitle1:"From Hight to low, classNameic or modern. We have you",
    subTitle2:"covered",
    position:'left'
  }
]
const HeroSection = () => {
  const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true,
      autoplay:true
    };
  return(
   <div className="slideshow slideshow-wrapper pb-section">
        	<Slider {...settings}  className="home-slideshow">
          {data.map(slide => {
            const {img, title, subTitle1, subTitle2, position} = slide
            return(
              <HeroSlide img={img} title={title} subTitle1={subTitle1} subTitle2={subTitle2} position={position}/>
            )
          })}
          </Slider>
  </div>
  )
}
export default HeroSection