import { GoogleMap } from "@react-google-maps/api";
import React, { useMemo } from "react";

export const CustomMapStyles = () => {
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  return (
    <GoogleMap
      mapContainerClassName="map-container"
      center={center}
      zoom={10}
      options={{ mapId: "5bb569c127af44ba" }}
    />
  );
};
