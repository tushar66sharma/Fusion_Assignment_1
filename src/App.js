// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Module1Page from './pages/Module1Page';
import Module2Page from './pages/Module2Page';
import Module3Page from './pages/Module3Page';
import './App.css';

const App = () => {
  const [role, setRole] = useState('Student');
  const roles = ['Student', 'Teacher', 'Admin'];

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Navbar roles={roles} selectedRole={role} onRoleChange={setRole} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/module1" element={<Module1Page />} />
              <Route path="/module2" element={<Module2Page />} />
              <Route path="/module3" element={<Module3Page />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
