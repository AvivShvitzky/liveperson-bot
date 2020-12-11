import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect
} from 'react-router-dom';

import Countries from './pages/countries/Countries'

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
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default Router

