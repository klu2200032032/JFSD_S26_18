import React, { useState } from 'react';
import './StudentRecords.css'; // Assuming you want to add some CSS for styling

const StudentRecords = () => {
  const [students, setStudents] = useState([
    { id: 'S101', name: 'John Doe', email: 'john@example.com', contact: '123-456-7890', address: '123 Main St' },
    { id: 'S102', name: 'Jane Smith', email: 'jane@example.com', contact: '987-654-3210', address: '456 Elm St' },
    { id: 'S103', name: 'Alice Johnson', email: 'alice@example.com', contact: '456-789-0123', address: '789 Oak St' },
  ]);

  return (
    <div className="student-records-container">
      <h2>Student Records</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.contact}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentRecords;
