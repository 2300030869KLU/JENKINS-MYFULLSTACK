import { useState } from 'react';
import axios from 'axios';
import config from '../config';
import './visitor.css';

export default function UpdateVisitor() {
  const [visitorId, setVisitorId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    country: '',
    mobileno: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [found, setFound] = useState(false);

  const handleIdChange = (e) => {
    setVisitorId(e.target.value);
    setFound(false);
    setMessage('');
    setError('');
  };

  const fetchVisitor = async () => {
    setMessage('');
    setError('');
    try {
      const response = await axios.get(`${config.url}/visitor/viewbyid`, { params: { vid: visitorId } });
      if (response.data) {
        setFormData({
          name: response.data.name,
          age: response.data.age,
          country: response.data.country,
          mobileno: response.data.mobileno
        });
        setFound(true);
      } else {
        setError('Visitor not found.');
        setFound(false);
      }
    } catch (err) {
      setError('Error fetching visitor.');
      setFound(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const payload = {
        id: parseInt(visitorId),
        ...formData
      };
      const response = await axios.put(`${config.url}/visitor/update`, payload);
      setMessage(response.data);
      setFound(false);
      setVisitorId('');
      setFormData({
        name: '',
        age: '',
        country: '',
        mobileno: ''
      });
    } catch (err) {
      setError('Failed to update visitor.');
    }
  };

  return (
    <div className="center-container">
      <div className="form-box">
        <h3 className="form-title">Update Visitor</h3>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <div style={{ marginBottom: '16px' }}>
          <label>Enter Visitor ID</label>
          <input
            type="number"
            value={visitorId}
            onChange={handleIdChange}
            placeholder="Visitor ID"
            required
          />
          <button
            style={{ marginLeft: '10px', padding: '6px 16px' }}
            type="button"
            onClick={fetchVisitor}
            disabled={!visitorId}
          >
            Fetch
          </button>
        </div>
        {found && (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Age</label>
              <input
                type="number"
                id="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Country</label>
              <input
                type="text"
                id="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Mobile No</label>
              <input
                type="text"
                id="mobileno"
                value={formData.mobileno}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">UPDATE</button>
          </form>
        )}
      </div>
    </div>
  );
}