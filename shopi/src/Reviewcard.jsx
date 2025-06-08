import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Reviewcard({ review }) {
  if (review.length === 0) {
    return <div className="text-center p-4 text-2xl text-sky-500/100">No reviews available.</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div className="w-full max-w-[480px] m-auto ">
      
      <Slider {...settings}>
        {review.map((item, index) => (
          <div
            key={index}
            className="px-2"
          >
            <div className="bg-white rounded-lg shadow-md min-w-50 max-w-64 text-center h-60">
              <div className="bg-sky-500/100 h-28 flex items-center mb-4 rounded-t-lg">
              <img
                src="/vite.svg"
                alt="Reviewer"
                className="w-16 h-16 rounded-full mx-auto"
              />
              </div>
              <p className="text-base font-medium mb-2">{item.comment}</p>
              <p className="text-sm text-gray-500">Rating: {item.rating}</p>
              <p className="text-sm text-gray-500">{item.reviewerEmail}</p>
              <p className="text-sm text-gray-500">{item.reviewerName}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    
  );
}

export default Reviewcard;
