import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Home from './components/home/Home';
import Details from './components/details/Details';
import Navbar from './components/Navbar';
import getStocks from './redux/slices/stocksSlices';

function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getStocks());
  }, []);

  const state = useSelector((state) => state.homeReducer.stocks);
  const stocksList = state.slice(0, 13);

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {stocksList.map((stocks) => (
            <Route key={stocks.symbol} path={`/${stocks.symbol}`}>
              <Details />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
