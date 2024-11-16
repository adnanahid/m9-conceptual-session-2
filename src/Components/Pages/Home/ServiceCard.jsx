import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    // <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 p-3 hover:p-0   ">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
      <img
        src={service.image}
        alt={service.treatment}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {service.treatment}
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          {service.description.length > 150
            ? `${service.description.substring(0, 150)}...`
            : service.description}
        </p>
        <p className="text-lg font-semibold text-gray-700 mb-4">
          Cost: ${service.cost}
        </p>
        <NavLink 
          to={`/details/${service.id}`}
          className="inline-block bg-gray-600 text-white py-2 px-4 rounded hover:font-bold"
        >
          Checkout More
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceCard;
// import React from "react";

// const ServiceCard = ({ service }) => {
//   const truncate = (text, maxLength) =>
//     text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 p-3">
//       <img
//         src={service.image}
//         alt={`Image of ${service.treatment}`}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-6">
//         <h2 className="text-xl font-bold text-gray-800 mb-2">
//           {service.treatment}
//         </h2>
//         <p className="text-sm text-gray-600 mb-4">
//           {truncate(service.description, 150)}
//         </p>
//         <p className="text-lg font-semibold text-gray-700 mb-4">
//           Cost: ${service.cost}
//         </p>
//         <a
//           href={service.link || "#"}
//           className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
//         >
//           Checkout More
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;
