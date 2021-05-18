import React, { useRef, useState } from "react";

import * as Styled from "../time_entries/TimeEntryForm.styled";
import { AvatarWrapper } from "./TeamMemberForm.styled";
import { MemberAvatar } from "./TeamMember.styled";
import MemberFormDesktop from "./MemberFormDesktop";

import PlusIcon from "../../../public/assets/plus-icon.svg";
import CrossIcon from "../../../public/assets/shape.svg";
import { postTeamMember } from "../../services/postTeamMembers";

interface TeamMemberFormProps {
  isOpenForm: boolean;
  setIsOpenForm: Function;
  isOpen: boolean;
  updateTeamMembers: Function;
}

function TeamMemberForm({
  isOpenForm,
  setIsOpenForm,
  isOpen,
  updateTeamMembers,
}: TeamMemberFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const openForm = () => setIsOpenForm(!isOpenForm);

  const [isFormValid, setIsFormValid] = useState(false);
  const handleChange = () => {
    setIsFormValid(formRef.current?.checkValidity());
  };

  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    jobFunction: "",
    employer: "",
    startingDate: new Date().toISOString().substr(0, 10),
  });

  const addTeamMember = async (event) => {
    event.preventDefault();

    await postTeamMember({
      firstName: formInput.firstName,
      lastName: formInput.lastName,
      jobFunction: formInput.jobFunction,
      employer: formInput.employer,
      startingDate: "",
      id: null,
    });

    updateTeamMembers();

    setFormInput({
      firstName: "",
      lastName: "",
      jobFunction: "",
      employer: "",
      startingDate: new Date().toISOString().substr(0, 10),
    });

    setIsOpenForm(!isOpenForm);
  };

  return (
    <>
      <MemberFormDesktop isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm} />

      <Styled.TimeEntryForm
        desktop
        onSubmit={addTeamMember}
        ref={formRef}
        openForm={isOpenForm}
        onChange={handleChange}
      >
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
            <Styled.FormInput
              onChange={(e) => setFormInput({ ...formInput, firstName: e.target.value })}
              value={formInput.firstName}
            />
          </Styled.InputWrapper>
        </Styled.HourEntries>
        <Styled.InputWrapper>
          <Styled.FormInputName>LAST NAME</Styled.FormInputName>
          <Styled.FormInput
            onChange={(e) => setFormInput({ ...formInput, lastName: e.target.value })}
            value={formInput.lastName}
          />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.FormInputName>FUNCTION</Styled.FormInputName>
          <Styled.FormInput
            onChange={(e) => setFormInput({ ...formInput, jobFunction: e.target.value })}
            value={formInput.jobFunction}
          />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.FormInputName>CURRENT EMPLOYER</Styled.FormInputName>
          <Styled.FormInput
            onChange={(e) => setFormInput({ ...formInput, employer: e.target.value })}
            value={formInput.employer}
          />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.FormInputName>STARTING DATE</Styled.FormInputName>
          <Styled.FormInput
            onChange={(e) => setFormInput({ ...formInput, startingDate: e.target.value })}
            value={formInput.startingDate}
            type="date"
          />
        </Styled.InputWrapper>
        <Styled.FormButton disabled={!isFormValid}>
          {isFormValid ? <p>Add</p> : <p>Please complete form</p>}
        </Styled.FormButton>
      </Styled.TimeEntryForm>
      <Styled.NewEntryButton openForm={isOpenForm} onClick={openForm}>
        <PlusIcon />
        <p>New Humanoid</p>
      </Styled.NewEntryButton>
    </>
  );
}

export default TeamMemberForm;
