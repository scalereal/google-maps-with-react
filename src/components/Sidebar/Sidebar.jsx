import { listItems } from "./data";
import {
  ListItem,
  SidebarContainer,
  SidebarContent,
  SidebarHeader,
} from "./Sidebar.styled";

export const Sidebar = ({ mapView, handleMapViewChnage }) => {
  console.log(mapView);
  return (
    <SidebarContainer>
      <SidebarHeader>Google Maps with React</SidebarHeader>
      <SidebarContent>
        <ul>
          {listItems.map((item) => (
            <ListItem
              key={item.key}
              isActive={item.key === mapView}
              onClick={() => {
                handleMapViewChnage(item.key);
              }}
            >
              {item.value}
            </ListItem>
          ))}
        </ul>
      </SidebarContent>
    </SidebarContainer>
  );
};
