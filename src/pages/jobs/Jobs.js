import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { MY_TEAM, MY_CONTACTS2 } from "../../Utils/constants";

const Jobs = () => {
  return (
    <div className="container">
      <div class="row"></div>
      <div className="col-4 mx-auto py-5">
        <h1 style={{ color: "green", alignItems: "center", marginTop: "5px" }}>
          Work with Passion
        </h1>
      </div>
      <div className="col-5 mx-auto py-5">
        <div class="row">
          <p className="text-center mx-50">
            {MY_TEAM} {MY_CONTACTS2}
          </p>
        </div>
        <h1 style={{ color: "green" }} className="text-center py-5">
          Open Positions
        </h1>
        <div className="text-center">
          <h4>
            {" "}
            <Link to="/jobs" style={{ color: "#eb7d5a" }}>
              Co-Founder, Chief Culture Officer{" "}
            </Link>{" "}
          </h4>
        </div>
        <input
          className="b-warning b-10"
          value="Email"
          style={{ borderRadius: "5px", borderColor: "greenyellow" }}
        ></input>{" "}
        <Button />
      </div>
      //{" "}
    </div>
  );
};

export default Jobs;
