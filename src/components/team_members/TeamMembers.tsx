import React, { useContext, useEffect } from "react";
import TeamMember from "./TeamMember";

import * as Styled from "./TeamMembers.styled";

import { StoreContext } from "../../stores/StoreProvider";

interface TeamMembersProps {
  updateTeamMembers: Function;
}

function TeamMembers({ updateTeamMembers }: TeamMembersProps) {
  const state = useContext(StoreContext);
  const [teamMembers] = state.teamMembers;

  useEffect(() => {
    updateTeamMembers();
  }, []);

  return (
    <Styled.TeamMembers>
      {teamMembers.map((teamMember) => {
        const dateObject = new Date(teamMember.startingDate);
        const currentDate = dateObject.toLocaleDateString("nl-NL");

        return (
          <TeamMember
            firstName={teamMember.firstName}
            lastName={teamMember.lastName}
            jobFunction={teamMember.jobFunction}
            employer={teamMember.employer}
            startingDate={currentDate}
            id={teamMember.id}
          />
        );
      })}
    </Styled.TeamMembers>
  );
}

export default TeamMembers;
