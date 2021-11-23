import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import Projects from '../views/Projects';
import Tech from '../views/Tech';
import Details from '../views/Details';

export default function NonadminRoutes({ user }) {
  const location = useLocation();
  return (
    <>
      <TransitionGroup>
        <CSSTransition timeout={50} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route exact path="/" component={() => <Home user={user} />} />
            <Route
              exact
              path="/about"
              component={() => <About user={user} />}
            />
            <Route
              exact
              path="/contact"
              component={() => <Contact user={user} />}
            />
            <Route
              exact
              path="/projects"
              component={() => <Projects user={user} />}
            />
            <Route exact path="/tech" component={() => <Tech user={user} />} />
            <Route
              exact
              path="/details/:firebaseKey"
              component={() => <Details user={user} />}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

NonadminRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

NonadminRoutes.defaultProps = {
  user: null,
};
