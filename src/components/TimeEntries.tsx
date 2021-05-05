import React from "react";

import TimeEntry from "./TimeEntry";
import EntryDate from "./EntryDate";

function TimeEntries() {
  return (
    <>
      <EntryDate />
      <TimeEntry>
        <p>Port of Rotterdam</p>
        <p>09.00 - 12.00</p>
      </TimeEntry>
      <EntryDate />
      <TimeEntry firstEntry>
        <p>Port of Rotterdam</p>
        <p>09.00 - 12.00</p>
      </TimeEntry>
      <TimeEntry lastEntry>
        <p>Port of Rotterdam</p>
        <p>09.00 - 12.00</p>
      </TimeEntry>
      <EntryDate />
      <TimeEntry firstEntry>
        <p>Port of Rotterdam</p>
        <p>09.00 - 12.00</p>
      </TimeEntry>
      <TimeEntry middleEntry>
        <p>Port of Rotterdam</p>
        <p>09.00 - 12.00</p>
      </TimeEntry>
      <TimeEntry lastEntry>
        <p>Port of Rotterdam</p>
        <p>09.00 - 12.00</p>
      </TimeEntry>
      <EntryDate />
      <TimeEntry>
        <p>Port of Rotterdam</p>
        <p>09.00 - 12.00</p>
      </TimeEntry>
    </>
  );
}

export default TimeEntries;
