import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import Login from './components/Login';
import Details from './components/Details';
import Header from './components/Header';
import Home from './components/Home';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/details" element={<Details/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
