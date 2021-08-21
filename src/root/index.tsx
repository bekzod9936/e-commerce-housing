import React from 'react';
import { Container } from './style';
import { data } from '../utils/sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NavBar from '../components/NavBar';

const Root = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route>
            <NavBar />
          </Route>
        </Switch>
        <Switch>
          {data.map((v) => (
            <Route exact key={v.id} path={v.path} component={v.component} />
          ))}
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default Root;
