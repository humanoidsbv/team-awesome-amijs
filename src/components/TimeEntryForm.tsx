import React, { useRef, useState } from "react";

import PlusIcon from "../../public/assets/plus-icon.svg";
import CrossIcon from "../../public/assets/shape.svg";
import { postTimeEntry } from "../services/postTimeEntries";

import * as Styled from "./TimeEntryForm.styled";

interface TimeEntryFormProps {
  updateTimeEntries: Function;
}

function TimeEntryForm({ updateTimeEntries }: TimeEntryFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(formRef.current?.checkValidity());
  };

  const [isOpenForm, setIsOpenForm] = useState<boolean>(true);
  const openForm = () => setIsOpenForm(!isOpenForm);

  const [timeEntryClient, setTimeEntryClient] = useState("");
  const [timeEntryActivity, setTimeEntryActivity] = useState("");
  const [timeEntryDate, setTimeEntryDate] = useState("");
  const [timeEntryStartTime, setTimeEntryStartTime] = useState("");
  const [timeEntryEndTime, setTimeEntryEndTime] = useState("");

  const addTimeEntry = (event) => {
    event.preventDefault();
    postTimeEntry({
      client: timeEntryClient,
      id: null,
      activity: timeEntryActivity,
      startTime: new Date(`${timeEntryDate}T${timeEntryStartTime}:00.002`),
      endTime: new Date(`${timeEntryDate}T${timeEntryEndTime}:00.002`),
    });

    updateTimeEntries();

    setTimeEntryClient("");
    setTimeEntryActivity("");
    setTimeEntryDate("");
    setTimeEntryStartTime("");
    setTimeEntryEndTime("");

    setIsOpenForm(true);
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
          onChange={(e) => setTimeEntryClient(e.target.value)}
          type="text"
          required
          value={timeEntryClient}
        />
        <Styled.FormInputName>ACTIVITY</Styled.FormInputName>
        <Styled.FormInput
          onChange={(e) => setTimeEntryActivity(e.target.value)}
          type="text"
          required
          value={timeEntryActivity}
        />
        <Styled.FormInputName>DATE</Styled.FormInputName>
        <Styled.FormInput
          onChange={(e) => setTimeEntryDate(e.target.value)}
          type="date"
          required
          value={timeEntryDate}
        />
        <Styled.HourEntries>
          <div>
            <Styled.FormInputName>FROM</Styled.FormInputName>
            <Styled.FormInput
              onChange={(e) => setTimeEntryStartTime(e.target.value)}
              type="time"
              required
              value={timeEntryStartTime}
            />
          </div>
          <div>
            <Styled.FormInputName>TO</Styled.FormInputName>
            <Styled.FormInput
              onChange={(e) => setTimeEntryEndTime(e.target.value)}
              type="time"
              required
              value={timeEntryEndTime}
            />
          </div>
        </Styled.HourEntries>
        <Styled.FormButton isFormValid={isFormValid} disabled={!isFormValid} onClick={addTimeEntry}>
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
