import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { feature } from "topojson-client";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import trips from "../data/trips.json";
import { useNavigate } from "react-router-dom";

const geoUrl = "/india.topo.json";
const pastelColors = [
  "#A8DADC", "#F4A261", "#F6BD60", "#B5E48C", "#E5989B",
  "#9BBDF9", "#FFD6A5", "#CDB4DB", "#FFB5A7", "#A0C4FF",
  "#BEE1E6", "#F9D5A7", "#E2F0CB", "#D7BDE2", "#F5C6AA",
  "#B8E0D2", "#F7E1D7", "#D1C4E9", "#C6DEF1", "#E4C1F9",
  "#C5E1A5", "#FFCCBC", "#FFF176", "#80CBC4", "#81D4FA",
  "#E6EE9C", "#CE93D8", "#FFAB91", "#AED581", "#BA68C8",
  "#F48FB1", "#A5D6A7", "#FFE082", "#4DD0E1", "#81C784",
  "#B39DDB", "#90CAF9"
];

export default function IndiaMap() {
  const [geoData, setGeoData] = useState(null);
  const [highlightedDistricts, setHighlightedDistricts] = useState([]);
  const [hoveredPlace, setHoveredPlace] = useState(null);
  const [tooltipPos, setTooltipPos] = useState([0,0]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(geoUrl)
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (!geoData) return;
    try {
      const districtsKey = geoData.objects.districts ? "districts" : Object.keys(geoData.objects)[0];
      const allDistricts = feature(geoData, geoData.objects[districtsKey]).features;
      const visited = [];
      Object.values(trips).forEach(stateData => {
        stateData.places?.forEach(place => {
          const pt = { type:"Point", coordinates: place.coordinates };
          allDistricts.forEach(district => {
            if (booleanPointInPolygon(pt,district)) visited.push(district.properties.district);
          });
        });
      });
      setHighlightedDistricts(visited);
    } catch(e){ console.error(e); }
  }, [geoData]);

  if (!geoData) return <p>Loading map...</p>;

  return (
    <div className="relative w-full h-[600px] flex justify-center items-center">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 1000, center: [80,22.5] }}
        width={800}
        height={600}
      >
        <Geographies geography={geoData}>
          {({ geographies, projection }) => (
            <>
              {/* STATES */}
              {geographies.map((geo,index)=>{
                const stateName = geo.properties.st_nm || geo.properties.NAME_1 || geo.properties.name;
                const visited = trips[stateName];
                const fillColor = visited ? pastelColors[index%pastelColors.length]:"#fff";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={()=>visited && navigate(`/state/${stateName.toLowerCase()}`)}
                    style={{
                      default: { fill: fillColor, stroke: "#00000088", strokeWidth: 0.5 },
                      hover: { fill: fillColor, stroke: "#00000088", strokeWidth:0.6, cursor:visited?"pointer":"default" },
                      pressed: { fill: fillColor }
                    }}
                  />
                );
              })}

              {/* DISTRICTS */}
              {geoData.objects.districts && geographies.map(geo=>{
                if(!highlightedDistricts.includes(geo.properties.district)) return null;
                return <Geography key={geo.rsmKey} geography={geo} style={{default:{fill:"#FFD166",stroke:"#333",strokeWidth:0.6}, hover:{fill:"#FFD166",stroke:"#333",strokeWidth:0.6}}} />
              })}

            {/* MARKERS */}
            {Object.entries(trips).map(([stateName,stateData]) => 
              stateData.places?.map(place => {
                if(!place.coordinates || !Array.isArray(place.coordinates) || place.coordinates.length !== 2 || place.coordinates.some(isNaN)) return null;
                const [x, y] = projection(place.coordinates);

                const iconSize = 20; // width & height of the icon
                return (
                  <g key={`${stateName}-${place.name}`}>
                    <image
                      x={x - iconSize / 2}  // center the icon on the point
                      y={y - iconSize}      // position so tip points to location
                      width={iconSize}
                      height={iconSize}
                      href="https://img.icons8.com/?size=100&id=uzeKRJIGwbBY&format=png&color=000000"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`/place/${stateName.toLowerCase()}/${place.name.toLowerCase()}`)}
                      onMouseEnter={() => { setHoveredPlace(place); setTooltipPos([x, y - iconSize]); }}
                      onMouseLeave={() => setHoveredPlace(null)}
                    />
                  </g>
                );
              })
            )}
            </>
          )}
        </Geographies>
      </ComposableMap>

      {/* TOOLTIP */}
      {hoveredPlace && (
        <div
          className="absolute px-2 py-1 bg-black text-white text-sm rounded pointer-events-none"
          style={{left: tooltipPos[0], top: tooltipPos[1], transform:"translate(-50%, -100%)"}}
        >
          {hoveredPlace.name}
        </div>
      )}
    </div>
  );
}
