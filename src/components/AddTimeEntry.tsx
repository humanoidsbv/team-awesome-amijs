import React from "react";

import PlusIcon from "../../public/assets/plus-icon.svg";

import * as Styled from "./AddTimeEntry.styled";

function AddTimeEntry() {
  return (
    <Styled.NewEntrySection>
      <PlusIcon />
      <p>New time entry</p>
    </Styled.NewEntrySection>
  );
}

export default AddTimeEntry;
