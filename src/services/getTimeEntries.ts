import * as Types from "../types/types";

export async function getTimeEntries(): Promise<[Types.TimeEntry]> {
  const response = await fetch("http://localhost:3004/time-entries", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
