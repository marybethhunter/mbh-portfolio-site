import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminAddEditProject from '../views/AdminAddEditProject';
import AdminEditAbout from '../views/AdminEditAbout';
import AdminEditContact from '../views/AdminEditContact';

export default function NonadminRoutes() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/edit/project/:key"
          component={AdminAddEditProject}
        />
        <Route exact path="/edit/about/:key" component={AdminEditAbout} />
        <Route exact path="/edit/contact/:key" component={AdminEditContact} />
      </Switch>
    </div>
  );
}
