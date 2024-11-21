import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Facultydashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios
      .get('http://127.0.0.1:8000/api/student/')
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching data');
        setLoading(false);
        console.error('Error fetching students:', error);
      });
  };

  const handleDelete = (id) => {
   
    if (window.confirm('Are you sure you want to delete this student?')) {
     
      axios
        .delete(`http://127.0.0.1:8000/api/student/delete/${id}/`)
        .then((response) => {
          console.log('Student deleted:', response); 
          // Refresh the student list
          fetchStudents();
          alert('Student deleted successfully!');
        })
        .catch((error) => {
          console.error('Error deleting student:', error);
          alert('Failed to delete student');
        });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Dashboard</h2>
      {students.length === 0 ? (
        <p>No students enrolled</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Profile</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Blood Group</th>
                <th>Contact Number</th>
                <th>Address</th>
                <th>Subject</th>
                <th>Faculty</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>
                    <img
                      src={student.profile_pic}
                      alt={`${student.first_name}'s profile`}
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                      }}
                    />
                  </td>
                  <td>{student.first_name}</td>
                  <td>{student.last_name}</td>
                  <td>{student.dob}</td>
                  <td>{student.gender}</td>
                  <td>{student.blood_group}</td>
                  <td>{student.contact_number}</td>
                  <td>{student.address}</td>
                  <td>{student.subject}</td>
                  <td>{student.faculty}</td>
                  <td>
                  <div className="d-flex">
                    <Link to={`/edit-student/${student.id}`}>
                      <button className="btn btn-warning btn-sm me-2">Edit</button>
                    </Link>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Facultydashboard;
