import React, { useRef, useState } from "react";

import PlusIcon from "../../../public/assets/plus-icon.svg";
import CrossIcon from "../../../public/assets/shape.svg";
import { postTimeEntry } from "../../services/postTimeEntries";

import * as Styled from "./TimeEntryForm.styled";

interface TimeEntryFormProps {
  updateTimeEntries: Function;
  isOpen: boolean;
}

function TimeEntryForm({ updateTimeEntries, isOpen }: TimeEntryFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [isFormValid, setIsFormValid] = useState(false);

  const [isInputValid, setIsInputValid] = useState({
    client: true,
    activity: true,
    entryDate: true,
    startTime: true,
    endTime: true,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isFormVisible, setIsFormVisible] = useState(true);

  const [formInput, setFormInput] = useState({
    client: "",
    activity: "",
    entryDate: new Date().toISOString().substr(0, 10),
    startTime: "09:00",
    endTime: "17:00",
  });

  const openForm = () => setIsFormVisible(!isFormVisible);

  const handleBlur = (event) => {
    const validation = { ...isInputValid, [event.target.name]: event.target.checkValidity() };
    setIsInputValid(validation);
  };

  const handleChange = (event) => {
    setIsFormValid(formRef.current?.checkValidity());
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

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

    setIsFormVisible(!isFormVisible);
    setIsFormValid(false);
  };

  return (
    <>
      <Styled.TimeEntryForm
        ref={formRef}
        openForm={isFormVisible}
        onChange={handleChange}
        onSubmit={addTimeEntry}
      >
        <Styled.CloseButton isOpen={isOpen} onClick={openForm}>
          <CrossIcon />
        </Styled.CloseButton>
        <Styled.InputWrapper>
          <Styled.InputLabel>EMPLOYER</Styled.InputLabel>
          <Styled.Input
            onChange={handleChange}
            type="text"
            required
            value={formInput.client}
            isInputValid={isInputValid.client}
            onBlur={handleBlur}
            name="client"
          />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.InputLabel>ACTIVITY</Styled.InputLabel>
          <Styled.Input
            onChange={handleChange}
            type="text"
            required
            value={formInput.activity}
            isInputValid={isInputValid.activity}
            onBlur={handleBlur}
            name="activity"
          />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.InputLabel>DATE</Styled.InputLabel>
          <Styled.Input
            onChange={handleChange}
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
            <Styled.InputLabel>FROM</Styled.InputLabel>
            <Styled.Input
              onChange={handleChange}
              type="time"
              required
              value={formInput.startTime}
              isInputValid={isInputValid.startTime}
              onBlur={handleBlur}
              name="startTime"
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.InputLabel>TO</Styled.InputLabel>
            <Styled.Input
              onChange={handleChange}
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
          {isFormValid ? "Add" : "Please complete form"}
        </Styled.FormButton>
      </Styled.TimeEntryForm>

      <Styled.NewEntryButton isFormVisible={isFormVisible} onClick={openForm}>
        <PlusIcon />
        New time entry
      </Styled.NewEntryButton>
    </>
  );
}

export default TimeEntryForm;
