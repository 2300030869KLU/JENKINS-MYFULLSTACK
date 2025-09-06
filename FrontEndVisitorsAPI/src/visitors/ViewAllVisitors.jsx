import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import './visitor.css';

export default function ViewAllVisitors() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchAllVisitors();
  }, []);

  const fetchAllVisitors = async () => {
    try {
      const response = await fetch(`${config.url}/visitor/viewall`);
      const data = await response.json();
      setVisitors(data);
    } catch (error) {
      console.error('Error fetching visitors:', error);
    }
  };

  return (
    <div className="center-container">
      <h3 style={{ color: "black", fontWeight: "bolder" }}>Available Visitors</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>VISITOR ID</th>
            <th>Name</th>
            <th>AGE</th>
            <th>COUNTRY</th>
            <th>MOBILE NO</th>
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
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No matching visitors found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}