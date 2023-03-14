import React from 'react';
import "./App.css";
import Header from './components/Header';
import Home from './components/Home';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
    </div>
  );
}

export default App;
