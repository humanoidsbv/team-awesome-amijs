import React, { useEffect } from "react";

import TimeEntry from "./TimeEntry";
import EntryDate from "./EntryDate";
// import { mockData } from "../../mockData";
import { getTimeEntries } from "../services/getTimeEntries";

import * as Styled from "./TimeEntries.styled";

function TimeEntries() {
  const [timeEntries, setTimeEntries] = React.useState([]);

  async function fetchTimeEntries() {
    setTimeEntries(await getTimeEntries());
  }

  async function deleteTimeEntry(id: number): Promise<[any]> {
    const response = await fetch(`http://localhost:3004/time-entries/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    fetchTimeEntries();
    return response.json();
  }

  useEffect(() => {
    fetchTimeEntries();
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
              deleteTimeEntry={deleteTimeEntry}
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
              id={timeEntry.id}
              deleteTimeEntry={deleteTimeEntry}
            />
          </>
        );
      })}
    </Styled.TimeEntries>
  );
}

export default TimeEntries;
