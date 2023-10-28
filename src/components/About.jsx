import React from "react";
import { Button } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-6 my-auto">
            <h2>About Us</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              eveniet iusto, voluptas a ducimus cumque ipsum accusamus earum!
              Dolorem doloremque exercitationem eveniet, perspiciatis omnis
              deserunt dolorum error! Natus aliquid distinctio dignissimos omnis
              veniam error quasi officiis animi cum aliquam adipisci sed at,
              cupiditate recusandae quas laboriosam eaque esse pariatur hic
              maiores voluptate voluptatibus ratione vitae. Ex porro dolor
              minima ratione ad officia et, tempora dolores tempore dicta
              provident. Cumque qui dolor dignissimos enim perferendis
              distinctio minima nostrum et suscipit mollitia perspiciatis optio,
              repellat labore adipisci deserunt praesentium maiores? Tempora
              aperiam iure, deserunt minima blanditiis porro dolore at facere
              quaerat eveniet?
            </p>
            <Button variant="primary" size="lg">
              Learn More
            </Button>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="https://i.ibb.co/YPkcYHz/pexels-miandla-1108807-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
