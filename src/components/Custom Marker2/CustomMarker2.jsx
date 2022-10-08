import { GoogleMap, Marker } from "@react-google-maps/api";
import React, { useMemo } from "react";

export const CustomMarker2 = () => {
  const center = useMemo(() => ({ lat: 18.5128, lng: 73.8529 }), []);
  return (
    <GoogleMap mapContainerClassName="map-container" center={center} zoom={15}>
      <Marker
        position={center}
        icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
      />
    </GoogleMap>
  );
};
