import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import { store } from './store';

import GlobalStyle from './styles/global';

// eslint-disable-next-line
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes />
      </Provider>

      <GlobalStyle />
    </Router>
  );
}

export default App;
