import React, { useState, useContext } from "react";

import Header from "../src/components/header/Header";
import TeamMembers from "../src/components/team-members/TeamMembers";
import TeamMemberForm from "../src/components/team-members/TeamMemberForm";

import * as Styled from "../page-styling/PageContainer.styled";

import { getTeamMembers } from "../src/services/getTeamMembers";
import { StoreContext } from "../src/stores/StoreProvider";
import SearchBar from "../src/components/search-bar/SearchBar";

function TeamMembersPage() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const [isFormVisible, setIsFormVisible] = useState(true);

  const state = useContext(StoreContext);
  const [teamMembers, setTeamMembers] = state.teamMembers;

  const entryCount = teamMembers.length;

  async function retrieveTeamMembers() {
    setTeamMembers(await getTeamMembers());
  }

  React.useEffect(() => {
    retrieveTeamMembers();
  }, []);

  return (
    <Styled.PageContainer isOpen={isOpen}>
      <Header page="team-members" isOpen={isOpen} setIsOpen={setIsOpen} />
      <SearchBar clearFilters={retrieveTeamMembers} count={entryCount} pageTitle="Team members" />
      <Styled.EntryWrapper>
        <TeamMemberForm
          isOpen={isOpen}
          isFormVisible={isFormVisible}
          setIsFormVisible={setIsFormVisible}
        />
        <TeamMembers teamMembers={teamMembers} />
      </Styled.EntryWrapper>
    </Styled.PageContainer>
  );
}

export default TeamMembersPage;
