/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Link from "next/link";

import * as Styled from "./Navigation.styled";

interface NavigationProps {
  isOpen: boolean;
  page: "team-members" | "index";
}

function Navigation({ isOpen, page }: NavigationProps): React.ReactElement {
  return (
    <nav>
      <Styled.NavList isOpen={isOpen}>
        <Styled.ListItem isActive={page === "index"}>
          <Link href="/">
            <a>Timesheets</a>
          </Link>
        </Styled.ListItem>
        <Styled.ListItem isActive={page === "team-members"}>
          <Link href="/team-members">
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
