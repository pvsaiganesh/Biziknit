import React from "react";

const SmallInfoCard = ({ number, title, alignment }) => {
  const align = alignment ? alignment : "flex-column";
  const padingright = alignment ? "pe-2" : "";
  return (
    <div class={"d-flex " + align + " pe-3"}>
      <p class={"fs-6 mb-0 " + padingright}>{number}</p>
      <p class="fs-6 mb-0">{title}</p>
    </div>
  );
};

export default SmallInfoCard;
