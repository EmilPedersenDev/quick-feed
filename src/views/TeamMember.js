import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function TeamMember() {
  const { id } = useParams();

  const member = useSelector((state) => {
    if (state.teamReducer.team.length < 0) return null;

    return state.teamReducer.team.find((item) => item.id === id);
  });

  return (
    <div className="container">
      {!member ? (
        <h3> No member found </h3>
      ) : (
        <div className="wrapper">
          <h3> {member.displayName} </h3>
          <p> {member.officeLocation} </p>
          <br />
          <h3> Feedback: </h3>
          <p> No current feedback... </p>
        </div>
      )}
    </div>
  );
}

export default TeamMember;
