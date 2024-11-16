import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Modal from "../../Modal";

const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const matchedInfo = data.find((item) => item.id === parseInt(id));
    setInfo(matchedInfo);
  }, [data, id]);

  if (!info) {
    return <p>Loading details...</p>;
  }
  return (
    <div className="container lg:w-8/12 mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">{info.treatment}</h1>
        <img
          src={info.image}
          alt={info.treatment}
          className="w-full h-96 object-cover rounded mb-4"
        />
        <p className="text-gray-700 mb-4">{info.description}</p>
        <p className="text-lg font-semibold text-gray-800">
          Cost: ${info.cost}
        </p>
        <div className="flex justify-between">
          <Link
            onClick={()=>document.getElementById('my_modal_5').showModal()}
            className="btn bg-gray-600 px-10 text-xl my-5 text-white"
          >
            Make Appointment
          </Link>
          <Link
            to="/"
            className="btn bg-gray-600 px-10 text-xl my-5 text-white"
          >
            back
          </Link>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default Details;
// import React, { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";

// const Details = () => {
//   const { id } = useParams(); // Extract `id` from the URL
//   const data = useLoaderData(); // Load data from the router

//   const matchedInfo = data.find((item) => item.id === parseInt(id));

//   return (
//     <div className="container mx-auto p-6">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-2xl font-bold mb-4">{matchedInfo.treatment}</h1>
//         <img
//           src={matchedInfo.image}
//           alt={matchedInfo.treatment}
//           className="w-full h-64 object-cover rounded mb-4"
//         />
//         <p className="text-gray-700 mb-4">{matchedInfo.description}</p>
//         <p className="text-lg font-semibold text-gray-800">
//           Cost: ${matchedInfo.cost}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Details;
