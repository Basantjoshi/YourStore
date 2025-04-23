import React from "react";

const RatingStar = ({ rating }) => {
  const stars = [];
  for (let i = 0; i< 5; i++) {
    if (i < rating) {
      stars.push(
        <span
          key={i}
          className={`ri-star${i <= rating ? "-fill" : "-line"}`}
        ></span>
      );
    } else {
      stars.push(<i key={i} className="ri-star-line"></i>);
    }
  }
  return <div className="product__rating">{stars}</div>;
};

export default RatingStar;
