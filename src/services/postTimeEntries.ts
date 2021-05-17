import * as Types from "../types/types";

export async function postTimeEntry(timeEntry: Types.TimeEntry): Promise<[any]> {
  const response = await fetch(`http://localhost:3004/time-entries/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(timeEntry),
  });
  return response.json();
}
