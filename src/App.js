import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './Components/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>} />
      </Routes>
    </Router>
  );
}

export default App;
