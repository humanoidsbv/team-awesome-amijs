import React from "react";

import * as Styled from "./EntryDate.styled";

interface EntryDateProps {
  date: string;
  weekday: string;
  month: string;
  displayToday: string;
}

function EntryDate({ date, weekday, month, displayToday }: EntryDateProps): React.ReactElement {
  return (
    <Styled.EntryDate>
      <p>{`${weekday} ${date}-${month} ${displayToday}`}</p>
    </Styled.EntryDate>
  );
}

export default EntryDate;
