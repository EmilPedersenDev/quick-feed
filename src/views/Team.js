import React from "react";
import { useSelector } from "react-redux";
import "../assets/style/team.scss";
import Employee from "../components/employee/Employee";

function Teams() {
  const team = useSelector((state) => state.teamReducer.team);

  return (
    <div className="container">
      <h1>Team</h1>
      <div className="team-wrapper">
        {team.map((employee) => {
          return <Employee key={employee.id} item={employee}></Employee>;
        })}
      </div>
    </div>
  );
}

export default Teams;
