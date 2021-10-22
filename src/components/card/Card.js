import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div
        className="card header py-3"
        style={{ borderRadius: "15px", border: "2px solid black" }}
      >
        {props.children}
      </div>
    </div>
  );
};
export default Card;
