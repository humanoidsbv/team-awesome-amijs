import React, { useState } from "react";

import AddTimeEntry from "../src/components/AddTimeEntry";
import Header from "../src/components/Header";
import TimeEntries from "../src/components/TimeEntries";

import * as Styled from "../src/components/PageContainer.styled";

function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Styled.PageContainer isOpen={isOpen}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <AddTimeEntry />
      <TimeEntries />
    </Styled.PageContainer>
  );
}

export default HomePage;
