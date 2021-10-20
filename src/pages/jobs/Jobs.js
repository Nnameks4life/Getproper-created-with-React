import React from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div>
      <h1 style={{ color: "green", alignItems: "center" }}>
        Work with Passion
      </h1>
      <p className="mx-auto">
        We're building a team of talented people who are crazy about
        houseplants. We'd love for you to join us. ​ Propa is dedicated to
        creating an amazing work environment, driven by kind, creative minds
        with diverse perspectives. Our team's passion will be evident in our
        products. ​ Propa is headquartered in the lovely town of Annapolis,
        Maryland. Employees are expected to eventually relocate and work
        in-office. ​ To apply, send your resume to
      </p>
      <Link to="/jobs">jobs@getpropa.com.</Link>
      <h1>Open Positions</h1>
      <h3>Co-Founder, Chief Culture Officer </h3>
      <input></input> <buttn />
    </div>
  );
};

export default Jobs;
