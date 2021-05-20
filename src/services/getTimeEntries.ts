import * as Types from "../types/types";

export async function getTimeEntries(): Promise<[Types.TimeEntry]> {
  const response = await fetch(
    "https://my-json-server.typicode.com/humanoidsbv/team-awesome-amijs/time-entries/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.json();
}
