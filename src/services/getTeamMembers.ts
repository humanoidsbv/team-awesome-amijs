import * as Types from "../types/types";

export async function getTeamMembers(): Promise<[Types.TeamMember]> {
  const response = await fetch(
    "https://my-json-server.typicode.com/humanoidsbv/team-awesome-amijs/team-members/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.json();
}
