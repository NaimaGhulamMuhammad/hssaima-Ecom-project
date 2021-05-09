import React from 'react'
import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import WishList from "./pages/WishList";
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import Faqs from './pages/Faqs';
import Blog from './pages/Blog';
import ShopLeftSidebar from './pages/ShopLeftSidebar';
import ProductWithLeftThumb from "./pages/ProductWithLeftThumb";
import Blogdetail from "./pages/Blogdetail"
import AboutUs from './pages/AboutUs'


function Routes() {
    
    return (
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} /> } />
          <Route exact path="/createAccount" component={Register}/> 
          <Route exact path="/login" component={Login}/> 
          <Route exact path="/wishlist" component={WishList}/> 
          <Route exact path="/cart" render={(props) => <ShoppingCart {...props} /> } />
          <Route exact path="/products" render={(props) => <ProductWithLeftThumb {...props} /> }/>
          <Route exact path="/checkout" component={Checkout}/>
          <Route exact path="/Blog" component={Blog}/> 
          <Route exact path="/faqs" component={Faqs}/>
          <Route exact path="/blogDetail" component={Blogdetail}/> 
           <Route exact path="/Aboutus" component={AboutUs}/> 
          <Route exact path="/shopleft" render={(props) => <ShopLeftSidebar {...props} /> } />
        </Switch>
    )
}

export default Routes
