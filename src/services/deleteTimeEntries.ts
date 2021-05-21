export async function deleteTimeEntry(id: number): Promise<[any]> {
  const url =
    process.env.NEXT_PUBLIC_LOCAL_HOST ||
    "my-json-server.typicode.com/humanoidsbv/team-awesome-amijs";

  const response = await fetch(`http://${url}/time-entries/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
