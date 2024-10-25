
import React from 'react';
import Layout from './components/Layout';
import './App.css';
import CustomRoutes from './routes/CustomRoutes'; 
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
 const [formData, setFormData] = useState({
      firstName: '',
      surname: '',
      id: '',
      age: '',
      email: '',
      password: '',
      gender: ''
});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <BrowserRouter>  
      <Layout>
      <CustomRoutes handleChange={handleChange} setFormData={setFormData} formData={formData} />
      </Layout>     
    </BrowserRouter>
  );
}

export default App;
