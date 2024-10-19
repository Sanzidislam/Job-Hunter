// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import JobList from './components/JobList';
import JobApply from './components/JobApply';
import Confirmation from './components/Confirmation';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
  <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
  <Route path="/Job-Hunter" element={<HomePage isLoggedIn={isLoggedIn} />} />
  <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
  <Route path="/register" element={<Register />} />
  <Route path="/jobs" element={isLoggedIn ? <JobList /> : <HomePage />} />
  <Route path="/apply/:jobId" element={isLoggedIn ? <JobApply /> : <HomePage />} />
  <Route path="/confirmation" element={isLoggedIn ? <Confirmation /> : <HomePage />} />
</Routes>
    </Router>
  );
}

export default App;