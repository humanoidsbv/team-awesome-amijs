import React, { useRef, useState } from "react";

import PlusIcon from "../../public/assets/plus-icon.svg";
import CrossIcon from "../../public/assets/shape.svg";
import { postTimeEntry } from "../services/postTimeEntries";

import * as Styled from "./TimeEntryForm.styled";

interface TimeEntryFormProps {
  updateTimeEntries: Function;
  isLoading: boolean;
  setIsLoading: Function;
}

function TimeEntryForm({ updateTimeEntries, isLoading, setIsLoading }: TimeEntryFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [isFormValid, setIsFormValid] = useState(false);
  const handleChange = () => {
    setIsFormValid(formRef.current?.checkValidity());
  };

  const [isOpenForm, setIsOpenForm] = useState<boolean>(true);
  const openForm = () => setIsOpenForm(!isOpenForm);

  const [formInput, setFormInput] = useState({
    client: "",
    activity: "",
    entryDate: "",
    startTime: "",
    endTime: "",
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
      entryDate: "",
      startTime: "",
      endTime: "",
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
        <Styled.CloseButton onClick={openForm}>
          <CrossIcon />
        </Styled.CloseButton>
        <Styled.FormInputName>EMPLOYER</Styled.FormInputName>
        <Styled.FormInput
          onChange={(e) => setFormInput({ ...formInput, client: e.target.value })}
          type="text"
          required
          value={formInput.client}
        />
        <Styled.FormInputName>ACTIVITY</Styled.FormInputName>
        <Styled.FormInput
          onChange={(e) => setFormInput({ ...formInput, activity: e.target.value })}
          type="text"
          required
          value={formInput.activity}
        />
        <Styled.FormInputName>DATE</Styled.FormInputName>
        <Styled.FormInput
          onChange={(e) => setFormInput({ ...formInput, entryDate: e.target.value })}
          type="date"
          required
          value={formInput.entryDate}
        />
        <Styled.HourEntries>
          <div>
            <Styled.FormInputName>FROM</Styled.FormInputName>
            <Styled.FormInput
              onChange={(e) => setFormInput({ ...formInput, startTime: e.target.value })}
              type="time"
              required
              value={formInput.startTime}
            />
          </div>
          <div>
            <Styled.FormInputName>TO</Styled.FormInputName>
            <Styled.FormInput
              onChange={(e) => setFormInput({ ...formInput, endTime: e.target.value })}
              type="time"
              required
              value={formInput.endTime}
            />
          </div>
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
