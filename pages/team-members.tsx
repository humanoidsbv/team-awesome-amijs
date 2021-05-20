import React, { useState, useContext } from "react";

import Header from "../src/components/header/Header";
import TeamMembers from "../src/components/team-members/TeamMembers";
import TeamMemberForm from "../src/components/team-members/TeamMemberForm";

import * as Styled from "../page-styling/PageContainer.styled";

import { getTeamMembers } from "../src/services/getTeamMembers";
import { StoreContext } from "../src/stores/StoreProvider";

function TeamMembersPage() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const [isFormVisible, setIsFormVisible] = useState(true);

  const state = useContext(StoreContext);
  const [, setTeamMembers] = state.teamMembers;

  async function updateTeamMembers() {
    setTeamMembers(await getTeamMembers());
  }

  return (
    <Styled.PageContainer isOpen={isOpen}>
      <Header page="team-members" isOpen={isOpen} setIsOpen={setIsOpen} />
      <Styled.EntryWrapper>
        <TeamMemberForm
          updateTeamMembers={updateTeamMembers}
          isOpen={isOpen}
          isFormVisible={isFormVisible}
          setIsFormVisible={setIsFormVisible}
        />
        <TeamMembers updateTeamMembers={updateTeamMembers} />
      </Styled.EntryWrapper>
    </Styled.PageContainer>
  );
}

export default TeamMembersPage;
