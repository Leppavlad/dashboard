import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { ThemeProvider } from './features/theme/ThemeProvider';

import { Auth } from './features/auth/Auth';

import { WorkInterface } from './partials/work-interface/Work-interface';

import { Overview } from './pages/overview/Overview';
import { Tickets } from './pages/tickets/Tickets';
import { Ideas } from './pages/ideas/Ideas';
import { Contacts } from './pages/contacts/Contacts';
import { Agents } from './pages/agents/Agents';
import { Articles } from './pages/articles/Articles';
import { Settings } from './pages/settings/Settings';
import { Subscription } from './pages/subscription/Subscription';

export function App() {
  const auth = {
    // userId: null,
    userId: 'null',
  };
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            {!auth.userId ? (
              <Redirect to="/auth" />
            ) : (
              <Redirect to="/overview" />
            )}
          </Route>
          <Route path="/auth">
            {!auth.userId ? <Auth /> : <Redirect to="/overview" />}
          </Route>
          <WorkInterface>
            <Route path="/overview">
              {!auth.userId ? <Redirect to="/auth" /> : <Overview />}
            </Route>
            <Route path="/tickets">
              {!auth.userId ? <Redirect to="/auth" /> : <Tickets />}
            </Route>
            <Route path="/ideas">
              {!auth.userId ? <Redirect to="/auth" /> : <Ideas />}
            </Route>
            <Route path="/contacts">
              {!auth.userId ? <Redirect to="/auth" /> : <Contacts />}
            </Route>
            <Route path="/agents">
              {!auth.userId ? <Redirect to="/auth" /> : <Agents />}
            </Route>
            <Route path="/articles">
              {!auth.userId ? <Redirect to="/auth" /> : <Articles />}
            </Route>
            <Route path="/settings">
              {!auth.userId ? <Redirect to="/auth" /> : <Settings />}
            </Route>
            <Route path="/subscription">
              {!auth.userId ? <Redirect to="/auth" /> : <Subscription />}
            </Route>
          </WorkInterface>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
