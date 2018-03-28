import React from 'react';
import { Router, Route } from 'dva/router';
import Home from './routes/Home.js';
import IndexPage from './routes/IndexPage.js';
import Item from './routes/Item.js';
import Order from './routes/Order.js';
import stepper from './routes/stepper.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path='/' component={Home} />
      <Route path='/item' component={Item} />
      <Route path='/order' component={Order} />
      <Route path='/se' component={stepper} />
    </Router>
  );
}

export default RouterConfig;
