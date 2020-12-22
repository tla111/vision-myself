import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import './App.css';
import Home from './components/homescreen/Home';
import Dashboard from './components/dashboard/Dashboard';
import Goals from './components/vision/Goals';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/statistics'>
          <Dashboard />
        </Route>
        <Route exact path='/goals'>
          <Goals />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
