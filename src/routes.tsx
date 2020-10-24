import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from 'pages/Landing';
import OrphanagesMap from 'pages/OrphanagesMap';

import Login from 'pages/Authentication/Login';
import ForgotPassword from 'pages/Authentication/ForgotPassword';
import ResetPassword from 'pages/Authentication/ResetPassword';

import DashboardList from 'pages/Dashboard/DashboardList';
import DashboardPending from 'pages/Dashboard/DashboardPending';
import DashboardDelete from 'pages/Dashboard/DashboardDelete';

import OrphanageDetails from 'pages/OrphanageDetails';
import CreateOrphanage from 'pages/CreateOrphanage/CreateOrphanage';
import FinishCreate from 'pages/CreateOrphanage/FinishCreate';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />

        <Route path="/login" exact component={Login} />
        <Route path="/login/forgotPassword" component={ForgotPassword} />
        <Route path="/login/resetPassword" component={ResetPassword} />

        <Route path="/dashboard" exact component={DashboardList} />
        <Route path="/dashboard/list" component={DashboardList} />
        <Route path="/dashboard/pending" component={DashboardPending} />
        <Route path="/dashboard/delete" component={DashboardDelete} />

        <Route path="/orphanage/create" exact component={CreateOrphanage} />
        <Route path="/orphanage/create/finish" component={FinishCreate} />
        <Route path="/orphanage/:id" component={OrphanageDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
