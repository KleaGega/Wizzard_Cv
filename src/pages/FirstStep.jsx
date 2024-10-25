import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './firstStep.css';

export default function FirstStep({ handleNext, formData, handleChange }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false); 

  useEffect(() => {
    if (location.state && location.state.formData) {
      const { formData } = location.state;
      const fields = ['firstName', 'surname', 'id', 'age', 'email', 'password', 'gender'];
      fields.forEach(field => {
        handleChange({
          target: {
            name: field,
            value: formData[field] || "", 
          },
        });
      });
    }
  }, [location.state, handleChange]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'Emri është i detyrueshëm.';
    if (!formData.surname) newErrors.surname = 'Mbiemri është i detyrueshëm.';
    if (!formData.id) newErrors.id = 'ID është e detyrueshme.';
    if (!formData.age || isNaN(formData.age)) newErrors.age = 'Duhet një moshë valide.';
    if (!formData.email) newErrors.email = 'Email është i detyrueshëm.';
    if (!formData.password) newErrors.password = 'Fjalëkalimi është i detyrueshëm.';
    if (!formData.gender) newErrors.gender = 'Gjinia është e detyrueshme.';
    return newErrors;
  };

  const handleNextStep = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      handleNext(); 
      navigate('/step2'); 
    } else {
      setErrors(formErrors);
    }
  };

  const handleEdit = () => {
    setIsEditing(true); 
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Emri</label>
      <input 
        type='text' 
        name='firstName' 
        value={formData.firstName || ""} 
        onChange={handleChange} 
        disabled={!isEditing}
      />
      {errors.firstName && <p className="error">{errors.firstName}</p>}

      <label>Mbiemri</label>
      <input 
        type='text' 
        name='surname' 
        value={formData.surname || ""} 
        onChange={handleChange} 
        disabled={!isEditing} 
      />
      {errors.surname && <p className="error">{errors.surname}</p>}

      <label>ID</label>
      <input 
        type='text' 
        name='id' 
        value={formData.id || ""} 
        onChange={handleChange} 
        disabled={!isEditing} 
      />
      {errors.id && <p className="error">{errors.id}</p>}

      <label>Mosha</label>
      <input 
        type='text' 
        name='age' 
        value={formData.age || ""} 
        onChange={handleChange} 
        disabled={!isEditing} 
      />
      {errors.age && <p className="error">{errors.age}</p>}

      <label>Email</label>
      <input 
        type='email' 
        name='email' 
        value={formData.email || ""} 
        onChange={handleChange} 
        disabled={!isEditing} 
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Fjalëkalimi</label>
      <input 
        type="password" 
        name="password" 
        autoComplete="current-password" 
        value={formData.password || ""} 
        onChange={handleChange}  
        disabled={!isEditing} 
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <div className="gender-group">
        <label>Gjinia:</label>
        <input 
          type='radio' 
          name='gender' 
          value='F' 
          checked={formData.gender === 'F'} 
          onChange={handleChange} 
          disabled={!isEditing} 
        /> F
        <input 
          type='radio' 
          name='gender' 
          value='M' 
          checked={formData.gender === 'M'} 
          onChange={handleChange} 
          disabled={!isEditing} 
        /> M
        {errors.gender && <p className="error">{errors.gender}</p>}
      </div>

      <button type='button' onClick={handleEdit}>Edit</button>
      <button type='button' onClick={handleNextStep}>Ruaj</button>
    </form>
  );
}
