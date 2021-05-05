import React from "react";
import * as Styled from "./Navigation.styled";

function Navigation({ isOpen }) {
  return (
    <nav>
      <Styled.NavList isOpen={isOpen}>
        <Styled.ListItem active>Timesheets</Styled.ListItem>
        <Styled.ListItem>Team members</Styled.ListItem>
        <Styled.ListItem>Projects</Styled.ListItem>
        <Styled.ListItem>Clients</Styled.ListItem>
        <Styled.ListItem>Documents</Styled.ListItem>
      </Styled.NavList>
    </nav>
  );
}

export default Navigation;
