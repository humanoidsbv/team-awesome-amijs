import React from "react";

import HamburgerIcon from "../../../public/assets/group.svg";
import CrossIcon from "../../../public/assets/shape.svg";

import * as Styled from "./Header.styled";
import Navigation from "./Navigation";
import AccountButton from "./AccountButton";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  page: "team-members" | "index";
}

function Header({ isOpen, setIsOpen, page }: HeaderProps) {
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Styled.Header isOpen={isOpen}>
      <Styled.Title>team awesome</Styled.Title>
      <Styled.Button onClick={handleClick}>
        {isOpen ? <HamburgerIcon /> : <CrossIcon />}
      </Styled.Button>
      <Navigation page={page} isOpen={isOpen} />
      <AccountButton />
    </Styled.Header>
  );
}

export default Header;
