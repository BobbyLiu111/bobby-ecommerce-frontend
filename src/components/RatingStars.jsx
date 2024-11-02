import React from "react";

function RatingStars({ rating }) {
  const stars = [];
  for (let index = 1; index <= 5; index++) {
    stars.push(
      <i
        key={index}
        className={`ri-star${index <= rating ? "-fill" : "-line"}`}
      ></i>
    );
  }
  return <div className="product__rating">{stars}</div>;
}

export default RatingStars;
