import React, { useState, useContext } from "react";

import * as Styled from "./SearchBar.styled";
import { StoreContext } from "../../stores/StoreProvider";

import ArrowDown from "../../../public/assets/arrow-down.svg";
import SearchIcon from "../../../public/assets/magnifying-glass.svg";

interface SearchBarProps {
  pageTitle: "Timesheets" | "Team members";
  count: number;
  clearFilters: Function;
}

function SearchBar({ pageTitle, count, clearFilters }: SearchBarProps) {
  const [isListVisible, setIsListVisible] = useState(false);
  const handleClick = () => setIsListVisible(!isListVisible);

  const state = useContext(StoreContext);
  const [timeEntries, setTimeEntries] = state.timeEntries;

  const entryFilter = (event) => {
    setTimeEntries([
      ...timeEntries.filter((timeEntry) => timeEntry.client === event.target.getAttribute("name")),
    ]);
    setIsListVisible(!isListVisible);
  };

  const selectClients = timeEntries.map((timeEntry) => timeEntry.client).sort();

  const clientSet = new Set(selectClients);
  const clientArray = Array.from(clientSet);

  const clientList = clientArray.map((client, index) => {
    return (
      <li key={timeEntries[index].id}>
        <button type="button" name={client} onClick={entryFilter}>
          {client}
        </button>
      </li>
    );
  });

  const noFilters = () => {
    clearFilters();
    setIsListVisible(!isListVisible);
  };

  return (
    <Styled.SearchBar>
      <Styled.PageTitle>
        {pageTitle}
        <span>{`${count} entries`}</span>
      </Styled.PageTitle>
      <Styled.ButtonWrapper>
        <Styled.FilterOption isVisible={pageTitle === "Timesheets"}>
          <Styled.FilterButton isListVisible={isListVisible} onClick={handleClick}>
            <p>All clients</p>
            <ArrowDown />
          </Styled.FilterButton>
          <Styled.ClientList isListVisible={isListVisible}>
            {clientList}
            <li>
              <button type="button" onClick={noFilters}>
                Clear filters
              </button>
            </li>
          </Styled.ClientList>
        </Styled.FilterOption>
        <Styled.SearchField placeholder="Search" />
        <SearchIcon />
      </Styled.ButtonWrapper>
    </Styled.SearchBar>
  );
}

export default SearchBar;
