import React from 'react';
import { Router, Route } from 'dva/router';
import Home from './routes/Home.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path='/' component={Home} />
    </Router>
  );
}

export default RouterConfig;
