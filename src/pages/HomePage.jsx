import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; 
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="title">Create your CV</h1>
      <button className="start-button" onClick={() => navigate('/step1')}>
        Start the Form
      </button>
    </div>
  );
};

export default HomePage;
