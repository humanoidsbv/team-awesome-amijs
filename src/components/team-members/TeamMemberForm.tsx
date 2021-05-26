import React, { useContext, useRef, useState } from "react";

import * as Styled from "./TeamMemberForm.styled";

import { MemberAvatar } from "./TeamMember.styled";

import PlusIcon from "../../../public/assets/plus-icon.svg";
import CrossIcon from "../../../public/assets/shape.svg";
import TwitterIcon from "../../../public/assets/twitter-icon.svg";
import FacebookIcon from "../../../public/assets/facebook-icon.svg";
import ArrowDown from "../../../public/assets/arrow-down.svg";

import { postTeamMember } from "../../services/postTeamMembers";
import { StoreContext } from "../../stores/StoreProvider";

interface TeamMemberFormProps {
  isFormVisible: boolean;
  setIsFormVisible: Function;
  isOpen: boolean;
}

function TeamMemberForm({ isFormVisible, setIsFormVisible, isOpen }: TeamMemberFormProps) {
  const [isListVisible, setIsListVisible] = useState(false);
  const visibilityToggle = () => setIsListVisible(!isListVisible);

  const formRef = useRef<HTMLFormElement>(null);

  const state = useContext(StoreContext);
  const [teamMembers, setTeamMembers] = state.teamMembers;

  const [isFormValid, setIsFormValid] = useState(false);

  const [isInputValid, setIsInputValid] = useState({
    firstName: true,
    lastName: true,
    jobFunction: true,
    employer: true,
    startingDate: true,
    address: true,
    zipCode: true,
    city: true,
    email: true,
    bio: true,
  });

  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    jobFunction: "",
    employer: "",
    startingDate: new Date().toISOString().substr(0, 10),
    address: "",
    zipCode: "",
    city: "",
    email: "",
    bio: "",
  });

  function sortFunction(event) {
    const inputValue = event.target.value;

    setTeamMembers([
      ...teamMembers.sort((a, b) => {
        const nameA = a[inputValue].toUpperCase();
        const nameB = b[inputValue].toUpperCase();

        return nameA > nameB ? 1 : -1;
      }),
    ]);
    setIsListVisible(!isListVisible);
  }

  const openForm = () => setIsFormVisible(!isFormVisible);

  const handleBlur = (event) => {
    const validation = { ...isInputValid, [event.target.name]: event.target.checkValidity() };
    setIsInputValid(validation);
  };

  const handleChange = (event) => {
    setIsFormValid(formRef.current?.checkValidity());
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  const addTeamMember = async (event) => {
    event.preventDefault();

    const newTeamMember = {
      firstName: formInput.firstName,
      lastName: formInput.lastName,
      jobFunction: formInput.jobFunction,
      employer: formInput.employer,
      startingDate: new Date(`${formInput.startingDate}`),
      id: null,
      address: formInput.address,
      zipCode: formInput.zipCode,
      city: formInput.city,
      email: formInput.email,
      bio: formInput.bio,
    };

    await postTeamMember(newTeamMember);

    setTeamMembers([...teamMembers, newTeamMember]);

    setFormInput({
      firstName: "",
      lastName: "",
      jobFunction: "",
      employer: "",
      startingDate: new Date().toISOString().substr(0, 10),
      address: "",
      zipCode: "",
      city: "",
      email: "",
      bio: "",
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
          <div>
            <Styled.SortButton
              onClick={visibilityToggle}
              isListVisible={isListVisible}
              isFormVisible={isFormVisible}
            >
              Sort by:
              <ArrowDown />
            </Styled.SortButton>
            <Styled.SortList isListVisible={isListVisible}>
              <li>
                <button type="button" value="firstName" onClick={sortFunction}>
                  First name
                </button>
              </li>
              <li>
                <button type="button" value="lastName" onClick={sortFunction}>
                  Last name
                </button>
              </li>
              <li>
                <button type="button" value="employer" onClick={sortFunction}>
                  Current employer
                </button>
              </li>
              <li>
                <button type="button" value="jobFunction" onClick={sortFunction}>
                  Function
                </button>
              </li>
            </Styled.SortList>
          </div>
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
                onChange={handleChange}
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
                onChange={handleChange}
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
              onChange={handleChange}
              value={formInput.jobFunction}
              required
              isInputValid={isInputValid.jobFunction}
              name="jobFunction"
              onBlur={handleBlur}
            />
          </Styled.InputWrapper>
          <Styled.NameWrapper>
            <Styled.InputWrapper>
              <Styled.InputLabel>Current Employer</Styled.InputLabel>
              <Styled.Input
                onChange={handleChange}
                value={formInput.employer}
                required
                isInputValid={isInputValid.employer}
                name="employer"
                onBlur={handleBlur}
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <Styled.InputLabel>Starting Date</Styled.InputLabel>
              <Styled.Input
                onChange={handleChange}
                value={formInput.startingDate}
                type="date"
                required
                isInputValid={isInputValid.startingDate}
                name="startingDate"
                onBlur={handleBlur}
              />
            </Styled.InputWrapper>
          </Styled.NameWrapper>
          <Styled.InputWrapper>
            <Styled.InputLabel>Bio</Styled.InputLabel>
            <Styled.TextArea
              rows={5}
              onChange={handleChange}
              value={formInput.bio}
              required
              isInputValid={isInputValid.bio}
              name="bio"
              onBlur={handleBlur}
            />
          </Styled.InputWrapper>
        </Styled.FormSection>
        <Styled.FormSection personalSection>
          <Styled.InputWrapper>
            <Styled.InputLabel>Address</Styled.InputLabel>
            <Styled.Input
              onChange={handleChange}
              value={formInput.address}
              required
              isInputValid={isInputValid.employer}
              name="address"
              onBlur={handleBlur}
            />
          </Styled.InputWrapper>
          <Styled.NameWrapper>
            <Styled.InputWrapper>
              <Styled.InputLabel>ZIP code</Styled.InputLabel>
              <Styled.Input
                onChange={handleChange}
                value={formInput.zipCode}
                required
                isInputValid={isInputValid.employer}
                name="zipCode"
                onBlur={handleBlur}
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <Styled.InputLabel>City</Styled.InputLabel>
              <Styled.Input
                onChange={handleChange}
                value={formInput.city}
                required
                isInputValid={isInputValid.employer}
                name="city"
                onBlur={handleBlur}
              />
            </Styled.InputWrapper>
          </Styled.NameWrapper>
          <Styled.InputWrapper>
            <Styled.InputLabel>E-mail Address</Styled.InputLabel>
            <Styled.Input
              onChange={handleChange}
              value={formInput.email}
              required
              isInputValid={isInputValid.employer}
              name="email"
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
