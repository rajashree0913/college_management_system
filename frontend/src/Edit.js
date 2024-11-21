import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [student, setStudent] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    gender: '',
    blood_group: '',
    contact_number: '',
    address: '',
    subject: '',
    faculty: '',
    profile_pic: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch student data 
    axios
      .get(`http://127.0.0.1:8000/api/student/${id}/`)
      .then((response) => {
        setStudent(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching student data');
        console.error('Error fetching student data:', error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setStudent((prevStudent) => ({
        ...prevStudent,
        [name]: files[0],
      }));
    } else {
      setStudent((prevStudent) => ({
        ...prevStudent,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(student).forEach((key) => {
      formData.append(key, student[key]);
    });

    axios
      .put(`http://127.0.0.1:8000/api/student/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        alert('Student updated successfully');
        navigate('/'); // Navigate back to the student dashboard
      })
      .catch((error) => {
        console.error('Error updating student:', error);
        alert('Error updating student');
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-2">
      <h2 className="text-center mb-4">Edit Student</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
      <div className="mb-3">
          <label className="form-label">Profile Picture</label>
          <input
            type="file"
            className="form-control"
            name="profile_pic"
            onChange={handleChange}

          />
        </div>

        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            value={student.first_name}
            onChange={handleChange}
            placeholder="Enter First Name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            value={student.last_name}
            onChange={handleChange}
            placeholder="Enter Last Name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={student.dob}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <input
            type="text"
            className="form-control"
            name="gender"
            value={student.gender}
            onChange={handleChange}
            placeholder="Enter Gender"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Blood Group</label>
          <input
            type="text"
            className="form-control"
            name="blood_group"
            value={student.blood_group}
            onChange={handleChange}
            placeholder="Enter Blood Group"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            type="text"
            className="form-control"
            name="contact_number"
            value={student.contact_number}
            onChange={handleChange}
            placeholder="Enter Contact Number"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={student.address}
            onChange={handleChange}
            placeholder="Enter Address"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            name="subject"
            value={student.subject}
            onChange={handleChange}
            placeholder="Enter Subject"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Faculty</label>
          <input
            type="text"
            className="form-control"
            name="faculty"
            value={student.faculty}
            onChange={handleChange}
            placeholder="Enter Faculty"
          />
        </div>



        <button className="btn btn-primary w-100" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
