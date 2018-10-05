'use strict';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import React from 'react';
import cookies from 'js-cookie';

import BaseContainer from './containers/base';
import LoginContainer from './containers/login';
import DashboardContainer from './containers/dashboard';
import Page404Container from './containers/page-404';



//Utils
import * as AuthUtils from './utils/auth';

function PrivateRoute ({component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => (AuthUtils.isAuthCookiePresent())
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  );
}



const routes = (
    <Switch>
      <BaseContainer>
        <Switch>
          {/*Unauthenticated routes*/}
          <Route exact path="/login" component={LoginContainer}/>

          {/*Authenticated routes*/}
          <PrivateRoute exact path="/" component={DashboardContainer} />

          {/*404 Page route*/}
          <PrivateRoute path="/*" component={DashboardContainer}/>
        </Switch>
      </BaseContainer>
    </Switch>
);


export default function configureRoutes() {
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}
