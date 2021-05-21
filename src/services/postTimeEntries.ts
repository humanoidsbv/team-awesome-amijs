import * as Types from "../types/types";

export async function postTimeEntry(timeEntry: Types.TimeEntry): Promise<[any]> {
  const url =
    process.env.NEXT_PUBLIC_LOCAL_HOST ||
    "my-json-server.typicode.com/humanoidsbv/team-awesome-amijs";

  const response = await fetch(`http://${url}/time-entries/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(timeEntry),
  });
  return response.json();
}
