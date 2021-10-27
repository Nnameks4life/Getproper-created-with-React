import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { MY_TEAM, MY_CONTACTS2 } from "../../Utils/textpages";

const Jobs = () => {
  return (
    <div className="container">
      <div class="row"></div>
      <div className="col-4 mx-auto py-5 sharestyle passionp">
        <h1>Work with Passion</h1>
      </div>
      <div className="col-5 mx-auto py-5">
        <div class="row">
          <p className="text-center mx-50">
            {MY_TEAM}
            <Link to="/">{MY_CONTACTS2}</Link>
          </p>
        </div>
        <h1 className="text-center py-5 sharestyle">Open Positions</h1>
        <div className="text-center">
          <h4>
            {" "}
            <Link to="/jobs" className="passionstyle">
              Co-Founder, Chief Culture Officer{" "}
            </Link>{" "}
          </h4>
        </div>
        <input className="b-warning b-10 bradius" value="Email"></input>{" "}
        <Button />
      </div>
      //{" "}
    </div>
  );
};

export default Jobs;
