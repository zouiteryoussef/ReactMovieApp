import React from "react";

const Rating = ({ count, onChangeRating = () => {} }) => {
  let starsHtml = [];
  for (let i = 0; i < 5; i++) {
    if (i < count) {
      starsHtml.push(
        <span onClick={() => onChangeRating(i + 1)} key={i}>
          ★
        </span>
      );
    } else {
      starsHtml.push(
        <span onClick={() => onChangeRating(i + 1)} key={i}>
          ☆
        </span>
      );
    }
  }
  return <div className="rating-filter-stars">{starsHtml}</div>;
};

export default Rating;
