import React from "react";

const ErrorComponent = ({ message, onDismiss }) => {
  return (
    <div>
      <h1 className="text-7xl font-bold text-gray-600 flex items-center justify-center h-screen">Error happen</h1>
    </div>
  );
};

export default ErrorComponent;
