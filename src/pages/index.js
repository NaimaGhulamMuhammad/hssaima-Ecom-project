import React from 'react';
import Routes from "../Routes"
import SearchForm from "../components/SearchForm"
import Topbar from "../components/Topbar"
import Header from "../components/header"
import MobileMenu from "../components/header/MobileMenu"
import Footer from "../sections/Footer"
function Pages() {
  return (
    <>
    <SearchForm />
    <Topbar />
    <Header />
    <MobileMenu />
    <div id="page-content">
    <Routes />
    </div>
    <Footer />
    </>
  );
}

export default Pages;
