import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { AuthPage, MainPage, SettingsPage, StatPage } from '../pages';

export const routes = (isLogin: boolean) => {
  if (isLogin) {
    return (
      <Switch>
        <Route path="/main" exact>
          <MainPage />
        </Route>

        <Route path="/settings" component={SettingsPage} exact />
        <Route path="/stat" component={StatPage} exact />

        <Redirect to="/main" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/auth" component={AuthPage} exact />
      <Redirect to="/auth" />
    </Switch>
  );
};
