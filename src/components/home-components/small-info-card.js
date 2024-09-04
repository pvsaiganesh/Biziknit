import React from "react";

const SmallInfoCard = ({ number, title }) => {
  return (
    <div class="text-center">
      <p class="fs-4 mb-0">{number}</p>
      <p class="fs-6">{title}</p>
    </div>
  );
};

export default SmallInfoCard;
