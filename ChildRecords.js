import React, { useState } from 'react';
import './ChildRecords.css'; // Import CSS for styling if needed

const ChildRecords = () => {
  const [childRecords, setChildRecords] = useState([
    { id: 'C001', name: 'Alice Smith', subjects: ['Math', 'Science'], year: '2024' },
    { id: 'C002', name: 'Bob Johnson', subjects: ['History', 'Art'], year: '2023' },
    { id: 'C003', name: 'Charlie Brown', subjects: ['Literature', 'Physics'], year: '2025' },
  ]);

  return (
    <div className="child-records-container">
      <h2>Child Records</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subjects</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {childRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.subjects.join(', ')}</td>
              <td>{record.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChildRecords;
