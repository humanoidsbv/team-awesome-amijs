import React from "react";

import TeamMember from "./TeamMember";
import * as Types from "../../types/types";

import * as Styled from "./TeamMembers.styled";

interface TeamMembersProps {
  teamMembers: Types.TeamMember[];
}

function TeamMembers({ teamMembers }: TeamMembersProps) {
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
            bio={teamMember.bio}
            address={teamMember.address}
            zipCode={teamMember.zipCode}
            city={teamMember.city}
            email={teamMember.email}
            key={teamMember.id}
          />
        );
      })}
    </Styled.TeamMembers>
  );
}

export default TeamMembers;
