import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = (props) => {
  const { name, flags } = props.service;
  return (
    <div className="col-md-3 mt-5 mb-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={flags.png} />
        <Card.Body>
          <Card.Title>{name.common}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
