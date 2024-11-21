import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Register from './Register';
import Login from './Login';
import Facultyhome from './Facultyhome';
import Studenthome from './Studenthome';
import StudentEnroll from './Studentenroll';
import StudentDashboard from './StudentDashboard';
import Facultydashboard from './Facultydashboard';
import EditStudent from './Edit';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h1 className='text-center mt-5'>Welcome to the Home Page</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-enroll" element={<StudentEnroll />} />
        <Route path="/faculty-home" element={<Facultyhome />} />
        <Route path="/student-home" element={<Studenthome />} />
        <Route path="/faculty-dashboard" element={<Facultydashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />

      </Routes>
    </div>
  );
}

export default App;
