import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Users from './pages/users';

function Routes() {

    return  (
        <Router>
            
            <Route exact path="/" Component={Home}/>
            <Route exact path="/usuarios" Component={Users}/>
            
        </Router>
    )

};

export default Routes