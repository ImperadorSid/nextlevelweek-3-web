import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import OrphanageForm from './pages/CreateOrphanage/OrphanageForm';
import FinishCreateOrphanage from './pages/CreateOrphanage/FinishCreateOrphanage';
import Login from './pages/Authentication/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/app" exact component={OrphanagesMap} />

        <Route path="/orphanage/create" exact component={OrphanageForm} />
        <Route path="/orphanage/create/finish" component={FinishCreateOrphanage} />
        <Route path="/orphanage/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
