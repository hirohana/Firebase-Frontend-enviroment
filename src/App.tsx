import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from './reducks/counter/index';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'browserHistory';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';

interface AppProps {
  test?: number;
}

class _App extends React.Component<AppProps> {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/page1" exact component={Page1} />
              <Route path="/page2" exact component={Page2} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ test }: StoreState): { test: number } => {
  return { test };
};

export const App = connect(mapStateToProps, null)(_App);
