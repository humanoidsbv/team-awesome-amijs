import * as Types from "../types/types";

export async function postTimeEntry(timeEntry: Types.TimeEntry): Promise<[any]> {
  const response = await fetch(
    `https://my-json-server.typicode.com/humanoidsbv/team-awesome-amijs/time-entries/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(timeEntry),
    },
  );
  return response.json();
}
