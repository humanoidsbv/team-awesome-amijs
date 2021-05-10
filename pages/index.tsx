import React, { useState } from "react";

import TimeEntryForm from "../src/components/TimeEntryForm";
import Header from "../src/components/Header";
import TimeEntries from "../src/components/TimeEntries";
import * as Types from "../src/types";

import * as Styled from "../src/components/PageContainer.styled";

function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const [timeEntries, setTimeEntries] = React.useState<Types.TimeEntry[]>([]);

  return (
    <Styled.PageContainer isOpen={isOpen}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <TimeEntryForm timeEntries={timeEntries} setTimeEntries={setTimeEntries} />
      <TimeEntries timeEntries={timeEntries} setTimeEntries={setTimeEntries} />
    </Styled.PageContainer>
  );
}

export default HomePage;
