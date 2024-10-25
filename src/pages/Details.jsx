import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './details.css'
const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state?.data;
  const goBack =()=>{
    navigate("/")
  }

  if (!data) {
    
    return (
      <div>
        <h1>Details</h1>
        <p>No details available. Please go back and select an item.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className='details-container'>
      <h1  className="details-title">Details</h1>
      <h2 className="details-name">{data.firstName} {data.surname}</h2>
      <div className="details-info">
      <p><strong>Age:</strong> {data.age}</p>
      <p><strong>Id:</strong> {data.id}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Gender:</strong> {data.gender}</p>
      <p><strong>University:</strong> {data.university}</p>
      <p><strong>Major:</strong> {data.major}</p>
      <p><strong>Projects:</strong> {data.projects}</p>
      <p><strong>Duration:</strong> {data.duration}</p>
      <p><strong>Experience:</strong> {data.experience}</p>
      <p><strong>Skills:</strong> {data.skills}</p>
      <p><strong>Language:</strong> {data.language}</p>
      <p><strong>Management Skills:</strong> {data.managementSkills}</p>
      <button onClick={goBack}>Go to start</button>
      </div>
    </div>
  );
};

export default Details;
