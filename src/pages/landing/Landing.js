import React from "react";
import mobilephone from "../../components/images/mobilephone.JPG";
import Capture from "../../components/images/Capture.JPG";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import thanks from "../../components/images/thanks.JPG";
import passion from "../../components/images/passion.JPG";
import sharing from "../../components/images/sharing.JPG";
import {
  MY_CONTACTS7,
  MY_CONTACTS8,
  MY_CONTACTS9,
  MY_CONTACTT,
  MY_CONTACTT1,
  MY_CONTACTT2,
  MY_CONTACTT3,
  MY_CONTACTT4,
  MY_CONTACTT5,
  MY_CONTACTT6,
} from "../../Utils/textpages";

const Landing = () => {
  const LANDS = [
    {
      description: `${MY_CONTACTT1}`,
      className: "col-4 bradius py-auto",
    },
    {
      description: `${MY_CONTACTT2}`,
      className: "col-4",
    },
    {
      description: `${MY_CONTACTT3}`,
      className: "col-4",
    },
    {
      description: `${MY_CONTACTT4}`,
      className: "col-4",
    },
    {
      description: `${MY_CONTACTT5}`,
      className: "col-4",
    },
    {
      description: `${MY_CONTACTT6}`,
      className: "col-4",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6-md-col-6-sm-col-6">
          <img src={Capture} alt="proper" />
          <div className="col-8 mx-auto">
            <h2 className="sharestyle">Share Your Plants</h2>
          </div>
          <h2 className="col-9 mx-auto passionstyle">Propagate Your Passion</h2>
          <div className="row"></div>
          <div className="col-6 mx-5">
            <p>{MY_CONTACTS7}</p>
          </div>
        </div>
        <div className="col-6-md-col-6-sm-col-6 mx-auto py-5">
          <img src={mobilephone} alt="phone" />
        </div>
        <div className="row">
          <div className="col-6 mx-auto">
            <img src={thanks} alt="thanks" />
          </div>
          <div className="col-5 py-5 mx-auto">
            <div className="col-8 mx-auto">
              <h1 className="passionstyle">Grow your passion</h1>
            </div>
            <p>{MY_CONTACTS8}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 py-5">
            <h1 className="mx-auto passionstyle passionp">Show your passion</h1>
            <p>{MY_CONTACTS9}</p>
          </div>
          <div className="col-6">
            <img src={passion} alt="thanks" />
          </div>
        </div>
        <div className="mx-auto">
          <Button />
        </div>
        <div className="row">
          <div className="col-6 py-5">
            <h1 className="passionstyle">Never Stop Sharing</h1>
            <p>{MY_CONTACTT}</p>
          </div>
          <div className="col-6">
            <img src={sharing} alt="thanks" />
          </div>
        </div>
        <div className="row py-5">
          {LANDS.map((land, index) => (
            <div key={index} className={land.className}>
              <Card className="bradius">
                <p>{land.description}</p>
              </Card>
            </div>
          ))}
        </div>
        <div className="btn mx-auto">
          {" "}
          <Button />{" "}
        </div>
      </div>
    </div>
  );
};

export default Landing;
