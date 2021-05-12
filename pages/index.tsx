import React, { useContext, useState } from "react";

import TimeEntryForm from "../src/components/TimeEntryForm";
import Header from "../src/components/Header";
import TimeEntries from "../src/components/TimeEntries";
import { StoreContext } from "../src/stores/StoreProvider";

import * as Styled from "../src/components/PageContainer.styled";
import { getTimeEntries } from "../src/services/getTimeEntries";

function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const state = useContext(StoreContext);
  const [, setTimeEntries] = state.timeEntries;

  async function updateTimeEntries() {
    setTimeEntries(await getTimeEntries());
  }

  return (
    <Styled.PageContainer isOpen={isOpen}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <TimeEntryForm
        updateTimeEntries={updateTimeEntries}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <TimeEntries updateTimeEntries={updateTimeEntries} />
    </Styled.PageContainer>
  );
}

export default HomePage;
