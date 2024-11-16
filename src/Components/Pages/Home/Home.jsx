import React from "react";
import Banner from "./Banner";
import { NavLink, useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-4 gap-6">
        {data.map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
