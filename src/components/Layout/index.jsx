import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../Home";

const Layout = () => {

  return (
    <Router basename="/">
      <Switch> 
        <Route  exact path="/" component={Home}/>
      </Switch> 
    </Router>
  )
}

export default Layout