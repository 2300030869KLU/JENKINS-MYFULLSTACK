import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import './visitor.css';

export default function DeleteVisitors() {
  const [visitors, setVisitors] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAllVisitors();
  }, []);

  const fetchAllVisitors = async () => {
    try {
      const response = await axios.get(`${config.url}/visitor/viewall`);
      setVisitors(response.data);
    } catch (error) {
      setError('Error fetching visitors');
    }
  };

  const handleDelete = async (vid) => {
    setMessage('');
    setError('');
    try {
      await axios.delete(`${config.url}/visitor/delete`, { params: { vid } });
      setMessage('Visitor deleted successfully.');
      fetchAllVisitors(); // Refresh list
    } catch (err) {
      setError('Failed to delete visitor.');
    }
  };

  return (
    <div className="center-container">
      <h3 style={{ color: "black", fontWeight: "bolder" }}>Available Visitors</h3>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>VISITOR ID</th>
            <th>Name</th>
            <th>AGE</th>
            <th>COUNTRY</th>
            <th>MOBILE NO</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {visitors.length > 0 ? (
            visitors.map(visitor => (
              <tr key={visitor.id}>
                <td>{visitor.id}</td>
                <td>{visitor.name}</td>
                <td>{visitor.age}</td>
                <td>{visitor.country}</td>
                <td>{visitor.mobileno}</td>
                <td>
                  <button
                    style={{ background: "#d32f2f", color: "#fff", border: "none", borderRadius: "4px", padding: "6px 12px", cursor: "pointer" }}
                    onClick={() => handleDelete(visitor.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No matching visitors found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}