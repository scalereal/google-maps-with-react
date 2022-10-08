import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

export const CustomMarker1 = () => {
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  const markers = [
    { lat: 18.5204, lng: 73.8567, color: "green" },
    { lat: 18.5128, lng: 73.8529, color: "blue" },
    { lat: 18.5014, lng: 73.8529, color: "pink" },
    { lat: 18.5078, lng: 73.8528, color: "purple" },
    { lat: 18.5164, lng: 73.8539, color: "yellow" },
  ];
  return (
    <GoogleMap mapContainerClassName="map-container" center={center} zoom={14}>
      {markers.map(({ lat, lng, color }) => (
        <Marker
          position={{ lat, lng }}
          icon={`http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`}
        />
      ))}
    </GoogleMap>
  );
};
