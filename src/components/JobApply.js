import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const JobApply = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    navigate('/confirmation');
  };

  return (
    <div className="container mt-5">
      <h2>Apply for Job ID: {jobId}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <button type="submit" className="btn btn-primary">Apply</button>
      </form>
    </div>
  );
};

export default JobApply;
