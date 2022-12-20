import { GoogleMap, Marker } from "@react-google-maps/api";
import React, { useState } from "react";

export const ZoomLevel = () => {
  const [mapRef, setMapRef] = useState();
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
    setMapRef(map);
  };

  const handleMarkerClick = (lat, lng) => {
    mapRef?.setZoom(15);
    mapRef?.panTo({ lat, lng });
  };

  return (
    <GoogleMap mapContainerClassName="map-container" onLoad={onLoad}>
      {markers.map(({ lat, lng }) => (
        <Marker
          onClick={() => {
            handleMarkerClick(lat, lng);
          }}
          position={{ lat, lng }}
        />
      ))}
    </GoogleMap>
  );
};
