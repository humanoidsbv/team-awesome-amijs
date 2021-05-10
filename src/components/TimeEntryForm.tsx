import React, { useState } from "react";

import PlusIcon from "../../public/assets/plus-icon.svg";
import CrossIcon from "../../public/assets/shape.svg";
import { postTimeEntry } from "../services/postTimeEntries";

import * as Styled from "./TimeEntryForm.styled";

interface TimeEntryFormProps {
  updateTimeEntries: Function;
}

function TimeEntryForm({ updateTimeEntries }: TimeEntryFormProps) {
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
  };

  return (
    <>
      <Styled.TimeEntryForm openForm={isOpenForm} onSubmit={addTimeEntry}>
        <CrossIcon />
        <Styled.FormInputName>EMPLOYER</Styled.FormInputName>
        <Styled.FormInput
          onChange={(e) => setTimeEntryClient(e.target.value)}
          type="text"
          value={timeEntryClient}
        />
        <Styled.FormInputName>ACTIVITY</Styled.FormInputName>
        <Styled.FormInput
          onChange={(e) => setTimeEntryActivity(e.target.value)}
          type="text"
          value={timeEntryActivity}
        />
        <Styled.FormInputName>DATE</Styled.FormInputName>
        <Styled.FormInput
          onChange={(e) => setTimeEntryDate(e.target.value)}
          type="date"
          value={timeEntryDate}
        />
        <Styled.HourEntries>
          <div>
            <Styled.FormInputName>FROM</Styled.FormInputName>
            <Styled.FormInput
              onChange={(e) => setTimeEntryStartTime(e.target.value)}
              type="time"
              value={timeEntryStartTime}
            />
          </div>
          <div>
            <Styled.FormInputName>TO</Styled.FormInputName>
            <Styled.FormInput
              onChange={(e) => setTimeEntryEndTime(e.target.value)}
              type="time"
              value={timeEntryEndTime}
            />
          </div>
        </Styled.HourEntries>
        <Styled.FormButton openForm={isOpenForm} onClick={addTimeEntry}>
          <p>Add</p>
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
