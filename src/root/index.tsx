import React from 'react';
import { Container } from './style';
import { data } from '../utils/sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <Container>
        {data.map((v) => (
          <Link key={v.id} to={v.path}>
            {v.title}
          </Link>
        ))}
        <Switch>
          {data.map((v) => (
            <Route key={v.id} path={v.path} component={v.component} />
          ))}
          <Route></Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default Root;
