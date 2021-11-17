import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminAddEditProject from '../views/AdminAddEditProject';
import AdminEditAbout from '../views/AdminEditAbout';
import AdminEditContact from '../views/AdminEditContact';
import AdminAddTech from '../views/AdminAddTech';
import ProjectCardForm from '../components/forms/ProjectCardForm';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  if (user === null) return user;

  const routeChecker = (burrito) => (user?.isAdmin ? (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...burrito} user={user} />
  ) : (
    <Redirect to={{ pathname: '/', state: { from: burrito.location } }} />
  ));
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  user: PropTypes.shape(PropTypes.obj),
};

PrivateRoute.defaultProps = {
  user: null,
};

export default function AdminRoutes({ user }) {
  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          path="/edit/project/:projKey"
          user={user}
          component={() => <AdminAddEditProject user={user} />}
        />
        <PrivateRoute
          exact
          path="/editabout/:fbKey"
          user={user}
          component={() => <AdminEditAbout user={user} />}
        />
        <PrivateRoute
          exact
          path="/edit/contact/:firebaseKey"
          user={user}
          component={() => <AdminEditContact user={user} />}
        />
        <PrivateRoute
          exact
          path="/add-tech"
          user={user}
          component={() => <AdminAddTech user={user} />}
        />
        <PrivateRoute
          exact
          path="/addproject"
          user={user}
          component={() => <ProjectCardForm obj={{}} user={user} />}
        />
      </Switch>
    </div>
  );
}

AdminRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AdminRoutes.defaultProps = {
  user: null,
};
