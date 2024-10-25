import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './secondStep.css';

export default function SecondStep({ handleNext, handleBack, formData, handleChange }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.university) newErrors.university = 'Universiteti është i detyrueshëm.';
    if (!formData.major) newErrors.major = 'Dega është e detyrueshme.';
    if (!formData.duration || isNaN(formData.duration)) newErrors.duration = 'Kohezgjatja duhet të jetë një numër.';
    if (!formData.projects) newErrors.projects = 'Projekti është i detyrueshëm.';
    if (!formData.experience) newErrors.experience = 'Eksperienca është e detyrueshme.';
    if (!formData.skills) newErrors.skills = 'Aftësitë janë të detyrueshme.';
    return newErrors;
  };

  const handleNextStep = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      handleNext();
      navigate('/step3');
    } else {
      setErrors(formErrors);
    }
  };

  const handleBackStep = () => {
    handleBack();
    navigate('/step1');
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Universiteti</label>
      <input 
        type='text' 
        name='university' 
        value={formData.university || ''} 
        onChange={handleChange} 
      />
      {errors.university && <p className="error">{errors.university}</p>}

      <label>Dega</label>
      <input 
        type='text' 
        name='major' 
        value={formData.major || ''} 
        onChange={handleChange} 
      />
      {errors.major && <p className="error">{errors.major}</p>}

      <label>Kohezgjatja (vjet)</label>
      <input 
        type='number' 
        name='duration' 
        value={formData.duration || ''} 
        onChange={handleChange} 
      />
      {errors.duration && <p className="error">{errors.duration}</p>}

      <label>Projekte</label>
      <input 
        type='text' 
        name='projects' 
        value={formData.projects || ''} 
        onChange={handleChange} 
      />
      {errors.projects && <p className="error">{errors.projects}</p>}

      <label>Eksperienca</label>
      <input 
        type='text' 
        name='experience' 
        value={formData.experience || ''} 
        onChange={handleChange} 
      />
      {errors.experience && <p className="error">{errors.experience}</p>}

      <label>Aftësitë</label>
      <input 
        type='text' 
        name='skills' 
        value={formData.skills || ''} 
        onChange={handleChange} 
      />
      {errors.skills && <p className="error">{errors.skills}</p>}

      <button type='button' onClick={handleBackStep}>Back</button>
      <button type='button' onClick={handleNextStep}>Next</button>
    </form>
  );
}
