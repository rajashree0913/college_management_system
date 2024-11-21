import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Studentenroll = () => {
  // Define state for each form field
  const [profilePic, setProfilePic] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [faculty, setFaculty] = useState('');

  // State for handling form submission status
  const [message] = useState('');
  const navigate = useNavigate(); 
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh on submit

    const formData = new FormData();
    formData.append('profile_pic', profilePic); // Attach the profile picture file
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('dob', dob);
    formData.append('gender', gender);
    formData.append('blood_group', bloodGroup);
    formData.append('contact_number', contactNumber);
    formData.append('address', address);
    formData.append('subject', subject);
    formData.append('faculty', faculty);

    try {
      // POST request to backend API to create a new student record
      const response = await axios.post('http://127.0.0.1:8000/api/student/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // To send the file
        },
      });

      // If the request is successful, show a success message
      alert('Student enrolled successfully!');
      navigate("/student-dashboard");
      console.log(response.data); // Optional: Log the response from the backend
    } catch (error) {
      // If there's an error, show the error message
      alert('Error enrolling student, please try again.');
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Enrollment Form</h2>
      <form onSubmit={handleSubmit}  className="w-50 mx-auto">

        
        <div className="mb-3">
          <label htmlFor="profilePic" className="form-label">Profile Picture</label>
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            onChange={(e) => setProfilePic(e.target.files[0])} // Capture the selected file
            className="form-control"
            required
          />
        </div>

       
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control"
            required
          />
        </div>

        
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-control"
            required
          />
        </div>

        
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="form-control"
            required
          />
        </div>

       
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="form-control"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>


        
        <div className="mb-3">
          <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
          <input
            type="text"
            id="bloodGroup"
            name="bloodGroup"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="form-control"
            required
          />
        </div>

       
        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="form-control"
            required
          />
        </div>

       
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
            required
          ></textarea>
        </div>

     
        <div className="mb-3">
  <label htmlFor="subject" className="form-label">Subject</label>
  <select
    id="subject"
    name="subject"
    value={subject}
    onChange={(e) => setSubject(e.target.value)}
    className="form-control"
    required
  >
    <option value="">Select Subject</option>
    <option value="DataScience">DataScience</option>
    <option value="Python programming">Python programming</option>
    <option value="DBMS">DBMS</option>
    <option value="C programming">C programming</option>
    <option value="Data Structure">Data Structure</option>
  </select>
</div>

<div className="mb-3">
  <label htmlFor="faculty" className="form-label">Faculty</label>
  <select
    id="faculty"
    name="faculty"
    value={faculty}
    onChange={(e) => setFaculty(e.target.value)}
    className="form-control"
    required
  >
    <option value="">Select Faculty</option>
    <option value="Dr. Sai">Dr. Sai-DataScience</option>
    <option value="Dr. Aravindh">Dr. Aravindh-Python programming</option>
    <option value="Prof. Venkat">Prof. Venkat-DBMS</option>
    <option value="Prof. Aarthi">Prof. Aarthi-C programming</option>
    <option value="Dr. Gayathri">Dr. Gayathri-Data Structure</option>
  </select>
</div>


        <button type="submit" className="btn btn-primary w-100">
          Enroll Student
        </button>
      </form>

      {/* Display success or error message */}
      {message && <p className="mt-3 text-center">{message}</p>}
    </div>
  );
};

export default Studentenroll;
