import React, { useRef, useState } from "react";

import * as Styled from "./TeamMemberForm.styled";

import { MemberAvatar } from "./TeamMember.styled";

import PlusIcon from "../../../public/assets/plus-icon.svg";
import CrossIcon from "../../../public/assets/shape.svg";
import TwitterIcon from "../../../public/assets/twitter-icon.svg";
import FacebookIcon from "../../../public/assets/facebook-icon.svg";

import { postTeamMember } from "../../services/postTeamMembers";

interface TeamMemberFormProps {
  isFormVisible: boolean;
  setIsFormVisible: Function;
  isOpen: boolean;
  updateTeamMembers: Function;
}

function TeamMemberForm({
  isFormVisible,
  setIsFormVisible,
  isOpen,
  updateTeamMembers,
}: TeamMemberFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [isFormValid, setIsFormValid] = useState(false);

  const [isInputValid, setIsInputValid] = useState({
    firstName: true,
    lastName: true,
    jobFunction: true,
    employer: true,
    startingDate: true,
  });

  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    jobFunction: "",
    employer: "",
    startingDate: new Date().toISOString().substr(0, 10),
  });

  const openForm = () => setIsFormVisible(!isFormVisible);

  const handleBlur = (event) => {
    const validation = { ...isInputValid, [event.target.name]: event.target.checkValidity() };
    setIsInputValid(validation);
  };

  const handleChange = () => {
    setIsFormValid(formRef.current?.checkValidity());
  };

  const addTeamMember = async (event) => {
    event.preventDefault();

    await postTeamMember({
      firstName: formInput.firstName,
      lastName: formInput.lastName,
      jobFunction: formInput.jobFunction,
      employer: formInput.employer,
      startingDate: new Date(`${formInput.startingDate}`),
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

    setIsFormVisible(!isFormVisible);
    setIsFormValid(false);
  };

  return (
    <>
      <Styled.MemberFormHeader>
        <h1>{isFormVisible ? "All Humanoids" : "Add new team member"}</h1>
        <Styled.ButtonWrapper>
          <Styled.CancelButton isFormVisible={isFormVisible} onClick={openForm}>
            Cancel
          </Styled.CancelButton>
          <Styled.SaveButton isFormVisible={isFormVisible} onClick={addTeamMember}>
            Save
          </Styled.SaveButton>
          <Styled.AddButton isFormVisible={isFormVisible} onClick={openForm}>
            <PlusIcon />
            New Humanoid
          </Styled.AddButton>
        </Styled.ButtonWrapper>
      </Styled.MemberFormHeader>

      <Styled.FliebelWrapper isFormVisible={isFormVisible}>
        <Styled.Fliebel isFormVisible={isFormVisible}>
          <p>Personal details</p>
        </Styled.Fliebel>
      </Styled.FliebelWrapper>

      <Styled.TeamMemberForm
        onSubmit={addTeamMember}
        ref={formRef}
        isFormVisible={isFormVisible}
        onChange={handleChange}
      >
        <Styled.CloseButton isOpen={isOpen} onClick={openForm}>
          <CrossIcon />
        </Styled.CloseButton>
        <Styled.AvatarWrapper>
          <MemberAvatar insideForm src="/assets/antje.jpg" />
          <p>EDIT</p>
        </Styled.AvatarWrapper>
        <Styled.FormSection>
          <Styled.NameWrapper>
            <Styled.InputWrapper>
              <Styled.InputLabel>First Name</Styled.InputLabel>
              <Styled.Input
                onChange={(e) => setFormInput({ ...formInput, firstName: e.target.value })}
                value={formInput.firstName}
                isInputValid={isInputValid.firstName}
                required
                name="firstName"
                onBlur={handleBlur}
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <Styled.InputLabel>Last Name</Styled.InputLabel>
              <Styled.Input
                onChange={(e) => setFormInput({ ...formInput, lastName: e.target.value })}
                value={formInput.lastName}
                required
                isInputValid={isInputValid.lastName}
                name="lastName"
                onBlur={handleBlur}
              />
            </Styled.InputWrapper>
          </Styled.NameWrapper>
          <Styled.InputWrapper>
            <Styled.InputLabel>Function</Styled.InputLabel>
            <Styled.Input
              onChange={(e) => setFormInput({ ...formInput, jobFunction: e.target.value })}
              value={formInput.jobFunction}
              required
              isInputValid={isInputValid.jobFunction}
              name="jobFunction"
              onBlur={handleBlur}
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.InputLabel>Current Employer</Styled.InputLabel>
            <Styled.Input
              onChange={(e) => setFormInput({ ...formInput, employer: e.target.value })}
              value={formInput.employer}
              required
              isInputValid={isInputValid.employer}
              name="employer"
              onBlur={handleBlur}
            />
          </Styled.InputWrapper>
        </Styled.FormSection>
        <Styled.FormSection>
          <Styled.InputWrapper>
            <Styled.InputLabel>Starting Date</Styled.InputLabel>
            <Styled.Input
              onChange={(e) => setFormInput({ ...formInput, startingDate: e.target.value })}
              value={formInput.startingDate}
              type="date"
              required
              isInputValid={isInputValid.startingDate}
              name="startingDate"
              onBlur={handleBlur}
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.InputLabel>Social Profiles</Styled.InputLabel>
            <Styled.Input twitter />
            <Styled.SocialIcon twitter>
              <TwitterIcon />
            </Styled.SocialIcon>
            <Styled.Input facebook />
            <Styled.SocialIcon facebook>
              <FacebookIcon />
            </Styled.SocialIcon>
          </Styled.InputWrapper>
        </Styled.FormSection>
        <Styled.FormButton disabled={!isFormValid}>
          {isFormValid ? "Add" : "Please complete form"}
        </Styled.FormButton>
      </Styled.TeamMemberForm>
      <Styled.NewEntryButton openForm={isFormVisible} onClick={openForm}>
        <PlusIcon />
        New Humanoid
      </Styled.NewEntryButton>
    </>
  );
}

export default TeamMemberForm;
