import React from "react";
import { Switch, Route} from "react-router-dom";

import Home from './pages/Home';
import Listing from './pages/Listing';
import Details from './pages/Details';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/listing" component={Listing} />
            <Route path="/details/:id" component={Details} />
        </Switch>
    )
}