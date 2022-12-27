/* global google */
import { GoogleMap, Polygon, Polyline } from "@react-google-maps/api";
import React from "react";
import { useState } from "react";
import { route } from "./data";

export const Geofence = () => {
  const [polygonPath, setPolygonPath] = useState();

  const polygonOptions = {
    strokeColor: "yellow",
    strokeOpacity: 0.5,
    strokeWeight: 3.0,
    fillColor: "red",
    fillOpacity: 0.2,
  };

  const onLoad = () => {
    const path = route;
    const bufferDistance = 0.00008;
    const x = path.map(
      (obj) =>
        new google.maps.LatLng(
          obj.lat + bufferDistance,
          obj.lng - bufferDistance
        )
    );
    path.reverse();
    const y = path.map(
      (obj) =>
        new google.maps.LatLng(
          obj.lat - bufferDistance,
          obj.lng + bufferDistance
        )
    );
    const coordinates = [...x, ...y];
    const areaBoundary = coordinates.map((obj) => {
      return { lat: obj.lat(), lng: obj.lng() };
    });
    setPolygonPath(areaBoundary);
  };

  return (
    <GoogleMap
      mapContainerClassName="map-container"
      center={{ lat: 18.518056173723338, lng: 73.85410993103704 }}
      zoom={17}
      onLoad={onLoad}
    >
      <Polyline path={route} />
      <Polygon path={polygonPath} options={polygonOptions} />
    </GoogleMap>
  );
};
