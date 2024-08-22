// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Module1 from './pages/module1';
import Module2 from './pages/module2';
import Module3 from './pages/module3';
import './App.css';

const App = () => {

  return (
    <Router>
      <div className="app">
        <div className="main-content">
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/module1" element={<Module1 />} />
              <Route path="/module2" element={<Module2 />} />
              <Route path="/module3" element={<Module3 />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
