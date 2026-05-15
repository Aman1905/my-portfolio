import React from "react";

const PolaroidCard = ({ image, title, index }) => {
  return (
    <div className="polaroid-card" style={{ "--i": index }}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default PolaroidCard;