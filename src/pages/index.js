import React from 'react';
import Routes from "../Routes"
import SearchForm from "../components/SearchForm"
import Topbar from "../components/Topbar"
import Header from "../components/header"
import MobileMenu from "../components/MobileMenu"
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
    </>
  );
}

export default Pages;
