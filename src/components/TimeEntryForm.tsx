import React, { useRef, useState } from "react";

import PlusIcon from "../../public/assets/plus-icon.svg";
import CrossIcon from "../../public/assets/shape.svg";
import { postTimeEntry } from "../services/postTimeEntries";

import * as Styled from "./TimeEntryForm.styled";

interface TimeEntryFormProps {
  updateTimeEntries: Function;
  isLoading: boolean;
  setIsLoading: Function;
  isOpen: boolean;
}

function TimeEntryForm({ updateTimeEntries, isLoading, setIsLoading, isOpen }: TimeEntryFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [isFormValid, setIsFormValid] = useState(false);
  const handleChange = () => {
    setIsFormValid(formRef.current?.checkValidity());
  };

  const [isInputValid, setIsInputValid] = useState({
    client: true,
    activity: true,
    entryDate: true,
    startTime: true,
    endTime: true,
  });

  const handleBlur = (event) => {
    const validation = { ...isInputValid, [event.target.name]: event.target.checkValidity() };
    setIsInputValid(validation);
  };

  const [isOpenForm, setIsOpenForm] = useState(true);
  const openForm = () => setIsOpenForm(!isOpenForm);

  const [formInput, setFormInput] = useState({
    client: "",
    activity: "",
    entryDate: new Date().toISOString().substr(0, 10),
    startTime: "09:00",
    endTime: "17:00",
  });

  const addTimeEntry = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    await postTimeEntry({
      client: formInput.client,
      id: null,
      activity: formInput.activity,
      startTime: new Date(`${formInput.entryDate}T${formInput.startTime}:00.002`),
      endTime: new Date(`${formInput.entryDate}T${formInput.endTime}:00.002`),
    });

    setIsLoading(false);

    updateTimeEntries();

    setFormInput({
      client: "",
      activity: "",
      entryDate: new Date().toISOString().substr(0, 10),
      startTime: "09:00",
      endTime: "17:00",
    });

    setIsOpenForm(!isOpenForm);
    setIsFormValid(false);
  };

  return (
    <>
      <Styled.TimeEntryForm
        ref={formRef}
        openForm={isOpenForm}
        onChange={handleChange}
        onSubmit={addTimeEntry}
      >
        <Styled.CloseButton isOpen={isOpen} onClick={openForm}>
          <CrossIcon />
        </Styled.CloseButton>
        <Styled.InputWrapper>
          <Styled.FormInputName>EMPLOYER</Styled.FormInputName>
          <Styled.FormInput
            onChange={(e) => setFormInput({ ...formInput, client: e.target.value })}
            type="text"
            required
            value={formInput.client}
            isInputValid={isInputValid.client}
            onBlur={handleBlur}
            name="client"
          />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.FormInputName>ACTIVITY</Styled.FormInputName>
          <Styled.FormInput
            onChange={(e) => setFormInput({ ...formInput, activity: e.target.value })}
            type="text"
            required
            value={formInput.activity}
            isInputValid={isInputValid.activity}
            onBlur={handleBlur}
            name="activity"
          />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.FormInputName>DATE</Styled.FormInputName>
          <Styled.FormInput
            onChange={(e) => setFormInput({ ...formInput, entryDate: e.target.value })}
            type="date"
            required
            value={formInput.entryDate}
            isInputValid={isInputValid.entryDate}
            onBlur={handleBlur}
            name="entryDate"
          />
        </Styled.InputWrapper>
        <Styled.HourEntries>
          <Styled.InputWrapper>
            <Styled.FormInputName>FROM</Styled.FormInputName>
            <Styled.FormInput
              onChange={(e) => {
                setFormInput({ ...formInput, startTime: e.target.value });
              }}
              type="time"
              required
              value={formInput.startTime}
              isInputValid={isInputValid.startTime}
              onBlur={handleBlur}
              name="startTime"
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.FormInputName>TO</Styled.FormInputName>
            <Styled.FormInput
              onChange={(e) => setFormInput({ ...formInput, endTime: e.target.value })}
              type="time"
              required
              value={formInput.endTime}
              isInputValid={isInputValid.endTime}
              onBlur={handleBlur}
              name="endTime"
            />
          </Styled.InputWrapper>
        </Styled.HourEntries>
        <Styled.FormButton isLoading={isLoading} disabled={!isFormValid} onClick={addTimeEntry}>
          {isFormValid ? <p>Add</p> : <p>Please complete form</p>}
        </Styled.FormButton>
      </Styled.TimeEntryForm>

      <Styled.NewEntryButton openForm={isOpenForm} onClick={openForm}>
        <PlusIcon />
        <p>New time entry</p>
      </Styled.NewEntryButton>
    </>
  );
}

export default TimeEntryForm;
