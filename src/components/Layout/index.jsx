import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../Home";
import ShowArticle from "../ShowArticle";
import Navbar from "../Navbar"

const Layout = () => {

  return (
    <Router basename="/">
        <div className="nav"><Navbar/></div>
      <Switch> 
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/articles/:articleId" component={ShowArticle}/>
      </Switch> 
    </Router>
  )
}

export default Layout