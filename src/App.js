import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Login from './components/Login';
import Details from './components/Details';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/detail/:id" element={<Details/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
