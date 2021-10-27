import React from "react";
import mobilephone from "../../components/images/mobilephone.JPG";
import Capture from "../../components/images/Capture.JPG";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import thanks from "../../components/images/thanks.JPG";
import passion from "../../components/images/passion.JPG";
import sharing from "../../components/images/sharing.JPG";

const Landing = () => {
  const LANDS = [
    {
      description: `We are a community of crazy plant people who love sharing
              houseplant cuttings. Propa makes it easy to find the exact species
              and variation you are looking for. Simply add whatever plant you
              want to your wishlist and you'll receive a notification when
              someone has cuttings available to share!`,
      claz: "col-4 bradius py-auto",
    },
    {
      description: `This app is cool because I can check with the people in the same
                area where I live. The interaction through the app is easier
                because they will know that I will only ask about plants.`,
      claz: "col-4",
    },
    {
      description: `I love it! I see a ton more plants on the map just this week.
                Glad more people are trying it out. I found out about it in a
                plant exchange FB group and a bunch of people loved it too`,
      claz: "col-4",
    },
    {
      description: `This is such a brilliant idea. Super excited to see it take off.
                I'm really loving what you've created. I'm pacing myself and
                only adding a few plants every day 😂`,
      claz: "col-4",
    },
    {
      description: `Really like the idea behind it, I do some trading and sending of
                plants through the mail via fb groups but it's nice to have
                designated place and searchable if you are looking for a
                specific plant.`,
      claz: "col-4",
    },
    {
      description: `One of the FB groups I belong to posted the link. Just the kind
                of app I love to be a part of`,
      claz: "col-4",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6-md-col-6-sm-col-6">
          <img src={Capture} alt="proper" />
          <div className="col-8 mx-auto">
            <h2 style={{ color: "green" }}>Share Your Plants</h2>
          </div>
          <h2 className="col-9 mx-auto" style={{ color: "#eb7d5a" }}>
            Propagate Your Passion
          </h2>
          <div className="row"></div>
          <div className="col-6 mx-5">
            <p>
              Join our community of crazy plant people to find, share, and care
              for your beloved houseplants.
            </p>
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
              <h1 style={{ color: "#eb7d5a" }}>Grow your passion</h1>
            </div>
            <p>
              We are a community of crazy plant people who love sharing
              houseplant cuttings. Propa makes it easy to find the exact species
              and variation you are looking for. Simply add whatever plant you
              want to your wishlist and you'll receive a notification when
              someone has cuttings available to share!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 py-5">
            <h1
              style={{ color: "#eb7d5a", alignItems: "center" }}
              className="mx-auto"
            >
              Show your passion
            </h1>
            <p>
              Propa is the perfect place to show off your plant collection and
              browse friends' collections for ideas. Each time you update your
              plant's photo, we add it to a timelapse so you can watch it grow
              all over again!
            </p>
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
            <h1 style={{ color: "#eb7d5a" }}>Never Stop Sharing</h1>
            <p>
              Each time you share a cutting through Propa, you get a "prop" -
              our version of a like - so you can see how much happiness you've
              shared into the world. We also give you updates on your plants'
              babies so you can watch them as they grow!
            </p>
          </div>
          <div className="col-6">
            <img src={sharing} alt="thanks" />
          </div>
        </div>
        <div className="row py-5">
          {LANDS.map((land, index) => (
            <div key={index} className={land.claz}>
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
