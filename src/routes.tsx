import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from 'pages/Authentication/Login';
import ForgotPassword from 'pages/Authentication/ForgotPassword';
import ResetPassword from 'pages/Authentication/ResetPassword';

import DashboardList from 'pages/Dashboard/DashboardList';
import DashboardPending from 'pages/Dashboard/DashboardPending';

import Landing from 'pages/Landing';
import OrphanagesMap from 'pages/OrphanagesMap';

import CreateOrphanageForm from 'pages/CreateOrphanage/CreateOrphanageForm';
import OrphanageDetails from 'pages/OrphanageDetails';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/login/forgotPassword" component={ForgotPassword} />
        <Route path="/login/resetPassword" component={ResetPassword} />

        <Route path="/dashboard" exact component={DashboardList} />
        <Route path="/dashboard/list" component={DashboardList} />
        <Route path="/dashboard/pending" component={DashboardPending} />

        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanage/create" exact component={CreateOrphanageForm} />
        <Route path="/orphanage/:id" component={OrphanageDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
