import React from "react";

import * as Styled from "./EntryDate.styled";

interface EntryDateProps {
  date: string;
}

function EntryDate({ date }: EntryDateProps): React.ReactElement {
  return (
    <Styled.EntryDate>
      <p>{date}</p>
    </Styled.EntryDate>
  );
}

export default EntryDate;
