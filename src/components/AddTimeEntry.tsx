import React, { useState } from "react";

import PlusIcon from "../../public/assets/plus-icon.svg";
import CrossIcon from "../../public/assets/shape.svg";

import * as Styled from "./AddTimeEntry.styled";

function AddTimeEntry() {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(true);
  const openForm = () => setIsOpenForm(!isOpenForm);

  return (
    <>
      <Styled.NewEntryForm openForm={isOpenForm}>
        <CrossIcon />
        <Styled.FormInputName>EMPLOYER</Styled.FormInputName>
        <Styled.FormInput placeholder="Type here" />
        <Styled.FormInputName>ACTIVITY</Styled.FormInputName>
        <Styled.FormInput />
        <Styled.FormInputName>DATE</Styled.FormInputName>
        <Styled.FormInput />
        <Styled.HourEntries>
          <div>
            <Styled.FormInputName>FROM</Styled.FormInputName>
            <Styled.FormInput />
          </div>
          <div>
            <Styled.FormInputName>TO</Styled.FormInputName>
            <Styled.FormInput />
          </div>
        </Styled.HourEntries>
        <Styled.FormButton openForm={isOpenForm} onClick={openForm}>
          <p>Add</p>
        </Styled.FormButton>
      </Styled.NewEntryForm>

      <Styled.NewEntryButton openForm={isOpenForm} onClick={openForm}>
        <PlusIcon />
        <p>New time entry</p>
      </Styled.NewEntryButton>
    </>
  );
}

export default AddTimeEntry;
