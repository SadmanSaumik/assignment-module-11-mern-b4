import React from "react";
import { Card } from "react-bootstrap";

const Project = (props) => {
  const { strMeal, strMealThumb } = props.project;
  return (
    <div className="col-md-3 mt-5 mb-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;
