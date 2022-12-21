import { DrawingManager, GoogleMap } from "@react-google-maps/api";
import React, { useMemo } from "react";

export const DrawingTool = () => {
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  return (
    <GoogleMap mapContainerClassName="map-container" center={center} zoom={10}>
      <DrawingManager />
    </GoogleMap>
  );
};
