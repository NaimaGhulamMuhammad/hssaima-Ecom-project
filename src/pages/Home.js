import React from 'react';
import Slider from "../sections/Slider"
import ShopCategories from "../sections/ShopCategories"
import HeroSection from "../sections/HeroSection"
import NewArrivals from "../sections/NewArrivals.js"
function Home() {
  return (
   <>
    <HeroSection />
    <ShopCategories />
    <NewArrivals />
    </>
  );
}

export default Home;
