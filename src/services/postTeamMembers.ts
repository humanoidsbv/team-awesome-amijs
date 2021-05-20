import * as Types from "../types/types";

export async function postTeamMember(teamMember: Types.TeamMember): Promise<[any]> {
  const response = await fetch(
    `https://my-json-server.typicode.com/humanoidsbv/team-awesome-amijs/team-members/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamMember),
    },
  );
  return response.json();
}
