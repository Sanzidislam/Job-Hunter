import React from 'react';
import { Link } from 'react-router-dom';
const Confirmation = () => {
  return (
    <div className="container mt-5 text-center">
      <h2>Congratulations!</h2>
      <p>You have successfully applied for the job.</p>
      <Link to="/">
            <button className="btn btn-outline-primary">Return to home</button>
          </Link>
    </div>
  );
};

export default Confirmation;
