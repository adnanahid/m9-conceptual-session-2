// import React, { useState } from "react";

// const Feedback = () => {
//     const [feedbackData, setFeedBackData] = useState([]);

//   useEffect(() => {
//     fetch("/happyClient.json")
//       .then((res) => res.json())
//       .then((data) => setFeedBackData(data))
//       .catch((error) => console.error("Error fetching feedback:", error))
//   }, []);
//   console.log(feedbackData);

//   return (
//     <div>
//       <h1>Feedback</h1>
//       <ul>
//         {feedbackData.map((item, index) => (
//           <li key={index}>
//             <strong>{item.name}:</strong> {item.comment}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feedback;
import React, { useEffect, useState } from "react";

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    fetch("/happyClient.json")
      .then((res) => res.json())
      .then((data) => setFeedbackData(data))
      .catch((error) => console.error("Error fetching feedback:", error));
  }, []);

  return (
    <div>
      <h1 className="text-6xl font-bold mt-12">Feedback's</h1>
      <div className="">
        {feedbackData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 mx-auto border rounded-lg shadow-lg overflow-hidden bg-white my-6"
          >
  
              <img
                src={item.userImg}
                alt={item.name}
                className="w-36 h-36 rounded-full object-cover"
              />
     
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{item.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
