import React, { useContext, useState } from "react";

import TimeEntryForm from "../src/components/time_entries/TimeEntryForm";
import Header from "../src/components/header/Header";
import TimeEntries from "../src/components/time_entries/TimeEntries";

import * as Styled from "../src/styling/PageContainer.styled";

import { getTimeEntries } from "../src/services/getTimeEntries";
import { StoreContext } from "../src/stores/StoreProvider";

function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const state = useContext(StoreContext);
  const [, setTimeEntries] = state.timeEntries;

  async function updateTimeEntries() {
    setTimeEntries(await getTimeEntries());
  }

  return (
    <Styled.PageContainer isOpen={isOpen}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Styled.EntryWrapper>
        <TimeEntryForm updateTimeEntries={updateTimeEntries} isOpen={isOpen} />
        <TimeEntries updateTimeEntries={updateTimeEntries} />
      </Styled.EntryWrapper>
    </Styled.PageContainer>
  );
}

export default HomePage;
