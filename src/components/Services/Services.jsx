import React, { useEffect, useState } from "react";
import Service from "../Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setServices(data));
    };
    return () => getData();
  }, []);
  return (
    <div>
      <div className="services-wrapper">
        <div className="container">
          <div className="row pt-5 pb-5">
            <h2 className="text-center">Our Services</h2>
            {services.slice(0, 12).map((service) => (
              <Service service={service}></Service>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
