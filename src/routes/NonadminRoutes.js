import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import Projects from '../views/Projects';
import Tech from '../views/Tech';
import Details from '../views/Details';

export default function NonadminRoutes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/tech" component={Tech} />
        <Route exact path="/details/:key" component={Details} />
      </Switch>
    </div>
  );
}
