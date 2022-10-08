import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SidebarHeader = styled.h2`
  text-align: center;
  margin: 2rem 1rem 1rem;
  &::after {
    content: "";
    display: block;
    border-top: 1px solid grey;
    margin-top: 1rem;
  }
`;

export const SidebarContent = styled.div`
  margin: 0 1rem;
`;

export const ListItem = styled.li`
  font-weight: 600;
  margin-bottom: 2rem;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#4285F4" : "#fff")}; ;
`;
