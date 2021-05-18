import React from "react";
import Link from "next/link";

import * as Styled from "./Navigation.styled";

interface NavigationProps {
  isOpen: boolean;
}

function Navigation({ isOpen }: NavigationProps): React.ReactElement {
  return (
    <nav>
      <Styled.NavList isOpen={isOpen}>
        <Styled.ListItem>
          <Link href="/" passHref>
            <a>Timesheets</a>
          </Link>
        </Styled.ListItem>
        <Styled.ListItem>
          <Link href="/team-members" passHref>
            <a>Team members</a>
          </Link>
        </Styled.ListItem>
        <Styled.ListItem>Projects</Styled.ListItem>
        <Styled.ListItem>Clients</Styled.ListItem>
        <Styled.ListItem>Documents</Styled.ListItem>
      </Styled.NavList>
    </nav>
  );
}

export default Navigation;
