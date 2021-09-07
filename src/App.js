import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './components/home/Home';
import getStocks from './redux/slices/stocksSlices';

function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getStocks());
  }, []);

  return (
    <div className="App">
      <header className="App-header" />
      <Home />
    </div>
  );
}

export default App;
