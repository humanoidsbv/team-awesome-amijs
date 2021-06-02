import { getTimeEntries } from "../getTimeEntries";

const mockedTimeEntries = [
  {
    client: "MijnING",
    id: 2,
    activity: "Bankieren",
    startTime: "2021-05-18T07:00:00.002Z",
    endTime: "2021-05-18T15:00:00.002Z",
  },
];

it("fetches TimeEntries from the server", () => {
  const mockJsonPromise = Promise.resolve(mockedTimeEntries);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  const unmockedFetch = global.fetch;
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  getTimeEntries();

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    "https://my-json-server.typicode.com/humanoidsbv/team-awesome-amijs/time-entries/",
    { headers: { "Content-Type": "application/json" }, method: "GET" },
  )((global.fetch = unmockedFetch));
});
