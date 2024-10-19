import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = ({ isLoggedIn }) => {
  console.log("HomePage is rendering. isLoggedIn:", isLoggedIn);
  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to Job Hunt!</h1>
      <p>Your gateway to finding the perfect job.</p>
      {/* Conditional rendering logic */}
      {!isLoggedIn ? (
        <div>
          <p>Please log in to explore job opportunities.</p>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
          <p className="mt-3">Not registered yet?</p>
          <Link to="/register">
            <button className="btn btn-outline-secondary">Register</button>
          </Link>
        </div>
      ) : (
        <div>
          <p>Browse available jobs now!</p>
          <Link to="/jobs">
            <button className="btn btn-success">Explore Jobs</button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default HomePage;
