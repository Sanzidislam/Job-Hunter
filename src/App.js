import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import JobList from './components/JobList';
import JobApply from './components/JobApply';
import Confirmation from './components/Confirmation';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';  // Add this import

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />  {/* Add the register route */}
        <Route path="/jobs" element={isLoggedIn ? <JobList /> : <HomePage />} />
        <Route path="/apply/:jobId" element={isLoggedIn ? <JobApply /> : <HomePage />} />
        <Route path="/confirmation" element={isLoggedIn ? <Confirmation /> : <HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
