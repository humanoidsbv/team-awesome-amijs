import React, { useState } from "react";

import * as Styled from "./TeamMember.styled";

import ArrowDownIcon from "../../../public/assets/arrow2-down.svg";
import ArrowUpIcon from "../../../public/assets/arrow2-up.svg";

function TeamMember() {
  const [isOpenEntry, setIsOpenEntry] = useState(false);
  const openEntry = () => setIsOpenEntry(!isOpenEntry);

  return (
    <Styled.MemberEntry isOpenEntry={isOpenEntry}>
      <Styled.BasicMemberInformation>
        <Styled.MemberWrapper>
          <Styled.MemberAvatar src="/assets/antje.jpg" alt="" />
          <div>
            <Styled.MemberName>Antje Adriaens</Styled.MemberName>
            <Styled.MemberFunction>UX Designer</Styled.MemberFunction>
          </div>
        </Styled.MemberWrapper>
        <Styled.MemberButton onClick={openEntry}>
          {isOpenEntry ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </Styled.MemberButton>
      </Styled.BasicMemberInformation>
      <Styled.ExtraMemberInformation isOpenEntry={isOpenEntry}>
        <Styled.DetailedInformation>
          <p>Detailed information about Antje</p>
        </Styled.DetailedInformation>

        <Styled.Details>
          <p>Port of Rotterdam</p>
          <Styled.Description>Current employer</Styled.Description>
        </Styled.Details>
        <Styled.Details>
          <p>February 2018</p>
          <Styled.Description>Starting date</Styled.Description>
        </Styled.Details>
      </Styled.ExtraMemberInformation>
    </Styled.MemberEntry>
  );
}

export default TeamMember;
