import React from "react";

import * as Styled from "./TimeEntry.styled";

interface TimeEntryProps {
  firstEntry?: boolean;
  middleEntry?: boolean;
  lastEntry?: boolean;

  startTime: string;
  endTime: string;
  client: string;
}

function TimeEntry({
  firstEntry,
  middleEntry,
  lastEntry,
  startTime,
  endTime,
  client,
}: TimeEntryProps): React.ReactElement {
  return (
    <Styled.Entry firstEntry={firstEntry} middleEntry={middleEntry} lastEntry={lastEntry}>
      <p>{client}</p>
      <p>{`${startTime} - ${endTime}`}</p>
    </Styled.Entry>
  );
}

export default TimeEntry;
