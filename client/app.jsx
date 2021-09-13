import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Header';

const Home = lazy(() => import('./components/Home'));

import './global.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer className="footer" />
    </Router>
  );
};

export default App;
