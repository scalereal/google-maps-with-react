import { useState } from "react";
import CustomMarker2 from "../Custom Marker2";
import CustomMarker1 from "../CustomMarker1";
import CustomMarker3 from "../CustomMarker3";
import DefaultMapView from "../DefaultMapView";
import DefaultMarker from "../DefaultMarker";
import DynamicMapView from "../DynamicMapView";
import InformationWindow from "../InformationWindow";
import Sidebar from "../Sidebar";
import ZoomLevel from "../ZoomLevel";
import {
  DashboardContainer,
  MapSection,
  SidebarSection,
} from "./Dashboard.styled";

export const Dashboard = () => {
  const [mapView, setMapView] = useState("defaultMap");
  const handleMapViewChnage = (value) => setMapView(value);

  const renderMap = (feature) => {
    switch (feature) {
      case "defaultMap":
        return <DefaultMapView />;
      case "defaultMarker":
        return <DefaultMarker />;
      case "customMarker1":
        return <CustomMarker1 />;
      case "customMarker2":
        return <CustomMarker2 />;
      case "customMarker3":
        return <CustomMarker3 />;
      case "dynamicMapView":
        return <DynamicMapView />;
      case "infoWindow":
        return <InformationWindow />;
      case "zoomLevel":
        return <ZoomLevel />;
      default:
        return null;
    }
  };

  return (
    <DashboardContainer>
      <SidebarSection>
        <Sidebar mapView={mapView} handleMapViewChnage={handleMapViewChnage} />
      </SidebarSection>
      <MapSection>{renderMap(mapView)}</MapSection>
    </DashboardContainer>
  );
};
