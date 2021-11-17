import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminAddEditProject from '../views/AdminAddEditProject';
import AdminEditAbout from '../views/AdminEditAbout';
import AdminEditContact from '../views/AdminEditContact';
import AdminAddTech from '../views/AdminAddTech';
import ProjectCardForm from '../components/forms/ProjectCardForm';

export default function NonadminRoutes() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/edit/project/:projKey"
          component={AdminAddEditProject}
        />
        <Route exact path="/editabout/:fbKey" component={AdminEditAbout} />
        <Route
          exact
          path="/edit/contact/:firebaseKey"
          component={AdminEditContact}
        />
        <Route exact path="/add-tech" component={AdminAddTech} />
        <Route exact path="/addproject">
          <ProjectCardForm obj={{}} />
        </Route>
      </Switch>
    </div>
  );
}
