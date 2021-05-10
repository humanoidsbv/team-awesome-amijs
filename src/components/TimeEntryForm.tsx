import React, { useState } from "react";

import PlusIcon from "../../public/assets/plus-icon.svg";
import CrossIcon from "../../public/assets/shape.svg";
import * as Types from "../types";

import * as Styled from "./TimeEntryForm.styled";

interface TimeEntryFormProps {
  timeEntries: Types.TimeEntry[];
  setTimeEntries: React.Dispatch<React.SetStateAction<Types.TimeEntry[]>>;
}

function TimeEntryForm({ timeEntries, setTimeEntries }: TimeEntryFormProps) {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(true);
  const openForm = () => setIsOpenForm(!isOpenForm);

  const [timeEntryClient, setTimeEntryClient] = useState("");
  const [timeEntryActivity, setTimeEntryActivity] = useState("");
  const [timeEntryDate, setTimeEntryDate] = useState("");
  const [timeEntryStartTime, setTimeEntryStartTime] = useState("");
  const [timeEntryEndTime, setTimeEntryEndTime] = useState("");

  const addTimeEntry = (event) => {
    event.preventDefault();
    setTimeEntries([
      ...timeEntries,
      {
        client: timeEntryClient,
        id: timeEntries.length,
        activity: timeEntryActivity,
        startTime: new Date(`${timeEntryDate}T${timeEntryStartTime}:00.002`),
        endTime: new Date(`${timeEntryDate}T${timeEntryEndTime}:00.002`),
      },
    ]);

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
          placeholder="Type here"
          value={timeEntryClient}
          onChange={(e) => setTimeEntryClient(e.target.value)}
        />
        <Styled.FormInputName>ACTIVITY</Styled.FormInputName>
        <Styled.FormInput
          value={timeEntryActivity}
          onChange={(e) => setTimeEntryActivity(e.target.value)}
        />
        <Styled.FormInputName>DATE</Styled.FormInputName>
        <Styled.FormInput
          value={timeEntryDate}
          type="date"
          onChange={(e) => setTimeEntryDate(e.target.value)}
        />
        <Styled.HourEntries>
          <div>
            <Styled.FormInputName>FROM</Styled.FormInputName>
            <Styled.FormInput
              value={timeEntryStartTime}
              onChange={(e) => setTimeEntryStartTime(e.target.value)}
            />
          </div>
          <div>
            <Styled.FormInputName>TO</Styled.FormInputName>
            <Styled.FormInput
              value={timeEntryEndTime}
              onChange={(e) => setTimeEntryEndTime(e.target.value)}
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
