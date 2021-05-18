import React from "react";
import TeamMember from "./TeamMember";

import * as Styled from "./TeamMembers.styled";

function TeamMembers() {
  return (
    <Styled.TeamMembers>
      <TeamMember />
      <TeamMember />
    </Styled.TeamMembers>
  );
}

export default TeamMembers;
