export async function deleteTimeEntry(id: number): Promise<[any]> {
  const response = await fetch(
    `https://my-json-server.typicode.com/humanoidsbv/team-awesome-amijs/time-entries/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.json();
}
