import * as Types from "../types/types";

export async function postTeamMember(teamMember: Types.TeamMember): Promise<[any]> {
  const response = await fetch(`http://localhost:3004/team-members/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(teamMember),
  });
  return response.json();
}
