import React, { Props } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import OrphanageForm from './pages/CreateOrphanage/OrphanageForm';
import FinishCreateOrphanage from './pages/CreateOrphanage/FinishCreateOrphanage';
import Login from './pages/Authentication/Login';

/* eslint-disable */
const PrivateRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) => (
    isAuthenticated()
      ? React.createElement(component, props)
      : <Redirect to={{ pathname: '/login' }} />
  );
  return <Route {...rest} render={routeComponent} />;
};
/* eslint-enable */

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />

        <PrivateRoute path="/app" exact component={OrphanagesMap} />
        <PrivateRoute path="/orphanage/create" exact component={OrphanageForm} />
        <PrivateRoute path="/orphanage/create/finish" component={FinishCreateOrphanage} />
        <PrivateRoute path="/orphanage/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
