import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({id}) => {
  
  return (
    <div>
      <nav className="layout_nav">
        <Link to="/step1">Personal Details</Link>
        <Link to="/step2">Skills & Experience</Link> 
        <Link to="/step3">Education & Projects</Link>
        <Link to="/displayData">Data</Link>
        <Link to={`/detail/${id}`} className="active-link">Detail</Link>
      </nav>
    </div>
  );
};

export default Header;