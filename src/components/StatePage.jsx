import React from "react";
import trips from "../data/trips.json";
import { Link } from "react-router-dom";

export default function StatePage({ stateName }) {
  const matchedState = Object.keys(trips).find(
    key => key.toLowerCase() === stateName.toLowerCase()
  );

  const trip = matchedState ? trips[matchedState] : null;

  if (!trip) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">No data available</h2>
        <Link to="/" className="text-blue-600 underline mt-4 inline-block">
          Back to map
        </Link>
      </div>
    );
  }

  const gallery = trip.gallery || trip.places?.map(
    place => `https://source.unsplash.com/300x200/?${place.name.toLowerCase()}`
  );

  const cover = trip.cover || gallery[0];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{trip.title || `Exploring ${matchedState}`}</h1>
      <img src={cover} alt={matchedState} className="w-full h-96 object-cover rounded-xl shadow-lg mb-6" />
      <p className="text-lg text-gray-700 mb-6">{trip.story || "Discover the amazing places of this state."}</p>
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {gallery?.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${matchedState} ${i}`}
            className="rounded-xl shadow-md hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  );
}
