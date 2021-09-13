import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./views/Home'));

import './global.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
      <Footer className="footer" />
    </Router>
  );
};

export default App;
