import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import routes from 'routes';
import { AppProvider } from 'context/App.context';
import SubjectView from 'views/Subject.view';
import MainView from 'views/Main.view';
import MainTemplate from 'templates/Main.template';
import WinnerView from 'views/Winner.view'

const Root = () => {
  return (
    <AppProvider>
      <Router>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} render={() => <Redirect to={routes.subject} />} />
            <Route path={routes.subject} component={SubjectView} />
            <Route path={routes.main} component={MainView} />
            <Route path={routes.winner} component={WinnerView} />
          </Switch>
        </MainTemplate>
      </Router>
    </AppProvider>
  );
};

export default Root;
