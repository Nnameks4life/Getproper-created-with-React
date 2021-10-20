import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card header py-3">{props.children}</div>
    </div>
  );
};
export default Card;
