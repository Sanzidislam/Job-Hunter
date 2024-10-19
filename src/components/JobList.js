import React from 'react';
import { Link } from 'react-router-dom';

const JobList = () => {
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Google' },
    { id: 2, title: 'Product Manager', company: 'Amazon' },
    // Add more jobs here
  ];

  return (
    <div className="container mt-5">
      <h2>Job Listings</h2>
      <ul className="list-group">
        {jobs.map((job) => (
          <li key={job.id} className="list-group-item">
            <h5>{job.title} - {job.company}</h5>
            <Link to={`/apply/${job.id}`}>
              <button className="btn btn-primary">Apply</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
