import React from "react";

const SmallInfoCard = ({ number, title, alignment }) => {
  const align = alignment ? alignment : "flex-column text-center";
  const padingright = alignment ? "pe-2" : "";
  return (
    <div className={"d-flex " + align + " pe-3"}>
      <p className={"fs-4 mb-0 " + padingright}>{number}</p>
      <p className="fs-6 mb-0">{title}</p>
    </div>
  );
};

export default SmallInfoCard;
