import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './components/home/Home';
import Details from './components/details/Details';
import getStocks from './redux/slices/stocksSlices';

function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getStocks());
  }, []);

  return (
    <div className="App">
      <Router>
        <header className="App-header" />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
