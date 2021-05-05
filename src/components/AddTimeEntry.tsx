import React from "react";
import * as Styled from "./AddTimeEntry.styled";

import PlusIcon from "../../public/assets/plus-icon.svg";

function AddTimeEntry() {
  return (
    <Styled.NewEntrySection>
      <PlusIcon />
      <p>New time entry</p>
    </Styled.NewEntrySection>
  );
}

export default AddTimeEntry;
