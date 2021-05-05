import React, { useState } from "react";

import HamburgerIcon from "../../public/assets/group.svg";
import CrossIcon from "../../public/assets/shape.svg";

import * as Styled from "./Header.styled";
import Navigation from "./Navigation";
import AccountButton from "./AccountButton";

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Styled.Header isOpen={isOpen}>
      <Styled.Title>team awesome</Styled.Title>
      <Styled.Button onClick={handleClick}>
        {isOpen ? <HamburgerIcon /> : <CrossIcon />}
      </Styled.Button>
      <Navigation isOpen={isOpen} />
      <AccountButton />
    </Styled.Header>
  );
}

export default Header;
