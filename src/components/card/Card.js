import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card header py-3 cardborder">{props.children}</div>
    </div>
  );
};
export default Card;
