import React from "react";

import * as Styled from "./TeamMemberForm.styled";
import { MemberAvatar } from "./TeamMember.styled";

import PlusIcon from "../../../public/assets/plus-icon.svg";
import TwitterIcon from "../../../public/assets/twitter-icon.svg";
import FacebookIcon from "../../../public/assets/facebook-icon.svg";

interface MemberFormDesktopProps {
  isOpenForm: boolean;
  setIsOpenForm: Function;
}

function MemberFormDesktop({ isOpenForm, setIsOpenForm }: MemberFormDesktopProps) {
  const openForm = () => setIsOpenForm(!isOpenForm);

  return (
    <>
      <Styled.MemberFormHeader>
        {isOpenForm ? <h1>Add new team member</h1> : <h1>All Humanoids</h1>}
        <Styled.ButtonWrapper>
          <Styled.CancelButton isOpenForm={isOpenForm} onClick={openForm}>
            Cancel
          </Styled.CancelButton>
          <Styled.SaveButton isOpenForm={isOpenForm} onClick={openForm}>
            <PlusIcon isOpenForm={isOpenForm} />
            {isOpenForm ? <p>Save</p> : <p>New Humanoid</p>}
          </Styled.SaveButton>
        </Styled.ButtonWrapper>
      </Styled.MemberFormHeader>

      <Styled.MemberFormWrapper isOpenForm={isOpenForm}>
        <Styled.Fliebel>
          <p>Personal details</p>
        </Styled.Fliebel>
        <Styled.TeamMemberForm>
          <Styled.AvatarWrapper>
            <MemberAvatar inForm src="/assets/antje.jpg" />
            <p>Edit Avatar</p>
          </Styled.AvatarWrapper>
          <Styled.FormSection>
            <Styled.NameWrapper>
              <Styled.InputWrapper>
                <Styled.FormInputName>First Name</Styled.FormInputName>
                <Styled.FormInput />
              </Styled.InputWrapper>
              <Styled.InputWrapper>
                <Styled.FormInputName>Last Name</Styled.FormInputName>
                <Styled.FormInput />
              </Styled.InputWrapper>
            </Styled.NameWrapper>
            <Styled.InputWrapper>
              <Styled.FormInputName>E-mail Address</Styled.FormInputName>
              <Styled.FormInput />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <Styled.FormInputName>Bio</Styled.FormInputName>
              <Styled.FormInput Bio />
            </Styled.InputWrapper>
          </Styled.FormSection>
          <Styled.FormSection>
            <Styled.InputWrapper>
              <Styled.FormInputName>Address</Styled.FormInputName>
              <Styled.FormInput />
            </Styled.InputWrapper>
            <Styled.NameWrapper>
              <Styled.InputWrapper>
                <Styled.FormInputName>ZIP code</Styled.FormInputName>
                <Styled.FormInput />
              </Styled.InputWrapper>
              <Styled.InputWrapper>
                <Styled.FormInputName>City</Styled.FormInputName>
                <Styled.FormInput />
              </Styled.InputWrapper>
            </Styled.NameWrapper>
            <Styled.InputWrapper>
              <Styled.FormInputName>Social Profiles</Styled.FormInputName>
              <Styled.FormInput Twitter />
              <Styled.SocialIcon Twitter>
                <TwitterIcon />
              </Styled.SocialIcon>
              <Styled.FormInput Facebook />
              <Styled.SocialIcon Facebook>
                <FacebookIcon />
              </Styled.SocialIcon>
            </Styled.InputWrapper>
          </Styled.FormSection>
        </Styled.TeamMemberForm>
      </Styled.MemberFormWrapper>
    </>
  );
}

export default MemberFormDesktop;
