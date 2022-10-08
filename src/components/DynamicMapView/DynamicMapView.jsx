import { GoogleMap, Marker } from "@react-google-maps/api";
import React from "react";

export const DynamicMapView = () => {
  const markers = [
    { lat: 18.5204, lng: 73.8567 },
    { lat: 18.5065, lng: 73.7794 },
    { lat: 18.559, lng: 73.7868 },
    { lat: 18.5913, lng: 73.7389 },
    { lat: 18.6298, lng: 73.7997 },
  ];

  const onLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap mapContainerClassName="map-container" onLoad={onLoad}>
      {markers.map(({ lat, lng }) => (
        <Marker position={{ lat, lng }} />
      ))}
    </GoogleMap>
  );
};
