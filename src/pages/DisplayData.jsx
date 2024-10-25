import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DataCard from './DataCard'; 
import './displayData.css';

const DisplayData = ({ formDataArray, setFormData, setActiveStep }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
    }
  }, [setFormData]);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formDataArray));
  }, [formDataArray]); 

  const handleBackStep = () => {
    setActiveStep(0); 
    navigate("/step1"); 
  };

  const [searchName, setSearchName] = useState(searchParams.get("name") || "");
  const [searchSurname, setSearchSurname] = useState(searchParams.get("surname") || "");
  const [searchAge, setSearchAge] = useState(searchParams.get("age") || "");

  useEffect(() => {
    setSearchParams({ name: searchName, surname: searchSurname, age: searchAge });
  }, [searchName, searchSurname, searchAge, setSearchParams]);


  const filteredDataCards = formDataArray.filter(data => {
    const matchesName = searchName ? data.firstName.toLowerCase().includes(searchName.toLowerCase()) : true;
    const matchesSurname = searchSurname ? data.surname.toLowerCase().includes(searchSurname.toLowerCase()) : true;
    const matchesAge = searchAge ? data.age.toString() === searchAge : true;

    return matchesName && matchesSurname && matchesAge;
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setSearchName(value);
    else if (name === 'surname') setSearchSurname(value);
    else if (name === 'age') setSearchAge(value);
  };

  const handleClear = () => {
    setSearchName("");
    setSearchSurname("");
    setSearchAge("");
    setSearchParams({ name: "", surname: "", age: "" });
  };

  const handleDelete = (id) => {
    const updatedData = formDataArray.filter(data => data.id !== id);
    setFormData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));
  };


  const handleEdit = (data) => {
    navigate('/step1', { state: { formData: data } });
  };

  return (
    <div className="display-container">
      <h1>Display Data</h1>
      <div className="filter-container">
        <input type="text" name="name" placeholder="Filter by Name" value={searchName} onChange={handleFilterChange} />
        <input type="text" name="surname" placeholder="Filter by Surname" value={searchSurname} onChange={handleFilterChange} />
        <input type="text" name="age" placeholder="Filter by Age" value={searchAge} onChange={handleFilterChange} />
      </div>
      <button onClick={handleClear}>Clear</button>

      {filteredDataCards.length > 0 ? (
        <div className="card-grid">
          {filteredDataCards.map((data, index) => (
            <div key={data.id || index} className="data-card-preview">
              <DataCard 
                data={data} 
                onDelete={handleDelete}
                onEdit={handleEdit} 
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No valid data available.</p> 
      )}
      <button onClick={handleBackStep}>New Data</button>
    </div>
  );
};

export default DisplayData;
