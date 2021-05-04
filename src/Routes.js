import React from 'react'
import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";


function Routes() {
    
    return (
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} /> } />
          <Route exact path="/createAccount" component={Register}/> 
          <Route exact path="/login" component={Login}/> 
        </Switch>
    )
}

export default Routes
