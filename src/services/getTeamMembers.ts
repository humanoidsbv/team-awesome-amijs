import * as Types from "../types/types";

export async function getTeamMembers(): Promise<[Types.TeamMember]> {
  const url =
    process.env.NEXT_PUBLIC_LOCAL_HOST ||
    "my-json-server.typicode.com/humanoidsbv/team-awesome-amijs";

  const response = await fetch(`http://${url}/team-members/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
