import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5 mx-auto py-5">
          <h1 style={{ color: "green" }}>Contact</h1>
          <p>
            Get the latest news about Propa by signing up for our mailing list!
            If you're a retailer interested in partnering with Propa, please
            contact us at <Link to="/">business@getpropa.com.</Link> All other
            inquiries may be directed to <Link to="/">chat@getpropa.com.</Link>{" "}
            We'd love to hear from you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
