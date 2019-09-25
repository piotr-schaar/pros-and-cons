import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import routes from 'routes';
import { AppProvider } from 'context/App.context';
import SubjectView from 'views/SubjectView';

const Root = () => {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to={routes.subject} />} />
          <Route path={routes.subject} component={SubjectView} />
          <Route path={routes.subject} component={SubjectView} />
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default Root;
