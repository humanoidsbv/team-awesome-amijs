import React from "react";

import TimeEntry from "./TimeEntry";
import EntryDate from "./EntryDate";
import { mockData } from "../../mockData";

import * as Styled from "./TimeEntries.styled";

function TimeEntries() {
  return (
    <Styled.TimeEntries>
      {mockData.timeEntries.map((timeEntry, index) => {
        const startTimeObject = new Date(timeEntry.startTimestamp);
        const startTime = startTimeObject.toLocaleTimeString("nl-NL", {
          hour: "2-digit",
          minute: "2-digit",
        });

        const endTimeObject = new Date(timeEntry.stopTimestamp);
        const endTime = endTimeObject.toLocaleTimeString("nl-NL", {
          hour: "2-digit",
          minute: "2-digit",
        });

        const dateObject = new Date(timeEntry.startTimestamp);
        const currentDate = dateObject.toLocaleDateString("nl-NL");

        const nextTimeEntry = mockData?.timeEntries[index + 1];
        const nextDateObject = new Date(nextTimeEntry?.startTimestamp);
        const nextDate = nextDateObject?.toLocaleDateString("nl-NL");

        const previousTimeEntry = mockData?.timeEntries[index - 1];
        const previousDateObject = new Date(previousTimeEntry?.startTimestamp);
        const previousDate = previousDateObject?.toLocaleDateString("nl-NL");

        if (index >= 1 && currentDate === previousDate) {
          return (
            <TimeEntry
              middleEntry={currentDate === nextDate}
              lastEntry={currentDate !== nextDate}
              client={timeEntry.client}
              startTime={startTime}
              endTime={endTime}
            />
          );
        }

        return (
          <>
            <EntryDate date={currentDate} />
            <TimeEntry
              firstEntry={currentDate === nextDate}
              client={timeEntry.client}
              startTime={startTime}
              endTime={endTime}
            />
          </>
        );
      })}
    </Styled.TimeEntries>
  );
}

export default TimeEntries;
