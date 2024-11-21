import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token"); 

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    alert("Logged out successfully");
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              {isLoggedIn === "faculty" ? (
                <Link to="/faculty-home">Faculty Home</Link>
              ) : (
                <Link to="/student-home">Student Home</Link>
              )}
            </li>
            <li>
              <Link className="text-bold" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
