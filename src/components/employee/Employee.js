import React from "react";
import { Link } from "react-router-dom";
import "./employee.scss";

function Employee({ item }) {
  return (
    <Link to={`/team/${item.id}`}>
      <div className="employee-card">
        <h3> {item.displayName} </h3>
        <p> {item.officeLocation} </p>
      </div>
    </Link>
  );
}

export default Employee;
