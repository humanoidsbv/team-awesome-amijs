import React, { useState } from "react";

import Header from "../src/components/header/Header";
import TeamMembers from "../src/components/team_members/TeamMembers";
import TeamMemberForm from "../src/components/team_members/TeamMemberForm";

import * as Styled from "../src/styling/PageContainer.styled";

function TeamMembersPage() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const [isOpenForm, setIsOpenForm] = useState(true);

  return (
    <Styled.PageContainer isOpen={isOpen}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Styled.EntryWrapper>
        <TeamMemberForm isOpen={isOpen} isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm} />
        <TeamMembers />
      </Styled.EntryWrapper>
    </Styled.PageContainer>
  );
}

export default TeamMembersPage;
