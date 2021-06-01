import React, { useState } from "react";

import Header from "../src/components/header/Header";
import TeamMembers from "../src/components/team-members/TeamMembers";
import TeamMemberForm from "../src/components/team-members/TeamMemberForm";

import * as Styled from "../page-styling/PageContainer.styled";

import { getTeamMembers } from "../src/services/getTeamMembers";
import { useStore } from "../src/stores/ZustandStore";
import SearchBar from "../src/components/search-bar/SearchBar";

function TeamMembersPage() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isVisible] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const [isFormVisible, setIsFormVisible] = useState(true);

  const teamMembers = useStore((state) => state.teamMembers);
  const setTeamMembers = useStore((state) => state.setTeamMembers);

  async function retrieveTeamMembers() {
    setTeamMembers(await getTeamMembers());
  }

  React.useEffect(() => {
    retrieveTeamMembers();
  }, []);

  return (
    <Styled.PageContainer isOpen={isOpen}>
      <Header page="team-members" isOpen={isOpen} setIsOpen={setIsOpen} />
      <SearchBar
        clearFilters={retrieveTeamMembers}
        count={teamMembers.length}
        pageTitle="Team members"
        isVisible={!isVisible}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Styled.EntryWrapper>
        <TeamMemberForm
          isOpen={isOpen}
          isFormVisible={isFormVisible}
          setIsFormVisible={setIsFormVisible}
        />
        <TeamMembers searchInput={searchInput} teamMembers={teamMembers} />
      </Styled.EntryWrapper>
    </Styled.PageContainer>
  );
}

export default TeamMembersPage;
