import * as Types from "../types/types";

export async function postTeamMember(teamMember: Types.TeamMember): Promise<[any]> {
  const url = process.env.NEXT_PUBLIC_LOCAL_HOST
    ? "http://localhost:3006"
    : "https://my-json-server.typicode.com/humanoidsbv/team-awesome-amijs";

  const response = await fetch(`${url}/team-members/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(teamMember),
  });
  return response.json();
}
