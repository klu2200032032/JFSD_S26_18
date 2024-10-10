import React, { useState } from 'react';
import './Marks.css'; // Import CSS for styling

const Marks = () => {
  const [marksData, setMarksData] = useState([
    { subjectName: 'Mathematics', marks: 90 },
    { subjectName: 'Physics', marks: 85 },
    { subjectName: 'Chemistry', marks: 88 },
  ]);

  return (
    <div className="marks-container">
      <h2>Marks List</h2>
      <table>
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {marksData.map((mark, index) => (
            <tr key={index}>
              <td>{mark.subjectName}</td>
              <td>{mark.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Marks;
