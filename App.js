import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import LoginForm from './Components/LoginForm';
import ForgotPassword from './Components/ForgotPassword'; // Import ForgotPassword component
import AdminPage from './Components/AdminPage';   // Import AdminPage
import AddStudent from './Components/AddStudent';
import ViewStudents from './Components/ViewStudents';  // Import ViewStudents
import StudentIssues from './Components/StudentIssues';  // Import StudentIssues
import Courses from './Components/Courses';  // Import Courses
import FeePayments from './Components/FeePayments';  // Import FeePayments
import Registration from './Components/Registration';
import Marks from './Components/Marks';
import Materials from './Components/Materials';
import Attendance from './Components/Attendance';
import StudentRecords from './Components/StudentRecords';
import AssignGrades from './Components/AssignGrades';
import Timetable from './Components/Timetable';
import Counselling from './Components/Counselling';
import AdminLoginPage from './Components/AdminLoginPage';
import StudentPage from './Components/StudentPage';
import FacultyPage from './Components/FacultyPage';
import ParentPage from './Components/ParentPage'; // Import Parent Page
import ChildRecords from './Components/ChildRecords'; // Import Child Records Component
import FacultyInfo from './Components/FacultyInfo'; // Import Faculty Info Component
import Payments from './Components/Payments'; // Import Payments Component
import Grades from './Components/Grades'; 

import './App.css';

function App() {
    return (
        <Router>
            <nav className="navbar">
                <div className="navbar-brand">Student ERP</div>
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/forgot-password" element={<ForgotPassword />} /> {/* New Route */}
                <Route path="/" element={<LoginForm />} />
                <Route path="/admin" element={<AdminPage />} />
               <Route path="/student" element={<StudentPage />} />
               <Route path="/faculty" element={<FacultyPage />} />
               <Route path="/forgot-password" element={<ForgotPassword />} />
               <Route path="/" element={<LoginForm />} />
               <Route path="/admin/login" element={<AdminLoginPage />} />
               <Route path="/admin/add-student" element={<AddStudent />} />
               <Route path="/admin/view-students" element={<ViewStudents />} />
               <Route path="/admin/Student-issues" element={<StudentIssues />} />
               <Route path="/admin/Courses" element={<Courses />} />
               <Route path="/admin/Fee-Payments" element={<FeePayments />} />
               <Route path="/student/Registration" element={<Registration />} />
               <Route path="/student/Marks" element={<Marks />} />
               <Route path="/student/Materials" element={<Materials />} />
               <Route path="/student/Attendance" element={<Attendance />} />
               <Route path="/faculty/Student-records" element={<StudentRecords />} />
               <Route path="/faculty/Assign-grades" element={<AssignGrades />} />
               <Route path="/faculty/Timetable" element={<Timetable />} />
               <Route path="/faculty/Counselling" element={<Counselling />} />
               <Route path="/parent" element={<ParentPage />} />
               <Route path="/parent/child-records" element={<ChildRecords />} /> {/* Child Records */}
               <Route path="/parent/faculty-info" element={<FacultyInfo />} /> {/* Faculty Info */}
               <Route path="/parent/payments" element={<Payments />} /> {/* Payments */}
               <Route path="/parent/grades" element={<Marks />} /> {/* Grades */}

               
            </Routes>
        </Router>
    );
}

export default App;
