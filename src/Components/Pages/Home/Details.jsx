import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const matchedInfo = data.find((item) => item.id === parseInt(id));
    setInfo(matchedInfo);
  }, [data, id]);

//   if (!info) {
//     return <p>Loading details...</p>;
//   }
  return (
    <div className="container lg:w-8/12 mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">{info?.treatment}</h1>
        <img
          src={info?.image}
          alt={info?.treatment}
          className="w-full h-96 object-cover rounded mb-4"
        />
        <p className="text-gray-700 mb-4">{info?.description}</p>
        <p className="text-lg font-semibold text-gray-800">
          Cost: ${info?.cost}
        </p>
        <Link to="/" className="btn bg-gray-600 px-10 text-xl my-5 text-white">back</Link>
      </div>
    </div>
  );
};

export default Details;
// import React, { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";

// const Details = () => {
//   const { id } = useParams(); // Extract `id` from the URL
//   const data = useLoaderData(); // Load data from the router
//   const [info, setInfo] = useState(null); // State to hold the selected item

//   useEffect(() => {
//     // Match the item using the parsed ID
//     const matchedInfo = data.find((item) => item.id === parseInt(id));
//     setInfo(matchedInfo); // Update the state with matched item
//   }, [data, id]);

//   // Handle cases where `info` is null
//   if (!info) {
//     return <p>Loading details...</p>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-2xl font-bold mb-4">{info.treatment}</h1>
//         <img
//           src={info.image}
//           alt={info.treatment}
//           className="w-full h-64 object-cover rounded mb-4"
//         />
//         <p className="text-gray-700 mb-4">{info.description}</p>
//         <p className="text-lg font-semibold text-gray-800">Cost: ${info.cost}</p>
//       </div>
//     </div>
//   );
// };

// export default Details;
