import { useState } from 'react';
import axios from 'axios';
import config from '../config'
import './visitor.css'

export default function AddVisitor() 
{

  const [formData, setFormData] = useState({
    name: '',
    age:'',
    country:'',
    mobileno:''
  });


  const [message, setMessage] = useState('');

  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();

    try
    {
        const response = await axios.post(`${config.url}/visitor/add`, formData);
        if (response.status === 200) 
        {
            setMessage(response.data);
            setFormData({
                name: '',
                age:'',
                country:'',
                mobileno:''
            });
        }
    } 
    catch (error) 
    {
      if(error.response) 
      {
        setMessage("")
        setError(error.response.data);
      }
      else 
      {
        setMessage("")
        setError("An unexpected error occurred.");
      }
    }

  };
  
  return (
    <div className="center-container">
      <div className="form-box">
        <h3 className="form-title">Add Visitor</h3>
        {
          message ?
            <p className="success-message">{message}</p> :
            <p className="error-message">{error}</p>
        }
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Age</label>
            <input type="number" id="age" value={formData.age} onChange={handleChange} required />
          </div>
          <div>
            <label>Country</label>
            <input type="text" id="country" value={formData.country} onChange={handleChange} required />
          </div>
          <div>
            <label>Mobile No</label>
            <input type="text" id="mobileno" value={formData.mobileno} onChange={handleChange} required />
          </div>
          <button type="submit">ADD</button>
        </form>
      </div>
    </div>
  );
}