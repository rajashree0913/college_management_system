import React from "react";
import { useNavigate } from "react-router-dom";

const FacultyHome = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Faculty Home</h2>
      <div className="row">
        {/* Faculty Dashboard Card */}
        <div className="col-md-6 mb-4">
          <div
            className="card text-center shadow"
            onClick={() => navigate("/faculty-dashboard")}
            style={{
              cursor: "pointer",
              height: "200px",
              backgroundColor: "pink", 
            }}
          >
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 className="card-title text-danger">Faculty Dashboard</h5>
              <p className="card-text">View and manage your faculty dashboard.</p>
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
              backgroundColor: "lavender", 
            }}
          >
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 className="card-title text-primary">Student Enrollment</h5>
              <p className="card-text">Manage student enrollments here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyHome;
