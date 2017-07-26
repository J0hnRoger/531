import React from 'react';
import { Redirect, Route } from 'react-router-dom';


// https://gist.github.com/fdidron/ebcf52dc1ed62ff7d80725854d631a9e
//Mock of an Auth method, can be replaced with an async call to the backend. Must return true or false
const isAuthenticated = () => false;

const PRIVATE_ROOT = '/Home';
const PUBLIC_ROOT = '/';

const AuthRoute = ({component, ...props}) => {
  const { isPrivate } = component;
  if (isAuthenticated()) {
    //User is Authenticated
    if (isPrivate === true) {
      //If the route is private the user may proceed.
      return <Route { ...props } component={ component } />;
    }
    else {
      //If the route is public, the user is redirected to the app's private root.
      return <Redirect to={ PRIVATE_ROOT } />;
    }
  }
  else {
    //User is not Authenticated
    if (isPrivate === true) {
      //If the route is private the user is redirected to the app's public root.
      return <Redirect to={ PUBLIC_ROOT } />;
    }
    else {
      //If the route is public, the user may proceed.
      return <Route { ...props } component={ component } />;
    }
  }
};

AuthRoute.propTypes = {
  component: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.func
  ])
};

export default AuthRoute;