import React, { useEffect } from "react";
import { useState } from "react";
import Project from "../Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
      .then((res) => res.json())
      .then((data) => setProjects(data.meals));
  }, []);
  console.log(projects);
  return (
    <div>
      <div className="projects-wrapper">
        <div className="container">
          <div className="row pt-5 pb-5">
            <h2 className="text-center">Our Projects</h2>
            {projects.map((project) => (
              <Project key={project.idMeal} project={project}></Project>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
