import React from "react";
import {
  MY_CONTACTS,
  MY_CONTACTS3,
  MY_CONTACTS4,
  MY_CONTACTS5,
  MY_CONTACTS6,
} from "../../Utils/constants";
const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5 mx-auto py-5">
          <h1 style={{ color: "green" }}>Contact</h1>
          <p>
            {MY_CONTACTS} {MY_CONTACTS3} {MY_CONTACTS4}
            {MY_CONTACTS5}
            {MY_CONTACTS6}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
