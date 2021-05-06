import React from "react";

import TimeEntry from "./TimeEntry";
import EntryDate from "./EntryDate";
import { mockData } from "../../mockData";

import * as Styled from "./TimeEntries.styled";

function TimeEntries() {
  return (
    <Styled.TimeEntries>
      {mockData.timeEntries.map((timeEntry, index) => {
        const timeObject = new Date(timeEntry.startTimestamp);
        const hours = timeObject.toLocaleTimeString("nl-NL", {
          hour: "2-digit",
          minute: "2-digit",
        });

        const timeObjectStop = new Date(timeEntry.stopTimestamp);
        const hoursStop = timeObjectStop.toLocaleTimeString("nl-NL", {
          hour: "2-digit",
          minute: "2-digit",
        });

        const dateObject = new Date(timeEntry.startTimestamp);
        const date = dateObject.toLocaleDateString("nl-NL");

        const nextTimeEntry = mockData?.timeEntries[index + 1];
        const nextDateObject = new Date(nextTimeEntry?.startTimestamp);
        const nextDate = nextDateObject?.toLocaleDateString("nl-NL");

        const previousTimeEntry = mockData?.timeEntries[index - 1];
        const previousDateObject = new Date(previousTimeEntry?.startTimestamp);
        const previousDate = previousDateObject?.toLocaleDateString("nl-NL");

        if (index >= 1 && date === previousDate) {
          return (
            <TimeEntry
              middleEntry={date === nextDate}
              lastEntry={date !== nextDate}
              client={timeEntry.client}
              startTime={hours}
              endTime={hoursStop}
            />
          );
        }

        return (
          <>
            <EntryDate date={date} />
            <TimeEntry
              firstEntry={date === nextDate}
              client={timeEntry.client}
              startTime={hours}
              endTime={hoursStop}
            />
          </>
        );
      })}
    </Styled.TimeEntries>
  );
}

export default TimeEntries;
