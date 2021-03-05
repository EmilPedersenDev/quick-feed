import React from "react";
import "./employee.scss";

function Employee({ item }) {
  return (
    <div className="employee-card">
      <h3> {item.displayName} </h3>
      <p> {item.officeLocation} </p>
    </div>
  );
}

export default Employee;
