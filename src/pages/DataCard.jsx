import React from 'react';
import './dataCard.css';
import { useNavigate } from 'react-router-dom';

const DataCard = ({ data, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate(`/detail/${data.id}`, { state: { data } });
  };

  const handleDelete = () => {
    onDelete(data.id);
  };

  const handleEdit = () => {
    onEdit(data);
  };

  return (
    <div className="data-card">
      <h2>{data.firstName} {data.surname}</h2>
      <p><strong>Id:</strong> {data.id}</p>
      <p><strong>Age:</strong> {data.age}</p>
      <div className='buttons'>
        <button onClick={handleShowMore}>Show More</button>
        <button onClick={handleEdit} className="edit-button">Edit</button> 
        <button onClick={handleDelete} className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default DataCard;
