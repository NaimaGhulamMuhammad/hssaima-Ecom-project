import React from 'react'
import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home";


function Routes() {
    
    return (
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} /> } />
          <Route exact path="/about" render={(props) => <Home {...props} /> } /> 
        </Switch>
    )
}

export default Routes
