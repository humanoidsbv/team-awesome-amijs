import * as Types from "../types/types";

export async function postTeamMember(teamMember: Types.TeamMember): Promise<[any]> {
  const url =
    process.env.NEXT_PUBLIC_LOCAL_HOST ||
    "my-json-server.typicode.com/humanoidsbv/team-awesome-amijs";

  const response = await fetch(`http://${url}/team-members/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(teamMember),
  });
  return response.json();
}
