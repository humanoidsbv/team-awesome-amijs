import React from "react";

import TimeEntry from "./TimeEntry";
import EntryDate from "./EntryDate";

function TimeEntries() {
  return (
    <>
      <EntryDate day="29" month="07" year="2021" />
      <TimeEntry startTime="09:00" endTime="17:00" client="Port of Rotterdam" />

      <EntryDate day="28" month="07" year="2021" />
      <TimeEntry firstEntry startTime="09:00" endTime="12:00" client="Port of Rotterdam" />
      <TimeEntry lastEntry startTime="13:00" endTime="18:00" client="HikeOne" />

      <EntryDate day="27" month="07" year="2021" />
      <TimeEntry firstEntry startTime="09:00" endTime="12:00" client="Port of Rotterdam" />
      <TimeEntry middleEntry startTime="13:00" endTime="15:00" client="Humanoids" />
      <TimeEntry lastEntry startTime="15:00" endTime="18:00" client="HikeOne" />

      <EntryDate day="26" month="07" year="2021" />
      <TimeEntry startTime="09:00" endTime="17:00" client="Port of Rotterdam" />
    </>
  );
}

export default TimeEntries;
