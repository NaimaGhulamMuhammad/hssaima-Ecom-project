import React from 'react';
import Topbar from "../components/Topbar"
import Header from "../components/header/index"
import MobileMenu from "../components/MobileMenu"
import SearchForm from "../components/SearchForm"
import Slider from "../sections/Slider"

function Home() {
  return (
    <div class="pageWrapper">
    <SearchForm />
    <Topbar />
    <Header />
    <MobileMenu />
    <div id="page-content">
      <Slider />
    </div>
    </div>
  );
}

export default Home;
