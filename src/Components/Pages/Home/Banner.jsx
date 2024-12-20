import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[500px] lg:my-12 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-5/12">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="rounded-lg shadow-2xl lg:w-8/12 mx-auto"
        />
        </div>
        <div className="lg:w-7/12 lg:pl-12">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn text-white text-lg bg-gray-600 hover:bg-white hover:text-gray-600">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
