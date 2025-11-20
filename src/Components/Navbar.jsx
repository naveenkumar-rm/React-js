import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  color: isActive ? "blue" : "red",
  marginRight: "20px",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: isActive ? "bold" : "normal",
});

const Navbar = () => {
  return (
    <div style={{ padding: "15px", background: "#f2f2f2" }}>
      {/* Home */}
      <NavLink to="/" style={linkStyle}>Home</NavLink>

      {/* Major Applications */}
      <NavLink to="/game" style={linkStyle}>Stonepaper</NavLink>
      <NavLink to="/Electricitybillcalculator" style={linkStyle}>Electricity Bill</NavLink>
      <NavLink to="/Salarytaxcalculator" style={linkStyle}>Salary Tax</NavLink>
      <NavLink to="/Librarymanagement" style={linkStyle}>Library</NavLink>
      <NavLink to="/Moviemanagement" style={linkStyle}>Movie Management</NavLink>
      <NavLink to="/FormValidation" style={linkStyle}>Form Validation</NavLink>
      <NavLink to="/Userprint" style={linkStyle}>User Print</NavLink>
      <NavLink to="/Marklist" style={linkStyle}>Student Marks</NavLink>

      {/* Basic Components */}
      <NavLink to="/Mathoperators" style={linkStyle}>Math Operators</NavLink>
      <NavLink to="/Arrayandmap" style={linkStyle}>Array & Map</NavLink>
      <NavLink to="/String" style={linkStyle}>String</NavLink>
      <NavLink to="/Task" style={linkStyle}>Task</NavLink>

      {/* Props Examples */}
      <NavLink to="/PropsParent" style={linkStyle}>Props Parent</NavLink>
      <NavLink to="/PropsStudents" style={linkStyle}>Props Students</NavLink>
      <NavLink to="/Department" style={linkStyle}>Department</NavLink>

      {/* Other */}
      <NavLink to="/Anagram" style={linkStyle}>Anagram</NavLink>
      <NavLink to="/UsestateParent" style={linkStyle}>useState Parent</NavLink>
      <NavLink to="/UsestateChild" style={linkStyle}>useState Child</NavLink>
    </div>
  );
};

export default Navbar;
