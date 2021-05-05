import React from "react";

import * as Styled from "./EntryDate.styled";

interface EntryDateProps {
  day: string;
  month: string;
  year: string;
}

function EntryDate({ day, month, year }: EntryDateProps): React.ReactElement {
  return (
    <Styled.EntryDate>
      <p>{`${day}-${month}-${year}`}</p>
    </Styled.EntryDate>
  );
}

export default EntryDate;
