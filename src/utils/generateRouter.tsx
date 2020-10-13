//路由嵌套
import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const generateRouter = (route) => {
  if (route.redirect) {
    return (
      <Redirect from={route.path} to={route.redirect} exact={route.exact} strict={route.strict} />
    );
  }
  return (
    <Route path={route.path} exact={route.exact || false} render={(props) => <route.component />} />
  );
};

export default generateRouter;
