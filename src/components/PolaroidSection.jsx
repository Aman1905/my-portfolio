import React from "react";
import PolaroidCard from "./PolaroidCard";

const PolaroidSection = ({ title, description, photoKeyword }) => {
  const numPhotos = Math.floor(Math.random() * 6) + 3; // 3 to 8 photos
  const photos = Array.from({ length: numPhotos }).map(
    (_, i) => `https://source.unsplash.com/300x200/?${photoKeyword}&sig=${i}`
  );

  return (
    <div className="polaroid-section">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="polaroid-gallery">
        {photos.map((img, idx) => (
          <PolaroidCard key={idx} image={img} title={title} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default PolaroidSection;