import React from "react";

import TimeEntry from "./TimeEntry";
import EntryDate from "./EntryDate";
import * as Types from "../../types/types";

import * as Styled from "./TimeEntries.styled";

interface TimeEntriesProps {
  timeEntries: Types.TimeEntry[];
  deleteEntry: Function;
  searchInput: string;
}

const today = new Date();
const yesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);

function isSameDay(currentDate) {
  const dateStringToday = today.toLocaleDateString("nl-NL");
  const dateStringYesterday = yesterday.toLocaleDateString("nl-NL");

  if (currentDate === dateStringToday) {
    return "(Today)";
  }

  if (currentDate === dateStringYesterday) {
    return "(Yesterday)";
  }

  return "";
}

function TimeEntries({ timeEntries, deleteEntry, searchInput }: TimeEntriesProps) {
  return (
    <Styled.TimeEntries>
      {timeEntries
        .filter((timeEntry) => timeEntry.client.toLowerCase().includes(searchInput.toLowerCase()))
        .map((timeEntry, index) => {
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

          const timeEntryDate = new Date(timeEntry.startTime);
          const currentDate = timeEntryDate.toLocaleDateString("nl-NL");

          const nextTimeEntry = timeEntries?.[index + 1];
          const nextDateObject = new Date(nextTimeEntry?.startTime);
          const nextDate = nextDateObject?.toLocaleDateString("nl-NL");

          const previousTimeEntry = timeEntries?.[index - 1];
          const previousDateObject = new Date(previousTimeEntry?.startTime);
          const previousDate = previousDateObject?.toLocaleDateString("nl-NL");

          const firstOrMiddleEntry = currentDate === nextDate;
          const lastEntry = currentDate !== nextDate;

          if (index >= 1 && currentDate === previousDate) {
            return (
              <TimeEntry
                client={timeEntry.client}
                deleteTimeEntry={deleteEntry}
                endTime={endTime}
                id={timeEntry.id}
                key={timeEntry.id}
                lastEntry={lastEntry}
                middleEntry={firstOrMiddleEntry}
                startTime={startTime}
              />
            );
          }

          return (
            <React.Fragment key={timeEntry.id}>
              <EntryDate
                weekday={timeEntryDate.toLocaleDateString("nl-NL", { weekday: "long" })}
                date={timeEntryDate.toLocaleDateString("nl-NL", { day: "numeric" })}
                month={timeEntryDate.toLocaleDateString("nl-NL", { month: "numeric" })}
                weekdayName={isSameDay(currentDate)}
              />
              <TimeEntry
                client={timeEntry.client}
                deleteTimeEntry={deleteEntry}
                endTime={endTime}
                firstEntry={firstOrMiddleEntry}
                id={timeEntry.id}
                startTime={startTime}
              />
            </React.Fragment>
          );
        })}
    </Styled.TimeEntries>
  );
}

export default TimeEntries;
