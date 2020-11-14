import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Orders from './pages/Orders'
import Products from './pages/Products'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/products" exact component={Products}/>
                <Route path="/orders" exact component={Orders}/>
            </Switch>
        </BrowserRouter>
    )
}