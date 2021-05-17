import React from "react";

import * as Styled from "./EntryDate.styled";

interface EntryDateProps {
  date: string;
  weekday: string;
  month: string;
  weekdayName: string;
}

function EntryDate({ date, weekday, month, weekdayName }: EntryDateProps): React.ReactElement {
  return (
    <Styled.EntryDate>
      <p>{`${weekday} ${date}-${month} ${weekdayName}`}</p>
    </Styled.EntryDate>
  );
}

export default EntryDate;
