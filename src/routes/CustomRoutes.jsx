
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FirstStep from '../pages/FirstStep';
import SecondStep from '../pages/SecondStep';
import ThirdStep from '../pages/ThirdStep';
import DisplayData from '../pages/DisplayData';
import StepperComponent from '../pages/StepperComponent';
import { useState,useEffect} from 'react';
import Details from '../pages/Details';

const CustomRoutes = ({ formData, handleChange, setFormData }) => {
  const steps = ['First Step', 'Second Step', 'Third Step'];
  const [activeStep, setActiveStep] = useState(0);
  const [formDataArray, setFormDataArray] = useState([]);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      const nextStep = activeStep + 1;
      setActiveStep(nextStep);
      navigate(`/step${nextStep + 1}`);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      const prevStep = activeStep - 1;
      setActiveStep(prevStep);
      navigate(`/step${prevStep + 1}`); 
    }
  };

  const handleSaveData = (data) => {
    setFormDataArray((prevArray) => [...prevArray, data]);
  };

 useEffect(() => {
    const path = window.location.pathname;
    const stepMatch = path.match(/step(\d+)/);
    if (stepMatch) {
      const stepIndex = parseInt(stepMatch[1], 10) - 1;
      setActiveStep(stepIndex);
    }
  }, []);

  return (
    <div>
      <StepperComponent activeStep={activeStep} steps={steps} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/step1" element={<FirstStep handleNext={handleNext} formData={formData} handleChange={handleChange} />} />
        <Route path="/step2" element={<SecondStep handleNext={handleNext} handleBack={handleBack} formData={formData} handleChange={handleChange} />} />
        <Route path="/step3" element={<ThirdStep handleBack={handleBack} formData={formData} handleChange={handleChange} handleSaveData={handleSaveData} />} />
        <Route path="/displayData">
          <Route 
            index 
            element={<DisplayData formDataArray={formDataArray} setFormData={setFormData} setActiveStep={setActiveStep} />} 
          />
        </Route>
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default CustomRoutes;
