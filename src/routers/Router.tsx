import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from 'components/pages/Main';
import Page1 from 'components/pages/Page1';

const Router = () => {
  return (
    <Switch>
      <Route exact path="(/)?" component={Main} />
      <Route path="/page1" component={Page1} />
    </Switch>
  );
};

export default Router;
