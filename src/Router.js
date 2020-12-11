import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect
} from 'react-router-dom';

import Countries from './pages/countries/Countries'
import Country from './pages/country/Country'

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/">
          <Redirect to="/countries" />
        </Route>
        <Route exact default path="/countries"
          component={Countries}
        />
        <Route exact default path="/country/:name"
          component={Country}
        />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default Router

