import { GoogleMap } from "@react-google-maps/api";
import { useMemo } from "react";

export const DefaultMapView = () => {
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  return (
    <GoogleMap
      mapContainerClassName="map-container"
      center={center}
      zoom={10}
    ></GoogleMap>
  );
};
