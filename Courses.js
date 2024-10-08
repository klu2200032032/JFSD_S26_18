import React, { useState } from 'react';
import './Courses.css'; // Import CSS for styling

const Courses = () => {
  const [courses, setCourses] = useState([
    { id: 'C101', name: 'Computer Science', dept: 'Engineering' },
    { id: 'C102', name: 'Mechanical Engineering', dept: 'Engineering' },
    { id: 'C103', name: 'Business Management', dept: 'Business' },
  ]);

  return (
    <div className="courses-container">
      <h2>Course List</h2>
      <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.dept}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
