import React from "react";
import { useNavigate } from "react-router-dom";

const Studenthome = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Home</h2>
      <div className="row">
        {/* Student Dashboard Card */}
        <div className="col-md-6 mb-4">
          <div
            className="card text-center shadow"
            onClick={() => navigate("/student-dashboard")}
            style={{
              cursor: "pointer",
              height: "200px",
              backgroundColor: "skyblue", 
            }}
          >
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 className="card-title text-primary">Student Dashboard</h5>
              <p className="card-text">Access your personal dashboard.</p>
            </div>
          </div>
        </div>

        {/* Student Enrollment Card */}
        <div className="col-md-6 mb-4">
          <div
            className="card text-center shadow"
            onClick={() => navigate("/student-enroll")}
            style={{
              cursor: "pointer",
              height: "200px",
              backgroundColor: "pink", 
            }}
          >
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 className="card-title text-success">Student Enrollment</h5>
              <p className="card-text">Enroll in subjects and view enrollment details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studenthome;
