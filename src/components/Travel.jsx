import React from "react";
import { useParams, Link } from "react-router-dom";
import trips from "../data/trips.json"


export default function Travel() {
  const { state } = useParams();
  const stateName = state.charAt(0).toUpperCase() + state.slice(1).toLowerCase();
  const trip = trips[stateName];

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

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">← Back to Map</Link>
      <h1 className="text-3xl font-bold mb-4">{trip.title}</h1>
      <img src={trip.cover} alt={trip.title} className="w-full h-96 object-cover rounded-xl shadow-lg mb-6" />
      <p className="text-lg text-gray-700 mb-6">{trip.story}</p>
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {trip.gallery.map((img, i) => (
          <img key={i} src={img} alt={`${stateName} ${i}`} className="rounded-xl shadow-md hover:scale-105 transition-transform" />
        ))}
      </div>
    </div>
  );
}
