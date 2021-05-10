import React, { useState } from "react";

import TimeEntryForm from "../src/components/TimeEntryForm";
import Header from "../src/components/Header";
import TimeEntries from "../src/components/TimeEntries";
import * as Types from "../src/types";

import * as Styled from "../src/components/PageContainer.styled";
import { getTimeEntries } from "../src/services/getTimeEntries";

function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const [timeEntries, setTimeEntries] = React.useState<Types.TimeEntry[]>([]);

  async function updateTimeEntries() {
    setTimeEntries(await getTimeEntries());
  }

  return (
    <Styled.PageContainer isOpen={isOpen}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <TimeEntryForm updateTimeEntries={updateTimeEntries} />
      <TimeEntries timeEntries={timeEntries} updateTimeEntries={updateTimeEntries} />
    </Styled.PageContainer>
  );
}

export default HomePage;
