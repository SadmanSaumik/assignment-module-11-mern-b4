import React from "react";
import "./Hero.css";
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div>
      <div className="hero-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-light">Lorem, ipsum dolor.</h1>
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                aliquid at labore possimus nobis sit quaerat deleniti quis
                facilis rem. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Esse aliquid at labore possimus nobis sit quaerat deleniti
                quis facilis rem. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Esse aliquid at labore possimus nobis sit
                quaerat deleniti quis facilis rem.
              </p>
              <Button variant="primary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
