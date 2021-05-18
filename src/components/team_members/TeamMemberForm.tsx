import React, { useRef, useState } from "react";

import * as Styled from "../time_entries/TimeEntryForm.styled";
import { AvatarWrapper } from "./TeamMemberForm.styled";
import { MemberAvatar } from "./TeamMember.styled";
import MemberFormDesktop from "./MemberFormDesktop";

import PlusIcon from "../../../public/assets/plus-icon.svg";
import CrossIcon from "../../../public/assets/shape.svg";

interface TeamMemberFormProps {
  isOpenForm: boolean;
  setIsOpenForm: Function;
  isOpen: boolean;
}

function TeamMemberForm({ isOpenForm, setIsOpenForm, isOpen }: TeamMemberFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const openForm = () => setIsOpenForm(!isOpenForm);

  const [isFormValid, setIsFormValid] = useState(false);
  const handleChange = () => {
    setIsFormValid(formRef.current?.checkValidity());
  };

  return (
    <>
      <MemberFormDesktop isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm} />

      <Styled.TimeEntryForm desktop ref={formRef} openForm={isOpenForm} onChange={handleChange}>
        <Styled.CloseButton isOpen={isOpen} onClick={openForm}>
          <CrossIcon />
        </Styled.CloseButton>
        <Styled.HourEntries>
          <AvatarWrapper>
            <MemberAvatar inForm src="/assets/antje.jpg" />
            <p>EDIT</p>
          </AvatarWrapper>
          <Styled.InputWrapper>
            <Styled.FormInputName>FIRST NAME</Styled.FormInputName>
            <Styled.FormInput />
          </Styled.InputWrapper>
        </Styled.HourEntries>
        <Styled.InputWrapper>
          <Styled.FormInputName>LAST NAME</Styled.FormInputName>
          <Styled.FormInput />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.FormInputName>FUNCTION</Styled.FormInputName>
          <Styled.FormInput />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.FormInputName>CURRENT EMPLOYER</Styled.FormInputName>
          <Styled.FormInput />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.FormInputName>STARTING DATE</Styled.FormInputName>
          <Styled.FormInput type="date" />
        </Styled.InputWrapper>
        <Styled.FormButton disabled={!isFormValid}>
          {isFormValid ? <p>Add</p> : <p>Please complete form</p>}
        </Styled.FormButton>
      </Styled.TimeEntryForm>
      <Styled.NewEntryButton isOpenForm={isOpenForm} onClick={openForm}>
        <PlusIcon />
        <p>New Humanoid</p>
      </Styled.NewEntryButton>
    </>
  );
}

export default TeamMemberForm;
