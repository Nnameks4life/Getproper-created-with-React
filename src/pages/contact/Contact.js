import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Get the latest news about Propa by signing up for our mailing list! ​ If
        you're a retailer interested in partnering with Propa, please contact us
        at business@getpropa.com. ​ All other inquiries may be directed to
        chat@getpropa.com. We'd love to hear from you.
      </p>
      <Link to="/Contact">Home Page from Frankdinero</Link>
    </div>
  );
};

export default Contact;
