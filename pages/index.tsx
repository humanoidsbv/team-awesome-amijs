import React, { useState } from "react";

import TimeEntryForm from "../src/components/time-entries/TimeEntryForm";
import Header from "../src/components/header/Header";
import TimeEntries from "../src/components/time-entries/TimeEntries";

import * as Styled from "../page-styling/PageContainer.styled";

import { getTimeEntries } from "../src/services/getTimeEntries";
import { deleteTimeEntry } from "../src/services/deleteTimeEntries";
import { useStore } from "../src/stores/ZustandStore";
import SearchBar from "../src/components/search-bar/SearchBar";

function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isVisible] = useState(true);

  const timeEntries = useStore((state) => state.timeEntries);
  const setTimeEntries = useStore((state) => state.setTimeEntries);

  async function retrieveTimeEntries() {
    setTimeEntries(await getTimeEntries());
  }

  async function deleteEntry(id: number) {
    deleteTimeEntry(id);
    retrieveTimeEntries();
  }

  React.useEffect(() => {
    retrieveTimeEntries();
  }, []);

  return (
    <Styled.PageContainer isOpen={isOpen}>
      <Header page="index" isOpen={isOpen} setIsOpen={setIsOpen} />
      <SearchBar
        clearFilters={retrieveTimeEntries}
        count={timeEntries.length}
        pageTitle="Timesheets"
        isVisible={isVisible}
      />
      <Styled.EntryWrapper>
        <TimeEntryForm isOpen={isOpen} />
        <TimeEntries timeEntries={timeEntries} deleteEntry={deleteEntry} />
      </Styled.EntryWrapper>
    </Styled.PageContainer>
  );
}

export default HomePage;
