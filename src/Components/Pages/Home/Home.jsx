import React from "react";
import Banner from "./Banner";
import { NavLink, useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Feedback from "./Feedback";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
