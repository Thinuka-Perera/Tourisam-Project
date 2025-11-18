import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#12257b]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Text content */}

        <div>
          <h1 className="text-2xl font-semibold text-white">
            {" "}
            What our customer are Saying Us ?
          </h1>
          <p className="mt-6 text-gray-200">
            Discover the experiences of travelers exploring the beauty of Sri
            Lanka with us. From serene beaches to lush mountains, our customers
            share their unforgettable journeys.
          </p>
          {/* Ratings */}
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-white">4.88</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items-center space-x-1">
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* Slider */}
        <div className="overflow-hidden">
          <ReviewSlider/>
        </div>  
      </div>
    </div>
  );
};

export default Reviews;
