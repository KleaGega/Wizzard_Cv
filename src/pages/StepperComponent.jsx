import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StepperComponent = ({ activeStep, steps }) => {
  const navigate = useNavigate();

  const handleStepClick = (index) => {
    navigate(`/step${index + 1}`);
  };

  return (
    <div className="custom-stepper">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              onClick={() => handleStepClick(index)}
              style={{
                cursor: 'pointer',
                color: index === activeStep ? 'blue' : (index < activeStep ? 'black' : 'gray'),
                fontWeight: index === activeStep ? 'bold' : 'normal',
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default StepperComponent;
