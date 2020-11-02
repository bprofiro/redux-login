import React from 'react';
<<<<<<< Updated upstream
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
=======
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import { store } from './store';
>>>>>>> Stashed changes

import GlobalStyle from './styles/global';

// eslint-disable-next-line
function App() {
  return (
<<<<<<< Updated upstream
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
=======
    <Router>
      <Provider store={store}>
        <Routes />
      </Provider>

      <GlobalStyle />
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
