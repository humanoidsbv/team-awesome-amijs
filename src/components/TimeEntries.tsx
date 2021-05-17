import React, { useContext, useEffect } from "react";

import TimeEntry from "./TimeEntry";
import EntryDate from "./EntryDate";
import { deleteTimeEntry } from "../services/deleteTimeEntries";
import { StoreContext } from "../stores/StoreProvider";

import * as Styled from "./TimeEntries.styled";

interface TimeEntriesProps {
  updateTimeEntries: Function;
}

function TimeEntries({ updateTimeEntries }: TimeEntriesProps) {
  const state = useContext(StoreContext);
  const [timeEntries] = state.timeEntries;

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

        const today = new Date();
        const yesterday = new Date(today);

        yesterday.setDate(yesterday.getDate() - 1);

        const dateStringToday = today.toLocaleDateString("nl-NL");
        const dateStringYesterday = yesterday.toLocaleDateString("nl-NL");

        const dateObject = new Date(timeEntry.startTime);
        const currentDate = dateObject.toLocaleDateString("nl-NL");

        const nextTimeEntry = timeEntries?.[index + 1];
        const nextDateObject = new Date(nextTimeEntry?.startTime);
        const nextDate = nextDateObject?.toLocaleDateString("nl-NL");

        const previousTimeEntry = timeEntries?.[index - 1];
        const previousDateObject = new Date(previousTimeEntry?.startTime);
        const previousDate = previousDateObject?.toLocaleDateString("nl-NL");

        function isSameDay() {
          if (currentDate === dateStringToday) {
            return "(Today)";
          }

          if (currentDate === dateStringYesterday) {
            return "(Yesterday)";
          }

          return "";
        }

        if (index >= 1 && currentDate === previousDate) {
          return (
            <TimeEntry
              client={timeEntry.client}
              deleteTimeEntry={deleteEntry}
              endTime={endTime}
              id={timeEntry.id}
              key={timeEntry.id}
              lastEntry={currentDate !== nextDate}
              middleEntry={currentDate === nextDate}
              startTime={startTime}
            />
          );
        }

        return (
          <div key={timeEntry.id}>
            <EntryDate
              weekday={dateObject.toLocaleDateString("nl-NL", { weekday: "long" })}
              date={dateObject.toLocaleDateString("nl-NL", { day: "numeric" })}
              month={dateObject.toLocaleDateString("nl-NL", { month: "numeric" })}
              weekdayName={isSameDay()}
            />
            <TimeEntry
              client={timeEntry.client}
              deleteTimeEntry={deleteEntry}
              endTime={endTime}
              firstEntry={currentDate === nextDate}
              id={timeEntry.id}
              startTime={startTime}
            />
          </div>
        );
      })}
    </Styled.TimeEntries>
  );
}

export default TimeEntries;
