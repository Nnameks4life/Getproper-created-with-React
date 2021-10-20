import React from "react";
import mobilephone from "../../components/images/mobilephone.JPG";
import Capture from "../../components/images/Capture.JPG";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";

const Landing = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8">
          <img src={Capture} alt="proper" />
          <div className="row">
            <div
              className="col-8 mx-auto"
              style={{ paddingTop: "50px", color: "green" }}
            >
              <h2>Share Your Plants</h2>
            </div>
            <div className="col-9 mx-auto" style={{ color: "red" }}>
              <h2>Propagate Your Passion</h2>
            </div>
            <div className="col-8 mx-auto">
              <p>
                Join our community of crazy plant people to find, share, and
                care for your beloved houseplants.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 ">
          <img src={mobilephone} width="300px" alt="phone" />
        </div>
        <div className="row">
          <div className="justify-content-md-end justify-content-start bg-dark"></div>
        </div>
        <div className="row py-5">
          <div className="col-4">
            <Card>
              <p>
                We can let loose and talk about plants all the time, which is
                something I can't do in real life to all my non-planty friends.
                And every time I give or receive something on here it feels kind
                of like Christmas to me
              </p>
            </Card>
          </div>
          <div className="col-4">
            <Card>
              <p>
                This app is cool because I can check with the people in the same
                area where I live. The interaction through the app is easier
                because they will know that I will only ask about plants.
              </p>
            </Card>
          </div>
          <div className="col-4">
            <Card>
              <p>
                I love it! I see a ton more plants on the map just this week.
                Glad more people are trying it out. I found out about it in a
                plant exchange FB group and a bunch of people loved it too
              </p>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Card>
              <p>
                This is such a brilliant idea. Super excited to see it take off.
                I'm really loving what you've created. I'm pacing myself and
                only adding a few plants every day 😂
              </p>
            </Card>
          </div>
          <div className="col-4">
            <Card>
              <p>
                Really like the idea behind it, I do some trading and sending of
                plants through the mail via fb groups but it's nice to have
                designated place and searchable if you are looking for a
                specific plant.
              </p>
            </Card>
          </div>
          <div className="col-4">
            <Card>
              <p>
                One of the FB groups I belong to posted the link. Just the kind
                of app I love to be a part of
              </p>
            </Card>
          </div>
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
