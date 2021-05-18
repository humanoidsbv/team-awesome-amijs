import React, { useState } from "react";

import * as Styled from "./TeamMember.styled";
import * as Types from "../../types/types";

import ArrowDownIcon from "../../../public/assets/arrow2-down.svg";
import ArrowUpIcon from "../../../public/assets/arrow2-up.svg";

function TeamMember({
  firstName,
  lastName,
  jobFunction,
  employer,
  startingDate,
}: Types.TeamMember) {
  const [isOpenEntry, setIsOpenEntry] = useState(false);
  const openEntry = () => setIsOpenEntry(!isOpenEntry);

  return (
    <Styled.MemberEntry isOpenEntry={isOpenEntry}>
      <Styled.BasicMemberInformation>
        <Styled.MemberWrapper>
          <Styled.MemberAvatar src="/assets/antje.jpg" alt="" />
          <div>
            <Styled.MemberName>{`${firstName} ${lastName}`}</Styled.MemberName>
            <Styled.MemberFunction>{jobFunction}</Styled.MemberFunction>
          </div>
        </Styled.MemberWrapper>
        <Styled.MemberButton onClick={openEntry}>
          {isOpenEntry ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </Styled.MemberButton>
      </Styled.BasicMemberInformation>
      <Styled.ExtraMemberInformation isOpenEntry={isOpenEntry}>
        <Styled.DetailedInformation>
          <p>{`Detailed information about ${firstName}`}</p>
        </Styled.DetailedInformation>

        <Styled.Details>
          <p>{employer}</p>
          <Styled.Description>Current employer</Styled.Description>
        </Styled.Details>
        <Styled.Details>
          <p>{startingDate}</p>
          <Styled.Description>Starting date</Styled.Description>
        </Styled.Details>
      </Styled.ExtraMemberInformation>
    </Styled.MemberEntry>
  );
}

export default TeamMember;
