import React, { useState } from 'react';
import './ViewStudents.css'; // Import CSS for styling

const ViewStudents = () => {
  const [students, setStudents] = useState([
    { id: 'S101', name: 'John Doe', studyYear: 'Freshman', branch: 'Computer Science' },
    { id: 'S102', name: 'Jane Smith', studyYear: 'Sophomore', branch: 'Mechanical Engineering' },
    { id: 'S103', name: 'Alice Johnson', studyYear: 'Junior', branch: 'Business Administration' },
  ]);

  return (
    <div className="view-students-container">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Study Year</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.studyYear}</td>
              <td>{student.branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudents;
