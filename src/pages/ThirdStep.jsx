import React from 'react';
import { useNavigate } from 'react-router-dom';
import './thirdStep.css'
export default function ThirdStep({ handleBack, formData, handleChange, handleSaveData }) {
  const navigate = useNavigate();

  const handleSave = (e) => {
    handleSaveData(formData);
    navigate('/displayData'); 
  };

  const handleBackStep = () => {
    handleBack();
    navigate('/step2'); 
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Gjuha</label>
      <input 
        type='text' 
        name='language' 
        value={formData.language} 
        onChange={handleChange} 
        required 
      />
      
      <label>Njohurite e fituara</label>
      <input 
        type='text' 
        name='skillsAcquired' 
        value={formData.skillsAcquired} 
        onChange={handleChange} 
        required 
      />
      
      <label>Management Skills</label>
      <input 
        type='text' 
        name='managementSkills' 
        value={formData.managementSkills} 
        onChange={handleChange} 
        required 
      />
      
      <button type='button' onClick={handleBackStep}>Back</button>
      <button type='button' onClick={handleSave}>Save Data</button> 
    </form>
  );
}
