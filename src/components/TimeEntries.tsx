import React, { useEffect } from "react";

import TimeEntry from "./TimeEntry";
import EntryDate from "./EntryDate";
import { deleteTimeEntry } from "../services/deleteTimeEntries";
import * as Types from "../types";

import * as Styled from "./TimeEntries.styled";

interface TimeEntriesProps {
  timeEntries: Types.TimeEntry[];
  updateTimeEntries: Function;
}

function TimeEntries({ timeEntries, updateTimeEntries }: TimeEntriesProps) {
  async function deleteEntry(id: number) {
    deleteTimeEntry(id);
    updateTimeEntries();
  }

  useEffect(() => {
    updateTimeEntries();
  }, []);

  return (
    <Styled.TimeEntries>
      {timeEntries.map((timeEntry, index) => {
        const startTimeObject = new Date(timeEntry.startTime);
        const startTime = startTimeObject.toLocaleTimeString("nl-NL", {
          hour: "2-digit",
          minute: "2-digit",
        });

        const endTimeObject = new Date(timeEntry.endTime);
        const endTime = endTimeObject.toLocaleTimeString("nl-NL", {
          hour: "2-digit",
          minute: "2-digit",
        });

        const dateObject = new Date(timeEntry.startTime);
        const currentDate = dateObject.toLocaleDateString("nl-NL");

        const nextTimeEntry = timeEntries?.[index + 1];
        const nextDateObject = new Date(nextTimeEntry?.startTime);
        const nextDate = nextDateObject?.toLocaleDateString("nl-NL");

        const previousTimeEntry = timeEntries?.[index - 1];
        const previousDateObject = new Date(previousTimeEntry?.startTime);
        const previousDate = previousDateObject?.toLocaleDateString("nl-NL");

        if (index >= 1 && currentDate === previousDate) {
          return (
            <TimeEntry
              middleEntry={currentDate === nextDate}
              lastEntry={currentDate !== nextDate}
              client={timeEntry.client}
              startTime={startTime}
              endTime={endTime}
              id={timeEntry.id}
              deleteTimeEntry={deleteEntry}
              key={timeEntry.id}
            />
          );
        }

        return (
          <div key={timeEntry.id}>
            <EntryDate date={currentDate} />
            <TimeEntry
              firstEntry={currentDate === nextDate}
              client={timeEntry.client}
              startTime={startTime}
              endTime={endTime}
              id={timeEntry.id}
              deleteTimeEntry={deleteEntry}
            />
          </div>
        );
      })}
    </Styled.TimeEntries>
  );
}

export default TimeEntries;
