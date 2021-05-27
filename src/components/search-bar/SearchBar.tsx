import React, { useState } from "react";

import * as Styled from "./SearchBar.styled";
import { useStore } from "../../stores/ZustandStore";

import ArrowDown from "../../../public/assets/arrow-down.svg";
import SearchIcon from "../../../public/assets/magnifying-glass.svg";

interface SearchBarProps {
  pageTitle: "Timesheets" | "Team members";
  count: number;
  clearFilters: Function;
  isVisible: boolean;
  searchInput: string;
  setSearchInput: Function;
}

function SearchBar({
  pageTitle,
  count,
  clearFilters,
  isVisible,
  setSearchInput,
  searchInput,
}: SearchBarProps) {
  const [isListVisible, setIsListVisible] = useState(false);

  const handleClick = () => setIsListVisible(!isListVisible);

  const timeEntries = useStore((state) => state.timeEntries);
  const setTimeEntries = useStore((state) => state.setTimeEntries);

  const entryFilter = (event) => {
    setTimeEntries([
      ...timeEntries.filter((timeEntry) => timeEntry.client === event.target.getAttribute("name")),
    ]);
    setIsListVisible(!isListVisible);
  };

  const sortedClientNames = timeEntries.map((timeEntry) => timeEntry.client).sort();

  const clientSet = new Set(sortedClientNames);
  const clientNames = Array.from(clientSet);

  const clientList = clientNames.map((client, index) => {
    return (
      <li key={timeEntries[index].id}>
        <button type="button" name={client} onClick={entryFilter}>
          {client}
        </button>
      </li>
    );
  });

  const resetFilters = () => {
    clearFilters();
    setIsListVisible(!isListVisible);
  };

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <Styled.SearchBar>
      <Styled.PageTitle>
        {pageTitle}
        <span>{`${count} entries`}</span>
      </Styled.PageTitle>
      <Styled.ButtonWrapper>
        <Styled.FilterOption isVisible={isVisible}>
          <Styled.FilterButton isListVisible={isListVisible} onClick={handleClick}>
            <p>All clients</p>
            <ArrowDown />
          </Styled.FilterButton>
          <Styled.ClientList isListVisible={isListVisible}>
            {clientList}
            <li>
              <button type="button" onClick={resetFilters}>
                Clear filters
              </button>
            </li>
          </Styled.ClientList>
        </Styled.FilterOption>
        <Styled.SearchField
          onChange={handleChange}
          value={searchInput}
          type="text"
          placeholder="Search"
        />
        <SearchIcon />
      </Styled.ButtonWrapper>
    </Styled.SearchBar>
  );
}

export default SearchBar;
